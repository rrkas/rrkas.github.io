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

export const poems = {
  collections: [
    {
      date: "14/05/2019",
      name: "The Verse Of facts",
      gdrive_file_id: "13Jc98bZu_soi23WsFm7V6y7qRQiMVejb",
    },
  ],
  short_poems: [
    {
      date: "11/01/2019",
      name: "The Sea Shore",
      gdrive_file_id: "1-9zF5XN16AAQnLB7osR24TELVlPImg4B",
    },
    {
      date: "12/01/2019",
      name: "The Small Playground",
      gdrive_file_id: "1-GpLka6xVZIcHew4Nn-D2YXDHnsuXbRM",
    },
    {
      date: "18/01/2019",
      name: "The Last Breath",
      gdrive_file_id: "1-Z55FNk-01Bx47ji4ZS9n9BgUpZdGkyG",
    },
    {
      date: "19/01/2019",
      name: "The Thirst of Glimpse",
      gdrive_file_id: "1-XjULOOhLe_TInMnU3DgP6RPipd6luhl",
    },
    {
      date: "17/02/2019",
      name: "The Mighty Knights",
      gdrive_file_id: "1-V-QQCssK02uG1wVg6zOz5uL6FFdAVhn",
    },
    {
      date: "27/03/2019",
      name: "Will you still stay beside me?",
      gdrive_file_id: "1-044SR20kwWZ9Z2DHu8lDL_6Gbvr2rYW",
    },
    {
      date: "02/07/2019",
      name: "Tug Of War",
      gdrive_file_id: "1--W51nOg5-Bmv-ND046y5low8ZMUmlfI",
    },
    {
      date: "15/08/2019",
      name: "द्रौपदी की रक्षा",
      gdrive_file_id: "1-1kg3eFyj0j7M6U7PUbOOuJKHh6H_Nm4",
    },
    {
      date: "25/08/2019",
      name: "So Glad It Happened",
      gdrive_file_id: "1-jWrmkpGGScRhNvftyFIpqyzax02d7ux",
    },
    {
      date: "07/09/2019",
      name: "The Great Erosion",
      gdrive_file_id: "1-8NIHojMLIC0tT3AgSuZtC18qDd-n0FB",
    },
    {
      date: "23/10/2019",
      name: "The Ultimate Hunter",
      gdrive_file_id: "1-06WdtXkqvQx04FH9Zvrtr060t4l6uZj",
    },
    {
      date: "17/11/2019",
      name: "Far and Near",
      gdrive_file_id: "1-cGbRweEJeV3iNb_Nc0jLvUJ9ilmNneL",
    },
    {
      date: "18/11/2019",
      name: "Listen to Understand",
      gdrive_file_id: "1-kFJtWSxA39CT3TfQa0ZrmAJJcbgjZuf",
    },
    {
      date: "20/11/2019",
      name: "The Reins To Emotions",
      gdrive_file_id: "1-sCWIPN_xLvvuwN_IpGcBFPKybXxO4PM",
    },
    {
      date: "25/11/2019",
      name: "Long Way to Go Alone",
      gdrive_file_id: "1-wKwFPdmc8pmnkpX78aJszyFqEIrjgac",
    },
    {
      date: "27/11/2019",
      name: "Stuck in the Past",
      gdrive_file_id: "10-8i2Z1pLksVF_tI8pa-dbUlMbCdQpyT",
    },
    {
      date: "28/11/2019",
      name: "Not of My Kind",
      gdrive_file_id: "100LoxSyEJN3zYby0ePg-vyMb7T240b_o",
    },
    {
      date: "29/11/2019",
      name: "Being Low",
      gdrive_file_id: "100nI0IOrAXkSHgn9oJvlPuNw85Zu1rom",
    },
    {
      date: "30/11/2019",
      name: "And we call ourselves HUMANS?",
      gdrive_file_id: "105pb_AmBRy_NxefAiZh5zMCT6GWU4NAT",
    },
    {
      date: "15/12/2019",
      name: "My kingdom of darkness",
      gdrive_file_id: "112c5baNJbtqqXzrkYDpAjzKaQO3J1h8y",
    },
    {
      date: "17/12/2019",
      name: "Grinded",
      gdrive_file_id: "13K0O3E6NkaDtKdFR-lUltgk-E4czt0HV",
    },
    {
      date: "09/03/2020",
      name: "कुछ रंग ऐसे भी",
      gdrive_file_id: "13PYkQuE7HbQLSHkgIzzMiEIhN18RXEI1",
    },
    {
      date: "01/03/2021",
      name: "Life is?",
      gdrive_file_id: "100zQs_aEkCB5rBluBtjFOqxwSsL8ESRD",
    },
    {
      date: "19/03/2021",
      name: "Reality of illusions",
      gdrive_file_id: "1CgBj5kUOSh1TNbtPSUIW4IaPrt07HFde",
    },
    {
      date: "28/11/2021",
      name: "Let it go or Bury it down",
      gdrive_file_id: "1--EM_qcyiljtq7sxPGP7hvK6bCH2XV5b",
    },
    {
      date: "31/12/2021",
      name: "The beginning or the end",
      gdrive_file_id: "1HXjrhViQPyrjJPiFd9xRaL0xHuMx1pvk",
    },
    {
      date: "01/01/2022",
      name: "To the grave and back ❤",
      gdrive_file_id: "1JL-OxKkmsIYP0-NNa1Vn7TiYHoh3VQiP",
    },
    {
      date: "12/02/2022",
      name: "Weekends",
      gdrive_file_id: "1tzYVCVWJuTleIHnp-Ir95qixMgiv5y7X",
    },
    {
      date: "26/02/2022",
      name: "Afraid to be left alone",
      gdrive_file_id: "1Bo2R-Id_s2gqhHsgCECrT7kufp_GqwyA",
    },
    {
      date: "11/08/2022",
      name: "आजादी का अमृत महोत्सव",
      gdrive_file_id: "1plqvTb7hG5BO5dISNAPJIa9wpjR_X4l_",
    },
    {
      date: "28/10/2022",
      name: "100 reasons to give up",
      gdrive_file_id: "1qRn5Fn_d8b3qvWpu8wzMFH-em3AeT7Z8",
    },
    {
      date: "17/11/2022",
      name: "Forever with you",
      gdrive_file_id: "10weD8taSeKuGOfhQgjjQ42b0x11gfsbZ",
    },
    {
      date: "06/03/2023",
      name: "A Spark",
      gdrive_file_id: "1YZuMfohyiEf1LGL_UW3vO8mtQ4g2KylB-hoAwy26nA4",
    },
    {
      date: "06/03/2023",
      name: "Hey dude, why so sad",
      gdrive_file_id: "1E3MVbNgJ3gXyPWHmyf2-tgLKigSru4EobKVX-vN_XYs",
    },
    {
      date: "10/03/2023",
      name: "Results",
      gdrive_file_id: "1Rzw-H1BWaZKKn55kOhCd9zquhdMlC9KfYFgtNnKYQsU",
    },
  ],
  encode_poem: (poem) => {
    const key = (poem.date + "-" + poem.name).replace(/[\W_]+/gi, "-");
    return key;
  },
  get_poem: (id) => {
    return (
      poems.collections.find((e) => poems.encode_poem(e) === id) ||
      poems.short_poems.find((e) => poems.encode_poem(e) === id)
    );
  },
};
