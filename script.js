



// const compareArrs = (arr1,arr2)=>{
//     if (arr1.length!==arr2.length){
//         return false
//     }
//     arr1.sort((a,b)=>b-a)
//     arr2.sort((a,b)=>b-a)
    
//     for (let i=0; i<arr1.length; i++){
//         if (Math.pow(arr1[i],2) !==arr2[i]){
//             return false
//         }
//     }

//     return true

// }

// console.log(compareArrs(arr1,arr2))




// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     const obj1 = buildMap(arr1);
    
//      const obj2 = buildMap(arr2);
//   console.log(obj1)
//   console.log(obj2)
   
//     for (const key in obj1) {
//         if (!obj2.hasOwnProperty(key**2)) return false;
//         if (obj1[key**2] !== obj2[key]) return false;
//     }
//     return true;
// }




// function buildMap (array){
//     const obj = {};
//     for (const num of array) {
        
//         if (!obj.hasOwnProperty(num)) {
//             obj[num] = 1
//         } else {
//             obj[num]++;
//         }
//     }
//     return obj
// }

// console.log (same([1, 2, 3, 1], [1, 9, 4,1]))



// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//    const obj = {};
//     for (const num of arr1){
//         const squarredVal = num**2;
//         if (!obj.hasOwnProperty(squarredVal)){
//             obj[squarredVal]=1
//         } else {
//             obj[squarredVal]++
//         }
//     }
     
//   for (const num of arr2){
//     if (!obj.hasOwnProperty(num)) return false;
//     obj[num]--;
//   }
//   const objValues = Object.values(obj);
//   return objValues.every(val =>val === 0);
  
   

// }

// console.log (same([1, 2, 3, 1], [1, 9, 4,1]))




function anagram(str1, str2) {
    if (str1.length !== str2.length) return false;


    const obj1 = buildMap(str1);
    const obj2 = buildMap(str2);

    for (const char in obj1 ){
        if (!obj2.hasOwnProperty(char)) return false
        if (obj1[char]!==obj2[char]) return false
    }
        
      return true;
}
 function buildMap (string){
    const obj = {};
    for (const char of string){
        if(!obj.hasOwnProperty(char)){
            obj[char]=1;
        }else{
            obj[char]++;
        }
    }
    return obj;
 }

console.log (anagram("art","rat"))