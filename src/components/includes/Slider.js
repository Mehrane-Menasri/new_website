import React from 'react'
import Slider1 from '../img/carousel1.png'
import Slider2 from '../img/carousel2.jpg'

const Slider = () => {

    return (
        <section id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Slider1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2> تصميم و تطوير المواقع الكترونية</h2>
                        <p>نعمل على تقديم خدمة تصميم و برمجة المواقع بأسلوب فريد و سهل الوصول لجميع العملاء المحتملين ، نبني موقعك بكل التفاصيل التي تحتاجها و نجعل منه صرحاً زاخراً بهويتك</p>
                        <a className='btn btn-danger btn-lg my-4'>استكشف خدماتنا</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Slider2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2> تصميم و تطوير المواقع الكترونية</h2>
                        <p>نعمل على تقديم خدمة تصميم و برمجة المواقع بأسلوب فريد و سهل الوصول لجميع العملاء المحتملين ، نبني موقعك بكل التفاصيل التي تحتاجها و نجعل منه صرحاً زاخراً بهويتك</p>
                        <a className='btn btn-danger btn-lg my-4'>استكشف خدماتنا</a>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </section>
    )
}

export default Slider