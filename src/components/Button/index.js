import './styles.css';

function Button(props) {
  const {
    text = '',
    colorButton,
    fontSize = 15,
    colorText = 'white',
    onPress,
    boldText = false,
    size,
  } = props;

  return (
    <div
      id='base-button'
      onClick={() => onPress()}
      style={{
        backgroundColor: colorButton,
        padding: size === 'large' ? '9px 35px 9px 35px' : '8px 15px 8px 15px',
      }}
    >
      <p style={{fontSize, color: colorText, fontWeight: boldText ? 'bold' : 'normal'}}>
        {text}
      </p>
    </div>
  );
}
  
export default Button;
  