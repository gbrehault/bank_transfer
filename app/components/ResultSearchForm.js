import Link from 'next/link';
export default async function ResultSearchForm({ searchParams }) {
    const params = await searchParams || '';

    if (!params) {
        return null;
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/clients?search=${encodeURIComponent(params.search)}`,
    );
    const clients = await res.json();

    return (
        <ul className="flex flex-col items-start justify-center p-4 gap-2">
            {clients.length > 0 ? (
                clients.map(client => (
                    <Link href={`/clients/${client.id}`} key={client.id}>
                        <li className="border-b border-gray-300 w-full">
                            {client.first_name} {client.last_name}
                        </li>
                    </Link>
                ))
            ) : (
                <li className="text-gray-500">Aucun client trouvé</li>
            )}
        </ul>
    );
}