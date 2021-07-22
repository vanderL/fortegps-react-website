import CarImg from '../../images/off_road.svg';
import SecurityImg from '../../images/security_on.svg';
import MyCurrentLocationImg from '../../images/my_current_location.svg';

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

export const homeObjThree = {
    id: 'sigup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Rastreamento veicular',
    headLine: 'Segurança e tranquilidade ilimitada com zero burocracia',
    description: 'Tenha acesso ao app exclusivo e também a plataforma web, com diversos relátorios. Tenha seu veiculo sempre em mãos, não abra mão da segurança e da sua tranquilidade.',
    buttonLabel: 'Marcar instalação',
    imgStart: true,
    alt: 'Rastreamento veicular',
    img: MyCurrentLocationImg,
    dark: false,
    primary: false,
    darkText: true
};