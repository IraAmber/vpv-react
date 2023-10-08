import React, { useState, useEffect } from 'react'
// import './DiscountRoulette.css'; // Це ваші стилі

const DiscountRoulette = () => {
  const [isSpinning, setIsSpinning] = useState(false)
  const [discount, setDiscount] = useState(null)
  const [showNotification, setShowNotification] = useState(false)

  const handleSpinClick = () => {
    setIsSpinning(true)

    const randomDiscount = Math.floor(Math.random() * 50) + 1

    setTimeout(() => {
      setDiscount(randomDiscount)
      setIsSpinning(false)
    }, 10000)
  }

  const handleContactClick = () => {
    setShowNotification(true)
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
  }

  useEffect(() => {
    if (discount !== null) {
      // Показати сповіщення після встановлення знижки
      setShowNotification(true)
    } else {
      setShowNotification(false)
    }
  }, [discount])

  return (
    <div className={`discount-roulette ${isSpinning ? 'spinning' : ''}`}>
      {isSpinning ? (
        <div className="roulette">{/* Анімація обертання рулетки */}</div>
      ) : (
        <div className="result">
          {discount !== null ? (
            <>
              <h3>Ваша знижка:</h3>
              <p>{discount}%</p>
              <button onClick={handleContactClick}>Написати нам</button>
            </>
          ) : (
            <>
              <h3>Отримайте знижку</h3>
              <button onClick={handleSpinClick}>Отримати знижку</button>
            </>
          )}
        </div>
      )}

      {showNotification && (
        <div className="notification">
          <h3>Ваша знижка:</h3>
          <p>{discount}%</p>
          <button onClick={handleCloseNotification}>Закрити</button>
        </div>
      )}
    </div>
  )
}

export default DiscountRoulette
