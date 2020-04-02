import styled from 'styled-components';

const ImageButton = styled.div`
background-color: red ;
border-radius: 50px;
font-weight: normal;
font-size: 20px;
color: #FFFFFF;
padding: 8px;
// display: flex;
flex-direction: col;
// align-items: center;
height: 400px;
width: 400px;
:focus {
    outline: none;
}
border: none;
`;

export default ImageButton;

