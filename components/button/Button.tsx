import { Button as B } from "x-react/button";
import { useResponsive } from "x-react/hooks";

const { isMobile, isTablet, isDesktop } = useResponsive();

export const Button = () => {
  return (
    <B variant="shadow" color="primary" radius="sm">
      Click me
    </B>
  );
};
