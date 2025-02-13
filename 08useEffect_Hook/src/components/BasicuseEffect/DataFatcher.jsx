import React, { useEffect, useState } from "react";

const DataFatcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoadding] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoadding(false);
      })
      .catch((err) => console.log("error come", err));
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <h1>Loadding....</h1>
        </div>
      ) : (
        <div>
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DataFatcher;
