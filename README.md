# Udacity Blockchain Capstone


In this project, we build a decentralized housing product
This application is build usijng solidity, Truffle , web3 , openzepline

## Download project

```
git clone https://github.com/msharekh/Capstone-BCND-P9.git

```

## Installation

#### Install project dependencies:

```
$ npm install 

```

## Deployment Info

#### Deployed Address on the Rinkeby Network: 0xc7dAdA8039B4D27Ed69cAd26d5845Aa8C88c1E86 

#### Deployed openSea : https://rinkeby.opensea.io/get-listed/step-three/0xc7dAdA8039B4D27Ed69cAd26d5845Aa8C88c1E86

#### ERC-721  


## Tests:

#### Test ERC721Mintable

```
$ truffle test test/TestERC721Mintable.js 

```
#### expected output
```
Contract: TestERC721Mintable
    match erc721 spec
START....
account_one :	 0x68F48429F451934fD1032ba63be0f72eB10424EB
total supplay :	 10
      ✓ (1) .... should return total supply (429ms)
START....
balance :	 10
      ✓ (2) .... should get token balance (406ms)
START....
tokenURI :	 https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2
      ✓ (3) .... should return token uri (206ms)
START....
oldOwner :	 0x68F48429F451934fD1032ba63be0f72eB10424EB
newOwner :	 0x18495D2af425D56005812644136Bf68282188aEA
      ✓ (4) .... should transfer token from one owner to another (953ms)
    have ownership properties
mint result :	 false
      ✓ (5) .... should fail when minting when address is not contract owner (8030ms)
owner :	 0x68F48429F451934fD1032ba63be0f72eB10424EB
      ✓ (6) .... should return contract owner (1032ms)


  6 passing
```

#### Test SquareVerifier

```
$ truffle test test/TestSquareVerifier.js 

```
#### expected output
```
Contract: TestSquareVerifier
    Test verification
START....
correct proof...
[ '0x1e1bfd69290ca65014a42a355e22106a93c7d24e44c7d2d0d4a9a61d19421d9e',
  '0x0b69cb41c92021ebd58e91d44aa948be20e6082ce3488f171d7ad9961cb915e0' ]
[ '0x0e630696be49ca2639513c1b23dc403e4bc6b3e7b61b319c0d802f3a422c239b',
  '0x2963c7e573e2ebb78b413135a7a405d11a1a57c67a54a161b5f523c57c2b4a8f' ]
input :	 [ 9, 1 ]
correct result :	 true
      ✓ (7) .... Test verification with correct proof (36916ms)
START....
incorrect result :	 false
      ✓ (8) .... Test verification with incorrect proof (14240ms)


  2 passing
```

#### Test SolnSquareVerifier

```
$ truffle test test/TestSolnSquareVerifier.js 

```
#### expected output
```
 Contract: TestSolnSquareVerifier
    Test solution and minted
START....
result adding solution :	 true
      ✓ (9) .... Test if a new solution can be added for contract - SolnSquareVerifier (1122ms)
START....
result ERC721 token :	 true
      ✓ (10) .... Test if an ERC721 token can be minted for contract - SolnSquareVerifier (477ms)


  2 passing
```

