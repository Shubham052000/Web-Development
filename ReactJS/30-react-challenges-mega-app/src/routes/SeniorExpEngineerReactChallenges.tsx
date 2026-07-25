import { useState } from "react";
import ReusableReactDropdown from "../components/SeniorEngineerReactComponents/ReusableReactDropdown";
import FetchProducts from "../components/SeniorEngineerReactComponents/FetchProducts";
import PokeCache from "../components/SeniorEngineerReactComponents/PokeCache";
import CardComponent from "../components/SeniorEngineerReactComponents/CardComponent";
import Form from "../components/SeniorEngineerReactComponents/Form";
import UseLocalStorageExample from "../components/SeniorEngineerReactComponents/UseLocalStorageExample";
import RickAndMortyContextWithHookAndDebouncing, {
  ThemeContextProvider,
} from "../components/SeniorEngineerReactComponents/RickAndMortyContextWithHookAndDebouncing";
import LiveSaleSnackbar from "../components/SeniorEngineerReactComponents/LiveSaleSnackbar";
import TimerWithMinutesAndSeconds from "../components/SeniorEngineerReactComponents/TimerWithMinutesAndSeconds";

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
    title: "Poke Cache",
    desc: "use the poke api fetch pokemon show a dropdown list of pokemon, when selecting any pokemon fetch its details using the providd url. and dispaly abilities. at last cache dtails so that selecting the same pokemon again won't trigger another api call. read about browser side caching",
    content: <PokeCache />,
  },
  {
    id: 4,
    title: "Card Component",
    desc: "Create a card component, display title, price on the right and image on the left. cards to be displayed in the column wise. Design pattern on this same question",
    content: <CardComponent />,
  },
  {
    id: 5,
    title: "Registration Form with FormData API",
    desc: "Create a registration form that has fields like textinput, dropdown and radio button. When submitting the form need to get all the data that entered in the form fields using Form Data API",
    content: <Form />,
  },
  {
    id: 6,
    title: "useLocalStorage to get remove and sync value with LocalStorage",
    desc: "custom hook that can able to get, remove and set the value in the local storage.",
    content: <UseLocalStorageExample />,
  },
  {
    id: 7,
    title:
      "Rick And Morty character with episode, Context With Hook And Debouncing",
    desc: "create custom hook and react context implementation, implement search debouncing. https://rickandmortyapi.com/api/character/?name=ein fetch character details and show them in card view it will have multiple episodes in this with episode id from the below api fetch the names of episodes and render them in the same card https:/rickandmortyapi.com/api/episode/12",
    content: (
      <ThemeContextProvider>
        <RickAndMortyContextWithHookAndDebouncing />
      </ThemeContextProvider>
    ),
  },
  {
    id: 8,
    title: "Live Sale Snackbar",
    desc: "create a component for Sale snackbars: two inputs first for item name second for sale duration in seconds and a button to submit. Once the values are entered and submitted a snackbar is added below the inputs for the time that was entered and the name and countdown of the duration should be visible on the snack bar. further items added are sorted in the list such that the item which has shortest duration should be on the top of the screen.",
    content: <LiveSaleSnackbar />,
  },
  {
    id: 9,
    title: "Timer With Minutes And Seconds",
    desc: "Timer with start, stop and pause with minutes and seconds",
    content: <TimerWithMinutesAndSeconds />,
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
-> fetch data from https://swapi.py4e.com/api/people/, display it in table with name, file and vehicle as table column header. if you open the above url, filem and vehicle are again URL, we have to fetch data and display film and behicle with comma separated value and at last implement paginaton: solution to this problem already at: https://codesandbox.io/p/sandbox/test2-vryn85

-> vanilla js app to fetch cart data from fakestore api for each product make call to fetch the prouct details b ID in parallel. display the ttle price and image for each product 

-> polyfill for promise.all

-> Create a generic function in typescript

-> Create and use mixins? write syntax

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
A) Both type and interface are used to describe the shape of objects in TypeScript and provide compile-time type checking. For most object definitions, they are interchangeable. The key differences are that interfaces support declaration merging and are designed for extending object-oriented APIs, while types are more flexible because they can represent primitives, unions, intersections, tuples, and mapped types. My general rule is to use interfaces for public object contracts and types when I need TypeScript's advanced type features.

