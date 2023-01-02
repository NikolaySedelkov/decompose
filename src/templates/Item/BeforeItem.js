//Элемент с постданными

import Item from "./Item.js"

function BeforeItem(props){
    return (
       <Item style={props.style}>
            <span>{props.description}</span>{props.children}
       </Item>
    )
}