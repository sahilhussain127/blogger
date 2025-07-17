import React from "react";

const withAuth = (WrappedComponent) => {
  const isAuthenticated = true;
  return function (props) {
    const user = { name: "sahil" };
    if (isAuthenticated) {
      return <WrappedComponent {...props} user={user} />;
    } else {
      return <p>Please login</p>;
    }
  };
};

export default withAuth;
