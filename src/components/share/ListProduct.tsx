import Image from "next/image"
import Link from "next/link";

const ListProduct = () => {

    return (
        <div>
            <ul className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12].map(product => {
                        return (
                            <li key={product} className="bg-white border hover:shadow-md">
                                <Link href={`/`}>
                                    <article>
                                        <div className="w-full sm:h-56 h-48 bg-gray-100 overflow-hidden">
                                            <Image
                                                width={300}
                                                height={300}
                                                alt="Ảnh sản phẩm"
                                                src="https://image.folderstyle.com/data/folderstyle_data/images/product/00/00/05/76/74/b_0000057674.gif?w=243&f=webp"
                                                className="h-48 w-full object-cover"
                                            />
                                        </div>
                                        <div className="px-2 py-2 [&>div]:mb-2">
                                            <div>
                                                <h3 className="line-clamp-2">Điện thoại Xiaomi Redmi Note 12 (4GB/128GB) - Hàng chính hãng</h3>
                                            </div>
                                            <div className="text-sm">
                                                Đã bán 7
                                            </div>
                                            <div className="text-lg flex items-center">
                                                {/* <span></span> */}
                                                <span className="font-semibold">3.970.000<sub className="top-0 ml-1">₫</sub></span>
                                                <span className="bg-gray-200 px-1 ml-auto pl-2">-20%</span>
                                            </div>
                                            <div>
                                                {/* <Star className="w-4 h-4"/> */}
                                                {/* <Star /> */}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListProduct;