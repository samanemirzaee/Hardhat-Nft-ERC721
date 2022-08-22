// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract woasERC721 is ERC721URIStorage,Ownable  {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter; 
    constructor(string memory name_,string memory symbol_)ERC721(name_,symbol_) {}
    
    function mint(string memory tokenURI)public onlyOwner returns (uint256) {
        uint256 tokenId=_tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(_msgSender(),tokenId);
        _setTokenURI(tokenId,tokenURI);
        return tokenId;
    }
}

