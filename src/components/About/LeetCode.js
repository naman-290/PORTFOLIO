import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LeetCodeProfile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // Make a GET request to the LeetCode profile API endpoint using the proxy server
    axios.get('https://leetcode-api.cyclic.app/heybro068').then((response) => {
      setProfile(response.data.user_profile);
    });
  }, []);

  return (
    <div>
      <h1>LeetCode Profile</h1>
      <div>
        <div>
          <h2>Username:</h2>
          <p>{profile.username}</p>
        </div>
        <div>
          <h2>Rank:</h2>
          <p>{profile.user_rank}</p>
        </div>
        <div>
          <h2>Points:</h2>
          <p>{profile.user_points}</p>
        </div>
        <div>
          <h2>Solved:</h2>
          <p>{profile.num_solved}</p>
        </div>
        <div>
          <h2>Total:</h2>
          <p>{profile.num_total}</p>
        </div>
      </div>
    </div>
  );
}

export default LeetCodeProfile;
