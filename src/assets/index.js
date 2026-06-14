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

export {
  lockyLogo,
  abcApp,
  certificationImagesByFile,
  letsFunApp,
  railkafeApp,
  typofApp,
};
