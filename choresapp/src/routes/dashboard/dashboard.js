import React from 'react';
import {useSelector} from 'react-redux'

function Dashboard() {
    const state = useSelector(state => state)
    
    console.log(state);
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard
