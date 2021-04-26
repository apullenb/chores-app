import React, {useEffect, useState} from 'react';

function ViewChild(props) {
    const child = props.location.state
    return (
        <div>
           <h2>Child: {child.full_name} </h2>
        </div>
    )
}

export default ViewChild
