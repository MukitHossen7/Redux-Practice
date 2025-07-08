import VideoGrid from "../../components/grid/VideoGrid";
import Pagination from "../../components/pagination/Pagination";
import Tags from "../../components/tags/Tags";

const Home = () => {
  return (
    <div>
      <Tags></Tags>
      <VideoGrid></VideoGrid>
      <Pagination></Pagination>
    </div>
  );
};

export default Home;
