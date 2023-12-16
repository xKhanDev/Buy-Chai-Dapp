import React, { useEffect, useState } from 'react';

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  const memosMassage = async () => {
    const memos = await contract.getMemos();
    setMemos(memos);
  };

  useEffect(() => {
    contract && memosMassage();
  }, [contract]);

  return (
    <>
      <div className='p-4 mt-8 max-w-screen-md mx-auto'>
        <h2 className='text-xl font-semibold text-white'>Messages</h2>
        <div className='overflow-x-auto'>
          <table className='w-full sm:text-xs'>
            <tbody>
              {memos.map((memo, i) => {
                const timestamp = Number(memo.timestamp);
                const millisecondsTimestamp = timestamp * 1000;
                return (
                  <tr key={i} className='flex mt-2 px-3 gap-1 bg-gray-200 rounded p-1 items-center'>
                    <td className='w-32 bg-blue-500 text-slate-200 p-2' title='name'>{memo.name}</td>
                    <td className='w-26 bg-blue-500 text-slate-200 p-2' title='Transaction Date'>{new Date(millisecondsTimestamp).toLocaleDateString()}</td>
                    <td className='w-40 bg-blue-500 text-slate-200 p-2' title='Message'>{memo.massage}</td>
                    <td className='w-96 bg-blue-500 text-slate-200 p-2' title='Sender Address'>{memo.from}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Memos;
