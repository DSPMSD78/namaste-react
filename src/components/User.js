import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>{props.name}</h1>
      <h3>Hyderabad</h3>
      <h4>Contact : @dspmsd78</h4>
      <h5
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count : {count}
      </h5>
    </div>
  );
};

export default User;
