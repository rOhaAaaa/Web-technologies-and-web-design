# React.js: Formik - Cart Page (Checkout & Success)

## Description
Complete your project by creating the final two pages of your shopping cart: **Checkout** and **Success** pages. This step introduces **Formik**, a powerful form validation library, to create and validate the checkout form.

## Variants
The list of products you are "selling" is the same as the previous works. (Refer to the description in the 3rd assignment for product details.)

---

## Requirements

### General Requirements
All requirements from previous React.js assignments should be met.

### Functionality
1. **Form Validation:**
   - Your form must have at least **5 fields**.
   - Every field must include a validation rule beyond just "required":
     - Examples: Maximum length, no special characters, numeric-only fields, etc.
   - At least one field must use **RegEx** for validation.
   - At least one field must accept non-string values (e.g., phone numbers).

2. **Error Messages:**
   - Clearly describe all validation errors with specific reasons (e.g., "Email is incorrect," "First name is a required field").
   - The error message should be implemented as a separate React component.

3. **Form Submission:**
   - Upon successful form submission, redirect the user to a **Success page**.

### Code Style
- **Formik & Yup:**
  - Use **Formik** for handling form state and validation.
  - Use **Yup** for defining validation schemas.
  - Reference: [Formik + Yup Tutorial](https://youtu.be/3sXYK60T6Us?t=390).

