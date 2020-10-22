import React from 'react'

function UserInfo(props){
    return(
        <div className="User-Info">
            <div className="user-name">
                {props.data.name}
            </div>
            <div className="user-info">
                {props.data.city}, {props.data.country}
                {props.data.title}
                {props.data.employer}
            </div>
            <div className="favorite-movies">
                {props.data.favoriteMovies}
            </div>
        </div>
    )
}

export default UserInfo;