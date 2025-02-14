import React, { useEffect, useId, useState } from "react";

const Two = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     setLoading(true);

  //     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUser(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log("error in fetching data", error);
  //         setLoading(false);
  //       });
  //   }, [userId]);

  //   const UserDetails = async (id) => {
  //     try {
  //       setLoading(true);

  //       const response = await fetch(
  //         `https://jsonplaceholder.typicode.com/users/${id}`
  //       );
  //       const data = await response.json();

  //       // Check data is present
  //       if (response.ok) {
  //         setUser(data);
  //         setLoading(false);
  //       } else {
  //         console.log("Error: invalid API response", data);
  //         setUser(null);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log("Error to fetch data", error);
  //       setUser(null);
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     if (userId) {
  //       UserDetails(userId);
  //     }
  //   }, [userId]);

  const findUser = async (id) => {
    try {
      const res = await fetch(
        ` https://jsonplaceholder.typicode.com/users/${id}`
      );

      const data = await res.json();

      if (res.ok) {
        setUser(data);
        setLoading(false);
        console.log("user is present");
      } else {
        console.log("User not found");
        setLoading(true);
      }
    } catch (err) {
      console.log("Error to fetching data", err);
      setUser(null);
      setLoading(true);
    }
  };

  useEffect(() => {
    if (userId) {
      findUser(userId);
    }
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
