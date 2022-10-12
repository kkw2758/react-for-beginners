// import { useState, useEffect } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [keyword, setKeyword] = useState("");

//   const onClick = () => setCounter((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);

//   // console.log("i run all the time");
//   useEffect(() => {
//     console.log("I run only once.");
//   }, []);

//   useEffect(() => {
//     console.log("I run when 'keywrod' changes.");
//   }, [keyword]);

//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]);

//   useEffect(() => {
//     console.log("I run when keyword & counter changes.");
//   }, [counter, keyword]);
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  });
  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
