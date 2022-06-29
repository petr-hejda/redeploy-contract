const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Redeploy", function (accounts) {
	let factory, item;

	_deployItem = async function () {
		const tx = await factory.deployItem();
		const txReceipt = await tx.wait();
		const event = txReceipt.events?.filter((x) => {return x.event == "ItemDeployed"})[0];
		const itemAddress = event.args[0];
		console.log("Item deployed to address %s", itemAddress);
		const Item = await ethers.getContractFactory("Item");
		item = Item.attach(itemAddress);
	}

	it("deploys the Factory", async function () {
		const Factory = await ethers.getContractFactory("Factory");
		factory = await Factory.deploy();
		await factory.deployed();
	});

	it("deploys the Item", async function () {
		await _deployItem();
	});

	it("destroys the Item", async function () {
		await factory.destroyItem();
	});

	it("redeploys the Item", async function () {
		await _deployItem();
	});

});
