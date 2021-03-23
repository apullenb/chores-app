import React from 'react'

function AdminChoresBank(props) {
    const chore = props.chore
    return (
        <div>
            ID: 0{chore.chore_opt_id}
             <h3>Title: {chore.title } | Token Value: {chore.value}</h3>
         <p>Description: {chore.description }</p>
         <p>Steps: {chore.steps}</p>
         <p>Estimated Time to Complete: {chore.time_est} minutes</p>
         <p>Suggested Age: {chore.suggested_age}</p>
        </div>
    )
}

export default AdminChoresBank
