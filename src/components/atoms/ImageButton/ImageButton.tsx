import styled from 'styled-components';

const ImageButton = styled.div`

background-color: red ;
border-radius: 50px;
font-size: 20px;
color: #FFFFFF;
padding: 8px;
margin:20px;
display: flex;
float: left;
flex-flow: row nowrap;
text-align: center;
height: 400px;
width: 400px;
:focus {
    outline: none;
}
border: none;
`;

export default ImageButton;

