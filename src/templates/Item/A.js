//Компонент ссылки

function A(props){
    return (
        <a className={props.style} href={props.url}>
            {props.children}
        </a>
    )
}