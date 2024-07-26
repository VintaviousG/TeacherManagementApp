// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { updateProfile } from '../api/users';

// const Profile = () => {
//   const { authData, setAuthData } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//     name: authData.user.name,
//     email: authData.user.email,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const updatedUser = await updateProfile(formData);
//       setAuthData({ ...authData, user: updatedUser });
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Update Profile</button>
//       </form>
//     </div>
//   );
// };

// export default Profile;
