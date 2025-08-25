import styled from "@emotion/styled/macro";

const GreetingStyle = styled.h1`
    font-size: large;
    color: white;
`

function Greeting({ name }) {
  return <GreetingStyle>안녕하세요, {name}님! </GreetingStyle>
}

export default Greeting;