import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import RegisterModal from './RegisterModal';
import Google from '@/public/google-logo.svg'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebase.config';
import { signIn } from 'next-auth/react';
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
export default function LoginModal( { text, ...props }: Props ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [err, setErr] = React.useState("");
  const router = useRouter();
  // const callbackUrl = (router.query?.callbackUrl as string) ?? "/";
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const _target = e.target as any;
    const email = _target.email.value;
    const password = _target.password.value;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(result)
    if (result?.error){
      setErr(result.error);
    } else {
      router.push('/dashboard');
    }
  }
  //Sign in with google
  const googleProvider  = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user)
      router.push('/dashboard')

    } catch (error) {  
      console.error("Google login error:", error); 
    }
  }
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
          <Typography  className='text-center text-[14px] text-gray-600' fontWeight={600} >
            Login to continue to dashboard
          </Typography>
          <Typography  className='text-center text-[14px] text-gray-400 px-4' fontWeight={500} >
            Use the email provider which is stable now
          </Typography>
          {
            !!err && <p>{err}</p>
          }
          <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Email Address' name='email'/>
          <input type="password"  placeholder='Password' name='password'/>
          <button className='bg-[#F48856] py-4 w-full mt-5 rounded-md font-bold text-white' type='submit'>Login</button>
          <div className='flex flex-col gap-4 mt-8'>
            <button className='text-white bg-gray-700 p-4 w-full rounded-lg flex items-center gap-2 font-bold text-[15px]' onClick={GoogleLogin}> 
              <Image src={Google} alt='image' width={30} height={30}/>
              Sign in with google
            </button>
          </div>
          <span className='flex items-center gap-2 mt-3'>{"Don't"} have an account ? <RegisterModal className='bg-inherit text-[#F48856]' text="Register"/></span>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
