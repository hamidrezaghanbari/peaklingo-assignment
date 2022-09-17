import { useContext } from "react";
import styled from "styled-components";
import { CounterContext } from "../context";
import type { CounterContextType } from "../context/@types";

const Button = styled.button`
  margin-right: 10px;
`;

const Wrapper = styled.div`
  padding: 3rem 0;
`;

export const Body = () => {
  const { resetCounter, counter } = useContext(
    CounterContext
  ) as CounterContextType;

  return (
    <Wrapper>
      <Button onClick={() => resetCounter()}>start count down</Button>
      <b>
        count down is now {counter.time} second{counter.time > 1 && "s"}
      </b>
    </Wrapper>
  );
};
