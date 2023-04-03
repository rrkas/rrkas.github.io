import React, { useEffect, useState } from "react";
import { readString } from "react-papaparse";
import { gdrive_download, technical, URLS } from "../utils/data";
import { strToDate } from "../utils/format_utils";
import { urls } from "../utils/urls";

function TechnicalPage() {
  const [state, setState] = useState({
    skills: null,
    projects: null,
    experiences: null,
    certificates: null,
  });

  useEffect(() => {
    // experiences
    fetch(URLS.TECH.EXP)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            const data = csv_data.data;
            try {
              const experiences = [];
              for (var ri = 0; ri < data.length; ri++) {
                if (ri === 0) {
                  continue;
                }

                experiences.push({
                  start_date: data[ri][0],
                  end_date: data[ri][1],
                  type: data[ri][2],
                  name: data[ri][3],
                  place: data[ri][4],
                  tech_list: data[ri][5],
                });
              }
              setState((s) => ({ ...s, experiences }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // experiences
    fetch(URLS.TECH.CERT)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            const data = csv_data.data;
            try {
              const certificates = [];
              for (var ri = 0; ri < data.length; ri++) {
                if (ri === 0) {
                  continue;
                }

                certificates.push({
                  date: data[ri][0],
                  type: data[ri][1],
                  issuer: data[ri][2],
                  name: data[ri][3],
                  gdrive_file_id: data[ri][4],
                });
              }
              setState((s) => ({ ...s, certificates }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // skills
    fetch(URLS.TECH.SKILLS)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            const data = csv_data.data;
            try {
              const skills = [];
              for (var ri = 0; ri < data.length; ri++) {
                if (ri === 0) {
                  continue;
                }

                skills.push({
                  name: data[ri][0],
                  type: data[ri][1],
                  gdrive_file_id: data[ri][2],
                });
              }
              setState((s) => ({ ...s, skills }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // projects
    fetch(URLS.TECH.PROJECTS)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            const data = csv_data.data;
            try {
              const projects = [];
              for (var ri = 0; ri < data.length; ri++) {
                if (ri === 0) {
                  continue;
                }

                projects.push({
                  date: data[ri][0],
                  type: data[ri][1],
                  domain: data[ri][2],
                  name: data[ri][3],
                  url: data[ri][4],
                  source_url: data[ri][5],
                  tech_list: data[ri][6],
                  desc: data[ri][7],
                  features: data[ri][8].split(";"),
                  image_url: data[ri][9],
                });
              }
              setState((s) => ({ ...s, projects }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <h1 className="mb-3">Technical</h1>

      {state.projects && (
        <>
          <h3 className="mt-2">Projects ( {state.projects.length} )</h3>
          <div className="row">
            {state.projects
              .sort((a, b) => strToDate(b.date) - strToDate(a.date))
              .map((project, idx) => (
                <div className="col-12 col-md-6 col-xl-4 mb-1" key={idx}>
                  <div className="item-box mb-2 h-100 d-flex flex-column">
                    <div className="text-center">
                      {project.image_url && (
                        <img
                          alt=""
                          width="100"
                          height="100"
                          src={project.image_url}
                        />
                      )}
                      <div className="mt-2">
                        <div style={{ color: "#7e7e7e", fontWeight: "600" }}>
                          {project.date}
                        </div>
                        <div className="strong my-2">{project.name}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: " justify" }}>{project.desc}</div>
                    {project.features && (
                      <div className="ms-2 mt-2">
                        <b>Features:</b>
                        <ul type="square">
                          {project.features.map((feature, fi) => (
                            <li className="mb-1" key={fi}>
                              <i>{feature}</i>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="my-2"></div>
                    <div className="mt-auto row">
                      {project.tech_list.split(",").map((tech, ti) => (
                        <div className="mt-3 col-6 col-md-3" key={ti}>
                          <div className="tech py-1">{tech}</div>
                        </div>
                      ))}
                    </div>
                    <div className="row mt-2">
                      <div className="col-6" style={{ fontWeight: "700" }}>
                        {project.type}
                      </div>
                      <div
                        className="col-6 text-end"
                        style={{ color: "green", fontWeight: "700" }}
                      >
                        {project.domain}
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-6 col-md-6">
                        {project.url && (
                          <a
                            target="_blank"
                            className="item-url"
                            href={project.url}
                            rel="noreferrer noopener"
                          >
                            View End Product
                          </a>
                        )}
                      </div>
                      <div className="col-6 col-md-6 text-end">
                        {project.source_url && (
                          <a
                            target="_blank"
                            className="item-url"
                            href={project.source_url}
                            rel="noreferrer noopener"
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}

      {state.experiences && (
        <>
          <h3 className="mt-2">Experience ( {state.experiences.length} )</h3>
          <div className="row">
            {state.experiences
              .sort((a, b) => strToDate(b.start_date) - strToDate(a.start_date))
              .map((exper, idx) => (
                <div className="col-12 col-md-6 mb-1" key={idx}>
                  <div className="item-box h-100">
                    <div style={{ color: "#7d7d7d", fontWeight: "700" }}>
                      {exper.start_date} -{" "}
                      {exper.end_date ? exper.end_date : "Now"}
                      <span className="text-black">
                        {" ( "}
                        {Math.floor(
                          ((exper.end_date
                            ? strToDate(exper.end_date)
                            : new Date()) -
                            strToDate(exper.start_date)) /
                            (7 * 24 * 60 * 60 * 1000)
                        )}{" "}
                        weeks )
                      </span>
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
                    <div className="row">
                      {exper.tech_list.split(",").map((tech, i) => (
                        <div className="col-6 col-md-4 col-xl-3" key={i}>
                          <div className="tech mt-2 py-2">{tech}</div>
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
        </>
      )}

      {state.certificates && (
        <>
          <h3 className="mt-2">Certificates ( {state.certificates.length} )</h3>
          <div className="row">
            {state.certificates
              .sort((a, b) => strToDate(b.date) - strToDate(a.date))
              .map((cert, idx) => (
                <div className="col-12 col-md-6 mb-1" key={idx}>
                  <a
                    className="item-url"
                    href={urls.technical.certDetail(
                      technical.encode_certificate(cert)
                    )}
                  >
                    <div className="item-box py-3 h-100">
                      <span>
                        <span style={{ display: "flex" }}>
                          <div style={{ flexGrow: " 1" }}>
                            <div
                              style={{ fontWeight: "bold", color: "indigo" }}
                            >
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
        </>
      )}

      {state.skills && (
        <>
          <h3 className="mt-5">Skills ( {state.skills.length} )</h3>
          <div className="row">
            {state.skills.map((skill, idx) => (
              <div className="col-12 col-md-4 col-lg-3" key={idx}>
                <div className="item-box p-3">
                  <div className="row">
                    <div className="col-auto me-3">
                      <img
                        alt=""
                        className="skill-img"
                        src={gdrive_download(skill.gdrive_file_id)}
                      />
                    </div>
                    <div className="col">
                      <b>{skill.name}</b>
                      <hr className="my-1" />
                      <div className="text-end">{skill.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default TechnicalPage;
