import React, { useState } from 'react';

const categories = [
    'Offers', 'Burgers', 'Fries', 'Cold Drinks', 'Chicken', 'Salads', 'Desserts', 'Sauces', 'Happy Meal', 'Coffee'
];

const CategoryNav = () => {
    const [active, setActive] = useState('Offers');

    return (
        <div className="w-full bg-orange-500 mt-10 sticky top-[80px] z-40">
            <div className="max-w-[1400px] mx-auto overflow-x-auto no-scrollbar">
                <div className="flex items-center px-4 md:px-12 h-16 whitespace-nowrap gap-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`text-sm font-bold transition-all px-6 py-2 rounded-full ${active === cat
                                    ? 'bg-black text-white'
                                    : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryNav;
