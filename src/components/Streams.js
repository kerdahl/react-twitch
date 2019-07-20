import React, { useEffect, useState } from 'react';
import getData from '../utils/getData';
import getTotalViews from '../utils/getTotalViews';
import formatImageUrl from '../utils/formatImageUrl';

function Streams() {
  const [streamData, setStreamData] = useState([]);
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const dataArray = await getData(
        'https://api.twitch.tv/helix/streams?first=50'
      );

      let gameIDs = dataArray.map(stream => {
        return stream.game_id;
      });

      let queryParams = '';
      gameIDs.map(id => {
        return (queryParams = queryParams + `id=${id}&`);
      });

      let gamesURL = `https://api.twitch.tv/helix/games?${queryParams}`;
      const gameArray = await getData(gamesURL);

      let finalArray = dataArray.map(stream => {
        stream.gameName = 'Unknown Game';
        gameArray.map(game => {
          if (stream.game_id === game.id) {
            return (stream.game_name = game.name);
          }
        });

        stream.thumbnail_url = formatImageUrl(stream.thumbnail_url, 1920, 1080);

        return stream;
      });

      let totalViewers = getTotalViews(finalArray);

      setViewers(totalViewers);
      setStreamData(finalArray);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">Most Popular Streams</h1>
      <h3 className="text-center">
        <strong className="text-primary">{viewers}</strong> users currently
        watching
      </h3>

      <div className="row">
        {streamData.map(stream => (
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card">
              <img
                className="card-img-top"
                src={stream.thumbnail_url}
                alt={`${stream.user_name} playing ${stream.game_name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{`${stream.user_name} playing ${
                  stream.game_name
                }`}</h5>
                <div className="card-subtitle">{stream.title}</div>
                <div className="card-text">
                  {stream.viewer_count} current viewers
                </div>
                <button className="btn btn-success">
                  <a
                    className="link"
                    href={`https://www.twitch.tv/${stream.user_name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on Twitch
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Streams;
