import { useDispatch, useSelector } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { clearCart,removeItems } from "../utils/CartSlice";
const Cart=()=>{

    const items=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleclearCart=()=>{
        dispatch(clearCart())
    }

    const handleremoveItem=(item)=>{
        dispatch(removeItems(item))
    }
    return (
        <div>
            {items.length === 0 ? (
                <h1 className="font-bold align-middle my-4">Cart is empty</h1>
            ) : (
                <div>
                    <h1 className="font-bold align-middle my-4">
                        Below are the Cart Items 
                    </h1>
                    <button
                        className="bg-red-400 text-white p-2 rounded-lg"
                        onClick={() => handleclearCart()}
                    >
                        Clear Cart
                    </button>
                    {items.map((i) => (
                        <div
                            className="p-4 my-2 border-gray-200 border-b-2 text-left cursor-pointer"
                            key={i.card.info.id}
                        >
                            <div className="py-2 font-bold">
                                <div className="flex justify-between">
                                    <img
                                        src={CDN_URL + i.card.info.imageId}
                                        className="h-15 w-20"
                                    />
                                    <button className="text-red-400 border-black" onClick={() => handleremoveItem(i)}>
                                        Remove
                                    </button>
                                </div>
                                <span>{i.card?.info?.name}</span>
                                <span>- </span>
                                <span>
                                    ₹
                                    {(i.card?.info?.price / 100) ||
                                        (i.card?.info?.defaultPrice / 100)}
                                </span>
                            </div>
                            <p>{i.card?.info?.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Cart;