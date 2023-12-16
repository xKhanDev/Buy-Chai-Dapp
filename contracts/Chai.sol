// SPDX-License-Identifier: MIT
pragma solidity >0.5.0 <0.9.0;

contract chai{
    address payable owner;
    constructor(){
        owner = payable(msg.sender);
    }

    struct Memo {
        string name;
        string massage;
        uint256 timestamp;
        address from;
    }

    Memo[] memos;

    function buyChai(string memory name, string memory massage) public payable {
        require(msg.value > 0, "please pay greatoe than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name,massage,block.timestamp, msg.sender));
    }

    function getMemos() view public returns(Memo[] memory){
        return memos;
    }

}
