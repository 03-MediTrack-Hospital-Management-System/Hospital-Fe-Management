import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const FoodCard = ({ title, description, price, image }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-6 group"
        >
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-gray-900">£{price}</span>
                    <button className="w-12 h-12 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center text-gray-900 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all transform group-active:scale-95 shadow-sm">
                        <Plus size={24} />
                    </button>
                </div>
            </div>
            <div className="w-28 h-28 md:w-36 md:h-36 shrink-0 relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-2xl"
                />
                {/* Shadow for image to make it pop */}
                <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none" />
            </div>
        </motion.div>
    );
};

export default FoodCard;
