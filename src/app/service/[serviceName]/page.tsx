import ServiceClient from "./service-client";
type Params = Promise<{ serviceName: string }>;

export default async function Service({ params }: { params: Params }) {
  const { serviceName } = await params;
  return (
    <div>
      <ServiceClient serviceId={serviceName} />
    </div>
  );
}
