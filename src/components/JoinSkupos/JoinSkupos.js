import React from 'react'

const JoinSkupos = (props) => {
  return (
    <div className="bg-primary md:py-51 py-32">
      <div className="xl:container px-4 mx-auto text-center flex flex-col items-center">
        <h4 className="font-bold text-5xl text-white mb-8 leading-13 max-w-3xl mx-auto"> {props.joinSkuposData.title}</h4>
        <a href="#"
          className="text-primary font-semibold text-xl rounded-full bg-white py-3.5 px-8">Get
            Started</a>
      </div>
    </div>
  )
}

export default JoinSkupos
