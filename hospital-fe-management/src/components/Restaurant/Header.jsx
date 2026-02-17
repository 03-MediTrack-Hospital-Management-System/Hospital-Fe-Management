import React from 'react';
import { Search, MapPin, ShoppingCart, User, Menu } from 'lucide-react';

const Header = () => {
    return (
        <div className="w-full">
            {/* Top Banner */}
            <div className="bg-gray-100 py-2 px-4 md:px-12 flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                        <span className="text-orange-500">★</span> Get 5% Off your first order, <span className="text-orange-500 font-bold underline cursor-pointer">Promo: ORDER5</span>
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <span className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                        <MapPin size={16} /> Regent Street, London, <span className="text-orange-500 underline">Change Location</span>
                    </span>
                    <div className="flex bg-green-700 text-white rounded-full px-4 py-1.5 items-center gap-2 cursor-pointer hover:bg-green-800 transition-colors">
                        <ShoppingCart size={16} />
                        <span className="font-medium">2 Items</span>
                        <span className="border-l border-green-600 pl-2 ml-1">£20.40</span>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <header className="bg-white py-4 px-4 md:px-12 flex justify-between items-center border-b border-gray-100 sticky top-0 z-50 shadow-sm">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-1">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">O</div>
                        <span className="text-2xl font-bold tracking-tight">Order.uk</span>
                    </div>
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
                        <a href="#" className="text-orange-500 border-b-2 border-orange-500 pb-1">Home</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Special Offers</a>
                        <a href="#" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all">Restaurants</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Track Order</a>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-black transition-all">
                        <User size={18} />
                        <span>Login/Signup</span>
                    </button>
                    <button className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                        <Menu size={24} />
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
