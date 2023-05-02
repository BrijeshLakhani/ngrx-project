// import {
//   Action,
//   ActionReducer,
//   createAction,
//   createReducer,
//   on,
// } from '@ngrx/store';

// async function getInitialStateFromDb(db: IDBDatabase, reducerKey: string) {
//   return new Promise<any>((resolve, reject) => {
//     const transaction = db.transaction(reducerKey, 'readonly');
//     const stateObjectStore = transaction.objectStore(reducerKey);
//     const request = stateObjectStore.get('1');
//     request.onerror = reject;
//     request.onsuccess = function () {
//       resolve(request.result);
//     };
//   });
// }

// async function tryCreateStore(request: IDBOpenDBRequest, reducerKey: string) {
//   return new Promise<IDBDatabase>((resolve, reject) => {
//     request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
//       const db = request.result;
//       if (!db.objectStoreNames.contains(reducerKey)) {
//         db.createObjectStore(reducerKey);
//       }
//     };
//     request.onsuccess = () => {
//       resolve(request.result);
//     };
//     request.onerror = reject;
//   });
// }

// async function saveState<S>(db: IDBDatabase, newState: S, reducerKey: string) {
//   return new Promise<void>((resolve, reject) => {
//     const transaction = db.transaction(reducerKey, 'readwrite');
//     const stateObjectStore = transaction.objectStore(reducerKey);
//     const request = stateObjectStore.put(newState, '1');
//     request.onerror = reject;
//     // request.onsuccess = resolve;
//     request.onsuccess = () => {
//       resolve();
//     };
//   });
// }

// export async function createIndexedDBRehydrateReducer<
//   S,
//   A extends Action = Action
// >(
//   reducerKey: string,
//   initialState: S,
//   ...ons: ((state: S | undefined, action: A) => S)[]
// ): Promise<ActionReducer<S, A>> {
//   const t0 = performance.now();

//   const request = window.indexedDB.open('MyTestDatabase');
//   let db: IDBDatabase;

//   try {
//     db = await tryCreateStore(request, reducerKey);
//   } catch (error) {
//     console.error(error);
//     db = request.result;
//   }

//   const newInitialState =
//     (await getInitialStateFromDb(db, reducerKey)) ?? initialState;

//   const rehydrateAction = createAction('rehydrate');

//   const newOns = ons.map((oldOn) => {
//     return on(createAction('rehydrate'), (state: S | undefined) => {
//       const runT0 = performance.now();

//       const newState = oldOn(state, createAction(String));
//       saveState(db, newState, reducerKey).then(() => {
//         const runT1 = performance.now();
//         console.log(`saved ${runT1 - runT0} milliseconds.`);
//       });

//       const runT1 = performance.now();
//       console.log(`indexdb reducer run took ${runT1 - runT0} milliseconds.`);

//       return newState;
//     });
//   });

//   const t1 = performance.now();
//   console.log(`indexdb reducer creation took ${t1 - t0} milliseconds.`);

//   return createReducer(newInitialState, ...newOns);
// }
