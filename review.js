
var expV = {
    chrome: 100,
    firefox: 50,
    MSIE: 20,
    edge: 20,
    safari: 20, 
  };

/// function for getting the browser Version
function version() {
    var ua = navigator.userAgent,
      browserName,
      versionNum,
      versionStr;
    var browserList = ["Chrome", "Firefox", "MSIE", "Edge"]; //browser list
    for (var i = 0; i < browserList.length; i++) {
      if (ua.indexOf(browserList[i]) > -1) {
        browserName = browserList[i];
        //subName from the browserName to the end of the string
        var subName = ua.split(browserName + "/")[1];
  
        // console.log(`version Length ${subName.length}`);
        // console.log(`first char ${subName[0]}`);
  
        //nameArr separates the subName string where ever there's a space
        var nameArr = subName.split(" ");
  
        //versionNumber is the float point number of the version of the browser
        versionNum = parseFloat(subName);
  
        //versionStr is the string Name of the user's version
        versionStr = nameArr[0];
        // console.log(nameArr[0]);
        // console.log("parseInt Fxn " + versionNum);
      }
    }
    
  }
  
  document.getElementById("version_number").innerHTML = expV.chrome;
//function to focus on the buuton
function focusBtn() {
  document.getElementById("btn1").focus();
}
console.log(expV.chrome)
version();
focusBtn();
