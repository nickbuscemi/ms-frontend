export const heroSectionQuery = `
  *[_type == "heroSection"][0] {
    titleLine1,
    titleLine2,
    description,
    "backgroundImage": backgroundImage.asset->url,
    backgroundAlt
  }
`;
