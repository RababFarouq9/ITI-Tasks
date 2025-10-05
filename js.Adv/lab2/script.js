const myObject = {
  description: "This object can generate getters and setters",
  
  getSetGen: function() {

    for (let key in this) {
     
      if (typeof this[key] === "function") continue;

      const capitalized = key.charAt(0).toUpperCase() + key.slice(1);


      this[`get${capitalized}`] = function() {
        return this[key];
      };

 
      this[`set${capitalized}`] = function(value) {
        this[key] = value;
      };
    }
  }
};


const obj = {
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
};

myObject.getSetGen.call(obj);


console.log(obj.getId()); 
obj.setLocation("CA");
console.log(obj.getLocation()); 


