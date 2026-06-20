import React from 'react'
import Container from '../../Container'
import Images from '../../Images'
import weather from '../../assets/Group48.png'
import setting from '../../assets/Group49.png'
import Events from '../../assets/Group50.png'
import planes from '../../assets/Group51.png'



const Category = () => {
  return (
    <>
    <div className="Category py-[70px] bg-[#F8F7F7]">
      <Container>
        <div className="heading text-center">
          <div className="tilte_category font-semibold text-[18px] text-[#5E6282]">CATEGORY</div>
        <div className="headline_category text-[#14183E] font-bold text-[50px] font-Volkhov">We Offer Best Services</div>
        </div>

        <div className="grid grid-cols-4 gap-x-10 mx-5">
          <div className="">
            <Images src={weather}/>
            <p>Calculated Weather </p>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
           <div className="">
            <Images className='' src={planes}/>
            <p>Calculated Weather </p>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
           <div className="">
            <Images src={Events}/>
            <p>Calculated Weather </p>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
           <div className="">
            <Images src={setting}/>
            <p>Calculated Weather </p>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
         
        </div>
      </Container>
    </div>
    </>
  )
}

export default Category