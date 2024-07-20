import styled from "styled-components";
import MyPoint from "../../components/mypage/MyPoint";

function Mypage() {
    return (
        <>
            <Wrapper>
                <Container>
                <p>
                    My page
                </p>
                    <ItemBox>

                    </ItemBox>
                </Container>
            </Wrapper>
        </>

    );
}

export default Mypage;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background :linear-gradient(${({theme}) => theme.backgroundColors.mainColor} 25%, white 100%);


`
const ItemBox=styled.div`
    height: 100vh;
    width: ${({theme}) => theme.tablet};
    background: ${({theme}) => theme.backgroundColors.pageBC};
    border-radius: 20px;
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 324px;
        height: 100vh;
    }
  
   
`

const Container = styled.div`
    text-align: center;
    p{
        padding: 20px;
        font-family: 'LOTTERIACHAB';
        font-size: 40px;
        color: ${({theme})=>theme.colors.white};
        text-shadow: 4px 4px ${({theme}) => theme.backgroundColors.borderDark} ;
    }
    
`