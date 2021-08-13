import React from 'react';
import {useDispatch} from 'react-redux';
import {getDataAction} from './actions/data.action';
import CustomComponent from './components/CustomComponent';

// eslint-disable-next-line require-jsdoc
function App(): JSX.Element {
  const dispatch = useDispatch();

  const clickHandle = () => {
    dispatch(getDataAction([4, 5, 6]));
  };

  return (
    <div className='App'>
      this is react app for SULPAK MF
      <button type='button' onClick={clickHandle}>
        click me
      </button>
      <CustomComponent />
    </div>
  );
}

export default App;
