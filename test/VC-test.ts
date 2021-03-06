import {SignerWithAddress} from 'hardhat-deploy-ethers/dist/src/signer-with-address';

import {expect} from "chai";
import {ethers} from "hardhat";

describe("VCT-Market", function () {
    let operator: SignerWithAddress;
    let minter: SignerWithAddress;
    let bob: SignerWithAddress;
    let carol: SignerWithAddress;
    let david: SignerWithAddress;

  before('provider & accounts setting', async () => {
    // @ts-ignore
    [operator, minter, bob, carol, david] = await ethers.getSigners();
  });
});
