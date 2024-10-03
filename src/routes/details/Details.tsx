import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/api";
import { TFetchData } from "../../types";
import { FcLikePlaceholder, FcLike } from "react-icons/fc"; // Import icons
import { useDispatch, useSelector } from "react-redux";
import { addLike, unLike } from "../../redux/slice/likeSlice";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";

const Details = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<TFetchData>();
  const dispatch = useDispatch<AppDispatch>();
  
  const wishlist = useSelector((state: RootState) => state.likeds.wishlist);
  const isLiked = wishlist.some(item => item.id === Number(id));

  useEffect(() => {
    const loadingData = async () => {
      const response = await axios.get(`/product/${id}`);
      console.log(response.data);
      setUserData(response.data);
    };
    loadingData();
  }, [id]);

  const handleLike = () => {
    if (userData) {
      dispatch(addLike(userData));
    }
  };

  const handleUnLike = () => {
    dispatch(unLike(Number(id)));
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={userData.images[0]}  alt={userData.title} className="w-full h-[335px] object-cover rounded-lg mb-4" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{userData.title}</h1>
          <p className="text-sm text-gray-600 mb-4">{userData.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-green-500 font-semibold text-xl mr-4">${userData.price}</span>
            <span className="bg-red-500 text-white font-bold text-xs px-2 py-1 rounded-md">
              {userData.discountPercentage}% OFF
            </span>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold text-lg">Rating: {userData.rating} ⭐</span>
            <div className="ml-4">
              {isLiked ? (
                <FcLike onClick={handleUnLike} className="w-8 h-8 text-red-500 cursor-pointer hover:scale-110 transition-transform"/>
              ) : (
                <FcLikePlaceholder onClick={handleLike} className="w-8 h-8 text-gray-500 cursor-pointer hover:scale-110 transition-transform"/>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
              Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md mt-2 hover:bg-gray-300 transition">
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
