import TabButton from './TabButton';
import { useState } from 'react';
import { Examples, EXAMPLES } from '../example';
import Section from './Section';
import Tabs from './Tabs';

type Topic = keyof Examples;

export default function TabButtons() {
  const [selectedTopic, setSeletedTopic] = useState<Topic | ''>('');

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleClick(selectedButton: Topic) {
    //
    console.log(`button click ${selectedButton}`);
    setSeletedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        // buttonsContainer="menu"
        // buttonsContainer={Section}
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleClick('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleClick('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleClick('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleClick('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
