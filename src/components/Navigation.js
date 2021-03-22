import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faHouseUser,
    faUser,
    faStickyNote,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => (
    <nav className="gnb">
        <ul
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 40,
            }}
        >
            <li>
                <Link to="/" style={{ marginRight: 10 }}>
                    <FontAwesomeIcon
                        icon={faHouseUser}
                        color={"#04AAFF"}
                        size="2x"
                    />
                </Link>
            </li>
            <li>
                <Link
                    to="/"
                    style={{
                        marginRight: 10,
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faStickyNote}
                        color={"#04AAFF"}
                        size="2x"
                    />
                </Link>
            </li>
            <li>
                <Link
                    to="/profile"
                    style={{
                        marginRight: 10,
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faUser}
                        color={"#04AAFF"}
                        size="2x"
                    />
                </Link>
            </li>
            <li>
                <Link
                    to="/time"
                    style={{
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faClock}
                        color={"#04AAFF"}
                        size="2x"
                    />
                </Link>
            </li>
        </ul>
    </nav>
);
export default Navigation;
