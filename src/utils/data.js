import {
  IconAt,
  IconAward,
  IconCake,
  IconEdit,
  IconGitHub,
  IconGitLab,
  IconHome,
  IconLinkedIn,
  IconPhone,
  IconVolleyBall,
} from "../components/Icons";
import _pic from "../pic.jpg";

export const frontPic = _pic;
export const fullName = "Rohnak Agarwal";
export const intro = {
  brief: (
    <div style={{ fontSize: "18px" }}>
      <div className="text-bold strong">Software Engineer - R&D</div>
      <div>Reverie Language Technologies, Bangalore</div>
      <div className="mt-4">
        Since <strong>Jan 2022</strong>
      </div>
    </div>
  ),
  part1: [
    [
      <IconPhone />,
      <>
        <a href="tel:+919658600961" target="_blank" rel="noreferrer noopener">
          +91-9658600961
        </a>
        <br />
        <a href="tel:+917978928490" target="_blank" rel="noreferrer noopener">
          +91-7978928490
        </a>
      </>,
    ],
    [
      <IconAt />,
      <a
        href="mailto:rrka79wal@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        rrka79wal@gmail.com
      </a>,
    ],
    [
      <IconLinkedIn />,
      <a
        href="https://www.linkedin.com/in/rohnak-agarwal-5558391a0/"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://www.linkedin.com/in/rohnak-agarwal-5558391a0/
      </a>,
    ],
    [
      <IconGitHub />,
      <a
        href="https://github.com/rrkas"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://github.com/rrkas
      </a>,
    ],
    [
      <IconGitLab />,
      <a
        href="https://gitlab.com/rrkas"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://gitlab.com/rrkas
      </a>,
    ],
    [
      <IconAward />,
      <a
        href="https://www.credly.com/users/rohnak-agarwal/badges"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://www.credly.com/users/rohnak-agarwal/badges
      </a>,
    ],
  ],
  basic: [
    [<IconCake />, "9 July, 2000"],
    [<IconHome />, "Cuttack, Odisha - 753012"],
    [<IconVolleyBall />, "Badminton"],
    [<IconEdit />, "Poems"],
  ],
  education: [
    {
      std: "Class 10",
      branch: null,
      year: 2016,
      institute: {
        name: "D.A.V. Public School",
        address: "CDA-6, Cuttack",
      },
      score: {
        value: 10,
        cgpa: true,
      },
    },
    {
      std: "Class 12",
      branch: "Science",
      year: 2018,
      institute: {
        name: "D.A.V. Public School",
        address: "CDA-6, Cuttack",
      },
      score: {
        value: 92.4,
        cgpa: false,
      },
    },
    {
      std: "B.Tech",
      branch: "Computer Science & Engg. (CSE)",
      year: 2022,
      institute: {
        name: "Odisha University of Technology & Research (OUTR)",
        address: "Ghatikia, Bhubaneswar",
      },
      score: {
        value: 9.48,
        cgpa: true,
      },
    },
  ],
};
