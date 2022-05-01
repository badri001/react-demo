export const ClickHandler = () => {
  const cliked = (event, count = 1) => {
    console.log("Button clicked",count, event);
  };
  return (
    <div>
      <button onClick={cliked}>Click Me</button>
      <button onClick={(event) => cliked(event, 5)}>Clicki5</button>
    </div>
  );
};
