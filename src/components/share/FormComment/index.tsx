import Comment from "./Comment";


const FormComment = () => {

    return (
        <div className="">
            <div>
                <textarea
                    className="w-full border min-h-[150px] max-h-[300px] px-3 py-3 mb-5 outline-none"
                    placeholder="Mời bạn bình luận hoặc đặt câu hỏi"
                />
                <div className="relative mb-3">
                    <label className="absolute text-sm top-[2px] left-2 text-gray-500">Họ và tên*</label>
                    <input
                        className="border rounded-md px-2 pb-1 pt-4 w-full"
                    />
                </div>
                <div className="relative mb-3">
                    <label className="absolute text-sm top-[2px] left-2 text-gray-500">Số điện thoại</label>
                    <input
                        className="border rounded-md px-2 pb-1 pt-4 w-full"
                    />
                </div>
                <div className="relative mb-3">
                    <label className="absolute text-sm top-[2px] left-2 text-gray-500">Email</label>
                    <input
                        className="border rounded-md px-2 pb-1 pt-4 w-full"
                    />
                </div>
                <button className="uppercase text-center w-full rounded-lg bg-sky-500 hover:bg-sky-500/80 text-white py-3">Gửi</button>

            </div>



            <div>
                <Comment />
            </div>
        </div>
    )
}

export default FormComment;