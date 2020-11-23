import React from 'react'

const PaidData = (props) => {
  const berryData = props.paidData.berry
  const cheetosData = props.paidData.cheetos
  const cokeData = props.paidData.coke
  const hersheyData = props.paidData.hershey
  const laysData = props.paidData.lays
  const marlboroData = props.paidData.marlboro
  const reesesData = props.paidData.reeses

  return (
    <div className="section-two xl:container xl:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-28 mb-32 mx-4">
        <div className="bg-silver relative py-0 lg:py-24 mx-auto overflow-hidden xl:w-588 slide">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
            <div className="custom-box text-center w-37 h-48 flex items-center justify-center flex-col bg-white  mb-0 xl:-ml-2.17  lg:mb-0.65">
              <img
                className="w-auto"
                src={berryData.file.url}
                alt={berryData.title}
              />
              <a className="mt-4 font-semibold" href="#">
                {berryData.title}
              </a>
            </div>
            <div className="custom-box text-center w-37 h-48 flex items-center justify-center flex-col bg-white ml-0 lg:-ml-77  mb-0 lg:mb-0.65">
              <img
                className="mx-auto  w-auto"
                src={cokeData.file.url}
                alt={cokeData.title}
              />
              <a className="mt-4 font-semibold" href="#">
                {cokeData.title}
              </a>
            </div>
            <div className="custom-box text-center w-37 h-48 flex items-center justify-center flex-col bg-white ml-0 lg:ml-58  mb-0 lg:mb-0.65">
              <img
                className="mx-auto   w-auto"
                src={cheetosData.file.url}
                alt={cheetosData.title}
              />

              <a className="mt-4 font-semibold" href="#">
                {cheetosData.title}
              </a>
            </div>
            <div className="opacity-20  custom-box text-center w-37  h-48 flex items-center justify-center flex-col bg-white  mb-0 lg:mb-0.65 ml-0 lg:ml-1.96 hidden lg:flex">
              <img
                className="mx-auto   w-auto"
                src={reesesData.file.url}
                alt={reesesData.title}
              />

              <a className="mt-4 font-semibold" href="#">
                {reesesData.title}
              </a>
            </div>
            <div className="custom-box text-center w-37 h-48 flex items-center justify-center flex-col bg-white ml-0 lg:ml-3">
              <img
                className="mx-auto   w-auto"
                src={laysData.file.url}
                alt={laysData.title}
              />
              <a className="mt-4 font-semibold" href="#">
                {laysData.title}
              </a>
            </div>
            <div className="custom-box text-center w-37 h-48 flex items-center justify-center flex-col bg-white ml-0 lg:ml-2.15">
              <img
                className="mx-auto   w-auto"
                src={marlboroData.file.url}
                alt={marlboroData.title}
              />
              <a className="mt-4 font-semibold" href="#">
                {marlboroData.title}
              </a>
            </div>
            <div className="custom-box text-center w-37 h-48 flex items-center justify-center flex-col bg-white ml-0 lg:ml-14">
              <img
                className="mx-auto   w-auto"
                src={hersheyData.file.url}
                alt={hersheyData.title}
              />
              <a className="mt-4 font-semibold" href="#">
                {hersheyData.title}
              </a>
            </div>
          </div>
        </div>
        <div className="two-content flex flex-col justify-center mx-auto max-w-25 mt-5 lg:mt-0 xl:ml-32">
          <h2 className="font-bold text-5xl tracking-tight">
            {props.paidData.title}
          </h2>
          <p className="font-normal text-lg mt-3.5">
            {props.paidData.description.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PaidData
