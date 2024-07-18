import {Link} from "react-router-dom";

function Main() {
    return (
        <>
            <h1> 메인 페이지</h1>
            <Link to={'/test'}>
                <button> 테스트 페이지로 이동</button>
            </Link>
        </>
    );
}

export default Main;