import React, { useEffect, useState } from "react";
import { readString } from "react-papaparse";
import { Link } from "react-router-dom";
import { poems, URLS } from "../utils/data";
import { strToDate } from "../utils/format_utils";
import { urls } from "../utils/urls";

function PoemsPage() {
  const [state, setState] = useState({
    collections: null,
    short_poems: null,
  });

  useEffect(() => {
    // experiences
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
              setState((s) => ({ ...s, collections }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // experiences
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
              setState((s) => ({ ...s, short_poems }));
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

  return (
    <>
      <h1 className="mb-3">Poems</h1>

      {state.collections && (
        <>
          <h3>Collections ({state.collections.length})</h3>
          <div className="row">
            {state.collections
              .sort((a, b) => strToDate(b.date) - strToDate(a.date))
              .map((poem, idx) => (
                <div className="col-12 col-md-6 col-lg-6" key={idx}>
                  <Link
                    to={urls.poems.poemDetail(poems.encode_poem(poem))}
                    className="item-url poem-title"
                  >
                    <div className="item-box py-3">
                      <div>
                        <div className="poem-name">{poem.name}</div>
                        <div className="poem-date">{poem.date}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </>
      )}

      {state.short_poems && (
        <>
          <h3>Short Poems ({state.short_poems.length})</h3>
          <div className="row">
            {state.short_poems
              .sort((a, b) => strToDate(b.date) - strToDate(a.date))
              .map((poem, idx) => (
                <div className="col-12 col-md-6 col-lg-6" key={idx}>
                  <Link
                    to={urls.poems.poemDetail(poems.encode_poem(poem))}
                    className="item-url poem-title"
                  >
                    <div className="item-box py-3">
                      <div>
                        <div className="poem-name">{poem.name}</div>
                        <div className="poem-date">{poem.date}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default PoemsPage;
