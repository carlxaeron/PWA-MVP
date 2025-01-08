import React, { useEffect, useState } from 'react';

const MiniGame = () => {
  const [miniGames, setMiniGames] = useState([]);

  useEffect(() => {
    const fetchMiniGames = async () => {
      try {
        const response = await fetch('/api/miniGames');
        const data = await response.json();
        setMiniGames(data);
      } catch (error) {
        console.error('Error fetching mini-games:', error);
      }
    };

    fetchMiniGames();
  }, []);

  return (
    <div>
      <h2>Mini-Learning-Games</h2>
      {miniGames.length > 0 ? (
        miniGames.map((game) => (
          <div key={game.gameId}>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            {/* Render game data here */}
          </div>
        ))
      ) : (
        <p>No mini-learning-games available.</p>
      )}
    </div>
  );
};

export default MiniGame;
