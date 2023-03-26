import React, { Component } from "react";
import EnhancedComponent from "./Search";
import TeamDetails from "../TeamDetails/TeamDetails"

import "./Schedule.css"

//store game schedule for array
const gameSchedule = [
    {
        "team_name":"Flyers",
        "date":"2023/03/20",
        "time":"7.00 PM",
        "timezone":"AEDT",
        "location":"Dubbo",
        "state":"NSW"
    },
    {
        "team_name":"Red Backs",
        "date":"2023/03/26",
        "time":"5.00 PM",
        "timezone":"AEDT",
        "location":"Bendigo",
        "state":"VIC"
    },
    {
        "team_name":"Pistols",
        "date":"2023/03/30",
        "time":"7.00 PM" ,
        "timezone":"AEDT",
        "location":"Penguin",
        "state":"TAS"
    },
    {
        "team_name":"Thunder",
        "date":"2023/04/02",
        "time":"7.00 PM",
        "timezone":"AEDT",
        "location":"Penguin",
        "state":"TAS"
    },
    {
        "team_name":"Thunder",
        "date":"2023/04/03",
        "time":"3.00 PM",
        "timezone":"AEST",
        "location":"Townsville",
        "state":"QLD"
    },
    {
        "team_name":"Comets",
        "date":"2023/04/07",
        "time":"7.00 PM" ,
        "timezone":"ACDT",
        "location":"Port Augusta",
        "state":"SA"
    },
    {
        "team_name":"Kiwis",
        "date":"2023/04/08",
        "time":"5.00 PM",
        "timezone":"AEDT",
        "location":"Penguin",
        "state":"TAS"
    },
    {
        "team_name":"Crows",
        "date":"2023/04/10",
        "time":"3.00 PM",
        "timezone":"AEDT",
        "location":"Penguin",
        "state":"TAS"
    },
    {
        "team_name":"Mariners",
        "date":"2023/04/11",
        "time":"7.00 PM",
        "timezone":"AWST",
        "location":"Broome",
        "state":"WA"
    },
    {
        "team_name":"Stallions",
        "date":"2023/04/14",
        "time":"7.00 PM",
        "timezone":"AEDT",
        "location":"Penguin",
        "state":"TAS"
    },
    {
        "team_name":"Flyers",
        "date":"2023/04/17",
        "time":"7.00 PM",
        "timezone":"AEDT",
        "location":"Dubbo",
        "state":"NSW"
    },
    {
        "team_name":"Kiwis",
        "date":"2023/04/21",
        "time":"5.00 PM",
        "timezone":"AEDT",
        "location":"Penguin",
        "state":"TAS"
    },
    {
        "team_name":"Stallions",
        "date":"2023/04/25",
        "time":"5.00 PM",
        "timezone":"AEDT",
        "location":"Penguin",
        "state":"TAS"
    },
    {
        "team_name":"Dragons",
        "date":"2023/04/27",
        "time":"7.00 PM",
        "timezone":"AEDT",
        "location":"Byron Bay",
        "state":"NSW"
    },
    {
        "team_name":"Fire",
        "date":"2023/04/30",
        "time":"7.00 PM",
        "timezone":"AEDT",
        "location":"Albury",
        "state":"NSW"
    }
    
]

//only show games greater than today
const today = new Date();
const gameFilter = gameSchedule => gameSchedule.filter(({ date }) => new Date(date) > today);

//ascending date order
const futureGameSchedule = gameFilter(gameSchedule.sort((a,b) => new Date(a.date)  - new Date(b.date)));

    
//build game schedule card
const GameCard = (props) => {
    //set presentation
    var gdate = new Date(props.date).toDateString().toUpperCase();
    var teamName = (props.team_name).toUpperCase();

    //is home game
    let homeGame = '';
    if ((props.location) === "Penguin") {
        homeGame = 'HOME'
    } else {
        homeGame = 'AWAY'
    }

    return (
        <div className = "gameCard">
                    <p className="versus">
                        <b>VS</b>
                    </p>
                    <p className="gameVs">
                        <TeamDetails teamName={props.team_name} />
                        <b>{teamName}</b>
                    </p>
                    <p className="gameDate">
                        <b>{gdate}</b>
                    </p>
                    <p className="gameTime">
                        {props.time} {props.timezone}
                    </p>
                    <p className="gameLocation">
                        {props.location}, {props.state}
                    </p>
                    <p className="homeGame">
                        <b>{homeGame}</b>
                    </p>
        </div>
    )
}
// build game schedule table search
export class Schedule extends Component {
    render() {
        const {searchTerm} = this.props;
    return (
        <section id="schedule" className="schedule primary">
            <div className="scheduleScrollContainer">
                <div className="scheduleContainer">
                    {futureGameSchedule
            .filter(game => `${game.team_name} ${game.location}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
            .map((game,index) => <GameCard key={index} {...game}/>)}
                </div>
            </div>
        </section>
      );
    }
}

export default EnhancedComponent(Schedule);