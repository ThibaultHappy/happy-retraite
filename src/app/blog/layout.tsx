import { ReactNode } from "react";
import BlogStickyBanner from "@/components/BlogStickyBanner";
import BlogMidCTAInjector from "@/components/BlogMidCTAInjector";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <BlogStickyBanner />
      <BlogMidCTAInjector />
    </>
  );
}
