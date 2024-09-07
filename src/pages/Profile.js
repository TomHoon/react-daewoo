import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {

    const data = {
        velopert: {
            name: '김민준',
            desc: '리액트를 좋아하는 개발자'
        },
        hong: 
        {
            name: '홍길동',
            desc: '전래동화 흥부전의 주인공'
        }
    };


    const params = useParams();
    const targetName = params.username;
    const profile = data[targetName];

    return (
        <div>
            <h1>프로필 사용자</h1>
            {
                profile ? (
                    <div>
                        <h1>{profile.name}</h1>
                        <p>{profile.desc}</p>
                    </div>
                ) : (
                    <div>
                        <p>존재하지 않은 프로필입니다</p>
                    </div>
                )
            }
        </div>
    )
}

export default Profile;