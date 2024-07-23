interface TabButtonProp extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
export default function TabButton({ children, ...props }: TabButtonProp) {
  return (
    <li id="examples">
      <button {...props}>{children}</button>
    </li>
  );
}
