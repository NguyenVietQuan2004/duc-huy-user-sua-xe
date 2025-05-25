import SearchDetails from "./search-details";

async function Search({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <SearchDetails id={id} />{" "}
    </div>
  );
}

export default Search;
