import React from "react";
import AuthForm from "components/AuthForm";

const Auth = (userObj, refreshUser) => {
    return (
        <div className="authContainer">
            <div className="authTitle">2-10 포럼</div>
            <div className="authBtns">
                <AuthForm userObj={userObj} refreshUser={refreshUser} />
            </div>
        </div>
    );
};
export default Auth;
