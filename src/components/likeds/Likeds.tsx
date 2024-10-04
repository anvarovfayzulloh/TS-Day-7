import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { TFetchData } from "../../types";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addLike, unLike } from "../../redux/slice/likeSlice";
import { RootState } from "../../redux/store";

const Likeds: React.FC<{ data: TFetchData }> = ({ data }) => {
    const dispatch = useDispatch<AppDispatch>();

    const wishlist = useSelector((state: RootState) => state.likeds.wishlist);
    const isLiked = wishlist.some(item => item.id === data.id);
    const handleLike = async () => {
        dispatch(addLike(data));
    };

    const handleUnLike = async (id: number) => {
        dispatch(unLike(id));
    };

    return (
        <div className="bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-xl p-6 transition-transform   ">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <div>
                        <img className="w-[288px] h-[288px] object-contain" src={data.images[0]} alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl text-gray-900 max-w-[230px] w-full">{data.title.slice(0, 15)}...</h1>
                        <div>
                            {isLiked ? (
                                <FcLike onClick={() => handleUnLike(data.id)} className="w-10 h-10 text-red-500 cursor-pointer hover:scale-110 transition-transform" />
                            ) : (
                                <FcLikePlaceholder onClick={() => handleLike()} className="w-10 h-10 text-gray-500 cursor-pointer hover:scale-110 transition-transform" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{data.description}</p>
            <div className="flex justify-between items-center mb-4">
                <span className="text-green-500 font-semibold text-xl">${data.price}</span>
                <span className="bg-red-500 text-white font-bold text-xs px-2 py-1 rounded-md">
                    {data.discountPercentage}% OFF
                </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
                <p>Category: {data.category}</p>
                <p>Rating: {data.rating} ⭐</p>
            </div>
        </div>
    );
};

export default Likeds;
