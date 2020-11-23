import React from 'react'

const ScanData = (props) => {
  const scanImageUrl = props.scanData.scanImage.file.url
  return (
    <>
      <div
        style={{
          backgroundImage: 'url(' + scanImageUrl + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="banner h-37.5 flex items-center">
          <div className="scan-data">
            <a
              className="absolute top-48  md:top-52 lg:top-28 left-9  font-semibold text-xl leading-loose	text-defaultBlack"
              href="#"
            >
              Scan Data
            </a>
          </div>
          <div className="xl:container mx-auto px-4">
            <div className="banner-content">
              <h2 className="font-semibold tracking-tight text-6xl text-defaultBlack max-w-2xl">
                {props.scanData.title.title}
              </h2>
              <p className="font-normal text-2xl leading-8 tracking-tight mt-5 max-w-xl pr-4">
                {props.scanData.description.description}
              </p>
              <a
                className="text-white font-semibold tracking-tight text-lg rounded-full bg-primary py-4.5 px-10.5 relative top-7"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScanData
