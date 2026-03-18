import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </section>
  );
}
