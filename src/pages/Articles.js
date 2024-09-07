import { NavLink, Outlet } from "react-router-dom"

const Articles = () => {
    const activeStyle = {
        color: 'green',
        fontSize: 21
    };

    return (
        <div>
            <Outlet/>
            <ul>
                <li>
                    {/* note: 'NavLink'는 Active를 받아서 함수로 처리해주는 내장 기능이 있다.. 신기하네 */}
                    <NavLink to="/articles/1" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                        게시글1
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articles/2" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                        게시글2
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articles/3" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                        게시글3
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Articles;