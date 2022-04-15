const Box = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return (
    <div className={`box ${className}`}>
      <p className="para">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box name="small" className="small" />
      <Box name="medium" className="medium" />
      <Box name="large" className="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
