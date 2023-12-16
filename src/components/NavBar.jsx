import React, { useState, useEffect } from 'react';

const NavBar = ({ state }) => {
    const [account, setAccount] = useState("Not Connected");
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
            <div>
                <label className='text-white text-lg px-2'>{isConnected ? account : "Not Connected"}</label>
                <button className='text-base font-semibold rounded p-2 bg-yellow-400 text-white hover:text-yellow-500 hover:bg-white lg:text-xl'>
                    {isConnected ? "Connected" : "Not Connected"}
                </button>
            </div>
        </div>
    );
};

export default NavBar;