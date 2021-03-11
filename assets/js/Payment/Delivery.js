const newDeliveryAddress = (props) => {

    $('#' + props.container).empty();

    let template = 
    `
    <form id="addressForm" method="post">
        <div class="group">
            <div class="subgroup">
                <label for="fname">First Name</label>
                <input type="text" name="fname" id="firstName" placeholder="Your First Name" required>
            </div>
            <div class="subgroup">
                <label for="lname">Last Name</label>    
                <input type="text" name="lname" id="lastName" placeholder="Your Last Name" required>
            </div>
        </div>
        <div class="group">
            <label for="address">Street Address</label>
            <div class="subgroup">
                <input type="text" name="address" id="address" placeholder="Street Address" required>
                <input type="text" name="apt" id="apt" placeholder="Apt/Unit" required>
                <input type="text" name="city" id="city" placeholder="Town/City" required>
                <input type="text" name="state" id="state" placeholder="State" required>
                <input type="text" name="zip" id="zip" placeholder="Zip Code" required>
                <input type="text" name="phone" id="phone" placeholder="Phone Number" required>
            </div>
            <input type="submit" value="Set address">
        </div>
    </form>
    `;

    $('#' + props.container).append($.parseHTML(template));

    $("#addressForm").submit(() => {
        registerAddressHandler();
        return false;
    })
    
}

const newAddressViewer = (props) => {

    let template = 
    `
    <article class="address">
        <div class="row row--upper">
            <p>${props.count} 🔥</p>
            <p>${props.address.fName + " " + props.address.lName}</p>
            <p>C/ ${props.address.street}, ${props.address.unit}</p>
            <p>
                <span>
                    ${props.address.zip}
                </span>
                <span>
                    ${props.address.phone}
                </span>
            </p>
        </div>
        <div class="row row--lower">
        </div>
    </article>
    `;

    $("#" + props.container).append($.parseHTML(template));

}

const registerNewDeliveryAddress = (props) => {

    let addresses = JSON.parse(getData({key: 'address'}));

    const address = {
        fName: props.firstName,
        lName: props.lastName,
        street: props.streetAddress,
        unit: props.unit,
        town: props.town,
        state: props.state,
        zip: props.zip,
        phone: props.phone
    };

    if(addresses == null){
        addresses = [];
        addresses.push(address)
    } else {
        addresses.push(address);
    }

    setData({key: "address",content: JSON.stringify(addresses)});

}

const registerAddressHandler = () => {

    let fName = $("#firstName").val()
    ,lName = $("#lastName").val()
    ,streetAddress = $("#address").val()
    ,unit = $("#apt").val()
    ,town = $("#city").val()
    ,state = $("#state").val()
    ,zip = $("#zip").val()
    ,phone = $("#phone").val();

    registerNewDeliveryAddress({
        firstName: fName,
        lastName: lName,
        streetAddress: streetAddress,
        unit: unit,
        town: town,
        state: state,
        zip: zip,
        phone: phone
    });

    updateDeliveryAddresses({key: 'addressHandler'})

}

const updateDeliveryAddresses = (props) => {

    let addresses = JSON.parse(getData({key: 'address'}));

    $("#addressHandler").empty()

    if(addresses != null){
        addresses.forEach((address, index) => {
            newAddressViewer({
                container: 'addressHandler',
                count: index + 1,
                address: address
            });
        });
    } else {
        console.log("gg");
        newDeliveryAddress({container: 'addressHandler'})
    }

    // INTERACTIVITY
    $(".address").each((index) => {
        $(".address").get(index).onclick = () => {
            if($(".address").get(index).classList.contains('selected')){
                $(".address").get(index).classList.remove('selected');
            } else {
                $(".address").each((index) => {
                    if($(".address").get(index).classList.contains('selected')){
                        $(".address").get(index).classList.remove('selected');
                    }
                })
                $(".address").get(index).classList.add('selected');
            }
        }
    })

}

const editDeliveryAddress = () => {}

const removeDeliveryAddress = () => {}

const createDeliveryAddress = () => {}