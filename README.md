# Repository for labs from Web-technologies-and-web-design
## Pastukh Rostyslav ІР-23

# React.js: Item Page

## Description
In this task, you will expand your React application by adding an **Item Page** that displays detailed information for a specific item. Additionally, you will enhance the **Home Page** and **Catalog Page** to make them more interactive, following the provided wireframes.

The products or entities that you are displaying should be consistent with those from previous assignments (refer to the description in the third work).

## Requirements

### General Requirements
- **Keep all previous requirements** from earlier React.js tasks, including the Catalog Page and Home Page functionalities.

### Code Style
1. **State and Context Management**:
   - Store your items inside the **state** or **context** of your page. You can choose between using state or context for data management.
     - [React State Documentation](https://uk.reactjs.org/docs/hooks-state.html)
     - [React Context Documentation](https://uk.reactjs.org/docs/hooks-reference.html#usecontext)
   
2. **Functional Components**:
   - Use the `useState()` hook for managing state in **functional components** instead of `this.state` in class components.
     - Example:
       ```jsx
       import React, { useState } from 'react';

       function ExampleComponent() {
         const [items, setItems] = useState([]);
         return <div>{/* Your component code */}</div>;
       }
       ```
   
   - If you choose to use **context**, use the `useContext()` hook instead of `Context.Consumer`.
     - Learn more: [React useContext Hook](https://www.robinwieruch.de/react-usecontext-hook)
     - Example:
       ```jsx
       import React, { useContext } from 'react';

       const MyContext = React.createContext();

       function ExampleComponent() {
         const contextValue = useContext(MyContext);
         return <div>{contextValue}</div>;
       }
       ```

### Functionality (IMPORTANT)

1. **Home Page**:
   - Add a **“View more”** button that displays more elements on the same page.
     - These elements can be simple content like random paragraphs or headings—use your imagination.

2. **Catalog Page**:
   - **Filtering Items**:
     - Implement a filtering functionality that allows users to filter the items list by different properties (e.g., size, color, type).
   
   - **Search Items**:
     - Add a **search** functionality that allows users to search items based on any text property (e.g., name, description).
   
   - **View More Action**:
     - Add a **“View more”** action for each item, which should link to the corresponding **Item Page** with detailed information about that item.
     - Ensure the correct data is loaded by retrieving it from your state or context.

3. **Item Page**:
   - Create an **Item Page** that displays all detailed information about the selected item.
   - Retrieve the item data from the state or context to ensure that the information is accurate and specific to the selected item.

## Notes
- **Routing Setup**:
  - Ensure your routing setup allows seamless navigation between the **Home Page**, **Catalog Page**, and the **Item Page**.
  - You can use `react-router-dom` for managing page routing.
  
- **Example for Routing**:
  Create routes that include individual item details:
  ```jsx
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

  function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/item/:itemId" component={ItemPage} />
        </Switch>
      </Router>
    );
  }

