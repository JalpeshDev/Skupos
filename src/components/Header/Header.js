import React from 'react'

const Header = () => {
  return (
    <div className="bg-cover bg-lightsilver border-b border-defaultBlack border-opacity-10 bg-no-repeat py-5 px-5">
      <div className="header-content">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 ">
          <div className="flex items-center justify-center lg:justify-start">
            <a
              href="#"
              className="text-defaultBlack font-semibold tracking-tight text-base ml-4"
            >
              Product
            </a>
            <a
              href="#"
              className="text-defaultBlack font-semibold tracking-tight text-base ml-14"
            >
              Resource
            </a>
            <a
              href="#"
              className="text-defaultBlack font-semibold tracking-tight text-base ml-14"
            >
              Support
            </a>
          </div>

          <div className="logo flex justify-center items-center my-5 md:my-5 lg:my-0">
            <img
              className="w-auto"
              src={require('../../assets/images/logo.png')}
            />
          </div>

          <div className="flex items-center justify-center md:justify-center lg:justify-end">
            <a
              href="#"
              className="text-defaultBlack font-semibold tracking-tight text-base"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-white font-semibold tracking-tight text-base rounded-full bg-primary ml-14 mr-4 flex justify-center items-center w-131 h-51"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
