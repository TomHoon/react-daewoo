import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate(); 
    const goLogin = () => {
        navigate('/mypage');
    }

    return (
        <div>
            <h3>로그인 페이지</h3>
            <button onClick={goLogin}>로그인 하기</button>
        </div>
    )
}

export default Login;