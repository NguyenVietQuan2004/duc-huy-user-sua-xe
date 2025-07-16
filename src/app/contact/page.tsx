// import ContactClient from "./contact-client";

// function Contact() {
//   return (
//     <div>
//       <ContactClient />
//     </div>
//   );
// }

// export default Contact;
import ContactClient from "./contact-client";
import { posterApi } from "@/api-request/posterAPI";
import { homeApi } from "@/api-request/homeAPI";

export default async function Contact() {
  // Load API ở server trước
  const [poster, addresses] = await Promise.all([posterApi.getPoster(), homeApi.getAddresses()]);
  return <ContactClient img={poster.images_contact} address={addresses} />;
}
