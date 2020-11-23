import React from 'react'

const EmptyShelves = (props) => {
  const energyImage = props.shelveData.energyimage
  const lineImage = props.shelveData.lineimage
  const shelvesImage = props.shelveData.shelvesimage

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-12 xl:py-32 xl:container px-4 mx-auto ">
      <div className="flex justify-center flex-col mx-auto max-w-30 mb-5 md:mb-5 lg:mb-0">
        <h2 className="font-bold text-5xl text-defaultBlack leading-tight	">
          {props.shelveData.title}
        </h2>
        <p className="font-normal text-xl mt-3.5 text-defaultBlack">
          {props.shelveData.description.description}
        </p>
        <p className="font-normal text-xl mt-3.5 text-defaultBlack mt-5">{props.shelveData.subdescription}</p>
      </div>
      <div className="bg-no-repeat bg-contain relative mx-auto">
        <img src={shelvesImage.file.url} alt={shelvesImage.title}></img>
        <div className="absolute border-2 border-white border-dashed rounded-lg w-10 md:w-12.4 lg:w-19 h-64  left-32 lg:left-52 top-28 xl:block hidden"></div>
        <div className="border-v absolute border border-white border-dashed transform rotate-90 top-44 w-64  opacity-0 lg:opacity-100 left-14.4 top-60 xl:block hidden"></div>
        <div className="border-h absolute top-20 right-20 w-28 xl:block hidden">
          <img src={lineImage.file.url} alt={lineImage.title} />
        </div>

        <div className="bg-white w-52 h-48 p-7 absolute left-3.93 bottom-12 md:bottom-48 lg:bottom-4.25 xl:bottom-4.25">
          <img
            className="w-auto"
            src={energyImage.file.url}
            alt={energyImage.title}
          />
         <h5 className="mt-1 font-bold text-defaultBlack text-sm">
            {props.shelveData.regularstrength}{' '}
            <span className="text-xs text-defaultBlack">1.5L</span>
          </h5>
          <p className="font-normal border-b text-0.55 pb-5 border-lightGray">
            {props.shelveData.promotiondate}
          </p>
          <div className="flex  mt-4 ">
            <div className="w-full">
              <h4 className="font-semibold text-defaultBlack text-base">
                {props.shelveData.offerratio}
              </h4>
              <p className="text-defaultBlack text-0.55 text-base">
                {props.shelveData.offer}
              </p>
            </div>
            <div className="w-full">
              <h4 className="font-semibold text-defaultBlack text-base">
                {props.shelveData.brandpercentage}
              </h4>
              <p className="text-defaultBlack text-0.55 text-base">
                {props.shelveData.brand}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmptyShelves
