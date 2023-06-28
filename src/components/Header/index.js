import './style.css';
function Header(props){
    return(
        <header>
        <h1>Texas Intership Exercise</h1>
        <div>Hi {props.UserName}</div>
        </header>
    );
}

export default Header;