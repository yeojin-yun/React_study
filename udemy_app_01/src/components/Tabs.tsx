import Section from './Section';
type ButtonsContainerType =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<any>;

interface TapsProps {
  children: React.ReactNode;
  buttons: React.ReactNode;
  buttonsContainer?: ButtonsContainerType;
}

export default function Tabs({
  children,
  buttons,
  buttonsContainer = 'menu',
}: // buttonsContainer = Section,
TapsProps) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
