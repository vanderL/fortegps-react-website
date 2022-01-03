import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 488px) {
        padding: 7px 21px;
        font-size: 14px;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    }
`;

export const ButtonA = styled.a`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 488px) {
        padding: 7px 21px;
        font-size: 14px;
    }

    @media screen and (max-width: 400px) {
        padding: 7px 21px;
        font-size: 14px;
        white-space: pre-wrap;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    }
`;