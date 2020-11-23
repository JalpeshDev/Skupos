import React from 'react'

const Selling = (props) => {
  const clockImage = props.sellingData.clockImage
  const graphImage = props.sellingData.image

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pb-32 xl:container px-4 mx-auto">
      <div className="grap w-full xl:w-38">
        <img className="w-full" src={graphImage.file.url} alt={graphImage.title} />
        <div className="flex xl:flex-row flex-col">
          <div className="w-full p-5 xl:p-10 bg-lightBlue">
            <div className="bg-white px-4 py-4 relative">
            <h5 className="md:max-w-6 xl:max-w-6xl font-bold text-defaultBlack text-xs">
                {props.sellingData.discountText}
              </h5>
              <span className="block w-14 bg-defaultBlack opacity-20 h-1.5 mt-2"></span>
              <h2 className="text-color-default font-semibold text-sm absolute right-5 top-5 text-primary">
                {props.sellingData.discountAmount}
              </h2>
            </div>
            <div className="bg-white px-4 py-4 relative mt-3">
            <h5 className="md:max-w-6 xl:max-w-6xl   font-bold text-defaultBlack text-xs">
                {props.sellingData.engageDiscountText}
              </h5>
              <span className="block w-14 bg-defaultBlack opacity-20 h-1.5 mt-2"></span>
              <h2 className="text-color-default font-semibold text-sm absolute right-5 top-5 text-primary">
                {props.sellingData.engageDiscountAmount}
              </h2>
            </div>
          </div>

          <div className="w-full p-5 xl:p-10  bg-purple flex flex-col justify-center">
            <div className="bg-white px-4 py-4 relative">
              <h5 className="md:max-w-6 xl:max-w-6xl  font-bold text-defaultBlack text-base opacity-60">
                Last Month
              </h5>
              <div className="text-color-default font-semibold text-sm absolute right-5 top-5">
                <img src={clockImage.file.url} alt={clockImage.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-4 md:pl-7.98 flex justify-center flex-col  mt-5 xl:mt-0 max-w-35 ">
        <h2 className="font-bold text-5xl text-defaultBlack leading-tight	">
          {props.sellingData.title}
        </h2>
        <p className="font-normal text-xl mt-3.5 text-defaultBlack">
          {props.sellingData.description.description}
        </p>
      </div>
    </div>
  )
}

export default Selling
