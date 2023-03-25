import React from "react";
import { useParams } from "react-router-dom";
import GDriveItemViewer from "../components/GDriveItemViewer";
import { poems } from "../utils/data";

function PoemDetailPage() {
  const { id } = useParams();

  const poem = poems.get_poem(id);

  if (!poem) {
    return <p>Poem not found</p>;
  }

  return (
    <div className="w-100 h-100">
      <GDriveItemViewer gdrive_file_id={poem.gdrive_file_id} name={poem.name} />
    </div>
  );
}

export default PoemDetailPage;
