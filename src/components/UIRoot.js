import React from 'react'
import ReactionContainer from './ReactionContainer'
import Header from './Header'

export default class UIRoot extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <ReactionContainer />
            </div>
        )
    }
}