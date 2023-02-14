import { json, useLoaderData } from "react-router-dom";
import { apiIntro } from "../utils/api";

function IntroPage() {
  const data = useLoaderData();
  return (
    <div
      className="p-5"
      dangerouslySetInnerHTML={{ __html: data }}
    ></div>
  );
}

export default IntroPage;

export async function introLoader() {
  try {
    return apiIntro();
  } catch (e) {
    throw json({ errors: e.message });
  }
}
