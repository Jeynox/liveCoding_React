import React from 'react'
import ReactDOM from 'react-dom/client'
import ActionAreaCard from './page/Card'
import CustomizedTables from './page/Recipe'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ActionAreaCard/>
        <CustomizedTables/>
    </React.StrictMode>,
)

