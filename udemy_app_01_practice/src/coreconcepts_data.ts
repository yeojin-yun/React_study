import componentsImage from "./assets/components.png";
import jsxImage from "./assets/jsx-ui.png";
import propsImage from "./assets/config.png";
import stateImage from "./assets/state-mgmt.png";

export interface CoreConceptType {
  image: string;
  title: string;
  description: string;
};

export const CORE_CONCEPTS: CoreConceptType[] = [
  {
    image: componentsImage,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImage,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImage,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImage,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];
