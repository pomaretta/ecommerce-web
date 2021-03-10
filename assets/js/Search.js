const searchArticle = (props) => {

    let template = 
    `
    <article class="item">
        <div class="column column--left">
            <img src="${props.item.img}" alt="">
            <div class="description">
                <h3>${props.item.title}</h3>
                <p>${props.item.description}</p>
            </div>
        </div>
        <div class="column column--right">
            <span>
                ${props.item.price}
            </span>
        </div>
    </article>
    `;

    $("#" + props.container).append($.parseHTML(template))

}

const fullTextSearch = (props) => {

    let data = items;

    data.filter((item) => {
        if(item.title.toLowerCase().includes(props.input.toLowerCase()) | item.description.toLowerCase().includes(props.input.toLowerCase())){
            return true;
        }
        return false;
    }).map((item) => {
        searchArticle({item: item, container: "result"});
    })

}

$("#searchInput").on('input',() => {
    $("#result").empty();
    fullTextSearch({input: $("#searchInput").val()});
})