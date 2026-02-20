import LineSkeleton from "./LineSkeleton";
const ProductSkeleton = () => {

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <LineSkeleton
          height="16px"
          width="40px"
        />
        <LineSkeleton
          height="200px"
          width="200px"
        />
        <LineSkeleton
          height="30px"
          width="400px"
        />
        <LineSkeleton
          height="16px"
          width="500px"
        />
        <LineSkeleton
          height="16px"
          width="500px"
        />
        <LineSkeleton
          height="16px"
          width="500px"
        />
        <LineSkeleton
          height="16px"
          width="50px"
        />
        <LineSkeleton
          height="16px"
          width="100px"
        />
      </div>
    </>
  )
};

export default ProductSkeleton;