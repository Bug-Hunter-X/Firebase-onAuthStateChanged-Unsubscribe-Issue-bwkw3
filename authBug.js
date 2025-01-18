const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/admin/user-management
    const uid = user.uid;
    console.log('User is signed in:', uid);
    navigate('/home');
  } else {
    // User is signed out
    // ...
    console.log('User is signed out');
    navigate('/login');
  }
});

return () => {
  unsubscribe();
};