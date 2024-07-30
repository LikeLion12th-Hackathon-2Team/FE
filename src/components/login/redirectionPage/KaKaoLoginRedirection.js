import Loading from "../../common/Loading";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

import instance from "../../../api/axios";
import {setCookie} from "../../../auth/cookie";

function KaKaoLoginRedirection() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');


    const PostDate = async()=>{
        if (code) {
            await instance.post('/api/auth/kakao', {
                authorizationCode: code,
            },)
                .then(response => {
                    console.log(response.data);
                    setCookie('kakaoT',response.data.accessToken)
                    // 로그인 후 처리
                    navigate('/soda');
                })
                .catch(error => {
                    console.error('에러 발생:', error);
                });
        }
    };

    useEffect(() => {
        PostDate()
    }, [code, navigate]);

    return (
        <>
            <Loading/>
        </>

    );
}

export default KaKaoLoginRedirection;
