import "./globals.css";
import PrivacyCenter from "../components/privacy-center";
import SplineScene from "../components/spline-scene";
import { siteIdentity } from "../lib/site-content";

export const dynamic = "force-dynamic";

export const metadata = {
  metadataBase: new URL(siteIdentity.siteUrl),
  title: "Lufcore | Siti, Gestionali e Web App",
  description:
    "Lufcore realizza siti web, gestionali e web app su misura. Contatti: info@lufcore.it, amministrazione@lufcore.it, assistenza@lufcore.it, +39 379 3547052.",
  icons: {
    icon: "/iamges/Gemini_Generated_Image_8yjf6o8yjf6o8yjf.png",
    shortcut: "/iamges/Gemini_Generated_Image_8yjf6o8yjf6o8yjf.png",
    apple: "/iamges/Gemini_Generated_Image_8yjf6o8yjf6o8yjf.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link
          rel="stylesheet"
          href="/breezed/assets/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/breezed/assets/css/font-awesome.css"
        />
        <link
          rel="stylesheet"
          href="/breezed/assets/css/templatemo-breezed.css"
        />
        <link
          rel="stylesheet"
          href="/breezed/assets/css/luftech-overrides.css"
        />
      </head>
      <body>
        <div className="site-spline-background" aria-hidden="true">
          <div className="site-spline-background__fallback" />
          <SplineScene
            scene="/spline/background.splinecode"
            className="site-spline-background__viewer"
            label="background.splinecode"
          />
        </div>
        <div className="site-shell">{children}</div>
        <PrivacyCenter />
      </body>
    </html>
  );
}
