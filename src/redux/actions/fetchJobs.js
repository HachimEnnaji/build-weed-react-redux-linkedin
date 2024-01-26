import { setListJobs } from "../reducers/jobSlice";

export const fetchJobs = (category, query) => async (dispatch) => {
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?${category}=${query}`);
    if (response.ok) {
      const data = await response.json();
      dispatch(setListJobs(data));
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
