const arr=[
    [90,87,140], //[{month:1, total:90}, {month:2, total:87}, {month:3, total:140}],
    [120,130,150], //[{month:4, total:120}, {month:5, total:130}, {month:6, total:150}],
    [180,240,200], //[{month:7, total:180}, {month:8, total:240}, {month:9, total:200}],
    [180,140,190] //[{month:10, total:180}, {month:11, total:140}, {month:12, total:190}]
]

const parr=[]

//최고매출금액 찾기
//각분기별로 매출 평균을 만든다.
for(let i=0; i<arr.length; i++){
    const tempArr=arr[i]
    console.log(tempArr)

    let sum=0

   for(let j=0; j<tempArr.length; j++) {

       //3
       sum += tempArr[j]
   }
   const tempAvg= (sum/tempArr.length).toFixed(2)
    // console.log(tempAvg)
     parr.push(parseFloat(tempAvg))
}
    console.log(parr)

//최고 매출 금액 찾기
let max=0
let period=0

for (let i=0; i< parr.length; i++){
    if(parr[i]>max){
        max=parr[i]
        period=i
    }

    }
    console.log("max:"+max)
    console.log("period:"+(period+1)+"분기입니다.")


