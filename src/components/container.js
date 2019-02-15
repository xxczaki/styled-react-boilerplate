import styled from 'styled-components';
import {hot} from 'react-hot-loader/root';

// Flexbox container
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto 30px;
    max-width: 50em;
    padding-left: 15px;
    padding-right: 15px;
`;

export default hot(Container);
