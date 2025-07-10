import RelatedVideoListItem from "./RelatedVideoListItem";

const RelatedVideoList = ({ tags }) => {
  console.log(tags);
  return (
    <div>
      <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* <!-- single related video --> */}
        <RelatedVideoListItem></RelatedVideoListItem>
      </div>
    </div>
  );
};

export default RelatedVideoList;
