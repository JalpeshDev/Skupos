import React from 'react'

const Support = (props) => {
    const userImage = props.supportData.image
    return (
        <div className="xl:container mx-auto" >
            <div className="grid bg-defaultBlack md:grid-cols-2 grid-cols-1 mt-28">
                <div className="flex flex-col justify-center bg-defaultBlack px-5 py-5 md:py-5 md:px-5 xl:pl-24">
                    <h3 className="max-w-lg text-5xl leading-14	font-bold text-white">{props.supportData.title}</h3>
                    <p className="max-w-md font-normal leading-7 text-xl text-lightGray tracking-tight mt-5">{props.supportData.description.description}</p>
                </div>
                <div className="flex justify-end">
                    <img className="w-auto" src={userImage.file.url} alt={userImage.title} />

                </div>
            </div>
        </div>

    )
}

export default Support

