import { Outfit } from "next/font/google";
import AvnLpLeadConversion from "@/components/AvnLpLeadConversion";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function AvnLpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={outfit.className}>
      <AvnLpLeadConversion />
      {children}
    </div>
  );
}
