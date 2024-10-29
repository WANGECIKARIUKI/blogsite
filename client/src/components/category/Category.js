import React from "react"
import "./category.css"
import { category } from "../../Assets/data/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}
function Category() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,            // Enables automatic sliding
        autoplaySpeed: 3000,       // Sets the interval to 3 seconds (3000ms)
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      }

  return (
    <>
      <section className='category'>
        <div className='content'>
          <Slider {...settings}>
            {category.map((item) => (
              <div className='boxs'>
                <div className='box' key={item.id}>
                  <img src={item.cover} alt='title' />
                  <div className='overlay'>
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Category