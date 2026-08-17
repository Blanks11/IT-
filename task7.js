// 6. Data Type Identifier
console.log("\n--- Task 6 ---");
const myNumber = 42;
const myString = "Layerforge";
const myBoolean = true;
const myArray = ["React", "Godot", "Solidity"];
const myObject = { name: "QuantumEngine", status: "Active" };

console.log(`myNumber is a ${typeof myNumber}`);
console.log(`myString is a ${typeof myString}`);
console.log(`myBoolean is a ${typeof myBoolean}`);
console.log(`myArray is an ${Array.isArray(myArray) ? 'array' : typeof myArray}`);
console.log(`myObject is an ${typeof myObject}`);
