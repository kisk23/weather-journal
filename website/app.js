/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//url to retrieve informations from api 
const baseUrl="api.openweathermap.org/data/2.5/weather?zip=" ;
//personal api key for openweathermap
const apiKey='3bed944f1b75e763019d1f19b18e0120' ;
//variables

    // const dataElemnt =document.getElementById("data").Value;
    // const tempE =document.getElementById("temp").Value;
    // const contentE =document.getElementById("content").Value;
// catch error function
const catchError= (error)=>{console.log("some errors occures")}
let server='http://127.0.0.1:3000';


const generateData=()=>{
    const zipC=document.getElementById("zip").value;
    
    let data={
        zipeCode:zipC,
        // content:contentE.Value,
        data:new Date()
    };
    getWeather(baseUrl, zipC, apiKey).then((data)=>postData(data).then(data=>updateUi(data)))
    
};
/* Function to update Ui */
const updateUi = async()=>{
  const response = await fetch('/all');
  try{
  const allData = await response.json();
  document.getElementById('date').innerHTML=d;
  document.getElementById('temp').innerHTML=allData.temp;
  document.getElementById('city').innerHTML=allData.city;
  document.getElementById('content').innerHTML = allData.feel;
  } catch(error) {
  
  }
  }
 


/* Function to GET Web API Data*/
const getWeather = async (basicUrl, zipC , apiKey) => {
    // res equals to the result of fetch function
    const feel =document.getElementById("feelings").value;
    try {
        console.log(`${basicUrl}${zipC},us&appid=${apiKey}`)
      const res = await fetch(`https://${basicUrl}${zipC},us&appid=${apiKey}&units=metric`)
      const userData = await res.json();
      console.log(userData);
      return {temp:userData.main.temp,
          city:userData.name, feel,
          d
        };
          
    } catch (error) {
      console.log("error", error);
    }
  }



//   const infoTserver={
// newDate,
// city,
// temp:Math.round(temp),//to closes the numbers ...........
// DESTRUCTION,
// feel ,

//   };

 /* Function to POST data */
const postData = async (data = {},url = 'add') => {
    const req = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),});

  
    try {
      const newData = await req.json();
      console.log('data sent back',newData)
      return newData;
    }
    catch (error) {
      console.log(error);
    }
  };
  document.getElementById("generate").addEventListener("click",generateData)