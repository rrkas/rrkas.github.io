import React from "react";

function GDriveItemViewer({ name, gdrive_file_id }) {
  const url = `https://drive.google.com/file/d/${gdrive_file_id}/preview?usp=drivesdk`;
  return (
    <div className="w-100 h-100">
      <h1>{name}</h1>
      <div className="pt-2 pb-2">
        <a className="item-url" href={url} target="_blank">
          Click Here for more details
        </a>
      </div>
      <div
        className="w-100 h-100"
        style={{
          textAlign: "center",
        }}
      >
        <iframe src={url} height={window.innerHeight*0.8} width="100%" allowFullScreen />
      </div>
    </div>
  );
}

export default GDriveItemViewer;
