pragma solidity ^0.5.0;

// import 'contracts/SquareVerifier.sol';
// DONE 
import "contracts/ERC721Mintable.sol";
import "contracts/SquareVerifier.sol";



// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
// DONE 
 contract SolnSquareVerifier is CustomERC721Token {
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
   
   
    }

    
