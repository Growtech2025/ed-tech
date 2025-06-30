import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import CourseApp from './components/CourseApp';

function App() {
  return (
    <Provider store={store}>
      <CourseApp />
    </Provider>
  );
}

export default App;