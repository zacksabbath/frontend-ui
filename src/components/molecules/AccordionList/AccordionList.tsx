import React from 'react';
import styled from 'styled-components';

const Main = styled.ul`
    display: flex;
    flex-direction: row;

    .container{
        width: 100%;
        margin: 0px;
        
    }

    .localIssues{
        border-radius: 1px;
        padding: 0px 20px;
        height: 50px;
        display: block;
        background-color: ${({theme})=> theme.cardTheme?.primary};
        position: relative;
    }

    button.localIssues{
        width: 100%;
        text-align: left;
        background-color: ${({theme})=> theme.cardTheme?.primary};

    }

    button.localIssues:hover{
        box-shadow: 0px 2px 1px white inset, 
        0px -2px 20px white, 
        0px 2px 5px rgba(0, 0, 0, 0.1), 
        0px 8px 10px rgba(0, 0, 0, 0.1);
    }
`;


function AccordionList(props:any){

    return (
        <Main>
            <ul className='container'>
                <li className='localIssues'>
                    <button className='localIssues'>
                        Economy
                    </button>
                </li>
                <li className='localIssues'>
                    <button className='localIssues'>
                        Economy
                    </button>
                </li>
                <li className='localIssues'>
                    <button className='localIssues'>
                        Economy
                    </button>
                </li>
            </ul>
        </Main>
    )
}

export default AccordionList;