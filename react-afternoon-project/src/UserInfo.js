import React from 'react'

function UserInfo({user}){

    return(
        <div className="user-info">
            <div className="user-id">
                {user.id}/25
            </div>
            <div className="user-name">
                {user.name.first} {user.name.last}
            </div>
            <div className="info">
                <p className="from"><strong>From: </strong> {user.city}, {user.country}</p>
                <p className="job-title"><strong>Job Title: </strong> {user.title}</p>
                <p className="employer"><strong>Employer: </strong> {user.employer}</p>
            </div>
            <div className="favorite-movies">
                <h4 className="movie-list"><strong>Favorite Movies:</strong></h4>
                    <p className="first-movie">1. {user.favoriteMovies[0]}</p>
                    <p className="second-movie">2. {user.favoriteMovies[1]}</p>
                    <p className="third-movie">3. {user.favoriteMovies[2]}</p>
            </div>
        </div>
    )
}

export default UserInfo;