import React, { useState } from 'react'



import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { Bottomwarning } from '../components/Bottomwarning'

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLasttName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox onChange={e => {
            setFirstName(e.target.value)
          }} label={"First Name"} placeHolderName={"Prince"} />
          <InputBox onChange={e => {
            setLasttName(e.target.value)
          }} label={"Last Name"} placeHolderName={"Sachan"} />
          <InputBox onChange={e => {
            setUsername(e.target.value)
          }} label={"Email"} placeHolderName={"prince@gmail.com"} />
          <InputBox onChange={e => {
            setPassword(e.target.value)
          }} label={"Password"} placeHolderName={"******"} />
          <div className='pt-4'>
            <Button type="submit"  label={"Sign up"} />
          </div>
          <Bottomwarning label={"Already have an account?"} linkName={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  )
}

export default Signup