export const urls = {
  root: "/",
  poems: {
    index: "/?poems",
    poemDetail: (id) => `/?poem=${id}`,
  },
  technical: {
    index: "/?technical",
    certDetail: (id) => `/?certificate=${id}`,
  },
};
