import LineSkeleton from './LineSkeleton';

export default function TransactionUserSkeleton({ count = 3 }) {
  return (
    <>
      <div className="rounded-2xl p-4 w-full max-w-md bg-white shadow-2xl flex items-center justify-center flex-col">
        <LineSkeleton height="32px" width="220px" />
        <LineSkeleton height="28px" width="180px" />
        <ul className="w-full">
          {Array.from({ length: count }).map((_, i) => (
            <li key={i} className="p-4 flex w-auto items-center justify-between">
              <div className="flex flex-col">
                <LineSkeleton height="20px" width="120px" />
                <LineSkeleton height="16px" width="80px" />
              </div>
              <LineSkeleton height="32px" width="90px" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
