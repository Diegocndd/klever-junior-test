import './styles.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Text from '../../components/Text';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Alert from '../../components/Alert';

import { ReactComponent as LogoKlever } from '../../assets/img/logo.svg';

import isRepeatedToken from '../../utils/isRepeatedToken';
import colors from '../../constants/colors';
import texts from '../../constants/texts';

function AddToken() {
  const navigate = useNavigate();
  const [tokenValue, setTokenValue] = useState('');
  const [balanceValue, setBalanceValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const [tokens, setTokens] = useState(JSON.parse(localStorage.getItem('wish-tokens')));

  const saveToken = () => {
    if (!isRepeatedToken(tokenValue)) {
      let newTokens = [...tokens];
      newTokens.push({token: tokenValue, balance: balanceValue});
      localStorage.setItem('wish-tokens', JSON.stringify(newTokens));
      navigate('/');
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div id='main-container'>
      <Alert 
        message={texts.REPEATED_TOKEN}
        onPressButton1={() => setShowAlert(false)}
        typeAlert='warning'
        showAlert={showAlert}
      />

      <LogoKlever width={180} />

      <Header onPressButton={() => navigate('/')} />

      <div id='tokenadd-content'>
        <div id='txt-token-add-container'>
          <Text size={30} bold>{texts.ADD_TOKEN}</Text>
        </div>

        <Input
          textInput={texts.LABEL_TOKEN}
          onChangeText={setTokenValue}
        />

        <Input
          textInput={texts.LABEL_BALANCE}
          onChangeText={setBalanceValue}
        />

        <div id='save-button-container'>
          <Button
            colorButton={colors.SAVE_BUTTON}
            text={texts.LABEL_SAVE}
            onPress={() => saveToken()}
            size='large'
            boldText
          />
        </div>
      </div>
    </div>
  );
}

export default AddToken;
