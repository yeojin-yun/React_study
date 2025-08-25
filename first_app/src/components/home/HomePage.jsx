import { useState } from "react";
import Card from "./Card";
import ConditionalComponent from "./ConditionComponent";
import ConditionFirst from "./ConditionFirst";
import DoubleComponent from "./DoubleComponent";

function HomePage() {
  const { isLoggedIn, setLogin } = useState(false);

  const handleLogin = () => {
    setLogin(!isLoggedIn);
  };
  return (
    <div>
      <Card></Card>
      <DoubleComponent></DoubleComponent>
      <ConditionalComponent></ConditionalComponent>
      <ConditionFirst isLoggedIn={isLoggedIn}></ConditionFirst>
    </div>
  );
}
export default HomePage;
