import React from 'react';
import { Clock, Info, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative w-full max-w-[1400px] mx-auto mt-6 md:mt-8 px-4 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-[40px] bg-[#03081F] text-white min-h-[400px] md:min-h-[450px]"
            >
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop)' }}
                />

                {/* Content */}
                <div className="relative z-20 p-8 md:p-16 flex flex-col justify-center h-full max-w-2xl">
                    <p className="text-orange-500 font-medium mb-4 flex items-center gap-2">
                        I'm lovin' it!
                    </p>
                    <h1 className="text-5xl md:text-6xl font-black mb-10 leading-tight">
                        McDonald's East London
                    </h1>

                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex bg-white/10 backdrop-blur-md rounded-full px-6 py-4 items-center gap-3 border border-white/20">
                            <span className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                <Clock className="text-white" size={20} />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-xs text-white/60">Minimum Order</span>
                                <span className="font-bold">£2.49</span>
                            </div>
                        </div>

                        <div className="flex bg-white/10 backdrop-blur-md rounded-full px-6 py-4 items-center gap-3 border border-white/20">
                            <span className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                <Clock className="text-white" size={20} />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-xs text-white/60">Delivery Time</span>
                                <span className="font-bold">20-30 min</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rating Card Floating */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-10 right-10 md:right-16 z-30 bg-white text-black p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-2"
                >
                    <div className="flex items-center gap-1">
                        <Star className="fill-orange-400 text-orange-400" size={24} />
                        <span className="text-4xl font-black">3.4</span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">1,340 Reviews</span>
                </motion.div>

                {/* Info/Heart Floating */}
                <div className="absolute top-10 right-10 md:right-16 z-30 flex gap-4">
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all">
                        <Heart size={20} />
                    </button>
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all">
                        <Info size={20} />
                    </button>
                </div>
            </motion.div>

            {/* Offers Summary Bar */}
            <div className="mt-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">All Offers from McDonald's East London</h2>
                <div className="relative hidden md:block w-72">
                    <input
                        type="text"
                        placeholder="Search in menu..."
                        className="w-full px-6 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all pl-12"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
