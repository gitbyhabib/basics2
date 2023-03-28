import React from "react";

const Userhoc = (WrappedComponent, WrappedComponent2, arg1) => {
  return (props) => (
    <div>
      {arg1}
      <WrappedComponent {...props} />
      <WrappedComponent2 {...props} />
    </div>
  );
};

export default Userhoc;
