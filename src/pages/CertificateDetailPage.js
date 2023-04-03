import React, { useEffect, useState } from "react";
import { readString } from "react-papaparse";
import GDriveItemViewer from "../components/GDriveItemViewer";
import { technicalEncoder, URLS } from "../utils/data";

function CertificateDetailPage({ id }) {
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

  if (
    !(state.skills || state.projects || state.experiences || state.certificates)
  ) {
    return <p>Loading...</p>;
  }

  const cert = technicalEncoder.get_certificate(state.certificates || [], id);

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
