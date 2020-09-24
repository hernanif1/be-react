import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {App} from './App';

const beersMock = [{id:"1"}]
jest.mock("../../services/beers", () => ({
  beers: ()=> beersMock
}))

describe("APP" , ()=>{
  test('should show loading and button', () => {
    const {  getByText, getByTestId } = render(<App />);
    getByText(/loading.../i);
    getByTestId("button-beer");
  });
  
  test('should show api call results and not display loading', async() => {
   const {  findByTestId, debug, rerender } = render(<App />);
   const button =  await findByTestId("button-beer");
   await fireEvent.click(button)
   debug()
   expect(beersMock).toBeCalledWith({id:1})
   // queryAllByText(/loading.../i);
   // getByTestId("button-beer");
  });

})
