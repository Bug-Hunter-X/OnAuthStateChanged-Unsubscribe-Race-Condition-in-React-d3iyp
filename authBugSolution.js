import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; //Import your firebase config

const MyComponent = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user.uid);
      } else {
        console.log('User is signed out');
      }
    });

    // Cleanup function to unsubscribe
    return () => {
      //Improved cleanup using a timeout to ensure unsubscribe occurs
      setTimeout(() => {
        unsubscribe();
      }, 0); 
    };
  }, []);

  return (
    <div>
      {/*Your component JSX*/}
    </div>
  );
};
export default MyComponent;