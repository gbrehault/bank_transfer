import LineSkeleton from './LineSkeleton';

export default function FormAddSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full gap-4">
      {/* FormAddAccount Skeleton */}
      <div className="w-auto flex flex-col items-center justify-center p-4 rounded">
        <div className="flex flex-col items-center gap-2 justify-center">
          <LineSkeleton height="20px" width="180px" />
          <div className="flex items-center gap-2 justify-center w-full">
            <LineSkeleton height="40px" width="150px" />
            <LineSkeleton height="40px" width="150px" />
          </div>
          <LineSkeleton height="40px" width="300px" />
        </div>
      </div>

      {/* FormAddTransaction Skeleton */}
      <div className="flex flex-col items-center justify-center p-4 w-full max-w-md">
        <div className="flex flex-col items-center gap-2 justify-center w-full max-w-md">
          <LineSkeleton height="20px" width="150px" />
          <LineSkeleton height="40px" width="250px" />
          <LineSkeleton height="20px" width="150px" />
          <LineSkeleton height="40px" width="250px" />
          <LineSkeleton height="40px" width="250px" />
          <LineSkeleton height="40px" width="250px" />
          <LineSkeleton height="40px" width="250px" />
        </div>
      </div>
    </div>
  );
}
