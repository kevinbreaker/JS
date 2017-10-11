window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webKitIDBTransaction || window.mozIDBTransaction || window.msIDBTransaction;

window.IDBKeyRange = window.IDBKeyRange || window.webKitIDBKeyRange || window.mozIDBKeyRange || window.msIDBKeyRange;

if(!window.indexedDB){
  alert("does not supported");
}

let request = window.indexedDB.open('DB_NAME',1);
let db;
request.onerror = (err) => {
  console.log(`Something went wrong : ${err}`);
}
request.onsuccess = (suc) => {
  console.log('Open success',suc);
  db = request.result;
  let trans = db.transaction(['Developers'], 'readwrite').objectStore('Developers');

  for(let i in data){
    trans.add(data[i]);
  }
}

request.onupgradeneeded = (up) => {
  let db = up.target.result;
  let objectStore = db.createObjectStore('Developers', { autoIncrement: true });
  objectStore.createIndex('name','name', { unique: true });
}

const data = [{
  name: 'Kevin Martin',
  age:  '21'
},{
  name: 'Another guy',
  age:  '24'
},{
  name: 'anyone',
  age:  '42'
}];
function list() {
  console.log('listing');

  let transaction = db.transaction(['Developers']);
  let objectStore = transaction.objectStore('Developers');
  let data  = objectStore.get(1);
  data.onsuccess = (suc) => {
    console.log('especifico',data.result);
  }
  console.log('___all___');
  objectStore.openCursor().onsuccess = (al) => {
    let cursor = al.target.result;

    if(!cursor){
      return
    }
    console.log(cursor.value);
    cursor.continue();
  }
}

function remove() {
  console.log('removing');

  let transaction = db.transaction(['Developers'], 'readwrite');
  let objectStore = transaction.objectStore('Developers').delete(1);

  objectStore.onsuccess = re => {
    console.log('removed',re);
  }
}
