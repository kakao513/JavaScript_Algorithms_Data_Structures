// // hash("pink")

// console.log("a".charCodeAt(0));
// console.log("hi".charCodeAt(0));
// console.log("hi".charCodeAt(1));

// let total = 0;

// total += "hello".charCodeAt(0) - 96;
// total += "hello".charCodeAt(1) - 96;
// total += "hello".charCodeAt(2) - 96;
// total += "hello".charCodeAt(3) - 96;
// total += "hello".charCodeAt(4) - 96;

// console.log(total)

// total % 11

// function hash(key, arrayLen) {
// 	let total = 0;
// 	for (let char of key) {
// 		let value = char.charCodeAt(0) - 96;
// 		total = (total + value) % arrayLen;
// 	}
// }

// function hash(key, arranLen) {
// 	let total = 0;
// 	let WEIRD_PRIME = 31;
// 	for (let i = 0; Math.min(key.length, 100); i++) {
// 		let char = key[i];
// 		let value = char.charCodeAt(0) - 96;
// 		total = (total * WEIRD_PRIME + value) % arrayLen;
// 	}
// }

class HashTable {
	constructor(size=53) {
		this.keyMap = new Array(size);
	}

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

	set(key, value) {
		const index = this._hash(key);

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
			this.keyMap[index].push([key, value]);
		}

		else {
			let isElement = false;

			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) isElement = true;
			}

			if (isElement) return;
			else this.keyMap[index].push([key, value]);
		}

		return this.keyMap;
	}

	get(key) {
		const index = this._hash(key);
		if (!this.keyMap[index]) {
			return undefined;
		}

		else if (this.keyMap[index] > 1) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
			}
		}

		return this.keyMap[index][0][1];
	}

	keys() {
		const keyArray = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i] && this.keyMap[i].length === 1) keyArray.push(this.keyMap[i][0][0]);
			if (this.keyMap[i] && this.keyMap[i].length > 1) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					keyArray.push(this.keyMap[i][j][0]);
				}
			}
		}
		return keyArray;
	}

	values() {
		const valueArray = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i] && this.keyMap[i].length === 1) valueArray.push(this.keyMap[i][0][1]);
			if (this.keyMap[i] && this.keyMap[i].length > 1) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					valueArray.push(this.keyMap[i][j][1]);
				}
			}
		}
		return valueArray;
	}
}


let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("pink","#800000")
ht.set("pink","#800000")
ht.set("pink","#800000")


console.log(ht.keys());
console.log(ht.values());

