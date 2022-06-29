// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "./Item.sol";

contract Factory {
	Item item;

	event ItemDeployed(address);

	function deployItem() public {
		item = new Item{salt: "foo"}();
		emit ItemDeployed(address(item));
	}

	function destroyItem() public {
		item.destroy();
	}
}
