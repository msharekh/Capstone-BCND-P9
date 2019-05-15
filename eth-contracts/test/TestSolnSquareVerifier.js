var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    let correct_proofJSON = {
        "proof": {
            "A": [
                "0x1e1bfd69290ca65014a42a355e22106a93c7d24e44c7d2d0d4a9a61d19421d9e",
                "0x0b69cb41c92021ebd58e91d44aa948be20e6082ce3488f171d7ad9961cb915e0"
            ],
            "A_p": [
                "0x13ade55dfffd169239108531db4d99a40fcdf0c84ce1835762b52137c68a8561",
                "0x013726f53eb5d5294d8735b12ba6d430f6c70be55adc3079cac5b00f983f5f31"
            ],
            "B": [
                [
                    "0x22763b6a94c7f07f4c1e05dfe550663fd0f24f461c63e52a373c84cb4de69461",
                    "0x201d79652e2acb13995ad0b2d3c89705a7baf5030a8b8f6f05e8363834694114"
                ],
                [
                    "0x11c3142c7b3e636060d02220e25fe8c92d6b565630a9a2c5b8c6e4bf67c952cd",
                    "0x0196d108128fb1ab2900eb40e8f70146c2afd6a4e06b1373744d10b433439371"
                ]
            ],
            "B_p": [
                "0x1aa86996c372e7d522ec93114d2b72ed9f293d5fc8c7b9fa546bdff944c87e12",
                "0x0527e139540cc1fa56e08a01aeae93ed2e59fa79984ea91e4d27d0904dc69f81"
            ],
            "C": [
                "0x0e630696be49ca2639513c1b23dc403e4bc6b3e7b61b319c0d802f3a422c239b",
                "0x2963c7e573e2ebb78b413135a7a405d11a1a57c67a54a161b5f523c57c2b4a8f"
            ],
            "C_p": [
                "0x1bb9eb065890b49e6249092f515a8c85e6495e13c392bacaa5e1e94b53a0d865",
                "0x061066040195c9af2cc9e38e37e95170a4d7107e2e1b197d9ca502781bf4fbb9"
            ],
            "H": [
                "0x0000e119a47755cd8c04e2cbaf92c40fd1e859a6dee1a0e13c57d3cd30bcd1d5",
                "0x217ace7e4004c01f725c8ec474cb09e094109e61779b7295c14ba6f94f2558bb"
            ],
            "K": [
                "0x10cbdf0a66a7c2562032dbb0b9c3ee566d4dda32ff1aba9cf11f8d5b6ae9639c",
                "0x16e4269bac36fc6326b436b6b3716fa73a82aca158bb5df30ae8c8c06ba7154c"
            ]
        },
        "input": [
            9,
            1
        ]
    };

    describe('Test solution and minted', function () {
        beforeEach(async function () {
            this.contract = await SolnSquareVerifier.new({ from: account_one });

            console.log('START....');

        })

        // Test if a new solution can be added for contract - SolnSquareVerifier

        it('(9) .... Test if a new solution can be added for contract - SolnSquareVerifier', async function () {

            let a = correct_proofJSON.proof.A;
            let a_p = correct_proofJSON.proof.A_p;

            let b = correct_proofJSON.proof.B;
            let b_p = correct_proofJSON.proof.B_p;

            let c = correct_proofJSON.proof.C;
            let c_p = correct_proofJSON.proof.C_p;

            let h = correct_proofJSON.proof.H;
            let k = correct_proofJSON.proof.K;

            let input = correct_proofJSON.input;

            // address owner, uint256 tokenId, string memory tokenURI
            let result = await this.contract.mintNFT.call(a, a_p, b, b_p, c, c_p, h, k, input, owner, tokenId, tokenURI)
            console.log('result adding solution', ':	', result);


        })

    });
})


// Test if an ERC721 token can be minted for contract - SolnSquareVerifier


