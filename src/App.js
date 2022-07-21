import "./styles.css";
import axios from "axios";

export default function App() {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>Users</button>
      <button onClick={onClickUser1}>id=1のUser</button>
    </div>
  );
}
