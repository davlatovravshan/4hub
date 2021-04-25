import React from 'react'

import Cabinet from './pages/Cabinet'
import {Route, Switch} from 'react-router-dom'

const App = props => {

    return (
        <Switch>
            <Route path={'/'} component={Cabinet}/>
        </Switch>
    )
}

export default App