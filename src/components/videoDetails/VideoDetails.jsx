import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key } from "../../API/api";
import "./VideoDetails.scss";

const VideoDetails = ({ videoId, onclose }) => {
  const [video, setVideo] = useState([]);
  const [count, setcount] = useState(3);
  const getVideo = async (key) => {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${key}&language=en-US`
    );

    let { results } = res.data;
    setVideo(results);
  };
  useEffect(() => {
    getVideo(api_key);
  }, []);
  console.log(video);

  return (
    <div id="video">
      <div className="container">
        {video.length > 0 ? <h1>Трейлеры:</h1> : <h1>Трейлеров ещё нет</h1>}
        <div className="video">
          {video.slice(0, count).map((el) => (
            <>
              <div className="video--card">
                <iframe
                  width="442"
                  height="250"
                  src={`https://www.youtube.com/embed/${el.key}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </>
          ))}
          <center>
            {video.length >= count ? (
              <button onClick={() => setcount(count + 3)}>
                Смотреть больше...
              </button>
            ) : null}
          </center>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
