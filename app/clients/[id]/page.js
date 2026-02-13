import FormAddUser from "../../components/FormAddAccount";
import FormAddTransaction from "../../components/FormAddTransaction";

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
        <div className="p-4 flex items-center justify-center min-h-screen gap-4">
            <div className="rounded p-4 w-1/2 bg-white shadow-2xl flex items-center justify-center flex-col">
                <h1 className="text-3xl font-bold mb-4">{client.first_name} {client.last_name}</h1>
                <ul className="w-full">
                    {idClients.map(idClient => (
                        < li key={idClient.id} className="p-4 flex items-center justify-between" >
                            <div className="flex items-center gap-2">
                                <h5 className="font-bold">{idClient.name}</h5>
                                <p>{idClient.balance} €</p>
                            </div>
                            <a href={`/accounts/${idClient.id}`} className=" bg-blue-500 text-white hover:bg-blue-600 rounded-4xl px-4 py-1">
                                View Details
                            </a>

                        </li>
                    ))}
                </ul>
            </div>
            <div className="rounded p-4 w-1/2 bg-white shadow-2xl flex items-center justify-center flex-col">
                <FormAddUser clientId={clientId} />
                <FormAddTransaction clientId={clientId} accounts={accounts} />
            </div>
        </div >
    );
}