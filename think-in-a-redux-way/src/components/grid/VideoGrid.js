import VideoGridItem from "./VideoGridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "./../../features/videos/videosSlice";
import { useEffect } from "react";
const VideoGrid = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  console.log(videos);
  let content;
  if (isLoading) content = <div className="col-span-12">Loading....</div>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && videos?.length === 0)
    content = <div className="col-span-12">Video not Found</div>;
  if (!isError && !isLoading && videos?.length > 0)
    content = videos.map((item) => (
      <VideoGridItem key={item.id}></VideoGridItem>
    ));
  return (
    <div>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}
          </div>
        </section>
      </section>
    </div>
  );
};

export default VideoGrid;
