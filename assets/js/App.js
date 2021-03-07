const items = [
    {
        id: '1',
        title: "Sudadera",
        description: "Tiny description",
        price: "19.99",
        img: "./assets/images/items/sudadera.png"
    },
    {
        id: '2',
        title: "Camiseta",
        description: "Te deja el cuerpo como un pinsel.",
        price: "20",
        img: "./assets/images/items/camiseta.jpg"
    },
    {
        id: '3',
        title: "Cinturon",
        description: "De cintura vas mejor.",
        price: "15",
        img: "./assets/images/items/cinturon.jpg"
    },
    {
        id: '4',
        title: "Guantes",
        description: "Te pegan buenos guantazos.",
        price: "7",
        img: "./assets/images/items/guantes.png"
    },
    {
        id: '5',
        title: "Chandal",
        description: "Del ferrari al clio.",
        price: "18",
        img: "./assets/images/items/chandal.jpg"
    },
    {
        id: '6',
        title: "Pantalon",
        description: "Feo del copón.",
        price: "25",
        img: "./assets/images/items/pantalon.jpg"
    }
]

window.onload = () => {
    addItems();
    updateCart();
}

const addItems = () => {
    items.map((item) => {
        articleTemplate(
            {
                id: item.id
                ,img: item.img
                ,title: item.title
                ,description: item.description
                ,price: item.price
                ,container: 'articles'
            }
        )
    })
}

$("#hombre").on("click",() => {
    if($("#hombreDrop").hasClass("collapse")){
        $("#hombreDrop").removeClass("collapse");
    } else {
        $("#hombreDrop").addClass("collapse");
    }
})

$("#mujer").on("click",() => {
    if($("#mujerDrop").hasClass("collapse")){
        $("#mujerDrop").removeClass("collapse");
    } else {
        $("#mujerDrop").addClass("collapse");
    }
})

$("#cart").on("click",() => {
    if($("#cartDrop").hasClass("collapse")){
        $("#cartDrop").removeClass("collapse");
    } else {
        $("#cartDrop").addClass("collapse");
    }
})

const articleTemplate = (props) => {

    let template = 
    `
    <article class="item">
        <header>
            <a href="${props.id}">
                <img src="${props.img}" alt="Item image">
            </a>
        </header>
        <main>
            <h2>${props.title}</h2>
            <h3>${props.description}</h3>
        </main>
        <footer>
            <div class="column column--left">
                <span>${props.price}</span>
            </div>
            <div class="column column--right">
                <a id="add${props.id}">
                    <i class="fas fa-plus"></i>
                </a>
                <i class="fas fa-spinner spinner hidden" id="spinner${props.id}"></i>
                <i class="far fa-check-circle circle hidden" id="circle${props.id}"></i>
            </div>
        </footer>
    </article>
    `;
    
    $("#" + props.container).append($.parseHTML(template));

    let addButton = document.getElementById(`add${props.id}`);
    let spinner = document.getElementById(`spinner${props.id}`);
    let circle = document.getElementById(`circle${props.id}`);
    
    addButton.addEventListener('mouseenter', () => {
        gsap.to(addButton,{rotate: 360, duration: 1})
    })

    addButton.addEventListener('mouseleave', () => {
        gsap.to(addButton,{rotate: 0, duration: 2})
    })

    addButton.addEventListener('click', () => {
        addButton.classList.add('hidden');
        spinner.classList.remove('hidden');
        setTimeout(() => {
            spinner.classList.add('hidden');
            circle.classList.remove('hidden');
            addToCart({id: props.id});
        },2000)
    })

    TweenMax.to(spinner,
        {
            repeat: -1
            ,rotate: 360
            ,duration: 1.5
            ,ease: Power1.easeInOut 
        }
    )

}

const cartTemplate = (props) => {

    let template = 
    `
    <li>
        <article class="item" id="item${props.id}">
            <header>
                <img src="${props.img}" alt="Item image">
            </header>
            <main>
                <h5>${props.title}</h5>
                <span>${props.price}</span>
            </main>
            <footer>
                <a onclick="removeFromCart({id: ${props.id}})">
                    <i class="fas fa-trash-alt"></i>
                </a>
            </footer>
        </article>
    </li>
    `;

    $("#" + props.container).append($.parseHTML(template));

}

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

const setData = (props) => {
    localStorage.setItem(props.key,props.content);
}

const getData = (props) => {
    if(localStorage.getItem(props.key) == null){
        return null;
    }
    return localStorage.getItem(props.key);
}

const removeData = (props) => {
    localStorage.removeItem(props.key);
}