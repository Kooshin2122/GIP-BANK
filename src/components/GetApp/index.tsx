import React from 'react'
import Image from 'next/image'
import CustomeButton from '../CustomBtn/index'

const GetApp = () => {
    return (
        <section className="flex items-center justify-center w-full flex-col my-[20px]">
            <div className="mx-auto max-w-[1440px] relative flex w-full flex-col justify-between gap-32 overflow-hidden bg-primary bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-5">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
                    <p className="text-[16px] font-[500] text-gray-10">
                        Download Galaxy Bank’s Mobile banking app a powerful
                        financial tool designed to simplify your banking
                        experience.
                    </p>
                    <div className="flex items-center flex-wrap gap-x-8 gap-y-4">
                        <div className="p-2 border rounded-md">
                            <p className="text-[16px] font-[500] text-gray-10">
                                Pay Bills
                            </p>
                        </div>
                        <div className="p-2 border rounded-md">
                            <p className="text-[16px] font-[500] text-gray-10">
                                Transfers Funds
                            </p>
                        </div>
                        <div className="p-2 border rounded-md">
                            <p className="text-[16px] font-[500] text-gray-10">
                                Deposit Money
                            </p>
                        </div>
                        <div className="p-2 border rounded-md">
                            <p className="text-[16px] font-[500] text-gray-10">
                                Account Management
                            </p>
                        </div>
                    </div>
                    <p className="text-[16px] font-[400] text-gray-10">Available on iOS and Android</p>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                        <CustomeButton
                            type="button"
                            title="App Store"
                            icon="/apple.svg"
                            variant="border-white bg-white px-8 py-3 text-green-600"
                            full
                        />
                        <CustomeButton
                            type="button"
                            title="Play Store"
                            icon="/android.svg"
                            variant="btn_dark_green_outline"
                            full
                        />
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <Image src="/GIB_Bank_Pics/mobile/mobile1.png" alt="phones" width={300} height={300} />
                    {/* <Image src="/GIB_Bank_Pics/mobile/online.png" alt="phones" width={500} height={500} /> */}
                </div>
            </div>
        </section>
    )
}

export default GetApp