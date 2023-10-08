import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import '../components/styles/LeadMagnet.css'

const LeadMagnet = () => {
  const initialTime = 60 * 60 * 24 // 1 день в секундах
  const [timeLeft, setTimeLeft] = useState(initialTime)

  const formatTimeLeft = (time) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours}:${minutes}:${seconds}`
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1)
      }
    }, 1000)

    if (timeLeft === 0) {
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [timeLeft])

  return (
    <section className="lead-magnet" id="lead-magnet">
      <div className="container">
        <div className="lead-magnet-content">
          <div className="gift-image">
            <img
              src="https://qlaw.co.uk/wp-content/uploads/2022/07/lpa-gifts.jpg"
              alt="Подарунок"
            />
          </div>
          <div className="text-content">
            <h2>Унікальна пропозиція!</h2>
            <p>Тільки сьогодні отримайте подарунок!</p>
            <p>До кінця акції залишилося: {formatTimeLeft(timeLeft)}</p>
            <Button
              label="Детальніше"
              onClick={() => console.log('Замовлення')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadMagnet
