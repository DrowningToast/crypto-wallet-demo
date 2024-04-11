import { useMemo } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const useWallet = () => {
    
    const { connect } = useConnect();   
    const { address } = useAccount();
    const isConnected = useMemo( () => !!address, [address]);
    const {disconnect} = useDisconnect();

    return {
        connect,
        address,
        isConnected,
        disconnect
    }
}

export {useWallet}
