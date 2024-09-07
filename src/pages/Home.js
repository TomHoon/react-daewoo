import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>홈, 그 페이지는 가장 먼저 보여지는 페이지</p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profile/velopert">김민준의 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/hong">홍길동의 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/void">존재하지 않은 프로필</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;