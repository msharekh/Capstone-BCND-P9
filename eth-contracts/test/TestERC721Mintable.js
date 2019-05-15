var CustomERC721Token = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await CustomERC721Token.new({ from: account_one });

            console.log('START....');
            // TODO: mint multiple tokens

            let tokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
            // function mint(address to, uint256 tokenId) public returns (bool) {
            // let owner = await this.contract.getOwner()
            // console.log('owner', ':	', owner);

            for (let i = 0; i < 10; i++) {
                await this.contract.mint(account_one, i, tokenURI)
            }
        })

        it('(1) .... should return total supply', async function () {
            let totalSupply = await this.contract.totalSupply();
            console.log('account_one', ':	', account_one);
            console.log('total supplay', ':	', totalSupply.toNumber());

            assert(totalSupply, 10, 'total supply is not 10')
        })

        it('(2) .... should get token balance', async function () {
            let balance = await this.contract.balanceOf(account_one);
            console.log('balance', ':	', balance.toNumber());

            assert(balance, 10, 'balance is not 10')
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {

        })

        // it('should transfer token from one owner to another', async function () {

        // })
    });

    describe('have ownership properties', function () {
        // beforeEach(async function () {
        //     this.contract = await CustomERC721Token.new({ from: account_one });
        // })

        // it('should fail when minting when address is not contract owner', async function () {

        // })

        // it('should return contract owner', async function () {

        // })

    });
})