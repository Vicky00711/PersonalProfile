import { useState, useEffect } from "react";

function usePosts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const response = await data.json(); // Call .json() as a method
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return posts;
}

export default usePosts;
