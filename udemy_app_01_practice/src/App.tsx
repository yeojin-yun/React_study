import './index';

import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButtons from './components/TabButtons';

export default function App() {
  return (
    <>
      <Header />
      <hr />
      <main>
        <CoreConcepts />
        <TabButtons />
      </main>
    </>
  );
}
