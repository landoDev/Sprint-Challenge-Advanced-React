import React from 'react';
import { render } from "@testing-library/react";
import Navbar from './Navbar';


test('Navbar renders to page correctly', ()=>{
  const {getByText} = render(<Navbar />);
  getByText(/dark mode/i)
  
});
