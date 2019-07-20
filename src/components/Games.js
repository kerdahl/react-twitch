import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getData from '../utils/getData';
import formatImageUrl from '../utils/formatImageUrl';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let dataArray = await getData(
        'https://api.twitch.tv/helix/games/top?first=50'
      );

      let finalArray = dataArray.map(game => {
        game.box_art_url = formatImageUrl(game.box_art_url, 750, 1000);
        return game;
      });

      setGames(finalArray);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center mb-4">Most Popular Games</h1>

      <div className="row">
        {games.map(game => (
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card">
              <img
                className="card-img-top"
                src={game.box_art_url}
                alt={game.name}
              />
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <button className="btn btn-success">
                  <Link
                    className="link"
                    to={{
                      pathname: 'game/' + game.name,
                      state: {
                        gameID: game.id
                      }
                    }}
                  >
                    {game.name} streams{' '}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
