export * from "./auth.type";
export * from "./user.type";
export * from "./category.types";
export * from "./subscription.type";
export * from "./payment.type";
export * from "./post.type";
export * from "./follower.type"

import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
