import { Register, useReadContract } from "wagmi"
import { aggregatorV3Abi } from "./abi"
import { FC, useMemo } from "react"
import useAggregator from "./useAggregator"

const PriceDisplay: FC = () => {

    const { price, chain, isLoading} = useAggregator()

    if (!chain) return "Error: current chain not found"

    return (
        <div className="flex flex-col gap-y-1">
            {
                !isLoading ? 
                 <span>
                Current price of {chain.name} is {price?.toFixed(2)} USD.
            </span>
                :
                <span>
                    loading...
                </span>
            }
           
        </div>
    )
}

export default PriceDisplay
