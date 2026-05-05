import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function CsLpLayout({ children }: { children: React.ReactNode }) {
  return <div className={outfit.className}>{children}</div>;
}
