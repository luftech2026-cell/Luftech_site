import "./globals.css";
import { siteIdentity } from "../lib/site-content";

const backgroundScene =
  "https://prod.spline.design/l5td-0D7VLIeyxwP/scene.splinecode";

export const metadata = {
  metadataBase: new URL(siteIdentity.siteUrl),
  title: "Lufcore | Siti, Gestionali e Web App",
  description:
    "Lufcore realizza siti web, gestionali e web app su misura. Contatti: info@lufcore.it, amministrazione@lufcore.it, assistenza@lufcore.it, +39 379 3547052.",
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
          href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900&display=swap"
        />
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
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
        />
      </head>
      <body>
        <div className="site-spline-background" aria-hidden="true">
          <div className="site-spline-background__fallback" />
          <spline-viewer
            className="site-spline-background__viewer"
            url={backgroundScene}
            loading="eager"
            events-target="global"
          />
        </div>
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
