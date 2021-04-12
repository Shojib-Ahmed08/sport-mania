import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Media, Row, Col } from 'react-bootstrap';


const LeagueDetails = () => {
    const { id } = useParams();
    const [leagueDetails, setLeagueDetails] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueDetails(data.teams[0]))
    }, [])
    return (
        <div style={{ backgroundColor: '#020238', height: 'auto', color: 'white' }}>
            <Row xs={6} md={6} className="header-container , text-container">
                <Col><img src={leagueDetails.strTeamBadge} alt="" srcset="" /></Col>
                <Col><h1>{leagueDetails.strAlternate}</h1></Col>
            </Row>

            <Row className="details-container , mt-3" style={{ width: '900px', margin: ' 0 auto' }}>
                <Row>
                    <Col xs={12} md={7}>
                        <h1 style={{ marginLeft: '50px', marginTop: '10px' }}>{leagueDetails.strAlternate}</h1>
                        <div className="item">
                            <h5>League Play : {leagueDetails.strLeague2}</h5>
                            <h5>Sport Type : {leagueDetails.strSport}</h5>
                            <h5>Country : {leagueDetails.strCountry}</h5>
                            <h5>Gender : {leagueDetails.strGender}</h5>
                        </div>
                    </Col>
                    <Col xs={12} md={5} sm={12}>
                        <img
                            className="team-img"
                            src={leagueDetails.strTeamFanart3}
                            alt="Generic placeholder"
                        />
                    </Col>
                </Row>
            </Row>
            <br />
            <div style={{ width: '900px', margin: ' 0 auto', textAlign: 'justify' }}>
                <div>
                    <p>{leagueDetails.strDescriptionEN}</p>
                    <br />
                    <br />
                    <p>{leagueDetails.strStadiumDescription}</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;