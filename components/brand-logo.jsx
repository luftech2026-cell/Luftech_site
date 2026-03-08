import Image from "next/image";
import { siteIdentity } from "../lib/site-content";

const logoDimensions = {
  header: {
    width: 228,
    height: 60,
    sizes: "(max-width: 767px) 170px, 228px",
  },
  hero: {
    width: 304,
    height: 80,
    sizes: "(max-width: 767px) 220px, 304px",
  },
  section: {
    width: 266,
    height: 70,
    sizes: "(max-width: 767px) 200px, 266px",
  },
  footer: {
    width: 190,
    height: 50,
    sizes: "(max-width: 767px) 150px, 190px",
  },
};

export default function BrandLogo({
  variant = "header",
  className = "",
  priority = false,
}) {
  const dimensions = logoDimensions[variant] ?? logoDimensions.header;

  return (
    <span className={`brand-logo brand-logo--${variant} ${className}`.trim()}>
      <Image
        src="/images/luftech-logo.png"
        alt={siteIdentity.brandName}
        width={dimensions.width}
        height={dimensions.height}
        sizes={dimensions.sizes}
        priority={priority}
      />
    </span>
  );
}
