import ReactDOM from "react-dom/client";

import "./index.css";
import "./reset.css";

import { Component } from "./Heuristics--dynamic-type";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<Component />);

// import { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom/client";

// import "./index.css";
// import "./reset.css";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement,
// );

// root.render(<App />);

// function ChatRoom({ roomId }: { roomId: string }) {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [serverUrl, setServerUrl] = useState("https://localhost:4242");
//   const [message, setMessage] = useState("");
//   const [connecting, setConnecting] = useState(true);
//   const [connectionToken, setConnectionToken] = useState<string | null>(null);

//   useEffect(() => {
//     const connection = createConnection({ serverUrl, roomId });

//     setConnecting(true);
//     connection
//       .connect()
//       .then(({ connectionToken }) => setConnectionToken(connectionToken))
//       .finally(() => setConnecting(false));

//     return () => {
//       connection.disconnect();
//     };
//   }, [serverUrl, roomId]);

//   if (connecting) {
//     return (
//       <span>
//         ⏳ Connecting to "{roomId}" room at {serverUrl}...
//       </span>
//     );
//   }

//   return (
//     <>
//       <label>
//         Server URL: <input ref={inputRef} defaultValue={serverUrl} />
//         <button
//           onClick={() => {
//             if (inputRef.current?.value) setServerUrl(inputRef.current?.value);
//           }}
//         >
//           Reconnect
//         </button>
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
//       <h3>You are connected using token "{connectionToken}"</h3>
//       <label>
//         Your message:{" "}
//         <input value={message} onChange={(e) => setMessage(e.target.value)} />
//       </label>
//     </>
//   );
// }

// function App() {
//   const [show, setShow] = useState(false);
//   const [roomId, setRoomId] = useState("general");
//   return (
//     <>
//       <label>
//         Choose the chat room:{" "}
//         <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//         <button onClick={() => setShow(!show)}>
//           {show ? "Close chat" : "Open chat"}
//         </button>
//       </label>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   );
// }

// export function createConnection({
//   serverUrl,
//   roomId,
// }: {
//   serverUrl: string;
//   roomId: string;
// }) {
//   // Фейковый коннект, возвращает рандомный токен соединения через 2 секунды
//   return {
//     async connect(): Promise<{ connectionToken: string }> {
//       return new Promise((resolve) =>
//         setTimeout(() => {
//           // eslint-disable-next-line
//           console.log(
//             '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "...",
//           );
//           resolve({
//             connectionToken: Math.floor(Math.random() * 1000000).toString(),
//           });
//         }, 2000),
//       );
//     },
//     disconnect() {
//       return new Promise((resolve) =>
//         setTimeout(() => {
//           // eslint-disable-next-line
//           console.log(
//             '❌ Disconnected from "' + roomId + '" room at ' + serverUrl,
//           );
//         }, 2000),
//       );
//     },
//   };
// }
