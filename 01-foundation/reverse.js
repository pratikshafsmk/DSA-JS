function rev(value) {
  let result = "";
  for (let i = value.length - 1; i >= 0; i--) {
    result += value[i];
  }
  console.log(result);
}
