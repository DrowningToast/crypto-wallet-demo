export const aggregatorV3Abi = [
    {
        type : 'function',
        name : 'getChainlinkDataFeedLatestAnswer',
        stateMutability : 'view',
        inputs : [],
        outputs : [{ type : 'uint8' },{ type : 'int256' }]
    },
    {
        type : 'function',
        name : 'decimals',
        stateMutability : 'view',
        inputs : [],
        outputs : [{type : 'uint8'}]
    },
    {
        type : 'function',
        name : 'latestRoundData',
        stateMutability : 'view',
        inputs : [],
        outputs : [{type : 'uint80'}, {type : 'int256'}, {type : 'uint256'}, {type : 'uint256'}, {type : 'uint80'}]
    }
] as const
