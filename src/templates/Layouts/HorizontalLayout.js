//Компонент горизонтального расположения элементов

import Layout from "./Layout.js"

function HorizontalLayout(props){
    return (
        <Layout style={`conteiner__horizontal-layout columns-${props.rows}`}>
            {props.children}
        </Layout>
    )
}