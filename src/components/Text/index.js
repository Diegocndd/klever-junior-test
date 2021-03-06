function Text(props) {
  const {
    children,
    size = 20,
    color = 'white',
    bold = false,
    align = 'center',
  } = props;

  return (
    <div>
      <p style={{fontSize: size, color, fontWeight: bold ? 'bold' : 'normal', textAlign: align, maxWidth: 400}}>
        {children}
      </p>
    </div>
  );
}

export default Text;
