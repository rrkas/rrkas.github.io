import React from "react";
import GDriveItemViewer from "../components/GDriveItemViewer";
import { poems } from "../utils/data";

function PoemDetailPage({ id }) {
  const poem = poems.get_poem(id);

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
