let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries){
    sum += salaries[key];
}

console.log(sum);

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

  multiplyNumeric(menu);

  console.log(menu);

  function checkEmailId(str){
      if(str.includes('@') && str.includes('.')){
        console.log(true);
      }
      console.log(false);
  }

  function truncate(str, maxlength) {
    return (str.length > maxlength) ? 
      str.slice(0, maxlength - 1) + '…' : str;
  }

  var array = ["James", "Brennie"];
  array.push("Robert");
  if(array.length % 2 == 1){
    var len = array.length + 1;
  }

  array[len] = "Calvin";
  array.shift();
  console.log(array);
  console.log(array.unshift("Rose","Regal"));
