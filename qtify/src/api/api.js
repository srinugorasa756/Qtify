import axios from "axios";

export const BACKEND_ENPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/top`);
    return res.data;
  } catch (error) {
    console.error("fetchTopAlbums failed:", error);
    return []; // ✅ SAFE fallback
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/new`);
    return res.data;
  } catch (error) {
    console.error("fetchNewAlbums failed:", error);
    return []; // ✅ SAFE fallback
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/songs`);
    return res.data;
  } catch (error) {
    console.error("fetchSongs failed:", error);
    return []; // ✅ SAFE fallback
  }
};
