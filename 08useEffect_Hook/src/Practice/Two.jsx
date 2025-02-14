import React, { useEffect, useState } from "react";

const Two = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error in fetching data", error);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div>
      {loading ? (
        <p> Loading user details ...... </p>
      ) : user ? (
        <div>
          <h1>Name :- {user.name}</h1>
          <p>UserName :- {user.username}</p>
          <p>Email :- {user.email}</p>
        </div>
      ) : (
        <p> user not found!</p>
      )}
    </div>
  );
};

export default Two;
