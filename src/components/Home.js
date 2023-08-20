import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../Firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    console.log("hello");

    const unsubscribe = onSnapshot(collection(db, "movies"), (snapshot) => {
      const updatedRecommends = [];
      const updatedNewDisneys = [];
      const updatedOriginals = [];
      const updatedTrending = [];

      snapshot.docs.forEach((doc) => {
        const movieData = { id: doc.id, ...doc.data() };

        switch (movieData.type) {
          case "recommend":
            updatedRecommends.push(movieData);
            break;
          case "new":
            updatedNewDisneys.push(movieData);
            break;
          case "original":
            updatedOriginals.push(movieData);
            break;
          case "trending":
            updatedTrending.push(movieData);
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: updatedRecommends,
          newDisney: updatedNewDisneys,
          original: updatedOriginals,
          trending: updatedTrending,
        })
      );
    });

    // Désinscription lorsque le composant est démonté
    return () => unsubscribe();
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;