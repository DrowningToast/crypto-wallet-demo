import { useConfig, useReadContract } from "wagmi"
import { useWallet } from "./hooks"
import { useCallback, useMemo } from "react";
import { mainnet, sepolia } from "wagmi/chains";
import { aggregatorV3Abi } from './abi'

type Addresses = Record<number, `0x${string}`>

const addresses : Addresses = {
    [mainnet.id] : '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    [sepolia.id] : '0x694AA1769357215DE4FAC081bf1f309aDC325306'
}

const useAggregator = () => {
    
    const {isConnected, chain} = useWallet();
    
    const currentAggregator = useMemo(
    () => {
        if (!isConnected || !chain) return; 
        const address = addresses[chain?.id]
        return address;
    }, [isConnected, chain])

    const getAggregator = useCallback( (chainId : number | undefined = chain?.id) => {
        return addresses[chainId ?? Infinity]
    }, [chain?.id])

    const {data: latestRound, isLoading: latestRoundLoading} = useReadContract({
        abi : aggregatorV3Abi,
        address : getAggregator(),
        functionName: "latestRoundData"
    })

    const {data: _decimals, isLoading: decimalsLoading} = useReadContract({
        abi :aggregatorV3Abi,
        address : getAggregator(),
        functionName: "decimals"
    })

    const raw_price = useMemo( () => !latestRoundLoading && latestRound ? latestRound[1] : undefined, [latestRound, latestRoundLoading])
    const decimals = useMemo( () => !decimalsLoading && _decimals ? _decimals : undefined, [decimalsLoading, _decimals])

    return {
        getAggregator,
        currentAggregator,
        chain,
        price : raw_price && decimals ? Number(raw_price) / ( 10 ** Number(decimals)) : undefined,
        isLoading : latestRoundLoading && decimalsLoading
    }

}

export default useAggregator
