//Базовый компонент, определяющий расположение элемента списка
//  порождает для трех производных
//  1.  Элемент с предданными(after)
//  2.  Элемент с постданными(before)

function Item(props){
    return (
        <div className={props.style}>
            {props.children}
        </div>
    )
}