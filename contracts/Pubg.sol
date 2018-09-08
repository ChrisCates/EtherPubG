pragma experimental ABIEncoderV2;

import "./Ownable.sol";
import "./SafeMath.sol";

contract Pubg is Ownable {

    using SafeMath for uint256;

    mapping (address => mapping (string => uint256)) private _items;
    mapping (address => string[]) private _itemsIndex;

    function listItem(string item, uint256 value) public {
        require(_items[msg.sender][item] == uint256(0));
        
        uint256 indexLen = _itemsIndex[msg.sender].length;

        _itemsIndex[msg.sender][indexLen] = item;

        _items[msg.sender][item] = value;
    }

    function viewItems(address seller) public view returns(string[] items, uint256[] prices) {
        string[] memory sellersItemNames;
        uint256[] memory sellersItemPrices;

        for (uint256 i = 0; i < _itemsIndex[seller].length; i++) {
            string itemName = _itemsIndex[seller][i];
            uint256 itemPrice = _items[seller][itemName];

            sellersItemNames[i] = itemName;
            sellersItemPrices[i] = itemPrice;
        }

        return (sellersItemNames, sellersItemPrices);
    }

    function purchaseItem(address seller, string item, uint256 itemIndex) public payable {
        uint256 weiAmt = msg.value;
        
        require(weiAmt == _items[seller][item]);

        seller.transfer(weiAmt);

        delete _items[seller][item];
        delete _itemsIndex[msg.sender][itemIndex];
    }

}