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
            // function mint(address to, uint256 tokenId, string memory tokenURI) public  onlyOwner() returns (bool) {
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
        it('(3) .... should return token uri', async function () {
            let tokenURI = await this.contract.tokenURI(2);
            console.log('tokenURI', ':	', tokenURI);

            assert(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2", 'tokenURI is not correct')
        })

        it('(4) .... should transfer token from one owner to another', async function () {
            // function transferFrom(address from, address to, uint256 tokenId) public {

            let tokenId = 2;
            let oldOwner = await this.contract.ownerOf(tokenId);
            console.log('oldOwner', ':	', oldOwner);

            await this.contract.transferFrom(account_one, account_two, tokenId)
            // ownerOf(uint256 tokenId) public view returns (address)
            let newOwner = await this.contract.ownerOf(tokenId);
            console.log('newOwner', ':	', newOwner);

            assert(newOwner, account_two, 'Transferring is not complete')
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await CustomERC721Token.new({ from: account_one });
        })

        it('(5) .... should fail when minting when address is not contract owner', async function () {

        })

        it('(6) .... should return contract owner', async function () {

        })

    });
})