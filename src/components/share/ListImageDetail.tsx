import Image from "next/image";
import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IconArrowLeft, IconArrowRight } from "../../../public/icons";

const ButtonNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`top-2 py-5 leading-[64px] -right-5 absolute cursor-pointer border bg-white rounded-full`}
            onClick={onClick}
        >
            <IconArrowRight className="w-4 h-4"/>
        </div>
    )
}
const ButtonPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`top-2 py-5 leading-[64px] -left-5 absolute cursor-pointer border bg-white rounded-full`}
            onClick={onClick}
        >
            <IconArrowLeft className="w-4 h-4"/>
        </div>
    )
}

const ListImageDetail = () => {

    return (
        <div className="relative px-5">
            <Slider
                dots={false}
                infinite={false}
                slidesToShow={4}
                slidesToScroll={2}
                
                nextArrow={<ButtonNextArrow />}
                prevArrow={<ButtonPrevArrow />}
            >
                <div className="">
                    <Image
                        width={56}
                        height={56}
                        alt="Ảnh sản phẩm"
                        src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/73/b_0000057673.gif?w=243&f=webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="">
                    <Image
                        width={56}
                        height={56}
                        alt="Ảnh sản phẩm"
                        src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/72/b_0000057672.gif?w=243&f=webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="">
                    <Image
                        width={56}
                        height={56}
                        alt="Ảnh sản phẩm"
                        src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/71/b_0000057671.gif?w=243&f=webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="">
                    <Image
                        width={56}
                        height={56}
                        alt="Ảnh sản phẩm"
                        src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/64/b_0000057664.gif?w=243&f=webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="">
                    <Image
                        width={56}
                        height={56}
                        alt="Ảnh sản phẩm"
                        src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/57/b_0000057657.gif?w=243&f=webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="">
                    <Image
                        width={56}
                        height={56}
                        alt="Ảnh sản phẩm"
                        src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/56/b_0000057656.gif?w=243&f=webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="">
                    <Image
                        width={56}
                        height={56}
                        alt="Ảnh sản phẩm"
                        src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/54/b_0000057654.gif?w=243&f=webp"
                        className="w-full h-full object-cover"
                    />
                </div>
            </Slider>
        </div>
    )
}

export default ListImageDetail;

// <div className="flex">
//     <button>
//         <IconArrowLeft className="w-4 h-4"/>
//     </button>

    {/* <ul className="flex -translate-x-9">
        <li className="w-14 h-14 flex-shrink-0 border mr-3 cursor-pointer">
            <Image
                width={56}
                height={56}
                alt="Ảnh sản phẩm"
                src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/73/b_0000057673.gif?w=243&f=webp"
                className="w-full h-full object-cover"
            />
        </li>
        <li className="w-14 h-14 flex-shrink-0 border mr-3 cursor-pointer">
            <Image
                width={56}
                height={56}
                alt="Ảnh sản phẩm"
                src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/72/b_0000057672.gif?w=243&f=webp"
                className="w-full h-full object-cover"
            />
        </li>
        <li className="w-14 h-14 flex-shrink-0 border mr-3 cursor-pointer">
            <Image
                width={56}
                height={56}
                alt="Ảnh sản phẩm"
                src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/71/b_0000057671.gif?w=243&f=webp"
                className="w-full h-full object-cover"
            />
        </li>
        <li className="w-14 h-14 flex-shrink-0 border mr-3 cursor-pointer">
            <Image
                width={56}
                height={56}
                alt="Ảnh sản phẩm"
                src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/64/b_0000057664.gif?w=243&f=webp"
                className="w-full h-full object-cover"
            />
        </li>
        <li className="w-14 h-14 flex-shrink-0 border mr-3 cursor-pointer">
            <Image
                width={56}
                height={56}
                alt="Ảnh sản phẩm"
                src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/57/b_0000057657.gif?w=243&f=webp"
                className="w-full h-full object-cover"
            />
        </li>
        <li className="w-14 h-14 flex-shrink-0 border mr-3 cursor-pointer">
            <Image
                width={56}
                height={56}
                alt="Ảnh sản phẩm"
                src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/56/b_0000057656.gif?w=243&f=webp"
                className="w-full h-full object-cover"
            />
        </li>
        <li className="w-14 h-14 flex-shrink-0 border mr-3 cursor-pointer">
            <Image
                width={56}
                height={56}
                alt="Ảnh sản phẩm"
                src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/54/b_0000057654.gif?w=243&f=webp"
                className="w-full h-full object-cover"
            />
        </li>
    </ul> */}

//     <button>
//         <IconArrowRight className="w-4 h-4"/>
//     </button>
// </div>
