import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Loading from '../../common/Loading';
import instance from '../../../api/axios';
import {setCookie} from "../../../auth/cookie";

function NaverLogin() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    const postData = async () => {
        if (code && state) {
            try {
                const response = await instance.post('/api/auth/naver', {
                    authorizationCode: code,
                    state: state,
                });
                console.log('백엔드 응답:', response.data);
                navigate('/soda');
                setCookie('accessToken',response.data.accessToken)
                setCookie('refreshToken',response.data.refreshToken)
            } catch (error) {
                // 자바스크립트에서는 error 객체의 속성 접근을 적절히 처리
                console.log('에러 발생:', error.response ? error.response.data : error.message);
            }
        }
    };

    useEffect(() => {
        postData();
    }, [code, state, navigate]);

    return <Loading />;
}

export default NaverLogin;
