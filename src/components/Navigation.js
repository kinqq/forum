import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
    <nav className="gnb">
        <ul>
            <li>
                <Link className="navLink" to="/">
                    홈
                </Link>
            </li>
            <li>
                <Link className="navLink" to="/test">
                    <span>수행평가 게시판</span>
                </Link>
            </li>
            <li>
                <Link className="navLink" to="/schedule">
                    <span>학사일정 게시판</span>
                </Link>
            </li>
            <li>
                <Link className="navLink" to="/free">
                    <span>자유 게시판</span>
                </Link>
            </li>
            <li>
                <Link className="navLink" to="/profile">
                    <span>프로필</span>
                </Link>
            </li>
        </ul>
    </nav>
);
export default Navigation;
