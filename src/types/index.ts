export * from "./auth.type";
export * from "./user.type";
export * from "./category.types";

import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
