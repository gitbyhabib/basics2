import React from "react";

import Userhoc from "../hoc/Userhoc";

const User = (props) => {
  console.log(props);
  return <div>User</div>;
};

const User2 = (props) => {
  console.log(props);
  return <div>User2</div>;
};

export default Userhoc(User, User2, "Hello I am");
