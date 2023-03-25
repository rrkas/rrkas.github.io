import React from "react";
import { technical } from "../utils/data";
import { strToDate } from "../utils/format_utils";
import { urls } from "../utils/urls";

function TechnicalPage() {
  const sortedExperiences = technical.experiences.sort(
    (a, b) => strToDate(b.start_date) - strToDate(a.start_date)
  );

  const sortedCertificates = technical.certificates.sort(
    (a, b) => strToDate(b.date) - strToDate(a.date)
  );
  return (
    <>
      <h1 className="mb-2">Technical</h1>

      <h3>Experience ({technical.experiences.length})</h3>
      <div className="row">
        {sortedExperiences.map((exper, idx) => (
          <div className="col-12 col-md-6" key={idx}>
            <div className="item-box">
              <div style={{ color: "#7d7d7d", fontWeight: "700" }}>
                {exper.start_date} - {exper.end_date ? exper.end_date : "Now"}
              </div>
              <div
                className="h3"
                style={{ color: "indigo", fontWeight: "700" }}
              >
                {exper.name}
              </div>
              <div style={{ color: "black", fontWeight: "600" }}>
                {exper.place}
              </div>
              <div>
                <b>
                  {Math.floor(
                    ((exper.end_date ? strToDate(exper.end_date) : new Date()) -
                      strToDate(exper.start_date)) /
                      (7 * 24 * 60 * 60 * 1000)
                  )}{" "}
                  weeks
                </b>
              </div>
              <div className="row">
                {exper.tech_list.split(",").map((tech, i) => (
                  <div className="col-6 col-md-3" key={i}>
                    <div className="tech mt-2">{tech}</div>
                  </div>
                ))}
              </div>
              <div className="ml-1 mt-2" style={{ fontWeight: "600" }}>
                {exper.type}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-5">Certificates ({technical.certificates.length})</h3>
      <div className="row">
        {sortedCertificates.map((cert, idx) => (
          <div className="col-12 col-md-6" key={idx}>
            <a
              className="item-url"
              href={urls.technical.certDetail(
                technical.encode_certificate(cert)
              )}
            >
              <div className="item-box py-3">
                <span>
                  <span style={{ display: "flex" }}>
                    <div style={{ flexGrow: " 1" }}>
                      <div style={{ fontWeight: "bold", color: "indigo" }}>
                        {cert.name}
                      </div>
                      <div>{cert.issuer}</div>
                    </div>
                    <div
                      style={{
                        color: "#666666",
                        fontWeight: "700",
                        width: "120px",
                        textAlign: "right",
                      }}
                    >
                      {cert.date}
                    </div>
                  </span>
                </span>
                <div style={{ fontWeight: "600", color: "#666666" }}>
                  {cert.type}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* <h3 className="mt-5">Skills ({ technical.skills|length })</h3>
<div className="row">
        <div className="col-12 col-md-4 col-lg-3">
            <div className="item-box">
                <span style="fontWeight: bold;color: indigo">
                    <img className="skill-img" style="margin-right: 15px" src="{ url_for('static', filename=skill.url) }" />
                    { skill.name }
                </span>
            </div>
        </div>
</div> */}
    </>
  );
}

export default TechnicalPage;
