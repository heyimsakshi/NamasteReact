RestaurantCategory = ({data})=> {
    console.log(data)
    return(
        <div className="w-6/12 m-auto shadow-lg p-4 flex justify-between">
          <span>{data.title}</span>
          <span>⬇</span>
        </div>
    )
 }


 export default RestaurantCategory;