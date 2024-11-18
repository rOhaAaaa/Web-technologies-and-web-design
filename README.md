# Repository for labs from Web-technologies-and-web-design
## Pastukh Rostyslav ІР-23

# React.js: Connecting to REST API

## Description
In this final stage, you will complete your React application by connecting it to a REST API backend. This includes adding functionality to interact with the server for data fetching and updating. The products or entities being used should remain consistent with previous works.

You may use an existing backend server from your previous assignments (3-5) or create a new one from scratch. The tech stack for the backend is up to you.

## Requirements

### General Requirements
- **Maintain all previous requirements** from earlier React.js assignments, including the Item, Home, and Catalog pages.

### Code Style
1. **HTTP Requests with Axios**:
   - Use the `axios` library for all HTTP requests.
   - To install axios, run:
     ```bash
     npm install axios
     ```
   - [Axios Documentation](https://github.com/axios/axios#installing)
  
2. **API Functions Separation**:
   - All API-related functions should be moved to a single file or a folder.
   - This separation helps keep the code organized, similar to how it was done in **Lab 5 live coding** using `fetch()`.
   - Example structure:
     ```
     src/
       api/
         itemApi.js
     ```
   - Example `itemApi.js`:
     ```jsx
     import axios from 'axios';

     const BASE_URL = 'http://localhost:5000'; // Replace with your backend server's URL

     export const getItems = () => axios.get(`${BASE_URL}/items`);
     export const getItemById = (id) => axios.get(`${BASE_URL}/items/${id}`);
     export const searchItems = (filters) => axios.get(`${BASE_URL}/items`, { params: filters });
     ```

### Functionality

1. **Catalog Page**:
   - **Fetch All Items**:
     - All items should be fetched from the backend using the `GET` method via axios.
     - Example usage:
       ```jsx
       import React, { useEffect, useState } from 'react';
       import { getItems } from '../api/itemApi';
       import Loader from '../components/Loader';

       function CatalogPage() {
         const [items, setItems] = useState([]);
         const [loading, setLoading] = useState(true);

         useEffect(() => {
           getItems()
             .then((response) => {
               setItems(response.data);
               setLoading(false);
             })
             .catch((error) => {
               console.error("Error fetching items:", error);
               setLoading(false);
             });
         }, []);

         if (loading) {
           return <Loader />;
         }

         return (
           <div className="catalog-page">
             {/* Render items list */}
           </div>
         );
       }

       export default CatalogPage;
       ```

2. **Search with Filters**:
   - The **search functionality** on the Catalog Page should be implemented with a `GET` request to fetch filtered items from the backend.
   - Pass filters as URL parameters to the backend.
   - Example:
     ```jsx
     const searchItems = (filters) => axios.get(`${BASE_URL}/items`, { params: filters });

     // Usage in CatalogPage
     const handleSearch = (filters) => {
       searchItems(filters)
         .then((response) => setItems(response.data))
         .catch((error) => console.error("Error searching items:", error));
     };
     ```

3. **Loader (Spinner) Component**:
   - Before receiving a response from the **GET** request, display a **Loader (Spinner)** component to indicate to the user that data is being loaded.
   - You can use a loader similar to [these examples](https://projects.lukehaas.me/css-loaders/).
   - Create a simple `Loader` component:
     ```jsx
     import React from 'react';
     import './Loader.css'; // CSS for spinner

     function Loader() {
       return <div className="loader">Loading...</div>;
     }

     export default Loader;
     ```
   - Include the Loader component in any component where data fetching is required.

### Additional Notes
- **State Management**:
  - Continue using **useState** or **useContext** for state management.
  
- **UI/UX Enhancements**:
  - Ensure that the user interface updates dynamically as data is fetched from the backend.

- **Error Handling**:
  - Implement proper error handling for axios requests to handle cases like network errors or failed API calls.

By following these guidelines, you will have successfully connected your frontend React app to a REST API, making it fully functional and capable of dynamic data interaction. This final step will make your e-commerce application complete and ready for real-world use.
