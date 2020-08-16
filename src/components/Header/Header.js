import React from 'react'

import { Link } from 'react-router-dom'


import AppBar from '@material-ui/core/AppBar'

//import Drawer from '@material-ui/core/Drawer'
import { Toolbar, Button } from '@material-ui/core'


export default function Header(){
    return (
        <AppBar>
            <Toolbar >
                <Button color="secondary" variant="contained">TEST
                    {/* <Link to="/">Home</Link> */}
                </Button>
            </Toolbar>
        </AppBar>
    )
}