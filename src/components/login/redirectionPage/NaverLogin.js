import React, { useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import Loading from "../../common/Loading";

function NaverLogin() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const state = searchParams.get('state');


    useEffect(() => {
        if (code && state) {
            // 백엔드로 code와 state를 전달
            axios.post('http://54.180.217.161:8081/swagger-ui/index.html#/api/auth/naver', {
                "authorizationCode": code,
                "state": state,
            })
                .then(response => {
                    console.log('백엔드 응답:', response.data);
                    // 로그인 후 처리
                    navigate('/soda');
                })
                .catch(error => {
                    console.error('에러 발생:', error);
                });
        }
    }, [code, state,navigate]);

    return (

            <Loading/>

    );
}

export default NaverLogin;
