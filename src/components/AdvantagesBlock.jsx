import React from 'react'
import { FaCheck } from 'react-icons/fa'
import Button from '../components/Button'
import '../components/styles/AdvantagesBlock.css'

const AdvantagesBlock = () => {
  const advantagesData = [
    {
      icon: <FaCheck />,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
    },
    {
      icon: <FaCheck />,
      text: 'Lorem ipsum dolor sit amet, consectetur ng elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
      icon: <FaCheck />,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
    },
    {
      icon: <FaCheck />,
      text: 'Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
    },
    {
      icon: <FaCheck />,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
    },
    {
      icon: <FaCheck />,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
    },
  ]

  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="row">
          {advantagesData.map((advantage, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="advantage">
                <div className="advantage-icon pulsating-icon">
                  {advantage.icon}
                </div>
                <p className="advantage-text">{advantage.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12 advantage-button">
            <Button
              label="Замовити"
              onClick={() => console.log('Замовлення')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvantagesBlock
