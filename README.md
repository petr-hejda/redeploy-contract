# Description

Example implementation of destructing a Solidity contract and redeploying it to the same address using the CREATE2 opcode.

# Install

```
npm i
```

# Test

```
npm test
```

Test result:

```
  Redeploy
    ✔ deploys the Factory (399ms)
Item deployed to address 0x71c220d6776032767c064020d8450ecC971aFe14
    ✔ deploys the Item
    ✔ destroys the Item
Item deployed to address 0x71c220d6776032767c064020d8450ecC971aFe14
    ✔ redeploys the Item


  4 passing (480ms)
```
