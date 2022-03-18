import './styles.css';
import { useState } from 'react';

import Text from '../Text';
import Button from '../Button';

import { ReactComponent as LogoStar } from '../../assets/img/shooting-star.svg';
import { useLocation } from 'react-router-dom';

import colors from '../../constants/colors';
import texts from '../../constants/texts';

function Header(props) {
  const location = useLocation();

  const {onPressButton} = props;
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const rightButton = () => {
    switch (currentPage) {
      case '/':
        return (
          <Button
            colorButton={colors.SAVE_BUTTON}
            text={texts.ADD_TOKEN}
            onPress={() => onPressButton()}
            boldText
          />
        )
      
      default:
        return (
          <Button
            colorButton={colors.BACK_BUTTON}
            text={texts.LABEL_BACK}
            onPress={() => onPressButton()}
            size='large'
            boldText
          />
        );
    }
  }

  return (
    <div id='header-container'>
      <div id='wallet-container'>
        <LogoStar id='logo-star' fill={colors.LOGO_START} />

        <Text size={25} bold>
            {texts.WALLET_NAME}
        </Text>
      </div>

      {rightButton()}
    </div>
  );
}
  
export default Header;
  