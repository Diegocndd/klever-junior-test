import './styles.css';
import { useState } from 'react';

import Text from '../Text';
import Button from '../Button';

import { ReactComponent as LogoStar } from '../../assets/img/shooting-star.svg';
import { useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();

  const {onPressButton} = props;
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const rightButton = () => {
    switch (currentPage) {
      case '/':
        return (
          <Button
            colorButton='#a935b4'
            text='Add Token'
            onPress={() => onPressButton()}
            boldText
          />
        )
      
      case '/add-token':
        return (
          <Button
            colorButton='#646464'
            text='Voltar'
            onPress={() => onPressButton()}
            boldText
          />
        )

      default:
        break;
    }
  }

  return (
    <div id='header-container'>
      <div id='wallet-container'>
        <LogoStar id='logo-star' fill='#e1e666' />

        <Text size={25} bold>
            Wish Wallet
        </Text>
      </div>

      {rightButton()}
    </div>
  );
}
  
export default Header;
  