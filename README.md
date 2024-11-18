# Repository for labs from Web-technologies-and-web-design
## Pastukh Rostyslav ІР-23

# React.js: Catalog Page

## Description
In this task, you will expand your React application by adding a **Catalog Page** that displays a list of items (products). The page layout should follow the provided wireframe of the Catalog Page.

The products or entities that you are displaying should be consistent with those from previous assignments (refer to the description in the third work).

## Requirements

### General Requirements
- **Keep all previous requirements** from earlier React.js tasks, including page structure and styling consistency.

### Code Style
1. **Rendering Items List**:
   - Use the `array.map()` method to render your items list in the catalog.
   
2. **Routing Between Pages**:
   - Implement routing so that switching between different pages works.
   - Use the `react-router-dom` library for managing routes.
   - Reference: [React Router Quick Start Guide](https://reactrouter.com/web/guides/quick-start).

3. **Component Separation**:
   - All UI elements such as buttons and select dropdowns should be implemented as separate React components.
   - Examples:
     - `PrimaryButton.jsx` for a primary button.
     - `Select.jsx` for a select dropdown.

### Functionality
- **Filter/Search/View More** functionalities are **not required** at this stage.
  - You will need to complete these in future tasks.

## Notes
- **Project Setup**: Ensure `react-router-dom` is installed in your project. You can do so by running:
  ```bash
  npm install react-router-dom
