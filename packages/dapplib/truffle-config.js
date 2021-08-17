require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth soccer million guess argue sun supply'; 
let testAccounts = [
"0xac8ccd7a2ffea5dd6fe23f73764c91dfdfd628526038ec44f9797c8f118e5891",
"0xaf1c70c62d5609c027b50010ae2460197a20a0301734784c72a1bdec30e122de",
"0xaa030360f54c8b84aaf467af009529682e1c7e0d8f9b9ddaeeade4438f3ec3d9",
"0x857795359cfdb601616e92ef446beabf922c15c26ae9dea1d18bc70b4366fda4",
"0x571d1a0e4c0282a343e435a26940bdb439fd58fffcf50b3bc6be7385570ede09",
"0xb6d998767de1b9ceac2bf97e5dc3cc8fc18ce094d02d96ec547fcebd710835e8",
"0xddca88db8320b93ef1dac1aed33b91ca13af660d300451dfeb8c137e2db39f2f",
"0x91786545eb9b111a57737b45c1bb22b9dcf1cb543c64e3f2e5db3913d08335ab",
"0x1ce088b2e96261806339f6b7f6aa5485475bdfb980d104db97abf7a71703a810",
"0x92413fb2b5dc8ab1d4009a95a2d4a77b6e1e36d9de85e2a12708db50ff0f0129"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


