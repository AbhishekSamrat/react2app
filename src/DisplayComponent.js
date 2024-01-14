function Datafetch(props){
 return(

    <div>
    <h1>{props.name}</h1>
   
      {props.database.map((el){
return(
    <div>
    <h1>el.person</h1>
    </div>
   
)





      })}
    
    </div>
 )


}



 export default Datafetch;