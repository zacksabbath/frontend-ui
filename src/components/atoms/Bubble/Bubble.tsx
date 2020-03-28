import styled from 'styled-components';

const Bubble = styled.button`
    background: ${({theme})=>theme.cardTheme?.secondary};
    border-radius: 50px;
    font-weight: normal;
    font-size: 13px;
    color: #FFFFFF;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    :focus {
        outline: none;
    }
    border: none;
`;

export default Bubble;