import React from 'react';

import Toast from 'react-native-toast-message';

function App() {
  React.useEffect(() => {
    Toast.show({
      text1: 'Hello',
      text2: 'Some other text',
    });
  }, []);

  return (
    <>
      <Toast ref={(ref) => Toast.setRef(ref)} topOffset={50} />
    </>
  );
}

export default App;
