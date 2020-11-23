import React from 'react'

const Footer = () => {
  return (
    <div className="bg-defaultBlack text-white">
      <div className="container mx-auto  px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 pt-6.24">
          <div className="col-span-3 mx-auto xl:ml-0">
            <div className="logo flex  flex-col justify-center  items-start">
              <img
                className="w-auto"
                src={require('../../assets/images/ftlogo.png')}
              />
              <div className="border w-16.40 rounded h-3.87 mt-11 flex justify-center items-center border-white border-opacity-10">
                <div className="max-w-14">
                  <span className=" font-regular text-sm	leading-6 text-white">
                    Et etiam cursus sit et et fringilla curabitur nisl ultrices.
                  </span>
                </div>
                <svg
                  className="h-6 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="border w-16.40 rounded h-3.87 mt-0.65 flex justify-center items-center border-white border-opacity-10">
                <div className="max-w-14">
                  <span className=" font-regular text-sm	leading-6 text-white">
                    Et etiam cursus sit et et fringilla curabitur nisl
                    ultrices..
                  </span>
                </div>
                <svg
                  className="h-6 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col col-span-3 lg:mx-auto xl:mx-auto my-5 lg:my-0">
            <span className="font-bold text-white text-xs	uppercase">
              Convenience Retail
            </span>

            <span className="mt-1.17">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Overview
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Scan Data
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Pricing
              </a>
            </span>
          </div>
          <div className="flex flex-col  col-span-2  lg:mx-auto xl:mx-auto my-5 lg:my-0 ">
            <span className="font-bold text-white text-xs	uppercase">
              Enterprise Brands
            </span>
            <span className="mt-1.17">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Overview
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Insights
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Engage for Brands
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Predict
              </a>
            </span>
          </div>
          <div className="flex flex-col  col-span-2 lg:mx-auto xl:mx-auto my-5 lg:my-0 xl:ml-0 ">
            <span className="font-bold text-white text-xs	uppercase">
              Resources
            </span>
            <span className="mt-1.17">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Customer Stories
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Blog
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Product Updates
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Events
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Videos
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Downloads
              </a>
            </span>
          </div>
          <div className="flex flex-col col-span-2 lg:mx-auto xl:mx-auto my-5 lg:my-0 xl:ml-0">
            <span className="font-bold text-white text-xs	uppercase">
              Company
            </span>
            <span className="mt-1.17">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                About Us
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Press
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Careers
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Contact
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Referral Program
              </a>
            </span>
            <span className="mt-0.72">
              <a href="#" className="text-white text-sm	font-regular opacity-80">
                Support
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 xl:px-0 py-10 xl:py-0 xl:pt-13.82 xl:pb-5.45">
        <div className="grid xl:grid-cols-2 grid-cols-1">
          <div className="flex flex-row  xl:my-0 my-5 justify-center xl:justify-start">
            <p className="text-xs	uppercase text-white font-bold ">
              © 2020 Skupos. All Rights Reserved.
            </p>
            <a href="" className="text-xs	 text-white font-bold ml-2.29 ">
              TERMS
            </a>
            <a href="" className="text-xs	 text-white  font-bold ml-2.092">
              PRIVACY
            </a>
          </div>

          <div className="flex flex-row xl:my-0 my-5 justify-center xl:justify-end">
            <a href="" className="text-sm text-blue-700 font-bold ml-1.57">
              <img
                className="w-auto h-1.07 w-1.07"
                src={require('../../assets/images/Facebook.png')}
              />
            </a>
            <a href="" className="text-sm text-blue-700 font-bold ml-1.57 ">
              <img
                className="w-auto h-1.07 w-1.07"
                src={require('../../assets/images/Twitter.png')}
              />
            </a>
            <a href="" className="text-sm text-blue-700 font-bold ml-1.57 ">
              <img
                className="w-auto h-1.07 w-1.07"
                src={require('../../assets/images/Instagram.png')}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
