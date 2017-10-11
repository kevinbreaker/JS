// SET THE DRIVER
//localforage.setDriver(localforage.INDEXEDDB);
/*// OTHER'S CONSTS,
localforage.WEBSQL;
localforage.INDEXEDDB;
localforage.LOCALSTORAGE;
*/
let store = localforage.createInstance({
  drive: localforage.INDEXEDDB,
  name : 'LOCAL_FORAGE',
  version: 1.0,
  storageName: 'Developers',
  description: 'learning to use the local storage'
});

let otherStore = localforage.createInstance({
  drive: localforage.INDEXEDDB,
  name : 'LOCAL_FORAGE',
  version: 2.0,
  storageName: 'Skill',
  description: 'learning'
});
store.setItem('key','value');
otherStore.setItem('key','value');
