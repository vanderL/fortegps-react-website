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
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Rastreamento veicular',
    headLine: 'Segurança e tranquilidade ilimitada com zero burocracia',
    description: 'Tenha acesso ao app exclusivo e também a plataforma web, com diversos relátorios. Tenha seu veiculo sempre em mãos, não abra mão da segurança e da sua tranquilidade.',
    buttonLabel: 'Conheça mais',
    imgStart: true,
    alt: 'Segurança veicular',
    img: SecurityImg,
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjFive = {
    id: 'payment',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Segunda Via do Boleto',
    headLine: 'Perdeu a fatura? ',
    description: 'Para facilitar a tirar a segunda via, é só clickar no botão "Segunda Via" logo a abaixo e cola a sua linha digitavel',
    buttonLabel: 'Segunda Via',
    imgStart: false,
    img: Payment,
    alt: 'Rastreamento veicular',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjFour = {
    id: 'segunda-via',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Rastreamento veicular',
    headLine: 'Segurança e tranquilidade ilimitada com zero burocracia',
    description: 'Tenha acesso ao app exclusivo e também a plataforma web, com diversos relátorios. Tenha seu veiculo sempre em mãos, não abra mão da segurança e da sua tranquilidade.',
    buttonLabel: 'Marcar instalação',
    imgStart: true,
    alt: 'Rastreamento veicular',
    img: MyCurrentLocationImg,
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjThree = {
    id: 'Instagram',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '@fortegpsrast',
    headLine: 'Promoções e Novidades',
    description: 'Siga nosso instagram para acompanhar nossas postagens',
    buttonLabel: '@fortegpsrast',
    imgStart: true,
    alt: 'Rastreamento veicular',
    img: Instagram,
    dark: false,
    primary: false,
    darkText: true
};