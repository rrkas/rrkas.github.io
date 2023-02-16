import { frontPic, fullName, intro } from "../utils/data";

function IntroPage() {
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-4 col-lg-2 mb-2">
          <div className="card card-body h-100">
            <div className="p-3 border border-primary rounded">
              <img src={frontPic} alt="" />
            </div>
          </div>
        </div>
        <div className="col-8 col-lg-5 mb-2">
          <div className="card card-borderless h-100">
            <div className="card-header">
              <div className="card-title pt-2">
                <div style={{ fontSize: "35px", fontWeight: "bold" }}>
                  {fullName}
                </div>
              </div>
            </div>
            <div className="card-body">{intro.brief}</div>
          </div>
        </div>
        <div className="col-12 col-lg-5 mb-2">
          <div className="card card-borderless h-100">
          <div className="card-status-start bg-warning"></div>
            <div className="card-body">
              <table className="table table-borderless">
                <tbody>
                  {intro.part1.map((e, idx) => (
                    <tr key={idx}>
                      <td className="align-middle">{e[0]}</td>
                      <td className="align-middle w-100">{e[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 mb-2">
          <div className="card card-borderless h-100">
            <div className="card-status-start bg-blue"></div>
            <div className="card-body">
              <div className="card-title ms-2">Basic Info</div>
              <table className="table table-borderless">
                <tbody>
                  {intro.basic.map((e, idx) => (
                    <tr key={idx}>
                      <td className="align-middle">{e[0]}</td>
                      <td className="align-middle w-100">{e[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 mb-2">
          <div className="card card-borderless h-100">
            <div className="card-status-start bg-green"></div>
            <div className="card-body">
              <div className="card-title ms-2">Education</div>
              <table className="table table-borderless d-none d-lg-block">
                <tbody>
                  {intro.education
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
                {intro.education
                  .sort((a, b) => b.year - a.year)
                  .map((e, idx) => (
                    <div className="card card-body mb-2" key={idx}>
                      <h1>{e.year}</h1>
                      <h3 className="d-flex">
                        <div>
                          {e.std}
                          <div>{e.branch && e.branch}</div>
                        </div>
                        <div className="ms-auto">
                          {e.score.cgpa && <>CGPA: </>}
                          <strong style={{ fontSize: 17 }}>
                            {e.score.value.toFixed(2)}
                          </strong>
                          {!e.score.cgpa && " %"}
                        </div>
                      </h3>
                      <h2>{e.institute.name}</h2>
                      <div>
                        <strong>{e.institute.address}</strong>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
