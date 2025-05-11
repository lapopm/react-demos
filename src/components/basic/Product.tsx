interface ProductProps {
  name: string;
  price: number;
}

const Product = ({ name, price }: ProductProps) => {
  return (
    <div>
      <h2>{name} </h2>
      <p>￥{price}</p>
    </div>
  );
};

export default Product;
