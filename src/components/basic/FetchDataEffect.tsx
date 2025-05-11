import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function getSomeData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      if (data && data.length) setLists(data);
    }

    getSomeData();
  });
  return (
    <div>
      {lists.map((l) => (
        <div key={l.id} style={{borderRadius: '3px',backgroundColor: 'gray'}}>
          <h1>title:{l.title}</h1> <p>body:{l.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchDataEffect;
 