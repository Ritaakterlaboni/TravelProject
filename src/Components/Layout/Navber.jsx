import React from 'react'
import Container from '../../Container'
import Images from '../../Images'
import Logo from '../../assets/Logo.png'
import { IoIosArrowDown } from "react-icons/io";

const Navber = () => {
  return (
    <div className="">
        <Container className='flex justify-between items-center text-[18px] font-semibold px-6 py-4'>
            <div className="logo">
                <Images src={Logo}/>
            </div>
            <div className="Menu flex items-center gap-14">
                <ul className='flex items-center gap-14'>
                    <li>Desitnations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                    <li>Login</li>
                </ul>
                <button className='border-2 rounded border-black px-4 py-2'>Sign up</button>
                <p className='flex'>EN<IoIosArrowDown/></p>
            </div>
        </Container>
    </div>
  )
}

export default Navber