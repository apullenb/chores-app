import React, { useState } from 'react'

function TextInput(props) {
    const [label, setLabel] = useState({ error: false, errorMessage: "" })
   
    return (
        <div>
            { label.error ? <label htmlFor="textInput"> {label.errorMessage}</label> : <div />}
            <input type={props.type} name={props.name} placeholder={props.placeholder} style={{width:props.width || '200px', height: props.height || '40px', borderRadius:"10px"}} onBlur={(input) => {
                
                setLabel(props.Validation(input), props.secondaryInput)
                
            }} />

            {props.getErrorFormInputFields(label.error)}
        </div>
    )
}

export default TextInput;
