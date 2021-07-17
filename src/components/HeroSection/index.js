import React, {useState} from 'react';
import Video from '../../video/video.mp4'

import { Button } from '../ButtonElement';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowRight,
    ArrowForward,

} from './styles';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Rastrear o seu veículo com Tecnologia e Facilidade</HeroH1>
                <HeroP>
                    Invista na sua segurança e na proteção do seu automovel por menos de
                    R$ 1,80 por dia. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={false}
                        dark={false}
                        big={true}
                        fontBig={true}
                    >
                       Começar {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button> 
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
};

export default HeroSection;