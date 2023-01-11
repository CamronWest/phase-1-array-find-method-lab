





// function findResults (){
//   record.map((item) =>  {
//     return item.result;
//   }) 
// }

// const findYear = record.map((item) =>  {
//   return item.year;
// }) 

superbowlWin = (record) => {
  const result = record.find(record => record.result ==="W");
  if (!!result === true){
    return result.year
  } else {
    return undefined;
  }
}


