//Компонент вертикального расположения элементов

import Layout from "./Layout.js"

function VerticalLayout(props){
    return (
        <Layout style={`conteiner__row-layout rows-${props.rows}`}>
            {props.children}
        </Layout>
    )
}