import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import CartItem from '../components/CartItem';

test('renders CartItem component with correct props', () => {
  const item = {
    id: 1,
    title: 'Test Product',
    price: 20.99,
    image: 'test-image.jpg',
  };

  const { getByText } = render(
    <Provider store={store}>
      <CartItem item={item} />
    </Provider>
  );

  const titleElement = getByText(item.title);
  const priceElement = getByText(`$${item.price}`);

  expect(titleElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});
