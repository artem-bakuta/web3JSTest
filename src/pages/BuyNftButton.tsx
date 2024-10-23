import React, { useEffect, useState } from 'react';
import { IonButton } from '@ionic/react';
import {getBalance} from "../util/web3Utils";

const BuyNFTButton: React.FC = () => {
    const [balance, setBalance] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBalance() {
            const balance = await getBalance();
            if (balance !== null) {
                setBalance(balance);
            }
        }

        fetchBalance();
    }, []);

    return (
        <IonButton className='buy-nft-btn mt-4 h-11'
                   color='medium'
                   onClick={() => window.open('https://magiceden.io/marketplace/soldecoder', "_blank")}>
            {balance ? `Balance: ${balance}` : 'Buy 1 NFT to gain access'}
        </IonButton>
    );
};

export default BuyNFTButton;
