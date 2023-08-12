import Image from "next/image";

import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import ListImageDetail from "@/components/share/ListImageDetail";
import { IconHeart } from "../../../public/icons";
import { ListStar } from "@/components/share/ListStar";


interface ProductDetailProps {

}

const ProductDetail : NextPageWithLayout<ProductDetailProps> = () => {

    return (
        <div className="lg:max-w-screen-xl sm:max-w-screen-md max-w-screen-sm w-full mx-auto px-3">

            <div className="md:flex">
                <div className="relative md:w-4/12 mb-5">
                    <div className="bg-gray-100 overflow-hidden border mb-3">
                        <Image
                            width={300}
                            height={300}
                            alt="Ảnh sản phẩm"
                            src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/74/b_0000057674.gif?w=243&f=webp"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <ListImageDetail />
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

                    <div className="flex items-center leading-tight">
                        <ListStar numb={4.5}/>
                        <p className="px-2">(Xem 18 đánh giá)</p>
                        <p className="px-2 border-l">Đã bán 70</p>
                    </div>

                    <div className="mb-4">
                        <ul className="flex flex-wrap gap-2">
                            <li className="py-1 px-2 cursor-pointer min-w-[80px] text-center border border-blue-600 hover:bg-gray-200 rounded-md">xanh</li>
                            <li className="py-1 px-2 cursor-pointer min-w-[80px] text-center border border-blue-600 hover:bg-gray-200 rounded-md">đỏ</li>
                            <li className="py-1 px-2 cursor-pointer min-w-[80px] text-center border border-blue-600 hover:bg-gray-200 rounded-md">tím</li>
                            <li className="py-1 px-2 cursor-pointer min-w-[80px] text-center border border-blue-600 hover:bg-gray-200 rounded-md">vàng</li>
                            <li className="py-1 px-2 cursor-pointer min-w-[80px] text-center border border-blue-600 hover:bg-gray-200 rounded-md">cam</li>
                        </ul>
                    </div>
                    
                    <div className="flex">
                        <button className="sm:p-4 p-3 border mr-2 bg-white hover:bg-slate-50">
                            <IconHeart className="w-5 h-5"/>
                        </button>
                        <button className="sm:py-3 py-2 border bg-gray-600 hover:bg-gray-700/80 text-white uppercase font-semibold flex-1 mr-2">
                            Thêm vào giỏ hàng
                        </button>
                        <button className="sm:py-3 py-2 border bg-blue-600 hover:bg-blue-700/90 text-white uppercase font-semibold flex-1">
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>

            <div>

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
    )
}

export default ProductDetail;

ProductDetail.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
