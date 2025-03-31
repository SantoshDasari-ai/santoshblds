import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "portfolio" | "profile";
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Santosh Dasari's portfolio - Biomedical Engineer specializing in innovative product design, medical devices, and robotics.",
  keywords = [
    "Santosh Dasari",
    "Biomedical Engineer",
    "Product Design",
    "Medical Devices",
    "Robotics",
    "CAD",
    "DFMA",
  ],
  image = "/assets/og-image.jpg",
  url = "https://santoshblds.com",
  type = "website",
}) => {
  const siteTitle = "Santosh Dasari | Biomedical Engineer";
  const fullTitle = title === siteTitle ? title : `${title} | Santosh Dasari`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
