import './styles.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Text from '../../components/Text';
import Header from '../../components/Header';

import { ReactComponent as LogoKlever } from '../../assets/img/logo.svg';
import { FaEdit } from "react-icons/fa";

import mockTokens from '../../utils/mockTokens';
import numberWithCommas from '../../utils/numberCommas';

function Home() {
  const navigate = useNavigate();
  const [tokens, setTokens] = useState(JSON.parse(localStorage.getItem('wish-tokens')));

  useEffect(() => {
    if (!localStorage.getItem('wish-tokens')) {
      localStorage.setItem('wish-tokens', JSON.stringify(mockTokens));
    }
  }, [localStorage.getItem('wish-tokens')]);

  return (
    <div id='main-container'>
      <LogoKlever width={180} />

      <Header onPressButton={() => navigate('add-token')} />

      <div id='table-container'>
        <table>
          <tr>
            <th className='fst-column-table'>
              {' '}
            </th>

            <th className='snd-column-table'>
              <Text size={15} bold align='left'>
                Tokens
              </Text>
            </th>

            <th className='thd-column-table'>
              <Text size={15} bold align='right'>
                Balance
              </Text>
            </th>
          </tr>

          {tokens?.map(item => {
            return (
              <tr>
                <th className='fst-column-table' onClick={() => navigate(`/edit-token?token=${item.token}`)}>
                  <FaEdit color='white' size={17} />
                </th>
                <th className='snd-column-table'>
                  <Text size={30} bold align='left'>
                    {item.token}
                  </Text>
                </th>
                <th className='thd-column-table'>
                  <Text size={30} bold align='right'>
                    {numberWithCommas(item.balance)}
                  </Text>
                </th>
              </tr>
            )
          })}

        </table>
      </div>
    </div>
  );
}

export default Home;
