import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FaTelegram, FaWhatsapp, FaViber } from 'react-icons/fa'
import Button from '../components/Button'
import '../components/styles/Contact.css'

const Contact = () => {
  const [contactMethod, setContactMethod] = useState('email')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    whatsapp: '',
    viber: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleContactMethodChange = (method) => {
    setContactMethod(method)
  }

  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact-heading">Зв'яжіться з нами</h2>
        <div className="contact-methods">
          <button
            className={`contact-method-btn ${
              contactMethod === 'email' ? 'active' : ''
            }`}
            onClick={() => handleContactMethodChange('email')}
          >
            <HiOutlineMail />
          </button>
          <button
            className={`contact-method-btn ${
              contactMethod === 'telegram' ? 'active' : ''
            }`}
            onClick={() => handleContactMethodChange('telegram')}
          >
            <FaTelegram />
          </button>
          <button
            className={`contact-method-btn ${
              contactMethod === 'whatsapp' ? 'active' : ''
            }`}
            onClick={() => handleContactMethodChange('whatsapp')}
          >
            <FaWhatsapp />
          </button>
          <button
            className={`contact-method-btn ${
              contactMethod === 'viber' ? 'active' : ''
            }`}
            onClick={() => handleContactMethodChange('viber')}
          >
            <FaViber />
          </button>
        </div>
        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            value={formData.name}
            onChange={handleChange}
          />
          {contactMethod === 'phone' && (
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
            />
          )}
          {contactMethod === 'email' && (
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
          )}
          {contactMethod === 'telegram' && (
            <input
              type="text"
              name="telegram"
              placeholder="Нік в Telegram"
              value={formData.telegram}
              onChange={handleChange}
            />
          )}
          {contactMethod === 'whatsapp' && (
            <input
              type="text"
              name="whatsapp"
              placeholder="Номер WhatsApp"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          )}
          {contactMethod === 'viber' && (
            <input
              type="text"
              name="viber"
              placeholder="Номер Viber"
              value={formData.viber}
              onChange={handleChange}
            />
          )}
          <textarea
            name="message"
            placeholder="Ваше повідомлення"
            value={formData.message}
            onChange={handleChange}
          />
          <Button label="Надіслати" onClick={() => console.log('форма')} />
        </form>
      </div>
    </section>
  )
}

export default Contact
