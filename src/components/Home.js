import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home__title">
            <section class="scontainer">
                <h1 class="title">
                    <span>안녕하세요</span>
                    <span>2-10 포럼에 오신 것을</span>
                    <span>환영합니다.</span>
                </h1>

                <h2 class="title">
                    <span>이 사이트는 정보를</span>
                    <span>쉽고 빠르게 공유하기 위한</span>
                    <span>사이트입니다.</span>
                </h2>
            </section>

            <Link to="/test">
                <span className="home__link">수행평가 게시판</span>
            </Link>
        </div>
    );
};

export default Home;
