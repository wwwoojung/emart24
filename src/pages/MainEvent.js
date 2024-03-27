import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainEvent = () => {
    const slide_settings = {
        dots: false,
        arrows: false,
        // infinite: false,
        speed: 500,
        slidesToShow: 5,
        autoplay: false,
        // nextArrow: <SvgIcon component={NavigateNextIcon} inheritViewBox />,
        // prevArrow: <SvgIcon component={NavigateBeforeIcon} inheritViewBox />,
    };
    return (
        <section className="MainEvent default">
            <div className="inner event_con">
                <div class="left_con">
                    <div class="title">
                        <h2>1월 행사 상품</h2>
                        <a href="">
                            전체보기
                            <i data-feather="plus"></i>
                        </a>
                    </div>
                    <ul class="tab_menu">
                        <li class="on">
                            <a href="">
                                <strong>1+1</strong>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <strong>2+1</strong>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <strong>신상품</strong>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="right_con">
                    <div class="swiper tab_slide on">
                        <Slider className="slide-wrapper" {...slide_settings}>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event01.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event02.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event03.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event04.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event05.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event06.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                        </Slider>
                        <div class="control_box">
                            <div class="swiper-pagination"></div>
                            <div class="slide_arrows">
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper tab_slide">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event07.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event08.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event09.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event10.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event11.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event12.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                        </div>
                        <div class="control_box">
                            <div class="swiper-pagination"></div>
                            <div class="slide_arrows">
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper tab_slide">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event13.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event14.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event15.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event16.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event17.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                            <div class="swiper-slide itm">
                                <div class="img_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/main_event01.png`} alt="" />
                                </div>
                                <div class="text_box">
                                    <span>민생</span>
                                    <p>3겹화장지30*24롤</p>
                                    <strong>22,700</strong>
                                </div>
                            </div>
                        </div>
                        <div class="control_box">
                            <div class="swiper-pagination"></div>
                            <div class="slide_arrows">
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainEvent;