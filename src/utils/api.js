const API_BASE_PATH =
  "https://raw.githubusercontent.com/rrkas/MyWebsiteData/main/data";

export async function apiIntro() {
  const response = await fetch(`${API_BASE_PATH}/intro.html`);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const text = await response.text();
  //   console.log(text);
  return text;
}
