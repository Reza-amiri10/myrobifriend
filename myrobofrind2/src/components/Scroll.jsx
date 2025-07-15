function Scroll(props) {
  return (
    <div
      style={{
        overflowX: "scroll",
        border: "1px solid black",
        margin_top: "180px",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
