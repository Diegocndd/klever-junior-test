import './styles.css';

import Text from '../Text';

function Input(props) {
  const {textInput, valueInput, onChangeText} = props;

  const handleChange = (event) => {
    onChangeText(event.target.value);
  }

  return (
    <div id='input-container'>
      <Text size={17} bold>{textInput}</Text>
      <input id='input-element' type='text' value={valueInput} onChange={handleChange} />
    </div>
  );
}
  
export default Input;
