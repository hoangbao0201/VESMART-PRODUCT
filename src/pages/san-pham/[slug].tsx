import Image from "next/image";

import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";


interface ProductDetailProps {

}

const ProductDetail : NextPageWithLayout<ProductDetailProps> = () => {

    return (
        <div className="lg:max-w-screen-lg sm:max-w-screen-md max-w-screen-sm w-full mx-auto px-3">

            <div className="md:flex">
                <div className="relative md:w-4/12 md:mx-6 mb-5 bg-gray-100 overflow-hidden border">
                    <Image
                        width={300}
                        height={300}
                        alt="Ảnh sản phẩm"
                        src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/74/b_0000057674.gif?w=243&f=webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative md:w-8/12 md:px-4">
                    <div className="mb-4">
                        <h1 className="font-base text-xl">Hộp Đựng Đồ Lớn, Tủ Đựng Đồ 2 Cửa Đựng Quần Áo Sách Đồ Chơi Đa Năng Trong Suốt Nhựa Gấp Gọn (45L & 95L)</h1>
                    </div>

                    <div className="p-4 mb-4 bg-gray-100 flex items-end leading-none">
                        <div className="font-semibold text-[30px] text-rose-500 mr-3">599.000 ₫</div>
                        <div className="line-through mr-3">856.000 ₫</div>
                        <div className="font-semibold text-rose-500">-30%</div>
                    </div>

                    <div className="bg-white">
                        <h2 className="font-semibold text-lg mb-4">Thông tin chi tiết</h2>

                        <ul className="block [&>li]:flex [&>li]:py-2">
                            <li className="bg-gray-100">
                                <div className="basis-[35%]">Danh Mục</div>
                                <p className="ml-4 flex-1">Nội thất phòng ngủ</p>
                            </li>
                            <li className="">
                                <div className="basis-[35%]">Cung cấp bởi</div>
                                <p className="ml-4 flex-1">Vando Official Store</p>
                            </li>
                            <li className="bg-gray-100">
                                <div className="basis-[35%]">Thương hiệu</div>
                                <p className="ml-4 flex-1">VANDO</p>
                            </li>
                            <li className="">
                                <div className="basis-[35%]">Xuất xứ thương hiệu</div>
                                <p className="ml-4 flex-1">Việt Nam</p>
                            </li>
                            <li className="bg-gray-100">
                                <div className="basis-[35%]">Chất liệu</div>
                                <p className="ml-4 flex-1">Chất liệu: Nhựa (PP+HIPS+PS) </p>
                            </li>
                            <li className="">
                                <div className="basis-[35%]">Hướng dẫn sử dụng</div>
                                <p className="ml-4 flex-1">Video được thực hiện vởi VANDO - Click xem Tại đây</p>
                            </li>
                            <li className="bg-gray-100">
                                <div className="basis-[35%]">Xuất xứ</div>
                                <p className="ml-4 flex-1">Trung Quốc</p>
                            </li>
                            <li className="">
                                <div className="basis-[35%]">Sản phẩm có được bảo hành không?</div>
                                <p className="ml-4 flex-1">Không</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail;

ProductDetail.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
