import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import '../components/styles/Button.css'

const Button = ({ label, onClick }) => {
  return (
    <button className="animated-button" onClick={onClick}>
      <span className="button-text">{label}</span>
      <span className="button-animation"></span>
      <FaArrowRight className="arrow-icon" />{' '}
    </button>
  )
}

export default Button
