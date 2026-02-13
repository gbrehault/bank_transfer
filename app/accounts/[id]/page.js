export default async function accounts({ params }) {
    const { id } = await params;
    const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/clients/' + id);
    const client = await res.json();
    console.log(client);
    if (!client) {
        // todo: Handle error
        return null;
    }
    const clientId = id
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/accounts/?accountId=' + clientId);
    const accounts = await response.json();
    console.log(accounts);
    const idClients = accounts;

    return (
        <div className="p-4 flex items-center justify-center flex-col min-h-screen">
            <div className="rounded-2xl p-4 w-full max-w-md bg-white shadow-2xl flex items-center justify-center flex-col">
                <h1 className="text-3xl font-bold mb-4">{client.first_name} {client.last_name}</h1>
                <h5 className="font-bold mb-2 text-4xl">Transactions</h5>
                <ul className="w-full">
                    {idClients.map(idClient => (
                        < li key={idClient.id} className="p-4 flex w-auto items-center justify-between" >
                            <div className="flex flex-col">
                                <h5 className="font-bold">{idClient.name}</h5>
                                <p>{idClient.type}</p>
                            </div>
                            <p className="bg-blue-500 text-white rounded-4xl px-4 py-1">{idClient.balance} €</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}