class DataStore {
    constructor() {
        this.data = new Map();
    }

    set(key, value, flag) {
        // Assuming 'flag' is used to determine whether to log the action
        if (flag) {
            console.log(`Setting key: ${key} to value: ${value}`);
        }
        this.data.set(key, value);
    }
}

// Sample usage
let store = new DataStore();
let s = { a: 1, b: 2, c: 3 };

for (let key in s) {
    if (s.hasOwnProperty(key)) {
        store.set(key, s[key], true);
    }
}

console.log(store.data); // Output: Map { 'a' => 1, 'b' => 2, 'c' => 3 }
