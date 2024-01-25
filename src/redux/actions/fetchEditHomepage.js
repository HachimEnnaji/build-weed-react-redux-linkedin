import { setAllPost, refreshHomePost } from "../reducers/homePageSlice";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMjI1NTYwMGJlMTAwMTgzYTg2NzgiLCJpYXQiOjE3MDU5MTA4NjksImV4cCI6MTcwNzEyMDQ2OX0.nXjdN_r7Yf2E9CyKUJ5vwrZKGAmhi-m_84FqYSNb5eY";

export const fetchHomeAction = () => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setAllPost(data.reverse()));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH POST HOMEPAGE */
export const fetchPostHomeAction = (myPostToPost) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myPostToPost),
    });

    if (response.ok) {
      /* const data = await response.json(); */
      dispatch(refreshHomePost());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH DELETE HOMEPAGE */
export const fetchDeleteHomeAction = (idPost) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + idPost, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      /*       const data = await response.json(); */
      dispatch(refreshHomePost());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH PUT HOMEPAGE */
export const fetchPutHomeAction = (idPost, myPostToUpdate) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + idPost, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myPostToUpdate),
    });

    if (response.ok) {
      // const data = await response.json();
      dispatch(refreshHomePost());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
