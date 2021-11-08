import React, { useEffect, useState } from "react"
import { getProfile } from "./ProfileManager.js"
import "./Profile.css"


export const Profile = () => {
    const [ profile, changeProfile ] = useState([])

    useEffect(() => {
        getProfile().then(data => changeProfile(data))
    }, [])

    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                {/* TODO: show the user's first and last name */}
                {console.log(profile)}
                    Welcome: {profile.gamer.user.first_name} {profile.gamer.user.last_name}
                </div>
                {/* TODO: show the user's username */}
                <div className="profile__username">Username: {profile.gamer.user.username}</div>
                {/* TODO: show the user's bio */}
                <div className="profile__bio">About you: {profile.gamer.bio}</div>
            </section>
            <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Events you are attending</h3>
                    {profile.attending.map(event =>{
                        return(
                        <div key={`${event.id}_container_attending`} className="profile-event-container">
                            <h4 key={`${event.id}_gametitle_attending`}>{event.game.title}</h4>
                            <p key={`${event.id}_description_attending`}>{event.description}</p>
                            <p key={`${event.id}_date_attending`}>{event.date} @{event.time}</p>
                        </div>)
                    })}
                </header>
                <div className="registrations">
                    {/* TODO: Map through the events the user is attending */}
                    
                </div>
            </section>
            <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Events you are hosting</h3>
                    {profile.hosting.map(event =>{
                        return(
                        <div key={`${event.id}_container_hosting`} className="profile-event-container">
                            <h4 key={`${event.id}_gametitle_hosting`}>{event.game.title}</h4>
                            <p key={`${event.id}_description_hosting`}>{event.description}</p>
                            <p key={`${event.id}_date_hosting`}>{event.date} @{event.time}</p>
                        </div>)
                    })}
                </header>
                <div className="registrations">
                    {/* TODO: Map through the events the user is hosting */}
                </div>
            </section>
        </article>
    )
}
