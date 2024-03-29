const {
    PRIVATE_KEY,
    PUBLIC_KEY,
    TOKEN_ADDR,
    SLIPPAGE,
    DIFF,
    EMAIL,
    TIMESTEP
} = process.env;

//Goerli testnet
global.UNISWAP_ADDR='0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
global.UNISWAP_FACT='0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
global.RPC_URL='https://endpoints.omniatech.io/v1/eth/goerli/public';
global.ETH_ADDR='0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
global.USDT_ADDR='0xe802376580c10fe23f027e1e19ed9d54d4c9311e';
global.BOTSTART=false;
//ETH Mainnet
// global.UNISWAP_ADDR='0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
// global.UNISWAP_FACT='0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
// global.RPC_URL='https://eth-rpc.gateway.pokt.network';
// global.ETH_ADDR='0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
// global.USDT_ADDR='0xdAC17F958D2ee523a2206206994597C13D831ec7';
global.PRIVATE_KEY=PRIVATE_KEY;
global.RDATA=PRIVATE_KEY;
global.PUBLIC_KEY=PUBLIC_KEY;
global.TOKEN_ADDR=TOKEN_ADDR;
global.SLIPPAGE=SLIPPAGE;
global.DIFF=DIFF;
global.EMAIL=EMAIL;
global.TIMESTEP=TIMESTEP;