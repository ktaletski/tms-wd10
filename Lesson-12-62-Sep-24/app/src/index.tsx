import ReactDOM from "react-dom/client";

import "./index.css";
import "./reset.css";

import { Counter } from "./Counter__mount_unmount";

// import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

// <App showLogo />

// const Greet: FC<{ items?: string[] }> = ({ items }) => {
//   const handleClick = () => {
//     // eslint-disable-next-line
//     console.log("clicked");
//   };

//   return (
//     <div style={{ backgroundColor: "red" }}>
//       {items?.map((item) => {
//         return (
//           <div key={item} onClick={handleClick}>
//             {item}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// interface ResetButtonProps {
//   title: string;
//   reset?: () => void;
// }

// const ResetButton: FC<ResetButtonProps> = ({ title, reset }) => {
//   return <button onClick={reset}>{title}</button>;
// };

// const Counter: FC = () => {
//   const [list, setList] = useState([{}, {}, {}]);
//   const [resetCount, setResetCount] = useState(0);

//   const reset = () => {
//     setList([])
//   };

//   const deleteItem = (id: string) => {
//     setList(prevList => prevList.filter(item => item.id !== id))
//   }

//   return (
//     <div>
//       <h1>{`Current count is: ${count}`}</h1>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//       <br />
//       {(count <= 3 || count > 5) && (
//         <ResetButton
//           title={resetCount > 3 ? "Воу воу палехче" : "Reset"}
//           reset={reset}
//         />
//       )}
//     </div>
//   );
// };

root.render(<Counter />);
