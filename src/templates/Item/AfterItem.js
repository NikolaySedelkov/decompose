//Элемент с предданными

import Item from "./Item.js"

function AfterItem(props){
    //Определение ширины элемента {props.children}
    //далее возращаемому компоненту присвоить сдвиг влево на расстояние равное ширине полученной в прошлом пункте

    return (
       <Item style={props.style}>
            {props.children}<span>{props.description}</span>
       </Item>
    )
}