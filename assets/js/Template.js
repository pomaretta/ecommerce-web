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
            setTimeout(() => {
                circle.classList.add('hidden');
                addButton.classList.remove('hidden');
            },1500)
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
                <div>
                    <span class="articlePrice">${props.price}</span>
                    <span class="numberOfThis">${props.count}</span>
                </div>
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

const signUpTemplate = (props) => {

    let template = 
    `
    <div class="container">
        
        <div class="gateway">
            <h1>
                Sign Up
            </h1>

            <form action="../../index.html" method="post">

                <label for="username">Nombre de usuario</label>
                <input type="text" name="username" id="username" placeholder="Enter Your Name" required>

                <label for="email">Correo electronico</label>
                <input type="email" name="email" id="email" placeholder="Enter Your Email" required>

                <label for="password">Contrasena</label>
                <input type="password" name="password" id="password" placeholder="Enter Your Password" required>

                <label for="c-password">Confirmar contrasena</label>
                <input type="password" name="c-password" id="c-password" placeholder="Enter Your Password Again" required>

                <input type="submit" value="Sing Up" onclick="registerNewUser({
                    email: document.getElementById('email').value,
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value
                })">

            </form>

            <p>or</p>

            <button>
                <span>
                    <svg width="2443" height="2500" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                    <p>Sign Up With Google</p>
                </span>
            </button>

            <div class="login">
                <p>Already have an account?</p>
                <a href="./index.html?type=sign-in">Sign In</a>
            </div>
        </div>
    </div>
    `;

    $("." + props.container).append($.parseHTML(template)).attr("id",`${props.id}`);

}

const signInTemplate = (props) => {

    let template = 
    `
    <div class="container">
        <div class="gateway">
            <h1>Sign In</h1>
            <form action="#">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter Your Email" required>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter Your Password" required>
                <input type="submit" value="Sign In">
            </form>
            <p>or</p>
            <button>
                <span>
                    <svg width="2443" height="2500" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                    <p>Sign Up With Google</p>
                </span>
            </button>
            <div class="login">
                <p>Dont have an account?</p>
                <a href="./index.html?type=sign-up">Sign Up</a>
            </div>
        </div>
    </div>
    `;

    $("." + props.container).append($.parseHTML(template)).attr("id",`${props.id}`);

}

const userHeaderData = (props) => {

    let template = 
    `
    <li class="userControls">
        <a id="controlButton">
            ${props.user.username}
            <i class="fas fa-user-cog"></i>
        </a>
        <div class="dropdown collapse" id="userDrop">
            <ul class="row row--upper">
                <li>
                    <a href="">
                        Datos personales
                    </a>
                </li>
            </ul>
            <ul class="row row--lower">
                <li>
                    <a onclick="logout();window.location.href='./index.html';">
                        Desconectarse
                    </a>
                </li>
            </ul>
        </div>
    </li>
    `;

    $("#" + props.container).append($.parseHTML(template));

}

const paymentArticle = (props) => {

    let template = 
    `
    <article>
        <div class="column column--left">
            <header>
                <img src="${props.item.img}" alt="Article's image">
            </header>
            <main>
                <h3>${props.item.title}</h3>
            </main>
        </div>
        <div class="column column--right">
            <footer>
                <div class="quantity">
                    <a class="minus" onclick="decrementCount({id: ${props.item.id}})">
                        <i class="fas fa-minus"></i>
                    </a>
                    <span>${props.item.count}</span>
                    <a class="plus" onclick="incrementCount({id: ${props.item.id}})">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
                <p>
                    ${props.item.price}
                </p>
            </footer>
        </div>
    </article>
    `;

    $('.' + props.container).append($.parseHTML(template));

}

const paymentCheckout = (props) => {

    let template = 
    `
    <h1>Checkout</h1>
    <div class="items">
    </div>
    <div class="total">
        <p>
            Total:
            <span id="totalPrice"></span>
        </p>
    </div>
    `;
    
    $("#" + props.container).append($.parseHTML(template)).addClass('checkout');

}

const paymentAddress = (props) => {

    let template = 
    `
    <div class="summary">
    </div>
    <div class="options">
        <h1>Delivery</h1>
        <div id="addresses">
            <div class="row row--upper" id="addressHandler">
            </div>
            <div class="row row--lower">
                <div class="column column--left"></div>
                <div class="column column--right">
                    <a href="">
                        <i class="far fa-edit"></i> 
                    </a>
                    <a href="" class="warning">
                        <i class="far fa-trash-alt"></i>
                    </a>
                    <a href="#">
                        <i class="far fa-plus-square"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;

    $('#' + props.container).append($.parseHTML(template)).addClass('delivery');

}