import React from 'react'


function Button(props) {

    return (
        <React.Fragment>

            <button onClick ={()=>props.onclick() } id={props.id} style={{ width: props.width || '100%', height: props.height || "40px", padding: props.padding || "10px", background: props.background, borderRadius: "10px", border: "none" }} disabled={props.isDisabled} >{props.buttonName}</button>

        </React.Fragment>
    )
}

export default Button
