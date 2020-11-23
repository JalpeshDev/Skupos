import React from 'react'

const CustomerStory = (props) => {
    return (
        <div className="xl:container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
                <div className="story-border w-28 h-0.5 mt-36 opacity-20 mx-auto bg-defaultBlack"></div>
                <div className="w-28 h-10 mt-20 opacity-20 mx-auto custom-color-box"></div>
                <h4 className="font-normal text-5xl leading-12 tracking-tight text-defaultBlack mt-4  mb-11">{props.customerStoryData.title.title}</h4>
                <a className="font-semibold text-defaultBlack text-lg tracking-tighter border-b pb-1" href="#">{props.customerStoryData.subTitle}</a>
                <div className="story-border w-28 h-0.5 my-28 opacity-20 mx-auto bg-defaultBlack"></div>
            </div>
        </div>
    )
}

export default CustomerStory

