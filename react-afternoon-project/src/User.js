import React, {Component} from 'react'
import data from './data'
import UserInfo from './UserInfo'

class User extends Component {
    constructor(){
        super()
        this.state = {
            data: data
        }
    }

    render(){

        let data = this.state.data.map((element) => {
            return <UserInfo key={element.name} data={element}/>
        })
        return(
            <div className="User">
                {data}
            </div>
        )
    }

}

export default User