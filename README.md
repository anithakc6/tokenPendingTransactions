#### Deployment Steps:
---

```
git clone https://github.com/anithakc6/tokenPendingTransactions.git
```

**Modify the code:**
Open txServer.js and Add projectid of ethereum mainnet, token id and contract address in line 38
example ->
let txPending = new PendingTransactions(<project id>,<token id>, <contract address>);

Go to your project folder in terminal :
```
cd tokenPendingTransactions/
```
Execute :
```
npm install
node txServer.js
```