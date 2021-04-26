import React from 'react'
import '../../routes/dashboard/dashboard.css'
import { Link } from "react-router-dom";


function ChildCard(props) {
const child = props.info

    return (
        <div className='child-card'>
            <h3 className='name'>{child.full_name}</h3>
            <section className='info'>
                <p>Age: {child.age}</p>
                <p>Username: {child.username}</p>
                <p>Tokens: {child.tokens}</p>
                <Link
          to={{ pathname: `/view-child/${child.child_id}`, state: child }}
        ><button>View Child</button></Link>
            </section>
        </div> 
    )
}

export default ChildCard
