
function getNums(num ,quantinty){
    let result=[]
    let max= num+ num*0.1
    let min= num- num*0.1
    let step1= max-min 
    let sum=0

    for(let i=0;i<quantinty-1;i++){
      let generateNumber=(Math.random() * step1 ) +min
      result.push(generateNumber)
      sum+=generateNumber
    }
    let last= quantinty*num -sum
    result.push(last)

    
    let div= standardDeviation(result)
    document.querySelector('.div').innerHTML= `Standar deviation is : ${div}`
   
    return result
}

const standardDeviation = (arr) => {
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    return Math.sqrt(
      arr
        .reduce((acc, val) => acc.concat((val - mean) ** 2), [])
        .reduce((acc, val) => acc + val, 0) /
        (arr.length )
    );
  };

document.getElementById('calc').addEventListener('click',()=>{
    document.getElementById('nums').innerHTML=''
    let result=getNums(parseFloat(document.getElementById('num').value),parseInt(document.getElementById('quantity').value) )
    result.forEach(x=> {
        let num=document.createElement('li')
        num.innerHTML=x
        document.getElementById('nums').appendChild(num)
    })
})
