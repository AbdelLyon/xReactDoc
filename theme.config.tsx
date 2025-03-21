import { DocsThemeConfig } from "nextra-theme-docs";
import { Link } from "@/components/Link";
import { ChildrenProps } from "@/utils/types";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useConfig } from "nextra-theme-docs";
import { IconBrandXFilled } from "@tabler/icons-react";
const ThemeToggle = dynamic(
  () => import("./components/ThemeToggle").then((mod) => mod.ThemeToggle),
  { ssr: false },
);

const config: DocsThemeConfig = {
  logo: (
    <div className="text-2xl font-bold">
      <span
        style={{
          fontWeight: "bold",
          fontSize: "28px",
          background: "linear-gradient(to bottom right, #ff0000, #990000)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        x
      </span>

      <span>React</span>
    </div>
  ),
  components: {
    a: (props: ChildrenProps) => <Link href="" {...props} />,
  },
  project: {
    link: "https://github.com/nextauthjs/next-auth",
    icon: null,
  },
  darkMode: false,

  color: {
    hue: {
      light: 10,
      dark: 10,
    },

    saturation: {
      light: 200,
      dark: 100,
    },
  },

  navbar: {
    extraContent: (
      <div className="flex !h-12 items-center md:gap-4 lg:-translate-x-4">
        <ThemeToggle />
      </div>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
  },
  head: () => {
    const pathname = usePathname();
    const { frontMatter } = useConfig();
    const url = `https://authjs.dev${pathname}`;

    const lastPathParam = pathname?.split("/").at(-1)?.replaceAll("-", " ");
    const capitalizedPathTitle = lastPathParam?.replace(/\b\w/g, (l) =>
      l.toUpperCase(),
    );
    const title = frontMatter.title
      ? frontMatter.title
      : capitalizedPathTitle
      ? `Xefi | ${capitalizedPathTitle}`
      : "Xefi | Authentication for the Web";

    return (
      <>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <title>{title}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={frontMatter.description || "Authentication for the Web"}
        />
        <meta
          property="og:image"
          content={`https://authjs.dev/api/og?title=${encodeURIComponent(
            title,
          )}`}
        />
      </>
    );
  },
  banner: {
    content: (
      <>
        Migrating from NextAuth.js v4? Read{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="/getting-started/migrating-to-v5"
        >
          <b>our migration guide</b>
        </a>
        .
      </>
    ),
    dismissible: true,
  },
  editLink: {
    content: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },

  docsRepositoryBase: "https://github.com/nextauthjs/next-auth/edit/main/docs",
  footer: {
    component: <p>Footer</p>,
  },
};

export default config;
