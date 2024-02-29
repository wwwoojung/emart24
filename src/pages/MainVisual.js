import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';


const MainVisual = () => {
    const sw = useRef(null);
    
    return (
        <section className="MainVisual">
            <h2 className="blind">Main Slide</h2>
            <Swiper ref={sw} className='visual_slide'
                pagination={{
                    type: 'progressbar',
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide className='itm itm01'>
                    <div class="con_box">
                        <div class="text_box">
                            <span>게임 서비스 종료</span>
                            <p>
                                보유하신 루비 소멸 전<br />
                                할인쿠폰으로 교환하세요!
                            </p>
                            <strong>행사기간</strong>
                            <strong>12월 21일 - 2월 28일</strong>
                        </div>
                        <div class="img_box">
                            <img src={`${process.env.PUBLIC_URL}/images/main_slide_itm01.png`} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='itm itm02'>
                    <div class="con_box">
                        <div class="text_box">
                            <span>STAMP EVENT</span>
                            <p>
                                이 달의 스탬프 행사<br />
                                한 눈에 보기
                            </p>
                            <strong>행사기간</strong>
                            <strong>1월 1일 - 1월 31일</strong>
                        </div>
                        <div class="img_box">
                            <img src={`${process.env.PUBLIC_URL}/images/main_slide_itm02.png`} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='itm itm03'>
                    <div class="con_box">
                        <div class="text_box">
                            <span>신세계포인트 EVENT</span>
                            <p>
                                이마트24 신규가입하면<br />
                                1,000원 할인쿠폰 쏜다!
                            </p>
                            <strong>행사기간</strong>
                            <strong>1월 2일 - 1월 31일</strong>
                        </div>
                        <div class="img_box">
                            <img src={`${process.env.PUBLIC_URL}/images/main_slide_itm03.png`} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='itm itm04'>
                    <div class="con_box">
                        <div class="text_box">
                            <span>매장행사</span>
                            <p>
                                BC카드 결제 시<br />
                                드래곤빌리지 할인
                            </p>
                            <strong>행사기간</strong>
                            <strong>1월 1일 - 1월 31일</strong>
                        </div>
                        <div class="img_box">
                            <img src={`${process.env.PUBLIC_URL}/images/main_slide_itm04.png`} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='itm itm05'>
                    <div class="con_box">
                        <div class="text_box">
                            <span>매장행사</span>
                            <p>
                                BC, KB국민, 현대카드로<br />
                                설 선물 구매 시 20% 할인
                            </p>
                            <strong>행사기간</strong>
                            <strong>1월 1일 - 1월 30일</strong>
                        </div>
                        <div class="img_box">
                            <img src={`${process.env.PUBLIC_URL}/images/main_slide_itm05.png`} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='itm itm06'>
                    <div class="con_box">
                        <div class="text_box">
                            <span>STAMP EVENT</span>
                            <p>
                                오늘 나의 행운은?<br />
                                드래곤 빌리지 랜덤 할인쿠폰 뽑기!
                            </p>
                            <strong>행사기간</strong>
                            <strong>1월 2일 - 1월 31일</strong>
                        </div>
                        <div class="img_box">
                            <img src={`${process.env.PUBLIC_URL}/images/main_slide_itm06.png`} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <div className="inner">
                    <div className="control_box">
                        <div className="control">
                            <div className="pause" role="button">
                                pause_btn
                            </div>
                            <div class="arrows">
                                <div className="left" role="button" onClick={() => sw.current.swiper.slidePrev()}>
                                    <span className="material-symbols-outlined">
                                        chevron_left
                                    </span>
                                </div>
                                <div className="right" role="button" onClick={() => sw.current.swiper.slideNext()}>
                                    <span className="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="progress_bar">
                            <span>01</span> / <strong>06</strong>
                        </div>
                    </div>
                </div>
            </Swiper>
        </section>
    )
}

export default MainVisual;