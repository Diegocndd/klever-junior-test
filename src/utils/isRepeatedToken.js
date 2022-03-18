const isRepeatedToken = (newToken) => {
  const tokensData = JSON.parse(localStorage.getItem('wish-tokens'));

  for (let i = 0; i < tokensData.length; i++) {
    if (tokensData[i].token.toUpperCase() === newToken.toUpperCase()) {
      return true;
    }
  }

  return false;
}

export default isRepeatedToken;
