
const ThePattren=/^[A-Za-z0-9 ]+$/;
function validationinput(...fields)
{
   for (const field of fields) {
   
    if(!ThePattren.test(field))
        {
        
        return false
        }
   }
       
  return true


}



export {validationinput}