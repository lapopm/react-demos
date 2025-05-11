const StyledCard = () => {
  const styles = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "10px",
    color: "darkblue",
  };
  return (
    <div style={styles}>
      <h2>Styled Card</h2>
      <p>This is a styled card component.</p>
    </div>
  );
};

export default StyledCard;
