import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import RegisterModal from './RegisterModal';


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
          <form action="">
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
          <button className='bg-[#F48856] py-4 w-full mt-5 rounded-md font-bold text-white' >Login</button>

          <span className='flex items-center gap-2 mt-3'>Don't have an account ? <RegisterModal className='bg-inherit text-[#F48856]' text="Register"/></span>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
