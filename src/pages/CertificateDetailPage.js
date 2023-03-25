import React from "react";
import GDriveItemViewer from "../components/GDriveItemViewer";
import { technical } from "../utils/data";

function CertificateDetailPage({ id }) {
  const cert = technical.get_certificate(id);

  if (!cert) {
    return <p>Certificate not found</p>;
  }

  return (
    <GDriveItemViewer
      gdrive_file_id={cert.gdrive_file_id}
      name={cert.name}
      date={cert.date}
    />
  );
}

export default CertificateDetailPage;
