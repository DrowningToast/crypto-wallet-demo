import { useCallback, useMemo } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

const useWallet = () => {
    
    const { connect: _connect } = useConnect();   
    const connect = useCallback( () => _connect({ connector : injected()}))
    const { address, chain } = useAccount();
    const isConnected = useMemo( () => !!address, [address]);
    const {disconnect} = useDisconnect();

    console.log(chain?.name)

    return {
        connect,
        address,
        isConnected,
        disconnect
    }
}

export {useWallet}
