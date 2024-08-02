// src/components/__tests__/Card.test.tsx
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../Card';
import { CardProp } from '../../../types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockCardProps: CardProp = {
  id: 1,
  model: 'Model S',
  make: 'Tesla',
  year: 2020,
  price: 79999,
  images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
};

describe('Card Component', () => {
  it('renders correctly with given props', () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <Card {...mockCardProps} />
      </BrowserRouter>
    );

    expect(getByText('Model S')).toBeInTheDocument();
    expect(getByText('Tesla')).toBeInTheDocument();
    expect(getByText('2020')).toBeInTheDocument();
    expect(getByText('R$ 79.999,00')).toBeInTheDocument();
    expect(getByAltText('Model S')).toBeInTheDocument();
  });

  it('calls navigate function on card click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Card {...mockCardProps} />
      </BrowserRouter>
    );

    fireEvent.click(getByText('Model S'));

    expect(mockNavigate).toHaveBeenCalledWith('/car/1');
  });
});
