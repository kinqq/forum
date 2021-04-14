import React, { useState } from "react";
import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";
import Timetable from "components/Timetable";

export default ({ userObj }) => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        alert("로그아웃 요청을 정상적으로 처리하였습니다.");
        history.push("/");
    };
    const [displayName, setDisplayName] = useState(null);
    dbService
        .collection("userInfo")
        .doc(userObj.uid)
        .get()
        .then((doc) => {
            setDisplayName(doc.data().displayName);
        });

    return (
        <div className="container">
            <span className="profile__nameHello">
                {displayName}님 안녕하세요.
            </span>
            <Timetable />
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                로그아웃
            </span>
            <div className="center" style={{ marginTop: 50 }}>
                {userObj.priority ? (
                    <div className="post__creator">You are an admin.</div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
