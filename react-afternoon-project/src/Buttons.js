import React, {Component} from 'react'

class Buttons extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="buttons">
                <button className="previous" onClick={e => this.props.previous(e)}>&lt; Previous</button>
                <div className="black-diamond-buttons">
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                    <button className="new">New</button>
                </div>
                <button className="next" onClick={e => this.props.next(e)}>Next &gt;</button>
            </div>
        )
    }
}

export default Buttons