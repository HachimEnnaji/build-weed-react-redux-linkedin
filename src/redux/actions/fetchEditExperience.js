import { refreshExperience, setMyExperience } from "../reducers/userSlice";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMjI1NTYwMGJlMTAwMTgzYTg2NzgiLCJpYXQiOjE3MDU5MTA4NjksImV4cCI6MTcwNzEyMDQ2OX0.nXjdN_r7Yf2E9CyKUJ5vwrZKGAmhi-m_84FqYSNb5eY";

export const fetchExpAction = (idProfile) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setMyExperience(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH POST EXPERIENCE */
export const fetchPostExpAction = (idProfile, ExperienceToPost) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ExperienceToPost),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(refreshExperience());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH PUT EXPERIENCE */
export const fetchPutExpAction = (idProfile, idExperience, updatedExperience) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences/" + idExperience,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedExperience),
      }
    );

    if (response.ok) {
      const data = await response.json();
      dispatch(refreshExperience());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH DELETE EXPERIENCE */
export const fetchDeleteExpAction = (idProfile, idExperience) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences/" + idExperience,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      /*       const data = await response.json(); */
      dispatch(refreshExperience());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
