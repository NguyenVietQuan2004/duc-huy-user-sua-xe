import TuVanDetail from "./tuvan-detail";
type Params = Promise<{ id: string }>;

async function Search({ params }: { params: Params }) {
  const { id } = await params;

  return (
    <div>
      <TuVanDetail id={id} />{" "}
    </div>
  );
}

export default Search;
