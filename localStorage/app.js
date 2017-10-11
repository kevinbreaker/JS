let store = localforage.createInstance({
  drive: localforage.INDEXEDDB,
  name : 'APP',
  version: 1.0,
  storageName: 'Developers',
  description: 'learning to use the local storage'
});

function add() {
  console.log('add');
  store.setItem(Math.round(Math.random()),{ name: 'Kevin Martin', age: 21 }).then(value => console.log(value));
}

function list() {
  console.log('list');
  store.getItem('1').then(value => console.log(value));

}

function remove() {
  console.log('remove');
  store.removeItem('1').then(() => console.log('removed!'));
}

function listAll() {
  console.log('list all');
  store.iterate((key, value, index) => {
    console.log(value, key);
  });
}

function clear () {
  console.log('clear');
  store.clear().then(() =>  console.log('cleared'));
}
