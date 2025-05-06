const Greeting = () => {
  const name = "John";
  const date = new Date().toString();
  const isMorning = date.includes("AM") ? "Good Morning" : "Good Evening";

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>{ date } {isMorning}</p>
    </div>
  );
};

export default Greeting;
