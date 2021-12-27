import "./styles.css";
import {
  atom,
  useRecoilState,
  useResetRecoilState,
  selector,
  useRecoilValue
} from "recoil";
import Component from "./Component";
import Democomponent from "./Democomponent";

export const atomValue = atom({
  key: "atom-value",
  default: 2
});

export const atomSelector = selector({
  key: "atom-selector",
  get: ({ get }) => {
    const atomVariable = get(atomValue);
    return atomVariable;
  }
});

export default function App() {
  const [value, setValue] = useRecoilState(atomValue);
  const resetValue = useResetRecoilState(atomValue);
  const selectorValue = useRecoilValue(atomSelector);
  return (
    <>
      <div className="App">
        <h2>Recoil</h2>
        <h2>Variable {value}</h2>
        <button
          onClick={() => {
            setValue(value + 1);
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

        <Democomponent />
      </div>
    </>
  );
}
