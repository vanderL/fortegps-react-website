import CarImg from '../../images/off_road.svg';
import SecurityImg from '../../images/security_on.svg';
import MyCurrentLocationImg from '../../images/my_current_location.svg';
import Instagram from '../../images/undraw_Social_influencer_re_beim.svg';
import Payment from '../../images/undraw_printing_invoices_5r4r.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Rastreamento veicular',
    headLine: 'Segurança e tranquilidade ilimitada com zero burocracia',
    description: 'Tenha acesso ao app exclusivo e também a plataforma web, com diversos relátorios. Tenha seu veiculo sempre em mãos, não abra mão da segurança e da sua tranquilidade.',
    buttonLabel: 'Conheça agora',
    imgStart: false,
    img: CarImg,
    alt: 'Rastreamento veicular',
    dark: true,
    primary: true,
    darkText: false,
    direction: 'discover'

};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Equipe especializada',
    headLine: 'Equipe de alto desempenho',
    description: 'Equipe preparada para o atendimento especializado na experiência do cliente, com pronta resposta imediata, com atendimento 24 horas',
    buttonLabel: 'Conheça mais',
    imgStart: true,
    alt: 'Segurança veicular',
    img: SecurityImg,
    dark: false,
    primary: false,
    darkText: true,
    direction: 'payment'
};

export const homeObjFive = {
    id: 'payment',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Segunda Via do Boleto',
    headLine: 'Perdeu a fatura? ',
    description: 'Para facilitar a tirar a segunda via, é só clickar no botão "Segunda Via" logo a abaixo e cola a sua linha digitavel',
    buttonLabelExterno: 'Segunda Via',
    buttonLabel: 'Continuar',
    imgStart: false,
    img: Payment,
    alt: 'Rastreamento veicular',
    dark: true,
    primary: true,
    darkText: false,
    direction: 'Instagram',
    directionExterno: 'https://www63.bb.com.br/portalbb/boleto/boletos/hc21e,802,3322,10343.bbx?_ga=2.59242665.505440602.1598874158-303499835.1598874158&pk_vid=a6aba7f7a0b689061598874140f671d6',
    externo: true

};

export const homeObjFour = {
    id: 'instalacao',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Rastreamento veicular',
    headLine: 'Segurança e tranquilidade ilimitada com zero burocracia',
    description: 'Tenha acesso ao app exclusivo e também a plataforma web, com diversos relátorios. Tenha seu veiculo sempre em mãos, não abra mão da segurança e da sua tranquilidade.',
    buttonLabelExterno: 'Marcar instalação',
    buttonLabel: 'Nossos serviços',
    imgStart: true,
    alt: 'Rastreamento veicular',
    img: MyCurrentLocationImg,
    dark: true,
    primary: true,
    darkText: false,
    direction: 'services',
    directionExterno: 'https://api.whatsapp.com/send?phone=5585994038884&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20rastreamento%20veicular.',
    externo: true

};

export const homeObjThree = {
    id: 'Instagram',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '@fortegpsrast',
    headLine: 'Promoções e Novidades',
    description: 'Siga nosso instagram para acompanhar nossas postagens',
    buttonLabel: 'continuar',
    buttonLabelExterno: '@fortegpsrast',
    imgStart: true,
    alt: 'Rastreamento veicular',
    img: Instagram,
    dark: false,
    primary: false,
    darkText: true,
    direction: 'instalacao',
    directionExterno: 'https://www.instagram.com/fortegpsrast/',
    externo: true


};