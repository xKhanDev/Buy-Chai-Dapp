import { ethers } from 'ethers';
import React from 'react';

const Buy = ({ state }) => {
  const buyChai = async (e) => {
    e.preventDefault();

    const { contract } = state;
    const name = document.getElementById("name").value;
    const messege = document.getElementById("message").value;

    const amount = ethers.parseEther("0.01");
    const transaction = await contract.buyChai(name, messege, { value: amount });
    await transaction.wait();

    console.log("transaction is done");
  }

  return (
    <>
      <div className='w-80 md:w-1/2 lg:w-1/2' style={{ margin: "50px auto 0px" }}>
        <p className='text-yellow-500 font-bold text-2xl mt-6 text-center lg:text-4xl'><span className='text-white font-bold text-lg lg:text-2xl'>Brought me Some ☕</span> <br /> Send Testnet Ether Not Real 🗿</p>
        <form onSubmit={buyChai} className='flex flex-col mt-10'>
          <label className='text-xl font-semibold text-white'>Name</label>
          <input className='outline-none p-2 h-10 flex items-center rounded italic w-full' id='name' type="text" placeholder='Enter your Name...' required />
          <label className='text-xl font-semibold text-white mt-4'>Message</label>
          <textarea className='outline-none p-4 rounded italic md:w-full' id='message' name="message" cols="30" rows="5" placeholder='Enter your message...'>
          </textarea>
          <button type='submit' className='w-32 text-center p-2 rounded mt-4 bg-blue-500 text-white hover:bg-white hover:text-blue-800'>Buy</button>
        </form>
      </div>
    </>
  )
}

export default Buy;