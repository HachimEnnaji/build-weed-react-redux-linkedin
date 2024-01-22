import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../redux/actions/fecthData"; // Correggi l'import
import MyProfile from "./MyProfile";

function MyMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleFetch = async () => {
      await dispatch(fetchSearch());
    };

    handleFetch();
  }, [dispatch]);
  const data = useSelector((state) => state.user.data);

  //   console.log(data);

  return (
    <>
      <MyProfile />
    </>
  );
}

export default MyMain;
