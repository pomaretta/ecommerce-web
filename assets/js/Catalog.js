// CATALOG

const addItems = (props) => {
    items.map((item) => {
        articleTemplate(
            {
                id: item.id
                ,img: item.img
                ,title: item.title
                ,description: item.description
                ,price: item.price
                ,container: props.container
            }
        )
    })
}