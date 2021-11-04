import React from 'react';
import { Button, ButtonA } from '../ButtonElement';

import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img

} from './styles.js'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    alt,
    primary,
    dark,
    dark2,
    img,
    direction,
    externo,
    directionExterno,
    buttonLabelExterno


}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    {externo && (
                                        <ButtonA 
                                            href={directionExterno}
                                            target="_blank"
                                            smooth={true}
                                            duration={1000}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}
                                        > 
                                            {buttonLabelExterno}
                                        </ButtonA>
                                    )} 
                                    <Button 
                                        to={direction} 
                                        smooth={true}
                                        duration={1000}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    > 
                                        {buttonLabel}
                                    </Button>
                                    
                                    
                                </BtnWrap>
                            </TextWrapper>
                       </Column1>
                       <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                       </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )           
};

export default InfoSection;