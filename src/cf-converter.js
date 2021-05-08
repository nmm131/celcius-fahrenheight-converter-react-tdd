import { useState } from "react";

function ConvertCtoF() {
  const [conversion, setConversion] = useState("");

  const onInput = (e) => {
    e.preventDefault();
    completeComputation(e.target.value);
  };

  const completeComputation = (celsiusStr) => {
    const cValue = Number(celsiusStr);

    if (isNaN(cValue)) {
      setConversion(`n/a`);
    } else if (celsiusStr === ""){
        setConversion('');
    } else {
      let ans = 0;
      ans = (9 / 5) * cValue + 32;
      setConversion(`${ans}`);
    }
  };

  return (
    <>
      <textarea name="input" onChange={onInput}></textarea>
      <div role="status">{conversion}</div>
    </>
  );
}

export default ConvertCtoF;
