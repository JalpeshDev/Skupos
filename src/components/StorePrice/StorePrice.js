import React from 'react'

const StorePrice = (props) => {
  return (
    <div className="h-98 bg-defaultBlack text-center flex flex-col justify-center items-center">
      <h2 className="text-3.87 font-semibold text-white leading-3.87 mb-8 max-w-58 mx-auto">
        {props.storePriceData.title}{' '}
        <span className="text-primary">{props.storePriceData.permonth}</span>
      </h2>
      <p className="inline border-b pb-1 border-white border-opacity-25 pb-1 text-white">
        {props.storePriceData.subtitle}
      </p>
    </div>
  )
}

export default StorePrice
