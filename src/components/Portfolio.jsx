import React from 'react'
import Slider from 'react-slick'
import Button from '../components/Button'
import '../components/styles/Portfolio.css'

const Portfolio = () => {
  const portfolioData = [
    {
      type: 'image', // 'image' або 'video'
      src: 'image1.jpg', // посилання на фото або відео
      description: 'Опис 1', // опис позиції
    },
    {
      type: 'video',
      src: 'video1.mp4',
      description: 'Опис 2',
    },
    {
      type: 'image',
      src: 'image2.jpg',
      description: 'Опис 3',
    },
    {
      type: 'image',
      src: 'image2.jpg',
      description: 'Опис 3',
    },
    {
      type: 'image',
      src: 'image2.jpg',
      description: 'Опис 3',
    },
    {
      type: 'image',
      src: 'image2.jpg',
      description: 'Опис 3',
    },
    // Додайте більше позицій, якщо потрібно
  ]

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2>Портфоліо</h2>
        <Slider {...sliderSettings}>
          {portfolioData.map((item, index) => (
            <div key={index} className="portfolio-item">
              {item.type === 'image' && (
                <img src={item.src} alt={`Позиція ${index}`} />
              )}
              {item.type === 'video' && (
                <video controls>
                  <source src={item.src} type="video/mp4" />
                  Ваш браузер не підтримує відео.
                </video>
              )}
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
      <Button label="Хочу вже" onClick={() => console.log('Замовлення')} />
    </section>
  )
}

export default Portfolio
