import { Examples, ExampleType } from '../examples_data';
import { useState } from 'react';
import TabButton from './TabButton';
import { Section } from './Section';

type Topic = keyof ExampleType;

export default function TabButtons() {
  const [selectedTopic, setSeletecTopic] = useState<Topic>('components');

  function handleClick(topic: Topic) {
    console.log(topic);
    setSeletecTopic(topic);
  }

  let tabContent = <p>Please select topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="examples-content">
        <h6>{Examples[selectedTopic].title}</h6>
        <p>{Examples[selectedTopic].description}</p>
        <code>{Examples[selectedTopic].code}</code>
      </div>
    );
  }

  return (
    <>
      <Section title="Examples">
        <menu id="examples">
          <TabButton onClick={() => handleClick('components')}>
            components
          </TabButton>
          <TabButton onClick={() => handleClick('jsx')}>jsx</TabButton>
          <TabButton onClick={() => handleClick('props')}>props</TabButton>
          <TabButton onClick={() => handleClick('state')}>state</TabButton>
        </menu>
        {tabContent}
      </Section>
    </>
  );
}
