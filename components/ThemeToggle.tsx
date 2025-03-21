import { IconSun, IconMoon } from "x-react/icons";
import { useTheme } from "nextra-theme-docs";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-content1/10 hover:bg-content1/20 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <IconMoon className="size-5 text-background-foreground" />
      ) : (
        <IconSun className="size-5 text-background-foreground" />
      )}
    </button>
  );
}
