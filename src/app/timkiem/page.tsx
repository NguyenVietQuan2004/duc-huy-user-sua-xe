import SearchResults from "./article-item";

type Params = Promise<{ query?: string }>;

export default async function SearchPage({ searchParams }: { searchParams: Params }) {
  const { query } = await searchParams;
  const keyword = query?.trim() || "";

  return (
    <div className="p-4 max-w-[1140px] mx-auto">
      <SearchResults keyword={keyword} />
    </div>
  );
}
