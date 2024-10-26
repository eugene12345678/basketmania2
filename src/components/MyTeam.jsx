
import React from 'react';

const MyTeam = ({ teamName, myTeam, onRemovePlayer, onBack }) => {
  return (
    <div>
      <h2>Team {teamName}</h2>
      <div className="my-team-container">
        {myTeam.length === 0 ? (
          <p>No players in Team {teamName}</p>
        ) : (
          myTeam.map(player => (
            <div key={player.id} className="player-card"> {/* Use player.id */}
              <img src={player.image_url} alt={player.name} className="player-image" />
              <h2>{player.name}</h2>
              <p>Team: {player.teams.length > 0 ? player.teams[0].team_id : 'N/A'}</p> {/* Adjust as necessary */}
              <p>Position: {player.position}</p>
              <p>Height: {player.height}</p>
              <p>Weight: {player.weight}</p>
              <p>Birthdate: {player.birthdate}</p>
              <button className="button" onClick={() => onRemovePlayer(player.id)}>Remove Player</button> {/* Use player.id */}
            </div>
          ))
        )}
      </div>
      <button className="button" onClick={onBack}>Back to Players</button>
    </div>
  );
};

export default MyTeam;

