import {useParams, Link} from 'react-router-dom' // 다른 페이지로 이동하기 위한 import

function WelcomComponent() {

    const {username} = useParams() // username 에 매칭된 것을 자동으로 username에 넣음.

    console.log(username)


    return (
        <div>
            <h1> Welcome {username}! </h1>
            <div className="Welcome">
                Manage Your todos. <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}

export default WelcomComponent