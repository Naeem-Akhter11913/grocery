import React from 'react'
import image1 from '../../assets/images/cat-13.png'
import './tinyCategories.css'

const TinyCategories = ({ name, items, image }) => {
  return (
    <div className="card">
      <img src={image1} alt='iii' className="card-image" />
      <h3 className="card-title">card title</h3>
      <p className="card-items">items</p>
    </div>
    // <div className="card">
    //   <img src={require(`./assets/${image}`)} alt={name} className="card-image" />
    //   <h3 className="card-title">{name}</h3>
    //   <p className="card-items">{items} items</p>
    // </div>
  )
}

export default TinyCategories