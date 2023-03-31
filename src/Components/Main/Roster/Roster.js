import React, {useState} from "react";
import ReactCardFlip from 'react-card-flip';
import "./Roster.css"

//store all player details as an array
const playerRoster = [
    {
        "firstName":"Grace",
        "lastName":"Wu",
        "playerNumber":"09",
        "age":"23",
        "height":"1.96",
        "position":"C",
        "playerImage":"images/player2.jpg"
    },
    {
        "firstName":"Emily",
        "lastName":"Davies",
        "playerNumber":"15",
        "age":"24",
        "height":"1.72",
        "position":"SF",
        "playerImage":"images/player1.jpg"

    },
    {
        "firstName":"Letitia",
        "lastName":"Jeffries",
        "playerNumber":"19",
        "age":"27",
        "height":"1.83",
        "position":"PF",
        "playerImage":"images/player3.jpg"

    },
    {
        "firstName":"Emma",
        "lastName":"White",
        "playerNumber":"23",
        "age":"24",
        "height":"1.62",
        "position":"PG",
        "playerImage":"images/player4.jpg"

    },
    {
        "firstName":"Isabella",
        "lastName":"Rodgers",
        "playerNumber":"29",
        "age":"25",
        "height":"1.91",
        "position":"PF",
        "playerImage":"images/player5.jpg"

    },
    {
        "firstName":"Chloe",
        "lastName":"Smith",
        "playerNumber":"30",
        "age":"26",
        "height":"1.73",
        "position":"SG",
        "playerImage":"images/player6.jpg"

    },
    {
        "firstName":"Lily",
        "lastName":"Rose",
        "playerNumber":"33",
        "age":"27",
        "height":"1.71",
        "position":"SG",
        "playerImage":"images/player7.jpg"

    },
    {
        "firstName":"Elizabeth",
        "lastName":"Kennedy",
        "playerNumber":"36",
        "age":"29",
        "height":"2.01",
        "position":"C",
        "playerImage":"images/player8.jpg"

    },
    {
        "firstName":"Ella",
        "lastName":"Rose-Taylor",
        "playerNumber":"43",
        "age":"25",
        "height":"1.62",
        "position":"PG",
        "playerImage":"images/player9.jpg"

    },
    {
        "firstName":"Marie",
        "lastName":"Cabello",
        "playerNumber":"47",
        "age":"31",
        "height":"1.83",
        "position":"SF",
        "playerImage":"images/player10.jpg"

    },
    {
        "firstName":"Charlie",
        "lastName":"Grace",
        "playerNumber":"54",
        "age":"34",
        "height":"1.82",
        "position":"PF",
        "playerImage":"images/player11.jpg"

    },
    {
        "firstName":"Ava",
        "lastName":"Mitchell",
        "playerNumber":"72",
        "age":"28",
        "height":"1.71",
        "position":"SG",
        "playerImage":"images/player12.jpg"

    },

]

// card flip function > set state for flip
const PlayerCard = (props) => {
    const [isFlipped, setisFlipped] = useState(false);

    const handleClick = () => {
        setisFlipped(!isFlipped);
    }
    // build player card
    return (
        <div className="player_card">
        <figure className="player_image_container">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div className="playerCard_Front">
                        <img className="player_image" src={props.playerImage} alt="Player" onClick={handleClick}/>
                        <span className="player_number">{props.playerNumber}</span>
                        <i className="fa-solid fa-repeat fa-lg flip-icon" onClick={handleClick}></i>
                    </div>
                    <div className="playerCard_Back">
                        <span className="player_stats_container" onClick={handleClick}>
                        <table className="player_stats">
                            <tbody>
                                <tr className="player_stats_row">
                                    <th>Age</th>
                                    <td>{props.age}</td>
                                </tr>
                                <tr className="player_stats_row">
                                    <th>Height</th>
                                    <td>{props.height}</td>
                                </tr>
                                <tr className="player_stats_row">
                                    <th>Position</th>
                                    <td>{props.position}</td>
                                </tr>
                            </tbody>
                        </table>
                        </span>
                        <i className="fa-solid fa-repeat fa-lg flip-icon" onClick={handleClick}></i>
                    </div>
                </ReactCardFlip>
                <figcaption className="player_name" onClick={handleClick}><span className="player_name_number">{props.playerNumber}</span> - {props.firstName} {props.lastName}</figcaption>   
        </figure>
    </div> 
    )
}
    // build player card container
export default function Roster() {
    return (
        <section id="roster" className="roster secondary"> 
            <h2 className="section_header">Roster</h2>
            <div className = "roster_container primary">
                {playerRoster.map((player,index) => <PlayerCard key={index} {...player}/>)}
            </div>
        </section>
      );
}