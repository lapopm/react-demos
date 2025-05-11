import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("useEffect is running");
  }, []);

  return <div>BasicEffect</div>;
};

export default BasicEffect;
