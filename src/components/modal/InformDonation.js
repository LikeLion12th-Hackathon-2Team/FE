import styled from "styled-components";
import {InformIcon} from "../icons/mypageIcons";

function InformDonation({onChangeInformation}) {
    const handleIsOpen = ()=>{
        onChangeInformation()
    }

    return (
        <>
            <Wrapper>
                <InformIconBox onClick={handleIsOpen}>
                    <InformIcon/>
                </InformIconBox>
                <QnABox>
                    <h1>Q. 기부 포인트는 어떻게 지급 되나요?</h1>
                    <h2>A. 안녕하세요. 소다(SODA) 입니다!</h2>
                    <h2>일기를 작성하면 100포인트를 드려요.</h2>
                    <h2>댓글 작성 시 10포인트를 받을 수 있어요.</h2>
                    <h2>작성한 댓글이 채택 된다면 추가로 30포인트를 더 드려요!</h2>
                    <h2>일기 작성은 하루에 한 번, 댓글 작성은 하루에 10번까지 가능합니다.</h2>
                    <h2>따라서 하루에 최대 획득 가능한 포인트는 500점이에요;)</h2>
                </QnABox>
                <QnABox>
                <h1>Q. 포인트는 몇점부터 기부할 수 있나요?</h1>
                    <h2>A. 안녕하세요. 소다(SODA) 입니다!</h2>
                    <h2>10000점 단위로 기부가 가능해요!</h2>
                    <h2>소다로 기부해서 행복 부자가 됩시다 (•ˋ_ˊ•)</h2>
                </QnABox>
            </Wrapper>
        </>

    );
}

export default InformDonation;

const Wrapper =styled.div`
    padding: 10px;
    color: ${({theme})=>theme.colors.fontColor};
`
const InformIconBox = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
`
const QnABox = styled.div`
    margin: 20px 10px;
    padding: 10px;
    background: white;
    border-radius: 20px;
    h1{
        padding: 10px;
        font-weight: bold;
        font-size: 15px;
    }
    h2{
        font-size: 11px;
        padding: 4px;
    }
`