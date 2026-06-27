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

const projectLogosByFile = Object.fromEntries(
  Object.entries(projectLogoAssets).map(([path, image]) => [
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

export {
  certificationImageFiles,
  certificationImagesByFile,
  projectLogoFiles,
  projectLogos,
  projectLogosByFile,
};
