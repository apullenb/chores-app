import React from 'react'

function ChildCard(props) {
const child = props.info

    return (
        <div className='child-card'>
            <h3 className='name'>{child.full_name}</h3>
            <section className='info'>
                <p>Age: {child.age}</p>
                <p>Username: {child.username}</p>
                <p>Tokens: {child.tokens}</p>

            </section>
        </div>
    )
}

export default ChildCard
