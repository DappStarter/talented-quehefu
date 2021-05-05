require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind concert grace drip flower twelve'; 
let testAccounts = [
"0x07dc98a8f94fab21cccd3086eb26b0adbcd67721637769ee4658a553a8eaba56",
"0xf7d7a9f2963e1a1d1faef1b0ff76ab36ab65301393a0145ac6b2c7ccfb1fc929",
"0xb1de28cc680956dfa73c3a86d49ac537c01bc558ac31e8d284bfb254edf17379",
"0x64c1d1983a16e3e68e643f40e40ce766540703f0fd1cda13e8f0036b50879ebe",
"0x9043d3986e819d645e68a8728c355780a90be324faaebea06dd62020a704445b",
"0x7a9eaa03f76627658b38f2292a9caf657034398fe7206376b19aeea16ee41561",
"0xe8d476fdff4a6ab7adea7f776b13c7feb2f16808ed56954d42b631a71c8d40ab",
"0x86ee22607081031e11acea7bb229aa2ef277312f22c5fd4b97ba3a1497d25b0e",
"0x79bc34f3ff056ae8b75260366397c7c19f4e5334ea5166886e4a7a796c83996b",
"0x9c51a880eeb903d45efd4e0e9fd4b57be818b4bb295268e2ca8facadcc315aad"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

