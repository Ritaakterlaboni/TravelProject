import React from 'react'
import Container from '../../Container'
import Rightimg from '../../assets/Traveller.png'
import Images from '../../Images'
import playBtn from '../../assets/Polygon.png'
import plan from '../../assets/plane.png'

const HeroPart = () => {
  return (
    <>
    <div className="hero_part py-[50px] pb-[135px] bg-[#F8F7F7]">
        <Container className='px-6 grid-cols-2 grid gap-4'>
        <div className="leftPart mr-10 mt-4">
                <div className="title text-[20px] font-poppins font-bold text-[#DF6951]">Best Destinations around the world</div>
            <div className="Headline text-[84px] leading-none font-bold py-[25px]">Travel, enjoy and live a new and full life</div>
            <p className='font-medium text-[18px] mr-40'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <div className="mt-[25px] flex gap-x-8">
                <button className='bg-[#F1A501] py-4 px-3 rounded-xl text-white shadow-[#F1A501] shadow-lg'>Find out more</button>
                <div className="flex gap-x-4 pt-2"><div className="bg-[#DF6951] w-[50px] h-[50px] rounded-full relative shadow-lg shadow-[#DF6951]"><Images className='absolute px-5 py-5' src={playBtn}/></div> <p className='pt-2 font-medium text-[#686D77] text-[18px]'>Play Demo</p></div> 
            </div>
        </div>
        <div className="rightPart relative">
            <Images className='absolute right-[-53px] top-25' src={plan}/>
            <Images className='absolute left-20 top-3' src={plan}/>

            <Images className='absolute top-7' src={Rightimg}/>
        </div>
        </Container>
    </div>
    </>
  )
}

export default HeroPart