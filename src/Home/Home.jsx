import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const Home = () => {
  const userInfo = use(AuthContext);
  console.log(userInfo);
  return (
    <div>
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
