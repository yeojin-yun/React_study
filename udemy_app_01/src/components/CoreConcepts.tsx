import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';
import Section from './Section';

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map(concepItem => (
          <CoreConcept key={concepItem.title} {...concepItem} />
        ))}
      </ul>
    </Section>
  );
}
