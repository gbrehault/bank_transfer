'use client';
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search') || '';

    const onSubmit = (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }

        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <form className="flex flex-col items-center justify-center p-4" onSubmit={onSubmit}>
            <div className="flex items-center gap-2 justify-center">
                <input
                    name="search"
                    type="text"
                    placeholder="Search..."
                    defaultValue={searchTerm}
                    className="mt-4 p-2 w-100 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </div>
        </form>
    );
}