import React, { useEffect, useId, useState } from "react";

const Two = () => {
  //   const [user, setUser] = useState(null);
  const [user, setUser] = useState([]);
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

  //   const findUser = async (id) => {
  //     try {
  //       const res = await fetch(
  //         ` https://jsonplaceholder.typicode.com/users/${id}`
  //       );

  //       const data = await res.json();

  //       if (res.ok) {
  //         setUser(data);
  //         setLoading(false);
  //         console.log("user is present");
  //       } else {
  //         setUser(null)
  //         console.log("User not found");
  //         setLoading(true);
  //       }
  //     } catch (err) {
  //       console.log("Error to fetching data", err);
  //       setUser(null);
  //       setLoading(true);
  //     }
  //   };

  //   useEffect(() => {
  //     if (userId) {
  //       findUser(userId);
  //     }
  //   }, [userId]);

  //   const handleUser = async (id) => {
  //     try {
  //       const res = await fetch(
  //         `https://jsonplaceholder.typicode.com/users/${id}`
  //       );
  //       const userData = await res.json();

  //       if (res.ok) {
  //         setUser(userData);
  //         console.log("Data is Avaliable");
  //         setLoading(false);
  //       } else {
  //         console.log("User Data is not Avaliable to fetche");
  //         setLoading(true);
  //       }
  //     } catch (err) {
  //       console.log("Error in Fetching to data");
  //       setLoading(true);
  //     }
  //   };

  //   useEffect(() => {
  //     if(userId){
  //         handleUser(userId);
  //     }
  //   }, [userId])

  const allUser = async () => {
    try {
      setLoading(true);

      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();

      if (res.ok) {
        setUser(data);
        console.log("user Data is Ok ");
      } else {
        setUser([]);
        console.log("user Data is not Ok");
      }
    } catch (err) {
      setUser([]);
      console.log("Error in Fetching to data", err);
      setLoading(true);
    } finally {
        setLoading(false)
    }
  };

  useEffect(() => {
    allUser();
  }, []);

  return (
    // <div>
    //   {loading ? (
    //     <p> Loading user details ...... </p>
    //   ) : user ? (
    //     <div>
    //       <h1>Name :- {user.name}</h1>
    //       <p>UserName :- {user.username}</p>
    //       <p>Email :- {user.email}</p>
    //     </div>
    //   ) : (
    //     <p> user not found!</p>
    //   )}
    // </div>
    <div className="flex flex-wrap gap-4 justify-center">
      {loading ? (
        <p>Loading users...</p>
      ) : user.length > 0 ? (
        user.map((user) => (
          <div key={user.id} className="bg-gray-800 shadow-md p-4 rounded-xl w-80">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        ))
      ) : (
        <p>No users found!</p>
      )}
    </div>
  );
};

export default Two;
