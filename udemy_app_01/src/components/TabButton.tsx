interface TabButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  isSelected: Boolean;
}
export default function TabButton({
  children,
  isSelected,
  ...props
}: TabButtonProps) {
  console.log(`children : ${children}`);
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