types can do union and intersection which interfaces can't intersection is achieved by extends keyword in interface also function types and mapped types can't be done in interfaces whereas interfaces support declaration merging that types don't


Q) Explain Critical Rendering Path, web vitals, DDOS man in the middle, static tools used in your project
A) Critical Rendering Path: The Critical Rendering Path is the sequence of steps the browser performs to convert HTML, CSS, and JavaScript into pixels on the screen.

  The faster this path completes, the faster users see the page.

  Path is as follows
  HTML Request -> HTML Parsed -> DOM Tree -> Download CSS -> Parse CSS -> CSSOM Tree -> CSSOM + DOM -> Render Tree -> Layout(Calculate Positions) -> Paint -> Composite

  The Critical Rendering Path is the sequence the browser follows to transform HTML, CSS, and JavaScript into pixels. It involves parsing HTML into the DOM, parsing CSS into the CSSOM, creating the render tree, calculating layout, painting, and compositing. Optimizing this path reduces the time to first render. In React applications, we optimize it using lazy loading, code splitting, preloading critical assets, minimizing render-blocking resources, and using SSR or streaming SSR when appropriate.

Web Vitals: Google metrics that measure user experience.
  
  i) Largest Contentful Paint (LCP)

    Measures loading performance.

    Usually

    Hero image
    Main heading
    Large banner

    Good < 2.5 sec

    Improve by

    CDN
    Image optimization
    preload
    SSR
    caching

  ii) Interaction to Next Paint (INP)

    Replaced FID. (First input delay)

    Measures responsiveness.

    Example

    User clicks
    ↓
    How quickly UI updates.

    Good < 200ms

    Improve by
    avoiding heavy JS
    memoization
    virtualization
    splitting long tasks
  
  iii) Cumulative Layout Shift (CLS)

    Measures layout movement.

    Bad
    Loading...
    ↓
    Image loads
    ↓
    Everything shifts

    Good < 0.1

    Improve by
    width/height on images
    reserve space
    avoid inserting ads dynamically
  
  iv) Other metrics
    FCP - First Contentful Paint
      First text/image appears.

    TTFB - Time To First Byte
      Measures server response.
  
  Core Web Vitals are user-centric performance metrics introduced by Google. LCP measures loading performance, INP measures responsiveness after user interactions, and CLS measures visual stability. In React projects we improve these through image optimization, lazy loading, code splitting, avoiding long-running JavaScript tasks, and reserving layout space for dynamic content.

  DDOS => Distributed Denial of Service.
    Thousands or millions of machines flood a server.

    Users
    ↓
    Server
    ↓
    1 million fake requests
    ↓
    Server crashes

    Protection
    Cloudflare
    AWS Shield
    CDN
    Rate Limiting
    WAF
    CAPTCHA

    React doesn't solve DDoS.

    Infrastructure does.

  MITM => Man In The Middle Attach
  Attacker intercepts communication.
  
  Without HTTPS
  Attacker can

  read passwords
  modify requests
  steal cookies

  Client
      ↓
  Attacker
      ↓
  Server

  Protection
    HTTPS
    TLS
    HSTS
    Certificate validation

  Frontend precautions
    never use HTTP APIs
    secure cookies
    HttpOnly
    SameSite
    CSP
  
Static Analysis tools: These check code without executing it.
  i) ESLint: helps find unused variables, bad react patterns and unused dependencies.
  ii) Prettier: Formatting: tabs, quotes and indentation
  iii) TypeScript: Compile time checking
  iv) Husky: Runs checks before commit. git commit -> lint -> tests -> commit
  v) SonarQube: Enterprise tool, used to detect bugs, code smells, duplication, vulnerability, complexiies.
  vi) lint-staged: only checks modified lines and files

  In most React projects, our static analysis pipeline includes ESLint with the React Hooks plugin to catch code quality issues and hook misuse, Prettier for consistent formatting, and TypeScript for compile-time type safety. We usually enforce these checks with Husky and lint-staged so only changed files are validated before commits. For security, we use tools like npm audit, Dependabot or Renovate, and sometimes Snyk. For larger codebases, SonarQube helps identify code smells, duplicated logic, and maintainability issues. During development and optimization, we also use Lighthouse, bundle analyzers, and the React Profiler to monitor performance and bundle size.
*/
