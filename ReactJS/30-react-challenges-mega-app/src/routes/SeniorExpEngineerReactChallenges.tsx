import { useState } from "react";
import ReusableReactDropdown from "../components/SeniorEngineerReactComponents/ReusableReactDropdown";
import FetchProducts from "../components/SeniorEngineerReactComponents/FetchProducts";
import PokeCache from "../components/SeniorEngineerReactComponents/PokeCache";
import CardComponent from "../components/SeniorEngineerReactComponents/CardComponent";
import Form from "../components/SeniorEngineerReactComponents/Form";

const questions = [
  {
    id: 1,
    title: "Reusable react dropdown with typeahead",
    desc: "Reusablee react dropdown with type-ahead functionality, should be able to take array of strings or array of objects with support for custom label and value when using object, Additionally the component should be able to fetch the data from fakestoreapi.com/products?sort=asc and display the list of product titles in the dropdown. should provide seamless experience when searching and selecting items.",
    content: <ReusableReactDropdown />,
  },
  {
    id: 2,
    title:
      "Fetch products then based on ID fetch their details for every product",
    desc: "An application that consumes https://fakestoreapi.com/carts/2 and display a list of products in the cart. For each product in the cart the app should make a  call to fetch the product details using id in the card api and display the product title, price and image. Note: https://fakestoreapi.com/products/:id, returns for single product. Need to make this call for each product in the cart to fetch the product dtails. And then implement sorting in the application",
    content: <FetchProducts />,
  },
  {
    id: 3,
    title: "PokeCache",
    desc: "use the poke api fetch pokemon show a dropdown list of pokemon, when selecting any pokemon fetch its details using the providd url. and dispaly abilities. at last cache dtails so that selecting the same pokemon again won't trigger another api call. read about browser side caching",
    content: <PokeCache />,
  },
  {
    id: 4,
    title: "CardComponent",
    desc: "Create a card component, display title, price on the right and image on the left. cards to be displayed in the column wise. Design pattern on this same question",
    content: <CardComponent />,
  },
  {
    id: 5,
    title: "Form",
    desc: "Create a registration form that has fields like textinput, dropdown and radio button. When submitting the form need to get all the data that entered in the form fields using Form Data API",
    content: <Form />,
  },
];

const SeniorExpEngineerReactChallenges = () => {
  const [expandedQuestionId, setExpandedQuestionId] = useState(0);

  return (
    <div className="p-5 text-amber-50 bg-slate-800">
      <button
        className="cursor-pointer border-amber-50 rounded-md border px-4 py-2 mb-2"
        onClick={() => setExpandedQuestionId(0)}
      >
        Collapse all
      </button>
      <ul>
        {questions.map(({ id, title, content }) => (
          <li
            key={id}
            onClick={() => setExpandedQuestionId(id)}
            className="px-4 py-2 border border-amber-50 rounded-md mb-2 cursor-pointer"
          >
            <span>{title}</span>
            {id === expandedQuestionId && <div>{content}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeniorExpEngineerReactChallenges;
/*

-> custom hook that can able to get, remove and set the value in the local storage.

-> fetch data from https://swapi.py4e.com/api/people/, display it in table with name, file and vehicle as table column header. if you open the above url, filem and vehicle are again URL, we have to fetch data and display film and behicle with comma separated value and at last implement paginaton: solution to this problem already at: https://codesandbox.io/p/sandbox/test2-vryn85

-> vanilla js app to fetch cart data from fakestore api for each product make call to fetch the prouct details b ID in parallel. display the ttle price and image for each product 

-> create custom hook and react context implementation implement search debouncing. https://rickandmortyapi.com/apicharacter/name=ein fetch character details and show them in card view it will have multiple episodes in this with episode id from the below api fetch the names of episodes and render them in the same card https:/rickandmortyapi.com/api/episode/12

-> create a component for Sale snackbars: two inputs first for item name second for sale duration in seconds and a button to submit. Once the values are entered and submitted a snackbar is added below the inputs for the time that was entered and the name and countdown of the duration should be visible on the snack bar. further items added are sorted in the list such that the item which has shortest duration should be on the top of the screen.

-> polyfill for promise.all

-> Create a generic function in typescript

-> Create and use mixins? write syntax

-> Timer with start, stop and pause with minutes and seconds

-> Generate performance metrics for reddit.com

-> bundles, webpack and vite

-> vite vs webpack how it makes developer life easier main advantage of using it

-> design patterns HOC, custom hooks, render props all explain in detail with one use case.

-> react rendering process questions

-> picture tag rem ^nbsp;  radio css animation css extend vs includes 

-> cookies, session and local storage

Q) how would you allocate 100mb memory for your web app
A) In JavaScript, I can't directly ask the browser to reserve 100 MB like I could with malloc in C or new in C++. Memory is allocated automatically as objects, arrays, or buffers are created. If I specifically needed roughly 100 MB—for example, to hold binary data—I would allocate an ArrayBuffer of that size.

const buffer = new ArrayBuffer(100 * 1024 * 1024); // 100 MB

Q) Difference b/w type and interfaces 
A)

Q) critical rendering path, web vitals, DDOS man in the middle, static tools used in your project
A)

*/
