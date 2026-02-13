"use client";

export default function FormAddTransaction({ clientId, accounts }) {
    async function addTransaction(e) {
        e.preventDefault();

        const transactionType = e.target.transactionType.value;
        const amount = parseFloat(e.target.amount.value);
        const description = e.target.description?.value || '';
        const sourceAccountId = e.target.sourceAccountId?.value;

        try {
            let endpoint = '';
            let body = {};

            if (transactionType === 'deposit') {
                if (!sourceAccountId) {
                    alert('Veuillez sélectionner un compte');
                    return;
                }
                endpoint = '/api/transactions/deposit';
                body = {
                    account_id: sourceAccountId,
                    amount,
                    description
                };
            } else if (transactionType === 'withdraw') {
                if (!sourceAccountId) {
                    alert('Veuillez sélectionner un compte');
                    return;
                }
                endpoint = '/api/transactions/withdraw';
                body = {
                    account_id: sourceAccountId,
                    amount,
                    description
                };
            } else if (transactionType === 'transfer') {
                const destinationAccountId = e.target.destinationAccountId?.value;
                if (!sourceAccountId || !destinationAccountId) {
                    alert('Veuillez sélectionner les comptes source et destination');
                    return;
                }
                if (sourceAccountId === destinationAccountId) {
                    alert('Les comptes source et destination doivent être différents');
                    return;
                }
                endpoint = '/api/transactions/transfer';
                body = {
                    source_account_id: sourceAccountId,
                    account_id: destinationAccountId,
                    amount,
                    description
                };
            }

            const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const result = await res.json();
            console.log('Transaction result:', result);

            if (res.ok) {
                alert('Transaction effectuée avec succès !');
                e.target.reset();
                window.location.reload();
            } else {
                alert(`Erreur: ${result.error || 'Erreur lors de la transaction'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Erreur de connexion');
        }
    }

    const handleTypeChange = (e) => {
        const transferFields = document.getElementById('transferFields');
        const accountSelect = document.getElementById('accountSelectLabel');

        if (e.target.value === 'transfer') {
            transferFields.style.display = 'block';
            accountSelect.textContent = 'Compte source:';
        } else if (e.target.value === 'deposit') {
            transferFields.style.display = 'none';
            accountSelect.textContent = 'Compte de dépôt:';
        } else if (e.target.value === 'withdraw') {
            transferFields.style.display = 'none';
            accountSelect.textContent = 'Compte de retrait:';
        } else {
            transferFields.style.display = 'none';
            accountSelect.textContent = 'Sélectionner un compte:';
        }
    };

    return (
        <form onSubmit={addTransaction} className="flex flex-col items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 justify-center w-full max-w-md">
                <h4 className="font-bold text-3xl mb-4">Add Transaction</h4>

                <select
                    name="transactionType"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleTypeChange}
                >
                    <option value="">Type de transaction...</option>
                    <option value="deposit">Dépôt</option>
                    <option value="withdraw">Retrait</option>
                    <option value="transfer">Transfert</option>
                </select>

                <div className="w-full">
                    <label id="accountSelectLabel" className="block mb-2 text-sm font-medium">Sélectionner un compte:</label>
                    <select
                        name="sourceAccountId"
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Choisir un compte...</option>
                        {accounts?.map(account => (
                            <option key={account.id} value={account.id}>
                                {account.name} - {account.balance}€
                            </option>
                        ))}
                    </select>
                </div>

                <input
                    name="amount"
                    type="number"
                    step="0.01"
                    min="0.01"
                    placeholder="Montant..."
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />

                <div id="transferFields" style={{ display: 'none' }} className="w-full">
                    <label className="block mb-2 text-sm font-medium">Compte destination:</label>
                    <select
                        name="destinationAccountId"
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Sélectionner le compte destination...</option>
                        {accounts?.map(account => (
                            <option key={account.id} value={account.id}>
                                {account.name} - {account.balance}€
                            </option>
                        ))}
                    </select>
                </div>

                <textarea
                    name="description"
                    placeholder="Description (optionnel)..."
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="3"
                />

                <button
                    type="submit"
                    className="w-full mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Effectuer la transaction
                </button>
            </div>
        </form>
    );
}