import AdviceDetail from "./sale-detail";
type Params = Promise<{ id: string }>;

async function Search({ params }: { params: Params }) {
  const { id } = await params;

  return (
    <div>
      <AdviceDetail id={id} />{" "}
    </div>
  );
}

export default Search;
