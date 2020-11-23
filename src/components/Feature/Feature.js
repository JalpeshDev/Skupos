import React from 'react'

const Feature = (props) => {
    const secureData = props.featureData.secure;
    const integrateData = props.featureData.integrate;
    const quickData = props.featureData.quick;
    const contractData = props.featureData.contract;

    return (
        <div className="xl:container mx-auto xl:p-0 p-8">
            <div className="text-center mt-28">
                <h1 className="font-semibold text-5xl text-defaultBlack tracking-tight">{props.featureData.title}</h1>
                <p className="mt-1.125 text-xl text-defaultBlack max-w-29 mx-auto " >{props.featureData.subTitle.subTitle} </p>
            </div>

            <div className="grid grid-cols-1 overflow-hidden lg:overflow-visible xl:overflow-visible">
                <div className="flex justify-center mt-28 xl:flex-row md:flex-row flex-col">
                    <div className="flex flex-col justify-center  w-96">
                        <h4 className="text-4xl	font-bold text-defaultBlack  tracking-tight">{secureData.title}</h4>
                        <p className="text-lg font-normal text-defaultBlack mt-3 max-w-19 md:max-w-23 lg-max-w-23 xl:max-w-23">{secureData.description}</p>
                    </div>
                    <div className="flex justify-end ml-0 md:ml-4.5 xl:ml-4.5  mt-5 md:mt-0 lg:mt-0 xl:mt-0">
                        <img className=" " src={secureData.file.url} alt={secureData.title}></img>
                    </div>
                </div>
                <div className="flex justify-center mt-12 xl:flex-row md:flex-row flex-col">
                    <div className="flex flex-col justify-center w-96">
                        <h4 className="text-4xl	font-bold text-defaultBlack  tracking-tight">{integrateData.title}</h4>
                        <p className="text-lg font-normal text-defaultBlack mt-3 max-w-19 md:max-w-23 lg-max-w-23 xl:max-w-23">{integrateData.description}</p>
                    </div>
                    <div className="flex justify-end  ml-0 md:ml-4.5 xl:ml-4.5  mt-5 md:mt-0 lg:mt-0 xl:mt-0">
                        <img className=" " src={integrateData.file.url} alt={integrateData.title}></img>
                    </div>
                </div>
                <div className="flex justify-center mt-12 xl:flex-row md:flex-row flex-col">
                    <div className="flex flex-col justify-center w-96">
                        <h4 className="text-4xl	font-bold text-defaultBlack  tracking-tight">{quickData.title}</h4>
                        <p className="text-lg font-normal text-defaultBlack mt-3 max-w-19 md:max-w-23 lg-max-w-23 xl:max-w-23">{quickData.description}</p>
                    </div>
                    <div className="flex justify-end ml-0 md:ml-4.5 xl:ml-4.5  mt-5 md:mt-0 lg:mt-0 xl:mt-0" >
                        <img className=" " src={quickData.file.url} alt={quickData.title} />
                    </div>
                </div>
                <div className="flex justify-center mt-12 xl:flex-row md:flex-row flex-col">
                    <div className="flex flex-col justify-center w-96">
                        <h4 className="text-4xl	font-bold text-defaultBlack  tracking-tight">{contractData.title}</h4>
                        <p className="text-lg font-normal text-defaultBlack mt-3 max-w-19 md:max-w-23 lg-max-w-23 xl:max-w-23">{contractData.description} </p>
                    </div>
                    <div className="flex justify-end ml-0 md:ml-4.5 xl:ml-4.5  mt-5 md:mt-0 lg:mt-0 xl:mt-0">
                        <img className=" " src={contractData.file.url} alt={contractData.title} />

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Feature

