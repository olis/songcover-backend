import fetch from "node-fetch";
import Song from "../domain/song";

const Wikipedia = {
  getSnippet: async (song: Song) => {
    const snippet = await fetchSnippetFromWikipedia(song.title);

    return snippet;
  }
};

async function fetchSnippetFromWikipedia(title: string): Promise<string> {
  let url = "https://en.wikipedia.org/w/api.php";
  let snippet = "";

  const params = {
    action: "query",
    list: "search",
    srsearch: title,
    format: "json"
  };

  url = url + "?origin=*";
  Object.entries(params).forEach(([key, value]) => {
    url += "&" + key + "=" + value;
  });

  console.log(url);

  const response = await fetch(url);
  const json = await response.json();

  snippet = json.query.search[0].snippet;

  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(response => {
  //       console.log(response);
  //       // snippet = response.query.search[0].title.snippet;
  //       snippet = response;
  //       if (response.query.search[0].title === title) {
  //         console.log(`${title} found`);
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  return snippet;
}

export default Wikipedia;
