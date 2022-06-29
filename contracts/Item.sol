// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Item {
	function destroy() public {
		selfdestruct(payable(msg.sender));
	}
}
