import '@testing-library/jest-dom';

import { Provider } from 'react-redux';

import { render } from '@testing-library/react';

import {
  pickCity, Getweather,
} from '../redux/weather';
import store from '../redux/configureStore';
import App from '../App';

describe('test pure functions', () => {
  test('App component to render', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('test the type of Getweather function', async () => {
    const data = await Getweather();
    expect(data).toBeInstanceOf(Function);
    expect(data.payload).not.toBeNull();
  });
  test('test of Pickcity function', () => {
    const data = pickCity('Paris');
    expect(data).toBeInstanceOf(Object);
    expect(data).not.toBeNull();
    expect(data.payload).toEqual('Paris');
  });
});
