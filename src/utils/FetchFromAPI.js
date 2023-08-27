import axios from "axios";

const BASE_URL = "'https://youtube-v31.p.rapidapi.com/search'";
const options = {
  url: BASE_URL,
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50"
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://youtube-v31.p.rapidapi.com",
//   params: {
//     // part: 'snippet,id',
//     regionCode: "IN",
//     maxResults: "50",
//     order: "viewCount"
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_RAPID_API,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
//   }
// };

// export const fetchFromApi = async (url) => {
//   const { data } = await axios
//     .get(`https://youtube-v31.p.rapidapi.com/${url}`, options)
//     .then()
//     .catch((e) => {
//       if (e.response.status === 429) console.log("API limit exceeded");
//     });

//   return data;
// };
