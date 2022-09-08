const bigTask = (int:number)=>{
    const sum = new Array(int)
    .fill(0)
    .map((el,idx)=>el+idx)
    .reduce((sum,el)=>sum+el,0)

    console.log(sum);
}

export function runBigtask(int:number){
    bigTask(int);

    return '---done---';

}

export async function runBigtaskAsync(int:number){
    bigTask(int);

    return '---done---';

}