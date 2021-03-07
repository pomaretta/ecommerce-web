// CHECKOUT

// ADD ARTICLES
const updateItemsInCheckout = (props) => {

    let items = JSON.parse(getData({key: "cart"}))
    let total = 0;

    $(`.${props.container}`).empty();

    items.map((item) => {
        total += parseFloat(item.price) * parseInt(item.count);
        item["img"] = normalizeUrl({location: '../../',img: item.img})
        paymentArticle({item: item, container: props.container});
    });

    $(`#${props.totalContainer}`).html(total.toFixed(2));

}

// COUNT MODIFY
const incrementCount = (props) => {

    let data = JSON.parse(getData({key: "cart"}))

    data.filter((item) => {
        if(item.id == props.id){
            item.count = `${parseInt(item.count) + 1}`; 
        }
        return true;
    });

    setData({key: "cart",content: JSON.stringify(data)});

    updateItemsInCheckout({container: 'items',totalContainer: 'totalPrice'})

}

const decrementCount = (props) => {
    
    let data = JSON.parse(getData({key: "cart"}))

    data.filter((item) => {
        if(item.id == props.id){
            if(item.count > 1){
                item.count = `${parseInt(item.count) - 1}`;
            }
        }
        return true;
    });

    setData({key: "cart",content: JSON.stringify(data)});

    updateItemsInCheckout({container: 'items',totalContainer: 'totalPrice'})

}