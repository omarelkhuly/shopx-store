import Skeleton from "../../../ui/Skeleton";

const HomeSkeleton = () => {
  return (
    <div className="home-skeleton container">

      <Skeleton height={400} />

      <div className="grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} height={200} />
        ))}
      </div>

    </div>
  );
};

export default HomeSkeleton;