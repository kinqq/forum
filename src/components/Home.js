import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home__title">
            <h1>2-10 포럼에 오신 것을 환영합니다 </h1>
            <p>
                2-10 포럼은 우리반에서 친구들이 공유하는 정보를{" "}
                <span>쉽고 빠르게 접근</span>할 수 있게 하기 위한 사이트입니다.
            </p>

            <Link to="/test">
                <span className="home__link">수행평가 게시판</span>
            </Link>
        </div>
    );
};

export default Home;
