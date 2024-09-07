import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goArticles = () => {
        // note: replace true시 현재페이지가 남지 않는다.
        navigate('/articles', {replace: false});
    }

    return (
        <div>
            <header style={{'backgroundColor':'lightgray', padding:'16px'}}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>프로필가기</button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;