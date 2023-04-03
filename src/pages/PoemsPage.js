import React from "react";
import { Link } from "react-router-dom";
import { usePoems } from "../hooks/usePoems";
import { poemsEncoder } from "../utils/data";
import { strToDate } from "../utils/format_utils";
import { urls } from "../utils/urls";

function PoemsPage() {
  const poems = usePoems();

  return (
    <>
      <h1 className="mb-3">Poems & Songs</h1>

      {poems.songs && (
        <>
          <h3>Songs ({poems.songs.length})</h3>
          <div className="row">
            {poems.songs
              .sort((a, b) => strToDate(b.date) - strToDate(a.date))
              .map((poem, idx) => (
                <div className="col-12 col-md-6 col-lg-6" key={idx}>
                  <Link
                    to={urls.poems.poemDetail(poemsEncoder.encode_poem(poem))}
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

      {poems.poem_collections && (
        <>
          <h3>Poem Collections ({poems.poem_collections.length})</h3>
          <div className="row">
            {poems.poem_collections
              .sort((a, b) => strToDate(b.date) - strToDate(a.date))
              .map((poem, idx) => (
                <div className="col-12 col-md-6 col-lg-6" key={idx}>
                  <Link
                    to={urls.poems.poemDetail(poemsEncoder.encode_poem(poem))}
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

      {poems.poem_short && (
        <>
          <h3>Short Poems ({poems.poem_short.length})</h3>
          <div className="row">
            {poems.poem_short
              .sort((a, b) => strToDate(b.date) - strToDate(a.date))
              .map((poem, idx) => (
                <div className="col-12 col-md-6 col-lg-6" key={idx}>
                  <Link
                    to={urls.poems.poemDetail(poemsEncoder.encode_poem(poem))}
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
