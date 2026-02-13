export default async function AccountSelectOptions({ clientId, accountId }) {
    const { id } = await params;
    const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/clients/' + id);
    const client = await res.json();
    console.log(client);

    return (
        <>
            <option value="">Sélectionner le compte destination...</option>
            {accounts
                .filter(acc => acc.id !== accountId)
                .map(account => (
                    <option key={account.id} value={account.id}>
                        {account.name} - {account.balance}€ (ID: {account.id})
                    </option>
                ))}
        </>
    );
}
