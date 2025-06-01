import ServiceClient from "./service-client";
type Params = Promise<{ serviceName: string }>;

export default async function Service({ params }: { params: Params }) {
  const { serviceName } = await params;
  // goi api lay dich vu theo ten
  return (
    <div>
      <ServiceClient serviceId={serviceName} />
    </div>
  );
}
