import React from 'react'

function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}

const Gretting = () => {
    return (
        <div>
            <Welcome name = "Byungsoo Kim"/>
            <Welcome name = "김병수"/>
            <Welcome name = "병수김"/>
        </div>
    )
}

export default Gretting
