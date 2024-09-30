import React from 'react'
import './categories.css'
import TinyCategories from '../../components/carts/TinyCategories';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const data = [
    { name: 'Custard Apple', items: 34, image: 'cat-1.png' },
    { name: 'Coffee & Tea', items: 89, image: 'cat-1.png' },
    { name: 'Headphone', items: 87, image: 'cat-1.png' },
    { name: 'Cake & Milk', items: 26, image: 'cat-1.png' },
    { name: 'Organic Kiwi', items: 28, image: 'cat-1.png' },
    { name: 'Peach', items: 14, image: 'cat-1.png' },
    { name: 'Red Apple', items: 54, image: 'cat-1.png' },
    { name: 'Snack', items: 56, image: 'cat-1.png' },
    { name: 'Vegetables', items: 72, image: 'cat-1.png' },
    { name: 'Strawberry', items: 36, image: 'cat-1.png' },
    { name: 'Snack', items: 56, image: 'cat-1.png' },
    { name: 'Vegetables', items: 72, image: 'cat-1.png' },
    { name: 'Strawberry', items: 36, image: 'cat-1.png' },
];

// const bigCart = [
//     {
//         text: 
//     }
// ]

const Categories = () => {
    return (
        <div style={{ marginBottom: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: "25px", paddingRight: "25px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>Featured Categories</h1>
                    <p>Cake & Milk</p>
                    <p>Coffes & Teas</p>
                    <p>Pet Foods</p>
                    <p>Vegetables</p>
                </div>
                <div>
                    <WestIcon />
                    <EastIcon />
                </div>
            </div>
            <div className="card-container">
                {data.map((item, index) => (
                    <TinyCategories key={index} name={item.name} items={item.items} image={item.image} />
                ))}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Categories