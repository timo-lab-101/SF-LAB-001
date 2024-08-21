import React, { useEffect, useState } from 'react';
import contract from '../services/contract';

const Trade = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const getBalance = async () => {
            const balance = await contract.balanceOf(await contract.signer.getAddress());
            setBalance(balance);
        };

        getBalance();
    }, []);

    return (
        <div>
            <h1>Your Balance: {ethers.utils.formatEther(balance)} Tokens</h1>
        </div>
    );
};

export default Trade;