// import {sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
// import { auth } from '../firebase/config';

// export const useSignInLink = () => {
//   const actionCodeSettings = {
//     url: 'https://www.example.com/finishSignUp?cartId=1234',
//     // This must be true.
//     handleCodeInApp: true,
//     iOS: {
//       bundleId: 'com.example.ios'
//     },
//     android: {
//       packageName: 'com.example.android',
//       installApp: true,
//       minimumVersion: '12'
//     },
//     dynamicLinkDomain: 'example.page.link'
//   };

//   const emailSignIn = async (email) => {
//     const actionCodeSettings = {
//       url: 'https://www.example.com/finishSignUp?cartId=1234',
//       // This must be true.
//       handleCodeInApp: true,
//       iOS: {
//         bundleId: 'com.example.ios'
//       },
//       android: {
//         packageName: 'com.example.android',
//         installApp: true,
//         minimumVersion: '12'
//       },
//       dynamicLinkDomain: 'example.page.link'
//     };
    
//     try {
//       const res = await sendSignInLinkToEmail(auth, email, actionCodeSettings)
//       console.log(res)
  
//       window.localStorage.setItem('emailForSignIn', email)
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error(errorCode)
//       console.error(errorMessage)
//     }
//   }
  
//   return {
//     emailSignIn,
//     auth
//   }

// }