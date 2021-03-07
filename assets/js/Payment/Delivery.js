const newDeliveryAddress = () => {

    let template = 
    `
    <form>
        <div class="group">
            <div class="subgroup">
                <label for="fname">First Name</label>
                <input type="text" name="fname" id="fname" placeholder="Your First Name" required>
            </div>
            <div class="subgroup">
                <label for="lname">Last Name</label>    
                <input type="text" name="lname" id="lname" placeholder="Your Last Name" required>
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

}

const newAddressViewer = (props) => {

    let template = 
    `
    <article class="address">
        <div class="row row--upper">
            <p>1 🔥</p>
            <p>Carlos Pomares</p>
            <p>C/ Valentin, 23</p>
            <p>
                <span>
                    07011
                </span>
                <span>
                    971 999 888
                </span>
            </p>
        </div>
        <div class="row row--lower">
        </div>
    </article>
    `;

    $("#" + props.container).append($.parseHTML(template));

}