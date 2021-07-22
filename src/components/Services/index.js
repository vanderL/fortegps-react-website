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
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> Virtual Offices</ServicesH2>
                    <ServicesP> you can access our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> Premium Benefits</ServicesH2>
                    <ServicesP> Unlock our special membership card that return 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )

}

export default Services;