// // LoginModal.jsx
// import React from 'react';
// import { useFormik } from 'formik';

// const LoginModal = ({ isOpen, onClose, onAuthSuccess }) => {
//   if (!isOpen) return null;

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch('https://basketmania-2.onrender.com/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: values.email,
//             password: values.password,
//           }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           console.log('User logged in successfully:', data);
//           onClose(); // Close the modal
//           onAuthSuccess(); // Set authentication to true
//         } else {
//           console.error('Error logging in:', data.error);
//         }
//       } catch (error) {
//         console.error('Network error:', error);
//       }
//     },
//   });

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Login</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//           />
//           <button type="submit">Login</button>
//         </form>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;

// LoginModal.jsx
import React from 'react';
import { useFormik } from 'formik';

const LoginModal = ({ isOpen, onClose, onAuthSuccess }) => {
  if (!isOpen) return null;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://basketmania-2.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('User logged in successfully:', data); // Log success message
          onClose(); // Close the modal
          onAuthSuccess(); // Set authentication to true
        } else {
          console.error('Error logging in:', data.error);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    },
  });

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <button type="submit">Login</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;
