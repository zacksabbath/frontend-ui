import styled from 'styled-components';

const ImageButton = styled.div`

background-color: red ;
border-radius: 50px;
font-weight: heavy;
font-size: 20px;
color: #FFFFFF;
padding: 8px;
margin:20px;
display: flex;
justify-content: space-between;
flex-direction: row;
float: left;
text-align: center;
height: 400px;
width: 400px;
:hover {
    background: blue;
}
`;

export default ImageButton;

