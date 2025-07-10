import { useParams } from "react-router";
import RelatedVideoList from "../list/RelatedVideoList";
import Player from "../player/Player";
import VideoDescription from "../videoDescription/VideoDescription";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSingleVideo } from "../../features/singleVideo/singleVideoSlice";

const Content = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleVideo(videoId));
  }, [dispatch, videoId]);

  const { video, isLoading, isError, error } = useSelector(
    (state) => state.singleVideo
  );
  const { link, title, tags } = video || {};

  let content;
  if (isLoading) content = <div className="col-span-12">Loading....</div>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && !video?.id)
    content = <div className="col-span-12">Video not Found</div>;
  if (!isError && !isLoading && video?.id)
    content = (
      <div class="grid grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
          {/* <!-- video player --> */}

          <Player link={link} title={title}></Player>
          {/* <!-- video description --> */}
          <VideoDescription video={video}></VideoDescription>
        </div>

        {/* <!-- related videos --> */}
        <RelatedVideoList tags={tags}></RelatedVideoList>
      </div>
    );
  return (
    <div>
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
      </section>
    </div>
  );
};

export default Content;
