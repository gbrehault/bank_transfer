import SearchForm from "./components/SearchForm";
import ResultSearchForm from "./components/ResultSearchForm";

export default function Home({ searchParams }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Super Bank</h1>
        <p className="text-3xl font-medium">Welcome to the Super Bank application!</p>
        <SearchForm />
        <ResultSearchForm searchParams={searchParams} />
      </main>
    </section>
  );
}
