import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('El componente App se renderiza correctamente', () => {
    render(<App />);
});
