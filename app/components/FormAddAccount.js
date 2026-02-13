"use client";
export default function FormAddAccount({ clientId }) {
    async function addAccount(e) {
        e.preventDefault();

        const accountName = e.target.accountName.value;
        const type = e.target.type.value;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/accounts/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: accountName,
                    type: type,
                    client_id: clientId
                }),
            });

            const account = await res.json();
            console.log('Account created:', account);

            if (res.ok) {
                alert('Compte ajouté avec succès !');
                e.target.reset();
                window.location.reload();
            } else {
                alert('Erreur lors de l\'ajout du compte');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Erreur de connexion');
        }
    }

    return (
        <form onSubmit={addAccount} className="w-auto flex flex-col items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 justify-center">
                <h4 className="font-bold text-2xl">Add Account</h4>
                <div className="flex items-center gap-2 justify-center" >
                    <input
                        name="accountName"
                        type="text"
                        placeholder="Name account..."
                        required
                        className="mt-4 p-2 w-1/2 border border-gray-300 rounded"
                    />
                    <select name="type" required className="mt-4 p-2 w-1/2 border border-gray-300 rounded">
                        <option value="">Sélectionner un type...</option>
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
        </form>
    );
}