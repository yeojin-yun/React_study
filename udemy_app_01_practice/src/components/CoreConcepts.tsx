import { CORE_CONCEPTS } from '../coreconcepts_data';
import CoreConcept from './CoreConcept';
import { Section } from './Section';

export default function CoreConcepts() {
  return (
    <div id="core-concepts">
      <Section title="Core Concepts" id="testId">
        {
          <ul>
            {CORE_CONCEPTS.map(element => (
              <CoreConcept key={element.title} {...element} />
            ))}
          </ul>
        }
      </Section>
    </div>
  );
}
