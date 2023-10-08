'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import Link from 'next/link';
import LoginModal from './LoginModal';
import { states } from '@/public/data';

import Google from '@/public/google-logo.svg'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase.config'
import { useRouter } from 'next/navigation';
interface Props {
  text: string,
  className: string
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  p: 4,
};


export default function RegisterModal( { text, ...props }: Props ) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const googleProvider  = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user)
      router.push('/dashboard')

    } catch (error) {
      
    }
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button {...props} onClick={handleOpen}>{text}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=" rounded-md w-[300px] md:w-[450px]">
        <Image src={'/logo.png'} alt='img' className='mx-auto' width={70} height={40} />
          <Typography id="modal-modal-title"  className='text-center text-[14px]'>
            Register to start making money
          </Typography>
          <form action="">


          <input type="email" placeholder='Email Address'/>
          <input type="text" placeholder='Full name'/>
          <select name="State" id="">
          <option disabled selected>State</option>
          {
            states.map((item: string) => (
              <option value={item} key={item}>{item}</option>
            ))
          }
          {/* <option value={}></option> */}
          </select>
          <select name="Gender" id="">
            <option value="Gender" disabled selected>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="text" placeholder='Age'/>
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='Confirm Password' />
          <button className='bg-[#F48856] py-4 w-full mt-5 rounded-md font-bold text-white' >Register</button>
          <div className='flex flex-col gap-4 mt-8'>
            <button className='text-white bg-gray-700 p-4 w-full rounded-lg flex items-center gap-2 font-bold text-[15px]' onClick={GoogleLogin}>
              
              <Image src={Google} alt='image' width={30} height={30}/>
              Sign up with google
            </button>

          </div>

          <span className='flex items-center gap-2 mt-3'>Already have an account ? <LoginModal className='bg-inherit text-[#F48856]' text="Login"/></span>
          </form>

        </Box>
      </Modal>
    </div>
  );
}
