import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home__title">
            <section className="scontainer">
                <h1 className="title">
                    <span>안녕하세요</span>
                    <span>2-10 포럼에 오신 것을</span>
                    <span>환영합니다.</span>
                </h1>

                <h2 className="title">
                    <span>이 사이트는 정보를</span>
                    <span>쉽고 빠르게 공유하기 위한</span>
                    <span>사이트입니다.</span>
                </h2>
            </section>

            <Link to="/new">
                <span className="home__link">글쓰기</span>
            </Link>
        </div>
    );
};

export default Home;
