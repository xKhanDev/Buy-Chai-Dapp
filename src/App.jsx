import React, { useState } from 'react';
import abi from "./Contracts/chai.json";
import { ethers } from "ethers";
import Buy from './components/Buy';
import Memos from './components/Memos';
import NavBar from './components/NavBar';

const App = () => {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });


  const connectWallet = async () => {
    const contractAddress = `0x2e21608d33dc0efccf12b2198c2a24128f11901f`;
    const contractAbi = abi.abi;
    try {
      const { ethereum } = window;

      if (ethereum) {
        // Requesting access to user accounts
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        setState({ provider, signer, contract }); // Fixing the setState method call
      } else {
        window.alert("MetaMask Not Detected!")
      }
    }
    catch (err) {
      console.error(err); // Log error for debugging
    }
  };

  return (
    <>
      <div className='h-screen bg-gradient-to-r from-blue-600 to-blue-900' style={{ width: "100%", overflowX: "hidden" }}>

        <div>
          <NavBar state={state} connectWallet={connectWallet} />
          < Buy state={state} />
          < Memos state={state} />
        </div>

      </div>
    </>
  )
}

export default App;
