import styled from "styled-components";
import {PuffLoader} from "react-spinners";
function Loading() {
    return (
        <>
            <Wrapper>
                <Contianer>
                    잠시만 기다려 주세요.
                    <ItemBox>
                        <PuffLoader
                            color = "#FFFFFF"
                            size={150}
                            speedMultiplier={0.8}
                        />
                    </ItemBox>
                </Contianer>
            </Wrapper>
        </>

    );
}

export default Loading;

const Wrapper = styled.div`
    //margin-top: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            white 17%,
            ${({ theme }) => theme.backgroundColors.mainColor} 100%
    );
    
`

const Contianer = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: ${({theme})=>theme.colors.fontColor};
    text-align: center;
`



const ItemBox = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`