import React from 'react'
import Menu from './Menu'

export default class Header extends React.Component{
    render() {
        return (
            <div className="jumbotron text-center">
                <h1>Ranked Choice => Viral</h1>
                <p>Help reclaim the electoral process! With more choices we can reduce polarization in politics and reform our democracy to represent more Americans.</p>
                <Menu />
            </div>
        )
    }
}