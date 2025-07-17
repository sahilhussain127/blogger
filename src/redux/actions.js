import axios from "axios";
import api from "../api/axios";

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch({ type: "LOADING_START", msg: "hi" });

    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1?name=sahil"
      ); // dummy API
      dispatch({ type: "SET_USER", payload: res.data });
    } catch (err) {
      console.error(err);
    } finally {
      dispatch({ type: "LOADING_END" });
    }
  };
};
