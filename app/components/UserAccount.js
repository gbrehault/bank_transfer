export default function UserAccount({ account }) {
  return (
    <div className="rounded p-4 w-1/2 bg-white shadow-2xl flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4">
        {account.first_name} {account.last_name}
      </h1>
      <ul className="w-full">
        {idClients.map((idClient) => (
          <li key={idClient.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h5 className="font-bold">{idClient.name}</h5>
              <p>{idClient.balance} €</p>
            </div>
            <a
              href={`/accounts/${idClient.id}`}
              className=" bg-blue-500 text-white hover:bg-blue-600 rounded-4xl px-4 py-1"
            >
              View Details
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
