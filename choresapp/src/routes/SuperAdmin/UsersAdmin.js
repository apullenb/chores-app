import React from 'react'

function UsersAdmin(props) {
    const parent = props.parent
    return (
        <div>
            Family ID: {parent.family_id}
            <h4>Family Last Name: {parent.family_last_name}</h4>
            <p>Parent Name: {parent.parent_name}</p>
            <p>Parent Username: {parent.parent_username}</p>
            <p>Parent Password: ##### <button>edit</button></p>
            <p>Parent User ID: #0{parent.parent_user_id}</p>

        </div>
    )
}

export default UsersAdmin
