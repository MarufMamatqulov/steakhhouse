import * as React from "react";

const FooterCategory = ({ title, items }) => {
    return (
        <div className="flex flex-col items-start text-base font-bold leading-8 text-white max-md:mt-10">
            <h3 className="self-stretch text-2xl leading-none">{title}</h3>
            {items.map((item, index) => (
                <a href="#" key={index} className="mt-2 hover:text-gray-300">{item}</a>
            ))}
        </div>
    );
}

export default FooterCategory;