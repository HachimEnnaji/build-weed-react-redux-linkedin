import { setProfilesResult, setSearchResult } from "../reducers/userSlice";

export const fetchSearch = (query) => async (dispatch) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMjI1NTYwMGJlMTAwMTgzYTg2NzgiLCJpYXQiOjE3MDU5MTA4NjksImV4cCI6MTcwNzEyMDQ2OX0.nXjdN_r7Yf2E9CyKUJ5vwrZKGAmhi-m_84FqYSNb5eY";
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + query, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (query === "me") {
        dispatch(setSearchResult(data));
      } else {
        dispatch(setProfilesResult(data));
      }
    } else {
      if (query === "me") {
        dispatch(setSearchResult(null));
        throw new Error("Errore nel recupero del profilo personale");
      } else {
        dispatch(setProfilesResult([]));
        throw new Error("Errore nel recupero dei profili");
      }
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
