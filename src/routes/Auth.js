import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";

const Auth = () => {
    const onSocialClick = async () => {
        let provider = new firebaseInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
    };
    return (
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faTwitter}
                color={"#04AAFF"}
                size="5x"
                style={{ marginBottom: 30 }}
            />
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
