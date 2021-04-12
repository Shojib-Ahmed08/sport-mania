import React, { useState, useEffect } from 'react';
import './Home.css'
import { Container, Row } from 'react-bootstrap';
import LeagueDisplay from '../LeagueDisplay/LeagueDisplay';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    const leagueData = leagues.slice(0, 9);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.teams))
    }, [])
    return (
        <div>
            <div className="header-container">
                <h2>Sports Mania</h2>
            </div>
            {/* <h1>league : {leagues.length}</h1> */}
            <div style={{ backgroundColor: '#020238' }}>
                <Container style={{marginTop: '0'}}>
                    <Row >
                        {
                            leagueData.map(league => <LeagueDisplay league={league}></LeagueDisplay>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;