import React from 'react'
import { withRouter } from 'react-router-dom'

const Navbar = (props) => {

    return(
        <div>
            Navbar
            <button onClick={handleOnClick}>About</button>
        </div>
    )
}

function handleOnClick() {
    this.props.history.push('/about')
}

export default withRouter(Navbar)