import Link from "next/link";

function isInternalHref(href) {
  return typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
}

export default function SiteLink({
  href,
  className = "",
  children,
  target,
  rel,
  ...rest
}) {
  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} target={target} rel={rel} {...rest}>
      {children}
    </a>
  );
}
