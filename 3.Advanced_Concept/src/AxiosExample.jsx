import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [posts, setPosts] = useState([]);  // State to store fetched posts
  const [loading, setLoading] = useState(true);  // State to manage loading
  const [error, setError] = useState(null);  // State to manage errors

  useEffect(() => {
    // Send a GET request to fetch posts
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);  // Set the fetched data in the state
        setLoading(false);  // Set loading to false after fetching
      })
      .catch((error) => {
        setError(error.message);  // Set error message in case of error
        setLoading(false);  // Set loading to false if an error occurs
      });
  }, []);  // Empty dependency array ensures this effect runs once on component mount

  if (loading) {
    return <p>Loading...</p>;  // Display loading message while fetching
  }

  if (error) {
    return <p>Error: {error}</p>;  // Display error message if something goes wrong
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>  // Display titles of posts
        ))}
      </ul>
    </div>
  );
}

export default AxiosExample;
