'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider0() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
            <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <figure className="thumb-box"><img src="/assets/images/Team-member/rajeev_sir_90x90.jpg" alt="" /></figure>
                        <div className="inner-box">
                            <h3>Rajeev Suman</h3>
                            <span className="designation">Co-founder and VP of Global Delivery</span>
                            <p>“Rajeev Suman is known for his advisory and market insights acumen leverages his experience of over 15 years leading the global production at Blitz Learning Technologies.”</p>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <figure className="thumb-box"><img src="/assets/images/Team-member/abhishek_sir_90x90.jpg" alt="" /></figure>
                        <div className="inner-box">
                            <h3>Abhishek Kumar</h3>
                            <span className="designation">Co-Founder and VP of Sales</span>
                            <p>“Abhishek is the cornerstone of the sales function at Blitz Learning. With his deep expertise in sales techniques and 15 years of sales experience in e-Learning sales, he heads our sales team.”</p>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                
                {/* <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.jpg" alt="" /></figure>
                        <div className="inner-box">
                            <h3>Haris Gulati</h3>
                            <span className="designation">Manager</span>
                            <p>
                            “Dictum mauris facilisis tortor dictumst. Cursus mattis viera lobortis posuere molestie imperdiet diam scelerisque posuere magnis risus purus eu tempor. Odio iaculis tincidunt cras cursus id nunc nibh gravida vel consectetur aliquam vitae pulvina.”
                            </p>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide> */}
                 {/* <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></figure>
                        <div className="inner-box">
                            <h3>Bessie Cooper</h3>
                            <span className="designation">Manager</span>
                            <p>“Dictum mauris facilisis tortor dictumst. Cursus mattis viera lobortis posuere molestie imperdiet diam scelerisque posuere magnis risus purus eu tempor. Odio iaculis tincidunt cras cursus id nunc nibh gravida.”</p>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide> */}
             {/*   <SwiperSlide className="slide">
                    <div className="testimonial-block-two">
                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.jpg" alt="" /></figure>
                        <div className="inner-box">
                            <h3>Brooklyn Simmons</h3>
                            <span className="designation">Manager</span>
                            <p>“Dictum mauris facilisis tortor dictumst. Cursus mattis viera lobortis posuere molestie imperdiet diam scelerisque posuere magnis risus purus eu tempor. Odio iaculis tincidunt cras cursus id nunc nibh gravida vel consectetur aliquam vitae pulvinar gravida at faucibus. Ridiculus mauris porttitor sit nulla.”</p>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="testimonial-block-two">
                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.jpg" alt="" /></figure>
                    <div className="inner-box">
                        <h3>Haris Gulati</h3>
                        <span className="designation">Manager</span>
                        <p>
                        “Dictum mauris facilisis tortor dictumst. Cursus mattis viera lobortis posuere molestie imperdiet diam scelerisque posuere magnis risus purus eu tempor. Odio iaculis tincidunt cras cursus id nunc nibh gravida vel consectetur aliquam vitae pulvina.”
                        </p>
                        <ul className="rating clearfix">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                        </ul>
                    </div>
                </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}
