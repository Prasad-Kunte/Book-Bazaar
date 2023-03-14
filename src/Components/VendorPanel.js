const fs = require('fs');
function VendorPanel()
{
  function img(){
    
  console.log(document.getElementById("#image_input").value);

  }


  //copyfile.js


// destination will be created or overwritten by default.
// fs.copyFile('C:\folderA\myfile.txt', 'C:\folderB\myfile.txt', (err) => {
//   if (err) throw err;
//   console.log('File was copied to destination');
// });
  return(<>
  
  <>
  <label className="form-label" htmlFor="customFile">
    Default file input example
  </label>
  <input type="file" className="form-control" id="customFile" accept='image/png , image/jpg' onChange={(e) => {
                var img1=e.target.files[0];
              
                  console.log(img1);
                


              }}/>
  <button onClick={img}>dekh le </button>
</>

  
  </>);
}

export default VendorPanel;