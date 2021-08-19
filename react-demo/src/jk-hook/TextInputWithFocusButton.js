
import {useRef} from 'react'
export function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // current 属性指向了真实的 input 这个 DOM 节点，从而可以调用 focus 方法
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }