import { ethers } from 'ethers';
import { provider } from './ethers';
import ContractABI from './ContractABI.json'; // 你的合约ABI

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contract = new ethers.Contract(contractAddress, ContractABI, provider.getSigner());

export default contract;