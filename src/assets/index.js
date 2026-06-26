import lockyLogo from "./locky.png";
import abcApp from "./abc.png";
import letsFunApp from "./letsfun.png";
import railkafeApp from "./railkafe.png";
import typofApp from "./typof.png";

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

export {
  lockyLogo,
  abcApp,
  certificationImageFiles,
  certificationImagesByFile,
  letsFunApp,
  railkafeApp,
  typofApp,
};
