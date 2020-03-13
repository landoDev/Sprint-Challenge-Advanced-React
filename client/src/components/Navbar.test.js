import React from 'react';
import { render, fireEvent, getByTestId, queryByPlaceholderText } from "@testing-library/react";
import Navbar from './Navbar';


test('Navbar renders to page correctly', ()=>{
  const {getByText} = render(<Navbar />);
  getByText(/dark mode/i)
});

test('dark mode toggles', ()=>{
    const {queryByPlaceholderText, getByPlaceholderText} = render(<Navbar/>)
    const darkModeButtonOff = queryByPlaceholderText(/off/i);
    fireEvent.click(darkModeButtonOff)
    getByPlaceholderText(/on/i)
    
    const darkModeButtonOn = queryByPlaceholderText(/on/i);
    fireEvent.click(darkModeButtonOn)
    getByPlaceholderText(/off/i)
    

})