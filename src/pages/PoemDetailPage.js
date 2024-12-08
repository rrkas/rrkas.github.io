import React from "react";
import GDriveItemViewer from "../components/GDriveItemViewer";
import { usePoems } from "../hooks/usePoems";
import { poemsEncoder } from "../utils/data";

function PoemDetailPage({ id }) {
  const poems = usePoems();

  // console.log(poems);
  // console.log(id);

  if (!(poems.poem_collections || poems.poem_short || poems.songs)) {
    return <p>Loading...</p>;
  }

  const poem = poemsEncoder.get_poem(
    [
      ...(poems.poem_collections || []),
      ...(poems.poem_short || []),
      ...(poems.songs || []),
    ],
    id
  );
  if (!poem) {
    return <p>Poem not found</p>;
  }

  return (
    <GDriveItemViewer
      gdrive_file_id={poem.gdrive_file_id}
      name={poem.name}
      date={poem.date}
    />
  );
}

export default PoemDetailPage;
