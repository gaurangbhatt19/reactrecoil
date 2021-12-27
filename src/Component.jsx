import {
  atom,
  useRecoilState,
  useResetRecoilState,
  selector,
  useRecoilValue
} from "recoil";
import { atomSelector, atomValue } from "./App";

export default function Component() {
  const value = useRecoilValue(atomSelector);
  const [variable, setVariable] = useRecoilState(atomValue);
  const resetValue = useResetRecoilState(atomValue);

  return (
    <>
      <h2>Value {value} </h2>
      <button
        onClick={() => {
          setVariable(variable + 1);
        }}
      >
        Variable
      </button>
      <button
        onClick={() => {
          resetValue();
        }}
      >
        Reset
      </button>
    </>
  );
}
