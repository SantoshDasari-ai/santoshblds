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
  description = "Santosh Dasari - Biomedical Engineer specializing in medical device design, product development, and manufacturing. Seeking opportunities in medical device companies. Experience with SolidWorks, FDA compliance, heart valve testing, surgical devices, and rapid prototyping. Available for engineering roles in Bay Area, California.",
  keywords = [
    "Santosh Dasari",
    "Biomedical Engineer",
    "Medical Device Engineer",
    "Product Design Engineer",
    "Bay Area Medical Device Jobs",
    "Heart Valve Engineer",
    "Surgical Device Design",
    "SolidWorks Engineer",
    "FDA Compliance Engineer",
    "CAD Design Engineer",
    "Rapid Prototyping",
    "Device Manufacturing",
    "Silk Road Medical",
    "Carl Zeiss Meditec",
    "San Jose State University",
    "California Engineer",
    "Medical Device Development",
    "Thrombogenicity Testing",
    "Biocompatible Materials",
    "ISO 10993",
    "Product Development",
    "Engineering Portfolio",
  ],
  image = "/assets/optimized/my-photo.JPG.webp",
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
