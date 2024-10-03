import { AiFillStar } from "react-icons/ai"; 
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { TFetchData } from "../../types";
import { FC } from "react";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addLike, unLike } from "../../redux/slice/likeSlice";
import { RootState } from "../../redux/store";

const Card: FC<{ data: TFetchData }> = ({ data }) => {
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
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link to={`/details/${data.id}`} className="relative">
                <img className="w-full h-64 object-cover" src={data.thumbnail} alt={data.title} />
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
                    {data.discountPercentage}% OFF
                </span>
            </Link>
            <div className="p-4">
                <h1 className="font-bold text-lg mb-2">{data.title}</h1>
                <p className="text-sm text-gray-700 mb-3">{data.description}</p>
                <p className="text-xl font-semibold text-green-600 mb-3">${data.price}</p>
                <div className="flex items-center justify-between" >
                    <div>
                        <p className="text-gray-500 text-sm">Category: {data.category}</p>
                        <p className="text-gray-500 text-sm flex items-center gap-3 mt-3">Rating: {data.rating} <AiFillStar className="w-[20px] h-[20px]" color="orange" /></p>
                    </div>
                    <div>
                        {isLiked ? (
                            <FcLike onClick={() => handleUnLike(data.id)} className="w-[30px] h-[30px] cursor-pointer hover:scale-110 transition-transform" />
                        ) : (
                            <FcLikePlaceholder onClick={() => handleLike()} className="w-[30px] h-[30px] cursor-pointer hover:scale-110 transition-transform" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
