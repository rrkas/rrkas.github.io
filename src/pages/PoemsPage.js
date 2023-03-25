import React from "react";
import { Link } from "react-router-dom";
import { poems } from "../utils/data";
import { strToDate } from "../utils/format_utils";
import { urls } from "../utils/urls";

function PoemsPage() {
  const sortedCollections = poems.collections.sort((a, b) => strToDate(b.date) - strToDate(a.date));
  const sortedShortPoems = poems.short_poems.sort((a, b) => strToDate(b.date) - strToDate(a.date));

  return (
    <div className="p-2 p-lg-3">
      <h1>Poems</h1>

      <h3>Collections ({poems.collections.length})</h3>
      <div className="row">
        {sortedCollections.map((poem, idx) => (
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

      <h3>Short Poems ({poems.short_poems.length})</h3>
      <div className="row">
        {sortedShortPoems.map((poem, idx) => (
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
    </div>
  );
}

export default PoemsPage;
