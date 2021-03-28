import React from "react";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";

const Auth = () => {
    const onSocialClick = async () => {
        let provider = new firebaseInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
    };
    return (
        <div className="authContainer">
            <div className="authTitle">2-10 포럼</div>
            <div className="authBtns">
                <AuthForm />
            </div>
            <div className="authBtns">
                <button
                    onClick={onSocialClick}
                    name="google"
                    className="authBtn"
                >
                    Google로 로그인하기
                </button>
            </div>
        </div>
    );
};
export default Auth;
