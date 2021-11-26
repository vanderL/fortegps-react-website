import styled  from 'styled-components';

export const ServicesContainer = styled.div`
    height: 1300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;

    @media screen and (max-width: 1000px){
        height: 950px;
    }

    @media screen and (max-width: 768px){
        height: 1900px;
    }

    @media screen and (max-width: 460px){
        height: 1800px;
    }
`;
export const ServicesWrapper = styled.div`
    min-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 32px;
    padding:0 50px;
    
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 16px;
        padding: 0 10px;
        min-width: 700px;

    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 1px;
        grid-gap: 12px;
        min-width: 300px;
    }
`;
export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    min-height: 180px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px){
        min-height: 80px;
        padding: 5px;
    }

    @media screen and (max-width: 768px){
        min-height: 40px;
        padding: 0 5px;
    }
`;
export const ServicesIcon = styled.img`
    height: 60px;
    width: 60px;
    margin-bottom: 10px;

    @media screen and (max-width: 1000px){
        height: 40px;
        width: 40px;
    }

    @media screen and (max-width: 400px){
        height: 35px;
        width: 35px;
    }
`;
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 64px;

    @media screen and (max-width: 1000px){
        font-size: 2rem;
    }
`;
export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    
    @media screen and (max-width: 1000px){
        font-size: 0.8rem;
    }
`;
export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;