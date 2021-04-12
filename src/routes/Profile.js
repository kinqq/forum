import React from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";

export default ({ userObj }) => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        alert("로그아웃 요청을 정상적으로 처리하였습니다.");
        history.push("/");
    };

    return (
        <div className="container">
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
