import SearchDetails from "./search-details";
type Params = Promise<{ id: string }>;

async function Search({ params }: { params: Params }) {
  const { id } = await params;

  return (
    <div>
      <SearchDetails id={id} />{" "}
    </div>
  );
}

export default Search;
