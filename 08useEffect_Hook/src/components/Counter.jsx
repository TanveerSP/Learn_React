import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // first -> side-effect function
  // second -> clean-up function
  // third -> comma separated dependanci list

  // useEffect have multipal varataion present

  // ####################################
  // varataion: 1 -->
  // runs on every render
  // 'jabhi page reload hoga tab-tab ye chlinga'
  // ####################################

  //   useEffect(() => {
  //     alert(" I will run on each render");
  //   });

  // ####################################
  // variation: 2 -->
  // that runs on only first reder
  // Jabhi first time page reload hota hai tab ye Chlinga
  // ####################################

  //   useEffect(() => {
  //    alert("I will run on only first render")
  //   }, [])

  // ####################################
  // vatiation: 3 -->
  // run every time when count is update
  // ####################################
  //   useEffect(() => {
  //     alert(`I am variation 3 of useEffect
  // I will run every time when count is update `);
  //   }, [count]);

  // ####################################
  // vatiation: 4 -->
  // Multipal dependencie
  // ####################################

  // useEffect(() => {
  //   alert("i will run every time when count/total is update")
  // }, [count, total]);

  // ####################################
  // vatiation: 5 -->
  // cleanup function
  // ####################################

  useEffect(() => {
    alert("Count is updated")
  
    return () => {
      alert("count is unmounted form UI")
    }
  }, [count])
  

  function handleClick() {
    setCount(count + 1);
  }
  function handleClickTotal() {
    setTotal(total + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>Update Count</button>
      <h1>count is:{count}</h1>
      <button onClick={handleClickTotal}>Update Total</button>
      <h1>total is:{total}</h1>
    </div>
  );
};

export default Counter;
