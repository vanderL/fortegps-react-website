import React from 'react';

import  AgenteCallCenter from '../../images/icons/agente-de-call-center.png';
import  AplicativoMovel from '../../images/icons/aplicativo-movel.png';
import  AlertaBateria from '../../images/icons/bateria.png';
import  AntFurto from '../../images/icons/furto-de-cartao.png';
import  VeiculoLigadoDesligado from '../../images/icons/protecao.png';
import  VeiculoBlindado from '../../images/icons/veiculo-blindado.png';
import  RecuperacaoBusca from '../../images/icons/rastreamento.png';
import  Central from '../../images/icons/atendimento-ao-cliente.png';
import  CercaOnline from '../../images/icons/cerca-eletrica.png';
import  BloqueioOnline from '../../images/icons/carga.png';
import  IscaCarga from '../../images/icons/trancar.png';
import  Drone from '../../images/icons/drone.png';
import  Frotas from '../../images/icons/engarrafamento.png';
import  EquipamentoAnatel from '../../images/icons/iot.png';
import  LocTempoReal from '../../images/icons/localizacao-no-mapa.png';
import  Relatorios from '../../images/icons/relatorio-de-negocios.png';
import  Velocimentro from '../../images/icons/velocimetro.png';
import  AntenaMarshall from '../../images/icons/antena.png';

import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesWrapper,
} from './styles';

const ServicesIcones = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={AgenteCallCenter} />
                    <ServicesH2> 0800 Em Casos de Sinistros </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={AplicativoMovel} />
                    <ServicesH2> Aplicativo </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={AlertaBateria} />
                    <ServicesH2> Alerta de Bateria Violada </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={VeiculoLigadoDesligado} />
                    <ServicesH2> Alerta de Veículo Desligado / Ligado </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={VeiculoBlindado} />
                    <ServicesH2> Equipe com Carro Blindado </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={AntFurto} />
                    <ServicesH2> Antifurto </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={RecuperacaoBusca} />
                    <ServicesH2> Busca e Recuperação do Veículo </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Central} />
                    <ServicesH2> Central 24x7 </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={CercaOnline} />
                    <ServicesH2> Cerca Virtual </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={BloqueioOnline} />
                    <ServicesH2> Bloqueio e Desbloqueio Online </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={IscaCarga} />
                    <ServicesH2> Iscas para sua carga </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Drone} />
                    <ServicesH2> Equipe equipada com Drone </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Frotas} />
                    <ServicesH2> Gestão de Frotas </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={EquipamentoAnatel} />
                    <ServicesH2> Equipe equipada com Drone </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={LocTempoReal} />
                    <ServicesH2> Localização (Monitoramento) em tempo real </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Relatorios} />
                    <ServicesH2> Relatórios diversos </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Velocimentro} />
                    <ServicesH2> Gestão de Velocidade </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={AntenaMarshall} />
                    <ServicesH2> Equipe equipada com Antena Marshall </ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )

}

export default ServicesIcones;