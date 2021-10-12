const Web3 = require('web3');
class PendingTransactions {
    web3;
    contractAddress;
    subscription;

    constructor(projectId, tokenId, contractAddress) {
        this.web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/' + projectId));
		this.contractAddress = contractAddress;
		this.projectId = projectId;
		this.tokenId = tokenId;
    }

    subscribe(topic) {
        this.subscription = this.web3.eth.subscribe(topic, (err, res) => {
            if (err) console.error(err);
        });
    }

    watchPendingTransactions() {
        console.log('Watching for pending transactions...');
        this.subscription.on('data', async(txHash) => {
                try {
                    let tx = await this.web3.eth.getTransaction(txHash);
                    if (tx != null) {
                        if (this.contractAddress == tx.to) 
						{
							console.log(tx);
                        }
                    }
                } catch (err) {
                    console.error(err);
                }
        });
    }
}

let txPending = new PendingTransactions('projectId','USDT', '0xdAC17F958D2ee523a2206206994597C13D831ec7');
txPending.subscribe('pendingTransactions');
txPending.watchPendingTransactions();