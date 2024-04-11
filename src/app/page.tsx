'use client'

import { useAccount, useConnect } from "wagmi"
import { config } from "../config"
import { metaMask } from "wagmi/connectors";
import { useWallet } from "./hooks";

function Example() {

    const { connect, isConnected, disconnect, address } = useWallet()

    return (
        <div className="flex flex-col gap-y-2 items-center p-8">
            <h1 className="text-2xl font-semibold">
                Wallet Manager
            </h1>
            <div>
                {
                    isConnected ? 
                        <span>
                            Wallet Address : {address}
                        </span>
                        : 
                        <button className="border-white border-2 p-2 rounded-xl" onClick={ () => connect()} >
                            🔌 Connect with MetaMask
                        </button>
                }
            </div>
            <div>
                {
                    isConnected ?
                        <div>
                            <button className="border-white border-2 p-1 rounded-xl" onClick={ () => disconnect() }>
                                ❌ Disconnect my wallet
                            </button>
                        </div> 
                        :
                        <span>
                            ⚠️  Please connect your wallet first!
                        </span>
                }
            </div>

        </div>
    )
}

export default Example
