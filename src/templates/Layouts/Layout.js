//Базовый компонент, определяющий расположение элементов в блоке
//  порождает для трех производных
//  1.  Горизонтальное расположение
//  2.  Вертикальное расположение
//  3.  Табличное расположение

function Layout(props){
    return (
        <div className={props.style}>
            {props.children}
        </div>
    )
}