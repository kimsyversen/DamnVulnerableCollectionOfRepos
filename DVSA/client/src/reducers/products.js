
const productsReducerDefaultState = [
    {
        id: '1012',
        title: 'Ring King',
        //type: 'Game',
        category: 'Games',
        brand: 'Nintendo',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 32,
        amount: 1,
        images: [
            {url: '/images/RK10.jpg'}
        ]
    },{
        id: '1013',
        title: 'Pac-Man',
        //type: 'Game',
        category: 'Games',
        brand: 'Atari',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 33,
        amount: 1,
        images: [
            {url: '/images/PM10.jpg'}
        ]
    },{
        id: '1014',
        title: 'Rampage',
        //type: 'Game',
        category: 'Games',
        brand: 'Nintendo',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 40,
        amount: 1,
        images: [
            {url: '/images/RP20.jpg'}
        ]
    },{
        id: '1016',
        title: 'Super Mario',
        //type: 'Game',
        category: 'Games',
        brand: 'Nintendo',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 28,
        amount: 1,
        images: [
            {url: '/images/SM10.jpg'}
        ]
    },{
        id: '1017',
        title: 'Super Mario 2',
        //type: 'Game',
        category: 'Games',
        brand: 'Nintendo',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 45,
        amount: 1,
        images: [
            {url: '/images/SM20.jpg'}
        ]
    },{
        id: '1018',
        title: 'Super Mario 3',
        //type: 'Game',
        category: 'Games',
        brand: 'Nintendo',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 35,
        amount: 1,
        images: [
            {url: '/images/SM30.jpg'}
        ]
    },{
        id: '1019',
        title: 'Mrs. Pac-Man',
        //type: 'Game',
        category: 'Games',
        brand: 'Atari',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 28,
        amount: 1,
        images: [
            {url: '/images/PM20.jpg'}
        ]
    },{
        id: '1020',
        title: 'Zelda',
        //type: 'Game',
        category: 'Games',
        brand: 'Nintendo',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 25,
        amount: 1,
        images: [
            {url: '/images/ZD10.jpg'}
        ]
    },{
        id: '1021',
        title: 'Emperor',
        //type: 'Game',
        category: 'Games',
        brand: 'EA',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 44,
        amount: 1,
        images: [
            {url: '/images/DN10.jpg'}
        ]
    },{
        id: '1011',
        title: 'Dune 2000',
        //type: 'Game',
        category: 'Games',
        brand: 'EA',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 42,
        amount: 1,
        images: [
            {url: '/images/DN20.jpg'}
        ]
    },{
        id: '1010',
        title: 'Double Dragon',
        //type: 'Game',
        category: 'Games',
        brand: 'Nintendo',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 38,
        amount: 1,
        images: [
            {url: '/images/DD10.jpg'}
        ]
    },{
        id: '1009',
        title: 'Space Invaders',
        //type: 'Game',
        category: 'Games',
        brand: 'Atari',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 51,
        amount: 1,
        images: [
            {url: '/images/SI10.jpg'}
        ]
    },{
        id: '1008',
        title: 'Donkey Kong',
        //type: 'Game',
        category: 'Games',
        brand: 'Nintendo',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 37,
        amount: 1,
        images: [
            {url: '/images/DK10.jpg'}
        ]
    },{
        id: '1007',
        title: 'Jungle Strike',
        //type: 'Game',
        category: 'Games',
        brand: 'EA',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 38,
        amount: 1,
        images: [
            {url: '/images/JS10.jpg'}
        ]
    },{
        id: '10015',
        title: 'Rampart',
        //type: 'Game',
        category: 'Games',
        brand: 'EA',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 48,
        amount: 1,
        images: [
            {url: '/images/RP10.jpg'}
        ]
    }
];

const productsReducer = (state = productsReducerDefaultState) => (state);

export default productsReducer;