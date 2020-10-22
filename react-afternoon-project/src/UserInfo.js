import React from 'react'

function UserInfo(props){
    return(
        <div className="User-Info">
            <div className="name">
                {props.users.name}
            </div>
            <div className="user-info">
                {props.users.city}, {props.users.country}
                {props.users.title}
                {props.users.employer}
            </div>
            <div className="favorite-movies">
                {props.users.favoriteMovies}
            </div>
        </div>
    )
}

export default UserInfo;