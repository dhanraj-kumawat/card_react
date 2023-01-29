import React from 'react'

function Card(props) {
  return (
    <div className='card w-72 relative transition ease-in-out delay-300  hover:scale-105  '>
        <div className="wishlist flex justify-between px-3 ">
            <div className="offprice">
                <h3 className='absolute left-[5%] top-2 px-2 rounded bg-red-600 text-white'>-25%</h3>
            </div>
            <div className="absolute right-[5%] top-2 heart text-sm shadow-md h-6 w-6 rounded-full border bg-gray-400 flex justify-center items-center hover:bg-red-600 hover:text-white hover:border-none">
            <i class="fa-regular fa-heart"></i>
            </div>
        </div>
      <div className="upper_card_section bg-white rounded-md border shadow-lg ">
        <img className='w-full h-60 rounded-md object-cover' src={props.imgUrl} alt="" />
        <div className="title flex justify-between p-2">
            <h2 className="title">{props.title}</h2>
            <div className="price flex flex-col">
                <p className='font-semibold text-red-600'>${props.discountPrice}</p>
                <p className='text-xs'>${props.ogPrice}</p>
            </div>
        </div>
        <div className="colorAndSize flex justify-between p-2">
            <div className="colors flex gap-1">
                <div style={{borderColor: props.color1 }} className="color1 rounded-full border-4 w-6 h-6  "></div>
                <div style={{borderColor: props.color2 }} className="color1 rounded-full border-4 w-6 h-6  "></div>
                <div style={{borderColor: props.color3 }} className="color1 rounded-full border-4 w-6 h-6  "></div>
            </div>
            <div className="size flex gap-1">
                <p className=' cursor-pointer hover:bg-purple-600 hover:text-white hover:border-none flex items-center justify-center  border-2  rounded-full text-xs text-center w-6 h-6  '>S</p>
                <p className=' cursor-pointer hover:bg-purple-600 hover:text-white hover:border-none flex items-center justify-center  border-2  rounded-full text-xs text-center w-6 h-6 '>M</p>
                <p className=' cursor-pointer hover:bg-purple-600 hover:text-white hover:border-none flex items-center justify-center border-2  rounded-full text-xs text-center w-6 h-6 '>L</p>
            </div>
        </div>
        <div className="ratingAndBuy flex justify-between p-2">
            <div className="rating flex items-center gap-1">
            <i class="fa-regular fa-star text-gray-500"></i>
            <h3 className='text-xs'>{props.rating}</h3>
            </div>
            <div className="buyNow cursor-pointer flex items-center gap-1 text-purple-800">
                <h3 className='font-semibold  '>BUY</h3>
                <i class="fa-solid fa-arrow-right-from-bracket font-semibold text-sm"></i>
            </div>
        </div>
      </div>
      <div className="bottom_card_section flex justify-between pl-1 bg-white mt-2 rounded-md border shadow-lg">
            <div className="bottom_card_left">
                <p>{props.couponTitle}</p>
                <p>#{props.couponTag}</p>
            </div>
            <div className="bottom_card_right rounded-r-md bg-purple-600 text-white">
                <p className='pl-5 pr-3'>{props.couponOff}%</p>
                <p className='pl-5 pr-3'>Off</p>
            </div>
      </div>
    </div>
  )
}

Card.defaultProps ={
    title: "Green traditional long dress",
    ogPrice: 4.5,
    discountPrice:3.9,
    imgUrl: "https://source.unsplash.com/random/?shopping,mall",
    rating: 4.5,
    couponTitle: "Monday Happy",
    couponTag: "MONHPY",
    couponOff: 20,
    color1: "silver",
    color2: "silver",
    color3: "white",
}

export default Card

