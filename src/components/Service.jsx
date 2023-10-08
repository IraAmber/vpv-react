import React from 'react'
import { FaCheck } from 'react-icons/fa' // Приклад використання react-icons
import Button from '../components/Button'
import '../components/styles/Service.css'

const Service = ({ title, description, advantages, image }) => {
  return (
    <div className="service" id="service">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-details">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <div className="service-advantages">
          <h4>Переваги:</h4>
          <ul>
            {advantages.map((advantage, index) => (
              <li key={index} className="service-li">
                <FaCheck /> {advantage}
              </li>
            ))}
          </ul>
        </div>
        <Button label="Хочу" onClick={() => console.log('Замовлення')} />
      </div>
    </div>
  )
}

export default Service
