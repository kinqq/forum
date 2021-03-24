import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
    <nav className="gnb">
        <ul
            style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#04AAFF",
                width: "100%",
                padding: 18,
            }}
        >
            <li>
                <Link className="navLink" to="/">
                    홈
                </Link>
            </li>
            <li>
                <Link className="navLink" to="/test">
                    수행평가 게시판
                </Link>
            </li>
            <li>
                <Link className="navLink" to="/schedule">
                    학사일정 게시판
                </Link>
            </li>
            <li>
                <Link className="navLink" to="/free">
                    자유 게시판
                </Link>
            </li>
            <li>
                <Link className="navLink" to="/profile">
                    프로필
                </Link>
            </li>
            {/* <li>
                <Link
                    className="navLink"
                    to="/time"
                    style={{
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    시간표
                </Link>
            </li> */}
        </ul>
    </nav>
);
export default Navigation;
