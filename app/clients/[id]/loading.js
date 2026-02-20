import FormAddAccount from '@/app/components/FormAddAccount';
import FormAddSkeleton from '@/app/components/FormAddSkeleton';
import UserAccountsSkeleton from '@/app/components/UserAccountsSkeleton';
export default function Loading() {
  return (
    <>
      <div className="p-4 flex items-center justify-center min-h-screen gap-4">
        <UserAccountsSkeleton count={5} />
        <div className="rounded p-4 w-1/2 bg-white shadow-2xl flex items-center justify-center flex-col">
          <FormAddSkeleton />
        </div>
      </div>
    </>
  );
}
