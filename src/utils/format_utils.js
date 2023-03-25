export const strToDate = (s) => {
  const dd = +s.slice(0, 2);
  const mm = +s.slice(3, 5);
  const yyyy = +s.slice(6);
  //   console.log(s);
  //   console.log(dateToStr(new Date(yyyy, mm, dd)));
  //   console.log(dd, mm, yyyy);
  //   return s;
  return new Date(yyyy, mm, dd);
};

export const dateToStr = (d) => {
  //   const d = new Date();
  const dd = d.getDate().toString().padStart(2, 0);
  const mm = d.getMonth().toString().padStart(2, 0);
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};
