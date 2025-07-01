import Like from "../../assets/like.svg";
import UnLike from "../../assets/unlike.svg";

const LikeUnlike = () => {
  return (
    <div>
      <div class="flex gap-10 w-48">
        <div class="flex gap-1">
          <div class="shrink-0">
            <img class="w-5 block" src={Like} alt="Like" />
          </div>
          <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
        </div>
        <div class="flex gap-1">
          <div class="shrink-0">
            <img class="w-5 block" src={UnLike} alt="Unlike" />
          </div>
          <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
        </div>
      </div>
    </div>
  );
};

export default LikeUnlike;
