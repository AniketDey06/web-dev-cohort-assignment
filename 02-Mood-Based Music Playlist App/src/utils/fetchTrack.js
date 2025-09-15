// utils/fetchTrack.js or inside your component
import axios from 'axios';

const fetchTrack = async () => {
  const options = {
    method: 'POST',
    url: 'https://spotifystefan-skliarovv1.p.rapidapi.com/getSingleTrack',
    headers: {
      'x-rapidapi-key': 'c6b5b03d58msh76d2eff5f658ca6p17ea11jsn6509c3eaecfb',
      'x-rapidapi-host': 'spotifystefan-skliarovV1.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      track_id: '3n3Ppam7vgaVa1iaRUc9Lp' // 🎵 Example track ID (Eminem - Lose Yourself)
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching track:', error);
    return null;
  }
};

export default fetchTrack;