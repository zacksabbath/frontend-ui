import  React  from "react";
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Main = styled.li`
    .li-issues {
        color: ${({theme}) => theme.cardTheme?.primaryText }
    }
`;