interface GreetingProps {
  timeOfDay: string;
}

const Greeting = ({timeOfDay}: GreetingProps) => {
  return (
    <div>
       {timeOfDay === "morning" ? <p>Good Morning</p> : timeOfDay === "afternoon" ? <p>Good Afternoon</p> : timeOfDay === "evening" ? <p>Good Evening</p> : <p>Hello</p>}
    </div>
  )
}

export default Greeting