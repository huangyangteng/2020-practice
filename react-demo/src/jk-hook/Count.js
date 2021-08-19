import React, { useState, useCallback, useEffect } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [no, setNo] = useState(0);

  //该组件的某个状态变化，整个Count函数就会重新执行一次，所以handleIncrement就会重新渲染一次
  //useCallback(fn, deps)
  const handleIncrement1 = useCallback(() => {
    setCount(count + 1);
    setNo(Math.random());
  }, [count]);

  return (
    <button onClick={handleIncrement1}>
      add {count} {no}
    </button>
  );
}
