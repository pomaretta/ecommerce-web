// ARTICLE USE CASE

const addToCart = (props) => {
    insertItem({item: items.filter((item) => {return (item.id == props.id)})[0]});
}

const removeFromCart = (props) => {
    removeItem({item: items.filter((item) => {return (item.id == props.id)})[0]});
}

const updateCart = () => {

    let items = JSON.parse(getData({key: "cart"}))
    let total = 0;
    $("#cartItems").empty();

    items.map((item) => {
        total += parseFloat(item.price);
        cartTemplate({id: item.id,img: item.img,title: item.title, price: item.price,container: 'cartItems'});
    });

    $("#total").html(total);

}

const insertItem = (props) => {
    
    // GET DATA
    let data = [];
    data = JSON.parse(getData({key: "cart"}));

    if(data == null){
        data = [];
        data.push(props.item);
    } else {
        data.push(props.item);
    }

    // SET DATA
    setData({key: "cart",content: JSON.stringify(data)});

    updateCart();

}

const removeItem = (props) => {

    // GET DATA
    let data = JSON.parse(getData({key: "cart"}));

    // APPEND DATA
    let filtered = data.filter((item) => {
        if(item.id == props.item.id){
            return false;
        }
        return true;
    });

    // SET DATA
    setData({key: "cart",content: JSON.stringify(filtered)})

    updateCart();

}