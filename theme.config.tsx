import { DocsThemeConfig, ThemeSwitch } from "nextra-theme-docs";
import { Link } from "@/components/Link";
import { ChildrenProps } from "@/utils/types";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useConfig } from "nextra-theme-docs";
import { Logo } from "./components/Logo";

const InkeepChatButton = dynamic(
  () => import("@/components/InkeepSearch").then((mod) => mod.InkeepTrigger),
  {
    ssr: false,
    loading: () => (
      <div className="hidden lg:block">
        <button className="flex items-center gap-2 rounded-lg bg-black/[.05] px-3 py-1.5 text-base leading-tight text-gray-800 transition-colors md:text-sm dark:bg-gray-50/10 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path>
          </svg>
          <span className="hidden md:inline xl:hidden">AI</span>
          <span className="hidden xl:inline">Ask AI</span>
        </button>
      </div>
    ),
  },
);

const config: DocsThemeConfig = {
  logo: (
    // <h2 className="text-2xl font-bold">
    //   x<span className="text-red-600">R</span>eact
    // </h2>
    <Logo />
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
      light: 30,
      dark: 32,
    },

    saturation: {
      light: 200,
      dark: 400,
    },
  },

  navbar: {
    extraContent: (
      <div className="flex !h-12 items-center md:gap-4 lg:-translate-x-4">
        <div className="hidden lg:block">
          <InkeepChatButton />
        </div>
        <ThemeSwitch
          lite
          className="!bg-transparent p-0 *:justify-center *:gap-0 [&_span]:hidden [&_svg]:size-4"
        />
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
    component: <Footer />,
  },
};

export default config;
