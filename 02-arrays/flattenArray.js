function FlattenArray(arr) {
  let result = [];  

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(FlattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

input:[
  {type:"fruit",name:"apple"},
  {type:"fruit",name:"banana"},
  {type:"vegetable",name:"carrot"},
]
output:{fruit:["apple","banana"],vegetable:["carrot"]}