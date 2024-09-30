import React from 'react'
import './categories.css'
import TinyCategories from '../../components/carts/TinyCategories';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import CategoryCart from '../../components/carts/CategoryCart';

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

const bigCart = [
    {
        text: <h6 style={{
            fontSize: "30px",
            lineHeight: '40px',
            fontWeight: '100'
          }}>Everyday Fresh & <br />
            Clean with Our
            Products</h6>,
        image: 'banner-1.png'
    }, {
        text: <h6 style={{
            fontSize: "30px",
            lineHeight: '40px',
            fontWeight: '100'
          }}>Make your Breakfast <br />
            Healthy and Easy</h6>,
        image: 'banner-2.png'
    }, {
        text: <h6 style={{
            fontSize: "30px",
            lineHeight: '40px',
            fontWeight: '100'
          }}>The best Organic<br />
            Products Online</h6>,
        image: 'banner-3.png'
    }
]

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
            <div className='card-container'>
                {bigCart.map(item => (
                    <CategoryCart title={item.text} image={item.image} />
                ))}
            </div>
        </div>
    )
}

export default Categories