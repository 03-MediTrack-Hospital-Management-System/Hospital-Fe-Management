import React from 'react';
import FoodCard from './FoodCard';

const sections = [
    {
        title: 'Burgers',
        items: [
            { id: 1, title: 'Royal Cheese Burger', description: 'With cheddar cheese, pickles, onions and mustard', price: '5.99', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&h=300&fit=crop' },
            { id: 2, title: 'Big Mac', description: 'Double burger, cheese, lettuce, onions and pickles', price: '6.49', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=300&h=300&fit=crop' },
            { id: 3, title: 'McChicken', description: 'Crispy chicken, lettuce and mayonnaise', price: '4.99', image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=300&h=300&fit=crop' },
            { id: 4, title: 'Quarter Pounder', description: 'With cheese, onions, pickles and mustard', price: '6.29', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=300&h=300&fit=crop' },
            { id: 5, title: 'Chicken Selects', description: '5 pieces of chicken selects with dip', price: '7.99', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?q=80&w=300&h=300&fit=crop' },
            { id: 6, title: 'Big Tasty', description: 'Original sauce, cheese, onions and lettuce', price: '8.49', image: 'https://images.unsplash.com/photo-1534790563855-46d499202021?q=80&w=300&h=300&fit=crop' },
        ]
    },
    {
        title: 'Fries',
        items: [
            { id: 7, title: 'Large Fries', description: 'Crunchy golden potatoes, lightly salted', price: '2.50', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=300&h=300&fit=crop' },
            { id: 8, title: 'Medium Fries', description: 'Crunchy golden potatoes, lightly salted', price: '1.99', image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=300&h=300&fit=crop' },
            { id: 9, title: 'Cheesy Loaded Fries', description: 'Fries topped with melted cheddar and bacon', price: '4.50', image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=300&h=300&fit=crop' },
        ]
    },
    {
        title: 'Cold Drinks',
        items: [
            { id: 10, title: 'Coca-Cola Zero', description: '0.5l Bottle', price: '2.10', image: 'https://images.unsplash.com/photo-1622483767028-3f66f361ef56?q=80&w=300&h=300&fit=crop' },
            { id: 11, title: 'Sprite', description: '0.5l Bottle', price: '2.10', image: 'https://images.unsplash.com/photo-1625772290748-39123d81861e?q=80&w=300&h=300&fit=crop' },
            { id: 12, title: 'Fanta Orange', description: '0.5l Bottle', price: '2.10', image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=300&h=300&fit=crop' },
        ]
    }
];

const FoodGrid = () => {
    return (
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-12 space-y-16">
            {sections.map((section) => (
                <div key={section.title} className="space-y-8">
                    <h2 className="text-3xl font-black text-orange-500 border-l-4 border-orange-500 pl-4">{section.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.items.map((item) => (
                            <FoodCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodGrid;
