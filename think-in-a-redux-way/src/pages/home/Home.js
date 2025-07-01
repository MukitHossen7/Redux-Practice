import Footer from "../../components/footer/Footer";
import VideoGrid from "../../components/grid/VideoGrid";
import Navbar from "../../components/navbar/Navbar";
import Pagination from "../../components/pagination/Pagination";
import Tags from "../../components/tags/Tags";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Tags></Tags>
      <VideoGrid></VideoGrid>
      <Pagination></Pagination>
      <Footer></Footer>
    </div>
  );
};

export default Home;
