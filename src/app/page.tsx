'use client'

import { useWallet } from "./hooks";
import PriceDisplay from "./PriceDisplay";

function Example() {

    const { connect, isConnected, disconnect, address, chain } = useWallet()
    

    return (
        <div className="flex flex-col gap-y-4 items-center p-8">
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
                        <div className="flex flex-col items-center gap-y-2">
                            <span>
                                Currently on <span className="font-semibold">{chain?.name ?? "Unknown chain"}</span>
                            </span>
                            <PriceDisplay />
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
