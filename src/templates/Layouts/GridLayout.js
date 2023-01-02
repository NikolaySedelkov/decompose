//Компонент табличного расположения элементов

import Layout from "./Layout.js"

function GridLayout(props){
    return (
        <Layout style={`conteiner__grid-layout columns-${props.rows} rows-${props.rows}`}>
            {props.children}
        </Layout>
    )
}