import { useState } from "react";
import "./Blog.scss";
import { useEffect } from "react";
import moment from "moment/moment";
import axios from "axios";

const Secret = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {}, []);

  const handleSearchYT = async () => {
    try {
      let res = await axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          part: "snippet",
          maxResults: "20",
          key: "AIzaSyBDojgXilbBT3_wAi9b1dODHLW9KfLaTUs",
          type: "video",
          q: query,
        },
      });

      if (res && res.data && res.data.items) {
        let raw = res.data.items;
        let result = [];
        if (raw && raw.length > 0) {
          raw.map((item) => {
            let object = {
              id: item.id.videoId,
              title: item.snippet.title,
              createdAt: item.snippet.publishedAt,
              description: item.snippet.description,
              author: item.snippet.channelTitle,
            };

            result.push(object);
          });
        }
        setVideos(result);
      }
      console.log(">>> Check res: ", res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="youtube-search-container">
        <div className="yt-search">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              handleSearchYT();
            }}
          >
            Search
          </button>
        </div>

        {videos &&
          videos.length > 0 &&
          videos.map((item) => {
            return (
              <div className="yt-result" key={item.id}>
                <div className="left">
                  <iframe
                    className="iframe-yt"
                    src={`https://www.youtube.com/embed/${item.id}`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="right">
                  <div className="title">{item.title}</div>
                  <div className="created-at">
                    Created At:{" "}
                    {moment(item.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                  </div>
                  <div className="author">Author: {item.author}</div>
                  <div className="description">{item.description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Secret;
