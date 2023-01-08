

// You have to write an async function that returns ,the id of the country from the given name

function GetCountryId(name,cb){

    let CountryArr=[{
name:"India",
id:1,

},
             
             {
name:"USA",
id:2,

},
             {
name:"UK",
id:3,

}]

// if you get the country name in the array then return it otherwise pass error inside callback

setTimeout(()=>{
  let data=CountryArr.filter(function(ele){
    return ele.name==name
    
  })

  if(data.length>0){
    cb(null,data)
    
  }else{
          cb(new Error("Not found"),null)

  }


  
},2000)

}








  
  
function GetStateByCountryId(countryId,cb){
    let stateArr=[
        {
          countryId:1,
          name:"UP",
          id:1
        },
          {
          countryId:2,
          name:"California",
             id:2
        },
      
          {
          countryId:3,
          name:"England",
          id:3  //
        }
      
      
        
      ]
  
    // You have to get the particular state

    setTimeout(()=>{

        let state=stateArr.filter(function(ele){
            return ele.countryId==countryId

        })
            if(state.length>0){
                cb(null,state)
            }else{
                cb(new Error("Not found"),null)
            }

        

    },1000)
  
    
  }


function GetCityByStateId(stateId,cb){
    let cityArr=[
        {
          stateId:1,
          name:"Lucknow",
          id:1
        },
          {
          stateId:2,
          name:"LA",
             id:2
        },
      
          {
          stateId:3,
          name:"London",
          id:3  //
        }
      
      
        
      ]
  
    // You have to get the particular state

    setTimeout(()=>{

        let city=cityArr.filter(function(ele){
            return ele.stateId==stateId
        })

            if(city.length>0){
                cb(null,city)
            }else{
                cb(new Error("Not found"),null)
            }

        

    },1000)
  
    
  }
/*

  GetStateByCountryId(1,function(err,result){
    console.log(err,result)

  })
*/

  // You have been given the country name ,you have to find the state belonging to it

// India

let stateIdcountryId=0;
// Callbackhell  ---
GetCountryId("India",function (err,result) { //1
//console.log(err,result)
let countryId=result[0].id
GetStateByCountryId(countryId,function(err,result){

  let stateId=result[0].id;
  GetCityByStateId(stateId,function(err,result){
     console.log(err,result)
  })

  })
})



 // output?
/*

*/