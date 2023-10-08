import React from 'react'
import Button from '../components/Button' // Імпортуємо компонент кнопки
import photo from '../photo.png'
import '../components/styles/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hero-text">
            <h1>Любомир Лужний</h1>
            <br />
            <h2>- ведмідь з Кремнієвої Долини🤟🏿🐻</h2>
            <h2>- не піздабол, а шоумен</h2>
            <p>Робить найкращий Web-продукт!</p>
            <Button
              label="Замовити"
              onClick={() => console.log('Замовлення')}
            />
          </div>
          <div className="col-md-6">
            <img src={photo} alt="Фото виконавця" className="artist-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
