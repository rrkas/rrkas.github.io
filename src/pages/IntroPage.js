import { useEffect, useState } from "react";
import { readString } from "react-papaparse";
import { frontPic, fullName, URLS } from "../utils/data";

function IntroPage() {
  const [state, setState] = useState({
    basic: null,
    brief: null,
    details: null,
    education: null,
  });

  useEffect(() => {
    // brief
    fetch(URLS.INTRO.BRIEF)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            try {
              const brief = csv_data.data[0][0];
              setState((s) => ({ ...s, brief }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // details
    fetch(URLS.INTRO.DETAILS)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            const data = csv_data.data;
            try {
              const details = {};
              for (var ri = 0; ri < data.length; ri++) {
                if (ri === 0) {
                  continue;
                }
                details[data[ri][0]] = data[ri][1];
              }
              setState((s) => ({ ...s, details }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // basic
    fetch(URLS.INTRO.BASIC)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            const data = csv_data.data;
            try {
              const basic = {};
              for (var ri = 0; ri < data.length; ri++) {
                if (ri === 0) {
                  continue;
                }
                basic[data[ri][0]] = data[ri][1];
              }
              setState((s) => ({ ...s, basic }));
            } catch (error) {
              console.log(error);
            }
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // education
    fetch(URLS.INTRO.EDUCATION)
      .then(async (resp) => {
        return await resp.text();
      })
      .then((data) => {
        readString(data, {
          complete: (csv_data) => {
            const data = csv_data.data;
            try {
              const education = [];
              for (var ri = 0; ri < data.length; ri++) {
                if (ri === 0) {
                  continue;
                }
                education.push({
                  year: +data[ri][0],
                  std: data[ri][1],
                  branch: data[ri][2],
                  institute: {
                    name: data[ri][3],
                    address: data[ri][4],
                  },
                  score: {
                    value: +data[ri][5],
                    cgpa: +data[ri][6] === 1,
                  },
                });
              }
              console.log(education);
              setState((s) => ({ ...s, education }));
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
      <div className="row">
        <div className="col-12 col-md-6 col-lg-2 mb-2">
          <div className="card card-body h-100 rounded">
            <div className="p-3 border border-primary rounded text-center">
              <img src={frontPic} alt="" style={{ maxHeight: "250px" }} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 mb-2">
          <div className="card card h-100 rounded">
            <div className="card-header">
              <div className="card-title pt-2">
                <div className="h2">{fullName}</div>
              </div>
            </div>
            {state.brief && (
              <div
                className="card-body"
                dangerouslySetInnerHTML={{ __html: state.brief }}
              ></div>
            )}
          </div>
        </div>
        {state.details && (
          <div className="col-12 col-md-6 col-lg-5 mb-2">
            <div className="card card h-100 rounded">
              <div className="card-status-start bg-warning"></div>
              <div className="card-body">
                <table className="table table-borderless">
                  <tbody>
                    {Object.entries(state.details).map((e, idx) => (
                      <tr key={idx}>
                        <td className="align-middle strong">{e[0]}</td>
                        <td
                          className="align-middle w-100 hard-wrap"
                          dangerouslySetInnerHTML={{ __html: e[1] }}
                        ></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {state.basic && (
          <div className="col-12 col-md-6 col-lg-4 mb-2">
            <div className="card card h-100 rounded">
              <div className="card-status-start bg-blue"></div>
              <div className="card-body">
                <div className="card-title ms-2">Basic Info</div>
                <table className="table table-borderless">
                  <tbody>
                    {Object.entries(state.basic).map((e, idx) => (
                      <tr key={idx}>
                        <td className="align-middle strong">{e[0]}</td>
                        <td
                          className="align-middle w-100 hard-wrap"
                          dangerouslySetInnerHTML={{ __html: e[1] }}
                        ></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {state.education && (
          <div className="col-12 col-lg-8 mb-2">
            <div className="card card h-100 rounded">
              <div className="card-status-start bg-green"></div>
              <div className="card-body">
                <div className="card-title ms-2">Education</div>
                <table className="table table-borderless d-none d-lg-block">
                  <tbody>
                    {state.education
                      .sort((a, b) => b.year - a.year)
                      .map((e, idx) => (
                        <tr key={idx}>
                          <td className="align-middle">{e.year}</td>
                          <td className="align-middle">
                            {e.std}
                            {e.branch && (
                              <>
                                <br />
                                <strong>{e.branch}</strong>
                              </>
                            )}
                          </td>
                          <td className="align-middle">
                            <strong>{e.institute.name}</strong>
                            <br />
                            {e.institute.address}
                          </td>
                          <td className="align-middle text-end">
                            {e.score.cgpa && <>CGPA: </>}
                            <strong style={{ fontSize: 17 }}>
                              {e.score.value.toFixed(2)}
                            </strong>
                            {!e.score.cgpa && " %"}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="d-lg-none d-block">
                  <div className="row">
                    {state.education
                      .sort((a, b) => b.year - a.year)
                      .map((e, idx) => (
                        <div className="col-12 col-md-6 mb-2" key={idx}>
                          <div className="card card-body mb-2 h-100">
                            <h3>{e.year}</h3>
                            <h3>
                              {e.std}
                              <div>{e.branch && e.branch}</div>
                            </h3>
                            <h2>{e.institute.name}</h2>
                            <div>
                              <strong>{e.institute.address}</strong>
                            </div>
                            <div className="h3">
                              {e.score.cgpa && <>CGPA: </>}
                              <strong>{e.score.value.toFixed(2)}</strong>
                              {!e.score.cgpa && " %"}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default IntroPage;
