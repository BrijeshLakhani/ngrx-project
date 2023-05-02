const request = window.indexedDB.open('MyTestDatabase', 1);
let db;
request.onerror = function (event) {
  // error handling 1
};
request.onsuccess = function (event: any) {
  db = event.target.result;
};
    