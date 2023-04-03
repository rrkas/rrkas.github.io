export const frontPic = gdrive_download("1kRe9HxGNb1Hyser2b1_L08195LO2QNbf");
export const logo = gdrive_download("1NYBpG_UoZDkKhLexWuB1MsqbPWC1bOI1");
export const fullName = "Rohnak Agarwal";

document.getElementById("icon").href = logo;
document.getElementById("apple-touch-icon").href = logo;

export const URLS = {
  INTRO: {
    BRIEF:
      "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=0",

    DETAILS:
      "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=1560529038",

    BASIC:
      "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=213425535",

    EDUCATION:
      "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=1324723188",
  },
  TECH: {
    EXP: "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=417783509",
    CERT: "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=897388950",
    SKILLS:
      "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=1626590660",
    PROJECTS:
      "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=1258473908",
  },
  POEM: {
    COLLECTIONS:
      "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=1281498123",
    SHORT_POEMS:
      "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=675347926",
    SONGS:
      "https://docs.google.com/spreadsheets/d/1WcG_RZp8K3dFcudfgRXRYxS0MRt6MllJjO3-WUBacG8/gviz/tq?tqx=out:csv&gid=85823737",
  },
};

export const poemsEncoder = {
  encode_poem: (poem) => {
    const key = (poem.date + "-" + poem.name).replace(/[\W_]+/gi, "-");
    return key;
  },
  get_poem: (poem_list, id) => {
    return poem_list.find((e) => poemsEncoder.encode_poem(e) === id);
  },
};

export const technicalEncoder = {
  encode_certificate: (cert) => {
    const key = (cert.date + "-" + cert.name).replace(/[\W_]+/gi, "-");
    return key;
  },
  get_certificate: (certificate_list, id) => {
    return certificate_list.find((e) => technicalEncoder.encode_certificate(e) === id);
  },
};

export function gdrive_download(gdrive_file_id) {
  return `https://drive.google.com/uc?id=${gdrive_file_id}&export=download`;
}

export function gdrive_preview(gdrive_file_id) {
  return `https://drive.google.com/file/d/${gdrive_file_id}/preview?usp=drivesdk`;
}
