//Компонент, добавляющий заголовок к расположению 

import Layout from "./Layout.js"

function LayoutWithHeader(props){
    return (
        <div className={props.child}>
            {props.children}
        </div>
    )
}