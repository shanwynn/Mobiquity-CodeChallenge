CC.Firebase = new Firebase('https://code-challenge.firebaseIO.com');

CC.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: CC.Firebase
});
