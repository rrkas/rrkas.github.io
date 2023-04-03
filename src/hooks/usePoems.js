import { useEffect, useState } from "react";
import { readString } from "react-papaparse";
import { URLS } from "../utils/data";

export function usePoems() {
  const [state, setState] = useState({
    songs: null,
    poem_collections: null,
    poem_short: null,
  });

  useEffect(() => {
    // songs
    fetch(URLS.POEM.SONGS)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            const data = csv_data.data;
            try {
              const songs = [];
              for (var ri = 0; ri < data.length; ri++) {
                if (ri === 0) {
                  continue;
                }

                songs.push({
                  date: data[ri][0],
                  name: data[ri][1],
                  gdrive_file_id: data[ri][2],
                });
              }
              setState((s) => ({ ...s, songs }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // collections
    fetch(URLS.POEM.COLLECTIONS)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            const data = csv_data.data;
            try {
              const collections = [];
              for (var ri = 0; ri < data.length; ri++) {
                if (ri === 0) {
                  continue;
                }

                collections.push({
                  date: data[ri][0],
                  name: data[ri][1],
                  gdrive_file_id: data[ri][2],
                });
              }
              setState((s) => ({ ...s, poem_collections: collections }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // short poems
    fetch(URLS.POEM.SHORT_POEMS)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            const data = csv_data.data;
            try {
              const short_poems = [];
              for (var ri = 0; ri < data.length; ri++) {
                if (ri === 0) {
                  continue;
                }

                short_poems.push({
                  date: data[ri][0],
                  name: data[ri][1],
                  gdrive_file_id: data[ri][2],
                });
              }
              setState((s) => ({ ...s, poem_short: short_poems }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return state
}
