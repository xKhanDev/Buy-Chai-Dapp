import React, { useState, useEffect } from 'react';

const NavBar = ({ state, connectWallet }) => {
    const [account, setAccount] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    const { signer } = state;
    const userAddress = signer?.address;


    useEffect(() => {
        if (signer && userAddress) {
            setAccount(userAddress.substring(0, 6) + '...' + userAddress.substring(userAddress.length - 4));
            setIsConnected(true);
        } else {
            setAccount("Not Connected");
            setIsConnected(false);
        }
    }, [signer, userAddress]);

    return (
        <div className='w-full h-16 border-b border-white flex justify-between px-10 items-center'>
            <div>
                <h2 className='text-yellow-400 font-extrabold text-xl italic lg:text-3xl'>Chai Pilado 🥱</h2>
            </div>
            <div className='flex items-center'>
                <label className='text-white text-sm px-2 lg:text-lg md:text-lg'>{isConnected ? account : ""}</label>
                {
                    isConnected ? (
                        <button className='text-sm font-semibold rounded p-2 bg-yellow-400 text-white cursor-not-allowed px-2 lg:text-xl md:text-xl'>
                            Connected
                        </button>
                    ) : (
                        <button className='text-sm font-semibold rounded p-2 bg-yellow-400 text-white hover:text-yellow-500 hover:bg-white px-2 lg:text-xl md:text-xl' onClick={connectWallet}>
                            Not Connected
                        </button>
                    )
                }

            </div>
        </div>
    );
};

export default NavBar;