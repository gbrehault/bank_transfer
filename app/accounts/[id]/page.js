import TransactionUser from '@/app/components/TransactionUser';
import TransactionUserSkeleton from '@/app/components/TransactionUserSkeleton';
import { Suspense } from 'react';

export default async function accounts({ params }) {
  const { id } = await params;
  const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/clients/' + id);
  const client = await res.json();
  console.log(client);
  if (!client) {
    // todo: Handle error
    return null;
  }
  const clientId = id;
  const response = await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + '/api/accounts/?accountId=' + clientId,
  );
  const accounts = await response.json();
  console.log(accounts);
  const idClients = accounts;

  return (
    <>
      <div className="p-4 flex items-center justify-center flex-col min-h-screen">
        <Suspense fallback={<TransactionUserSkeleton count={accounts.length} />}>
          <TransactionUser accounts={accounts} client={client} />
        </Suspense>
      </div>
    </>
  );
}
