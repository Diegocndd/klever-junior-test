import './styles.css';

import Text from "../Text";
import Button from "../Button";

import { FiAlertCircle } from "react-icons/fi";

import colors from "../../constants/colors";
import texts from '../../constants/texts';

function Alert(props) {
  const {
    message,
    typeAlert,
    showAlert,
    onPressButton1,
    onPressButton2,
  } = props;

  return (
    <div id='screen-container' style={{display: showAlert ? 'flex' : 'none'}}>
      <div id='alert-container'>
        <div id='alert-content'>
          <FiAlertCircle
            color={colors.ALERT_ICON}
            size={100}
            id='icon-alert'
          />

          <Text color={colors.ALERT_TEXT} bold>{message}</Text>
          
          {typeAlert === 'warning' ? (
            <div id='single-button-alert'>
              <Button
                colorButton={colors.CONFIRMATION_BUTTON}
                text='OK'
                onPress={() => onPressButton1()}
                size='large'
                boldText
              />
            </div>
          ) : (
            <div id='buttons-container'>
              <Button
                colorButton={colors.CANCEL_BUTTON}
                text={texts.LABEL_CANCEL}
                onPress={() => onPressButton1()}
                size='large'
                boldText
              />
              <Button
                colorButton={colors.CONFIRMATION_BUTTON}
                text={texts.LABEL_CONFIRMATION}
                onPress={() => onPressButton2()}
                size='large'
                boldText
              />
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
  
export default Alert;
  