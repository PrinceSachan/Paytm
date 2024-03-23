import React, { useState } from 'react'



import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { Bottomwarning } from '../components/Bottomwarning'

const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeHolderName={"prince@gmail.com"} onChange={(e) => setUsername(e.target.value)} />
          <InputBox label={"Password"} placeHolderName={"******"} onChange={(e) => setPassword(e.target.value)} />
          <div className='pt-4'>
            <Button  label={"Sign In"} />
          </div>
          <Bottomwarning label={"Don't have an account?"} linkName={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  )
}

export default Signin