import styled from 'styled-components';
import {hot} from 'react-hot-loader/root';

// Button with ripple animation
const Button = styled.button`
    border: none;
    border-radius: 3px;
    width: 150px;
    padding: 12px 18px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    background-color: #474747;
    box-shadow: 0 0 4px #616161;
    outline: none;
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: #616161 radial-gradient(circle, transparent 1%, #616161 1%) center/15000%;
    }

    &:active {
        background-color: #474747;
        background-size: 100%;
        transition: background 0s;
    }
`;

export default hot(Button);
