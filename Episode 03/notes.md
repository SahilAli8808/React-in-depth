## Part 1
### script for start and build
```json
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
```
 - include the above code in `package.json` file.

 ## Part 2
 ### JSX
    - JSX is a syntax extension for JavaScript/ javascript xml.
    - jsx is html and javascript together. 
    - It was written to be used with React.
    - JSX code looks a lot like HTML/XML syntax.
    - JSX is a syntax that allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.

    - Example 1 using JSX:
    ```javascript
    const myElement = <h1>I Love JSX!</h1>;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
    ```
    - means jsx is a replacement of `React.createElement` and `ReactDOM.render` method.
    - jsx is react element.

### React Components
    - Components are the building blocks of any React application.
    - two types of components:
        - Functional Components
        - Class Components
    -Functional Components:
        - Functional components are basic JavaScript functions.
        - it return jsx.
        - These are typically arrow functions but can also be created with the regular function keyword.
        - These functions take in an optional input called props (short for properties) and return a React element.
        - Functional components are also known as stateless components.
