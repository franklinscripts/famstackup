import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import Link from 'next/link';
import LoginModal from './LoginModal';

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
          <option value="Abia">Abia</option>
          <option value="Adamawa">Adamawa</option>
          <option value="Akwa Ibom">Akwa Ibom</option>
          <option value="Anambra">Anambra</option>
          <option value="Bauchi">Bauchi</option>
          <option value="Bayelsa">Bayelsa</option>
          <option value="Benue">Benue</option>
          <option value="Borno">Borno</option>
          <option value="Cross River">Cross River</option>
          <option value="Delta">Delta</option>
          <option value="Ebonyi">Ebonyi</option>
          <option value="Edo">Edo</option>
          <option value="Ekiti">Ekiti</option>
          <option value="Enugu">Enugu</option>
          <option value="FCT">Federal Capital Territory</option>
          <option value="Gombe">Gombe</option>
          <option value="Imo">Imo</option>
          <option value="Jigawa">Jigawa</option>
          <option value="Kaduna">Kaduna</option>
          <option value="Kano">Kano</option>
          <option value="Katsina">Katsina</option>
          <option value="Kebbi">Kebbi</option>
          <option value="Kogi">Kogi</option>
          <option value="Kwara">Kwara</option>
          <option value="Lagos">Lagos</option>
          <option value="Nasarawa">Nasarawa</option>
          <option value="Niger">Niger</option>
          <option value="Ogun">Ogun</option>
          <option value="Ondo">Ondo</option>
          <option value="Osun">Osun</option>
          <option value="Oyo">Oyo </option>
          <option value="Plateau">Plateau</option>
          <option value="Rivers">Rivers</option>
          <option value="Sokoto">Sokoto</option>
          <option value="Taraba">Taraba</option>
          <option value="Yobe">Yobe</option>
          <option value="Zamfara">Zamfara</option>
          </select>
          <select name="Gender" id="">
            <option value="Gender" disabled>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="text" placeholder='Age'/>
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='Confirm Password' />
          <button className='bg-[#F48856] py-4 w-full mt-5 rounded-md font-bold text-white' >Register</button>

          <span className='flex items-center gap-2 mt-3'>Already have an account ? <LoginModal className='bg-inherit text-[#F48856]' text="Login"/></span>
          </form>

        </Box>
      </Modal>
    </div>
  );
}
