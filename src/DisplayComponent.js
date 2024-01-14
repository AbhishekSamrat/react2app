import './DisplayComponent.css';

function Datafetch(props){
 return(

    <div>
    <h1 className='topheader'>{props.name}</h1>
   
      {props.database.map((el) =>{
return(
    <div className='content'>
    <div className="person-data">
    <header>Person Bio Data</header>
    <h2>{el.person.name}</h2>
    <h2>{el.person.age}</h2> 
    <h2>{el.person.gender}</h2>
    <h2>{el.person.address.street}</h2>
    <h2>{el.person.address.city}</h2>
    <h2>{el.person.address.state}</h2>
    <h2>{el.person.address.zip}</h2>
  
  
  
    </div>
      
        <div className="person-data">
    <header>Person Bio Data</header>
    <h2>{el.person.contacts[0].type}</h2>
    <h2>{el.person.contacts[0].value}</h2> 

  
  
  
    </div>

    <div className="person-data">
    <header>Person Bio Data</header>
    <h2>{el.person.contacts[1].type}</h2>
    <h2>{el.person.contacts[1].value}</h2>

  
  
  
    </div>
    </div>
   
)





      })}
    
    </div>
 )


}



 export default Datafetch;