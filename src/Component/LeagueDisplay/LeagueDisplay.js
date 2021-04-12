import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeagueDisplay = (props) => {
    const { idTeam, strAlternate, strSport, strTeamBadge } = props.league;
    return (
        <div>
            <Card style={{ width: '18rem' , margin: '10px'}}>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strAlternate}</Card.Title>
                    <Card.Text>
                    {strSport}
                    </Card.Text>
                    <Button variant="primary"><Link style={{color: 'white', textDecoration: 'none'}} to={`/details/${idTeam}`}>League Details</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LeagueDisplay;