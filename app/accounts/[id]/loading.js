import TransactionUserSkeleton from '@/app/components/TransactionUserSkeleton';
export default function Loading() {
  return (
    <>
      <div className="p-4 flex items-center justify-center flex-col min-h-screen">
        <TransactionUserSkeleton count={8} />
      </div>
    </>
  );
}
