import './styles.css'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Alert from '../../components/Alert';

import { ReactComponent as LogoKlever } from '../../assets/img/logo.svg';

import colors from '../../constants/colors';
import texts from '../../constants/texts';

const getBalanceFromToken = (tkn) => {
  const tokensData = JSON.parse(localStorage.getItem('wish-tokens'));

  for (let i = 0; i < tokensData.length; i++) {
    if (tokensData[i].token === tkn) {
      return tokensData[i].balance;
    }    
  }

  return NaN;
}

function EditToken() {
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search);
  const oldToken = queryParams.get('token');
  const [tokenNewValue, setTokenNewValue] = useState(queryParams.get('token'));
  const [balanceNewValue, setBalanceNewValue] = useState(getBalanceFromToken(tokenNewValue));
  const [tokens, setTokens] = useState(JSON.parse(localStorage.getItem('wish-tokens')));
  const [showAlert, setShowAlert] = useState(false);

  const editToken = () => {
    let newTokens = [...tokens];

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].token === oldToken) {
        tokens[i].token = tokenNewValue;
        tokens[i].balance = balanceNewValue;
        break;
      }      
    }

    localStorage.setItem('wish-tokens', JSON.stringify(newTokens));
    navigate('/');
  };

  const removeToken = () => {
    let newTokens = [...tokens];

    newTokens = newTokens.filter(item => {
      if (item.token !== tokenNewValue) {
        return item;
      }
    });

    localStorage.setItem('wish-tokens', JSON.stringify(newTokens));
    navigate('/');
  };

  return (
    <div id='main-container'>
      <LogoKlever width={180} />

      <Header onPressButton={() => navigate('/')} />

      <Alert 
        message={texts.REMOVE_TOKEN}
        onPressButton1={() => setShowAlert(false)}
        onPressButton2={() => removeToken()}
        typeAlert='confirmation'
        showAlert={showAlert}
      />

      <div id='tokenadd-content'>
        <div id='txt-token-add-container'>
          <Text size={30} bold>{texts.EDIT_TOKEN}</Text>
        </div>

        <Input
          textInput={texts.LABEL_TOKEN}
          valueInput={tokenNewValue}
          onChangeText={setTokenNewValue}
        />

        <Input
          textInput={texts.LABEL_BALANCE}
          valueInput={balanceNewValue}
          onChangeText={setBalanceNewValue}
        />

        <div id='edit-button-container'>
          <Button
            colorButton={colors.REMOVE_BUTTON}
            text={texts.LABEL_REMOVE}
            onPress={() => setShowAlert(true)}
            size='large'
            boldText
          />
          <Button
            colorButton={colors.SAVE_BUTTON}
            text={texts.LABEL_SAVE}
            onPress={() => editToken()}
            size='large'
            boldText
          />
        </div>
      </div>
    </div>
  );
}

export default EditToken;
