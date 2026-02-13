import { wait, error } from '@/utils/index';

export default async function client({ params }) {
    const { id } = await params;
    const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/clients/' + id);
    const client = await res.json();
    console.log(client);
    if (!client) {
        // todo: Handle error
        return null;
    }
    const clientId = id
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/accounts/?clientId=' + clientId);
    const accounts = await response.json();
    console.log(accounts);
    const idClients = accounts;

    return (
        <div className="p-4 flex items-center justify-center flex-col h-screen">
            <div className="border rounded p-4 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">{client.first_name} {client.last_name}</h1>

                <p>Client ID: {client.id}</p>
                <ul>
                    {idClients.map(idClient => (
                        < li key={idClient.id} className="p-4" >
                            <h5 className="font-bold">Bank Name: {idClient.name}</h5>
                            <p>Balance: {idClient.balance}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}