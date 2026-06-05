import Link from "next/link";

export const metadata = {
  title: "Real Estate Investing Blog | HostMetricsPro",
  description:
    "Learn about Airbnb investing, cap rates, cash flow, ROI, NOI, DSCR, rental yields, and short-term rental investment analysis.",
};

const posts = [
  {
    title: "What Is a Good Airbnb Cap Rate?",
    href: "/blog/what-is-a-good-airbnb-cap-rate",
    description:
      "Learn what cap rate means, how to calculate it, and what investors consider a strong Airbnb cap rate.",
  },
];

export default function BlogPage() {
  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "56px", fontWeight: "700", marginBottom: "24px" }}>
        HostMetricsPro Blog
      </h1>

      <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "48px" }}>
        Real estate investing guides, Airbnb analysis, ROI strategies, cap rate
        education, cash flow optimization, and short-term rental insights.
      </p>

      <div
        style={{
          display: "grid",
          gap: "24px",
        }}
      >
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "24px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h2 style={{ marginBottom: "12px" }}>{post.title}</h2>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}