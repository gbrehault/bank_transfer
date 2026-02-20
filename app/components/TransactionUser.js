export default function TransactionUser({ accounts, client }) {
  return (
    <div className="rounded-2xl p-4 w-full max-w-md bg-white shadow-2xl flex items-center h-200 justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4">
        {client.first_name} {client.last_name}
      </h1>
      <h5 className="font-bold mb-2 text-4xl">Transactions</h5>
      <div className="overflow-scroll scrollbar-hid">
        <ul className="w-full">
          {accounts.map((account) => (
            <li key={account.id} className="p-4 flex w-auto items-center justify-between">
              <div className="flex flex-col">
                <h5 className="font-bold">{account.name}</h5>
                <p>{account.type}</p>
              </div>
              <p className="bg-blue-500 text-white rounded-4xl px-4 py-1">{account.balance} €</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
