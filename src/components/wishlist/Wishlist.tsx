import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Likeds from "../likeds/Likeds";

const Wishlist = () => {
    const wishlist = useSelector((state: RootState) => state.likeds.wishlist);

    return (
        <div className="container mx-auto p-8 bg-gray-100 min-h-screen my-10 rounded-3xl">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Your Wishlist</h1>
            {wishlist.length === 0 ? (
                <p className="text-gray-500 text-lg">Your wishlist is currently empty. Start adding items you love!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wishlist.map(item => (
                        <Likeds key={item.id} data={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
