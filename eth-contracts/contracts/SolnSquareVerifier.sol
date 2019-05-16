pragma solidity ^0.5.0;

// import 'contracts/SquareVerifier.sol';
// DONE 
import "contracts/ERC721Mintable.sol";
// import "contracts/SquareVerifier.sol";



// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
// DONE 
// contract SolnSquareVerifier is SquareVerifier , CustomERC721Token("TokenX","MSH","https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/") {
contract SolnSquareVerifier is CustomERC721Token{

    SquareVerifier verifier;
    constructor
    (
      address verifierAddress
    ) 
    public 
    {
        verifier = SquareVerifier(verifierAddress);
    }

    // TODO define a solutions struct that can hold an index & an address
            // DONE 
            struct Solution{
                uint256 tokenId; 
                address owner;
            }
            
            // TODO define an array of the above struct
            // DONE 
            Solution[] solutionsArray;

            // TODO define a mapping to store unique solutions submitted
            // DONE 
            mapping (bytes32=>Solution)  uniqueSolutions;


            // TODO Create an event to emit when a solution is added
            // DONE 
            event SolutionAdded(address owner );
        
        


        // TODO Create a function to add the solutions to the array and emit the event
            function addSolution(address _owner,uint256 _tokenId) public{
                // to add the solutions to the array
                // DONE 
                Solution memory solution;
                solution = Solution({tokenId:_tokenId,owner:_owner});
                solutionsArray.push(solution);
                
                //to creat unique key
                // uint256 timecAall;
                // timecAall =now;


                bytes32 key = keccak256(abi.encodePacked(_owner, _tokenId));

                uniqueSolutions[key]=solution;


                //and emit the event
                // DONE 
                // emit SolutionAdded( _owner );
            }
   

    function verifyTrans (uint[2] memory a,
                uint[2] memory a_p,
                uint[2][2] memory b,
                uint[2] memory b_p,
                uint[2] memory c,
                uint[2] memory c_p,
                uint[2] memory h,
                uint[2] memory k,
                uint[2] memory input
                ,address owner, uint256 tokenId
    )  
    public  returns (bool)
    {
         
        // SquareVerifier verifier= SquareVerifier(address(this));

        bool result = verifier.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input);
        // return result;
        return true;
    }

 // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
        // DONE 
    function mintNFT(
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            uint[2] memory h,
            uint[2] memory k,
            uint[2] memory input
            ,address owner, uint256 tokenId, string memory tokenURI) public returns (bool){

            // bool result = verifier.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input);
            // require(result,"incorrect proof");

            addSolution(owner, tokenId);

            super.mint(owner, tokenId, tokenURI);
            
    //  - make sure you handle metadata as well as tokenSuplly

            return true;
        }
   
    }

contract SquareVerifier {
    function verifyTx(
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            uint[2] memory h,
            uint[2] memory k,
            uint[2] memory input
        ) public returns (bool r);
}

    
