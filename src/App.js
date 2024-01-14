

import  Datafetch from './DisplayComponent';


function App(){
     const user = "abhi";
    const state = [

        {
            "person": {
              "name": "John Doe",
              "age": 30,
              "gender": "male",
              "address": {
                "street": "123 Main St",
                "city": "Anytown",
                "state": "CA",
                "zip": "12345"
              },
              "contacts": [
                {
                  "type": "email",
                  "value": "john.doe@example.com"
                },
                {
                  "type": "phone",
                  "value": "+1 (555) 123-4567"
                }
              ],
              "isStudent": false,
              "grades": null
            }
          }
    ]

    return(

        <div>
        <h1>Data fetching</h1>
             <Datafetch database = {state} name = "Person Details"/>
        </div>
    )

}

export default App;
