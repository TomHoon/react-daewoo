import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    let mode = searchParams.get('mode');
    let detail = searchParams.get('detail');

    const toggleMode = () => {
        setSearchParams({mode, detail: detail === 'true' ? false : true});
    }

    const detailCal = () => {
        
        setSearchParams({mode: parseInt(mode) + 1, detail});
    }

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 프로젝트 입니다</p>

            <p>detail: {detail} </p>
            <p>mode: {mode} </p>
            <button onClick={toggleMode}>toggle</button>
            <button onClick={detailCal}>mode + 1</button>
        </div>
    )
}

export default About;