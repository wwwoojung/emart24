import { Link } from "react-router-dom";
let HeaderAddOn = () => {
    const SCT = document.querySelector(window).scrollTop();
    console.log(SCT);
    if (SCT > 0) {
        if (document.querySelector('#Header .header_wrap .gnb').classList.contains('on')) {
            document.querySelector('#Header .header_wrap').classList.remove('on');
        } else {
            document.querySelector('#Header .header_wrap').classList.add('on');
        }
    }
    else {
        document.querySelector('#Header .header_wrap').classList.remove('on');
    }
}

const Header = () => {
    return (
        <header id="Header" className="header" onScroll={HeaderAddOn}>
            <div className="header_wrap">
                <div className="inner">
                    <h1>
                        <Link to={`/`}>
                            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
                        </Link>
                    </h1>
                    <nav className="gnb">
                        <ul>
                            <li>
                                <a href="">이마트24 소개</a>
                                <ul className="depth2">
                                    <li>
                                        <a href="">브랜드 스토리</a>
                                    </li>
                                    <li>
                                        <a href="">브랜드 리소스센터</a>
                                    </li>
                                    <li>
                                        <a href="">브랜드 갤러리</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="">상품</a>
                                <ul className="depth2">
                                    <li>
                                        <a href="">행사 상품</a>
                                    </li>
                                    <li>
                                        <a href="">차별화 상품</a>
                                    </li>
                                    <li>
                                        <a href="">Fresh Food</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="">매장찾기</a>
                                <ul className="depth2">
                                    <li>
                                        <a href="">매장찾기</a>
                                    </li>
                                    <li>
                                        <a href="">3D 매장 체험</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="">서비스</a>
                                <ul className="depth2">
                                    <li>
                                        <a href="">APP 서비스</a>
                                    </li>
                                    <li>
                                        <a href="">생활 서비스</a>
                                    </li>
                                    <li>
                                        <a href="">제휴 서비스</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="">이벤트</a>
                                <ul className="depth2">
                                    <li>
                                        <a href="">진행중인 이벤트</a>
                                    </li>
                                    <li>
                                        <a href="">종료된 이벤트</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="">창업안내</a>
                                <ul className="depth2">
                                    <li>
                                        <a href="">이마트24 특징</a>
                                    </li>
                                    <li>
                                        <a href="">창업 가이드</a>
                                    </li>
                                    <li>
                                        <a href="">창업 설명회</a>
                                    </li>
                                    <li>
                                        <a href="">창업 성공기</a>
                                    </li>
                                    <li>
                                        <a href="">창업 상담</a>
                                    </li>
                                    <li>
                                        <a href="">추천 매장 소개</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="m_btn">
                        <button className="hamburger hamburger--squeeze" type="button" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;