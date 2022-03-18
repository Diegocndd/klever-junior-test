import './styles.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Text from '../../components/Text';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';

import { ReactComponent as LogoKlever } from '../../assets/img/logo.svg';

function AddToken() {
  const navigate = useNavigate();
  const [tokenValue, setTokenValue] = useState('');
  const [balanceValue, setBalanceValue] = useState('');

  const saveToken = () => {
    console.log('kkk')
  };

  return (
    <div id='main-container'>
      <LogoKlever width={180} />

      <Header onPressButton={() => navigate('/')} />
      
      <div id='txt-token-add-container'>
        <Text size={30} bold>Add Token</Text>
      </div>

      <Input textInput='Token' onChangeText={setTokenValue} />

      <Input textInput='Balance' onChangeText={setBalanceValue} />

      <div id='save-button-container'>
        <Button
          colorButton='#a935b4'
          text='Save'
          onPress={() => saveToken()}
          size='large'
          boldText
        />
      </div>

    </div>
  );
}

export default AddToken;
