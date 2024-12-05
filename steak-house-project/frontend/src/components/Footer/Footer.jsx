import * as React from "react";
import FooterCategory from "./FooterCategory";
import {FaLocationDot, FaPhone} from "react-icons/fa6";
import {HiOutlineMailOpen} from "react-icons/hi";

function Footer() {
    const categories = {
        topCategories: {
            title: "TOP CATEGORIES",
            items: ["All menu", "Large steaks", "Medium steaks", "Small steaks"]
        },
        help: {
            title: "HELP",
            items: ["Delivery", "Returns"]
        },
        aboutUs: {
            title: "ABOUT US",
            items: ["Privacy Policy", "Terms of Service"]
        }
    };

    const socialIcons = [
        "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/4589402fd3dbe3b674e059d253e2be948820f3162383bfcdb25bb24d205c6dfd?apiKey=0e60d26ffe404316aa35b6241738714a&",
        "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/3148c452b6c0f3ed416a3bdfa86ce4f6b44d670feb7759f421907ff7b7b1cf79?apiKey=0e60d26ffe404316aa35b6241738714a&",
        "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/a6a38cb1516f14d28caa4057b030f2d7b49d3ee610537883405bcff216b0a161?apiKey=0e60d26ffe404316aa35b6241738714a&"
    ];

    return (
        <footer id="footer" className="flex flex-col mt-5">
            <section className="flex justify-evenly items-center p-3 mt-1.5 w-full bg-zinc-800 bg-opacity-50 max-md:max-w-full max-md:flex-col max-md:items-start">
                <img src="/logo.svg" className="max-md:mb-4" />
                <div className="flex items-center gap-2 max-md:mb-4">
                    <FaLocationDot size="20" className="text-white" />
                    <div className="self-stretch my-auto text-sm font-semibold leading-6 text-white">
                        70 West Buckingham Ave.<br />
                        Farmingdale, NY 11735
                    </div>
                </div>

                <div className="flex items-center gap-2 max-md:mb-4">
                    <HiOutlineMailOpen size="20" className="text-white" />
                    <div className="self-stretch my-auto text-sm font-semibold leading-6 text-white">
                        contact@steakhouse.com
                    </div>
                </div>

                <div className="flex items-center gap-2 max-md:mb-4">
                    <FaPhone size="20" className="text-white" />
                    <div className="self-stretch my-auto text-sm font-semibold leading-6 text-white">
                        +88 01911 717 490
                    </div>
                </div>
            </section>


            <section
                className="flex z-10 flex-col justify-center items-center px-16 py-8 w-full bg-zinc-800 max-md:px-5 max-md:max-w-full">
                <div className="w-full max-w-[1211px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                            <div className="grow max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                                        <FooterCategory {...categories.topCategories} />
                                    </div>
                                    <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                                            <div className="max-md:max-w-full">
                                                <div className="flex gap-5 max-md:flex-col">
                                                    <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                                                        <FooterCategory {...categories.help} />
                                                    </div>
                                                    <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                                                        <FooterCategory {...categories.aboutUs} />
                                                    </div>
                                                    <div className="flex flex-col ml-5 w-[48%] max-md:ml-0 max-md:w-full">
                                                        <div className="flex flex-col w-full max-md:mt-10">
                                                            <h3 className="self-start text-2xl font-bold leading-none text-white">
                                                                FOLLOW US
                                                            </h3>
                                                            <div className="flex gap-5 justify-start mt-3.5">
                                                                {socialIcons.map((icon, index) => (
                                                                    <img
                                                                        key={index}
                                                                        loading="lazy"
                                                                        src={icon}
                                                                        className="object-contain shrink-0 w-8 aspect-square"
                                                                        alt=""
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-start text-base font-extrabold leading-8 text-white">
                                                Payments
                                            </div>
                                            <div className="self-end mt-16 text-sm font-extrabold leading-loose text-white max-md:mt-10 max-md:mr-2">
                                                © 2024 SteakHouse. All Rights Reserved.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-2xl font-extrabold leading-none text-white max-md:mt-10">
                                <h3 className="self-center mb-3">FIND OUR RESTOURANT</h3>
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A3643749526b4f9bd8a06e7d87db46bc7b6c2f3df463461b9dc9b020d932273ca&amp;source=constructor"
                                    width="388" height="138" frameBorder="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;