
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key){
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value){
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if(!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyKeyItem = bucket.find(item => item[0] === key);
      if(sameKeyKeyItem) {
        sameKeyKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key){
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if(!bucket) {
      return undefined;
    }
    return bucket.find(item => item[0] === key)[1];
  }

  remove(key){
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if(bucket) {
      const itemIndex = bucket.findIndex(item => item[0] === key);
      if(itemIndex !== -1) {
        bucket.splice(itemIndex, 1);
      }
    }
  }

  display() {
    for(let i = 0; i < this.table.length; i++) {
      if(this.table[i] !== undefined) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set('name', 'John');
table.set('age', 25);
table.display();
console.log(table.get('name'));
table.set('mane', 'Doe');
table.set('name', 'Jane');
table.remove('name');
table.display();