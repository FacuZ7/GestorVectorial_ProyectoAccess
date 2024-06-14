let person = {
    name: "John Doe",
    age: 40,
    isStudent: false,
    hobbies: ["reading", "traveling", "coding"],
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    }
}
function getData (req, res){
    res.send(JSON.stringify(person));
    // return jsonString
}
export default getData