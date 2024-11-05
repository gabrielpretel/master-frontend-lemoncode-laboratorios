export const parseLinkHeader = (linkHeader: string | null) => {
  if (!linkHeader) return null;
  const links = linkHeader.split(", ");
  const parsedLinks: { [key: string]: string } = {};

  links.forEach((link) => {
    const [url, rel] = link.split("; ");
    const cleanUrl = url.slice(1, -1);
    const cleanRel = rel.replace(/rel="(.+)"/, "$1");
    parsedLinks[cleanRel] = cleanUrl;
  });

  return parsedLinks;
};
