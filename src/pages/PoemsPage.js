import React from "react";
import { poems } from "../utils/data";
import { urls } from "../utils/urls";

function PoemsPage() {
  return (
    <>
      <h1>Poems</h1>

      <h3>Collections ({poems.collections.length})</h3>
      <div className="row">
        {poems.collections.map((poem, idx) => (
          <div className="col-12 col-md-6 col-lg-6" key={idx}>
            <a
              href={urls.poems.poemDetail(poems.encode_poem(poem))}
              className="item-url poem-title"
            >
              <div className="item-box py-3">
                <div>
                  <div className="poem-name">{poem.name}</div>
                  <div className="poem-date">{poem.date}</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <h3>Short Poems ({poems.short_poems.length})</h3>
      <div className="row">
        {poems.short_poems.map((poem, idx) => (
          <div className="col-12 col-md-6 col-lg-6" key={idx}>
            <a
              href={urls.poems.poemDetail(poems.encode_poem(poem))}
              className="item-url poem-title"
            >
              <div className="item-box py-3">
                <div>
                  <div className="poem-name">{poem.name}</div>
                  <div className="poem-date">{poem.date}</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default PoemsPage;
