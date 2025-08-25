import React from 'react';
interface ChildTestProps {
    children: React.ReactNode;
}
function ChildListComponent({ children }: ChildTestProps) {
  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
}

function Parent() {
  return (
    <ChildListComponent>
      <p>Child 1</p>
      <p>Child 2</p>
      <p>Child 3</p>
    </ChildListComponent>
  );
}

export default Parent;
