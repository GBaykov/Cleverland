export const getTitleWithHighlight = (searchQuery: string, title: string) => {
  const curRegexp = new RegExp(searchQuery, 'ig');
  const mached = (match: string) => `<span class='highlight-text' data-test-id='highlight-matches'>${match}</span>`;
  return title.replace(curRegexp, mached);
};
