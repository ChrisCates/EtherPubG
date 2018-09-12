pragma solidity ^0.4.24;

import "./Ownable.sol";
import "./SafeMath.sol";

contract Pubg is Ownable {

    using SafeMath for uint256;

    event ItemPurchased(address indexed buyer, address indexed seller, string item, uint256 amtInWei);

    function PurchaseItem(address seller, string item) public payable {
        uint256 weiAmt = msg.value;

        seller.transfer(weiAmt);

        emit ItemPurchased(msg.sender, seller, item, weiAmt);
    }

}