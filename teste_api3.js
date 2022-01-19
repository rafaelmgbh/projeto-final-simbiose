function api (){
    fetch('https://randomuser.me/api/', {})
  .then((response) => {
   
    console.log(response);
    
    return response.json(); 
  }).then((data) => {
  	var email =data.results[0].email;
       console.log(email);
    /*result.textContent = email; */
  }).catch((err) => {
    console.log('錯誤:', err);
});
}