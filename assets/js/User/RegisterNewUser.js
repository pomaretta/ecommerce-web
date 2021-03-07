const registerNewUser = (props) => {

    // SET NEW USER DATA
    let user = {
        id: MD5(props.username + props.email),
        email: props.email,
        username: props.username,
        password: MD5(props.password),
        firstName: "",
        lastName: "",
        address: "",
        payment: {
            method: "",
            card: {
                number: "",
                expirationDate: "",
                cvc: ""
            }
        }
    }

    setData({key: "user", content: JSON.stringify(user)});

    console.log(user);

}