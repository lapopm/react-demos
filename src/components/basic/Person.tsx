interface PersonProps {
  name: string;
  age: number;
}

const Person = ({ name, age }: PersonProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
};

export default Person;
