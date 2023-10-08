import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../components/styles/Feedbacks.css'

const feedbacksData = [
  {
    author: 'Жанна',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JtCFwArpqeqFNNb26d3lvolz62Zt1vLXuQ&usqp=CAUы', // Додайте шлях до фото автора
  },
  {
    author: 'Аня',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifpzJn0ifMOlVLlvFyv95d7HzP7XWiJJDaA&usqp=CAU',
  },
  {
    author: 'Артур',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlb-LOWgTvoFtyBYVFVGRKYnDoDJkcwPxTw&usqp=CAU',
  },
  {
    author: 'Оля',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9kKY2C1Ajm_gZET1aukntzyfE6PMCy2CJiw&usqp=CAU',
  },
  {
    author: 'Денис',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CF6haSCioRNvERtdHAag_z1e6Mmg-zHEljWeIClexiUX--_Idgd3JFSBuedACyfmg1Y&usqp=CAU',
  },
  // Додайте більше відгуків, якщо потрібно
]

const Feedbacks = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  }

  return (
    <section className="feedbacks" id="feedbacks">
      <div className="container">
        <h2>Відгуки</h2>
        <Slider {...sliderSettings}>
          {feedbacksData.map((feedback, index) => (
            <div key={index} className="feedback">
              <img src={feedback.image} alt={feedback.author} />
              <p className="author">{feedback.author}</p>
              <p>{feedback.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Feedbacks
