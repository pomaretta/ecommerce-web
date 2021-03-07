const items = [
    {
        id: '1',
        title: "Sudadera",
        description: "Tiny description",
        price: "19.99",
        img: "assets/images/items/sudadera.png"
    },
    {
        id: '2',
        title: "Camiseta",
        description: "Te deja el cuerpo como un pinsel.",
        price: "20",
        img: "assets/images/items/camiseta.jpg"
    },
    {
        id: '3',
        title: "Cinturon",
        description: "De cintura vas mejor.",
        price: "15",
        img: "assets/images/items/cinturon.jpg"
    },
    {
        id: '4',
        title: "Guantes",
        description: "Te pegan buenos guantazos.",
        price: "7",
        img: "assets/images/items/guantes.png"
    },
    {
        id: '5',
        title: "Chandal",
        description: "Del ferrari al clio.",
        price: "18",
        img: "assets/images/items/chandal.jpg"
    },
    {
        id: '6',
        title: "Pantalon",
        description: "Good pants.",
        price: "25",
        img: "assets/images/items/pantalon.jpg"
    }
]

const normalizeUrl = (props) => {
    let location = props.location;
    let item = props.item;

    // INPUT assets/images/items/pantalon.jpg
    // LOCATION <ROOT>/pages/category.html
    // DESIRED OUTPUT ../../assets/images/items/pantalon.jpg

    item.img = location + item.img;

    return item;
}