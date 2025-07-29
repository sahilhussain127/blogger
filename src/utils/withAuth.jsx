/* eslint-disable no-unused-vars */
// withAuth.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { selfCall } from "../redux/actions/userActions";
import { setUserData } from "../redux/state/userSlice";

function withAuth(WrappedComponent) {
  return (props) => {
    const dispatch = useDispatch();
    const baseCalls = async () => {
      dispatch(
        selfCall(
          (user) => {
            dispatch(setUserData(user));
          },
          () => {
            dispatch(setUserData({}));
            // navigate("/login");
          }
        )
      );
    };

    useEffect(() => {
      baseCalls();
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
