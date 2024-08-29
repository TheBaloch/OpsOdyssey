import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://within28days.com/"),
  title: "Related Websites - BuzzNFinds & Blog.NattyNYC",
  description:
    "Explore the related websites including BuzzNFinds for tech trends and Blog.NattyNYC for fashion and lifestyle content. Discover more about these sites and their focus areas.",
  keywords:
    "BuzzNFinds,Natty NYC Blogs, tech trends, fashion, lifestyle, related websites",
  openGraph: {
    title: "Related Websites - BuzzNFinds & Blog.NattyNYC",
    description:
      "Explore the related websites including BuzzNFinds for tech trends and Blog.NattyNYC for fashion and lifestyle content. Discover more about these sites and their focus areas.",
    site_name: "Within28Days",
    type: "website",
  },
  twitter: {
    title: "Related Websites - BuzzNFinds & Blog.NattyNYC",
    description:
      "Explore the related websites including BuzzNFinds for tech trends and Blog.NattyNYC for fashion and lifestyle content. Discover more about these sites and their focus areas.",
  },
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1>Links</h1>
        <h4 className="text-md font-bold text-teal-600">Related Websites</h4>
      </header>

      <section className="mb-8">
        <h4 className="text-md font-semibold text-gray-800">BuzzNFinds.com</h4>
        <p className="text-gray-700 mt-4">
          <Link
            href="https://buzznfinds.com"
            className="text-teal-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            BuzzNFinds.com
          </Link>{" "}
          is a vibrant website dedicated to discovering the latest trends,
          offering in-depth tips, and providing comprehensive reviews on various
          tech products and gadgets. It focuses on keeping readers informed
          about emerging technologies, electronic devices, and industry
          insights, making it a go-to resource for tech enthusiasts. The site is
          designed to help users make informed purchasing decisions, with
          content tailored to highlight the most current and relevant trends in
          the technology space.
        </p>
      </section>

      <section>
        <h4 className="text-md font-semibold text-gray-800">
          Blog.NattyNYC.com
        </h4>
        <p className="text-gray-700 mt-4">
          <Link
            href="https://blog.nattynyc.com"
            className="text-teal-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog.NattyNYC.com
          </Link>{" "}
          is an extension of the Natty NYC brand, focusing on fashion, personal
          care, and lifestyle content. It serves as a platform where readers can
          explore the latest in women’s fashion, beauty tips, and styling
          advice. The blog aims to inspire and empower readers by offering fresh
          perspectives on modern fashion trends, making it a valuable resource
          for anyone looking to elevate their style.
        </p>
        <Link
          href="https://opsodyssey.com"
          className="text-teal-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpsOdyssey.com
        </Link>{" "}
        <Link
          href="https://imguru.ae"
          className="text-teal-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ImGuru.ae
        </Link>{" "}
      </section>
    </div>
  );
};

export default Page;
