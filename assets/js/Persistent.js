// PERSISTENT USE CASE

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