import React from "react";

function GDriveItemViewer({ name, date, gdrive_file_id }) {
  const url = `https://drive.google.com/file/d/${gdrive_file_id}/preview?usp=drivesdk`;
  return (
    <div className="w-100 h-100">
      <p className="h3 text-muted mb-0">{date}</p>
      <h1 className="mt-0">{name}</h1>
      <div className="pt-2 pb-2">
        <a className="item-url" href={url} rel="noreferrer" target="_blank">
          Click Here for more details
        </a>
      </div>
      <div
        className="w-100 h-100"
        style={{
          textAlign: "center",
        }}
      >
        <iframe
          title={gdrive_file_id}
          src={url}
          height={window.innerHeight * 0.75}
          width="100%"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default GDriveItemViewer;
