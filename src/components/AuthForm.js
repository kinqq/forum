import React, { useState } from "react";
import { authService } from "fbase";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    let [error, setError] = useState("");
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "repassword") {
            setRepassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                if (password !== repassword) {
                    alert("비밀번호와 재입력한 비밀번호가 다릅니다.");
                    return;
                }
                data = await authService.createUserWithEmailAndPassword(
                    email,
                    password
                );
                alert("회원가입 요청을 정상적으로 처리하였습니다.");
            } else {
                data = await authService.signInWithEmailAndPassword(
                    email,
                    password
                );
                alert("로그인 요청을 정상적으로 처리하였습니다.");
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
        <>
            <form onSubmit={onSubmit} className="container">
                <input
                    name="email"
                    type="email"
                    placeholder="이메일"
                    required
                    value={email}
                    onChange={onChange}
                    className="authInput"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    required
                    value={password}
                    className="authInput"
                    onChange={onChange}
                />
                {newAccount && (
                    <input
                        name="repassword"
                        type="password"
                        placeholder="비밀번호 재입력"
                        required
                        value={repassword}
                        className="authInput"
                        onChange={onChange}
                    />
                )}

                <input
                    type="submit"
                    className="authInput authSubmit"
                    value={newAccount ? "회원가입" : "로그인"}
                />
                {error && <span className="authError">{error}</span>}
                <span onClick={toggleAccount} className="authSwitch">
                    {newAccount ? "로그인" : "회원가입"}
                </span>
            </form>
        </>
    );
};

export default AuthForm;
