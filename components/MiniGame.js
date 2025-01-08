import React, { useEffect, useState } from 'react';
import generateClassNames from '../utils/generateClassNames';

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
    <div className={generateClassNames('container', { 'bg-gray-100': true })}>
      <h2 className={generateClassNames('text-2xl font-bold', { 'text-gray-800': true })}>Mini-Learning-Games</h2>
      {miniGames.length > 0 ? (
        miniGames.map((game) => (
          <div key={game.gameId} className={generateClassNames('p-4 mb-4 border rounded', { 'border-gray-300': true })}>
            <h3 className={generateClassNames('text-xl font-semibold', { 'text-gray-700': true })}>{game.title}</h3>
            <p className={generateClassNames('text-gray-600', { 'text-sm': true })}>{game.description}</p>
            {/* Render game data here */}
          </div>
        ))
      ) : (
        <p className={generateClassNames('text-gray-500', { 'text-sm': true })}>No mini-learning-games available.</p>
      )}
    </div>
  );
};

export default MiniGame;
