import React from 'react';

import Icon1 from '../../images/city_driver_re.svg';
import Icon2 from '../../images/metrics.svg';
import Icon3 from '../../images/my_location.svg';

import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from './styles';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Principais Vantagens</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Tranquilidade e Segurança </ServicesH2>
                    <ServicesP> Aleém da tranquilidade de ter uma equipe para pronta resposta, um rastreador ainda pode reduzir o valor do seguro </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> Relatórios Inteligentes </ServicesH2>
                    <ServicesP> Ajudamos a controlar seus gastos com manutenção e combustivel atraves de relatorios interligentes.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> Aplicativo Moderno</ServicesH2>
                    <ServicesP> Na palma da sua mão todas as informações do seu veículo como: tempo ligado, localização e muito mais. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )

}

export default Services;