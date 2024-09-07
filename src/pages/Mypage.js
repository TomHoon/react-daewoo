import React from "react";
import { Navigate } from "react-router-dom";

const MyPage = () => {
    const isLogged = false;

    if (!isLogged) {
        return <Navigate to="/login" replact={true}/>
    } else {
        return <div>마이페이지</div>
    }
}

export default MyPage;