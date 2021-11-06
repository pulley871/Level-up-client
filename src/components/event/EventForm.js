import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { getGames } from "../game/GameManager"
import { createEvent } from "./EventManager"


export const EventForm = () => {
    const history = useHistory()

    const [currentEvent, setEvent] = useState({})
    const [games, setGames] = useState([])
    useEffect(() => {
        getGames().then((data)=> setGames(data))
        // TODO: Get all existing games from API
    }, [])

    const changeEventStateGame = (domEvent) => {
        // TODO: Complete the onChange function
        const event = {...currentEvent}
        event.game_id = domEvent.target.value
        setEvent(event)
    }
    const changeEventStateDescription = (domEvent) => {
        // TODO: Complete the onChange function
        const event = {...currentEvent}
        event.description = domEvent.target.value
        setEvent(event)
    }
    const changeEventStateDate = (domEvent) => {
        // TODO: Complete the onChange function
        const event = {...currentEvent}
        event.date = domEvent.target.value
        setEvent(event)
    }
    const changeEventStateTime = (domEvent) => {
        // TODO: Complete the onChange function
        const event = {...currentEvent}
        event.time = domEvent.target.value
        setEvent(event)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={ currentEvent.game_id }
                        onChange={ changeEventStateGame }>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option value={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="descirption">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentEvent.description}
                        onChange={changeEventStateDescription}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        value={currentEvent.date}
                        onChange={changeEventStateDate}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        value={currentEvent.time}
                        onChange={changeEventStateTime}
                    />
                </div>
            </fieldset>

            {/* TODO: Create the rest of the input fields */}
            
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    const object = {
                        game_id : currentEvent.game_id,
                        description : currentEvent.description,
                        date : currentEvent.date,
                        time : currentEvent.time 
                    }
                    // TODO: Call the createEvent function and pass it the event object
                    createEvent(object).then(()=>history.push("/events"))

                    // TODO: Once event is created, redirect user to event list
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}
