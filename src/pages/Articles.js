import { NavLink, Outlet } from "react-router-dom"

const Articles = () => {

    {/* note: 'NavLink'는 Active를 받아서 함수로 처리해주는 내장 기능이 있다.. 신기하네 */}
    return (
        <div>
            <Outlet/>
            <ul>
                <ArticleItem id={1}/>
                <ArticleItem id={2}/>
                <ArticleItem id={3}/>
            </ul>
        </div>
    )
}

const ArticleItem = ({id}) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21
    };

    return (
        <li>
            <NavLink to={`/articles/${id}`} style={({isActive}) => (isActive ? activeStyle : undefined)}>
                게시글 {id}
            </NavLink>
        </li>
    )
}
export default Articles;