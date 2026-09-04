const certificationAssets = import.meta.glob(
  "./certifications/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

const certificationImagesByFile = Object.fromEntries(
  Object.entries(certificationAssets).map(([path, image]) => [
    path.split("/").pop(),
    image,
  ]),
);

const projectLogoAssets = import.meta.glob("./projects/logos/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});

const educationLogoAssets = import.meta.glob("./education/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});

const companyLogoAssets = import.meta.glob("./company/*.{png,svg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});

const profileImageAssets = import.meta.glob("./profile/*.{jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});

const projectLogosByFile = Object.fromEntries(
  Object.entries(projectLogoAssets).map(([path, image]) => [
    path.split("/").pop(),
    image,
  ]),
);

const educationLogosByFile = Object.fromEntries(
  Object.entries(educationLogoAssets).map(([path, image]) => [
    path.split("/").pop(),
    image,
  ]),
);

const companyLogosByFile = Object.fromEntries(
  Object.entries(companyLogoAssets).map(([path, image]) => [
    path.split("/").pop(),
    image,
  ]),
);

const profileImagesByFile = Object.fromEntries(
  Object.entries(profileImageAssets).map(([path, image]) => [
    path.split("/").pop(),
    image,
  ]),
);

const certificationImageFiles = Object.freeze({
  claudePlatform101: "claude-platform-101.jpeg",
  oracleAiFoundations2025: "oracle-ai-foundations-2025.jpeg",
  pluralsightSecurityChampion: "pluralsight-security-champion.jpeg",
  greatLearningFlutter: "great-learning-flutter.jpeg",
  nptelIot: "nptel-iot.jpeg",
  nptelCloudComputing: "nptel-cloud-computing.jpeg",
  nptelMis: "nptel-mis.jpeg",
  simplilearnFlutter: "simplilearn-flutter.jpeg",
  odishaIntelAi: "odisha-intel-ai.jpeg",
  codekaze2023: "codekaze-2023.jpeg",
});

const projectLogoFiles = Object.freeze({
  "e-sentry-systems": "e-sentry-systems.jpg",
  "iriss-sitewalk": "iriss-sitewalk.jpg",
  locky: "locky.png",
  railkafe: "railkafe.png",
  vdriv: "vdriv.png",
  "abc-learning": "abc-learning.png",
  typof: "typof.png",
  "integer-gst-billing": "integer-gst-billing.png",
  "gst-invoice-generator": "gst-invoice-generator.png",
  "sku-generator": "sku-generator.png",
  "lets-fun": "lets-fun.png",
  atoms: "atoms.png",
});

const projectLogos = Object.freeze(
  Object.fromEntries(
    Object.entries(projectLogoFiles).map(([projectId, fileName]) => [
      projectId,
      projectLogosByFile[fileName],
    ]),
  ),
);

const educationLogoFiles = Object.freeze({
  "iit-kharagpur": "iit-kharagpur.jpeg",
  "gift-bhubaneswar": "gift-bhubaneswar.png",
});

const educationLogos = Object.freeze(
  Object.fromEntries(
    Object.entries(educationLogoFiles).map(([educationId, fileName]) => [
      educationId,
      educationLogosByFile[fileName],
    ]),
  ),
);

const companyLogoFiles = Object.freeze({
  freelance: "freelance.svg",
  iriss: "iriss.svg",
  kods: "kods.png",
});

const companyLogos = Object.freeze(
  Object.fromEntries(
    Object.entries(companyLogoFiles).map(([companyId, fileName]) => [
      companyId,
      companyLogosByFile[fileName],
    ]),
  ),
);

const profileImageFiles = Object.freeze({
  priyanshu: "priyanshu-bej.jpg",
});

const profileImages = Object.freeze(
  Object.fromEntries(
    Object.entries(profileImageFiles).map(([profileId, fileName]) => [
      profileId,
      profileImagesByFile[fileName],
    ]),
  ),
);

export {
  certificationImageFiles,
  certificationImagesByFile,
  companyLogoFiles,
  companyLogos,
  companyLogosByFile,
  educationLogoFiles,
  educationLogos,
  educationLogosByFile,
  projectLogoFiles,
  projectLogos,
  projectLogosByFile,
  profileImageFiles,
  profileImages,
  profileImagesByFile,
};
