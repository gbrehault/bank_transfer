import LineSkeleton from './LineSkeleton';

export default function UserAccountsSkeleton({ count = 3 }) {
  return (
    <>
      <div className="rounded p-4 w-1/2 bg-white shadow-2xl flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold mb-4">
          <LineSkeleton height="20px" width="150px" />
        </h1>
        <ul className="w-full">
          {Array.from({ length: count }).map((_, index) => (
            <li key={index} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 w-1/2">
                <LineSkeleton height="20px" width="150px" />
                <LineSkeleton height="20px" width="100px" />
              </div>
              <LineSkeleton height="20px" width="120px" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
