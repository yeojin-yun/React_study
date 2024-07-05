
interface CoreConceptsProps {
    image: string;
    title: string;
    description: string;
  }
export default function CoreConcepts({title, image, description}: CoreConceptsProps) {
    return (
      <li>
        <img src = {image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }