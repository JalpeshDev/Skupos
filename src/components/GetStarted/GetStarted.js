import React from 'react'

const GetStarted = (props) => {
    const longTermData = props.startedData.longTerm;
    const remoteData = props.startedData.remote;
    const internetData = props.startedData.internet;
    const windowsData = props.startedData.windows;
    const cloverData = props.startedData.clover;

    return (
        <div> 
            <div className="xl:container px-4 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:px-0">
                <div className="flex md:flex-row lg:flex-col items-end md:justify-center">
                    <div className="bg-yellow w-306 xl:h-290 lg:h-290 md:h-315 h-315 flex flex-col justify-center items-center">
                        <h2 className="text-8xl font-bold text-white"> {props.startedData.hourTitle} </h2>
                        <p className="text-2xl font-semibold text-white mt-3"> {props.startedData.hourSubTitle}</p>
                    </div>

                    <div className="bg-orange h-56 w-306 h-315 flex flex-col justify-center items-center mt-19">
                        <img className="w-1/3" src={longTermData.file.url} alt={longTermData.title} />
                        <p className="text-2xl font-semibold text-white leading-6 mt-8 max-w-11 text-center">{longTermData.title}</p>
                    </div>
                </div>
                <div className="col-span-2 getstarted-width md:mx-auto  xl:ml-18.79 ml-0 md:my-5 my-0">
                    <div className="bg-defaultBlack text-center py-14 w-full w-588 h-405 flex flex-col justify-center items-center">
                        <h2 className="text-white text-5xl font-bold max-w-sm">{props.startedData.title}</h2>
                        <p className="text-white font-normal mt-5 max-w-lg px-4 text-xl text-lightGray">{props.startedData.description.description}
                        </p>
                    </div> 
                    <div className="flex"> 
                        <div className="remote bg-purple getstarted-height w-287 h-201 flex flex-col justify-center text-center items-center mt-18 p-8">
                            <img className="w-12" src={remoteData.file.url} alt={remoteData.title} />
                            <p className="text-2xl font-semibold text-white leading-6 mt-5">{remoteData.title}</p>
                        </div>
                        <div
                            className="internet bg-primary getstarted-height w-72 h-201 w-282 flex flex-col justify-center items-center mt-18 ml-17.15 text-center ml-8 p-8">
                            <img className="w-12" src={internetData.file.url} alt={internetData.title} />
                            <p className="text-2xl font-semibold text-white leading-6 mt-5">{internetData.title}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-skyblue text-center w-268 h-625 p-42 xl:ml-1.70 md:mx-auto mx-auto my-5">
                    <img className="w-74 mx-auto" src={cloverData.file.url} alt={cloverData.title} />
                    <p className="text-2xl font-semibold text-white">{cloverData.title}</p>
                    <p className="text-xl mt-8 mb-14 font-semibold text-white or relative"> Or</p>
                    <img className="w-1/3  mx-auto" src={windowsData.file.url} alt={windowsData.title} />
                    <p className="text-2xl font-semibold text-white mt-14"> {windowsData.title}</p>
                </div>

            </div>
            <div className="text-center my-11 text-xl font-normal">{props.startedData.mnsp} <a className="text-skyblue underline text-primary" href="#">{props.startedData.compatible}</a></div>
        </div>
    )
}

export default GetStarted

