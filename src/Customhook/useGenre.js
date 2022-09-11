
const useGenre=(arr)=>{
    if(arr.length<1)
    {
        return ""
    }
    console.log("ARR",arr)
    const newarr=arr.map((el)=>el.id)
    console.log("newarr",newarr)
    return newarr.reduce((acc,curr)=>acc+","+curr)
}
export default useGenre