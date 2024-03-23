import React, { useState } from 'react'



import { InputBox } from '../components/InputBox'


const SendMoney = () => {
  // const [searchParams, setSearchParams] = useSearchParams()
  const [amount, setAmount] = useState()

  return (
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-4 h-max">
          <div>
            <h2 className='text-2xl font-bold'>Send Money</h2>
          </div>
          <div className="py-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-green-500 flex justify-center items-center h-12 w-12">
                <span className="text-2xl text-white uppercase">
                  F
                </span>
              </div>
              <div>
                <span className="text-xl font-semibold">Friend's Name</span>
              </div>
            </div>
          </div>
          <div>
            <InputBox label={"Amount (in Rs)"} placeHolderName={"Enter Amount"} onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div>
            <button 
              // onClick={clickHandler}
              className="w-full text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 me-2 mt-4 mb-2">
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendMoney