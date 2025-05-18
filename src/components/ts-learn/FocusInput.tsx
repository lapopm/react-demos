import { useRef } from "react";

const FocusInput = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    function hadleClick() {
        inputRef.current?.focus()
    }

  return (
    <form>
      <input type="text" placeholder="type your name" ref={inputRef} />
      <button onClick={hadleClick}>Submit</button>
    </form>
  );
};

export default FocusInput;
