interface SectionProp extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: string;
}

export function Section({ title, children, ...props }: SectionProp) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
