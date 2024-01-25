import { setArticles } from "../reducers/articleSlice";

export const fetchArticlesdata = () => async (dispatch) => {
  try {
    const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=5");
    if (response.ok) {
      const data = await response.json();
      dispatch(setArticles(data));
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
