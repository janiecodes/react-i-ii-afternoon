import React, {Component} from 'react'
import data from './data'
import UserInfo from './UserInfo'
import Buttons from './Buttons'

class User extends Component {
    constructor(){
        super()
        this.state = {
            data: data,
            userId: 0
        }
    }

    handleChangeNext = () => {
        if(this.state.userId === 24){
            this.setState({
                userId: 0
            })
        }else{
            this.setState({
                userId: this.state.userId + 1
            })
        }
    }

    handleChangePrevious = () => {
        if(this.state.userID === 0) {
            this.setState({
                userId: 24
            })
        }else{
            this.setState({
                userId: this.state.userId - 1
            })
        }
    }

    render(){
        const {data, userId} = this.state
        
        return(
            <div className="User">
                <UserInfo user={data[userId]}/>
                <Buttons next={this.handleChangeNext} previous={this.handleChangePrevious}/>
            </div>
        )
    }

}

export default User