import React from "react";
import TeamDetails from "../TeamDetails/TeamDetails";
import {Element} from 'react-scroll';


import "./Standings.css"

// build team standings array
const allTeams = [
    {   
        "team_name":"Dragons",
        "wins":"22",
        "losses":"8",
        "streak":"W7",
    },
    {   
        "team_name":"Flyers",
        "wins":"21",
        "losses":"9",
        "streak":"L1",
    },
    {   
        "team_name":"Kiwis",
        "wins":"19",
        "losses":"11",
        "streak":"W2",
    },
    {   
        "team_name":"Penguins",
        "wins":"19",
        "losses":"11",
        "streak":"L1",
    },
    {   
        "team_name":"Red Backs",
        "wins":"18",
        "losses":"12",
        "streak":"W1",
    },
    {   
        "team_name":"Pistols",
        "wins":"17",
        "losses":"13",
        "streak":"W3",
    },
    {   
        "team_name":"Stallions",
        "wins":"15",
        "losses":"15",
        "streak":"W1",
    },
    {   
        "team_name":"Fire",
        "wins":"15",
        "losses":"15",
        "streak":"L2",
    },
    {   
        "team_name":"Crows",
        "wins":"14",
        "losses":"16",
        "streak":"L1",
    },
    {   
        "team_name":"Mariners",
        "wins":"13",
        "losses":"17",
        "streak":"W2",
    },
    {   
        "team_name":"Thunder",
        "wins":"9",
        "losses":"21",
        "streak":"L4",
    },
    {   
        "team_name":"Comets",
        "wins":"6",
        "losses":"24",
        "streak":"L7",
    }
]

// build presentation of table data
const TableRow = (props) => {
    //calculate win percentage
    const w = Number(props.wins);
    const l = Number(props.losses);
    const winper = (w / (w + l)).toFixed(3).substring(1);
    
    //calculate games behind
    const highestWins = Math.max(...allTeams.map(allTeams => allTeams.wins));
    const gb = highestWins - w
    
    //return team row
    return (
    <tr>
        <td className="standingsplace">{props.rowNumber}</td>
        <td className="team"> <TeamDetails teamName={props.team_name} /> {props.team_name}</td>
        <td>{props.wins}</td>
        <td>{props.losses}</td>
        <td>{winper}</td>
        <td>{gb}</td>
        <td>{props.streak}</td>
    </tr>
    )
}

// sort table by wins
const teamsDescending = [...allTeams].sort((a,b) => b.wins - a.wins);

// export full standings table
export default function Standings() {

    return (
        <Element name="standings" className="element">
            <section id="standings" className="standings primary">
                <h2 className="section_header">Standings</h2>
                <table className = "standings_table" border="1px">
                    {/*display table headers. Consider storing as own component*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="team">Team</th>
                            <th>Wins</th>
                            <th>Loses</th>
                            <th>Win%</th>
                            <th>GB</th>
                            <th>Streak</th>
                        </tr>
                    </thead>
                    <tbody>    
                        {teamsDescending.map((team, index) => <TableRow key={team.team_name} rowNumber={index+1} {...team}/> )}
                    </tbody>
                </table>
            </section>
        </Element>
      );
}