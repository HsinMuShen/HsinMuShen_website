import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-slate sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>Photography, sketches, and digital craft.</p>
      </div>
    </footer>
  );
}
