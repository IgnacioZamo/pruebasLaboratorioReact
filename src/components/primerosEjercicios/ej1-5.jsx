import React, { useRef } from 'react';

const Ej1_5 = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
    inputRef.current.style.border = '2px solid blue';

    };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Enfocar Input</button>
    </div>
  );
};

export default Ej1_5;