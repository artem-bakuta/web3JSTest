import Web3 from 'web3';

const web3 = new Web3('https://bsc-dataseed.binance.org/');

const contractAddress = '0xb2ea51BAa12C461327d12A2069d47b30e680b69D';
const walletAddress = '0x248Dd3836E2A8B56279C04addC2D11F3c2497836';
const abi = [
    {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
    }
];

const contract = new web3.eth.Contract(abi, contractAddress);

export async function getBalance(): Promise<string | null> {
    try {
        const balance = await contract.methods.balanceOf(walletAddress).call();
        return balance ? balance.toString() : null;
    } catch (error) {
        console.error('Error fetching balance:', error);
        return null;
    }
}
