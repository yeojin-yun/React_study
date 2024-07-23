import { CoreConceptType } from '../coreconcepts_data';

export default function CoreConcept({
  title,
  image,
  description,
}: CoreConceptType) {
  return (
    <li>
      <h4>{title}</h4>
      <img src={image} alt={title} />
      <p>{description}</p>
    </li>
  );
}
