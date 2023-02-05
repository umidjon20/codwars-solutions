let array = [22,-6,32,82,9,25]
let abs =[23,-8, 9,12,65,20,88,30]

//  bu obyeklarni indexga bulinishinini aniqlaydi

// .1
// function multipleOfIndex(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % i === 0) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }

//   console.log(multipleOfIndex(array))

// .2
// function multipleOfIndex(arr){
//     let res =[]
//     arr.forEach((el,ind) =>{
//         if(arr[ind] % ind === 0){
//             res.push(arr[ind])
//         }
//     });
//     return res
// }
// console.log(multipleOfIndex(abs))



// bu har 2-elementni olib tashlaydi

// let mover = ['bmw','qizil','mers','yashil','gelik','qora']
// // 1.
// function removeEveryOther(arr){
//     let newArr = []
// for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i]) 
// }
//     return newArr
// }
//   console.log(removeEveryOther(mover))

// 2.
//   function removeEveryOther(arr){
//   arr.forEach((item, index) => {
//     arr.splice(index + 1, 1)
//   })
//   return arr
// }
//   console.log(removeEveryOther(mover))

// let num1 = [100,200,100]
// let num2 = [10,20,10]
// let total =0

// function arrayPlusArray(arr1, arr2) {
//     let res = arr1.concat(arr2)
//    res.forEach((el,ind) =>{
//       total +=el
//    })
//     return total;
//   }
//   console.log(arrayPlusArray(num1,num2));

// let arr = "www.codewars.com#about"
// function removeUrlAnchor(url){
//  let str = ''
//   for(let i =0; i< url.length; i++){
//     if(url[i]==='#')
//       break
//     str += url[i]
//   }
//   return str
// }
// console.log(removeUrlAnchor(arr))


let arr = 'abracadabra'
// function getCount(str) {
//   let total =0
//   let vowels = ['a','i','e','o','u']

//   for(i=0; i < str.length;i++){
//     if(vowels.indexOf(str[i]) > -1){
      
//       total++   
//   }   
// } return total
// }

// console.log(getCount(arr));

function getCount(str){
  let total =0
   let vowels = ['a','i','e','o','u']
  let change = str.split('')
  change.forEach((elm)=>{
     for(let i =0; i < vowels.length;i++){
      if(elm === vowels[i]){
        total ++
      }
     }
  })
  return total
}
console.log(getCount(arr));