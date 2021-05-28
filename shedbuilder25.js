

 


      var someRandomTest
      var interior = true
      var framDiff = 0
      var transparent = true
      var switchb = true
      var mySize = "8"
      var camera, controls, scene, renderer
      var objects = []
      var UPDATINGDOOR = false;
      var PitchPath = "5pitch"
      var roofStyle = "architectural"
      var FACECOLOR = "None"
      var FLOOR_4x4 = "4x4"

      var BZIRO = false 
      var pitchD = "5"
      var architecturalStyle = "30 year architectural shingle"

      // INTERIOR MATERIALS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      var bulb = "none"
      var switchh = "none" 
      var panel = "none"
      var junction = "none"
      var backDoor = ""
      var COLOR_OF_GARAGE = "0xa3a3a3"
      var receptable = "none"
      var receptable2 = "none"
      var workPushed = []
      var overhangStyle
      var specialFront = ""
      var loft2 = ""
     

      var repeatSiding = 1
      var rotateSiding = true
      var mySiding = "duratemp"
      var myText = "dura.png"
      var repeatSiding = 4.8
      var RS = 4.8
     

      var roofingColor = 0xa3a3a3
      var viewObjects = false
      var receptableE = "none"
      // INTERIOR MATERIALS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      var interior = false
      var sizeD = "8wide"
      try {
        if (Dpath == "Garage2/") {
          sizeD = "12wide"
        }
      } catch {
        //pass
      }
      var textureS 
      //var doorClose = "trimStd2"
      var domEvents
      var DOORSTYLEDOUBLE = "double/"
      var DOORSIZEDOUBLE = "36/"
      var DOORTYPEDOUBLE = "door"
      var doorTrimDOUBLE = "trimStd"
      var doorHingeDOUBLE = "hinges"
      var doorCloseDOUBLE = "None"
      var movingO
      var dormer = ""
      var dormerSize = ""

      var CONFLICTING = false;
      var loft = ""
      var textureS2
      container = document.getElementById("myCanvas")
      container22 = document.getElementById("kaloch")
      //myText = ""
      var model = "standard/"
      var specialRight
      specialRight = { 
        material : [1,2],
        "one":1
      };
     
      var highwal = false
      
      var myModel
      resultcorner22 = 0
      resultreverse22 = 0
      var optionsShow = true;
      var garageFolder
      var BA3PLAT = "Selto"
      var DOORFRONT = 1
      var applytoAllDoors = true;
      var UpdatingPitch = false;
      var RightyVertice1
      var RightyVertice2 
      var LeftyVertice1 
      var ShPos 
      var addingSize = false
      var ShPos2
      var LeftyVertice2 
      var ShellVertice2 
      var ShellVertice1
      var ShellVertice3
      var FirstAdd = true
      var DOORBACK = 0
      var DOORLEFT = 0
      var checkWindow = true;
      var mySelectedSide = "none"
      var lastSelectedSide = "Front"
      var AX = 8
      var AZ = 10
      var X = 8
      var Z = 10
      var boardMiddle =[]
      var menuOn = "None"
      var DOORRIGHT = 0
      var lenghtside = document.getElementById("rmenuSide").offsetWidth 
      var lenghtside2 = document.getElementById("rmenuSide").offsetHeight

      var lenghtsidee = document.getElementById("rmenuObject").offsetWidth
      var lenghtsidee2 = document.getElementById("rmenuObject").offsetHeight

      document.getElementById("rmenuObject").className = "hide"
      document.getElementById("rmenuSide").className = "hide"


    
      reversedResult22 = 0
      var jiyb
      var theRValue
      var parameters = {}
      var c
      var FirstTime =true
      var ENDLOADING = true;
      var gui 
      var sel
      var REPLACE = false 
      var obb
      var COLORED = ""
      var chb = 1
      var uploadOnce = true;
      the_resylt22 = 0
      var  ZoomSpeed =  0.030
    
      resultcorner2 = ""
      mover = "true"
      resultreverse2 = ""
      the_resylt2 = ""
      reversedResult2 = ""
      var textureS
      BA3 = false;
      myListomesh = []
      var windowPushedFront = 1 
      var windowPushedBack = 1
      var windowPushedLeft = 1 
      var windowPushedRight = 1 
      var doorPushedFront = 1
      var moveListo = []
      var doorPushedLeft = 1 
      var SelectK = []
      var SelectKCount = 0
      var doorPushedRight = 1
      var doorPushedBack = 1
      //var objectsList = []
      var obji = 0
      thePitch = 0.6
      YY = 1
      var speedofmove = 0.005

//DECLARING DOOR VARIABLES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var doorElement1 = "door"
var doorElement2 = "trim"
var doorElement3 = "outsideTrim"
var doorElement4 = "hinges"
var doorElement5 = "raft"
var doorElement6 = "Standard door"


TRIMCOLOR = "none"
SHUTTERCOLOR = "none"
WINDOWCOLOR = "none"

mySiding = "duratemp"
 var gettingDor = document.getElementById("doubleDoor")
gettingDor.style.display = "none"
document.getElementById("fiberGlass").style.display = "none"
document.getElementById("fix").innerHTML = mySiding
document.getElementById("steelDoor").style.display = "none"
document.getElementById("metalColor").style.display = "none"
SIDINGCOLOR = "none"
//var RS = 15
XX = 1

XS = 1
ZS = 1

/// SETTING PATH ///

function higherWall(state) {
  //Real time changes 
  //var scaleValue = 1.063999999999993
  if ( state == "high") {
  highwal = true
  var scaleValueSide = 1.0665999999999927
  var scaleValueFront = 1.0855999999999906
  var scaleRaft = 1.0945999999999896 //1.1064999999999883
  var doorScale = 1.0833279999999905
  var scaleCorner = 1.0888999999999902
}
else {
  highwal = false
  var scaleValueSide = 1
  var scaleValueFront = 1
  var scaleRaft = 1
  var scaleCorner = 1
}
 //shingles,backRaft,frontRaft,rafterRight,rafterLeft,closeLeft,closeRight])



  for ( io of [righty,lefty,backty,front,r2,r2b,right,left,cornersStudBackLeft,cornersStudFrontLeft,cornersStudBackRight,cornersStudFrontRight]) {
    if ( Array.isArray(io)) { 
      for ( doo of io) {

        let initPos = getPos(doo, "boxminy")
        doo.scale.y = scaleRaft
        doo.translateY(initPos-getPos(doo,"boxminy"))
      }
    } else {
      if ( io == righty || io == lefty) {

        var scaleval = scaleValueSide
      } else 
      if ( io == front || io == backty) {
        var scaleval = scaleValueFront
      } else{
        var scaleval = scaleRaft
      }
        let initPos = getPos(io,"boxminy")
       io.scale.y = scaleval
       io.translateY(initPos-getPos(io,"boxminy"))
    }
  }

  for (ko of [cornersFrontRight,cornersFrontLeft,cornersBackLeft,cornersBackRight]) {
    let iniPos = getPos(ko,"boxminy")
    ko.scale.y = scaleCorner
    ko.translateY(iniPos-getPos(ko,"boxminy"))
  }

   var translateValue = getPos(righty,"boxmaxy") - getPos(p2[0],"boxmaxy")
   //var translateValue = 0.17779994010925293
   var raftValue = getPos(r2[0],"boxmaxy") - getPos(frontRaft,"boxminy")
  for ( iop of [closeLeft,closeRight]) {
    iop.translateY(raftValue)
  }

  for ( chop of [rafterRight,rafterLeft,frontRaft,backRaft]) {
    if ( highwal == true) {
      chop.translateY(2.3685500621795654-getPos(chop,"boxmaxy"))
    } else {
      chop.translateY(2.1907498836517334 - getPos(chop,"boxmaxy"))
    }
  }

  for ( io of [p2, shingles,dripFront,dripBack]) {
    if ( Array.isArray(io)) {
      for ( doo of io ) {
        doo.translateY(translateValue)
      } 
    }else {
        io.translateY(translateValue)
      }

    }
     try {
        dormer.translateY(translateValue)
        dormerWin.translateY(translateValue)

      } catch {
        console.log("no dormer")
      }
      try {
         dormerShingle.translateY(translateValue)
       } catch {
        //pass
       }
      try {
       translateOn(front,"boxmaxy",overClosing,"boxmaxy")
      translateOn(backty,"boxmaxy",overClosing2,"boxmaxy")
    } catch {
      //pass
    }
     try {
       translateOn(front,"boxmaxy",faceBoard,"boxmaxy")
      translateOn(backty,"boxmaxy",faceBoard2,"boxmaxy")
    }catch {
      //pass
    }

    console.log(translateValue)
      try {
        translateOn(p2[0],"boxmaxy",overhangsRight,"boxmaxy")
        translateOn(p2[0],"boxmaxy",overhangsLeft,"boxmaxy")
        translateOn(overClosing,"boxminy",miratecRight,"boxminy")
        translateOn(overClosing,"boxminy",miratecLeft,"boxminy")
      } catch {
        //pass
      }
      scalingClosets()
      try {
   
      centerUnknownY(ventsRight,plat2)
      centerUnknownY(vents,plat2)
      vents.translateY(-0.07)
      ventsRight.translateY(-0.07)
    } catch {
      console.log("erno")
      
    }
    if ( typeof(ventsRight) != "object") {
      try {
      
        centerUnknownY(vents,plat2)
        vents.translateY(-0.07)
      } catch {
        console.log("fd")
      }
    }
    if (typeof(loft) == "object") {
      try {
        translateOn(backRaft,"boxminy",loft,"boxminy",-0.05)
      } catch {
        console.log("r")
      }

    }
    if ( typeof(cupola) == "object") {
      try {
        cupolaPlacement()
      } catch {
        //pass 
      }
    }
   adaptingObjects()
   try {
    translateOn(p2[bulb.p],"boxmaxy",bulb,"boxmaxy",-0.02)
  } catch {
    //pass
  }
    
}

function adaptingObjects() {
  for (ob of listObj) {
    if (ob.name.includes("Window")) {
      addingWindModel("window1",ob,"high")
    }
    if (ob.name.includes("Door")) {
      ob.translate()
    }
  }
}



function calculatingVertices() {
var geometry = new THREE.Geometry().fromBufferGeometry( righty.geometry );
 geometry.computeFaceNormals();
 geometry.mergeVertices();


 RightyVertice1 = geometry.vertices[7].y
 RightyVertice2 = geometry.vertices[4].y 

 
 //geometry.vertices[8].y = XX*1.5
 geometry.computeVertexNormals();

 righty.geometry = new THREE.BufferGeometry().fromGeometry( geometry );

var geometry = new THREE.Geometry().fromBufferGeometry( lefty.geometry );
 geometry.computeFaceNormals();
 geometry.mergeVertices();



 LeftyVertice1 = geometry.vertices[7].y 
 LeftyVertice2 = geometry.vertices[4].y 

 
 //geometry.vertices[8].y = XX*1.5
 geometry.computeVertexNormals();

 lefty.geometry = new THREE.BufferGeometry().fromGeometry( geometry );

var geometry = new THREE.Geometry().fromBufferGeometry( shell.geometry );
 geometry.computeFaceNormals();
 geometry.mergeVertices();


 ShellVertice1 = geometry.vertices[49].y 
 ShellVertice2 = geometry.vertices[46].y 
 ShellVertice3 = geometry.vertices[21].y 


 
 //geometry.vertices[8].y = XX*1.5
 geometry.computeVertexNormals();

 shell.geometry = new THREE.BufferGeometry().fromGeometry( geometry );
 //alert(ShellVertice1)
 //alert(ShellVertice2)

}



function settingPath(path) {
  window.location.href = '?path='+path
  

}
/// DISPLAY GUI /////////////////////////////////////////////////////////////
function winColorTrim(x,mycurrentobj =[document.getElementById("dropingobj").innerHTML]) {


  var colorListo2 = mycurrentobj
  var mycurrentobj = mycurrentobj[winCC2]
  let tempDict = eval("var myCurrentDict = " + mycurrentobj + "Dict")

  winCC2 += 1
  if ( x == "default") {
    x = "0xa3a3a3"
  }
 
  if (mycurrentobj.includes("Window")) {
    for ( i = 0; i<moveListo.length;i++) {
    try {
      
        
      
      
      if ( typeof(myCurrentDict.trim) == "object") {
        for (j = 0;j<myCurrentDict.trim.material.length;j++) {  
      
          myCurrentDict.trim.material[j].color.setHex(x)
        }
      }
          
      
      
    } catch {
      console.log("er")
    }}} else if (mycurrentobj.includes("Door")) {
       for ( i = 0; i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes(mycurrentobj)) {
        dictoColor[mycurrentobj] = x


        for (j = 0;j<moveListo[i+1].material.length;j++) {  
      
          moveListo[i+1].material[j].color.setHex(x)
        }
          
          
        
      }
    } catch {
      console.log("er")
    }

    }
  }
  if ( winCC2 < colorListo2.length) {
  winColorTrim(x,colorListo2)
}
}

function winColor(x,mycurrentobj =[document.getElementById("dropingobj").innerHTML]) {

  
  var colorListo = mycurrentobj
  var mycurrentobj = mycurrentobj[winCC]
  let tempDict = eval("var myCurrentDict = " + mycurrentobj + "Dict")

  winCC += 1
  if ( x == "default") {
    x = "0xa3a3a3"
  }
 
  if (mycurrentobj.includes("Window")) {
    for ( i = 0; i<moveListo.length;i++) {
    try {
      
        
      if (typeof(myCurrentDict.shutter) == "object") {
        for (j = 0;j<myCurrentDict.shutter.material.length;j++) {  
      
          myCurrentDict.shutter.material[j].color.setHex(x)
        }
      }
      /*
      if ( typeof(myCurrentDict.trim) == "object") {
        for (j = 0;j<myCurrentDict.trim.material.length;j++) {  
      
          myCurrentDict.trim.material[j].color.setHex(x)
        }
      }
        */  
        
      
    } catch {
      console.log("er")
    }}} else if (mycurrentobj.includes("Door")) {
       for ( i = 0; i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes(mycurrentobj)) {
        dictoColor[mycurrentobj] = x


        for (j = 0;j<moveListo[i+1].material.length;j++) {  
      
          moveListo[i+1].material[j].color.setHex(x)

        }
        try {
          for ( h of oglassLow.material ) {
            h.color.setHex(x)
             COLOR_OF_GARAGE = x
          }
          
        
      } catch {
        //pass
        }
         try {
          for ( h of oglassHigh.material ) {
            h.color.setHex(x)
             COLOR_OF_GARAGE = x
          }
          
        
      } catch {
        //pass
        }
      }
    } catch {
      console.log("er")
    }


    }
  }
  if ( winCC < colorListo.length) {
  winColor(x,colorListo)
}
}
function displaygui() {
   gui = new dat.GUI;
   gui.domElement.id = 'gui';
   parameters = {
    a:false,
    b:0.020,
    movespeed:0.005,
    c:"None",
    size:"",
    number:"",
    trim:"",
    shutter:"",
    type:"",
    box:false,
    shuttercolor:"#a3a3a3",
    trimcolor:"#a3a3a3",
    windowcolor:"#a3a3a3",

    defaultcolor:false,
    wgcheck:true,
    doortype:"Standard door",
    doorcolor:"#a3a3a3",
    gcolor: "#a3a3a3",
    doordefault: false,
    doordoor:"",
    doortrim:"",
    doorRamp:"",
    dooroutsidetrim:"",
    doorhinges:"",
    workbench:"",
    doorOpening:"",
    applytoall:true,



   }
   
   generalF = gui.addFolder("General");
   var frontorall = generalF.add(parameters,"a").name("Apply sidings to front only");
   
   frontorall.onChange(function(jar) {
    frontOrAll(jar)
    
   })
   workbenchF = gui.addFolder("WorkBench")
   WORKBENCH = workbenchF.add(parameters,"workbench",["Size : ","Workbench 6", "Workbench 8","Workbench 10","Workbench 12"])
   
    var zspeed = generalF.add(parameters,"b").min(0.010).max(0.1).step(0.01).name("zoom speed")

 
    var moveoT = generalF.add(parameters,"movespeed").min(0.001).max(0.14).step(0.002).name("move speed")

    moveoT.onChange(function(jar) {
      speedofmove = jar
    })
    zspeed.onChange(function(jar){
       ZoomSpeed = jar
    })


   WORKBENCH.onChange(function(jar) {
    
    try {
    let elt = jar.replace(" ","")
    elt = elt.toLowerCase()
    let side = lastSelectedSide
    if ( side == "Left") {
      side = ""
    } else if ( side == "Front") {
      side = "Front"
    } else if ( side == "Right") {
      side = "Right"
    } else if ( side == "Back") {
      side = "Back"
    }

    loadingWorkbench(elt,side)
  } catch {
    alert("Please select a wall")
  }
   })
    sel = gui.add(parameters,"c").name("Selected Object")

    winFolder = gui.addFolder("Window")
    wgNum = winFolder.add(parameters,"number",["1","2","3"]).name("Number :")
    wgSize = winFolder.add(parameters,"size",["18x27","24x27","18x36","24x36","insulated : 30x36"]).name("Size :")
    wgTrim = winFolder.add(parameters,"trim",["Trim Std Straight","Trim Std Curved","Trim Wide Curved","Trim Wide Straight","Aluminium","Aluminium Wide","None"]).name("Trim : ")
    wgShutter = winFolder.add(parameters, "shutter",["None","Standard Shutters","Shutters Z Style","Shutters Classic Wide","Vinyl standard","Vinyl Raised Panel","XL Raised (higher windows only)"])
    //wgtype = winFolder.add(parameters,"type",["Standard Window","Low Wall Window"]).name("window type :")
 
    wgbox = winFolder.add(parameters,"box").name("Window Box : ")
    wgcolor = winFolder.addColor(parameters,"shuttercolor").name("Shutter color")
    wgcolortrim = winFolder.addColor(parameters,"trimcolor").name("Trim color")
    
    wgNum.onChange(function(jar) {
      NBWDX = jar + "/"
      SHUTTER = "woodstd"
      TRIMSTYLE = "None"
      
     switch(checkWindow) {
        case true:
               var selOnce = true
               for ( objj of listObj) {
                  if ( objj.name.includes("Window")) {
              addingWindModel(sizeWDX,objj,"changeAll")
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              addingWindModel(sizeWDX,currentObj,"changeAll")
    }
    })
  
    wgSize.onChange(function(jar) {
    sizeWDX = jar.replace("x","")+"/"
    if ( jar == "insulated : 30x36") {
      sizeWDX = "3036/"
      SHUTTER = "woodstd"
    }
    if (jar == "30x39 Wood sash window") {
      sizeWDX = "3039/"
      SHUTTER = "None"
      TRIMSTYLE = "None"

    } else if (jar == "22x39 Wood sash window") {
      sizeWDX = "2239/"
      SHUTTER = "None"
      TRIMSTYLE = "None"
    } else {
    SHUTTER = "woodstd"
  }
    TRIMSTYLE = "None"
    NBWDX = "1/"
     switch(checkWindow) {
        case true:
               var selOnce = true
               for ( objj of listObj) {
                  if ( objj.name.includes("Window")) {
              addingWindModel(jar,objj,"changeAll")
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              addingWindModel(jar,currentObj,"changeAll")
    }

    })

    wgTrim.onChange(function(jar) {
      switch(checkWindow) {
        case true:
               var selOnce = true
               for ( objj of listObj) {
                  if ( objj.name.includes("Window")) {

              addingTrimModel(jar,objj)
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              addingTrimModel(jar,currentObj)
    }
     
    })

    wgcolor.onChange(function(jar) {
      winCC = 0
      colListo = []
      jar = jar.replace("#","0x")
      if ( checkWindow == false ) {
      winColor(jar)
    } else {
      for ( i = 0;i<moveListo.length;i++) {
        try {
          if ( moveListo[i].includes("Window")) {
            colListo.push(moveListo[i])
          }
        } catch {
          console.log("er in wgcolor")
        }
      } 
      winColor(jar,colListo)
    }

    })
    wgdefaultcolor = winFolder.add(parameters,"defaultcolor").name("Default Color")
    wgCheck = winFolder.add(parameters,"wgcheck").name("apply to all")

    wgCheck.onChange(function(jar) {
      if ( jar == true ){
        checkWindow = true
      } else {
        checkWindow = false
      }
    })
    wgdefaultcolor.onChange(function(jar) {
      winCC = 0
      colListo = []
      winCC2 = 0
      colListo2 = []
      
      if ( checkWindow == false ) {
        winColor("default")
        winColorTrim("default",colListo2)
         
      

    } else {
      for ( i = 0;i<moveListo.length;i++) {
        try {
          if ( moveListo[i].includes("Window")) {
            colListo.push(moveListo[i])
            colListo2.push(moveListo[i])
          }
        } catch {
          console.log("er in wgcolor")
        }
      } 
      winColor("default",colListo)
      winColorTrim("default",colListo2)
     
      
      
    }

    })


    wgcolortrim.onChange(function(jar) {
      winCC2 = 0
      colListo2 = []
      jar = jar.replace("#","0x")
      if ( checkWindow == false ) {
      winColorTrim(jar)
    } else {
      for ( i = 0;i<moveListo.length;i++) {
        try {
          if ( moveListo[i].includes("Window")) {
            colListo2.push(moveListo[i])
          }
        } catch {
          console.log("er in wgcolor")
        }
      } 
      winColorTrim(jar,colListo2)
    }

    })
    
 
    wgbox.onChange(function(jar) {

     
      if ( checkWindow == false ) {
        let curObj = document.getElementById("dropingobj").innerHTML
        let cjd = "var currentObj = " +curObj+"Dict"
        eval(cjd)
        addingWindowBox(currentObj,jar)
      } else {
        for ( objj of listObj) {
          
            if ( objj.name.includes("Window")) {
              addingWindowBox(objj,jar)
            }
        }
      }
    
    })

    wgShutter.onChange(function(jar){
       switch(checkWindow) {
        case true:
               var selOnce = true
               for ( objj of listObj) {
                  if ( objj.name.includes("Window")) {
              addingShutModel(jar,objj)
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              addingShutModel(jar,currentObj)
    }
    })

    doorFolder = gui.addFolder("Door")
    doorType = doorFolder.add(parameters,"doortype",["Fiberglass door","Steel door"]).name("Model : ")
    var doordefault = doorFolder.add(parameters,"doordefault").name("Default color")

    var dColor = doorFolder.addColor(parameters,"doorcolor").name("Color")
    dColor.onChange(function(jar) {
       jar = jar.replace("#","0x")


      winCC = 0
      colListo = []
      
      if ( checkWindow == false ) {
      winColor("default")
    } else {
      for ( i = 0;i<moveListo.length;i++) {
        try {
          if ( moveListo[i].includes("Door")) {
            colListo.push(moveListo[i])
          }
        } catch {
          console.log("er in dcolor")
        }
      } 
      winColor(jar,colListo)
    }

    })
    
    doordefault.onChange(function(jar) {

     winCC = 0
      colListo = []
      
      if ( checkWindow == false ) {
      winColor("default")
    } else {
      for ( i = 0;i<moveListo.length;i++) {
        try {
          if ( moveListo[i].includes("Door")) {
            colListo.push(moveListo[i])
          }
        } catch {
          console.log("er in dcolor default")
        }
      } 
      winColor("default",colListo)
    }

    })

    //garageFolder = gui.addFolder("Garage")
    //var gColor = garageFolder.addColor(parameters,"gcolor").name("Color")
    /*
    gColor.onChange(function(jar) {
       jar = jar.replace("#","0x")


      winCC = 0
      colListo = []
      
      if ( checkWindow == false ) {
      winColor("default")
    } else {
      for ( i = 0;i<moveListo.length;i++) {
        try {
          if ( moveListo[i].includes("Door")) {
            colListo.push(moveListo[i])
          }
        } catch {
          console.log("er in dcolor")
        }
      } 
      winColor(jar,colListo)
    }

    })
   */
  
    
  //DOOR TYPE
    doorType.onChange(function(jar) {
      try {
        var tempSize = DOORSIZE
      } catch {
        //pass
      }
    if ( jar == "Transom above door") {
      model = "Transom above door"
      DOORSTYLEDOUBLE = "double/"
      DOORSIZEDOUBLE = "36/"
      DOORTYPEDOUBLE = "door"
      doorTrimDOUBLE = "trimStd"
      doorHingeDOUBLE = "hinges"
    }
    if ( jar == "Fiberglass door") {
      model = "Fiberglass door"
      DOORSTYLE = "fiber/"
      DOORSIZE = "36/"
      DOORTYPE = "door"
      doorTrim = "trimStd"
      doorHinge = "hinges"
    
    }
    if (jar == "Steel door") {
      model = "Steel door"
      DOORSTYLE = "steel/"
      DOORSIZE = "36/"
      DOORTYPE = "door"
      doorTrim = "trimStd"
      doorHinge = "hinges"
    
    }
    if ( jar == "Standard door") {
      model = "Standard door"
      DOORSTYLE = "standard/"
      DOORSIZE = "36/"
      DOORTYPE = "door"
      doorTrim = "trimStd1"
      doorClose = "trimStd2"
      doorHinge = "hinges"
    
    }
    if ( jar == "Carriage") {
      model = "carriage/"
      DOORSTYLE = "carriage/"
      DOORSIZE = "5/"
      DOORTYPE = "door"
      doorTrim = "trimStd2"
      doorClose = "win2"
      doorHinge = "hinges12"
    }
    if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
      try {
        DOORSIZE = tempSize
        DOORSIZEDOUBLE = tempSize
      } catch(err) {
        //pass
      }
    }

    updateGuiDoor(model)
    if ( jar == "Transom above door") {
 
      switch(applytoAllDoors) {
        case true:
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
              if (objj.name.includes("Right") || objj.name.includes("Left")) {
              addingDoorModelDouble(DOORTYPEDOUBLE,objj,"ddtype")
                }
              }
            }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              if ( objj.name.includes("Right") || objj.name.includes("Left")) {
              addingDoorModelDouble(DOORTYPEDOUBLE,currentObj,"ddtype")
            }
    }
    } else {
      
       switch(applytoAllDoors) {
        case true:
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
                    if ( objj.door.model != "garage/") {
              addingDoorModel(DOORTYPE,objj,"ddtype")
            }
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              addingDoorModel(DOORTYPE,currentObj,"ddtype")
    }
    }
    

    })
    ddtype = doorFolder.add(parameters,'doordoor',[]).name("Size")
    ddtrim = doorFolder.add(parameters,'doortrim',[]).name("Trim")
    ddotrim = doorFolder.add(parameters,"dooroutsidetrim",[]).name("Model")
    ddhinges = doorFolder.add(parameters,"doorhinges",[]).name("Hinges")
    ddramp = doorFolder.add(parameters,"doorRamp",["3'6\" length","4'8\" length","none"]).name("Ramp")
    ddopening = doorFolder.add(parameters,"doorOpening",[""]).name("Opening")
    ddapply = doorFolder.add(parameters,"applytoall").name("Apply to all doors")


    ddapply.onChange(function(jar) {
      if ( jar == true ) {
        applytoAllDoors = true;
      } else {
        applytoAllDoors = false;
      }
    })
    //DOOR TYPE


    // DOOR RAMP ///////////////////
    ddramp.onChange(function(jar) {
      if (jar.includes("4")) {
        var rampPath = "48"
        updateDatDropdown(ddramp , ["4'8\" length","3'6\" length","none"]);
      } else if ( jar.includes("3")) {
        var rampPath = "36"
        updateDatDropdown(ddramp , ["3'6\" length","4'8\" length","none"]);
      } else if ( jar == "none") {
        var rampPath = "none"
        updateDatDropdown(ddramp , ["none","3'6\" length","4'8\" length"]);
      }
      
      switch(applytoAllDoors) {
        case true:
               var selOnce = true
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
              addingRamp(objj,rampPath)
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              addingRamp(currentObj,rampPath)
}

    })
    // DOOR RAMP //////////////////


    //DOORSIZE DOORSIZE DOORSIZE
    ddtype.onChange(function(jar) {
      var numbers = jar.match(/\d+/g).map(Number);
      DOORSIZE = numbers + "/"
      DOORSIZEDOUBLE = numbers + "/"
      if ( model == "Standard door" || model == "standard/") {
      DOORSTYLE = "standard/"
      DOORTYPE = "door"
      doorTrim = "trimStd1"
      doorClose = "trimStd2"
      doorHinge = "hinges"

      } else if ( model == "Carriage" || model == "carriage/") {

      DOORSTYLE = "carriage/"
      DOORTYPE = "door"
      doorTrim = "trimStd2"
      doorClose = "win2"
      doorHinge = "hinges12"
      } 
      else {
      doorTrim = "trimStd"
      doorHinge = "hinges"
      DOORTYPE = "door"
      doorClose = "none"

    }
  
      updateGuiDoor(model)

      switch(applytoAllDoors) {
        case true:
               var selOnce = true
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
                if (objj.door.model == "double/" && objj.door.model != "garage/") {
                  
                  addingDoorModelDouble(DOORTYPEDOUBLE,objj,"ddtype")
                } else {
                  if ( objj.door.model != "garage/") {
              addingDoorModel(DOORTYPE,objj,"ddtype")
            }
            }
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              if ( objj.door.model == "double/") {
                addingDoorModelDouble(DOORTYPE,currentObj,"ddtype")
              } else {
              addingDoorModel(DOORTYPE,currentObj,"ddtype")
}           }
  })
  //DOORSIZE DOORSIZE DOORSIZE
  ddopening.onChange(function(jar) {
    if ( jar == "45 opening") {
      GARAGEOPENING = ""

      if ( Dpath == "highbarn/") {
      loadingRighty("rightyGarage")
    } else {
       addingTrimDModelGarage(GARAGETRIM,RightDoor1Dict)
    }
    } else if ( jar == "Curved door opening") {
      GARAGEOPENING = "Curved"
      
      if ( Dpath == "highbarn/") {
      loadingRighty("rightyCurved")
    } else {
       addingTrimDModelGarage(GARAGETRIM,RightDoor1Dict)
    }
    } else if (jar == "Square opening") {
      GARAGEOPENING = "Square"

      if ( Dpath == "highbarn/") {
      loadingRighty("rightySquare")
    } else {
      addingTrimDModelGarage(GARAGETRIM,RightDoor1Dict)
    }


    } 
  })
  //DOORTYPE DOORTYPE DOORTYPE
    ddotrim.onChange(function(jar) {
      var objjs = []
      updateGuiDoor(model)
      let garage = false
      let garageGlass = false
      if ( jar == "Standard") {
        DOORTYPE = "door"
        } else if ( jar == "Homestead door") {
        GARAGEDOOR = "sunburst"
        garage = true
       } else if ( jar == "waterton") {
        GARAGEDOOR = "waterton"
        garage = true
       } else if ( jar == "wynbridge arche") {
        GARAGEDOOR = "wyndbridgeArche"
        garage = true
       } else if ( jar == "sunburst") {
        GARAGEDOOR = "sunburst"
        garage = true
       } else if (jar == "stockton 12 lite") {
        GARAGEDOOR = "stockton12lite"
        garage = true
       } else if ( jar == "somerton 8 lite") {
        GARAGEDOODR = "somerton8lite"
        garage = true
       } else if ( jar == "sherwood") {
        GARAGEDOOR = "sherwood"
        garage = true
       } else if ( jar == "cascade") {
        GARAGEDOOR = "cascade"
        garage = true
       }
        else if ( jar == "overhead door") {
        GARAGEDOOR = "door"
        garage = true
       } else if ( jar == "standard panel") {
        GARAGEGLASS = "normalHigh"
        garage = true
        garageGlass = true
       } else if ( jar == "clear short panel") {
        GARAGEGLASS = 'clearshortpanel'
        garage = true 
        garageGlass = "short"
       }
       else if ( jar.includes('short panel') || jar.includes("long panel")) {
        GARAGEGLASS = jar.replace(" ","")
        GARAGEGLASS = GARAGEGLASS.replace(" ","")

        garage = true
        garageGlass = true
       }
         else {
        
        var sth = jar.replace("Glass ", "")
        var sth = sth.replace(" ","")
        DOORTYPE = sth
       }
       if ( jar == "wide") {
        sth = "wide"
        DOORTYPE = "wide"
        doorClose = "trimWide2"
        doorTrim = "trimWide1"
       } else if (jar == "designer") {
        sth = "designer"
        DOORTYPE = "designer"
        doorClose = "None"
        doorTrim = "trimDesigner"
       } else if (jar == "standard") {
        sth = "door"
        DOORTYPE = "door"
        doorClose = "trimStd2"
        doorTrim = "trimStd1"

       } 
       if ( garage == true) {
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              if (garageGlass == "short") {
                addingGarageGlassHigh(currentObj.name,"normalHigh",GARAGEGLASS)
              }else if ( garageGlass == true) {
                addingGarageGlassHigh(currentObj.name,GARAGEGLASS)
              
              } else {
              addingDoorModelGARAGE(GARAGEDOOR,currentObj)
            }
         }   
        else {
       switch(applytoAllDoors) {
        case true:
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
              if ( objj.door.model != "double/" && objj.door.model != "garage/") {
              addingDoorModel(DOORTYPE,objj)
            }

                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              if ( currentObj.door.model != "double/") {
              addingDoorModel(DOORTYPE,currentObj)
            }
          }
}
  })
  //DOORTYPE DOORTYPE DOORTYPE


  //HINGE HINGE HINGE
    ddhinges.onChange(function(jar) {
       if ( jar == '6" decorative hinges') {
        doorHinge = "hinges6"
      } else if (jar == "Std hinges") {
        doorHinge = "hinges"
      } else if ( jar == '12" decorative hinges') {
        doorHinge = "hinges12"
      }

   switch(applytoAllDoors) {
        case true:
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
                  if ( objj.door.model != "double/" && objj.door.model != "garage/") {
              addingHingeModel(doorHinge,objj)
            }
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              if ( currentObj.door.model != "double/") {
              addingHingeModel(doorHinge,currentObj)
            }
}
    })
    //HINGE HINGE HINGE

    //DOOR TRIM
    ddtrim.onChange(function(jar) {

      let close,trim
      let x = "nn"
      let double = false
      let garage = false
      let trans = false
      if ( jar == "Trim Vinyl") {
        doorTrim = "trimVinyl"
        //replacingModel(document.getElementById('dropingobj').innerHTML,2,'doubleDoor/standardX')
      } else if ( jar == "Trim Wide") {
        doorTrim = "trimWide"
        //replacingModel(document.getElementById('dropingobj').innerHTML,2,'doubleDoor/wideX')
      } else if ( jar == "Trim Std") {
        doorTrim = "trimStd"
      }
      else if ( jar == "Standard High Wall") {
        doorTrimDOUBLE = "trimHigh"
        double = true
      } else if ( jar == "Standard Door") {
        doorTrimDOUBLE = "trimStd"
        double = true
      } else if ( jar == "Wide High Wall") {
        doorTrimDOUBLE = "trimWide2"
        double = true
      } else if ( jar == "Wide Door") {
        doorTrimDOUBLE = "trimWide"
        double = true

      } else if ( jar == "Wide") {
        doorTrim = "trimWide1"
        doorClose = "trimWide2"
        close = "trimWide2"
      } else if (jar == "wide") {
        doorTrim = "trimDesigner"
        doorClose = "None"
        close = "None"
        trim = "trimDesigner"
      } else if ( jar == "Straight") {
        doorTrim = "trimStd1"
        doorClose = "trimStd2"
        close = "trimStd2"
        trim = "trimStd1"
      } else if (jar == "With X") {
        doorX = "yup"
        x = "yup"
      } else if ( jar == "Curved") {
        doorTrim = "trimStd1"
        doorClose = "trimCurved"
        trim = "trimStd1"
        close = "trimCurved"
      } else if (jar.includes("With 45")) {
        doorX = "trim45"
        x = "trim45"
      } else if ( jar == "Arch Window") {
        doorTrim = "trimCurved"
        doorClose = "win1"
        trim = "trimCurved"
        close = "win1"
        doorHinge = "hinges12"
        DOORTYPE = "door"
      } else if ( jar == "Straight Window") {
        doorTrim = "trimStd2"
        doorClose = "win2"
        trim = "trimStd2"
        close = "win2"
        doorHinge = "hinges12"
        DOORTYPE = "door"
      } else if ( jar == "Trim Wide.") {
        doorTrim = "trimStd1"
        trim = "trimStd1"
        close = "win1"
        doorClose = "win1"
        doorHinge = "hinges12"
        DOORTYPE = "door"
      } else if ( jar == "Miratec trim 3.5") {
        GARAGETRIM = "miratecTrim3"
        garage = true
      } else if (jar == "Miratec trim 2.5") {
        GARAGETRIM = "miratecTrim2.5"
        garage = true
      } else if ( jar == "Metal trim") {
        GARAGETRIM = "alumCorner"
        garage = true
      } else if ( jar == "Transom Window") {
        trans = true
      }

      //updateGuiDoor(model)
      if ( garage == true) {
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " + curObj + "Dict"
              eval(cjd)
              addingTrimDModelGarage(GARAGETRIM,currentObj)
            
      } else {
    if (x == "yup" || x == "trim45") {
       switch(applytoAllDoors) {
        case true:
      
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
                    if ( objj.door.model != "double/" && objj.door.model != "garage/"){
              addingXStandard(x,objj)
            }
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " + curObj + "Dict"
              eval(cjd)
              if ( objj.door.model != "double/" && objj.door.model != "garage/") {
              addingXStandard(x,currentObj)
            }
     
}
    } else
      if ( close == "trimCurved" || close == "trimStd2" || close == "trimWide2" || close == "win2" || close == "win1") {
        switch(applytoAllDoors) {
        case true:
          
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
                  if ( objj.door.model != "double" && objj.door.model != "garage/") {
              addingCloseStandard(close,objj,"none",trim)
            }
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " + curObj + "Dict"
              eval(cjd)
              if ( objj.door.model != "double/" && objj.door.model != "garage/") {
              addingCloseStandard(close,currentObj,"none",trim)
            }
     
}
} else if ( double == true ) {
    switch(applytoAllDoors) {
        case true:
      
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
                    if ( objj.door.model == "double/") {
              addingTrimDModelDouble(doorTrimDOUBLE,objj)
            }
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " + curObj + "Dict"
              eval(cjd)
              if ( objj.door.model == "double/") {
              addingTrimDModelDouble(doorTrimDOUBLE,currentObj)
            }
            }
} else {
       switch(applytoAllDoors) {
        case true:
      
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
                    if ( objj.door.model != "double/" && objj.door.model != "garage/" && trans == false) {
              addingTrimDModel(doorTrim,objj)
            }
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " + curObj + "Dict"
              eval(cjd)
              if ( currentObj.door.model != "double/" && objj.door.model != "garage/" && trans == false) {
              addingTrimDModel(doorTrim,currentObj)
            }
     }
}
if ( trans == true) {
     switch(applytoAllDoors) {
        case true:
      
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
                    if ( objj.door.model != "double/" && objj.door.model != "garage/") {
              addingTransomModel(doorTrim,objj)

            }
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " + curObj + "Dict"
              eval(cjd)
              if ( currentObj.door.model != "double/" && objj.door.model != "garage/") {
              addingTransomModel(doorTrim,currentObj)
            }
     }
}
}
    })
 //DOOR TRIM

    doorFolder.close()    
    generalF.open()
    gui.open()
    winFolder.close()
    document.getElementById("gui").style.display ="none"
   

}
//vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1

function updateGuiDoor(model) {
  var model = model
   if (model == "Standard door") {
    
  updateDatDropdown(doorType , ["","Fiberglass door","Steel door","Standard door", "Transom above door","Carriage"]);
   updateDatDropdown(ddtype , [""]);
   updateDatDropdown(ddtrim , [""]);
    updateDatDropdown(ddotrim , [""])
     updateDatDropdown(ddhinges ,[""]);
} else if ( model == "Transom above door") {

  updateDatDropdown(doorType , ["","Fiberglass door","Steel door","Standard door","Transom above foor","Carriage"]);
  updateDatDropdown(ddtype , ['48" Single door','42" Single door','36" Single door','30" Single door',"4' double","5' double","6' double","7' double","8' double"]);
   updateDatDropdown(ddtrim , ['Standard Door','Wide Door']);
    updateDatDropdown(ddotrim , [""])
     updateDatDropdown(ddhinges ,[""]);
} else if ( model == "Fiberglass door") {
 
  updateDatDropdown(doorType , ["Fiberglass door","Steel door","Standard door", "Transom above door","Carriage"]);
  updateDatDropdown(ddtype , ['36" Single door','30" Single door',"4' Fiberglass","5' Fiberglass","6' Fiberglass"]);
   updateDatDropdown(ddtrim , ["","Trim Vinyl","Trim Wide","Trim Std"]);
   if ( DOORSIZE == "4/") {
    
      updateDatDropdown(ddotrim , [""])
   } 
   if ( DOORSIZE == "6/" || DOORSIZE == "36/") {
    updateDatDropdown(ddotrim , ['Standard','Glass 4 lite',"Glass 9 lite","Glass 11 lite","Glass 15 lite"])
   }
   if ( DOORSIZE == "30/" || DOORSIZE == "5") {
    updateDatDropdown(ddotrim , ['Standard','Glass 4 lite',"Glass 9 lite","Glass 11 lite"])
  }
     updateDatDropdown(ddhinges ,['6" decorative hinges','Std hinges']);
} else if ( model == "Steel door") {
   updateDatDropdown(doorType , ["Steel door","Fiberglass door","Standard door", "Transom above door"]);
   updateDatDropdown(ddtype , ['36" Single door','30" Single door',"4' Fiberglass","5' Fiberglass","6' Fiberglass"]);
   updateDatDropdown(ddtrim , ["","Trim Vinyl","Trim Wide","Trim Std"]);
    updateDatDropdown(ddotrim , [""])
     updateDatDropdown(ddhinges ,['6" decorative hinges','Std hinges']);
      if ( DOORSIZE == "4/") {
       
      updateDatDropdown(ddotrim , [""])
   } 
   if ( DOORSIZE == "6/" || DOORSIZE == "36/") {

    updateDatDropdown(ddotrim , ['Standard',"Glass 9 lite","Glass 11 lite","Glass 15 lite"])
   }
   if ( DOORSIZE == "30/" || DOORSIZE == "5/") {
    updateDatDropdown(ddotrim , ['Standard',"Glass 9 lite","Glass 11 lite"])
  }
}
}
function updateDatDropdown(target, list){   
    innerHTMLStr = "";
    if(list.constructor.name == 'Array'){
        for(var i=0; i<list.length; i++){
            var str = "<option value='" + list[i] + "'>" + list[i] + "</option>";
            innerHTMLStr += str;        
        }
    }

    if(list.constructor.name == 'Object'){
        for(var key in list){
            var str = "<option value='" + list[key] + "'>" + key + "</option>";
            innerHTMLStr += str;
        }
    }
    if (innerHTMLStr != "") target.domElement.children[0].innerHTML = innerHTMLStr;
}

function replaceDoor(x,nas = document.getElementById("dropingobj").innerHTML) {
  
  NumBerOfStuffToReplace = 0
  var myinob = moveListo.indexOf(nas)
  var jiyb = nas[0]
  nas.shift()
  var rListo = nas
  //alert(moveListo[myinob])
  E1 = doorElement1 
  E2 = doorElement2 
  E3 = doorElement3 
  E4 = doorElement4
  E5 = doorElement5 
  E6 = doorElement6
  REPLACE = true;
  if ( x == "Standard door") {
    doorElement1 = "door"
    doorElement2 = "trim"
    doorElement3 = "outsideTrim"
    doorElement4 = "hinges"
    doorElement5 = "raft"
    doorElement6 = "Standard door"
  } else if ( x == "Double door 4") {
    doorElement1 = "doubleDoor/double"
    doorElement2 = "doubleDoor/standardX"
    doorElement3 = "doubleDoor/transom3.5"
    doorElement4 = "doubleDoor/hinges6"
    doorElement5 = "doubleDoor/raft"
    doorElement6 = "Doubledoor"
  } else if ( x == "Fiberglass Double 54 inch") {
    doorElement1 = "fiberGlass/fiberGlass1"
    doorElement2 = "transparent"
    doorElement3 = "fiberGlass/outside25"
    doorElement4 = "fiberGlass/hinges6"
    doorElement5 = "fiberGlass/raft"
    doorElement6 = "Fiberglass door"


  } else if ( x == "Steel Double 54 inch") {
    doorElement1 = "steel/steelDoor"
    doorElement2 = "transparent"
    doorElement3 = "transparent"
    doorElement4 = "steel/hinges6"
    doorElement5 = "steel/raft"
    doorElement6 = "Steel door"
  }

  var nji = jiyb

  if (nji.includes("Back") ) {
    if (Dpath != "leanto/") {
    addBackDoor(nji,rListo) 
  } else {
    alert("Doors can't be added in back wall")
  }
  } else if ( nji.includes("Front")) {
    addFrontDoor(nji,rListo)
  } else if ( nji.includes("Right")) {
    addRightDoor(nji,rListo)
  } else if (nji.includes("Left")) {
    addLeftDoor(nji,rListo)
  }
  /*
  doorElement1= E1 
  doorElement2 = E2 
  doorElement3 = E3 
  doorElement4 = E4 
  doorElement5 = E5 
  doorElement6 = E6
  */
  UPDATINGDOOR = true;
}

function deleteDormer() {

  dormerSize = ""

  if (typeof(dormer) == "object") {
      scene.remove(dormer)
      dormer = ""
    }
    if ( typeof(dormerWin) == "object") {
      scene.remove(dormerWin)
      dormerWin = ""
    }
    if ( typeof(pd) == "object") {
      scene.remove(pd)
    }
    if (typeof(dormerShingle) == "object") {
      scene.remove(dormerShingle)
    }

    let ppath = PitchPath.replace("pitch","")
    roofPitch(ppath,"yes")
    document.getElementById("pitch").style.display = "block"
}

function roofPitch(x,chba ="none",sth="nth") {

  if ( chba == "yes") {
    if (typeof(dormer) == "object") {
      scene.remove(dormer)
    }
    if ( typeof(dormerWin) == "object") {
      scene.remove(dormerWin)
    }
    if ( typeof(pd) == "object") {
      scene.remove(pd)
    }
    if ( typeof(dormerShingle) == "object") {
      scene.remove(dormerShingle)
    }
} 


  if ( PitchPath != x + "pitch" || chba == "yes") {
      PitchPath = x + "pitch"
      pitchD = x 

    if ( Dpath == "Shed2/") {
      if ( x == "8" || x == "9" || x == "10" || x == "12") {
          righty.scale.y = 0.981
          lefty.scale.y = 0.985
          front.scale.y = 0.982
          backty.scale.y = 0.982
      } else {
          righty.scale.y = 1
          lefty.scale.y = 1
          front.scale.y = 1
          backty.scale.y = 1
      }
    try {
       translateOn(front,"boxmaxy",faceBoard,"boxmaxy")
       translateOn(backty,"boxmaxy",faceBoard2,"boxmaxy")
    }catch {
      //pass
    }
    }
  
    xxx2 = 0.4077190160751343
    zzz2 = xxx2 
    zZ2 = 0
    try {
      for ( i=0;i<p2.length;i++) {
        scene.remove(p2[i])
      }
          
 } catch {
  console.log("no plat frame to remove")
 }
      p2 = []
      setTimeout(loadingPlat2,1)

}

}




function moveWindow2Right() {
  //alert(getPos(window1,"boxmax"))
  mover = "true"
  

  setTimeout(movingWindow2Right,1)


}

function movingWindow2Right() {
  if (mover == "false") {
    return;
  } else {
    window2.translateZ(0.02)
    shutter2.translateZ(0.02)
    windowRaft2.translateZ(0.02)

    
    setTimeout(stopThemoveW,1)
  }
}

function stopThemoveW() {
  //alert(getPos(shutter1,"boxmax"))
  //alert(getPos(shell,"boxmax"))
  if (parseFloat(getPos(shutter2,"boxmaxz")) + 0.2 >= parseFloat(getPos(shell,"boxmaxz"))) {
    return;
    
  }else {
    setTimeout(movingWindow2Right,1)
  }
}

function moveWindow2Left() {
  //alert(getPos(window1,"boxmax"))
  mover = "true"
  

  setTimeout(movingWindow2Left,1)


}

function movingWindow2Left() {
  if (mover == "false") {
    return;
  } else {
    window2.translateZ(-0.02)
    shutter2.translateZ(-0.02)
    windowRaft2.translateZ(-0.02)

    
    setTimeout(stopThemoveW2,1)
  }
}

function stopThemoveW2() {
  //alert(getPos(shutter1,"boxmax"))
  //alert(getPos(shell,"boxmax"))

  if (parseFloat(getPos(shutter2,"boxminz")) - 0.2 <= parseFloat(getPos(shell,"boxminz"))) {
    return;
    
  }else {
    setTimeout(movingWindow2Left,1)
  }
}

function interiorObjects() {
  let val 

  if ( viewObjects == true) {
  val = 0
  //camera.position.set( 20, 60, 40 );
  //camera.fov = 9

  //camera.updateProjectionMatrix();
  viewObjects = false
  //document.getElementById("normalView").style.display = "block"
} else {
  val = 1
  //camera.position.set( 20, 30, 40 )
  //camera.fov = 18

  //camera.updateProjectionMatrix();
  //document.getElementById("normalView").style.display = "none"
}

  for ( c of [r2,r2b,f2,right,left]) {
    for ( j of c) {
      setTransp(j,val)
    }
  }
  for ( c of [cornersStudFrontRight,cornersStudFrontLeft,cornersStudBackRight,cornersStudBackLeft,cornersBackRight,cornersBackLeft,cornersFrontRight,cornersStudFrontLeft]) {
    setTransp(c,val)
  }
 try {
  setTransp(shingles,val)
 } catch {
  //pass
 }
 try {
  setTransp(shingleFront,val)
  setTransp(shingleBack,val)
  setTransp(shingleRight,val)
  setTransp(shingleLeft,val)
  setTransp(platLeft,val)
  setTransp(platRight,val)
  setTransp(platDiviser,val)
  setTransp(cabanaC,val)

 } catch {
  //pass
 }
 try {
  setTransp(cupola,val)
  setTransp(cupolaRef,val)
 } catch {
  //pass
 }
 try {
  for ( c of p2) {
    setTransp(c,val)
  }
 } catch {
  //pass
 }
 
}

    function onDocumentMouseDown( event ) {    
      //alert(container22.offsetLeft + "   " + container22.offsetTop + "    " + container.clientWidth)
       var mouseXX = event.clientX
           var mouseYY = event.clientY

          var MT = document.getElementById("gui").offsetTop
          var MH = document.getElementById("gui").offsetHeight
          var ML = document.getElementById("gui").offsetLeft
          var MW = document.getElementById("gui").offsetWidth
           var offsetT = document.getElementById("rmenuObject").offsetTop
           var offsetTW = document.getElementById("rmenuObject").offsetHeight
           var offsetL = document.getElementById("rmenuObject").offsetLeft
           var offsetLW = document.getElementById("rmenuObject").offsetWidth

           var offTopo = document.getElementById("myCanvas").offsetTop
           if (menuOn == "material") {
             var offsetT = document.getElementById("rmenuMaterial").offsetTop
           var offsetTW = document.getElementById("rmenuMaterial").offsetHeight
           var offsetL = document.getElementById("rmenuMaterial").offsetLeft
           var offsetLW = document.getElementById("rmenuMaterial").offsetWidth
           }

          

          if ((( mouseYY > offsetT-(offsetTW/2.5) && mouseYY < (offsetT + offsetTW) && mouseXX > offsetL && mouseXX < ( offsetL + offsetLW) )) || (mouseYY < offTopo)) {
           
            var selectBok = true;
            return;
          } else {
            var selectBok = false;
          }
          var offL = document.getElementById("rmenuSide").offsetLeft
          var offLW = document.getElementById("rmenuSide").offsetWidth
          var offT = document.getElementById("rmenuSide").offsetTop
          var offTH = document.getElementById("rmenuSide").offsetHeight
           if (menuOn == "material") {
             var offT = document.getElementById("rmenuMaterial").offsetTop
           var offTH = document.getElementById("rmenuMaterial").offsetHeight
           var offL = document.getElementById("rmenuMaterial").offsetLeft
           var offLW = document.getElementById("rmenuMaterial").offsetWidth
           }
          var xyy = event.clientX
          var yyx = event.clientY
          if ( xyy > offL && xyy < (offL + offLW) && yyx > offT-(offTH/2.5) && (yyx < offT + offTH)) {
            var selectBok = true;
          
            
            
            return;
          }
          
          var projector = new THREE.Projector()            
          var mouse3D = new THREE.Vector3( ( event.clientX - container22.offsetLeft ) / container.clientWidth * 2 - 1,
                                        -( event.clientY - container22.offsetTop ) / container.clientHeight * 2 + 1,
                                        0.5 );                                   //z
          projector.unprojectVector( mouse3D, camera );   
          mouse3D.sub( camera.position );                
          mouse3D.normalize();
        /*
        for ( i = 0;i<moveListo.length;i++) {
          try {
          if ( moveListo[i].name.includes("Door") || moveListo[i].name.includes("Window")) {
            objects.push(moveListo[i+1],moveListo[i+2])
          }
        } catch {
          console.log("erno")
        }
        }
        
        objects.push(front)
        objects.push(backty)
        objects.push(righty)
        objects.push(lefty)

        */
         
        var raycaster = new THREE.Raycaster( camera.position, mouse3D );
        var intersects = raycaster.intersectObjects(objects);
        // Change color if hit block

          if (mouseYY > MT && mouseYY < (MT+MH) && mouseXX > ML &&  mouseXX < ( ML + MW) || selectBok == true ){
            return;
          }  else {
        if ( intersects.length > 0 ) {
          if (menuOn == "Object") {
           var offsetT = document.getElementById("rmenuObject").offsetTop
           var offsetTW = document.getElementById("rmenuObject").offsetHeight
           var offsetL = document.getElementById("rmenuObject").offsetLeft
           var offsetLW = document.getElementById("rmenuObject").offsetWidth
            if (menuOn == "material") {
             var offsetT = document.getElementById("rmenuMaterial").offsetTop
           var offsetTW = document.getElementById("rmenuMaterial").offsetHeight
           var offsetL = document.getElementById("rmenuMaterial").offsetLeft
           var offsetLW = document.getElementById("rmenuMaterial").offsetWidth
           }

           var offTopo = document.getElementById("myCanvas").offsetTop

          if ((( mouseYY > offsetT && mouseYY < (offsetT + offsetTW) && mouseXX > offsetL && mouseXX < ( offsetL + offsetLW) )) || (mouseYY < offTopo)) {
            var selectBok = true;
            return;
          } else {
            var selectBok = false;
          }
          } else {
          
          var xyy = event.clientX
          var yyx = event.clientY
          document.getElementById("rmenuSide").className = "show"
          document.getElementById("rmenuObject").className = "hide"
          var offL = document.getElementById("rmenuSide").offsetLeft
          var offLW = document.getElementById("rmenuSide").offsetWidth
          var offT = document.getElementById("rmenuSide").offsetTop
          var offTH = document.getElementById("rmenuSide").offsetHeight
          var offTopo = document.getElementById("myCanvas").offsetTop
           if (menuOn == "material") {
             var offsetT = document.getElementById("rmenuMaterial").offsetTop
           var offsetTW = document.getElementById("rmenuMaterial").offsetHeight
           var offsetL = document.getElementById("rmenuMaterial").offsetLeft
           var offsetLW = document.getElementById("rmenuMaterial").offsetWidth
           }
          if (( xyy > offL && xyy < (offL + offLW) && yyx > offT && (yyx < offT + offTH)) || (yyx < offTopo) ) {
            var selectBok = true;
            return;
          } else {
            var selectBok = false;
          }
        }
          if ( selectBok == false ) {
           var myobjj = intersects[0].object
           if (myobjj == front) {
            menuOn = "Side"
            selectedSide(front)
            selectedOne("none")
            mySelectedSide = "front"
            lastSelectedSide = "Front"
           } else if (myobjj == backty) {
            menuOn = "Side"
            selectedSide(backty)
            selectedOne("none")
           

            mySelectedSide = "back"
            lastSelectedSide = "Back"
           } else if ( myobjj == righty) {
            menuOn = "Side"
            selectedSide(righty)
            selectedOne("none")
            mySelectedSide = "right"
            lastSelectedSide = "Right"
           } else if ( myobjj == lefty) {
            menuOn = "Side"
            selectedSide(lefty)
            selectedOne("none")
            mySelectedSide = "left"
            lastSelectedSide = "Left"
           }  else if ( myobjj == backDoor) {
            menuOn = "Side"
            mySelectedSide = "back"
            lastSelectedSide = "Back"
           selectedSide(backty)
           selectedOne("none")
           
           } else if ( myobjj == specialFront && Dpath == "capecode/") {
            selectedSide(front)
            selectedOne("none")
            mySelectedSide = "front"
            lastSelectedSide = "Front"
           }
           else {
            menuOn = "Object"
            selectedSide("none")
            mySelectedSide = "none"
            /* CHANGE THIS FOR WINDOW
           var ski = moveListo.indexOf(myobjj)
           if ( typeof(moveListo[ski-1]) == "string") {
            var nokbj = moveListo[ski-1]
           } else {
            var nokbj = moveListo[ski-2]
           }
          */
            var nokbj = myobjj.name
            document.getElementById("rmenuSide").className = "hide"

           
            document.getElementById("rmenuObject").className = "show"
            var lenghtsidee = document.getElementById("rmenuObject").offsetWidth
            var lenghtsidee2 = document.getElementById("rmenuObject").offsetHeight
            document.getElementById("rmenuObject").style.top =  mouseY(event)  +'px';
            document.getElementById("rmenuObject").style.left = mouseX(event) - (lenghtsidee/2) +'px';
            document.getElementById("gui").style.dispay = "none"
            

          
           var offsetT = document.getElementById("rmenuObject").offsetTop
           var offsetTW = document.getElementById("rmenuObject").offsetHeight
           var offsetL = document.getElementById("rmenuObject").offsetLeft
           var offsetLW = document.getElementById("rmenuObject").offsetWidth
           var mouseXX = event.clientX
           var mouseYY = event.clientY

          if ( mouseYY > offsetT && mouseYY < (offsetT + offsetTW) && mouseXX > offsetL && mouseXX < ( offsetL + offsetLW)) {
            return;
          } else {

          if ( myobjj == loft) {

            selectedLoft()
          } else if ( myobjj.name.includes("Workbench") ){
            selectedWork(myobjj)
          } else if ( myobjj == loft2) {

            selectedLoft2()
          } else {
            selectedOne(nokbj)
          }
          }
          

          gui.open()
        }
        
             //doorFolder.close()    
   // obb.open()
    //sidF.close()
   }
    //generalF.close()
  
        } else {
          selectedSide("none")
          selectedOne("none")
          //selectedOne("none")
        }
      }
    }

function selectMaterial(myobj) {

  SELECTEDMATERIAL = eval(myobj)
  
  document.getElementById("spanobj").innerHTML = SELECTEDMATERIAL.name
  document.getElementById("rmenuMaterial").className = "show"
  //document.getElementById("rmenuMaterial").style.top =  mouseY(event)-(lenghtside2/3) + 'px';
  //document.getElementById("rmenuMaterial").style.left = mouseX(event) - (lenghtside/2) + 'px';

}

function removeMaterial(n = SELECTEDMATERIAL) {
    
      document.getElementById("selMaterial").selectedIndex = 0
      let selopt = document.getElementById("selMaterial")
      for (var i=0; i<selopt.length; i++) {
        if (selopt.options[i].innerHTML.toLowerCase() == n.name.toLowerCase())
            selopt.remove(i);

    }
    scene.remove(SELECTEDMATERIAL)
    if ( SELECTEDMATERIAL == bulb) {
      bulb = ""
    } else if ( SELECTEDMATERIAL == receptableE) {
      receptableE = ""
    }

     else if ( SELECTEDMATERIAL == switchh) {

      switchh = ""
    } else if ( SELECTEDMATERIAL == receptable2 ) {
      receptable2 = ""
    } else if ( SELECTEDMATERIAL == panel) {
      panel = ""
    } else if ( SELECTEDMATERIAL == junction ) {
      junction = ""
    } else if ( SELECTEDMATERIAL == receptable) {
      receptable = ""
    }

} 
function moveMaterial(x,obj = SELECTEDMATERIAL) {
  let listmove = []
  if (SELECTEDMATERIAL == bulb) {
    
    for ( c of p2 ) {
      try {
        if (c.name == "plat") {
          listmove.push(c)
        }
      } catch {
        //pass
      }
    }
    var ref = listmove
  } else if (SELECTEDMATERIAL == switchh) {
      for ( c of r2 ) {
      try {
        if (c.name == "rafter2") {
          listmove.push(c)
        }
      } catch {
        //pass
      }
    }
    var ref = listmove
  } else if ( SELECTEDMATERIAL == panel) {
    for ( c of right ) {
      try {
        if (c.name == "rightone") {
          listmove.push(c)
        }
      } catch {
        //pass
      }
    }
    var ref = listmove
  } else if ( SELECTEDMATERIAL == junction) {
        for ( c of right ) {
      try {
        if (c.name == "rightone") {
          listmove.push(c)
        }
      } catch {
        //pass
      }
    }
    var ref = listmove
  } else if (SELECTEDMATERIAL == switchh) {
      for ( c of r2 ) {
      try {
        if (c.name == "rafter2") {
          listmove.push(c)
        }
      } catch {
        //pass
      }
    }
    var ref = listmove
  } else if ( SELECTEDMATERIAL == receptableE) {

      for ( c of right ) {
      try {
        if (c.name == "rightone") {
          listmove.push(c)
        }
      } catch {
        //pass
      }
    }
    var ref = listmove
  } else if ( SELECTEDMATERIAL == receptable) {

     for ( c of r2 ) {
      try {
        if (c.name == "rafter2") {
          listmove.push(c)
        }
      } catch {
        //pass
      }
    }
    var ref = listmove
  } else if ( SELECTEDMATERIAL == receptable2) {
      for ( c of r2b ) {
      try {
        if (c.name == "rafter") {
          listmove.push(c)
        }
      } catch {
        //pass
      }
    }
    var ref = listmove
   
  }
  if ( x == 0.02) {
       SELECTEDMATERIAL.p += 1  
       
    value = -1
  
} else if ( x == 'center'){
  SELECTEDMATERIAL.p = parseInt(listmove.length/2)
  value = 1
} else {
  SELECTEDMATERIAL.p -=1
    value = 1

}
if ( SELECTEDMATERIAL == bulb && Dpath != "cabana/" && Dpath != "capecode/") {
  try {
       var y1 = getPos(ref[SELECTEDMATERIAL.p],"boxmax")
       var y2 = getPos(SELECTEDMATERIAL,"boxmin")
       SELECTEDMATERIAL.translateX(y1-y2)
     } catch {
      SELECTEDMATERIAL.p += value
     }
   if ( Dpath == "leanto/") {
                  translateOn(the_plat,"boxmaxy",bulb,"boxmaxy",-0.01)
                  translateOn(the_plat,"boxminz",bulb,"boxminz")
                }
} else if ( SELECTEDMATERIAL == switchh ) {
  try {
   var w = getPos(ref[SELECTEDMATERIAL.p], "boxmin")
   var z = getPos(SELECTEDMATERIAL,"boxmax")
   SELECTEDMATERIAL.translateX(w-z)
 } catch {
  SELECTEDMATERIAL.p += value
 }
} else if ( SELECTEDMATERIAL == panel) {
  try {
  var w = getPos(ref[SELECTEDMATERIAL.p], "boxmin")
  var z = getPos(SELECTEDMATERIAL,"boxmin")
  SELECTEDMATERIAL.translateX(w-z)

  var w = getPos(ref[SELECTEDMATERIAL.p], "boxminz")
  var z = getPos(SELECTEDMATERIAL,"boxminz")
  SELECTEDMATERIAL.translateZ(w-z)
  if ( Dpath == "capecode/" || Dpath == "leanto/") {
                 translateOn(ref[SELECTEDMATERIAL.p],"boxmax",SELECTEDMATERIAL,"boxmax")
                  translateOn(ref[SELECTEDMATERIAL.p],"boxmaxz",SELECTEDMATERIAL,"boxminz")
                }
} catch {
  SELECTEDMATERIAL.p += value
}
} else if ( SELECTEDMATERIAL == junction) {
  try {
   var w = getPos(ref[SELECTEDMATERIAL.p], "boxmin")
   var z = getPos(SELECTEDMATERIAL,"boxmin")
   SELECTEDMATERIAL.translateX(w-z)
     

   var w = getPos(ref[SELECTEDMATERIAL.p], "boxminz")
   var z = getPos(junction,"boxminz")
   SELECTEDMATERIAL.translateZ(w-z)

   if ( Dpath == "capecode/" || Dpath == "leanto/") {
                 translateOn(ref[SELECTEDMATERIAL.p],"boxmax",SELECTEDMATERIAL,"boxmax")
                  translateOn(ref[SELECTEDMATERIAL.p],"boxmaxz",SELECTEDMATERIAL,"boxminz")
                }
 } catch {
  SELECTEDMATERIAL.p += value
 }
} else if ( SELECTEDMATERIAL == receptableE) {
  try {
  var w = getPos(ref[SELECTEDMATERIAL.p], "boxmin")
  var z = getPos(SELECTEDMATERIAL,"boxmin")
  SELECTEDMATERIAL.translateX(w-z)

  var w = getPos(ref[SELECTEDMATERIAL.p], "boxminz")
  var z = getPos(SELECTEDMATERIAL,"boxminz")
  SELECTEDMATERIAL.translateZ(w-z)
  if ( Dpath == "capecode/" || Dpath == "leanto/") {
                 translateOn(ref[SELECTEDMATERIAL.p],"boxmax",SELECTEDMATERIAL,"boxmax")
                  translateOn(ref[SELECTEDMATERIAL.p],"boxmaxz",SELECTEDMATERIAL,"boxminz")
                }
} catch {
  SELECTEDMATERIAL.p += value
}
} else if ( SELECTEDMATERIAL == receptable) {
  try {
  var w = getPos(ref[SELECTEDMATERIAL.p], "boxmin")
  var z = getPos(SELECTEDMATERIAL,"boxmin")
  SELECTEDMATERIAL.translateX(w-z)

  var w = getPos(ref[SELECTEDMATERIAL.p], "boxminz")
  var z = getPos(SELECTEDMATERIAL,"boxminz")
  SELECTEDMATERIAL.translateZ(w-z)
} catch {
  SELECTEDMATERIAL.p += value
}
} else if ( SELECTEDMATERIAL == receptable2) {
  try {
     var w = getPos(ref[SELECTEDMATERIAL.p], "boxmin")
     var z = getPos(SELECTEDMATERIAL,"boxmax")
     SELECTEDMATERIAL.translateX(w-z)

      var w = getPos(ref[SELECTEDMATERIAL.p], "boxminz")
      var z = getPos(SELECTEDMATERIAL,"boxminz")
      SELECTEDMATERIAL.translateZ(w-z)
  } catch {
    SELECTEDMATERIAL.p += value
  }
}
}



function selectedRoof(myobj) {

  for ( c of myobj.material) {
    c.color.set(0x7EC0EE)
  }
   if ( typeof(loft) == "object") {
   for ( i = 0;i<loft.material.length;i++) {
      loft.material[i].color.set(0xa3a3a3)
    }
        for ( i = 0; i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes(COLORED) || n == "none") {

        for (j = 0;j<moveListo[i+1].material.length;j++) {  
            if (moveListo[i].includes("Door")) {
              
              moveListo[i+1].material[j].color.setHex(dictoColor[moveListo[i]])

            }       
            else if ( moveListo[i].includes("Window")) {
           moveListo[i+1].material[j].color.setHex(0xa3a3a3)
         }
            
        }
      
      }
    } catch {
      console.log("er")
    }
  }
  }
}
function selectedWork(myobj) {
 // workbenchF.open()
  //winFolder.close()
  //generalF.close()
  //doorFolder.close()
  document.getElementById("dropingobj").innerHTML = myobj.name

    document.getElementById("sthobj").style.display = "none"
    document.getElementById("garageopt").style.display ="none"
    document.getElementById("loft").style.display = "block"
 
  for ( i = 0;i<myobj.material.length;i++) {
      myobj.material[i].color.set(0x7EC0EE)
    }
  if ( typeof(loft) == "object") {
   for ( i = 0;i<loft.material.length;i++) {
      loft.material[i].color.set(0xa3a3a3)
    }
  }

    for ( i = 0; i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes(COLORED) || n == "none") {

        for (j = 0;j<moveListo[i+1].material.length;j++) {  
            if (moveListo[i].includes("Door")) {
              
              moveListo[i+1].material[j].color.setHex(dictoColor[moveListo[i]])

            }       
            else if ( moveListo[i].includes("Window")) {
           moveListo[i+1].material[j].color.setHex(0xa3a3a3)
         }
            
        }
      
      }
    } catch {
      console.log("er")
    }
  }
}

function changeSize(val) {
 
 
  if ( document.getElementById("dropingobj").innerHTML == "loft") {
    smartLoft = closeLoft
    main_loft = loft
  } else if ( document.getElementById("dropingobj").innerHTML == "loft2") {
    smartLoft = closeLoft2
    main_loft = loft2
  }
  try {
  if ( getPos(main_loft,"boxlengthz") < parseFloat(0.678) && val == -0.07 ) {
    return
  }
} catch {
  //pass
}
  if ( document.getElementById("dropingobj").innerHTML.includes("Workbench") ) {
    changeSizeWorkBench(val)
  } else {
  main_loft.scale.z += val
  centerUnknownZ(main_loft,righty)
  centerUnknownZ(smartLoft,main_loft)
  let pos1 = getPos(main_loft,"boxmaxz")
  let pos2 = getPos(front,"boxminz")
  if ( pos1 >= pos2) {
   scaleBetween2Objects(main_loft,backty,"boxmaxz",front,"boxminz","z")
   centerUnknownZ(smartLoft,main_loft)
   /*
    while (pos1 >= pos2 ) {
      main_loft.scale.z -= 0.02
      centerUnknownZ(main_loft,righty)
      centerUnknownZ(smartLoft,main_loft)
      pos1 = getPos(main_loft,"boxmaxz")

    }
    */
  }
}
}

function changeSizeWorkBench(val) {
  let tempstat = "var actualobj = " + document.getElementById('dropingobj').innerHTML + "Dict"
  eval(tempstat)
  let pos1,pos2
  let side = actualobj.name 
  side = side.replace("Workbench","")
  side = side.replace(/[0-9]/g,'')
  switch(side) {
    case "Front":
        if ( getPos(actualobj.workbench,"boxlength") < parseFloat(0.678) && val == -0.07 ) {
          return
        }
        actualobj.workbench.scale.x += val
        centerUnknownX(actualobj.workbench,front)
       
        pos1 = getPos(actualobj.workbench,"boxmax")
        pos2 = getPos(cornersStudFrontRight,"boxmin")
        if ( pos1 >= pos2) {
         scaleBetween2Objects(actualobj.workbench,cornersStudFrontLeft,"boxmax",cornersStudFrontRight,"boxmin","x")
         /*
          while (pos1 >= pos2 ) {
            actualobj.workbench.scale.x -= 0.02
            centerUnknownX(actualobj.workbench,front)
            pos1 = getPos(actualobj.workbench,"boxmax")

          }
          */
        }

    break;
    case "Back":
    if ( getPos(actualobj.workbench,"boxlength") < parseFloat(0.678) && val == -0.07 ) {
          return
        }
        actualobj.workbench.scale.x += val
        centerUnknownX(actualobj.workbench,backty)
       
         pos1 = getPos(actualobj.workbench,"boxmax")
         pos2 = getPos(cornersStudBackRight,"boxmin")
        if ( pos1 >= pos2) {
          scaleBetween2Objects(actualobj.workbench,cornersStudBackLeft,"boxmax",cornersStudBackRight,"boxmin","x")
          /*
          while (pos1 >= pos2 ) {
            actualobj.workbench.scale.x -= 0.02
            centerUnknownX(actualobj.workbench,backty)
            pos1 = getPos(actualobj.workbench,"boxmax")

          }
          */
        }
    break;
    case "Left":
     if ( getPos(actualobj.workbench,"boxlengthz") < parseFloat(0.678) && val == -0.07 ) {
          return
        }
        actualobj.workbench.scale.z += val
        centerUnknownZ(actualobj.workbench,lefty)
       
         pos1 = getPos(actualobj.workbench,"boxmaxz")
         pos2 = getPos(cornersStudFrontLeft,"boxminz")
           if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
          pos2 = getPos(front,"boxminz") - 0.02
        }
        if ( pos1 >= pos2) {
          while (pos1 >= pos2 ) {
            actualobj.workbench.scale.z -= 0.02
            
            if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
          centerUnknownZ(actualobj.workbench,floorLeft)
        } else {
          centerUnknownZ(actualobj.workbench,lefty)
        }
            pos1 = getPos(actualobj.workbench,"boxmaxz")

          }
        }
    break;
    case "Right":
     if ( getPos(actualobj.workbench,"boxlengthz") < parseFloat(0.678) && val == -0.07 ) {
          return
        }

        actualobj.workbench.scale.z += val
        centerUnknownZ(actualobj.workbench,righty)
       
         pos1 = getPos(actualobj.workbench,"boxmaxz")
         pos2 = getPos(cornersStudFrontRight,"boxminz")
          if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
          pos2 = getPos(front,"boxminz") - 0.02
        }
        if ( pos1 >= pos2) {
          while (pos1 >= pos2 ) {
            actualobj.workbench.scale.z -= 0.02
           
            if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
          centerUnknownZ(actualobj.workbench,floorRight)
        } else {
           centerUnknownZ(actualobj.workbench,righty)
        }
            pos1 = getPos(actualobj.workbench,"boxmaxz")

          }
        }
    break;
  }
}

function selectedLoft() { //0x7EC0EE)
    document.getElementById("dropingobj").innerHTML = "loft"
    document.getElementById("sthobj").style.display = "none"
    document.getElementById("garageopt").style.display ="none"
    document.getElementById("loft").style.display = "block"

    for ( i = 0;i<loft.material.length;i++) {
      loft.material[i].color.set(0x7EC0EE)
    }
    
  for ( i = 0; i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes(COLORED) || n == "none") {

        for (j = 0;j<moveListo[i+1].material.length;j++) {  
            if (moveListo[i].includes("Door")) {             
              moveListo[i+1].material[j].color.setHex(dictoColor[moveListo[i]])
            }       
            else if ( moveListo[i].includes("Window")) {
           moveListo[i+1].material[j].color.setHex(0xa3a3a3)
         } else if ( moveListo[i] == "loft2") {
           moveListo[i+1].material[j].color.setHex(0xa3a3a3)
            
        }
         }
      
      }
    } catch {
      console.log("er")
    }
  }

}

function selectedLoft2() { //0x7EC0EE)
    document.getElementById("dropingobj").innerHTML = "loft2"
    document.getElementById("sthobj").style.display = "none"
    document.getElementById("garageopt").style.display ="none"
    document.getElementById("loft").style.display = "block"

    for ( i = 0;i<loft2.material.length;i++) {
      loft2.material[i].color.set(0x7EC0EE)
    }
    
  for ( i = 0; i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes(COLORED) || n == "none") {

        for (j = 0;j<moveListo[i+1].material.length;j++) {  
            if (moveListo[i].includes("Door")) {             
              moveListo[i+1].material[j].color.setHex(dictoColor[moveListo[i]])
            }       
            else if ( moveListo[i].includes("Window")) {
           moveListo[i+1].material[j].color.setHex(0xa3a3a3)
         } else if ( moveListo[i] == "loft") {
           moveListo[i+1].material[j].color.setHex(0xa3a3a3)
            
        }
         }
      
      }
    } catch {
      console.log("er")
    }
  }

}

function options() {
            //optionsShow = true;
            if (optionsShow == true) {
           
            document.getElementById("gui").style.display =  "block"
            document.getElementById("gui").style.left = mouseX(event) + 110+'px';
            document.getElementById("gui").style.top =  mouseY(event) - 300+ 'px';
         
            optionsShow = false;

          } else {
            document.getElementById("gui").style.display = "none"
            optionsShow = true
            
          }
}
function selectedSide(Sidee) {

  document.getElementById("addventscabana").style.display = "none"
  document.getElementById("addloft").style.display = "none"
  if (( Sidee == front || mySelectedSide == backty) && (Dpath == "minibarn/" || Dpath == "vinylbarn/")) {
    document.getElementById("adoor").style.display = "none"
    document.getElementById("adwind").style.display = "none"
  } else if ( Sidee == righty && (Dpath == "minibarn/" || Dpath == "vinylbarn/")){
    document.getElementById("adoor").style.display = "block"
    document.getElementById("adoor").style = "color:brown;font-family:Impact"
    document.getElementById("adwind").style.display = "none"
    
    document.getElementById("addwork").style = "margin-left:10px;color:black;font-family:Impact"
    document.getElementById("sort").style = "margin-left:10px;color:black;font-family:Impact"

  } else if ( Sidee == lefty && ( Dpath == "minibarn/" || Dpath == "vinylbarn/")) {
    document.getElementById("adoor").style.display = "none"
    document.getElementById("adwind").style.display = "block"
     document.getElementById("adwind").style = "color:blue;font-family:Impact"
    
    document.getElementById("sort").style = "margin-left:10px;color:black;font-family:Impact"
    document.getElementById("addwork").style = "margin-left:10px;color:black;font-family:Impact"
 } else if (Sidee == backty && (Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/")) {
    document.getElementById("adoor").style.display = "none"
    document.getElementById("adwind").style.display = "none"

  } else if ( Sidee == backty && Dpath == "cabana/") {
    document.getElementById("addventscabana").style.display = "block"
  } else if ( (Sidee == righty || Sidee == lefty) && Dpath != "minibarn/") {
    document.getElementById("addloft").style.display = "block"
  }
  else {

    document.getElementById("adoor").style.display = "block"
    document.getElementById("adoor").style = "color:brown;font-family:Impact"
    document.getElementById("adwind").style.display = "block"
    document.getElementById("adwind").style = "margin-left:10px;color:blue;font-family:Impact"
    document.getElementById("sort").style = "margin-left:10px;color:black;font-family:Impact"
    document.getElementById("addwork").style = "margin-left:10px;color:black;font-family:Impact"

  }
   if ( Dpath == "leanto/") {
    document.getElementById("addloft").style.display = "none"
  }
  if ( SIDINGCOLOR == "none") {
    var mycolor = 0xa3a3a3
  } else {
    var mycolor = SIDINGCOLOR
  }
  
  if (Sidee == "none") {
    mySelectedSide = "none"
    document.getElementById("rmenuSide").className = "hide"
    //document.getElementById("gui").style.display = "none"
    //document.getElementById("rmenuSide").className = "hide";  
    
    for ( i = 0;i<backty.material.length;i++) {
                
                  //backty.material[i].opacity = 0

                  backty.material[i].color.set(mycolor)
                }
    if ( typeof(backDoor) == "object" && Dpath == "leanto/") {
       for ( i = 0;i<backDoor.material.length;i++) {
                
                  //backty.material[i].opacity = 0

                  backDoor.material[i].color.set(mycolor)
                }
    }
 
    for ( i = 0;i<righty.material.length;i++) {
                
                  //righty.material[i].opacity = 0
                  righty.material[i].color.set(mycolor)
                }
   
  

    for ( i = 0;i<lefty.material.length;i++) {
                
                  //lefty.material[i].opacity = 0
                  lefty.material[i].color.set(mycolor)
                }
                
      for ( i = 0;i<front.material.length;i++) {
                
                  front.material[i].color.set(mycolor)
                }
        if ( typeof(specialFront) == "object" && Dpath == "capecode/") {
       for ( i = 0;i<specialFront.material.length;i++) {
                
                  //backty.material[i].opacity = 0

                  specialFront.material[i].color.set(mycolor)
                }
    }
  } else {

    document.getElementById("gui").style.display = "none"
    document.getElementById("rmenuObject").className = "hide"
    document.getElementById("rmenuSide").className = "show";  
    document.getElementById("rmenuSide").style.top =  mouseY(event)-(lenghtside2/3) + 'px';
    document.getElementById("rmenuSide").style.left = mouseX(event) - (lenghtside/2) + 'px';
    //document.getElementById("ADDD").style.display = "block"
    //document.getElementById("ADDW").style.display = "block"


  if ( Sidee != front) {
    for ( i = 0;i<Sidee.material.length;i++) {
                  Sidee.material[i].opacity = 1
                }
  }  // IS THERE AN ISSUE HERE ? A PREMATURE BRACKET ?
  for ( y = 0;y<Sidee.material.length;y++) {
    Sidee.material[y].color.set(0x7EC0EE) 
  }
    if ( Sidee == front && Dpath == "capecode/" && (typeof(specialFront) == "object")) {
      for ( y = 0;y<specialFront.material.length;y++) {
    specialFront.material[y].color.set(0x7EC0EE) 
  }
}
  if ( Sidee == backty && Dpath == "leanto/" && (typeof(backDoor) == "object")) {
      for ( y = 0;y<backDoor.material.length;y++) {
    backDoor.material[y].color.set(0x7EC0EE) 
  }
  }
  if ( Sidee != backty) {
     for ( i = 0;i<backty.material.length;i++) {
                
                  //backty.material[i].opacity = 0
                  backty.material[i].color.set(mycolor)
                }
               
    if ( typeof(backDoor) == "object" && Dpath == "leanto/") {
       for ( i = 0;i<backDoor.material.length;i++) {
                
                  //backty.material[i].opacity = 0

                  backDoor.material[i].color.set(mycolor)
                }
    }
  }

 if ( Sidee != front) {
     for ( i = 0;i<front.material.length;i++) {
                
                  
                  front.material[i].color.set(mycolor)
                }
                  if ( Dpath == "capecode/" && (typeof(specialFront) == "object")) {
      for ( y = 0;y<specialFront.material.length;y++) {
    specialFront.material[y].color.set(mycolor) 
  }
}
  }
  if ( Sidee != righty) {
     for ( i = 0;i<righty.material.length;i++) {
                
                  
                  righty.material[i].color.set(mycolor)
                }
  }
  if ( Sidee != lefty) {
     for ( i = 0;i<lefty.material.length;i++) {
                
                  
                  lefty.material[i].color.set(mycolor)
                }
  }
/*

  if ( Sidee != lefty) {
     for ( i = 0;i<lefty.material.length;i++) {
                
                  lefty.material[i].opacity = 0
                  lefty.material[i].color.set(mycolor)
                }
  }
*/
/*
  if ( Sidee != righty) {

     for ( i = 0;i<righty.material.length;i++) {
                
                  righty.material[i].opacity = 0
                  righty.material[i].color.set(mycolor)

                }

  }
  */
}
}


function moveWindowLeft() {
  //alert(getPos(window1,"boxmax"))
  mover = "true"
  

  setTimeout(movingWindowLeft,1)

}

function moveWindowRight() {
  //alert(getPos(window1,"boxmax"))
  mover = "true"
  

  setTimeout(movingWindowRight,1)


}

function stopMoving() {
  mover = "false"
  
}

function movingWindowLeft() {
  if (mover == "false") {
    return;
  } else {
    window1.translateX(-0.02)
    shutter1.translateX(-0.02)
    windowRaftSquare.translateX(-0.02)
    windowRaftMiddle.translateX(-0.02)
    windowRaftRight.translateX(-0.02)
    windowRaftLeft.translateX(-0.02)

    
    setTimeout(stopThemove2,1)
  }
}

function stopThemove2() {
  //alert(getPos(shutter1,"boxmax"))
  //alert(getPos(shell,"boxmax"))
  if (parseFloat(getPos(shutter1,"boxmin")) - 0.2 <= parseFloat(getPos(shell,"boxmin"))) {
    return;
    
  }else {
    setTimeout(movingWindowLeft,1)
  }
}

function movingWindowRight() {
  if (mover == "false") {
    return;
  } else {
    starc = document.getElementById("objtosel").innerHTML 


    chbakhh = moveListo.indexOf(starc);
   
    moveListo[chbakhh+1].translateX(0.02)
    moveListo[chbakhh+2].translateX(0.02)
   //window1.translateX(0.02)
    //shutter1.translateX(0.02)
    //windowRaftSquare.translateX(0.02)
    //windowRaftMiddle.translateX(0.02)
    //windowRaftRight.translateX(0.02)
    //windowRaftLeft.translateX(0.02)

    
    setTimeout(stopThemove,1)
  }
}

function stopThemove() {
   starc = document.getElementById("objtosel").innerHTML 


    chbakhh = moveListo.indexOf(starc);
  //alert(getPos(shutter1,"boxmax"))
  //alert(getPos(shell,"boxmax"))
  if (parseFloat(getPos(moveListo[chbakhh+2],"boxmax")) + 0.2 >= parseFloat(getPos(shell,"boxmax"))) {
    alert("HAAAA")
    return;
    
  }else {
    setTimeout(movingWindowRight,1)
  }
}



function addWorkbench() {
  let side = lastSelectedSide
 
  for ( i of workPushed) {
                  if (i.name.includes(side)) {
                    alert("Cannot add more workbenched on this wall")
                     viewObjects = true
        interiorObjects()
                    return
                  }
                }
  viewObjects = true
  if (Dpath != "capecode/") {
  interiorObjects()
} else {
  transparentt()
}
  //document.getElementById("14x24").style.display = "block"
  //gui.open()
  //workbenchF.open()
  //winFolder.close()
  //generalF.close()
  //doorFolder.close()

  //options()
   
    if ( side == "Left") {
      side = "Left"
       camera.position.set( 180, 190, -10 )
      
        camera.updateProjectionMatrix();
    } else if ( side == "Front") {
      side = "Front"
      camera.position.set( 1, 90, -80 )
   
    camera.updateProjectionMatrix();
    } else if ( side == "Right") {
      side = "Right"
       camera.position.set( -36.68909383228039,39.419528451967935 , 0.10569006870848356 )
   
    camera.updateProjectionMatrix();
    } else if ( side == "Back") {
      side = "Back"
      camera.position.set( 0.11261170007419273,37.038006195708185 , 39.09185868760523 )
      camera.updateProjectionMatrix();
    }
    //Interior()
    loadingWorkbench("workbench6",side)
   
}


function moveShitLeft() {
  starc = document.getElementById("objtosel").innerHTML 


    chbakh = objectsList.indexOf(starc);
  

    if (starc == "FrontWindow1") {

     
    setTimeout(moveWindowLeft,1)
  } else if (starc == "SideWindow1") {
    moveWindow2Left()
  }
    else if  (starc == "FrontDoor") {
      moveDoorLeft()
    } else {
      setTimeout(moveWindowRight,1)
    }
  }

function moveShitRight() { 

    if (document.getElementById("objtosel").innerHTML == "FrontWindow1") {
     
    moveWindowRight()
  } else if (document.getElementById("objtosel").innerHTML == "SideWindow1") {
    moveWindow2Right()
  }
    else if  (document.getElementById("objtosel").innerHTML == "FrontDoor") {
      moveDoorRight()
    } else {
      return;
    }
  }






function moveShit(x) {
  stat = document.getElementById("dropingobj").innerHTML
  var movingObj = "movingO = " + stat + "Dict"
  eval(movingObj)
  setTimeout(moveIt,1,x,movingO)
}

function sortObjects2(sidira) {
  let length, available, ref_length, marge,ref,translation, obj_main,tempTest,possible
  let objs = []
  for (stuff of listObj) {
    if ( stuff.name.includes(sidira) && (stuff.name.includes("Window") || stuff.name.includes("Door")) ) {
      objs.push(stuff)
    }
  }
  if ( objs[0].name.includes("Door")) {
    tempTest = objs[0]
    objs.splice(0,1)
    objs.splice(parseInt(objs.length/2),0,tempTest)

  }
  let additionlength = 0
  let side = sidira
  switch(side){
    case "Front":
    //length = getPos(front,"boxlength")
       length = parseFloat(getPos(righty,"boxmin")) - parseFloat(getPos(lefty,"boxmax"))
    for ( obj of objs) {
      ref = object_reference(obj)
      ref_length = parseFloat(getPos(ref,"boxlength"))
      additionlength += ref_length
    }
    available = length - additionlength 
    marge = available / ( objs.length + 1 )
    //alert(available)
    //alert(marge)
    for ( obj of objs ) {
      if ( objs.indexOf(obj) == 0 ) {
        ref = object_reference(obj)
        obj_main = door_or_window(obj)
        translation = translateOn(lefty,"boxmax",ref,"boxmin",marge)
        obj_main.translateX(translation)
        obj.translate()
        previous_ref = ref
      } else {
        ref = object_reference(obj)
        obj_main = door_or_window(obj)
        translation = translateOn(previous_ref,"boxmax",ref,"boxmin",marge)
        obj_main.translateX(translation)
        obj.translate()
        previous_ref = ref
      }
      possible = check_if_possible(obj)
      

    }
    if ( possible == true) {
 
      } else {
        removeObject(obj.name)
 
        sortObjects2(side)
      }
    break;
    case "Back":
     //length = getPos(backty,"boxlength")
       length = parseFloat(getPos(righty,"boxmin")) - parseFloat(getPos(lefty,"boxmax"))
    for ( obj of objs) {
      ref = object_reference(obj)
      ref_length = parseFloat(getPos(ref,"boxlength"))
      additionlength += ref_length
    }
    available = length - additionlength 
    marge = available / ( objs.length + 1 )
    //alert(available)
    //alert(marge)
    for ( obj of objs ) {
      if ( objs.indexOf(obj) == 0 ) {
        ref = object_reference(obj)
        obj_main = door_or_window(obj)
        translation = translateOn(lefty,"boxmax",ref,"boxmin",marge)
        obj_main.translateX(translation)
        obj.translate()
        previous_ref = ref
      } else {
        ref = object_reference(obj)
        obj_main = door_or_window(obj)
        translation = translateOn(previous_ref,"boxmax",ref,"boxmin",marge)
        obj_main.translateX(translation)
        obj.translate()
        previous_ref = ref
      }
    }
        possible = check_if_possible(obj)
     if ( possible == true) {
 
      } else {
        removeObject(obj.name)
 
        sortObjects2(side)
      }
    break;
    case "Left":
     //length = getPos(lefty,"boxlengthz")
     length = parseFloat(getPos(front,"boxminz")) - parseFloat(getPos(backty,"boxmaxz"))
    for ( obj of objs) {
      ref = object_reference(obj)
      ref_length = parseFloat(getPos(ref,"boxlengthz"))
      additionlength += ref_length
    }
    available = length - additionlength 
    marge = available / ( objs.length + 1 )
    //alert(available)
    //alert(marge)
    for ( obj of objs ) {
      if ( objs.indexOf(obj) == 0 ) {
        ref = object_reference(obj)
        obj_main = door_or_window(obj)
        translation = translateOn(front,"boxminz",ref,"boxmaxz",-marge)
        obj_main.translateZ(translation)
        obj.translate()
        previous_ref = ref
      } else {
        ref = object_reference(obj)
        obj_main = door_or_window(obj)
        translation = translateOn(previous_ref,"boxminz",ref,"boxmaxz",-marge)
        obj_main.translateZ(translation)
        obj.translate()
        previous_ref = ref
      }
    }
       if ( length < additionlength) {
        possible = false
      } else {
        possible = true
      }
     if ( possible == true) {
 
      } else {
        removeObject(obj.name)
 
        sortObjects2(side)
      }
    break;
    case "Right":
      //length = getPos(righty,"boxlengthz")
      length = parseFloat(getPos(front,"boxminz")) - parseFloat(getPos(backty,"boxmaxz"))
    for ( obj of objs) {
      ref = object_reference(obj)
      ref_length = parseFloat(getPos(ref,"boxlengthz"))
      additionlength += ref_length
    }
    available = length - additionlength 
    marge = available / ( objs.length + 1 )
    //alert(available)
    //alert(marge)
    for ( obj of objs ) {
      if ( objs.indexOf(obj) == 0 ) {
        ref = object_reference(obj)
        obj_main = door_or_window(obj)
        translation = translateOn(front,"boxminz",ref,"boxmaxz",-marge)
        obj_main.translateZ(translation)
        obj.translate()
        previous_ref = ref
      } else {
        ref = object_reference(obj)
        obj_main = door_or_window(obj)
        translation = translateOn(previous_ref,"boxminz",ref,"boxmaxz",-marge)
        obj_main.translateZ(translation)
        obj.translate()
        previous_ref = ref
     
      }
    }
      if ( length < additionlength) {
        possible = false
      } else {
        possible = true
      }
     if ( possible == true) {
  //pass
     
      } else {
       
        removeObject(obj.name)
 
        sortObjects2(side)
      }
    break;
  } 

}

function moveIt(x,movingO) {
  mover = "true"
  setTimeout(moveItt,1,x,movingO)
}

function moveItt(x,movingO) {
  if ( x == 0.02 || x == -0.02 ) {
    theRValue = x 
  } 
   if (theRValue == -0.02 ) {
    speedofmovee = - speedofmove
  } else if ( theRValue == 0.02){
    speedofmovee = speedofmove
  }

 if (mover == "false") {
    return;
  } else {
    if (movingO.name.includes("Door")) {
    var movingListe = [movingO.door,movingO.close,movingO.hinge,movingO.trim,movingO.raft]
    if ( typeof(movingO.ramp) != "undefined") {
      movingListe.push(movingO.ramp)
    } if (typeof(movingO.x) == "object") {
      movingListe.push(movingO.x)
    } if ( typeof(movingO.close2) != "undefined" && movingO.door.model == "standard/") {
      movingListe.push(movingO.close2)
    }
    if ( typeof(movingO.designerTrim) == "object") {
      movingListe.push(movingO.designerTrim)
    }
    try {
      if ( typeof(movingO.transom) == "object") {
        movingListe.push(movingO.transom)
      }
    } catch {
      //pass
    }
  } else if ( movingO.name.includes("Window")) {
    var movingListe = [movingO.window,movingO.raft]
    if ( movingO.shutter != "none") {
      movingListe.push(movingO.shutter)
    } 
    if ( movingO.trim != "none") {
      movingListe.push(movingO.trim)
    }
  if (typeof(movingO.box) == "object") {
    movingListe.push(movingO.box)
  }
  } else if (movingO.name.includes("loft")) {
    var movingListe = [movingO.loft,movingO.close]

  } else if ( movingO.name.includes("Workbench")) {
    var movingListe = [movingO.workbench]
  } else if ( movingO.includes("loft2")) {
    var movingListe = [movingO.loft,movingO.close]
  }

    if (movingO.name.includes("Front")) {
      var c = 1
    for  ( objtomove of movingListe) {
      try {
        objtomove.translateX(speedofmovee)

      
    } catch {
      console.log("erno")
    }
    c+= 1
      }
      
      c = 0
  } else if (movingO.name.includes("Right")) {

     var c = 1
    for  ( objtomove of movingListe) {
      try {

        objtomove.translateZ(-speedofmovee)
      
    } catch {
      console.log("erno")
    }
    c+= 1
      }
      
      c = 0
   } else if ( movingO.name.includes("Left")) {
       var c = 1
    for  ( objtomove of movingListe) {
      try {
        objtomove.translateZ(speedofmovee)
      
    } catch {
      console.log("erno")
    }
    c+= 1
      }

      c = 0
  } else if (movingO.name.includes("Back")) {
     var c = 1
    for  ( objtomove of movingListe) {
      try {
        objtomove.translateX(-speedofmovee)
      
    } catch {
      console.log("erno")
    }
    c+= 1
      }
      if (theRValue == 0.02) {
        theRValue = -0.02
      } else {
        theRValue = 0.02
      }
      c = 0
  }

      if (movingO.name.includes("Front")) {
      var sirop = ""
      var sidor = "Front"
    } else if (movingO.name.includes("Back")) {
      var sirop = ""
      var sidor = "Back"
    } else if (movingO.name.includes("Right")) {
      var sirop = "z"
      var sidor = "Right"
    } else if ( movingO.name.includes("Left")) {
      var sirop = "z"
      var sidor = "Left"
    }

    var maesto = false
    if (movingO.name.includes("Door")) {
      var maxposto = parseFloat(getPos(movingO.trim,"boxmax" + sirop))
      var minposto = parseFloat(getPos(movingO.trim, "boxmin" + sirop))
    } else if ( movingO.name.includes("Window")) {
      if (movingO.shutter != "none") {
      var maxposto = parseFloat(getPos(movingO.shutter,"boxmax" + sirop))
      var minposto = parseFloat(getPos(movingO.shutter,"boxmin" + sirop))
  } else if ( movingO.trim != "none"){
      var maxposto = parseFloat(getPos(movingO.trim,"boxmax" + sirop))
      var minposto = parseFloat(getPos(movingO.trim,"boxmin" + sirop))
  } else {
      var maxposto = parseFloat(getPos(movingO.window,"boxmax" + sirop))
      var minposto = parseFloat(getPos(movingO.window,"boxmin" + sirop))
  }
  } else if (movingO.name.includes("loft")) {
    var maxposto = parseFloat(getPos(movingO.loft,"boxmax" + sirop))
    var minposto = parseFloat(getPos(movingO.loft,"boxmin" + sirop))
  } else if (movingO.name.includes("Workbench")) {
    var maxposto = parseFloat(getPos(movingO.workbench,"boxmax" + sirop))
    var minposto = parseFloat(getPos(movingO.workbench,"boxmin" + sirop))
  }
    if (movingO.name.includes("Right") ) {
      if ( theRValue == 0.02) {
        theRValuee = -0.02
      } else {
        theRValuee = 0.02
      }
    } else { 
      theRValuee = theRValue
    }
    setTimeout(stopThemovee,1,x,movingO)
  
    if ( movingO.name.includes("loft") || movingO.name.includes("Workbench")) {
      //pass
    } else {
    setTimeout(isItConflicting,1,x,movingO)
    }
  }
}




function isItConflicting(x,movingO) {
  if (CONFLICTING == false) {
    let reference1,reference2,posmin1,posmin2,posmax1,posmax2,transval,main1,main2,newposmax
    let side = movingO.name.replace(/[0-9]/g,'')
    side = side.replace("Window","")
    side = side.replace("Door","")

    reference1 = object_reference(movingO)
    main1 = door_or_window(movingO)


  switch (side) {
    case "Front":
      for ( obj of listObj) {
        if (obj.name.includes("Front") && obj.name != movingO.name) {
        if ( x == 0.02) {
        
        posmin1 = parseFloat(getPos(reference1,"boxmin"))
        posmax1 = parseFloat(getPos(reference1,"boxmax"))
        reference2 = object_reference(obj)
        posmin2 = parseFloat(getPos(reference2,"boxmin"))
        posmax2 = parseFloat(getPos(reference2,"boxmax"))
        if ( posmin2 < posmax1 && posmax1 < posmax2) {
          stopMoving()

          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference1.translateX(posmax2-posmax1)
          main1.translateX(posmax2-posmax1)
          newpos = getPos(reference1,"boxmin")

          //obj.translate()

          reference2.translateX(newpos-posmax2)
         
          main2.translateX(newpos-posmax2)
          
          obj.translate()
          movingO.translate()
         
          //reference2.translateX(posmin1-posmin2)
          //main2.translateX(posmin1-posmin2)
          //obj.translate()
          //alert("here")
          //newposmax = parseFloat(getPos(reference2,"boxmax"))
          //reference1.translateX(newposmax - posmin1)
          //main1.translateX(newposmax-posmin1)
          //movingO.translate()
          /*
          if ( getPos(reference1,"boxmax")+0.015 >= getPos(front,"boxmax")) {
            var npos = getPos(reference1,"boxmax") 
            reference1.translateX(getPos(front,"boxmax") - npos-0.023)
            main1.translateX(getPos(front,"boxmax") - npos-0.023)
            movingO.translate()
            
            reference2.translateX(getPos(front,"boxmax") - npos-0.023)
            main2.translateX(getPos(front,"boxmax") - npos-0.023)
            obj.translate()
            //reference1.translateX(-0.09)
            //movingO.translate()
          }
    */
        CONFLICTING = false;
        }
      } else {

        posmin1 = parseFloat(getPos(reference1,"boxmin"))
        posmax1 = parseFloat(getPos(reference1,"boxmax"))
        reference2 = object_reference(obj)
        posmin2 = parseFloat(getPos(reference2,"boxmin"))
        posmax2 = parseFloat(getPos(reference2,"boxmax"))
        if ( posmin1 < posmax2 && posmin1 > posmin2) {
          stopMoving()

          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference1.translateX(posmin2-posmin1)
          main1.translateX(posmin2-posmin1)
          newpos = getPos(reference1,"boxmax")

          //obj.translate()

          reference2.translateX(newpos-posmin2)
         
          main2.translateX(newpos-posmin2)
          
          obj.translate()
          movingO.translate()
        
          /*
          stopMoving()
          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference2.translateX(posmin1-posmin2)
          main2.translateX(posmin1-posmin2)
          obj.translate()

          newposmax = parseFloat(getPos(reference2,"boxmin"))
          reference1.translateX(newposmax - posmax1)
          main1.translateX(newposmax-posmax1)
          movingO.translate()

          if ( getPos(reference1,"boxmin") >= getPos(front,"boxmin")) {
            
            var npos = getPos(reference1,"boxmin") 
            reference1.translateX(getPos(front,"boxmin") - npos+0.023)
            main1.translateX(getPos(front,"boxmin") - npos+0.023)
            movingO.translate()
            
            reference2.translateX(getPos(front,"boxmin")  -npos+0.023)
            main2.translateX(getPos(front,"boxmin") - npos+0.023)
            obj.translate()
        
          }
*/
        CONFLICTING = false;
    
    }
    }}}
      break;
    
    case "Back":
    for ( obj of listObj) {
      if ( obj.name.includes("Back") && obj.name != movingO.name) {
        if ( x == -0.02) {
        posmin1 = parseFloat(getPos(reference1,"boxmin"))
        posmax1 = parseFloat(getPos(reference1,"boxmax"))
        reference2 = object_reference(obj)
        posmin2 = parseFloat(getPos(reference2,"boxmin"))
        posmax2 = parseFloat(getPos(reference2,"boxmax"))
        if ( posmin2 < posmax1 && posmax1 < posmax2) {
           stopMoving()

          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference1.translateX(posmax2-posmax1)
          main1.translateX(posmax2-posmax1)
          newpos = getPos(reference1,"boxmin")

          //obj.translate()

          reference2.translateX(newpos-posmax2)
         
          main2.translateX(newpos-posmax2)
          
          obj.translate()
          movingO.translate()

          /*
          stopMoving()
          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference2.translateX(posmin1-posmin2)
          main2.translateX(posmin1-posmin2)
          obj.translate()

          newposmax = parseFloat(getPos(reference2,"boxmax"))
          reference1.translateX(newposmax - posmin1)
          main1.translateX(newposmax-posmin1)
          movingO.translate()


          if ( getPos(reference1,"boxmin")+0.015 >= getPos(front,"boxmin")) {

            var npos = getPos(reference1,"boxmax") 
            reference1.translateX(getPos(front,"boxmax") - npos-0.065)
            main1.translateX(getPos(front,"boxmax") - npos-0.065)
            movingO.translate()
            
            reference2.translateX(getPos(front,"boxmax") - npos-0.065)
            main2.translateX(getPos(front,"boxmax") - npos-0.065)
            obj.translate()
         
          }
          */

        CONFLICTING = false;
        } 
      } else {
        posmin1 = parseFloat(getPos(reference1,"boxmin"))
        posmax1 = parseFloat(getPos(reference1,"boxmax"))
        reference2 = object_reference(obj)
        posmin2 = parseFloat(getPos(reference2,"boxmin"))
        posmax2 = parseFloat(getPos(reference2,"boxmax"))
        if ( posmin1 < posmax2 && posmin1 > posmin2) {
          stopMoving()

          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference1.translateX(posmin2-posmin1)
          main1.translateX(posmin2-posmin1)
          newpos = getPos(reference1,"boxmax")

          //obj.translate()

          reference2.translateX(newpos-posmin2)
         
          main2.translateX(newpos-posmin2)
          
          obj.translate()
          movingO.translate()
          /*
          stopMoving()
          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference2.translateX(posmin1-posmin2)
          main2.translateX(posmin1-posmin2)
          obj.translate()

          newposmax = parseFloat(getPos(reference2,"boxmin"))
          reference1.translateX(newposmax - posmax1)
          main1.translateX(newposmax-posmax1)
          movingO.translate()
          if ( getPos(reference1,"boxmax")+0.015 <= getPos(front,"boxmax")) {

            var npos = getPos(reference1,"boxmin") 
            reference1.translateX(getPos(front,"boxmin") - npos+0.065)
            main1.translateX(getPos(front,"boxmin") - npos+0.065)
            movingO.translate()
            
            reference2.translateX(getPos(front,"boxmin") - npos+0.065)
            main2.translateX(getPos(front,"boxmin") - npos+0.065)
            obj.translate()
            }
         */
          

        CONFLICTING = false;
      }
    }}}
      break;
    case "Left":
     for ( obj of listObj) {
      if ( obj.name.includes("Left") && obj.name != movingO.name) {

        if ( x == 0.02) {
        posmin1 = parseFloat(getPos(reference1,"boxminz"))
        posmax1 = parseFloat(getPos(reference1,"boxmaxz"))
        reference2 = object_reference(obj)
        posmin2 = parseFloat(getPos(reference2,"boxminz"))
        posmax2 = parseFloat(getPos(reference2,"boxmaxz"))
        if ( posmin2 < posmax1 && posmax1 < posmax2) {
           stopMoving()
           

          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference1.translateZ(posmax2-posmax1)
          main1.translateZ(posmax2-posmax1)
          newpos = getPos(reference1,"boxminz")

          //obj.translate()

          reference2.translateZ(newpos-posmax2)
         
          main2.translateZ(newpos-posmax2)
          
          obj.translate()
          movingO.translate()


          /*
          stopMoving()
          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference2.translateX(posmin1-posmin2)
          main2.translateX(posmin1-posmin2)
          obj.translate()

          newposmax = parseFloat(getPos(reference2,"boxmax"))
          reference1.translateX(newposmax - posmin1)
          main1.translateX(newposmax-posmin1)
          movingO.translate()


          if ( getPos(reference1,"boxmin")+0.015 >= getPos(front,"boxmin")) {

            var npos = getPos(reference1,"boxmax") 
            reference1.translateX(getPos(front,"boxmax") - npos-0.065)
            main1.translateX(getPos(front,"boxmax") - npos-0.065)
            movingO.translate()
            
            reference2.translateX(getPos(front,"boxmax") - npos-0.065)
            main2.translateX(getPos(front,"boxmax") - npos-0.065)
            obj.translate()
         
          }
          */

        CONFLICTING = false;
        } 
      } else {

        posmin1 = parseFloat(getPos(reference1,"boxminz"))
        posmax1 = parseFloat(getPos(reference1,"boxmaxz"))
        reference2 = object_reference(obj)
        posmin2 = parseFloat(getPos(reference2,"boxminz"))
        posmax2 = parseFloat(getPos(reference2,"boxmaxz"))
        if ( posmin1 < posmax2 && posmin1 > posmin2) {
          stopMoving()

          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference1.translateZ(posmin2-posmin1)
          main1.translateZ(posmin2-posmin1)
          newpos = getPos(reference1,"boxmaxz")

          //obj.translate()

          reference2.translateZ(newpos-posmin2)
         
          main2.translateZ(newpos-posmin2)
          
          obj.translate()
          movingO.translate()
          /*
          stopMoving()
          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference2.translateX(posmin1-posmin2)
          main2.translateX(posmin1-posmin2)
          obj.translate()

          newposmax = parseFloat(getPos(reference2,"boxmin"))
          reference1.translateX(newposmax - posmax1)
          main1.translateX(newposmax-posmax1)
          movingO.translate()
          if ( getPos(reference1,"boxmax")+0.015 <= getPos(front,"boxmax")) {

            var npos = getPos(reference1,"boxmin") 
            reference1.translateX(getPos(front,"boxmin") - npos+0.065)
            main1.translateX(getPos(front,"boxmin") - npos+0.065)
            movingO.translate()
            
            reference2.translateX(getPos(front,"boxmin") - npos+0.065)
            main2.translateX(getPos(front,"boxmin") - npos+0.065)
            obj.translate()
            }
         */
          

        CONFLICTING = false;
      }
    }}}
    
      break;
    case "Right":
     for ( obj of listObj) {
      if ( obj.name.includes("Right") && obj.name != movingO.name) {

        if ( x == -0.02) {
        posmin1 = parseFloat(getPos(reference1,"boxminz"))
        posmax1 = parseFloat(getPos(reference1,"boxmaxz"))
        reference2 = object_reference(obj)
        posmin2 = parseFloat(getPos(reference2,"boxminz"))
        posmax2 = parseFloat(getPos(reference2,"boxmaxz"))
        if ( posmin2 < posmax1 && posmax1 < posmax2) {
           stopMoving()
           

          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference1.translateZ(posmax2-posmax1)
          main1.translateZ(posmax2-posmax1)
          newpos = getPos(reference1,"boxminz")

          //obj.translate()

          reference2.translateZ(newpos-posmax2)
         
          main2.translateZ(newpos-posmax2)
          
          obj.translate()
          movingO.translate()


          /*
          stopMoving()
          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference2.translateX(posmin1-posmin2)
          main2.translateX(posmin1-posmin2)
          obj.translate()

          newposmax = parseFloat(getPos(reference2,"boxmax"))
          reference1.translateX(newposmax - posmin1)
          main1.translateX(newposmax-posmin1)
          movingO.translate()


          if ( getPos(reference1,"boxmin")+0.015 >= getPos(front,"boxmin")) {

            var npos = getPos(reference1,"boxmax") 
            reference1.translateX(getPos(front,"boxmax") - npos-0.065)
            main1.translateX(getPos(front,"boxmax") - npos-0.065)
            movingO.translate()
            
            reference2.translateX(getPos(front,"boxmax") - npos-0.065)
            main2.translateX(getPos(front,"boxmax") - npos-0.065)
            obj.translate()
         
          }
          */

        CONFLICTING = false;
        } 
      } else {

        posmin1 = parseFloat(getPos(reference1,"boxminz"))
        posmax1 = parseFloat(getPos(reference1,"boxmaxz"))
        reference2 = object_reference(obj)
        posmin2 = parseFloat(getPos(reference2,"boxminz"))
        posmax2 = parseFloat(getPos(reference2,"boxmaxz"))
        if ( posmin1 < posmax2 && posmin1 > posmin2) {
          stopMoving()

          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference1.translateZ(posmin2-posmin1)
          main1.translateZ(posmin2-posmin1)
          newpos = getPos(reference1,"boxmaxz")

          //obj.translate()

          reference2.translateZ(newpos-posmin2)
         
          main2.translateZ(newpos-posmin2)
          
          obj.translate()
          movingO.translate()
          /*
          stopMoving()
          CONFLICTING = true;
          main2 = door_or_window(obj)
          reference2.translateX(posmin1-posmin2)
          main2.translateX(posmin1-posmin2)
          obj.translate()

          newposmax = parseFloat(getPos(reference2,"boxmin"))
          reference1.translateX(newposmax - posmax1)
          main1.translateX(newposmax-posmax1)
          movingO.translate()
          if ( getPos(reference1,"boxmax")+0.015 <= getPos(front,"boxmax")) {

            var npos = getPos(reference1,"boxmin") 
            reference1.translateX(getPos(front,"boxmin") - npos+0.065)
            main1.translateX(getPos(front,"boxmin") - npos+0.065)
            movingO.translate()
            
            reference2.translateX(getPos(front,"boxmin") - npos+0.065)
            main2.translateX(getPos(front,"boxmin") - npos+0.065)
            obj.translate()
            }
         */
          

        CONFLICTING = false;
      }
    }}}
       
      break;
  }
} else {
  console.log("conflicting still true")
}
}
function stopThemovee(x,movingO) {


  if (movingO.name.includes("Window")) {
  if (movingO.shutter != "none") {
      var sbika = movingO.shutter
    } else if (movingO.trim != "none") { 
      var sbika = movingO.trim
    } else {
      var sbika = movingO.window 
    }
  }
  if (movingO.name.includes("Door")) {
    var sbika = movingO.trim
  } else if (movingO.name.includes("loft")) {
    var sbika = movingO.loft
  }
  if (movingO.name.includes("loft")) {
    ovala = 0.15
  } else {
    ovala = 0.28
  }
  if (movingO.name.includes("Workbench")) {
    var sbika = movingO.workbench
    ovala = 0.12

  }
  if (movingO.name.includes("Front") ||movingO.name.includes("Back")) {
  if ( theRValue == -0.02 ) {
    
 if (parseFloat(getPos(sbika,"boxmin")) - ovala <= parseFloat(getPos(shell,"boxmin"))) {
    return;
    
  }else {
   
    setTimeout(moveItt,1,x,movingO)
  }
} else {
  if (parseFloat(getPos(sbika,"boxmax")) + ovala >= parseFloat(getPos(shell,"boxmax"))) {
  
    return;
  }else {
    setTimeout(moveItt,1,x,movingO)
  }

}
} else if ( movingO.name.includes("Right") || movingO.name.includes("Left")) {
  if ( theRValuee == -0.02) {
   
      var ivali = 0.28
       if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
        ivali = 0.32
      }   
    
    if (parseFloat(getPos(sbika,"boxminz")) - ivali <= parseFloat(getPos(shell,"boxminz"))) {
      return;
    }else {
    setTimeout(moveItt,1,x,movingO)
  }

  } else {
      
      var ivali = 0.28
      if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
        ivali = 0.61
      }   
    if (parseFloat(getPos(sbika,"boxmaxz")) + ivali >= parseFloat(getPos(shell,"boxmaxz"))) {
    return;
    }else {
    setTimeout(moveItt,1,x,movingO)
  }
  }
}
}

function architecturalShingles() {
        //XS = (XX * 4) / 1
        //ZS = XS
        roofStyle = "standard"
        XS = ZS = 1
         if ( roofingText != architecturalShingles) {
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
        if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
           if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
      }
        roofingText = architecturalShingles
        var htmlMetal = document.getElementById("metalColor")
        htmlMetal.style.display = "none"
        var htmlShingle = document.getElementById("shingleColor")
        htmlShingle.style.display = "block"
        textureS = new THREE.TextureLoader().load("Textures/archiRoof.png")
        textureS.wrapS = textureS.wrapT = THREE.RepeatWrapping;
        //texture.repeat.set( 3, 3 );
        textureS.anisotropy = 16;
        textureS.repeat.set(XS,ZS)
        //texture.magFilter = THREE.NearestFilter;
        //texture.minFilter = THREE.NearestFilter;
       
        //textureS2 = new THREE.TextureLoader().load("Textures/archiRoof_NRM.jpg")
        //textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        //texture.repeat.set( 1, 1 );
        //textureS2.anisotropy = 16;
        //textureS2.magFilter = THREE.NearestFilter;
        //textureS2.minFilter = THREE.NearestFilter;

       
        //textureS.rotation = ( Math.PI / 2)
        //textureS2.rotation = (Math.PI / 2)
        
         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = ""
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = ""
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }
        for ( i = 0; i<shingles.material.length;i++) {
          
          shingles.material[i].metalness = 0
          shingles.material[i].map = textureS 
    
          shingles.material[i].normalMap = ""

        
          shingles.material[i].needsUpdate = true 
        
        }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = ""
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap =""
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = ""
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = ""
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        
        try {
          for ( c of dormerShingle.material) {
            c.map = textureS 
            c.normalMap = ""
            c.needsUpdate = true
          }
        } catch {
          //pass
        }

}

 var roofingText = architecturalShingles

function MetalNess() {
   var path = Dpath + "roof/"
          var element = "shingle1"
          var mtlLoader = new THREE.MTLLoader();
               
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader();
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                console.log(node.material)
                node.castShadow = true;

                node.receiveShadow = true;
                shingles = node



              }
             })  
          shingles = mesh
             
             
            scene.add(mesh)         
          })         
         });         
       }

function rotateMetal() {
  texture.rotation = ( Math.PI/2 )
  texture.repeat.set(4,4)
    for ( i = 0;i<shingles.material.length;i++) {
      if (!([11,12,13,15,4,6,10].includes(i))) {
    shingles.material[i].metalness = 1
    shingles.material[i].map =  texture
   // shingles.material[i].normalMap = texture2
    //shingles.material[i].metalnessMap = texture
    shingles.material[i].needsUpdate = true 
}
    //shingles2.material[i].metalness = 1
    //shingles2.material[i].map =  texture
   // shingles.material[i].normalMap = texture2
    //shingles.material[i].metalnessMap = texture
    //shingles2.material[i].needsUpdate = true 
  }

}
testmetalvalue = 1

OP = 0




function metalShingles() {
        architecturalStyle = "metal"
        roofStyle = "metal"
        //XS = 4
        //ZS = 4
        XS = (XX * 4) / 1
        ZS = XS
         if ( roofingText != metalShingles) {
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
      if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
           if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
      }

        var htmlMetal = document.getElementById("metalColor")
        htmlMetal.style.display = "block"
        var htmlShingle = document.getElementById("shingleColor")
        htmlShingle.style.display = "none"

        textureS = new THREE.TextureLoader().load("Textures/metalTest/p9.jpg")
        textureS.wrapS =  THREE.RepeatWrapping;
        textureS.wrapT = THREE.RepeatWrapping;
        textureS.anisotropy = 16;
        
        textureS.repeat.set(XS,ZS)
        textureS.magFilter = THREE.NearestFilter;
        textureS.minFilter = THREE.NearestFilter;
       
        textureS2 = new THREE.TextureLoader().load("Textures/metalTest/p2normal.bmp")
        textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        textureS2.anisotropy = 16;
        
        textureS2.repeat.set(XS,ZS)
        textureS2.magFilter = THREE.NearestFilter;
         textureS2.minFilter = THREE.NearestFilter;
      
      
          textureS.rotation = (Math.PI/2)
          textureS2.rotation = (Math.PI/2)
        
        
  for ( i = 0;i<shingles.material.length;i++) {
   
   
    //shingles.material[i].metalness = 1
    shingles.material[i].map =  textureS
  
    shingles.material[i].normalMap = ""
    shingles.material[i].needsUpdate = true 
//}
  }
   if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = ''
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap = ''
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = ''
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = ''
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        
           if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = textureS2
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = textureS2 
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }

    
                try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].map = textureS
          cupolaShingle.material[i].normalMap = textureS2 
          cupolaShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

      try { 
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].map = textureS
          dormerShingle.material[i].normalMap = textureS2 
          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }
  roofingText = metalShingles
 // updateSizeShingles()
}

// ******************************************************************** BUTTON FUNCTIONS *********************************************************************************** START ***************
// -------------------- SWITCH BACKGROUND TO BLACK OR TEXTURE ''----------------------------------------------- START **
      function switchBackground() { if ( switchb == true) {
          		  groundMaterial.wireframe = true
                groundMaterial.wireframeLinewidth = 50
                groundMaterial.wireframeLinejoin ="round"
                groundMaterial.wireframeLinecap = "round"
                groundMaterial.wireframe = true
                groundMaterial.map = ""
                switchb = false
                groundMaterial.needsUpdate = true
                scene.background = new THREE.Color( 0x000000);
                } else {
               	groundMaterial.map = groundTexture
                switchb = true
                //meshGround.material.color.set(0x00ff00)
                groundMaterial.wireframe = false;
                groundMaterial.needsUpdate = true
                scene.background = new THREE.Color( 0xcce0ff );
               

                //renderer.setClearColor(0x87ceeb,1)
               
              }
     }
// -------------------- SWITCH BACKGROUND TO BLACK OR TEXTURE ''------------------------------------------------ END **

function scaleBoards() {
  //boardRight.scale.z = ZZ
  scaleBetween2Objects(boardRight,boardBackB,"boxminz",boardFrontF,"boxmaxz","z")
  scaleBetween2Objects(boardLeft,boardBackB,"boxminz",boardFrontF,"boxmaxz","z")
  scaleBetween2Objects(boardFrontF,boardLeft,"boxmin",boardRight,"boxmax","x")
  scaleBetween2Objects(boardBackB,boardLeft,"boxmin",boardRight,"boxmax","x")
  /*
  while ( getPos(boardRight,"boxmaxz") < getPos(boardFrontF,"boxmaxz")) {
    boardRight.scale.z += 0.005
    centerUnknownZ(boardRight,righty)
  }
  while ( getPos(boardLeft,"boxmaxz") < getPos(boardFrontF,"boxmaxz")) {
    boardLeft.scale.z += 0.005
    centerUnknownZ(boardLeft,lefty)
  }
  while ( getPos(boardFrontF,"boxmax") < getPos(boardLeft,"boxmax")) {
    boardFrontF.scale.x += 0.005
    centerUnknownX(boardFrontF,front)
  }
  while ( getPos(boardBackB,"boxmax") < getPos(boardLeft,"boxmax")) {
    boardBackB.scale.x += 0.005
    centerUnknownX(boardBackB,backty)
  }
  */
}


function t(f) {
  try {
    f
  } catch {
    //pass
  }
}

// ----------------------------- SHED SIZE FUNCTIONS ----------------------------------------------------------- START **
function confirmMoving() {

 
    //addSize(X,Z)
    /*
    removingFrames()
    chtayn = "True"
    chitone = "True"
    BA3 = "fds"
    BA3OP == "fds"
    if ( Dpath != "garage/") {
    loadingRightOne()
  }
    //loadingLeftOne()
    //loadingRafters2()
    //loadingRBack()
    //loadingFraming2()
    */
    
   
    removingFrames(true)
    
    chtayn = "True"
    chitone = "True"
    loadingRafters2()
    loadingRBack()

    if ( Dpath != "minibarn/" && Dpath != "vinylbarn/") {
    loadingLeftOne()
    if ( GARAGEMODEL == false) {
    loadingRightOne()
  }
}
    
    //removeInsidedoor()

  //setTimeout(removeInsidedoor,1500,"yup")
  //

}

function setRandomStuff() {
     shellcornermin = parseFloat(getPos(shell,"boxmaxz"))
     reversedShellMin  = parseFloat(getPos(shell,"boxminz"))

     reverseshellmin = parseFloat(getPos(shell,"boxmax"))
     shellmin = parseFloat(getPos(shell,"boxmin"))
     cornersmin = parseFloat(getPos(corners,"boxmin"))
     framingmin = parseFloat(getPos(corners,"boxmin"))
     shellmax = parseFloat(getPos(shell,"boxmin"))



     shellmaxpos = parseFloat(getPos(shell,"boxmax"))
     shellminpos = parseFloat(getPos(shell,"boxmin"))
     BA3 = "fds"
     BA3OP = "fds";
     BA3PLAT = "Selto"


    
   
    shellcornermax = parseFloat(getPos(shell,"boxmaxz"))
    cornerzmin = parseFloat(getPos(corners,"boxmaxz"))
    the_resylt = ( cornerzmin * shellcornermax) / shellcornermin
    the_resylt2 = the_resylt - cornerzmin    
    the_resylt22 += the_resylt2

    resultcorner = (cornersmin * shellmax) /shellmin
    resultcorner2 = resultcorner - cornersmin
    resultcorner22 += resultcorner2
    

    resultframing = (framingmin * shellmax) / shellmin
    resultframing2 = resultframing - framingmin + ( shellmin - framingmin )


 
    reverseshellmax = parseFloat(getPos(shell,"boxmax"))
    reversecorner = parseFloat(getPos(corners,"boxmax"))
    resultreverse = ( reversecorner * reverseshellmax) / reverseshellmin 
    resultreverse2 = resultreverse - reversecorner
    resultreverse22 += resultreverse2

    reversedCorner = parseFloat(getPos(corners,"boxminz"))
    reversedShell = parseFloat(getPos(shell,"boxminz"))
    reversedResult = (reversedCorner * reversedShell ) / reversedShellMin 
    reversedResult2 = reversedResult - reversedCorner 
    reversedResult22 += reversedResult2
    chtayn = "True"
    if ( Dpath != "carriage/" && Dpath != "highCarriage/" & Dpath != "designerCarriage/") {
    shellMaxZ = parseFloat(getPos(shell,"boxminz"))
  }
    chitone = "True"

}
function firstRun() { 

 
  if ( Dpath == "Shed2/" || Dpath == "capecode/" || Dpath == "vinylbarn/" || Dpath == "minibarn/" || Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/" || Dpath == "woodshop/" || Dpath == "cabana/" || Dpath == "leanto/" || Dpath == "highbarn/") {
    XX = 1
    ZZ = 1

    setRandomStuff()
    try {
      if ( Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/")
    defaultPlat.translateX(resultcorner2)
  } catch {
    console.log("nop")
  }
    if ( Dpath != "leanto/") {
    
    loadingRBack()
  }
      loadingRafters2()
      xxx2 = 0.4077190160751343
      zzz2 = xxx2 
      zZ2 = 0
      p2 = []
      if ( Dpath == "designerCarriage/") {
        overhangStyle = "10"
        overhangsRight = []
        overhangsLeft = []
        miratecRight = []
        miratecLeft = []
      }
      
  if ( Dpath == "Shed2/"){
    loadingPlat2()
    loadingFloorFraming("framing162")
  } 
  if ( Dpath == "cabana/") {
    loadingPlatCabana()
  } else if ( Dpath == "leanto/") {
    loadingplatleanto()
  } else if (Dpath == "highbarn/") {
    loadingPlathighbarn()
  } else if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
    loadingPlatCarriage()
  }else if ( Dpath == "capecode/") {
    overhangStyle = "7inch"
    loadingplatcapecode()
    addingDoor("FrontDoor")
  
  } else if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
      try {
            scene.remove(designerRight)
            scene.remove(designerLeft)
          } catch {
            console.log("pd in loadDesigner")
          }
           try {
            scene.remove(shingles)
            scene.remove(shing2)
            
          } catch {
            console.log("no shing")
          }

          try {
            scene.remove(shnigle)
            
            
          } catch {
            console.log("no shnig")
          }
          try {
            scene.remove(shnig2)
          }catch {
            //pass
          } try {
            scene.remove(shnig3)
          }catch {
            //pass
          }
    loadingPlatminibarn()
  

    addingDoor("RightDoor")
  }
    
    if ( Dpath != "minibarn/" && Dpath != "vinylbarn/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/" && Dpath != "capecode/") {
    if ( GARAGEMODEL == false) {
    loadingRightOne()
  }


    loadingLeftOne()
    
    addingDoor("FrontDoor") 
  
  }
    loadingPlywood()
    //loadingFloorFraming()
  

    camera.fov = 10
    camera.updateProjectionMatrix()
  }
}


function loadingLofta() {
  
  if (mySelectedSide == "right") {
    loadingLoft2()
  } else if ( mySelectedSide == "left"){
    loadingLoft()
  }
}

    	function addSize(X1,Z1,st="none") {
        if ( (Z1 == "40" && Dpath == "capecode/") || (parseFloat(Z1)> 32 && (Dpath == "Shed2/" || Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage")) || (parseFloat(Z1)>24 && Dpath == "highbarn/") || ((parseFloat(Z1)>24 || (parseFloat(Z1) == "8" && parseFloat(X1) == "8") ||(parseFloat(Z1) == "10" && parseFloat(X1) == "10") || (parseFloat(Z1) == "12" && parseFloat(X1) == "12") ) && Dpath == "cabana/") || ((Dpath == "minibarn/" || Dpath == "vinylbarn/") && (parseFloat(Z1)>24 || (Z1 == "8"&&X1=="8") || (Z1 =="8" && X1 == "6"))) ) {
          alert(X1 + "x" + Z1 + " is a custom size .")
          return
        }

        try {
             document.querySelector('#selMaterial').innerHTML = ""
           } catch {
            //pass
           }
        let xTemp = XX 
        let zTemp = ZZ
        
        AX = X1
        AZ = Z1

        sizeD = X1 + "wide"
        if ( FirstAdd == true) {
          FirstAdd = false
      }
          try {
            ShPos = getPos(shingles,"boxminy")
        } catch {
          //pass
        }
         if ( ENDLOADING == "fdsfdsfdsf") {
            alert("Please wait.\nStill loading rafters")
        } else {
            ENDLOADING = false;
             camera.position.set( 20, 30, 40 );
            camera.fov = Z1
            camera.updateProjectionMatrix()

        X = X1
        Z = Z1
     
        B = X * 100 / 8
        A = Z * 100 / 10 //12.291
        ZZ = B / 100
        XX = A / 100
       
      

        document.getElementById("sizeInfo").innerHTML = "Size : " + X1 + "x" + Z1
    

   
   
    /*
    try {
      scene.remove(loft)
      loadingLoft()
    } catch {
      console.log("erno")
    }
    */
    /*
    try {
      centerUnknownZ(bulb,lefty)                
      centerUnknownX(bulb,fronty)
    } catch {
      console.log("erno")
    }
    */
    if ( Dpath != "capecode/") {
    try {
     shingles.scale.x = XX
     shingles.scale.z = ZZ
} catch {
  //pass 
}
}
     shellcornermin = parseFloat(getPos(shell,"boxmaxz"))
     reversedShellMin  = parseFloat(getPos(shell,"boxminz"))

     reverseshellmin = parseFloat(getPos(shell,"boxmax"))
     shellmin = parseFloat(getPos(shell,"boxmin"))
     cornersmin = parseFloat(getPos(corners,"boxmin"))
     framingmin = parseFloat(getPos(corners,"boxmin"))
      

     shell.scale.x = XX
     shell.scale.z = ZZ 
   
    //Scale Walls
   
     front.scale.x = XX
     backty.scale.x = XX 


   
     if ( Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/" ) {
     lefty.scale.z = ZZ 
     righty.scale.z = ZZ 
   }
     
    //Scale Walls

    //SORT OBJECTS /////


     try {
      ramps.scale.z = ZZ
     } catch {
      console.log("oiuoids")
     }
     try {
      wirings.scale.z = ZZ
     } catch {
      console.log("dsfjkdsfjkds")
     }
   try {
    plants1.scale.z = ZZ
  } catch {
    console.log("nd")
  }

     try {
      texture.repeat.set(RS*XX,RS*ZZ)
    } catch {
      console.log("error")
    }
     try {
      texture2.repeat.set(RS*XX,RS*ZZ)
    } catch {
      console.log("error")
    }
    
      //textureS.repeat.set(6,6)

        try {
      textureS.repeat.x = XS + XX
      textureS.repeat.z = ZS + ZZ
      textureS2.repeat.x = XS + XX 
      textureS2.repeat.z = ZS + ZZ
    } catch {
      console.log("error")
    }
    try {

      for ( i=0;i<shingles.material.length;i++) {
        if (!([11,12,13,15,4,6,10].includes(i))) {
        shingles.material[i].map = textureS
        shingles.material[i].normalMap = textureS2
  }
      
    }
  } catch {
    //pass
  }

      
     try {
      scene.remove(rafito)
     }catch {
      console.log("fds")
     }

    try {
     plywood.scale.x = XX 
     plywood.scale.z = ZZ 
   }catch {
    console.log("error resizing plywood")
   }
     
     //framing.scale.z = ZZ 
     

     
     shellmax = parseFloat(getPos(shell,"boxmin"))



     shellmaxpos = parseFloat(getPos(shell,"boxmax"))
     shellminpos = parseFloat(getPos(shell,"boxmin"))
     BA3 = "fds"
     BA3OP = "fds";
     BA3PLAT = "Selto"

     removingFrames()
    
   
    shellcornermax = parseFloat(getPos(shell,"boxmaxz"))
    cornerzmin = parseFloat(getPos(corners,"boxmaxz"))
    the_resylt = ( cornerzmin * shellcornermax) / shellcornermin
    the_resylt2 = the_resylt - cornerzmin    
    the_resylt22 += the_resylt2

    resultcorner = (cornersmin * shellmax) /shellmin
    resultcorner2 = resultcorner - cornersmin
    resultcorner22 += resultcorner2
    

    resultframing = (framingmin * shellmax) / shellmin
    resultframing2 = resultframing - framingmin + ( shellmin - framingmin )

   
    floorLeft.translateX(resultcorner2)
    floorLeft.scale.z = ZZ + ZZ/12

  



    reverseshellmax = parseFloat(getPos(shell,"boxmax"))
    reversecorner = parseFloat(getPos(corners,"boxmax"))
    resultreverse = ( reversecorner * reverseshellmax) / reverseshellmin 
    resultreverse2 = resultreverse - reversecorner
    resultreverse22 += resultreverse2

    reversedCorner = parseFloat(getPos(corners,"boxminz"))
    reversedShell = parseFloat(getPos(shell,"boxminz"))
    reversedResult = (reversedCorner * reversedShell ) / reversedShellMin 
    reversedResult2 = reversedResult - reversedCorner 
    reversedResult22 += reversedResult2

      if ( Dpath != "cabana/") {
      defaultPlat.scale.z = ZZ
     }

    if( Dpath != "minibarn/" && Dpath != "vinylbarn/") {
    floorRight.translateX(resultreverse2)
    floorRight.scale.z = ZZ + ZZ/12
  }
    
    try {
    if ( Dpath != "cabana/" && Dpath != "capecode/") {
    closeRight.translateX(resultcorner2)
    closeLeft.translateX(resultreverse2)
  }
  } catch {
    //pass
  }

    if ( Dpath != "cabana/" && Dpath != "capecode/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/" && Dpath != "minibarn/" && Dpath != "leanto/" && Dpath != "highbarn/" && Dpath != "vinylbarn/") {
      defaultLeft1.translateX(resultcorner2)
      defaultLeft2.translateX(resultcorner2)
      defaultRight1.translateX(resultreverse2)
      defaultRight2.translateX(resultreverse2)
      defaultRight1.scale.z = ZZ 
      defaultRight2.scale.z = ZZ 
      defaultLeft1.scale.z = ZZ 
      defaultLeft2.scale.z = ZZ
    }

    try {
      if ( Dpath != "cabana/" && Dpath != "capecode/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/"&& Dpath != "minibarn/" && Dpath != "leanto/" && Dpath != "highbarn/" && Dpath != "vinylbarn/") {
    closeRight.scale.z = ZZ 
    closeLeft.scale.z = ZZ
  }
  } catch {
    //pass
  }
    
    if ( Dpath != "minibarn/" && Dpath != "vinylbarn/") {
    rightone.translateX(resultreverse22)
    rightone.translateZ(the_resylt22)

    leftone.translateX(resultcorner22)
    leftone.translateZ(the_resylt22)
  }
 
    front.translateZ(the_resylt2)
    /*
    try {
      faceBoard.scale.x = XX
     
      centerUnknownX(faceBoard,front)
       if ( Dpath == "Shed2/") {
      translateOn(front,"boxmaxy",faceBoard,"boxmaxy")
    }

      

    } catch{
      //pass
    }
    */

    lefty.translateX(resultcorner2)
    righty.translateX(resultreverse2)

   
    backty.translateZ(reversedResult2)
    /*
    try {
      faceBoard2.scale.x = XX
     
      translateOn(backty,"boxmaxy",faceBoard2,"boxmaxy")

      centerUnknownX(faceBoard2,backty)
      translateOn(backty,"boxminz",faceBoard2,"boxminz")
    } catch {
      //pass
    }
    */
     try {
       translateOn(front,"boxmaxz",faceBoard,"boxminz")
      
      
     } catch {
      //pass
     }
     try {
       translateOn(backty,"boxmaxy",faceBoard2,"boxmaxy")
       translateOn(backty,"boxminz",faceBoard2,"boxmaxz")
     } catch {
      //pass
     }
     try {
    scaleBetween2Objects(faceBoard,rafterLeft,"boxmin",rafterRight,"boxmax","x")
    scaleBetween2Objects(faceBoard2,rafterLeft,"boxmin",rafterRight,"boxmax","x")
  } catch {
    //pass
  }
    backRaft.translateZ(reversedResult2)
    backRaft.scale.x = XX

    overClosing2.scale.x = XX 
    overClosing2.scale.z = ZZ
    
    overClosing.scale.x = XX
    overClosing.scale.z = ZZ
     centerUnknownX(overClosing,front)
      centerUnknownX(overClosing2,backty)
      try {
        lawm.translateZ(resultreverse2)
        lawm.translateX(resultcorner2)
      } catch {
        //pass
      }
      try {
        shovel.translateZ(resultreverse2)
        shovel.translateX(resultcorner2)
      } catch {
        //pass
      }
      try {
        translateOn(front,"boxmaxz",plant2,"boxmaxz",0.4)
      } catch {
        //
      }
      try {
        translateOn(front,"boxmaxz",plant3,"boxmaxz",0.4)
      } catch {
        //pass
      }
      
      try {
        if (typeof(overhangsLeft) == "object") {
          if (typeof(miratecRight) == "object") {

            translateOn(miratecLeft,"boxmin",overClosing2,"boxmin")
            scaleBetween2Objects(overClosing2,miratecLeft,"boxmin",miratecRight,"boxmax","x")

            translateOn(miratecLeft,"boxmin",overClosing,"boxmin")
            scaleBetween2Objects(overClosing,miratecLeft,"boxmin",miratecRight,"boxmax","x")
          } else {
            scaleBetween2Objects(overClosing2,backty,"boxmin",backty,"boxmax",axis)
        }
          /*
        while ( getPos(overClosing2,"boxmin") < getPos(backty,"boxmin")) {
          overClosing2.scale.x += 0.01
          centerUnknownX(overClosing2,backty)
        } 
      */
      }
      } catch {
        console.log("eror")
      }
    
    frontRaft.scale.x = XX 
    frontRaft.translateZ(the_resylt2)


    if ( Dpath != "highbarn/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/" && Dpath != "capecode/" && Dpath !="vinylbarn/" && Dpath != "minibarn/") {
    rafterLeft.scale.z = ZZ 
    rafterRight.scale.z = ZZ 
    rafterLeft.translateX(resultcorner2)
    rafterRight.translateX(resultreverse2)
  }
    if ( Dpath != "cabana/") {
    defaultPlat.translateX(resultcorner2)
  }

     boardLeft.translateX(resultcorner2)
    boardRight.translateX(resultreverse2)
    boardRight.scale.z = ZZ 
    boardLeft.scale.z = ZZ 
    
    boardFrontF.translateZ(the_resylt2)
    boardBackB.translateZ(reversedResult2)
    boardFrontF.scale.x = XX
    boardBackB.scale.x = XX
    if ( Dpath == "Shed2/") {
    scaleBoards()
    try {

        scaleToObject(faceBoard,front,"x")
        scaleToObject(faceBoard2,backty,"x")
        //faceBoard.scale.x = XX
        //faceBoard2.scale.x = XX
        //centerUnknownX(faceBoard,front)
        //centerUnknownX(faceBoard2,backty)
      } catch {
        //pass
      }
  }
    try {
      ventsRight.translateX(-resultreverse2)
      vents.translateX(resultcorner2)
      centerObjectsReversed(ventsRight)
      centerUnknownZ(vents,lefty)
      centerUnknownY(ventsRight,plat2)
      centerUnknownY(vents,plat2)
      vents.translateY(-0.07)
      ventsRight.translateY(-0.07)
    } catch {
      console.log("erno")
      /*
      try {
        vents.scale.x = XX+0.005
    
        centerObjects(vents)
      } catch {
        console.log("no")
      }
      */
    }
    if ( typeof(ventsRight) != "object") {
      try {
        vents.scale.x = XX+0.005
        centerObjects(vents)
        centerUnknownY(vents,plat2)
        vents.translateY(-0.07)
      } catch {
        console.log("fd")
      }
    }
      
   // alert(the_resylt2 + "    " + resultreverse2)

    cornersFrontLeft.translateX(resultcorner2)
    cornersFrontRight.translateX(resultreverse2)
    cornersBackRight.translateX(resultreverse2)
    cornersBackLeft.translateX(resultcorner2)

    cornersFrontLeft.translateZ(the_resylt2)
    cornersBackLeft.translateZ(reversedResult2)

    cornersFrontRight.translateZ(the_resylt2)
    cornersBackRight.translateZ(reversedResult2)

 
     dripFront.translateZ(the_resylt2)
     dripBack.translateZ(reversedResult2)
     //dripFront.scale.x = XX 
     //dripBack.scale.x = XX
       translateOn(rafterLeft,"boxmin",dripFront,"boxmin")
       translateOn(rafterLeft,"boxmin",dripBack,"boxmin")
       scaleBetween2Objects(dripFront,rafterLeft,"boxmin",rafterRight,"boxmax","x")
       scaleBetween2Objects(dripBack,rafterLeft,"boxmin",rafterRight,"boxmax","x")


    
  
     /*
     for ( sojb of objectsPushed) {
      let stab = "var this_dict = " + sojb + "Dict" 
      eval(stab)
      if ( this_dict.name.includes("Door")) {
      let dictListe = [this_dict.door,this_dict.close,this_dict.trim,this_dict.hinge,this_dict.raft]
      if ( typeof(this_dict.ramp) != "undefined") {
        dictListe.push(this_dict.ramp)
      } if (typeof(this_dict.x) == "object") {
        dictListe.push(this_dict.x)
      } 
        for ( z of dictListe) {
          if (this_dict.name.includes("FrontDoor")) {
             z.translateZ(the_resylt2)
             z.translateX(resultcorner2)
        }
        else if ( this_dict.name.includes("RightDoor")) {
            z.translateZ(reversedResult2)
            z.translateX(resultreverse2)
        }
        else if ( this_dict.name.includes("LeftDoor")) {
            z.translateZ(reversedResult2)
            z.translateX(resultcorner2)
        }
        else if ( this_dict.name.includes("BackDoor")) {
           z.translateZ(reversedResult2)
           z.translateX(resultcorner2)
        }
      }
    } else if ( this_dict.name.includes("Window")) {
      let dictListe2 = [this_dict.window,this_dict.raft]
      if ( this_dict.shutter != "none") {
        dictListe2.push(this_dict.shutter)
      } if (this_dict.trim != "none") {
        dictListe2.push(this_dict.trim)
      }
      if ( typeof(this_dict.box) == "object") {
        dictListe2.push(this_dict.box)
      }
      for ( z of dictListe2) {
          if (this_dict.name.includes("FrontWindow")) {
             z.translateZ(the_resylt2)
             z.translateX(resultcorner2)
        }
        else if ( this_dict.name.includes("RightWindow")) {
            z.translateZ(reversedResult2)
            z.translateX(resultreverse2)
        }
        else if ( this_dict.name.includes("LeftWindow")) {
            z.translateZ(reversedResult2)
            z.translateX(resultcorner2)
        }
        else if ( this_dict.name.includes("BackWindow")) {
           z.translateZ(reversedResult2)
           z.translateX(resultcorner2)
        }
      }
    } else if ( this_dict.name.includes("Workbench")) {
        this_dict.translate()
     }
  }
  */
    //SORT OBJECTS :
    /*
    if (XX < xTemp || ZZ < zTemp) {
    try {
    
      possibleLayout("Front")
    } catch {
      //pass
    }
    try {
      possibleLayout("Back")
    } catch {
      //pass
    }
    try {
      possibleLayout("Left")
    } catch {
      //pass
    }
    try {
      possibleLayout("Right")
    } catch {
      //pass
    }
    }
*/
      try {
     doorFloorLeft.scale.x = XX 
     doorFloorLeft.translateZ(the_resylt2)
   } catch {
    //pass
   }
     cornersStudFrontRight.translateX(resultreverse2)
     cornersStudFrontRight.translateZ(the_resylt2)

     cornersStudFrontLeft.translateX(resultcorner2)
     cornersStudFrontLeft.translateZ(the_resylt2)

     cornersStudBackLeft.translateX(resultcorner2)
     cornersStudBackLeft.translateZ(reversedResult2)

     cornersStudBackRight.translateX(resultreverse2)
     cornersStudBackRight.translateZ(reversedResult2)

     floorBack.translateZ(reversedResult2)
     floorBack.scale.x = XX 

   

 

     if ( Dpath != "highbarn/" && Dpath != "cabana/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "leanto/" && Dpath != "capecode/" && Dpath != "designerCarriage/" && Dpath != "minibarn/" && Dpath != "vinylbarn/") {
     loadingFloorFraming()
   }
     
     if ( Dpath != "leanto/") {
     loadingRafters2()
     loadingRBack()
   }
     //loadingShingModel()
     //setTimeout(loadingRBack,50)
if (typeof(dormer) == "object") {
  if (sizeD ==  "8wide") {
  
    PitchPath ="9pitch"
  pitchD = "9"
  }
    else if ( sizeD == "10wide") {
      PitchPath =   "8pitch"
      pitchD = "8"
    }
    
    else if ( sizeD == "12wide") {
      
    PitchPath = "7pitch"
    pitchD = "7"
  }
 else if ( sizeD == "14wide") {
    PitchPath = "6pitch"
  pitchD = "6"
}

  }
    if ( Dpath == "Shed2/") {
     loadingPlat2()
    } else if ( Dpath == "cabana/") {
      loadingPlatCabana()
    
  
    } else if ( Dpath == "highbarn/") {
      try {
        scene.remove(rafterLeft)
        scene.remove(rafterRight)
      } catch {
        //pass
      }
      loadingPlathighbarn()
    } else if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
      loadingPlatCarriage()
    } else if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
      loadingPlatminibarn()
        if ( sizeD == "8wide") {
      changeDoorSize("4")
    } else if ( sizeD == "6wide") {
      changeDoorSize("36")
    } else if ( sizeD == "10wide") {
      changeDoorSize("5")
    } else if ( sizeD == "12wide") {
      changeDoorSize("6")
    }
    } else if ( Dpath == "leanto/") {
      loadingplatleanto()
      
    } else if ( Dpath == "capecode/") {
       

     loadingplatcapecode()

    }

     
  //setTimeout(loadingPlat2,1)
 
     chtayn = "True"
     chitone = "True"
     if ( Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/") {
     shellMaxZ = parseFloat(getPos(shell,"boxminz"))
   }
     corners.scale.z = ZZ
     corners.scale.x = XX
     
     //rightone.translateZ(the_resylt2)
     if ( Dpath != "minibarn/" && Dpath != "vinylbarn/" && Dpath != "capecode/" && Dpath != "leanto/" && Dpath != "vinylbarn/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/") {
    setTimeout(loadingLeftOne,1)
   
    if (GARAGEMODEL == false) {
    setTimeout(loadingRightOne,1)
  }
  }

  try {
  if ( Dpath == "cabana/" && typeof(ventsBack) == "object") {

    translateOn(backty,"boxminz",ventsBack,"boxmaxz")
    translateOn(backty,"boxminz",ventsBack2,"boxmaxz")
    translateOn(backty,"boxmax",ventsBack,"boxmax",-0.5)
    translateOn(backty,"boxmin",ventsBack2,"boxmin", 0.5)
    
  }
} catch {
  //console.log(pdsq)
}
try {
      let tec = "Textures/" + myText
      applyTexture(tec,repeatSiding,rotateSiding,mySiding)
} catch {
  //pass
}

     /*
     door.translateX(resultcorner2)
     trim.translateX(resultcorner2)
     outsideTrim.translateX(resultcorner2)
     hinges.translateX(resultcorner2)
     window1.translateX(-resultcorner2)
     try {
     	shutter1.translateX(-resultcorner2)
     } catch {
     	console.log("no shutter to translate ")
     }

     try {
     	lowGlass.translateX(-resultcorner2)
     } catch {
     	console.log("no lowglass to translateX")
     }
     try {
     	lowFrame2.translateX(-resultcorner2)
     } catch {
     	console.log("no low frame to translate X ")
     }
     try {
     	lowFrame.translateX(-resultcorner2)
     } catch {
     	console.log("fdsfds")
     }
     try {
     	boxes.translateX(-resultcorner2)
     } catch {
     	console.log("no window box to translate ")
     }
     */

    

     

    
     //corners.translateX(resultcorner2)
     //alert(XX)

     //corners.translateX(1.0987999439239502 - 2.6371198654174806)
     //corners.translateZ(-1.123824954032898 + 1.685737431049347)
     
     //vents.scale.z = ZZ
     /*
     try {
     vents.scale.x = XX
     centerObjects(vents)
   }catch {
    console.log("resizing vents error")
   }
   */
     try {
     boxes.scale.z = ZZ
   } catch {
    console.log("resizing boxe error")
   }

     try {
      overhangs.scale.z = ZZ 
      overhangs.scale.x = XX

     } catch {
      console.log("here we are in resizing overhangs")
     }
     try {
      paintedR.scale.z = ZZ
      paintedR.scale.x = XX

     } catch {
      console.log("here we are at resizing painted rake and fascia ")
     }
     removeObjectSize()

      try {
      for ( i = 0; i<=boardMiddle.length;i++) {
        try {
          scene.remove(boardMiddle[i])
          
        } catch {
          console.log("error in removing resizing BOARD RUNNERS")
        }
      }
        if (X1 == 8) {
          loadingBoardMiddle("8")
          //setTimeout(loadingBoardMiddle,400,0.8758999854326248)
          //setTimeout(loadingBoardMiddle,800,-0.8758999854326248)
        } else if ( X1 == 10) {
          loadingBoardMiddle("10")
          //setTimeout(loadingBoardMiddle,400,0.65)
          //setTimeout(loadingBoardMiddle,800,-0.6)

          //setTimeout(loadingBoardMiddle,1200,1.25)
          //setTimeout(loadingBoardMiddle,1600,-1.2)
        } else if ( X1 == 12) {
          loadingBoardMiddle("12")
          //setTimeout(loadingBoardMiddle,400,0.65)
          //setTimeout(loadingBoardMiddle,800,-0.6)

          //setTimeout(loadingBoardMiddle,1200,1.25)
          //setTimeout(loadingBoardMiddle,1600,-1.155)

        } else if ( X1 == 14) {
          loadingBoardMiddle("14")
        } else if ( X1 == 6 || X1 == 4) {
          try {
            scene.remove(boardMid)
          } catch {
            //pass
          }
          if ( Dpath == "leanto/") {
            try {
              loadingBoardMiddle("6")
            } catch {
              //pass
            }
          } else {
            loadingBoardMiddle("6")
          }
        } 
      
    } catch {
      console.log("error in resizing BOARD RUNNERS")
    }
    boardMiddle = []

/*
     if ( Z >= 16 ) {
      addSizeWindow(24,27,"false")
     } else if ( Z < 14 ) {
      addSizeWindow(18,27,"false")
     }
     */
   
     //frameFloor.position.x = - ( (XX - 1)/2.6 ) 

    //isItPossible()
    //centerStuff()
     if ( Dpath != "leanto/" && Dpath != "carriage/" && Dpath != "designerCarriage/" && Dpath !="highCarriage/" && Dpath != "highbarn/" && Dpath != "minibarn/" && Dpath != "vinylbarn/" && Dpath != "capecode/") {
     try {
     possibleLayout("Front")
   } catch {
    //pass
   }
     try {
     possibleLayout("Back")
   } catch {
    //pass
   }
    try {
     possibleLayout("Left")
   } catch {
    //pass 
   }
    try {
     possibleLayout("Right")
    } catch {
      //pass
    }
   
       for ( varr of workPushed ) {
       translateWorkbench(varr) 
      }
    }
    try {
      centerUnknownX(meshGround,front)
    } catch {
      //pass
    }
    
  if ( typeof(cupola) == "object") {
    cupolaPlacement()
  }
  if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
    centerObj("LeftDoor")

  }
  if ( st == "firstGarage") {

    addingDoor("RightDoor",element1="door",element2="close",element3="miratecTrim2.5Square",element4="hinges",element5="rafter",element6 = "Garage door")

  }
  if ( GARAGEMODEL == true && Dpath == "Shed2/" && st != "firstGarage") {
    
    addingRaftDModelGARAGE("rafter",RightDoor1Dict) 
  }

}}


function faceColor(x) {
  FACECOLOR = x
  if (FACECOLOR != "None") {
  let liste = [specialOverclosing,overClosing,overClosing2]
  if ( typeof(overClone) == "object") {liste.push(overClone)}
  if ( typeof(miratecRight) == "object") {liste.push(miratecRight)}
    if ( typeof(miratecLeft) == "object") { liste.push(miratecLeft)}
  for ( obj of liste) 

    for ( c of obj.material) {
      c.color.setHex(x)
    }
  } else {
    // pass
  }
}

function centeringGarageObjects() {
  for (i = 0;i<moveListo.length;i++) {
    try {
    if (moveListo[i].includes("FrontDoor")) {
      centerObj(moveListo[i])
    }
     if (moveListo[i].includes("FrontWindow2")) {
k = 1
      while ( typeof(moveListo[i+k] != "string")) {
moveListo[i+k].translateX(0.32)
k+= 1

}
    }
     if (moveListo[i].includes("FrontWindow3")) {
k = 1
      while ( typeof(moveListo[i+k] != "string")) {
moveListo[i+k].translateX(2.37)
k+= 1

}
    }
  }
    catch {
      console.log("erno in centeringGarageObjects")
    }
  }
}


   function centerStuff() {
    var w,d,nameofd,nameofw,posmin,posmax,posmin2,posmax2,wl,wr,bd,bw
    d = 0
    w = 0
    wr = 0 
    wl = 0
    bd = 0 
    bw = 0

    for (i = 0;i<moveListo.length;i++){
      try {
      if ( moveListo[i].includes("FrontWindow")) {
        w+= 1
        nameofw = moveListo[i]
      } else if ( moveListo[i].includes("FrontDoor")) {
        d += 1
        nameofd = moveListo[i]
      } else if ( moveListo[i].includes("RightWindow")) {
        wr += 1
        nameofwr = moveListo[i]
      } else if ( moveListo[i].includes("LeftWindow")) {
        wl += 1
        nameofwl = moveListo[i]
      } else if ( moveListo[i].includes("BackWindow")) {
        bw += 1
        nameofbw = moveListo[i]
      } else if (moveListo[i].includes("BackDoor")) {
        bd += 1
        nameofbd = moveListo[i]
      }
      } catch {
    console.log("in centerStuff function")
  }
    }
    if ( !(X == 8 && Z == 10)) {
    if ( d == 1 && w == 1) {
     
      centerObj(nameofd)
      var c = moveListo.indexOf(nameofd)
      var o = moveListo.indexOf(nameofw)
      posmin = parseFloat(getPos(moveListo[c+2],"boxmin"))
      posmin2 =parseFloat(getPos(moveListo[o+2],"boxmax"))
      var j = 1 
      while ( typeof(moveListo[o+j]) == "object") {
        moveListo[o+j].translateX(posmin -posmin2 -0.19)
        j+=1
      }

      
    

    }
  } else {
    //pass
  }
  if ( bd == 1 ) {
    centerObj(nameofbd)
  }
  if ( bw == 1 ) {
    centerObj(nameofbw)
  }
  if ( wl == 1) {
    centerObj(nameofwl)
  }
  if ( wr == 1) {
    centerObj(nameofwr)
  }
   }


function finish() {
  confirmMoving()
  workBenchCutByDoor()
  selectedOptions()
}

function updatedMoveListo(Kipsto) {
  Kipsto = myKipstoListo

  var window1 = ""
  var shutter = ""
  var rafter = ""
  var trim = ""
  for ( i = 0;i<Kipsto.length;i++) {
   try {
    if (Kipsto[i].name.includes("FrontWindow")) {
      
     
       if (Kipsto[i].name.includes("Window1x")) {
        var window1 = Kipsto[i]
      }
       if (Kipsto[i].name.includes("shutter")) {
        var shutter = Kipsto[i]
      }
       if (Kipsto[i].name.includes("trimod")) {
        var trim = Kipsto[i]
      }
       if (Kipsto[i].name.includes("raft")) {
        var rafter = Kipsto[i]
      }
      posRaftT = getPos(r2[1],"boxminz")
      posRaftWT = getPos(rafter,"boxminz")

      window1.translateZ(posRaftT-posRaftWT+0.01)
      if ( shutter != "") {
        shutter.translateZ(posRaftT-posRaftWT+0.01)
      }
      if ( trim != "") {
        trim.translateZ(posRaftT-posRaftWT+0.01)
      }
      rafter.translateZ(posRaftT-posRaftWT+0.01)
    }
   } catch(err) {
    console.log(err)
   }
}
}
   function updateMoveListo(Kipsto){
    Kipsto = myKipstoListo
     for ( i = 0; i < Kipsto.length; i++) {
      try {
      if (Kipsto[i].includes("FrontWindow")) {
        try {
          
            posRaftT = getPos(r2[1],"boxminz")
            posRaftWT = getPos(Kipsto[i+3],"boxminz")
            Kipsto[i+1].translateZ(posRaftT-posRaftWT+0.01)
            Kipsto[i+2].translateZ(posRaftT-posRaftWT+0.01) 
            Kipsto[i+3].translateZ(posRaftT-posRaftWT+0.01)
            
      

      } catch {
        console.log("dq")
      }
      } else if ( Kipsto[i].includes("RightWindow")) {
        try {
        Kipsto[i+1].translateX(resultreverse22)
        Kipsto[i+2].translateX(resultreverse22)
        Kipsto[i+3].translateX(resultreverse22)
        Kipsto[i+4].translateX(resultreverse22)
        Kipsto[i+5].translateX(resultreverse22)
        Kipsto[i+6].translateX(resultreverse22)
 
      
        }catch {
          console.log("fds")
        }

      } else if ( Kipsto[i].includes("BackWindow")) {
        try {
          Kipsto[i+1].translateZ(reversedResult22)
          Kipsto[i+2].translateZ(reversedResult22)
          Kipsto[i+3].translateZ(reversedResult22)
          Kipsto[i+4].translateZ(reversedResult22)
          Kipsto[i+5].translateZ(reversedResult22)
          Kipsto[i+6].translateZ(reversedResult22)
   
        } catch {
          console.log("er")
        }
      } else if ( Kipsto[i].includes("LeftWindow")) {
        try {
          Kipsto[i+1].translateX(resultcorner22)
          Kipsto[i+2].translateX(resultcorner22)
          Kipsto[i+3].translateX(resultcorner22)
          Kipsto[i+4].translateX(resultcorner22)
          Kipsto[i+5].translateX(resultcorner22)
          Kipsto[i+6].translateX(resultcorner22)



        } catch {
          console.log("ds")
        }
      }
      if (Kipsto[i].includes("FrontDoor")) {
        try {
          

        Kipsto[i+1].scale.z = ZZ
        Kipsto[i+2].scale.z = ZZ
    
        Kipsto[i+3].scale.z = ZZ
        Kipsto[i+4].scale.z = ZZ
        Kipsto[i+5].scale.z = ZZ
        Kipsto[i+6].scale.z = ZZ
  

      } catch {
        console.log("dq")
      }
      } else if ( Kipsto[i].includes("RightDoor")) {
        try {
        Kipsto[i+1].translateX(resultreverse22)
        Kipsto[i+2].translateX(resultreverse22)
        Kipsto[i+3].translateX(resultreverse22)
        Kipsto[i+4].translateX(resultreverse22)
        Kipsto[i+5].translateX(resultreverse22)
       
        }catch {
          console.log("fds")
        }

      } else if ( Kipsto[i].includes("BackDoor")) {
        try {
          Kipsto[i+1].translateZ(reversedResult22)
          Kipsto[i+2].translateZ(reversedResult22)
          Kipsto[i+3].translateZ(reversedResult22)
          Kipsto[i+4].translateZ(reversedResult22)
          Kipsto[i+5].translateZ(reversedResult22)
       
        } catch {
          console.log("er")
        }
      } else if ( Kipsto[i].includes("LeftDoor")) {
        try {
          Kipsto[i+1].translateX(resultcorner22)
          Kipsto[i+2].translateX(resultcorner22)
          Kipsto[i+3].translateX(resultcorner22)
          Kipsto[i+4].translateX(resultcorner22)
          Kipsto[i+5].translateX(resultcorner22)
       

        } catch {
          console.log("ds")
        }
      }
      }catch {
        console.log("fdsfd")
      }
     }
   }
    
   function getPos(myobj,which) {

  var myobj = myobj
   

 
myobj.geometry.computeBoundingBox();
var boundingBox = myobj.geometry.boundingBox;
var position = new THREE.Vector3();
position.subVectors( boundingBox.max, boundingBox.min );
position.multiplyScalar( 0.5 );
position.add( boundingBox.min );
position.applyMatrix4( myobj.matrixWorld );
//alert(position.y + " " + position.x)
//alert(position.x)
var box = new THREE.Box3().setFromObject( myobj );
//console.log( box.min, box.max, box.getSize() );
jj = JSON.stringify(box.min.x)
jj2 = JSON.stringify(box.max.x)
jj3 = JSON.stringify (box.getSize().x)
jj15 = JSON.stringify(box.getSize().z)
jj16 = JSON.stringify(box.getSize().y)
jj4 = JSON.stringify(box.max.z)
jj5 = JSON.stringify(box.min.z)

jj6 = JSON.stringify(box.max.y)
jj7 = JSON.stringify(box.min.y)


if ( which == "x") {
  return position.x
} else if ( which == "z") {
  return position.z
} else if ( which == "y") {
  return position.y
} else if ( which == "boxmin") {
  return jj
} else if ( which == "boxlengthz") {
  return jj15

}else if ( which == "boxmax") {
  return jj2
} else if ( which == "boxlength") {
  return jj3
} else if ( which == "boxmaxz") {
  return jj4
} else if ( which == "boxminz") {
  return jj5
} else if ( which == "boxminy") {
  return jj7
} else if ( which == "boxmaxy") {
  return jj6
} else if ( which == "boxlengthy") {
  return jj16
}


//alert("X = " + position.x  +" //// Z = " + position.z + " //// Y = " + position.y)
}

function setTransp(theobj,valuetra) {
  for ( i =0;i<theobj.material.length;i++) {
    try {
      if ( valuetra == 1) {
        theobj.material[i].transparent = false;
      } else {
    theobj.material[i].transparent = true;
  }
    theobj.material[i].opacity = valuetra
  } catch {
    //pass
  }
  }
}
function removingFrames(custom=false) {
    if (custom == false) {
		try {
   	for ( i=0;i<f2.length;i++) {
        		scene.remove(f2[i])
        	}
       xxx = 0.4063990116119385
       yyy = 0.20319998264312744
  
       if ( FILEFLOOR == "framing162" ) {
       	zZ = 0.4063990116119385
       	zzz = 0.4063990116119385
       } else if ( FILEFLOOR == "framing82") {
       zZ = 0.20319998264312744
       zzz = 0.20319998264312744
   } else if ( FILEFLOOR  == "framing122" ) {
   	zZ = 0.3047999143600464
   	zzz = 0.3047999143600464
   }
     f2 = []


 } catch {
 	console.log("no frames  .... to remove ! ")
 }
}
 try {
   for ( i=0;i<r2.length;i++) {
      scene.remove(r2[i])
    }
   
      rrr = rrr = 0.4077190160751343

      RRR = rrr 
      rR = rrr
      rRB = rrr
      r2 = []
      RAFTROUND2 = "FALSE"
 
      NEXTBACK = "FALSE"
      Raster2 = "True"
      RAFTROUNDBACK = "FALSE"
      //r22 = []
     // alert("done")
    
 } catch {
  console.log("no rafter to remove")
 }
 if ( custom == false) {
  try {
   for ( i=0;i<p2.length;i++) {
      scene.remove(p2[i])
    }
      xxx2 = 0.4077190160751343
      zzz2 = xxx2 
      zZ2 = 0
      p2 = []
     
    
 } catch {
  console.log("no plat frame to remove")
 }
 }
 try {
  for (i=0;i<right.length;i++) {
    scene.remove(right[i])
  }

  right = []
  rrr2 = 0.4077190160751343 
  RRR2 = rrr2 
  rR2 = 0
  chtayn = "False"


 } catch {
  console.log("no right2 to remove in removing frame")
 }

  try {
  for (i=0;i<left.length;i++) {
    scene.remove(left[i])
  }

  left = []
  lll2 = 0.4077190160751343 
  LLL2 = lll2 
  lL2 = 0
  chitone = "False"
  


 } catch {
  console.log("no right2 to remove in removing frame")
 }




}

function translateOn(obj1,axis1,obj2,axis2,value=0) {
  var x1 = parseFloat(getPos(obj1, axis1))
  var x2 = parseFloat(getPos(obj2,axis2))
  let transV = x1-x2+value
  if (axis1 == "boxmaxy" || axis1 == "boxminy") {
    obj2.translateY(transV)
    
  } else if ( axis1 == "boxmax" || axis1 == "boxmin") {
    obj2.translateX(transV)
    
  } else if ( axis1 == "boxmaxz" || axis1 == "boxminz") {
    obj2.translateZ(transV)
    
  }
  return(transV)
}

function calcVertices(x,obje,scaleVal=getPos(plat2,"boxmaxy")) {
  try {
     var geometry = new THREE.Geometry().fromBufferGeometry( obje.geometry );
     geometry.computeFaceNormals();
     geometry.mergeVertices();
 
     geometry.vertices[x-1].y =  DefaultValCalcVertices
     geometry.computeVertexNormals();
     obje.geometry = new THREE.BufferGeometry().fromGeometry( geometry );
  } catch {
    console.log("this is the firsttime")
  }
  var geometry = new THREE.Geometry().fromBufferGeometry( obje.geometry );
 geometry.computeFaceNormals();
 geometry.mergeVertices();
 DefaultValCalcVertices = geometry.vertices[x].y
 geometry.vertices[x].y =  scaleVal
 geometry.computeVertexNormals();
 obje.geometry = new THREE.BufferGeometry().fromGeometry( geometry );

}
   function gettingPos(myobj) {
   	fram1 = parseFloat(getPos(framing1,"boxmin"))
   	fram2 = parseFloat(getPos(framing3,"boxmin"))
   	difram = fram2 - fram1 
   	alert(difram)
   	//0.20319998264312744
  myobj = shell
  
myobj.geometry.computeBoundingBox();
var boundingBox = myobj.geometry.boundingBox;
var position = new THREE.Vector3();
position.subVectors( boundingBox.max, boundingBox.min );
position.multiplyScalar( 0.5 );
position.add( boundingBox.min );
position.applyMatrix4( myobj.matrixWorld );
//alert(position.y + " " + position.x)
//alert(position.x)
var box = new THREE.Box3().setFromObject( framing );
//console.log( box.min, box.max, box.getSize() );

alert("X = " + position.x  +" //// Z = " + position.z + " //// Y = " + position.y)

}

  function testingStuff(na) {
  
window1.geometry.computeBoundingBox();
var boundingBox = window1.geometry.boundingBox;
var position = new THREE.Vector3();
position.subVectors( boundingBox.max, boundingBox.min );
position.multiplyScalar( 0.5 );
position.add( boundingBox.min );
position.applyMatrix4( window1.matrixWorld );
//alert(position.y + " " + position.x)
//alert(position.x)

if (na.includes("Front") || na.includes("Back")) {
if (position.x > 1.299) {
C = position.x - 1.2982324957 
window1.translateX(-C)
shutter1.translateX(-C)
windowRaftSquare.translateX(-C)
windowRaftMiddle.translateX(-C)
windowRaftRight.translateX(-C)
windowRaftLeft.translateX(-C)

//windowRaft.translateX(-C)


   }
if (position.x < 1.297) {
C = 1.2982324957 - position.x 
window1.translateX(C)
shutter1.translateX(C)
windowRaftSquare.translateX(C)

windowRaftMiddle.translateX(C)
windowRaftRight.translateX(C)
windowRaftLeft.translateX(C)

}
//windowRaft.translateX(C)


   }
  
if (position.y > 1.610) {
  D = position.y - 1.60972505807
  window1.translateY(-D)
  shutter1.translateY(-D)
  windowRaftSquare.translateY(-D)
  windowRaftMiddle.translateY(-D)

}
if ( position.y < 1.600 ) {
  D = 1.60972505807 - position.y 
  window1.translateY(D)
  shutter1.translateY(D)
  windowRaftSquare.translateY(D)
  windowRaftMiddle.translateY(D)

}
setTimeout(rafterWindowSize,100,na)
}


function rafterWindowSize(na) {

  if (na.includes("Front") || na.includes("Back")) {
  posRight = parseFloat(getPos(windowRaftRight,"boxmin"))
  poswinmax = parseFloat(getPos(windowRaftSquare,"boxmax"))
  poswinmin = parseFloat(getPos(windowRaftSquare,"boxmin"))

  

  posLeft = parseFloat(getPos(windowRaftLeft,"boxmin"))

  windowRaftRight.translateX(poswinmax-posRight)
  windowRaftLeft.translateX((poswinmin - posLeft))
  //alert(poswinmin + "  " + posraff)

  posWindowX = parseFloat(getPos(window1,"boxmin"))
  posWindowM = parseFloat(getPos(window1,"boxmax"))
  lenpo = ( posWindowM - posWindowX ) /2
  posb = parseFloat(getPos(windowRaftMiddle,"boxmin"))
  windowRaftMiddle.translateX(posWindowM-posb - lenpo)
} else {
  posRight = parseFloat(getPos(windowRaftRight,"boxminz"))
  poswinmax = parseFloat(getPos(windowRaftSquare,"boxmaxz"))
  poswinmin = parseFloat(getPos(windowRaftSquare,"boxminz"))

  posLeft = parseFloat(getPos(windowRaftLeft,"boxminz"))

  windowRaftRight.translateZ(poswinmax-posRight)
  windowRaftLeft.translateZ((poswinmin - posLeft))
  //alert(poswinmin + "  " + posraff)

  posWindowX = parseFloat(getPos(window1,"boxminz"))
  posWindowM = parseFloat(getPos(window1,"boxmaxz"))
  lenpo = ( posWindowM - posWindowX ) /2
  posb = parseFloat(getPos(windowRaftMiddle,"boxminz"))
  windowRaftMiddle.translateZ(posWindowM-posb - lenpo)

}
 
 
  setTimeout(raftMiffle,100)
  
}

function resizeleg() {

     try {
     boardleg1.scale.x = XX 
     boardleg1.scale.z = ZZ
   } catch {
    console.log("error in boardleg in addsize in shedbuilder25")
   }

}
function raftMiffle() {
  maxwiny = parseFloat(getPos(windowRaftSquare,"boxminy"))
  minmiddley = parseFloat(getPos(windowRaftMiddle,"boxmaxy"))
  windowRaftMiddle.translateY(-(-maxwiny + minmiddley))


  nj = document.getElementById("dropingobj").innerHTML
  BZIRO = true;
  isItPossible(nj)



}


  function addSizeWindow(X,Y,na=document.getElementById("dropingobj").innerHTML) {

    try {
      var XO = XX
    } catch {
      XO = 1
    }
    if ( X == 30 && Y == 36 && XX < 1.4) {
      alert("30x36 windows are only avalaible for higher shed sizes .")
    } else {
    // element1="window1",element2="shutter",element3="windowRaftSquare",element4="windowRaftMiddle",element5="windowRaftRight",element6="windowRaftLeft"
  chipa = na
  indo = moveListo.indexOf(chipa)
  chipa = moveListo[indo+1]
  chimin = parseFloat(getPos(chipa,"boxmin"))
  chimax = parseFloat(getPos(chipa,"boxmax"))

  chimin2 = parseFloat(getPos(chipa,"boxminz"))
  chimax2 = parseFloat(getPos(chipa,"boxmaxz"))

  
  lendof = chimax - chimin 
  lendof2 = chimax2 - chimin2

    if ( lendof == 0.6602140069007874 || lendof == 0.6602140292525291 || lendof == 0.6602140292525291 || lendof == 0.660213977098465 || lendof2 == 0.6602140069007874 || lendof2 == 0.6602140292525291 || lendof2 == 0.6602140292525291 || lendof2 == 0.660213977098465) {
      alert("Moving from 24x36 to another size is still under development.")
    }
    else {

    try {
    indTo = moveListo.indexOf(na)
    window1 = moveListo[indTo+1]
    windowRaftSquare = moveListo[indTo+3]
    shutter1 = moveListo[indTo+2]
    windowRaftMiddle = moveListo[indTo+4]
    windowRaftRight = moveListo[indTo+5]
    windowRaftLeft = moveListo[indTo+6]


        X = X 
        Y = Y 

       B = (Y/27) 
       A = (X/18)


    if (na.includes("Right") || na.includes("Left")) {
    
       window1.scale.z = A
     windowRaftSquare.scale.z = A 

     shutter1.scale.z = A 
 
    } else {
     window1.scale.x = A
     
     windowRaftSquare.scale.x = A 
    
     shutter1.scale.x = A 
     
    
   }
   window1.scale.y = B
   windowRaftSquare.scale.y = B
   windowRaftMiddle.scale.y 
   shutter1.scale.y = B


     //windowRaft.scale.x = A 
     //windowRaft.scale.y = B

     
     setTimeout(testingStuff,100,na)
     
  

  }catch(error) {
    alert("No window selected.\n" + error)
  }
}
}

   
 }

// ----------------------------- SHED SIZE FUNCTIONS ----------------------------------------------------------- END **





// -------------------------------------- SHED INTERIOR AND TRANSPARENCY --------------------------------------- START **
      function transparenttt() { //Floor when dropdown
        transparent = true
        transparentt()
      }
      function transparentt() {
        if ( interior == false) {
          interior = false
          Interior()
        }
        if ( transparent == false) {
          for ( i = 0; i < front.material.length;i++) {
          front.material[i].transparent = false
          front.material[i].opacity =  1
        }
        try {
           viewObjects = false
          interiorObjects()
        } catch {
          //pass
        }
        try {
           for ( i = 0; i < specialFront.material.length;i++) {
          specialFront.material[i].transparent = false
          specialFront.material[i].opacity =  1
        }
        } catch {
          //pass
        }

         try {
           for ( i = 0; i < backDoor.material.length;i++) {
          backDoor.material[i].transparent = false
          backDoor.material[i].opacity =  1
        }
        } catch {
          //pass
        }

        try {
           for ( i = 0; i < faceBoard.material.length;i++) {
          faceBoard.material[i].transparent = true
          faceBoard.material[i].opacity =  1
        }
        } catch {
          //pass
        }
        try {
           for ( i = 0; i < faceBoard2.material.length;i++) {
          faceBoard2.material[i].transparent = true
          faceBoard2.material[i].opacity =  1
        }
        } catch {
          //pass
        }
        if ( Dpath == "capecode/") {
          try {
            for (c of shingleClones) {
              setTransp(c,1)
            }
          } catch {
            //pass  
          }
          setTransp(specialShingles,1)
        }
        try {
        if ( typeof(cupola) == "object") {
            scene.add(cupola)
            scene.add(cupolaRef)
        }
      } catch {
        console.log("cupola transp")
      }
        /*
        for ( i = 0; i < shell.material.length;i++) {
          shell.material[i].transparent = true
          shell.material[i].opacity = 1
        }
        */
 for ( i = 0; i < righty.material.length;i++) {
          righty.material[i].transparent = false
          righty.material[i].opacity = 1
        }

 for ( i = 0; i < lefty.material.length;i++) {
          lefty.material[i].transparent = false
          lefty.material[i].opacity = 1
        }

 for ( i = 0; i < backty.material.length;i++) {
          backty.material[i].transparent = false
          backty.material[i].opacity = 1
        }

        try {
        for ( i = 0; i < shingles.material.length;i++) {
          
          shingles.material[i].transparent = false
          shingles.material[i].opacity = 1
        }
      } catch {
        console.log("no shingles")
      }

               if ( Dpath == "cabana/") {
        try {
          setTransp(shingleFront,1)
         
          setTransp(shingleLeft,1)
          setTransp(shingleRight,1)
        } catch {
          //pass
        }
      }
         try {
            for ( i = 0; i < plywood.material.length;i++) {
          plywood.material[i].transparent = true 
          plywood.material[i].opacity = 1
        } }catch {
          console.log("plywood")
        } 

       for ( i = 0;i < moveListo.length;i++) {
          try {
             if ( moveListo[i].includes("Window") || moveListo[i].includes("Door")) {
          for ( l=0;l<moveListo[i+1].material.length;l++) {
           
            moveListo[i+1].material[l].transparent = false
            moveListo[i+1].material[l].opacity = 1
          }
          for ( l= 0;l<moveListo[i+2].material.length;l++) {
             moveListo[i+2].material[l].transparent = false
            moveListo[i+2].material[l].opacity = 1

          }
          }
        } catch {
          console.log("df")
        }
        }

       
        for ( i = 0; i < cornersFrontRight.material.length;i++) {
          cornersFrontRight.material[i].transparent = false
          cornersFrontRight.material[i].opacity = 1
        }

        for ( i = 0; i < cornersFrontLeft.material.length;i++) {
          cornersFrontLeft.material[i].transparent = false
          cornersFrontLeft.material[i].opacity = 1
        }

        for ( i = 0; i < cornersBackRight.material.length;i++) {
          cornersBackRight.material[i].transparent = false
          cornersBackRight.material[i].opacity = 1
        }

        for ( i = 0; i < cornersBackLeft.material.length;i++) {
          cornersBackLeft.material[i].transparent = false
          cornersBackLeft.material[i].opacity = 1
        }
        try {
        for ( i = 0; i < drip.material.length;i++) {
          drip.material[i].transparent = false
          drip.material[i].opacity = 1
        }
      } catch {
        console.log("78")
      }

/*
        for ( i = 0; i < rafters.material.length;i++) {
          rafters.material[i].transparent = true 
          rafters.material[i].opacity = 1
        }
     */
        try {
            for ( i = 0; i < vents.material.length;i++) {
          vents.material[i].transparent = false
          vents.material[i].opacity = 1
        } }catch {
          console.log("vents error")
        }
        try {
            for ( i = 0; i < paintedR.material.length;i++) {
          paintedR.material[i].transparent = true 
          paintedR.material[i].opacity = 1
        
        } }catch {
          console.log("vents error")
        }

        /*
         try {
            for ( i = 0; i < overhangsLeft.material.length;i++) {
          overhangsLeft.material[i].transparent = false
          overhangsLeft.material[i].opacity = 1
        } }catch {
          console.log("vents error")
        }

         try {
            for ( i = 0; i < overhangsRight.material.length;i++) {
          overhangsRight.material[i].transparent = false
          overhangsRight.material[i].opacity = 1
        } }catch {
          console.log("vents error")
        }
        
*/
      
        
          transparent = true
          document.getElementById("trans").innerHTML = "Transparent"
        } else {
          

             for ( i = 0; i < front.material.length;i++) {
          front.material[i].transparent = true
          front.material[i].opacity =  0.2
        }
        try {
           for ( i = 0; i < specialFront.material.length;i++) {
          specialFront.material[i].transparent = true
          specialFront.material[i].opacity =  0.2
        }
        } catch {
          //pass
        }

         try {
           for ( i = 0; i < backDoor.material.length;i++) {
          backDoor.material[i].transparent = true
          backDoor.material[i].opacity =  0.2
        }
        } catch {
          //pass
        }
         try {
           for ( i = 0; i < faceBoard.material.length;i++) {
          faceBoard.material[i].transparent = true
          faceBoard.material[i].opacity =  0.2
        }
        } catch {
          //pass
        }
        try {
           for ( i = 0; i < faceBoard2.material.length;i++) {
          faceBoard2.material[i].transparent = true
          faceBoard2.material[i].opacity =  0.2
        }
        } catch {
          //pass
        }
        if ( Dpath == "capecode/") {
          try {
            for (c of shingleClones) {
              setTransp(c,0.2)
            }
          } catch {
            //pass  
          }
          setTransp(specialShingles,0.2)
        }
        /*
        for ( i = 0; i < shell.material.length;i++) {
          shell.material[i].transparent = true
          shell.material[i].opacity = 0.2
        }
*/       try {
        if ( typeof(cupola) == "object") {
          scene.remove(cupola)
          scene.remove(cupolaRef)
        }
      } catch {
        console.log("transparent cupola error")
      }
        for ( i = 0; i < righty.material.length;i++) {
          righty.material[i].transparent = true
          righty.material[i].opacity = 0.2
        }

 for ( i = 0; i < lefty.material.length;i++) {
          lefty.material[i].transparent = true
          lefty.material[i].opacity = 0.2
        }

 for ( i = 0; i < backty.material.length;i++) {
          backty.material[i].transparent = true
          backty.material[i].opacity = 0.2
        }

        try {
        for ( i = 0; i < shingles.material.length;i++) {
         
          shingles.material[i].transparent = true
          shingles.material[i].opacity = 0.4
         
          shingles.material[i].needsUpdate = true;
        
        }
      } catch {
        console.log("no shingles")
      }
            if ( Dpath == "cabana/") {
        try {
         setTransp(shingleFront,0)
   
          setTransp(shingleLeft,0)
          setTransp(shingleRight,0)
        } catch {
          //pass
        }
      }

        for ( i = 0;i < moveListo.length;i++) {
          try {
             if ( moveListo[i].includes("Window") || moveListo[i].includes("Door")) {
          for ( l=0;l<moveListo[i+1].material.length;l++) {
           
            moveListo[i+1].material[l].transparent = true 
            moveListo[i+1].material[l].opacity = 0.3
          }
          for ( l= 0;l<moveListo[i+2].material.length;l++) {
             moveListo[i+2].material[l].transparent = true 
            moveListo[i+2].material[l].opacity = 0.3

          }
          }
        } catch {
          console.log("df")
        }
        }

         for ( i = 0; i < cornersFrontRight.material.length;i++) {
          cornersFrontRight.material[i].transparent = false
          cornersFrontRight.material[i].opacity = 1
        }

            for ( i = 0; i < cornersFrontLeft.material.length;i++) {
          cornersFrontLeft.material[i].transparent = false
          cornersFrontLeft.material[i].opacity = 1
        }

            for ( i = 0; i < cornersBackRight.material.length;i++) {
          cornersBackRight.material[i].transparent = false
          cornersBackRight.material[i].opacity = 1
        }

            for ( i = 0; i < cornersBackLeft.material.length;i++) {
          cornersBackLeft.material[i].transparent = false
          cornersBackLeft.material[i].opacity = 1
        }
        if ( Dpath != "Shed2/") {
          try {
          for ( i = 0; i < drip.material.length;i++) {
          drip.material[i].transparent = false
          drip.material[i].opacity = 1
        }
      } catch {
        console.log("erodf 454")
      }
      }

/*
          for ( i = 0; i < rafters.material.length;i++) {
          rafters.material[i].transparent = true 
          rafters.material[i].opacity = 0.2
        }
         
*/
        try {
            for ( i = 0; i < vents.material.length;i++) {
          vents.material[i].transparent = true 
          vents.material[i].opacity = 0.5
        } }catch {
          console.log("vents error")
        }
        try {
            for ( i = 0; i < paintedR.material.length;i++) {
          paintedR.material[i].transparent = true 
          paintedR.material[i].opacity = 0.3
         
          shingles.material[i].opacity = 0.3
        
        } }catch {
          console.log("vents error")
        }

        try {
            for ( i = 0; i < plywood.material.length;i++) {
          plywood.material[i].transparent = true 
          plywood.material[i].opacity = 0.3
        } 
      }catch {
          console.log("plywood")
        } 
        /*
           try {
            for ( i = 0; i < overhangsLeft.material.length;i++) {
          overhangsLeft.material[i].transparent = true 
          overhangsLeft.material[i].opacity = 0.3
        } }catch {
          console.log("vents error")
        }

         try {
            for ( i = 0; i < overhangsRight.material.length;i++) {
          overhangsRight.material[i].transparent = true 
          overhangsRight.material[i].opacity = 0.3
        } 
        }catch {
          console.log("vents error")
        }
        */
          transparent = false
          document.getElementById("trans").innerHTML = "Visible"
        }
      }
      function Interior() {
        if (transparent== false) {
          transparent=false
          transparentt()
        }
        if ( interior == true ) {
        for ( i = 0; i < front.material.length;i++) {
          front.material[i].wireframe = true 
        }
        try {
           for ( i = 0; i < specialFront.material.length;i++) {
          specialFront.material[i].wireframe = true
  
        }
        } catch {
          //pass
        }
        try {
           for ( i = 0; i < backDoor.material.length;i++) {
          backDoor.material[i].wireframe = true
  
        }
        } catch {
          //pass
        }
         try {
           for ( i = 0; i < faceBoard.material.length;i++) {
          faceBoard.material[i].wireframe = true
  
        }
        } catch {
          //pass
        }
         try {
           for ( i = 0; i < faceBoard2.material.length;i++) {
          faceBoard2.material[i].wireframe = true
  
        }
        } catch {
          //pass
        }
                if ( Dpath == "capecode/") {
          try {
            for (c of shingleClones) {
              try {
              for ( i = 0; i < c.material.length;i++) {
          c[i].wireframe = true
    } }catch {
      //pass
    }
    
        }
            }
          catch {
            //pass  
          }
          for ( i = 0; i < specialShingles.material.length;i++) {
          specialShingles.material[i].wireframe = true
  
        }
      }

        for ( i = 0; i < righty.material.length;i++) {
          righty.material[i].wireframe = true 
        }

        for ( i = 0; i < lefty.material.length;i++) {
          lefty.material[i].wireframe = true 
        }

        for ( i = 0; i < backty.material.length;i++) {
          backty.material[i].wireframe = true 
        }

        for ( i = 0; i < shell.material.length;i++) {
          shell.material[i].wireframe = true 
        }

        try {
        for ( i = 0; i < shingles.material.length;i++) {
          
          shingles.material[i].wireframe = true 
        
        }
      } catch {
        console.log("no shingles")
      }

      if ( Dpath == "cabana/") {
        try {
          setTransp(shingleFront,0)

          setTransp(shingleLeft,0)
          setTransp(shingleRight,0)
        } catch {
          //pass
        }
      }

        try {
         if ( typeof(cupola) == "object") {
            scene.remove(cupola)
            scene.remove(cupolaRef)
        }
        } catch {
          console.log("interior cupola error")
        }
        

                for ( i = 0;i < moveListo.length;i++) {
          try {
          if ( moveListo[i].name.includes("loft") || moveListo[i].name.includes("Workbench")) {
            //pass
          }else {
          for ( l=0;l<moveListo[i].material.length;l++) {
            moveListo[i].material[l].wireframe = true
          }
        }
        } catch {
          console.log("df")
        }
        }
        
    
        document.getElementById("interior").innerHTML = "Exterior"
        interior = false
      } else {
           try {
           viewObjects = false
          interiorObjects()
        } catch {
          //pass
        }
       for ( i = 0; i < front.material.length;i++) {
          front.material[i].wireframe = false
        }
         try {
           for ( i = 0; i < specialFront.material.length;i++) {
          specialFront.material[i].wireframe = false
  
        }
        } catch {
          //pass
        }
        if ( Dpath == "capecode/") {
          try {
            for (c of shingleClones) {
              try {
              for ( i = 0; i < c.material.length;i++) {
          c[i].wireframe = false
    } }catch {
      //pass
    }
    
        }
            }
          catch {
            //pass  
          }
          for ( i = 0; i < specialShingles.material.length;i++) {
          specialShingles.material[i].wireframe = false
  
        }
      }
       try {
           for ( i = 0; i < faceBoard2.material.length;i++) {
          faceBoard2.material[i].wireframe = false
  
        }
        } catch {
          //pass
        }
         try {
           for ( i = 0; i < faceBoard.material.length;i++) {
          faceBoard.material[i].wireframe = false 
  
        }
        } catch {
          //pass 
        }
        try {
           for ( i = 0; i < backDoor.material.length;i++) {
          backDoor.material[i].wireframe = false
  
        }
        } catch {
          //pass
        }
         for ( i = 0; i < backty.material.length;i++) {
          backty.material[i].wireframe = false
        }

         for ( i = 0; i < lefty.material.length;i++) {
          lefty.material[i].wireframe = false
        }

         for ( i = 0; i < righty.material.length;i++) {
          righty.material[i].wireframe = false
        }

        for ( i = 0; i < shell.material.length;i++) {
          shell.material[i].wireframe = false
        }

        try {
        for ( i = 0; i < shingles.material.length;i++) {
          
          shingles.material[i].wireframe = false
        }
      } catch {
        console.log("no shingles")
      }
      if ( Dpath == "cabana/") {
              if ( Dpath == "cabana/") {
        try {
          
          setTransp(shingleFront,1)
  
          setTransp(shingleLeft,1)
          setTransp(shingleRight,1)
        
        } catch {
          //pass
        }
      }
      }

        try {
       if ( typeof(cupola) == "object") {
          scene.add(cupola)
          scene.add(cupolaRef)
        }
        } catch {
          console.log("interior cupola error")
        }


     

        for ( i = 0;i < moveListo.length;i++) {
          try {
          if ( moveListo[i].name.includes("loft") || moveListo[i].name.includes("Workbench")) {
            //pass
          }else {
          for ( l=0;l<moveListo[i].material.length;l++) {
            moveListo[i].material[l].wireframe = false
          }
        }
        } catch {
          console.log("df")
        }
        }
        

        interior = true
        document.getElementById("interior").innerHTML = "Interior"
      }
    }

    function zooming() {
      if (iii >= 70) {
        return;
      } else {
        XJ -= 0.0002
        
       
        camera.fov -= XJ
        camera.updateProjectionMatrix()
        iii+=1
        setTimeout(zooming,1)
      }
    }

          function dezooming() {
      if (iii >= 70) {
        return;
      } else {
        XJ -= 0.0002
        
       
        camera.fov += XJ
        camera.updateProjectionMatrix()
        iii+=1
        setTimeout(dezooming,1)
      }


    }
 
       function zoom() {
        iii = 0
        XJ = ZoomSpeed
        zooming()

        
        }
      function dezoom() {
         iii = 0
        XJ = ZoomSpeed
        dezooming()
      }

      function tiltUp() {
        
        camera.rotate.x += 1
        camera.updateProjectionMatrix()

      }

      
      
// -------------------------------------- SHED INTERIOR AND TRANSPARENCY --------------------------------------- END **
      





// -------------------------------------- SHED ROTATION --------------------------------------- START **
      function rotate1() {
       
        mesh.rotation.y += 0.01;
        rot1 = requestAnimationFrame(rotate1)
      }

      function rotate2() {
        mesh.rotation.y -= 0.01;
        rot2 = requestAnimationFrame(rotate2)
      }

      function stopRotate() {
        //cancelAnimationFrame(rotate1)
        //cancelAnimationFrame(rotate2)
        controls.reset()
        
      }
// -------------------------------------- SHED ROTATION --------------------------------------- END **


      
    


// -------------------------------------- SHED COLORS --------------------------------------- START **
      function almond() {
        mesh.material.color.set(0xEFDECD)
      }
      
      function blue() {
        mesh.material.color.set(0x0000FF)
      }

      function red() {
        mesh.material.color.set(0xff0000)
      }

      function burgundy() {
        mesh.material.color.set(0x800020)
      }
// -------------------------------------- SHED COLORS --------------------------------------- END **

CHALBO = 0

function executeCode()  {
  var code = document.getElementById("textarea").value 
  console.log(code)
   eval(code);
}
function floorPlan3() {
  
  var vall = document.getElementById("testinput").value
  vall = vall.split(":")
  obj = window[vall[0]]
  var valuee = vall[1]
  valuee = parseFloat(valuee)
  
 var geometry = new THREE.Geometry().fromBufferGeometry( obj.geometry );
 geometry.computeFaceNormals();
 geometry.mergeVertices();

 
 console.log(XX)
 PreviousValue = geometry.vertices[valuee].y
 addvalue = XX * 0.45
 geometry.vertices[4].y = RightyVertice1 + addvalue
 obj.geometry = new THREE.BufferGeometry().fromGeometry( geometry );
 /*
 try {
  geometry.vertices[valuee-1].y = PreviousValue
 } catch {
  console.log("ERNO")
 }
 



 geometry.computeVertexNormals();

 shell.geometry = new THREE.BufferGeometry().fromGeometry( geometry );
*/

}

function ldormerr(soty) {
  if ( ((XX == 1 || XX == 1.2)) && ((soty == "10" || soty == "12")) ) {
    alert(soty + "' only avalaible for higher sizes")
  } else {
  dormerSize = soty
  ldormer()
  document.getElementById("pitch").style.display = "none"
}
}


function removeDPlat() {
    //oass=
}
function removeDormerPlat(pd) {
    let reference,dormerMin,dormerMax
    let ps1,ps2, posZ,posX,newpd,posZ2,posX2,posX1,newplat,posX0
    for (plats of p2) {
      if (plats.name == "plat") {
        
        reference = plats.clone()
        reference.name = "plat"
        reference.translateZ(50)
        scene.add(reference)
        break;
      }
    } 
     dormerMin = getPos(dormer,"boxmin")
     dormerMax = getPos(dormer,"boxmax")

    
      for ( i = 0,j=0;i<p2.length;i++,j++ ) {
      ps1 = getPos(p2[i],"boxmin")
      ps2 = getPos(p2[i],"boxmax")

  if ( parseFloat(ps1) >parseFloat(dormerMin)  && parseFloat(ps2) < parseFloat(dormerMax)) {
     posZ = getPos(p2[i],"boxminz")
     posX = getPos(p2[i],"boxmin")


  newpd = pdd.clone()
  scene.add(newpd)
  newpd.name = "pd"
  posZ2 = getPos(newpd,"boxminz")
  posX2 = getPos(newpd,"boxmin")
  newpd.translateZ(posZ - posZ2)
  newpd.translateX(posX - posX2)
  scene.remove(p2[i])
  p2[i] = newpd


  } else {
    

    if ( p2[i].name == "pd") {
   
    
    if ( typeof(reference) == "object") {  
    posX0 = getPos(p2[i],"boxmin")
    newplat = reference.clone()
    scene.add(newplat)
   
    posX1 = getPos(newplat,"boxmin")
    newplat.translateX(posX0-posX1)
    centerUnknownZ(newplat,righty)
    scene.remove(p2[i])
    newplat.name = "plat"
    p2[i] = newplat
  }
  }
  }
  }

  for ( c of pdListe) {
    try {
    scene.remove(c)
    }catch {
      console.log("erno")
    }
  }
  scene.remove(reference)
}
    

function ldormer() {


   if (sizeD ==  "8wide") {
  
    roofPitch('9',"yes")
  }
    else if ( sizeD == "10wide") {
      roofPitch('8',"yes")
    }
    
    else if ( sizeD == "12wide") {
      
    roofPitch('7',"yes")
  }
 else if ( sizeD == "14wide") {
    roofPitch('6',"yes")
}

  //loadDormer()
}


function centerObj(noro = document.getElementById("dropingobj").innerHTML) {

  if ( noro.includes("Front") || noro.includes("Back")) {
  var minShed = getPos(shell,"boxmin")
  var maxShed = getPos(shell,"boxmax")
  var min = "boxmin"
  var max = "boxmax"
} else if ( noro.includes("Right") || noro.includes("Left")) {
  var minShed = getPos(shell,"boxminz")
  var maxShed = getPos(shell,"boxmaxz")
  var min = "boxminz"
  var max = "boxmaxz"
}
  var centerShed = (maxShed - minShed) / 2

  for ( i = 0; i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes(noro)) {
        var j = 1
        var minObjecto = getPos(moveListo[i+j],min) 

        while  ( typeof(moveListo[i+j]) == "object") {
          if (  min == "boxmin") {
          moveListo[i+j].translateX(minShed-minObjecto)
        } else {
          moveListo[i+j].translateZ(minShed-minObjecto)
        }
          j+=1
        
        }
           }  
    } catch {
      console.log("er")
    }
  }

   for ( i = 0; i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes(noro)) {
          var j = 1
          
          var minObjecto = getPos(moveListo[i+j],min) 
          var maxObjecto = getPos(moveListo[i+j],max)
          var centerObjecto = ( maxObjecto - minObjecto ) / 2

         while  ( typeof(moveListo[i+j]) == "object") {
          if ( min == "boxmin") {
          moveListo[i+j].translateX(centerShed - centerObjecto)
        } else {
          moveListo[i+j].translateZ(centerShed - centerObjecto)
        }
          j+= 1
           }  
         }
    } catch {
      console.log("er")
    }
  }

}

function centerOnSomethingZ(object,on1,box1,on2,box2) {

    let initPos = getPos(object,"boxminz")
    var minShed = getPos(on1,box1)
    var maxShed = getPos(on2,box2)
    var centerShed = ( maxShed -minShed) /2
    var minObjecto = getPos(object,"boxminz")
    var maxObjecto = getPos(object,"boxmaxz")
    var centerObjecto = ( maxObjecto- minObjecto) / 2
    object.translateZ(minShed - minObjecto)
    var minObjecto = getPos(object,"boxminz")
    var maxObjecto = getPos(object,"boxmaxz")
    var centerObjecto = ( maxObjecto - minObjecto) / 2
    object.translateZ(centerShed - centerObjecto)
    let lastPos = getPos(object,"boxminz")
    return lastPos-initPos
}

function gablePeak(side) {


   try {
    setTransp(faceGableBoard,0)
    setTransp(faceGableBoard2,0)
  } catch {
    //pass
  }
   if ( side == "Designer") {
    try {
      setTransp(backRaft,0)
      setTransp(frontRaft,0)
      setTransp(fr,1)
      setTransp(br,1)
      fr.scale.x = XX
      br.scale.x = XX
     
     
      centerUnknownX(fr,front)
      centerUnknownX(br,backty)
      translateOn(doorFloorLeft,"boxmaxz",fr,"boxmaxz")
      translateOn(floorBack,"boxminz",br,"boxminz")
    } catch {
      //pass
    }
  }
  if (ShingHighModel == "Designer") {

    try {
      scene.remove(dripoRight)
      scene.remove(dripoLeft)
      scene.remove(overHigh)
      scene.remove(overHigh2)
    } catch {
      //pass
    }
     try {
      scene.remove(dripoLeft)
    } catch {
      //pass
    }
  }
   try {
      scene.remove(shingles)
      scene.remove(shing2)
    } catch {
      //pass
    }
    try {
      scene.remove(shnig3)
    } catch {
      //pass
    }
   
    try {
      scene.remove(peak)
      scene.remove(peak2)
    } catch {
      //pass
    }
    try {
      scene.remove(designerRight)
      scene.remove(designerLeft)
    }
    catch {
      //pass
    }
  try {
    setTransp(dripoRight,1)
    setTransp(dripoLeft,1)
    dripFront.scale.x = 1
    dripBack.scale.x=1
    centerObjects(dripoLeft)
    var piso1 = getPos(dripFront,"boxmin")
    var piso2 = getPos(dripoLeft,"boxmin")
    dripoLeft.translateX(piso1-piso2)
    centerObjects(dripoRight)
    var piso1 = getPos(dripFront,"boxmax")
    var piso2 = getPos(dripoRight,"boxmax")
    dripoRight.translateX(piso1-piso2)
  } catch {
  }
   try {
          scene.remove(gableHighRight)
          scene.remove(gableHighLeft)
        } catch {
          console.log("pd in loadPd")
        }
  
  
  ShingHighModel = side
  //loadingShingModel(pitchD,sizeD)
  if ( ShingHighModel == "Both" || ShingHighModel == "Right" || ShingHighModel == "Left" || ShingHighModel == "") {
    try {
      setTransp(backRaft,1)
      setTransp(frontRaft,1)
      setTransp(fr,0)
      setTransp(br,0)
     
    } catch {
      //pass
    }
    
                
  loadingRafterHighbarn("nope")
  setTimeout(removeExtra,2000)
} else {
  try {
    scene.remove(overRight)
    scene.remove(overLeft)
  } catch {
    //pass
  }

                
  loadingShingModel(pitchD,sizeD)
  setTimeout(removeExtra,500)
}
 let myval = 1.03
  try {
    if ( ShingHighModel == "7gable") {
      myval = 1.045
    } else if ( ShingHighModel == "Designer") {
      myval = 1.08
    }
  } catch {
    //pass
  }
  for ( c of [cornersFrontLeft,cornersFrontRight,cornersBackRight,cornersBackLeft]) {

  var pos1 = getPos(c,"boxminy")
  c.scale.y = myval
  var pos2 = getPos(c,"boxminy")
  c.translateY(pos1-pos2)
 }


}

function removeExtra() {
  let posref,posnow 
  posref = getPos(righty,"boxmin")
  for ( c of p2 ) {
    posnow = getPos(c,"boxmax")
    if (posnow > posref) {
      scene.remove(c)
    }
  }
}

function changeDoorSize(numbers) {
      DOORSIZE = numbers + "/"
      DOORSIZEDOUBLE = numbers + "/"
      if ( model == "Standard door" || model == "standard/") {
      DOORSTYLE = "standard/"
      DOORTYPE = "door"
      doorTrim = "trimStd1"
      doorClose = "trimStd2"
      doorHinge = "hinges"

      } else if ( model == "Carriage" || model == "carriage/") {

      DOORSTYLE = "carriage/"
      DOORTYPE = "door"
      doorTrim = "trimStd2"
      doorClose = "win2"
      doorHinge = "hinges12"
      } 
      else {
      doorTrim = "trimStd"
      doorHinge = "hinges"
      DOORTYPE = "door"
      doorClose = "none"

    }
  
      updateGuiDoor(model)

      switch(applytoAllDoors) {
        case true:
               var selOnce = true
               for ( objj of listObj) {
                  if ( objj.name.includes("Door")) {
                if (objj.door.model == "double/") {
                  
                  addingDoorModelDouble(DOORTYPEDOUBLE,objj,"ddtype")
                } else {
              addingDoorModel(DOORTYPE,objj,"ddtype")
            }
                  }
              }
              break;
        case false:
              let curObj = document.getElementById("dropingobj").innerHTML
              let cjd = "var currentObj = " +curObj+"Dict"
              eval(cjd)
              if ( objj.door.model == "double/") {
                addingDoorModelDouble(DOORTYPE,currentObj,"ddtype")
              } else {
              addingDoorModel(DOORTYPE,currentObj,"ddtype")
}           }
}
function centerOnSomethingX(object,on1,box1,on2,box2) {
  
    let initPos = getPos(object,"boxmin")
    var minShed = getPos(on1,box1)
    var maxShed = getPos(on2,box2)
    var centerShed = ( maxShed -minShed) /2
    var minObjecto = getPos(object,"boxmin")
    var maxObjecto = getPos(object,"boxmax")
    var centerObjecto = ( maxObjecto- minObjecto) / 2
    object.translateX(minShed - minObjecto)
    var minObjecto = getPos(object,"boxmin")
    var maxObjecto = getPos(object,"boxmax")
    var centerObjecto = ( maxObjecto - minObjecto) / 2
    object.translateX(centerShed - centerObjecto)
    let lastPos = getPos(object,"boxmin")
    return lastPos-initPos
}

function centerOnSomethingCustomZ(object,pos1,pos2) {

    let initPos = getPos(object,"boxminz")
    var minShed = pos1
    var maxShed = pos2
    var centerShed = ( maxShed -minShed) /2
    var minObjecto = getPos(object,"boxminz")
    var maxObjecto = getPos(object,"boxmaxz")
    var centerObjecto = ( maxObjecto- minObjecto) / 2
    object.translateZ(minShed - minObjecto)
    var minObjecto = getPos(object,"boxminz")
    var maxObjecto = getPos(object,"boxmaxz")
    var centerObjecto = ( maxObjecto - minObjecto) / 2
    object.translateZ(centerShed - centerObjecto)
    let lastPos = getPos(object,"boxminz")
    return lastPos-initPos
}


function centerOnSomethingCustomX(object,pos1,pos2) {
  
    let initPos = getPos(object,"boxmin")
    var minShed = pos1
    var maxShed = pos2
    var centerShed = ( maxShed -minShed) /2
    var minObjecto = getPos(object,"boxmin")
    var maxObjecto = getPos(object,"boxmax")
    var centerObjecto = ( maxObjecto- minObjecto) / 2
    object.translateX(minShed - minObjecto)
    var minObjecto = getPos(object,"boxmin")
    var maxObjecto = getPos(object,"boxmax")
    var centerObjecto = ( maxObjecto - minObjecto) / 2
    object.translateX(centerShed - centerObjecto)
    let lastPos = getPos(object,"boxmin")
    return lastPos-initPos
}

function centerUnknownX(object,on) {

    let initPos = getPos(object,"boxmin")
    var minShed = getPos(on,"boxmin")
    var maxShed = getPos(on,"boxmax")
    var centerShed = ( maxShed -minShed) /2
    var minObjecto = getPos(object,"boxmin")
    var maxObjecto = getPos(object,"boxmax")
    var centerObjecto = ( maxObjecto- minObjecto) / 2
    object.translateX(minShed - minObjecto)
    var minObjecto = getPos(object,"boxmin")
    var maxObjecto = getPos(object,"boxmax")
    var centerObjecto = ( maxObjecto - minObjecto) / 2
    object.translateX(centerShed - centerObjecto)
    let lastPos = getPos(object,"boxmin")
    return lastPos-initPos
}

function centerUnknownZ(object,on) {

    let initPos = getPos(object,"boxminz")
    var minShed = getPos(on,"boxminz")
    var maxShed = getPos(on,"boxmaxz")
    var centerShed = ( maxShed -minShed) /2
    var minObjecto = getPos(object,"boxminz")
    var maxObjecto = getPos(object,"boxmaxz")
    var centerObjecto = ( maxObjecto- minObjecto) / 2
    object.translateZ(minShed - minObjecto)
    var minObjecto = getPos(object,"boxminz")
    var maxObjecto = getPos(object,"boxmaxz")
    var centerObjecto = ( maxObjecto - minObjecto) / 2
    object.translateZ(centerShed - centerObjecto)
    let lastPos = getPos(object,"boxminz")
    return lastPos-initPos
}

function centerWindowHigh(object) {
    let initPos = getPos(object,"boxminy")
    var minShed = 1.3207999467849731
    var maxShed = 2.0510499477386475
    var centerShed = ( maxShed -minShed) /2
    var minObjecto = getPos(object,"boxminy")
    var maxObjecto = getPos(object,"boxmaxy")
    var centerObjecto = ( maxObjecto- minObjecto) / 2
    object.translateY(minShed - minObjecto)
    var minObjecto = getPos(object,"boxminy")
    var maxObjecto = getPos(object,"boxmaxy")
    var centerObjecto = ( maxObjecto - minObjecto) / 2
    object.translateY(centerShed - centerObjecto)
    let lastPos = getPos(object,"boxminy")
    return lastPos-initPos
}

function centerWindowLow(object) {
    let initPos = getPos(object,"boxminy")
    var minShed = 1.2446000576019287
    var maxShed = 1.974850058555603 
    var centerShed = ( maxShed -minShed) /2
    var minObjecto = getPos(object,"boxminy")
    var maxObjecto = getPos(object,"boxmaxy")
    var centerObjecto = ( maxObjecto- minObjecto) / 2
    object.translateY(minShed - minObjecto)
    var minObjecto = getPos(object,"boxminy")
    var maxObjecto = getPos(object,"boxmaxy")
    var centerObjecto = ( maxObjecto - minObjecto) / 2
    object.translateY(centerShed - centerObjecto)
    let lastPos = getPos(object,"boxminy")
    return lastPos-initPos
}
function centerUnknownY(object,on) {

    let initPos = getPos(object,"boxminy")
    var minShed = getPos(on,"boxminy")
    var maxShed = getPos(on,"boxmaxy")
    var centerShed = ( maxShed -minShed) /2
    var minObjecto = getPos(object,"boxminy")
    var maxObjecto = getPos(object,"boxmaxy")
    var centerObjecto = ( maxObjecto- minObjecto) / 2
    object.translateY(minShed - minObjecto)
    var minObjecto = getPos(object,"boxminy")
    var maxObjecto = getPos(object,"boxmaxy")
    var centerObjecto = ( maxObjecto - minObjecto) / 2
    object.translateY(centerShed - centerObjecto)
    let lastPos = getPos(object,"boxminy")
    return lastPos-initPos
}


function centerObjects(object) {
var minShed = getPos(shell,"boxminz")
var maxShed = getPos(shell,"boxmaxz")
var centerShed = ( maxShed -minShed) /2
var minObjecto = getPos(object,"boxminz")
var maxObjecto = getPos(object,"boxmaxz")
var centerObjecto = ( maxObjecto- minObjecto) / 2
object.translateZ(minShed - minObjecto)
var minObjecto = getPos(object,"boxminz")
var maxObjecto = getPos(object,"boxmaxz")
var centerObjecto = ( maxObjecto - minObjecto) / 2
object.translateZ(centerShed - centerObjecto)
}

function centerObjectsReversed(object) {
var minShed = getPos(shell,"boxminz")
var maxShed = getPos(shell,"boxmaxz")
var centerShed = ( maxShed -minShed) /2
var minObjecto = getPos(object,"boxminz")
var maxObjecto = getPos(object,"boxmaxz")
var centerObjecto = ( maxObjecto- minObjecto) / 2
object.translateZ(-(minShed - minObjecto))
var minObjecto = getPos(object,"boxminz")
var maxObjecto = getPos(object,"boxmaxz")
var centerObjecto = ( maxObjecto - minObjecto) / 2
object.translateZ(-(centerShed - centerObjecto))

}

function centerObjectsReversedX(object) {
var minShed = getPos(shell,"boxmin")
var maxShed = getPos(shell,"boxmax")
var centerShed = ( maxShed -minShed) /2
var minObjecto = getPos(object,"boxmin")
var maxObjecto = getPos(object,"boxmax")
var centerObjecto = ( maxObjecto- minObjecto) / 2
object.translateX(-(minShed - minObjecto))
var minObjecto = getPos(object,"boxmin")
var maxObjecto = getPos(object,"boxmax")
var centerObjecto = ( maxObjecto - minObjecto) / 2
object.translateX(-(centerShed - centerObjecto))

}

function centerRafterReversedX(object,on) {
var minShed = getPos(on,"boxmin")
var maxShed = getPos(on,"boxmax")
var centerShed = ( maxShed -minShed) /2
var minObjecto = getPos(object,"boxmin")
var maxObjecto = getPos(object,"boxmax")
var centerObjecto = ( maxObjecto- minObjecto) / 2
object.translateX(-(minShed - minObjecto))
var minObjecto = getPos(object,"boxmin")
var maxObjecto = getPos(object,"boxmax")
var centerObjecto = ( maxObjecto - minObjecto) / 2
object.translateX(-(centerShed - centerObjecto))
}

function centerRafterReversedY(object,on) {
  var minShed = getPos(on,"boxminy")
var maxShed = getPos(on,"boxmaxy")
var centerShed = ( maxShed -minShed) /2
var minObjecto = getPos(object,"boxminy")
var maxObjecto = getPos(object,"boxmaxy")
var centerObjecto = ( maxObjecto- minObjecto) / 2
object.translateY(-(minShed - minObjecto))
var minObjecto = getPos(object,"boxminy")
var maxObjecto = getPos(object,"boxmaxy")
var centerObjecto = ( maxObjecto - minObjecto) / 2
object.translateY(-(centerShed - centerObjecto))
}

function centerRafterReversedZ(object,on) {
  var minShed = getPos(on,"boxminz")
var maxShed = getPos(on,"boxmaxz")
var centerShed = ( maxShed -minShed) /2
var minObjecto = getPos(object,"boxminz")
var maxObjecto = getPos(object,"boxmaxz")
var centerObjecto = ( maxObjecto- minObjecto) / 2
object.translateZ(-(minShed - minObjecto))
var minObjecto = getPos(object,"boxminz")
var maxObjecto = getPos(object,"boxmaxz")
var centerObjecto = ( maxObjecto - minObjecto) / 2
object.translateZ(-(centerShed - centerObjecto))
}

function selectWindow(n) {
    //updateDatDropdown(wgSize, ["","18x27","24x27","18x36","24x36","insulated : 30x36"])
  try {
    var tempS = "var currentDict = " + n + "Dict"
    eval(tempS)
    var size = currentDict.window.size 
    var nb = currentDict.window.nb
    var shutter = currentDict.window.shutter 
    var trim = currentDict.window.trim 
} catch {
    console.log("this is not an object")
}
try {
  document.getElementById("switchHinge").style.display = "none"
  document.getElementById("garageopt").style.display = "none"
} catch {
  //pass
}
if ( size == "1827/") {
  updateDatDropdown(wgSize, ["18x27","24x27","18x36","24x36","insulated : 30x36","22x39 Wood sash window","30x39 Wood sash window"])
} else if ( size == "2427/") {
  updateDatDropdown(wgSize, ["24x27","18x27","18x36","24x36","insulated : 30x36","22x39 Wood sash window","30x39 Wood sash window"])
} else if ( size == "1836/") {
  updateDatDropdown(wgSize, ["18x36","24x27","18x27","24x36","insulated : 30x36","22x39 Wood sash window","30x39 Wood sash window"])
} else if ( size == "2436/") {
  updateDatDropdown(wgSize, ["24x36","18x36","24x27","18x27","insulated : 30x36","22x39 Wood sash window","30x39 Wood sash window"])
} else if ( size == "3036/") {
  updateDatDropdown(wgSize, ["insulated : 30x36","24x36","18x36","24x27","18x27","22x39 Wood sash window","30x39 Wood sash window"])
} else if (size == "2239/") {
  updateDatDropdown(wgSize, ["22x39 Wood sash window","insulated : 30x36","24x36","18x36","24x27","18x27","30x39 Wood sash window"])


} else if ( size == "3039/") {
  updateDatDropdown(wgSize, ["30x39 Wood sash window","22x39 Wood sash window","insulated : 30x36","24x36","18x36","24x27","18x27"])
}
if ( nb == "1/") {
  updateDatDropdown(wgNum, ["1","2","3"])
} else if ( nb == "2/") {
  updateDatDropdown(wgNum, ["2","1","3"])
} else if ( nb == "3/") {
  updateDatDropdown(wgNum, ["3","2","1"])
}

  
    if ( trim == "stdStraight" ) {
        updateDatDropdown(wgShutter , ["","Standard Shutters","Shutters Z Style","Shutters Classic Wide","Vinyl standard","Vinyl Raised Panel", "XL Raised (higher windows only)","None"])
        updateDatDropdown(wgTrim,["","Trim Std Straight","Trim Std Curved","Trim Wide Curved","Trim Wide Straight","Aluminium","Aluminium Wide","None"])
      
      } else if ( trim == "stdCurved") {
        updateDatDropdown(wgShutter , ["","Standard Shutters","Shutters Z Style","Shutters Classic Wide","Vinyl standard","Vinyl Raised Panel", "XL Raised (higher windows only)","None"]);
        updateDatDropdown(wgTrim,["","Trim Std Curved","Trim Std Straight","Trim Wide Curved","Trim Wide Straight","Aluminium","Aluminium Wide","None"])

      } else if ( trim == "wideCurved" ) {

        updateDatDropdown(wgShutter , ["","Standard Shutters","Shutters Z Style","Shutters Classic Wide","Vinyl standard","Vinyl Raised Panel", "XL Raised (higher windows only)","None"]);
        updateDatDropdown(wgTrim,["","Trim Wide Curved","Trim Std Curved","Trim Std Straight","Trim Wide Straight","Aluminium","Aluminium Wide","None"])

      } else if ( trim == "wideStraight") {
        updateDatDropdown(wgShutter , ["","Standard Shutters","Shutters Z Style","Shutters Classic Wide","Vinyl standard","Vinyl Raised Panel", "XL Raised (higher windows only)","None"]);
        updateDatDropdown(wgTrim,["","Trim Wide Straight","Trim Wide Curved","Trim Std Curved","Trim Std Straight","Aluminium","Aluminium Wide","None"])

      } else if (trim == "aluminium") {
        updateDatDropdown(wgShutter , ["","Standard Shutters","Shutters Z Style","Shutters Classic Wide","Vinyl standard","Vinyl Raised Panel", "XL Raised (higher windows only)","None"]);
       updateDatDropdown(wgTrim,["","Aluminium","Trim Wide Straight","Trim Wide Curved","Trim Std Curved","Trim Std Straight","Aluminium Wide","None"])
       }
       else if (trim == "aluminiumWide") {
        updateDatDropdown(wgShutter , ["","Standard Shutters","Shutters Z Style","Shutters Classic Wide","Vinyl standard","Vinyl Raised Panel", "XL Raised (higher windows only)","None"]);
       updateDatDropdown(wgTrim,["","Aluminium Wide","Trim Wide Straight","Trim Wide Curved","Trim Std Curved","Trim Std Straight","Aluminium","None"])
       

      } else if (trim == "None") {
        updateDatDropdown(wgShutter , ["","Standard Shutters","Shutters Z Style","Shutters Classic Wide","Vinyl standard","Vinyl Raised Panel", "XL Raised (higher windows only)","None"]);
        updateDatDropdown(wgTrim,["","Aluminium Wide","Trim Wide Straight","Trim Wide Curved","Trim Std Curved","Trim Std Straight","Aluminium","None"])
      }
        if (size == "2239/") {
        updateDatDropdown(wgSize, ["22x39 Wood sash window","insulated : 30x36","24x36","18x36","24x27","18x27","30x39 Wood sash window"])
        updateDatDropdown(wgShutter , [""])
        updateDatDropdown(wgTrim,[""])

} else if ( size == "3039/") {
  updateDatDropdown(wgSize, ["30x39 Wood sash window","22x39 Wood sash window","insulated : 30x36","24x36","18x36","24x27","18x27"])
}
      
      


if ( size == "2229/" || size == "3039/") {
  updateDatDropdown(wgTrim,[""])
  updateDatDropdown(wgShutter , [""]);
  updateDatDropdown(wgNum, [""])
}
}

function switchHinges() {
  let n = document.getElementById("dropingobj").innerHTML
  let tempS = "var currentDict = " + n + "Dict"
  eval(tempS)
  let model = currentDict.door.model 
  let size = currentDict.door.size 
  let hinge = currentDict.door.hinge
  let namehinge
  try {
    namehinge = currentDict.hinge.name
  } catch {
    namehinge = ""
  }
  if (namehinge == "hingeReversed" ) {

  addingSwitchedHingeModel(hinge,currentDict,"normal")
} else {

  addingSwitchedHingeModel(hinge,currentDict,"hingeReversed")
}
}

function selectOne(n) {
  document.getElementById("loft").style.display ="none"
  try {

    var tempS = "var currentDict = " + n + "Dict"
    eval(tempS)
    var model = currentDict.door.model 
    var type = currentDict.door.type 
    var size = currentDict.door.size 
    var trim = currentDict.door.trim 
    var hinge = currentDict.door.hinge
    var close = currentDict.door.close
    if ( model == "garage/") {
      type = type.replace("Square")
      type = type.replace("Curved")

    try {
    var x = currentDict.door.x
    var close = currentDict.door.close
  } catch {
    //pass
  }
}
  try {
    opening = GARAGEOPENING
  } catch {
    //pass
  }

} catch {
    console.log("this is not an object")
}


 if ( model == "garage/") {

if ( GARAGEMODEL == true && GARAGEDOOR == "door") {
   document.getElementById("sthobj").style.display = "none"
   document.getElementById("garageopt").style.display = "block"
  document.getElementById("switchGlass").style.display = "block"
} else  {
   //document.getElementById("Garage").style.display = "none"
    document.getElementById("sthobj").style.display = "block"
    document.getElementById("garageopt").style.display = "nonz"
  document.getElementById("switchGlass").style.display = "none"
}
} else {
   document.getElementById("sthobj").style.display = "block"
  document.getElementById("garageopt").style.display = "none"
    
    //document.getElementById("right").style.display = "block"
    //document.getElementById("left").style.display = "block"
    //document.getElementById("remove").style.display = "block"
    
}
 if ( size == "30/" || size == "36/" || size == "42/" || size == "48/") {
  document.getElementById("switchHinge").style.display = "block"
} else {
  document.getElementById("switchHinge").style.display = "none"
}
/*
if ( model == "standard/") {
  document.getElementById("switchHinge").style.display = "none"
}
*/ 
 if ( model == "double/") {

  if ( Dpath == "cabana/") {
    updateDatDropdown(doorType , ["Transom above door","Fiberglass door","Steel door","Standard door", "Carriage"]);
  } else {
    updateDatDropdown(doorType , ["Transom above door","Fiberglass door","Steel door","Standard door", "Carriage"]);
  }
  updateDatDropdown(ddtype , ['48" Single door','42" Single door','36" Single door','30" Single door',"4' double","5' double","6' double","7' double","8' double"]);
  if ( size == "48/") {
    updateDatDropdown(ddtype , ['48" Single door','42" Single door','36" Single door','30" Single door',"4' double","5' double","6' double","7' double","8' double"]);
  } else if (size == "42/") {
    updateDatDropdown(ddtype , ['42" Single door','48" Single door','36" Single door','30" Single door',"4' double","5' double","6' double","7' double","8' double"]);
  } else if ( size == "36/") {
    updateDatDropdown(ddtype , ['36" Single door','42" Single door','48" Single door','30" Single door',"4' double","5' double","6' double","7' double","8' double"]);
  } else if ( size == "30/") {
    updateDatDropdown(ddtype , ['30" Single door','36" Single door','42" Single door','48" Single door',"4' double","5' double","6' double","7' double","8' double"]);
  } else if ( size == "4/") {
    updateDatDropdown(ddtype , ["4' double",'30" Single door','36" Single door','42" Single door','48" Single door',"5' double","6' double","7' double","8' double"]);
  } else if ( size == "5/") {
    updateDatDropdown(ddtype , ["5' double","4' double",'30" Single door','36" Single door','42" Single door','48" Single door',"6' double","7' double","8' double"]);
  } else if ( size == "6/") {
    updateDatDropdown(ddtype , ["6' double","5' double","4' double",'30" Single door','36" Single door','42" Single door','48" Single door',"7' double","8' double"]);
  } else if ( size == "7/") {
    updateDatDropdown(ddtype , ["7' double","6' double","5' double","4' double",'30" Single door','36" Single door','42" Single door','48" Single door',"8' double"]);
 } else if ( size == "8/") {
    updateDatDropdown(ddtype , ["8' double","7' double","6' double","5' double","4' double",'30" Single door','36" Single door','42" Single door','48" Single door']);
 }

  if ( trim == "trimWide") {
    updateDatDropdown(ddtrim , ['Wide Door','Standard Door']);
  } else if ( trim == "trimWide2") {
    updateDatDropdown(ddtrim , ['Wide Door','Standard Door']);
  } else if ( trim == "trimStd") {
    updateDatDropdown(ddtrim , ['Standard Door','Wide Door']);
  } else if ( trim == "trimStd2") {
    updateDatDropdown(ddtrim , ['Standard Door','Wide Door']);
  }
  updateDatDropdown(ddotrim , [""])
  updateDatDropdown(ddhinges ,["hinges"]);
  updateDatDropdown(ddotrim , [""])

} else if ( model == "fiber/") {
  if ( Dpath == "cabana/") {
    updateDatDropdown(doorType , ["Fiberglass door","Steel door","Standard door", "Carriage"]);
  } else {
    updateDatDropdown(doorType , ["Fiberglass door","Steel door","Standard door", "Transom above door", "Carriage"]);
  }
  
  if ( size == "36/") {
      updateDatDropdown(ddtype , ['36" Single door','30" Single door',"4' Fiberglass","5' Fiberglass","6' Fiberglass"]);
  } else if ( size == "30/") {
      updateDatDropdown(ddtype , ['30" Single door','36" Single door',"4' Fiberglass","5' Fiberglass","6' Fiberglass"]);
  } else if ( size == "4/") {
      updateDatDropdown(ddtype , ["4' Fiberglass",'30" Single door','36" Single door',"5' Fiberglass","6' Fiberglass"]);
  } else if ( size == "5/") {
      updateDatDropdown(ddtype , ["5' Fiberglass","4' Fiberglass",'30" Single door','36" Single door',"6' Fiberglass"]);
  } else if ( size == "6/") {
      updateDatDropdown(ddtype , ["6' Fiberglass","5' Fiberglass","4' Fiberglass",'30" Single door','36" Single door']);
  }

  if ( trim == "trimStd") {

    updateDatDropdown(ddtrim , ["Trim Std","Trim Vinyl","Trim Wide"]);
  } else if ( trim == "trimVinyl") {
    updateDatDropdown(ddtrim , ["Trim Vinyl","Trim Std","Trim Wide"]);
  } else if ( trim == "trimWide") {
    updateDatDropdown(ddtrim , ["Trim Wide","Trim Std","Trim Vinyl"]);
  }
  if ( hinge == "hinges6") {
    updateDatDropdown(ddhinges ,['6" decorative hinges','Std hinges']);
  } else if ( hinge == "hinges") {
    updateDatDropdown(ddhinges ,['Std hinges','6" decorative hinges']);
  }
  
   if ( size == "6/" || size == "36/") {
    if ( type == "4lite") {
      updateDatDropdown(ddotrim , ['Glass 4 lite','Standard',"Glass 9 lite","Glass 11 lite","Glass 15 lite"])
    } else if ( type == "9lite") {
      updateDatDropdown(ddotrim , ["Glass 9 lite",'Standard','Glass 4 lite',"Glass 11 lite","Glass 15 lite"])
    } else if ( type == "11lite") {
      updateDatDropdown(ddotrim , ["Glass 11 lite","Standard","Glass 9 lite",'Glass 4 lite',"Glass 15 lite"])
    } else if ( type == "15lite") {
      updateDatDropdown(ddotrim , ["Glass 15 lite","Standard","Glass 11 lite","Glass 9 lite",'Glass 4 lite'])
    } else if ( type == "door") {
       updateDatDropdown(ddotrim , ["Standard","Glass 15 lite","Glass 11 lite","Glass 9 lite",'Glass 4 lite'])
    }
    
   }
   if ( size == "30/" || size == "5/") {
    if ( type == "4lite") {
      updateDatDropdown(ddotrim , ['Glass 4 lite','Standard',"Glass 9 lite","Glass 11 lite", "Glass 15 lite"])
    } else if ( type == "9lite") {
      updateDatDropdown(ddotrim , ["Glass 9 lite",'Standard','Glass 4 lite',"Glass 11 lite", "Glass 15 lite"])
    } else if ( type == "11lite") {
      updateDatDropdown(ddotrim , ["Glass 11 lite","Standard","Glass 9 lite",'Glass 4 lite', "Glass 15 lite"])
    } else if ( type == "door") {
       updateDatDropdown(ddotrim , ["Standard","Glass 11 lite","Glass 9 lite",'Glass 4 lite',"Glass 15 lite"])
    } else if ( type == "15lite") {
       updateDatDropdown(ddotrim , ["Glass 15 lite","Standard","Glass 11 lite","Glass 9 lite",'Glass 4 lite'])
    }
    
  }
  if ( size == "4/") {
    updateDatDropdown(ddotrim , ["Standard",'Glass 4 lite'])
    if ( type == "4lite") {
      updateDatDropdown(ddotrim , ['Glass 4 lite','Standard'])
    } else if ( type == "door") {
       updateDatDropdown(ddotrim , ["Standard",'Glass 4 lite'])
    }
  }
     
} else if ( model == "steel/") {
  if ( Dpath == "cabana/") {
    updateDatDropdown(doorType , ["Steel door","Fiberglass door","Standard door","Carriage"]);
  } else {
    updateDatDropdown(doorType , ["Steel door","Fiberglass door","Transom above door","Standard door","Carriage"]);
  }
     

   if ( size == "36/") {
      updateDatDropdown(ddtype , ['36" Single door','30" Single door',"4' Steel","5' Steel","6' Steel"]);
  } else if ( size == "30/") {
      updateDatDropdown(ddtype , ['30" Single door','36" Single door',"4' Steel","5' Steel","6' Steel"]);
  } else if ( size == "4/") {
      updateDatDropdown(ddtype , ["4' Steel",'30" Single door','36" Single door',"5' Steel","6' Steel"]);
  } else if ( size == "5/") {
      updateDatDropdown(ddtype , ["5' Steel","4' Steel",'30" Single door','36" Single door',"6' Steel"]);
  } else if ( size == "6/") {
      updateDatDropdown(ddtype , ["6' Steel","5' Steel","4' Steel",'30" Single door','36" Single door']);
  }
   if ( size == "30/" || size == "5/") {
   
     if ( type == "9lite") {
      updateDatDropdown(ddotrim , ["Glass 9 lite",'Standard',"Glass 11 lite", "Glass 15 lite"])
    } else if ( type == "11lite") {
      updateDatDropdown(ddotrim , ["Glass 11 lite","Standard","Glass 9 lite", "Glass 15 lite"])
    } else if ( type == "door") {
       updateDatDropdown(ddotrim , ["Standard","Glass 11 lite","Glass 9 lite", "Glass 15 lite"])
    } else if ( type == "15lite") {
       updateDatDropdown(ddotrim , ["Glass 15 lite","Standard","Glass 11 lite","Glass 9 lite"])
    }
    
   } else if ( size == "36/" || size == "6/") {
      if ( type == "9lite") {
      updateDatDropdown(ddotrim , ["Glass 9 lite",'Standard',"Glass 11 lite","Glass 15 lite"])
    } else if ( type == "11lite") {
      updateDatDropdown(ddotrim , ["Glass 11 lite","Standard","Glass 9 lite","Glass 15 lite"])
    } else if ( type == "15lite") {
      updateDatDropdown(ddotrim , ["Glass 15 lite","Standard","Glass 11 lite","Glass 9 lite"])
    } else if ( type == "door") {
       updateDatDropdown(ddotrim , ["Standard","Glass 15 lite","Glass 11 lite","Glass 9 lite"])
    }
   }
    if ( size == "4/") {
    updateDatDropdown(ddotrim , [""])
  }
    if ( trim == "trimStd") {

    updateDatDropdown(ddtrim , ["Trim Std","Trim Vinyl","Trim Wide"]);
  } else if ( trim == "trimVinyl") {
    updateDatDropdown(ddtrim , ["Trim Vinyl","Trim Std","Trim Wide"]);
  } else if ( trim == "trimWide") {
    updateDatDropdown(ddtrim , ["Trim Wide","Trim Std","Trim Vinyl"]);
  }
  if ( hinge == "hinges6") {
    updateDatDropdown(ddhinges ,['6" decorative hinges','Std hinges']);
  } else if ( hinge == "hinges") {
    updateDatDropdown(ddhinges ,['Std hinges','6" decorative hinges']);
  }
} else if ( model == "carriage/") {
      updateDatDropdown(ddotrim , ["carriage"])

      if ( hinge == "hinges6") {
    updateDatDropdown(ddhinges ,['6" decorative hinges','Std hinges', '12" decorative hinges']);
  } else if ( hinge == "hinges") {
    updateDatDropdown(ddhinges ,['Std hinges','6" decorative hinges', '12" decorative hinges']);
  } else if ( hinge == "hinges12") {
    updateDatDropdown(ddhinges ,['12" decorative hinges','Std hinges','6" decorative hinges']);
  }
     
     if ( Dpath == "cabana/") {
    updateDatDropdown(doorType , ["Carriage","Standard door","Fiberglass door","Steel door"]);
  } else {
    updateDatDropdown(doorType , ["Carriage","Standard door","Fiberglass door","Steel door", "Transom above door"]);
  }
     if (size == "5/") {
     updateDatDropdown(ddtype , ["5' double","6' double"]);
     } else if ( size == "6/") {
     updateDatDropdown(ddtype , ["6' double","5' double"]);
     }
     if ( trim == "trimStd2") {
    updateDatDropdown(ddtrim , ["Straight Window","Arch Window","With X"]);
  } else if (trim == "trimStd1") {
    updateDatDropdown(ddtrim , ["Straight Window","Arch Window"]);
  } else if (trim == "trimCurved") {
    updateDatDropdown(ddtrim , ["Arch Window","Straight Window","With X"]);
  } else if ( x == "yup") {
    updateDatDropdown(ddtrim , ["With X","Arch Window","Straight Window"]);
  }
} else if ( model == "garage/") {
   updateDatDropdown(ddhinges ,['']);
   updateDatDropdown(ddramp ,['']);
   updateDatDropdown(doorType ,['']);
  if ( opening == "Square") {
    updateDatDropdown(ddopening,["Square opening","45 opening","Curved door opening"])
    if ( trim == "miratecTrim2.5") {
      updateDatDropdown(ddtrim,["Miratec trim 2.5","Miratec trim 3.5", "Metal trim"])
    } else if (trim == "miratecTrim3.5") {
      updateDatDropdown(ddtrim,["Miratec trim 3.5","Miratec trim 2.5","Metal trim"])
    } else if ( trim == "alumCorner") {
      updateDatDropdown(ddtrim,["Metal trim", "Miratec trim 2.5","Miratec trim 3.5"])
    }
  } else if ( opening == "") {
    updateDatDropdown(ddopening,["45 opening","Square opening","Curved door opening"]) 
    if ( trim == "miratecTrim2.5") {
      updateDatDropdown(ddtrim,["Miratec trim 2.5","Miratec trim 3.5", "Metal trim"])
    } else if (trim == "miratecTrim3.5") {
      updateDatDropdown(ddtrim,["Miratec trim 3.5","Miratec trim 2.5","Metal trim"])
    } else if ( trim == "alumCorner") {
      updateDatDropdown(ddtrim,["Metal trim","Miratec trim 2.5","Miratec trim 3.5"])
    }
  } else if ( opening == "Curved") {
    updateDatDropdown(ddopening,["Curved door opening","45 opening","Square opening"])
    updateDatDropdown(ddtrim,["Miratec curved"])
  }
  if ( type == "door") {
    updateDatDropdown(ddotrim,["overhead door","Homestead door","standard panel","cascade short panel","cathedral short panel","clear short panel","colonial short panel","sherwood short panel","sunburst short panel","waterton short panel"])
  } else  {
    updateDatDropdown(ddotrim,["Homestead door","overhead door","sunburst","cascade","waterton","wynbridge arche","stockton 12 lite","somerton 8 lite","sherwood"])
  }
}
else if ( model == "standard/") {
  
   if ( Dpath == "cabana/") {
     updateDatDropdown(doorType , ["Standard door","Carriage","Fiberglass door","Steel door"]);
  } else {
    updateDatDropdown(doorType , ["Standard door","Carriage","Fiberglass door","Steel door", "Transom above door"]);
  }
  if ( size == "36/") {
      updateDatDropdown(ddtype , ['36" Single door','30" Single door','48" Single door','42" Single door',"4' double","5' double","6' double","7' double","8' double"]);
  } else if ( size == "30/") {
      updateDatDropdown(ddtype , ['30" Single door','36" Single door','48" Single door','42" Single door',"4' double","5' double","6' double","7' double","8' double"]);
  } else if ( size == "4/") {
      updateDatDropdown(ddtype , ["4' double",'30" Single door','36" Single door','48" Single door','42" Single door',"5' double","6' double","7' double","8' double"]);
  } else if ( size == "5/") {
      updateDatDropdown(ddtype , ["5' double","4' double",'30" Single door','36" Single door','48" Single door','42" Single door',"6' double","7' double","8' double"]);
  } else if ( size == "6/") {
      updateDatDropdown(ddtype , ["6' double","5' double","4' double",'30" Single door','36" Single door','48" Single door','42" Single door',"7' double","8' double"]); 
  } else if ( size == "5c") {
      updateDatDropdown(ddtype , ["6' double","5' double","4' double",'30" Single door','36" Single door','48" Single door','42" Single door',"7' double","8' double"]); 
  } else if (size == "6c") {
      updateDatDropdown(ddtype , ["6' double","5' double","4' double",'30" Single door','36" Single door','48" Single door','42" Single door',"7' double","8' double"]); 

  } else if ( size == "48/") {
      updateDatDropdown(ddtype , ['48" Single door',"6' double","5' double","4' double",'30" Single door','36" Single door','42" Single door',"7' double","8' double"]); 

  } else if ( size == "42/") {
      updateDatDropdown(ddtype , ['42" Single door','48" Single door',"6' double","5' double","4' double",'30" Single door','36" Single door',,"7' double","8' double"]); 
  } else if ( size == "7/") {
      updateDatDropdown(ddtype , ["7' double",'42" Single door','48" Single door',"6' double","5' double","4' double",'30" Single door','36" Single door',"8' double"]); 
  } else if ( size == "8/") {
      updateDatDropdown(ddtype , ["8' double","7' double",'42" Single door','48" Single door',"6' double","5' double","4' double",'30" Single door','36" Single door']); 
  }

 
    if (type == "door") {

    if (trim == "trimStd1") {
    updateDatDropdown(ddtrim , ["","Straight","With X","Curved","With 45's","Transom Window"]);
  }   
  if ( x == "xStandard") {
 
    updateDatDropdown(ddtrim , ["","With X","Straight","Curved","With 45's","Transom Window"]);
  } else if ( x == "trim45") {

    updateDatDropdown(ddtrim , ["","With 45's","With X","Straight","Curved","Transom Window"]);
  } 
  if ( close == "trimCurved") {
   
    updateDatDropdown(ddtrim , ["","Curved","With X","Straight","With 45's","Transom Window"]);
  }

} else if ( type == "wide") {
    if ( x == "xWide"){
      updateDatDropdown(ddtrim , ["","With X","Wide","Transom Window"]);
    } else {
      updateDatDropdown(ddtrim , ["","Wide","With X","Transom Window"]);
    }
    
} else if ( type == "designer") {
    if ( x == "xDesigner") {
    updateDatDropdown(ddtrim , ["","With X","wide","Transom Window"]);
  } else {
    updateDatDropdown(ddtrim , ["","wide","With X","Transom Window"]);
  }
}


  if ( hinge == "hinges6") {
    updateDatDropdown(ddhinges ,['6" decorative hinges','Std hinges','12" decorative hinges']);
  } else if ( hinge == "hinges") {
    updateDatDropdown(ddhinges ,['Std hinges','6" decorative hinges','12" decorative hinges']);
  } else if ( hinge == "hinges12") {
    updateDatDropdown(ddhinges ,['12" decorative hinges','Std hinges','6" decorative hinges']);
  }

  if (type == "door") {
    updateDatDropdown(ddotrim , ["standard",'wide',"designer"])
  } else if ( type == "wide") {
    updateDatDropdown(ddotrim , ["wide",'standard',"designer"])
  } else if ( type == "designer") {
    updateDatDropdown(ddotrim , ["designer","standard",'wide'])
  }
 

} 
 if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
    if ( sizeD == "8wide") {
     updateDatDropdown(ddtype , ["4' double"]);

    } else if ( sizeD == "6wide") {
     updateDatDropdown(ddtype , ['36" Single door','30" Single door']);

    } else if ( sizeD == "10wide") {
      updateDatDropdown(ddtype , ["5' double"]);

    } else if ( sizeD == "12wide") {
      updateDatDropdown(ddtype , ["6' double"]);
    }
  }
}

function selectedOne(n) {

  if ( n == "none") {
    document.getElementById("rmenuObject").className = "hide"
    document.getElementById("gui").style.display = "none"
   
  } else {
    document.getElementById("gui").style.display = "none"
   
  }
  if ( n.includes("Garage")) {
    document.getElementById("rmenuObject").className = "hide"
    document.getElementById("gui").style.display = "block"
  }

  sobb = moveListo.indexOf(n)

  parameters["c"] = n

  gui.remove(sel)
  sel = gui.add(parameters,"c").name("Selected object : ")

  if ( n.includes("Door")) {
  selectOne(n)
} else if (n.includes("Window")) {
  selectWindow(n)
}
  if ( n.includes("Door")) {
    doorFolder.open()
    winFolder.close()
    generalF.close()

 
  } else if ( n.includes("Window")) {
    doorFolder.close()
    winFolder.open()
    generalF.close()
    
  }
  else {
    doorFolder.close()
    winFolder.close()

  }
 
 if ( n.includes("Garage")) {
    winFolder.close()
    generalF.close()
    doorFolder.close()
    garageFolder.open()
  }

  if ( typeof(loft)== "object") {

  for ( k = 0;k<loft.material.length;k++) {
    loft.material[k].color.setHex(0xa3a3a3)
  }
}
   
  for ( i = 0; i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes(COLORED) || n == "none") {
           try {
         if ( moveListo[i].includes("RightDoor") && GARAGEMODEL == true) {
            let tempva = "var tempa = " + moveListo[i] + "Dict.glassHigh"
            let tempva2 = "var tempa2 = " + moveListo[i] + "Dict.glassLow"
            eval(tempva)
            eval(tempva2)
          }
        } catch {
            //pass
          }
        for (j = 0;j<moveListo[i+1].material.length;j++) {  
            if (moveListo[i].includes("Door")) {
              moveListo[i+1].material[j].color.setHex(dictoColor[moveListo[i]])
                
             try {
            tempa.material[j].color.setHex(dictoColor[moveListo[i]])
            tempa2.material[j].color.setHex(dictoColor[moveListo[i]])
          } catch {
            //pass
          }
        }
            else if (moveListo[i].includes("Workbench")) {
              moveListo[i+1].material[j].color.setHex(0xa3a3a3)
            }
            else{
           moveListo[i+1].material[j].color.setHex(0xa3a3a3)
         }            
        }      
      }
    } catch {
      console.log("er")
    }
  }

  document.getElementById("dropingobj").innerHTML = n

  if ( n.includes("Door")) {
    document.getElementById("selobjmg").src = "https://img.icons8.com/office/35/000000/door--v2.png"
  } else if ( n.includes("Window")) {
    document.getElementById("selobjmg").src = "https://img.icons8.com/color/35/000000/open-window.png"
  }
  for ( i = 0; i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes(n)) {
        COLORED = moveListo[i]

        try {
         if ( moveListo[i].includes("RightDoor") && GARAGEMODEL == true) {
            let tempva = "var tempa = " + moveListo[i] + "Dict.glassHigh"
            let tempva2 = "var tempa2 = " + moveListo[i] + "Dict.glassLow"
            eval(tempva)
            eval(tempva2)
          }
        } catch {
            //pass
          }
        for (j = 0;j<moveListo[i+1].material.length;j++) {    
        if ( moveListo[i].includes("Door")) {
          
          moveListo[i+1].material[j].color.set(0x7EC0EE) 
          try {
            tempa.material[j].color.set(0x7EC0EE)
            tempa2.material[j].color.set(0x7EC0EE)
          } catch {
            //pass
          }
          
        }  else {
          moveListo[i+1].material[j].color.set(0x7EC0EE)          
        }
        }
        
      }
    } catch(error) {
      console.log(error)
    }
  }


}


// SELECTING TAB AND STUFF !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).keydown(function(e) {
    switch(e.which) {
        case 27: // left
        document.getElementById("dropingobj").innerHTML = "undefined"
        selectedOne("undefined")
        selectedOne("none")
        selectedSide("none")
        break;


        case 9: // up
        SelectK =[]
        for (i = 0; i < moveListo.length; i ++ ) {
          try {
          if (moveListo[i].includes("Window") || moveListo[i].includes("Door")) {
            SelectK.push(moveListo[i])
          
        }
    } catch {
      console.log("d")
    }
  }
      document.getElementById("dropingobj").innerHTML = SelectK[SelectKCount]
      if ( SelectKCount < SelectK.length) {
      SelectKCount += 1
   
    } else {
      SelectKCount = 0
    }
    selectedOne(document.getElementById("dropingobj").innerHTML)
  

        default: return; // exit this handler for other keys
    }
    
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
// SELECTING TAB AND STUFF !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function checkout() {
  confirmMoving()
  //workBenchCutByDoor()
}


function workBenchCutByDoor(){
  let pos1,pos2,p1,p2,rightdoors

  for ( varr of workPushed ) {
    if ( varr.name.includes("Right")) {
      pos1 = parseFloat(getPos(varr,"boxminz"))
      pos2 = parseFloat(getPos(varr,"boxmaxz"))
      rightdoors = []
      for ( sth of listObj) {
        if ( sth.name.includes("RightDoor")) {
          rightdoors.push(sth)
        }
      }
      for ( j of rightdoors ) {
        p1 = parseFloat(getPos(j.door,"boxminz"))
        p2 = parseFloat(getPos(j.door,"boxmaxz"))
      }
      if ( (pos1 > p2) || (pos2 < p1) || rightdoors.length == 0) {
        //console.log("nth")
      } else {
        alert("Workbench cannot be placed against door")
        if (Dpath != "capecode/") {
        viewObjects = true
      interiorObjects()
       camera.position.set( 1, 680, -80 )
      camera.updateProjectionMatrix();
    } else {
      transparentt()
    }
        for ( cc of varr.material) {
          cc.color.set(0xFF0000)
        }
      }

    } else if ( varr.name.includes("Left")) {
      pos1 = parseFloat(getPos(varr,"boxminz"))
      pos2 = parseFloat(getPos(varr,"boxmaxz"))
      rightdoors = []
      for ( sth of listObj) {
        if ( sth.name.includes("LeftDoor")) {
          rightdoors.push(sth)
        }
      }
      for ( j of rightdoors ) {
        p1 = parseFloat(getPos(j.door,"boxminz"))
        p2 = parseFloat(getPos(j.door,"boxmaxz"))
      }
      if ( (pos1 > p2) || (pos2 < p1) || rightdoors.length == 0) {
        //console.log("nth")
      } else {
        alert("Workbench cannot be placed against door")
        if (Dpath != "capecode/") {
          viewObjects = true
  interiorObjects()
  camera.position.set( 1, 680, -80 )
      camera.updateProjectionMatrix();
} else {
  transparentt()
}
        for ( cc of varr.material) {
          cc.color.set(0xFF0000)
        }
      }
    } else if ( varr.name.includes("Front")) {
      pos1 = parseFloat(getPos(varr,"boxmin"))
      pos2 = parseFloat(getPos(varr,"boxmax"))
      rightdoors = []
      for ( sth of listObj) {
        if ( sth.name.includes("FrontDoor")) {
          rightdoors.push(sth)
        }
      }
      for ( j of rightdoors ) {
        p1 = parseFloat(getPos(j.door,"boxmin"))
        p2 = parseFloat(getPos(j.door,"boxmax"))
      }
      if ( (pos1 > p2) || (pos2 < p1) || rightdoors.length == 0) {
        //console.log("nth")
      } else {
       alert("Workbench cannot be placed against door")
       if (Dpath != "capecode/") {
        viewObjects = true
  interiorObjects()
  camera.position.set( 1, 680, -80 )
      camera.updateProjectionMatrix();
} else {
  transparentt()
}
       for ( cc of varr.material) {
          cc.color.set(0xFF0000)
        }
      }

    } else if ( varr.name.includes("Back")) {

       pos1 = parseFloat(getPos(varr,"boxmin"))
       pos2 = parseFloat(getPos(varr,"boxmax"))
      rightdoors = []
      for ( sth of listObj) {
        if ( sth.name.includes("BackDoor")) {
          rightdoors.push(sth)
        }
      }
     
      for ( j of rightdoors ) {
        p1 = parseFloat(getPos(j.door,"boxmin"))
        p2 = parseFloat(getPos(j.door,"boxmax"))
      }
      if ( (pos1 > p2) || (pos2 < p1) || rightdoors.length == 0) {
       //console.log("nth")
      } else {
        alert("Workbench cannot be placed against door")
        if (Dpath != "capecode/") {
          viewObjects = true
  interiorObjects()
  camera.position.set( 1, 680, -80 )
      camera.updateProjectionMatrix();
} else {
  transparentt()
}
        for ( cc of varr.material) {
          cc.color.set(0xFF0000)
        }
      }


    }
  }
}



function removeObject(xdo = document.getElementById("dropingobj").innerHTML) {

  let tempStr = "var myob = " + xdo + "Dict"
  eval(tempStr)
  if ( xdo.includes("Door")) {
    objects.splice(objects.indexOf(myob.door),1)
    objectsPushed.splice(objectsPushed.indexOf(myob.name),1)
    moveListo.splice(moveListo.indexOf(myob.name),1)
    moveListo.splice(moveListo.indexOf(myob.door),1)
    listObj.splice(listObj.indexOf(myob),1)
  } else if ( xdo.includes("Window")) {
    objects.splice(objects.indexOf(myob.window),1)
    objectsPushed.splice(objectsPushed.indexOf(myob.name),1)
    moveListo.splice(moveListo.indexOf(myob.name),1)
    moveListo.splice(moveListo.indexOf(myob.window),1)
    listObj.splice(listObj.indexOf(myob),1)
  } else if ( xdo.includes("loft2")) {
    objects.splice(objects.indexOf(myob.loft),1)
    //objectsPushed.splice(objectsPushed.indexOf(myob.name),1)
    moveListo.splice(moveListo.indexOf(myob.name),1)
    moveListo.splice(moveListo.indexOf(myob.loft),1)
    loft2 = ""

    //listObj.splice(listObj.indexOf(myob),1)
  } else if ( xdo.includes("Workbench")) {
    objects.splice(objects.indexOf(myob.workbench),1)
    //objectsPushed.splice(objectsPushed.indexOf(myob.name),1)
    workPushed.splice(workPushed.indexOf(myob.workbench),1)
    moveListo.splice(moveListo.indexOf(myob.name),1)
    moveListo.splice(moveListo.indexOf(myob.workbench),1)
    listObj.splice(listObj.indexOf(myob),1)
  } else if ( xdo.includes("loft")) {
    objects.splice(objects.indexOf(myob.loft),1)
    //objectsPushed.splice(objectsPushed.indexOf(myob.name),1)
    moveListo.splice(moveListo.indexOf(myob.name),1)
    moveListo.splice(moveListo.indexOf(myob.loft),1)
    loft = ""
  }

  for ( obj of Object.values(myob)) {
    if ( typeof(obj) != "string") {
      scene.remove(obj)
    }
  }
  if ( xdo.includes("BackDoor") && Dpath == "leanto/") {
    try {
      objects.splice(objects.indexOf(backDoor),1)
      
    objectsPushed.splice(objectsPushed.indexOf(backDoor),1)
    
  } catch {
    //pass
  }
    translateOn(backDoor,"boxmaxz",backty,"boxmaxz")
    try {
    scene.remove(backDoor)
    backDoor = ""
    for ( c of p2) {
                  c.position.y = 0
                  c.scale.z = 1
                  translateOn(floorBack,"boxminz",c,"boxminz")
                }
                for ( c of [rafterRight,rafterLeft,shingles]) {
                  c.scale.z = 1
                  translateOn(backRaft,"boxminz",c,"boxminz")
                }
                centerUnknownZ(shingles,platRef)
                backRaft.position.y = 0
  } catch {
    //pass
  }
  try {
   translateOn(rafterRight,"boxmaxy",dripoRight,"boxmaxy",0.001)
                translateOn(rafterLeft,"boxmaxy",dripoLeft,"boxmaxy",0.001)
                translateOn(dripoRight,"boxmaxy",dripBack,"boxmaxy")
                translateOn(floorBack,"boxmaxz",backRaft,"boxmaxz")
                translateOn(backRaft,"boxminz",rafterRight,"boxminz")
                translateOn(backRaft,"boxminz",rafterLeft,"boxminz")
                translateOn(backRaft,"boxminz",dripoRight,"boxminz")
                translateOn(backRaft,"boxminz",dripoLeft,"boxminz")
                translateOn(backty,"boxminz",dripBack,"boxminz")
  } catch {
    //pass 
  }
  }

  document.getElementById("dropingobj").innerHTML = "Object"
  let temp2 = "delete " + xdo + "Dict"
  eval(temp2)
}

function helpMsg() {
        alert("Instructions will go here ")
}

function mouseX(evt) {
    if (evt.pageX) {
        return evt.pageX;
    } else if (evt.clientX) {
       return evt.clientX + (document.documentElement.scrollLeft ?
           document.documentElement.scrollLeft :
           document.body.scrollLeft);
    } else {
        return null;
    }
}

function mouseY(evt) {
    if (evt.pageY) {
        return evt.pageY;
    } else if (evt.clientY) {
       return evt.clientY + (document.documentElement.scrollTop ?
       document.documentElement.scrollTop :
       document.body.scrollTop);
    } else {
        return null;
    }
}

function removeObjectSize() {
  for ( i =0;i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Front") || moveListo[i].includes("Back")) {
        chargo = parseFloat(getPos(moveListo[i+1],"boxmax"))
        shellgo = parseFloat(getPos(shell,"boxmax"))
        if ( chargo + 0.15 > shellgo ) {
 
          var element = document.getElementById(moveListo[i])
          element.parentNode.removeChild(element)
      
     
     
          //myListomesh.splice(i,1)
          //moveListo.splice(i,1)
          var j = 1
          while ( typeof(moveListo[i+j]) == "object") {
            //alert("removing/")
            scene.remove(myListomesh[i+j])
            j+= 1
            //myListomesh.splice(i,1)
            //moveListo.splice(i,1)
          }
         
              myListomesh.splice(i,1)
              myListomesh.splice(i,1)
              myListomesh.splice(i,1)
              myListomesh.splice(i,1)
              myListomesh.splice(i,1)
              myListomesh.splice(i,1)
         
              
              moveListo.splice(i,1)
              moveListo.splice(i,1)
              moveListo.splice(i,1)
              moveListo.splice(i,1)
              moveListo.splice(i,1)
              moveListo.splice(i,1)

     

        }
      }

} catch {
  console.log("er")
}
}

for ( i =0;i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Right") || moveListo[i].includes("Left")) {
        chargo = parseFloat(getPos(moveListo[i+1],"boxmaxz"))
        shellgo = parseFloat(getPos(shell,"boxmaxz"))
        if ( chargo + 0.15 > shellgo ) {
 
          var element = document.getElementById(moveListo[i])
          element.parentNode.removeChild(element)
      
     
       
          
          var k = 1
          while ( typeof(moveListo[i+k]) == "object") {
            //alert("removing/")
           
            scene.remove(myListomesh[i+k])
             k+= 1
           
          }

              myListomesh.splice(i,1)
              myListomesh.splice(i,1)
              myListomesh.splice(i,1)
              myListomesh.splice(i,1)
              myListomesh.splice(i,1)
              myListomesh.splice(i,1)
         
              
              moveListo.splice(i,1)
              moveListo.splice(i,1)
              moveListo.splice(i,1)
              moveListo.splice(i,1)
              moveListo.splice(i,1)
              moveListo.splice(i,1)

        }
      }

} catch {
  console.log("er")
}
}
}



function CENTER(dicto = "none") {

  var transVal
  let ref1, ref2,reference1,posmin2,posmax2,reference2
  if ( dicto == "none") {
  let noro = document.getElementById("dropingobj").innerHTML
    let tempStuff = "var dicto = " + noro + "Dict"
    eval(tempStuff)
    var side = dicto.name.replace(/[0-9]/g,'')
    

 } else {
    var side = dicto.name.replace(/[0-9]/g,'')
    
 }
 if ( side.includes("Door")) {
      var this_obj = dicto.door

    } else if ( side.includes("Window")) {
      var this_obj = dicto.window
   
    } else if ( side.includes("loft")) {
      var this_obj = dicto.loft
    }else if (side.includes("Workben")) {
      var this_obj = dicto.workbench
    }
    side = side.replace("Door","")
    side = side.replace("Window","")
    side = side.replace("loft","")
    side = side.replace("Workbench","")
    
  switch(side) {
    case "Front":
      reference1 = object_reference(dicto)
      
      transVal = centerUnknownX(this_obj,front)
      dicto.translate()
      posmin1 = parseFloat(getPos(reference1,"boxmin"))
      posmax1 = parseFloat(getPos(reference1,"boxmax"))
      ref1 = parseFloat(getPos(reference1,"boxmax"))
      ref2 = parseFloat(getPos(reference1,"boxmax"))
      //conflictingCenter(-0.02,dicto,ref1,ref2)
       for ( obj of listObj) {
         if (obj.name.includes("Front") && obj.name != dicto.name) {
          reference2 = object_reference(obj)
          posmin2 = parseFloat(getPos(reference2,"boxmin"))
          posmax2 = parseFloat(getPos(reference2,"boxmax"))
          if ( (posmin2 < posmax1 && posmax1 < posmax2) ||  (posmin1 < posmax2 && posmin1 > posmin2) || (posmin1 < posmin2 && posmax1 > posmax2)) {
            main2 = door_or_window(obj)
            reference2.translateX(ref1-posmin2)
            main2.translateX(ref1-posmin2)
            obj.translate()
          }
         }
       }
        delete_obj_if_out_of_wall("Front")
    break;
    case "Back":
      reference1 = object_reference(dicto)
      transVal = centerUnknownX(this_obj,front)
      dicto.translate()
      posmin1 = parseFloat(getPos(reference1,"boxmin"))
      posmax1 = parseFloat(getPos(reference1,"boxmax"))
      ref1 = parseFloat(getPos(reference1,"boxmax"))
      ref2 = parseFloat(getPos(reference1,"boxmax"))
      //conflictingCenter(-0.02,dicto,ref1,ref2)
       for ( obj of listObj) {
         if (obj.name.includes("Back") && obj.name != dicto.name) {
          reference2 = object_reference(obj)
          posmin2 = parseFloat(getPos(reference2,"boxmin"))
          posmax2 = parseFloat(getPos(reference2,"boxmax"))
          if ( (posmin2 < posmax1 && posmax1 < posmax2) ||  (posmin1 < posmax2 && posmin1 > posmin2) || (posmin1 < posmin2 && posmax1 > posmax2)) {
            main2 = door_or_window(obj)
            reference2.translateX(ref1-posmin2)
            main2.translateX(ref1-posmin2)
            obj.translate()
          }
         }
       }
       delete_obj_if_out_of_wall("Back")
    break;
    case "Left":

      transVal = centerUnknownZ(this_obj,lefty)
      if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
        this_obj.translateZ(-0.16)
      }
      dicto.translate()
      delete_obj_if_out_of_wall("Left")
    break;
    case "Right":
      transVal = centerUnknownZ(this_obj,righty)
      if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
        this_obj.translateZ(-0.16)
      }
      dicto.translate()
       delete_obj_if_out_of_wall("Right")
    break;
  }
}


function selectedOptions() {
  let STYLE,SIZE,OVERHANGS,MIRATEC,ROOFSTYLE,DORMERSIZE,PITCH,SHINGLESCOLOR,ROOFCOLOR,DORMERMODEL
  let SIDINGS,SIDINGCOLOR,FRONTCOLOR,JOISTS,PLYWOODSTYLE,CORNERS,MATERIALS,OBJECTS
  let CUPOLA,LOFT,LOFT2, LIGHT, RECEPTABLE, EXTERIORRECEP,SWITCH,PANEL,JUNCTION, DOORS,WINDOWS,VENTS
  let PLATS = []
  let FLOORRAFTERS = []
  let RAFTERFRONT = []
  let RAFTERRIGHT = []
  let RAFTERLEFT = []
  let RAFTERBACK = []
  VENTS = ventStyle.replace("azekTrim","12x12 azek trim").replace("paintedMetal","8x16 painted metal").replace("wood","12x12 Wood").replace("azekCurved","12x12 azek curved")

  STYLE = Dpath.replace("/","").replace("Shed2","Standard wood workshop").replace("carriage", "Standard wood carriage").replace("highCarriage", "Standard wood carriage : High wall").replace("designerCarriage","Standard wood carriage : Designer")
  STYLE.replace("cabana","Standard wood cabana").replace("capecode","Cape code").replace("highBarn", "High wall barn").replace("minibarn","mini barn").replace("vinylbarn","Mini barn : vinyl").replace("leanto", "Lean To")
  SIZE = AX.toString() + "x" + AZ.toString()


if ( overhangStyle == false) {OVERHANGS = "None"} else {
  OVERHANGS = overhangStyle.replace("7inch", "std 7 inch overhang").replace("7horizontal","7 inch horizontal overhang").replace("10inch","10 inch overhang").replace("312inch","3.5 inch gable overhang").replace("horizontal","3.5 inch gable horizontal overhang")
   }
  PITCH = pitchD
  SIDINGS = myText.replace(".png","").replace("dura","duratemp").replace("tongue","tongue & grooven").replace("boardbatten", "board & batten").replace("straighshingles","straight edge shingles").replace("straightedge","straight edge shakes").replace("cedar","cedar shakes").replace("smart1","3/8 smartSide panel").replace("smart2","7/16 smartside panel").replace("smart3","smartside lap siding-5")
  JOISTS = Joists
  PLYWOOD = plywoodStyle
  CORNERS = coringStyle.replace("StandardWide","standard miratec").replace("Metal","metal corners").replace("ExtraWide", "extra wide miratec").replace("Wide","wide miratec")
  DORMERMODEL = dormerModel

  if (OVERHANGS == false) {OVERHANGS = "None"}
  if (typeof(miratecRight) == "object") {MIRATEC = "Yes"} else {MIRATEC = "None"}
  if (dormerSize == "") {DORMERSIZE = "None";DORMERMODEL = dormerModel} else {DORMERSIZE = dormerSize.replace("6","6(2windows)").replace("8","8(3windows)").replace("10","10(4windows)").replace("12","12(4windows)") }

  try {
    ROOFCOLOR = shingles.material[0].color.getHexString().replace("a3a3a3","default")
  } catch {
    ROOFCOLOR = "default"
  }
  
  ROOFSTYLE = architecturalStyle
  OVERHANGS.replace("312inch","3.5 Gable inch overhang").replace("horizontal","3.5 Gable inch horizontal overhang").replace("7inch","Std 7 inch gable overhang").replace("7horizontal","Std 7 inch horizontal overhang").replace("10inch","10 inch overhang")
  SIDINGCOLORS = backty.material[0].color.getHexString().replace("a3a3a3","default")
  FRONTCOLOR = front.material[0].color.getHexString().replace("a3a3a3","default")
  SHINGLESCOLOR = shingles.material[0].color.getHexString()
  if ( typeof(cupolaRef) == "object") {CUPOLA = cupolaRef.name.replace('glassRef', '22" Glass & cooper').replace("curvedRed",' 22" curved roof').replace("cooperRef",'22" cooper roof').replace("asphaltRef",'22" Asphalt roof')} else {CUPOLA = "None"}
  if ( typeof(loft) == "object") {LOFT1 = "Size : " + getPos(loft,"boxlengthz") }else {LOFT1 = "None"}
  if ( typeof(loft2) == "object") {LOFT2 = "Size : " + getPos(loft2,"boxlengthz") } else {LOFT2 = "None"}
  if (typeof(light) == "object") { LIGHT = "Yes" } else {LIGHT = "None"}
  if (typeof(receptable) == "object") { RECEPTABLE = "receptablex1" } else {RECEPTABLE = "None"}
  if (typeof(receptable2) == "object") { RECEPTABLE = "receptablex2" } 
  if ( typeof(switchh) == "object") { SWITCH = "Yes"} else {SWITCH = "None"}
  if (typeof(receptableE) == "object") { EXTERIORRECEP = "Yes" } else {EXTERIORRECEP = "None"}
  if (typeof(panel) == "object") { PANEL = "Yes" } else { PANEL = "None"}
  if (typeof(junction) == "object") { JUNCTION = "Yes" } else {JUNCTION = "None"}
  To_Send_Sql = [STYLE,SIZE,OVERHANGS,MIRATEC,ROOFSTYLE,DORMERSIZE,PITCH,SHINGLESCOLOR,SIDINGS, SIDINGCOLOR,FRONTCOLOR,JOISTS,PLYWOODSTYLE,CORNERS,CUPOLA,LIGHT,RECEPTABLE,EXTERIORRECEP,SWITCH,PANEL,JUNCTION]
  //alert(To_Send_Sql)
  DOORS = {}
  WINDOWS = {}
  WORKBENCHD = {}
  let icount = 1
  let ramp,additionaltext,doorcolor
  for ( obj of listObj) { 
    if ( obj.name.includes("Door")) {
      if ( typeof(obj.ramp) == "object") { ramp = obj.ramp.path.replace("36",'3 6 length ramp').replace("48", "4 8 length ramp")} else {ramp = "None"}
        let hinge = obj.door.hinge 
      if ( hinge == "hinges") { hinge = hinge.replace("hinges","std hinges") } else {hinge = hinge.replace("hinges6","6 decorative hinges").replace("hinges12","12 decorative hinges")}
        let transom, x
      if ( typeof(obj.x) == "object") {if ( obj.door.x == "xStandard") {x = "with x"} else if ( obj.door.x == "trim45") { x = "with 45s"} else {x = "None"}}
      if ( typeof(obj.transom) == "object") { transom = "Transom window"} else { transom = "None" }
      if ( obj.door.model == "standard/") { additionaltext = "with x : " + x + " transom : " + transom } else { additionaltext = "" }
       let sizedoor
      if (obj.door.size.replace("/","") in ["4","5","6","7","8"]) {sizedoor = obj.door.size.replace("/","")+" double"} else {sizedoor = obj.door.size.replace("/","")+" single"}
        doorcolor = obj.door.material[0].color.getHexString()
      if (doorcolor == "a3a3a3") {doorcolor = "Default"}
      DOORS[obj.name.replace("/[0-9]/g","")] = [
      "*Size : " + sizedoor +
      "*Model : " + obj.door.model.replace("standard/","standard door") + 
      "*Type : " + obj.door.type.replace("door","standard") +
      "*Trim : " + obj.door.trim + 
      "*X : " + obj.door.x +
      "*Hinges : " + hinge + 
      "*Ramp : " + ramp + 
      "*Color : " + doorcolor +
      "*"+ additionaltext
      ]
      } else if ( obj.name.includes("Window")) {
        let trim,shutter
        let box = "None"
        let shuttercolor = "no shutters"
        let trimcolor = "no trim"
        if ( typeof(obj.trim) == "object") { trim = obj.window.trim; trimcolor = obj.trim.material[0].color.getHexString()} else {trim = "None"}
        if ( typeof(obj.shutter) == "object") {shutter = obj.window.shutter.replace("woodstd","standard shutters").replace("zstyle","shutters Z style").replace("classicWide","shutters classic wide").replace("shutterStandard","vinyl standard").replace("raisedPanel","vinyl raised panel").replace("XLRaised","XL raised"); shuttercolor = obj.shutter.material[0].color.getHexString()} else {shutter = "None"}
        if ( typeof(obj.box) == "object") { box = "Yes"}
        WINDOWS[obj.name.replace("/[0-9]/g","")] = [
        "Number : " + obj.window.nb.replace("/","") + 
        "*Size : " + obj.window.size.replace("/","")[0] + obj.window.size.replace("/","")[1] + "x" + obj.window.size.replace("/","")[2] + obj.window.size.replace("/","")[3] +
        "*Trim : " + trim +
        "*Shutter : " + shutter +
        "*Box : "  + box + 
        "*Shutter color : " + shuttercolor.replace("a3a3a3","default color") + 
        "*Trim color : " + trimcolor.replace("a3a3a3","default color")
        
      ]
      }
      else if ( obj.name.includes("Workbench")) {
        let sizew, sidew
        sidew = obj.name.replace("Workbench", "")
        if ( sidew.includes("Front") || sidew.includes("Back")) {
          sizew = getPos(obj.workbench,"boxlength")
        } else {
          sizew = getPos(obj.workbench,"boxlengthz")
        }
        WORKBENCHD[obj.name.replace("/[0-9]/g","")] = [
        "*Side : " + sidew +
        "*Size : " + sizew
        ]
      }
      }

    
  

   /*
  for ( obj of listObj) {
    if ( obj.name.includes("Door")) { 
      icount += 1

      DOORS+= obj.name.replace("/[0-9]/g","") + " : /n"
      DOORS+= "Model : " + obj.door.model + "/n"
      DOORS+= "Type : " + obj.door.type + "/n"
      DOORS+= "Size : " + obj.door.size + "/n"
      DOORS+= "Trim : " + obj.door.trim + "/n"
      DOORS+= "Hinges : " + obj.door.hinge + "/n"
      if ( typeof(obj.ramp) == "object")  {DOORS+= "Ramp : " + obj.ramp.path.replace("36",'3 6 length ramp').replace("48", "4 8 length ramp")} else { DOORS+= "Ramp : None "} 
       
    } else if ( obj.name.includes("Window")) {
      WINDOWS += obj.name.replace("/[0-9]/g","") + " : /n"
      WINDOWS += "Size : " + obj.window.size + "/n"
      WINDOWS += "Number : " + obj.window.nb + "/n"
      if ( typeof(obj.shutter) == "object") { WINDOWS += "Shutter : " + obj.window.shutter + "/n" } else { WINDOWS += "Shutter : None"}
      if ( typeof(obj.trim) == "object") { WINDOWS += "Trim : " + obj.window.trim + "/n"} else {WINDOWS += "Trim : None"}
      if ( typeof(obj.box) == "object") { WINDOWS += "Box : Yes" } else {WINDOWS += "Box : None"}

    } 
     DOORS += "/n"  
  }
*/
  for ( pl of p2 ) {
    try {
      if ( pl.name == "plat") { PLATS.push(pl)}
    } catch {
      //pass
    }
  }


for ( fl of f2 ) {
  try {
    if ( fl.name == "floor") { FLOORRAFTERS.push(fl)} 
  } catch {
    //pass
  }
}
for ( rf of r2) {
  try { 
    if ( rf.name == "rafter2") { RAFTERFRONT.push(rf)}
  } catch {
    //pass
  }
}
for ( rf of r2b) {
  try { 
    if ( rf.name == "rafter") { RAFTERBACK.push(rf)}
  } catch {
    //pass
  }
}
for ( rf of right) {
  try { 
    if ( rf.name == "rightone") { RAFTERRIGHT.push(rf)}
  } catch {
    //pass
  }
}
for ( rf of left) {
  try { 
    if ( rf.name == "leftone") { RAFTERLEFT.push(rf)}
  } catch {
    //pass
  }
}
//alert(PLATS.length)
//alert("Front rafters : " + RAFTERFRONT.length)
//alert("Back rafters : " + RAFTERBACK.length)
//alert("Left rafters : " + RAFTERLEFT.length)
//alert("Right rafters : " + RAFTERRIGHT.length)
//alert(JSON.stringify(WINDOWS))
//alert(WINDOWS)

///STARTING ALL OF IT ////////////

//alert(STYLE)
//alert(SIZE)
//alert(PITCH) { only if standard shed !!}
//alert(SIDINGS)
//alert(SIDINGCOLORS)
//alert(FRONTCOLOR)
//alert(ROOFSTYLE)
//alert(ROOFCOLOR)
//alert(OVERHANGS)
//alert(MIRATEC)
//alert(DORMERSIZE)
//alert(DORMERMODEL)
//alert(JOISTS)
//alert(PLYWOOD)
//alert(CORNERS)
//alert(VENTS)
//alert(DOORS)
//alert(JSON.stringify(WINDOWS))
//alert(LOFT1)
//alert(LOFT2)
//alert(JSON.stringify(WORKBENCHD))
//PLATS
//RAFTERRIGHT
//RAFTERLEFT
//RAFTERBACK
//RAFTERFRONT
//FLOORRAFTERS
//CUPOLA RECEPTABLE EXTERIORRECEP SWITCH PANEL JUNCTION
let TOTALRAFTERS = RAFTERRIGHT.length + RAFTERLEFT.length + RAFTERBACK.length + RAFTERFRONT.length
var wsql = window.open("");
wsql.document.writeln("Style : " + STYLE  + "<br>" + "Size : " + SIZE + "<br>" )
if ( Dpath == "Shed2/") { wsql.document.writeln("Pitch : " + PITCH + "<br>")}
wsql.document.writeln("Sidings : " + SIDINGS + "<br>" + "Sidings color : " + SIDINGCOLORS + "<br>" + "Front color : " + FRONTCOLOR + "<br>" + "Roof style :" + ROOFSTYLE + "<br>" + "Roof color :" + ROOFCOLOR)
if ( typeof(overhangsRight) == "object") {
wsql.document.writeln("Overhangs : " + OVERHANGS + "<br>")
}
if ( typeof(miratecRight) == "object") { wsql.document.writeln("Miratec : " + MIRATEC + "<br>")}
if ( Dpath == "Shed2/") { wsql.document.writeln("Dormer : " + DORMERSIZE + '<br>' + "Dormer model : " + DORMERMODEL + "<br>")}
wsql.document.writeln("Joists : " + JOISTS + "<br>" + "Plywood : " + PLYWOOD + "<br>" + "Corners : " + CORNERS + "<br>" + "Vents : " + VENTS + "<br>")
wsql.document.writeln("Loft 1 : " + LOFT1 + "<br>" + "Loft 2 : " + LOFT2 + "<br>")
wsql.document.writeln("Number of roof plats : " + PLATS.length + "<br>")
wsql.document.write("Number of Rafter right side :" + RAFTERRIGHT.length + "<br>")
wsql.document.write("Number of Rafter left side :" + RAFTERLEFT.length + "<br>")
wsql.document.write("Number of Rafter back side :" + RAFTERBACK.length + "<br>")
wsql.document.write("Number of Rafter front side :" + RAFTERFRONT.length + "<br>")
wsql.document.write("Total Rafter right side :" + TOTALRAFTERS + "<br>")
wsql.document.write("Number of floor joists :" + FLOORRAFTERS.length + "<br>")
wsql.document.write("Cupola : " + CUPOLA + "<br>")
wsql.document.write("Receptable : " + RECEPTABLE + "<br>")
wsql.document.write("Exterior receptable : " + EXTERIORRECEP + "<br>")
wsql.document.write("Switch : " + SWITCH + "<br>")
wsql.document.write("Panel box : " + PANEL + "<br>")
wsql.document.write("Junction box : " + JUNCTION + "<br>")
wsql.document.write("light : " + LIGHT + "<br>" + "<br>")
wsql.document.write("Doors : <br>")
//wsql.document.write(JSON.stringify(DOORS))
Object.entries(DOORS).forEach(([key,value]) => {
wsql.document.write(key + " : " + "<br>")
let lstsplit = value[0].replace(" ","")
let listof = lstsplit.split("*")


let lelength = lstsplit.length
for ( i of listof) {
  wsql.document.write(i + "<br>")

}
 wsql.document.write("<br>")
 })


Object.entries(WINDOWS).forEach(([key,value]) => {
wsql.document.write(key + " : " + "<br>")
let lstsplit = value[0].replace(" ","")
let listof = lstsplit.split("*")


let lelength = lstsplit.length
for ( i of listof) {
  wsql.document.write(i + "<br>")

}
 wsql.document.write("<br>")
 })
wsql.document.write("<br><br>")

Object.entries(WORKBENCHD).forEach(([key,value]) => {
wsql.document.write(key + " : " + "<br>")
let lstsplit = value[0].replace(" ","")
let listof = lstsplit.split("*")


let lelength = lstsplit.length
for ( i of listof) {
  wsql.document.write(i + "<br>")

}
 wsql.document.write("<br>")
 })

if ( Dpath == "capecode/") {wsql.document.write("<br>Face and rake : " + FACECOLOR)}
} 

function possibleLayout(sidee) {
  
  let nb_of_door_in_wall = []
  let nb_of_window_in_wall = []
  let side = sidee

  for (obj of listObj) {
    if ( obj.name.includes(side))
      if (obj.name.includes("Window")) {
        nb_of_window_in_wall.push(obj)
      } else if ( obj.name.includes("Door")) {
        nb_of_door_in_wall.push(obj)
      }
  }

// ONE DOOR
if (nb_of_door_in_wall.length == 1 && nb_of_window_in_wall.length == 0) {
  CENTER(nb_of_door_in_wall[0])

} else 
// ONE DOOR 2 WINDOW
if ( nb_of_door_in_wall.length == 1 && nb_of_window_in_wall.length == 2) {
  //window_2_door_1(nb_of_door_in_wall,nb_of_window_in_wall)
  sortObjects2(sidee)

} else 

// ONE DOOR ONE WINDOW
if ( nb_of_door_in_wall.length == 1 && nb_of_window_in_wall.length == 1) {
 // window_1_door_1(nb_of_door_in_wall,nb_of_window_in_wall)
 sortObjects2(sidee)
 delete_obj_if_out_of_wall(sidee)

} else 

// 2 DOORS 0 WINDOW
if ( nb_of_door_in_wall.length == 2 && nb_of_window_in_wall.length == 0) {
  //window_0_door_2(nb_of_door_in_wall)
  sortObjects2(sidee)
  delete_obj_if_out_of_wall(sidee)
  
} else 

// 1 WINDOW 0 DOOR
if ( nb_of_door_in_wall.length == 0 && nb_of_window_in_wall.length == 1) {
  CENTER(nb_of_window_in_wall[0])
  delete_obj_if_out_of_wall(sidee)
} else 

// 2 WINDOWS 0 DOOR
if ( nb_of_door_in_wall.length == 0 && nb_of_window_in_wall.length == 2) {
  //window_2_door_0(nb_of_window_in_wall)
   sortObjects2(sidee)
   delete_obj_if_out_of_wall(sidee)


} else {
  //sort_by_order(nb_of_door_in_wall,nb_of_window_in_wall)
   sortObjects2(sidee)
   delete_obj_if_out_of_wall(sidee)
   
}
}


function delete_obj_if_out_of_wall(sidee) {
  let side_wall = sidee
  let max,min,obj_min,obj_max,objref
  if (side_wall == "Front" || side_wall == "Back") {
    
    max = parseFloat(getPos(front,"boxmax"))
    min = parseFloat(getPos(front,"boxmin"))
  } else if ( side_wall == "Right" || side_wall == "Left") {
    max = parseFloat(getPos(front,"boxminz"))
    min = parseFloat(getPos(backty,"boxmaxz"))
   
  }

  for ( obj of listObj) {
    if ( obj.name.includes(side_wall)) {
    objref = object_reference(obj)

    if ( obj.name.includes("Front") || obj.name.includes("Back")) {
      obj_min = parseFloat(getPos(objref,"boxmin"))
      obj_max = parseFloat(getPos(objref,"boxmax"))
      if ( (obj_min < min) || (obj_max > max)) {
          removeObject(obj.name) 
      } 
    } else if ( obj.name.includes("Right") || obj.name.includes("Left")) {

      obj_min = parseFloat(getPos(objref,"boxminz"))
      obj_max = parseFloat(getPos(objref,"boxmaxz"))
      if ( (obj_min < min)  || (obj_max > max) ) {
        removeObject(obj.name)
    }
  }
}}
}

function window_2_door_1(door,win) {
  let isPossible1,isPossible2
  CENTER(door[0])
  

  let side = door[0].name.replace(/[0-9]/g,'')
  side = side.replace("Door","")
  side = side.replace("Window","")
  door_reference = object_reference(door[0])
  switch(side) {
    case "Front":
      centerOnSomethingX(win[0].window,door_reference,"boxmax",front,"boxmax")      
      centerOnSomethingX(win[1].window,door_reference,"boxmin",front,"boxmin")
      win[0].translate()
      win[1].translate()
      isPossible1 = check_if_possible(win[0])
      isPossible2 = check_if_possible(win[1])

      if ( isPossible1 == false|| isPossible2 == false ) {
        sort_by_order(door,win)
      }

 
      break;
    case "Back":
      centerOnSomethingX(win[0].window,door_reference,"boxmin",backty,"boxmin")   
      centerOnSomethingX(win[1].window,door_reference,"boxmax",backty,"boxmax")
      win[0].translate()
      win[1].translate()
      isPossible1 = check_if_possible(win[0])
      isPossible2 = check_if_possible(win[1])
      if ( isPossible1 == false|| isPossible2 == false ) {
        sort_by_order(door,win)
      }
   
      break;
    case "Right":
      centerOnSomethingZ(win[0].window,door_reference,"boxminz",righty,"boxminz")
      centerOnSomethingZ(win[1].window,door_reference,"boxmaxz",righty,"boxmaxz")
      win[0].translate()
      win[1].translate()
      isPossible1 = check_if_possible(win[0])
      isPossible2 = check_if_possible(win[1])
      if ( isPossible1 == false|| isPossible2 == false ) {
        sort_by_order(door,win)
      }

      break;
    case "Left":
      centerOnSomethingZ(win[0].window,door_reference,"boxmaxz",righty,"boxmaxz")
      centerOnSomethingZ(win[1].window,door_reference,"boxminz",righty,"boxminz")
      win[0].translate()
      win[1].translate()
      isPossible1 = check_if_possible(win[0])
      isPossible2 = check_if_possible(win[1])
      if ( isPossible1 == false|| isPossible2 == false ) {
        sort_by_order(door,win)
      }
      break;
  }
}

function window_1_door_1(door,win) {
  let posFrontMin,posFrontMax,isPossible1,isPossible2
  let side = door[0].name.replace(/[0-9]/g,'')
  side = side.replace("Door","")
  side = side.replace("Window","")
  door_reference = object_reference(door[0])
  switch(side) {
    case "Front":
      posFrontMin = getPos(front,"boxmin")
      posFrontMax = getPos(front,"boxmax")/2
      centerOnSomethingCustomX(door[0].door,posFrontMin,posFrontMax)  
      door[0].translate()
      centerOnSomethingX(win[0].window,door_reference,"boxmax",front,"boxmax")
      win[0].translate()
      
      isPossible1 = check_if_possible(door[0])
      isPossible2 = check_if_possible(win[0])
      if ( isPossible1 == false|| isPossible2 == false ) {
        sort_by_order(door,win)
      }
      break;
    case "Back":
      posFrontMin = getPos(backty,"boxmin")
      posFrontMax = getPos(backty,"boxmax")/2
      centerOnSomethingCustomX(door[0].door,posFrontMin,posFrontMax)  
      door[0].translate()
      centerOnSomethingX(win[0].window,door_reference,"boxmax",backty,"boxmax")   
      win[0].translate()
      isPossible1 = check_if_possible(door[0])
      isPossible2 = check_if_possible(win[0])
      if ( isPossible1 == false|| isPossible2 == false ) {
        sort_by_order(door,win)
      }
   
      break;
    case "Right":
      posFrontMin = getPos(righty,"boxmaxz")
      posFrontMax = getPos(righty,"boxminz")/2
      centerOnSomethingCustomZ(door[0].door,posFrontMin,posFrontMax)  
      door[0].translate()
      centerOnSomethingZ(win[0].window,door_reference,"boxminz",righty,"boxminz")
      win[0].translate()
      isPossible1 = check_if_possible(door[0])
      isPossible2 = check_if_possible(win[0])
      if ( isPossible1 == false|| isPossible2 == false ) {
        sort_by_order(door,win)
      }


      break;
    case "Left":
      posFrontMin = getPos(righty,"boxminz")
      posFrontMax = getPos(righty,"boxmaxz")/2
      centerOnSomethingCustomZ(door[0].door,posFrontMin,posFrontMax)  
      door[0].translate()
      centerOnSomethingZ(win[0].window,door_reference,"boxmaxz",righty,"boxmaxz")
      win[0].translate()
      isPossible1 = check_if_possible(door[0])
      isPossible2 = check_if_possible(win[0])
      if ( isPossible1 == false|| isPossible2 == false ) {
        sort_by_order(door,win)
      }
      break;
  }
}

function window_0_door_2(door) {
  let posFrontMin,posFrontMax,isPossible1,isPossible2
  let side = door[0].name.replace(/[0-9]/g,'')
  side = side.replace("Door","")
  door_reference = object_reference(door[0])

  switch(side) {
    case "Front":
      posFrontMin = getPos(front,"boxmin")
      posFrontMax = getPos(front,"boxmax")/2
      centerOnSomethingCustomX(door[0].door,posFrontMin,posFrontMax)  
      door[0].translate()
      centerOnSomethingX(door[1].door,door_reference,"boxmax",front,"boxmax")
      door[1].translate()
      isPossible1 = check_if_possible(door[0])
      isPossible2 = check_if_possible(door[1])
      if ( isPossible1 == false|| isPossible2 == false ) {
        sort_by_order(door,[])
      }
 
      break;
    case "Back":
      posFrontMin = getPos(backty,"boxmin")
      posFrontMax = getPos(backty,"boxmax")/2
      centerOnSomethingCustomX(door[0].door,posFrontMin,posFrontMax)  
      door[0].translate()
      centerOnSomethingX(door[1].door,door_reference,"boxmax",backty,"boxmax")   
      door[1].translate()
      isPossible1 = check_if_possible(door[0])
      isPossible2 = check_if_possible(door[1])
      if ( isPossible1 == false|| isPossible2 == false ) {
        sort_by_order(door,[])
      }
      break;  
  }
}

function door_or_window(obj) {
  let object
  if ( typeof(obj.door) == "object") {
    object = obj.door
  } else if ( typeof(obj.window) == "object") {
    object = obj.window
  }
  return object
}

function sort_by_order(door,win) {
  
  let objListe = door.concat(win)
  let reference,reference_length
  let first_obj = objListe[0]
  let first_obj_main = door_or_window(first_obj)
  let transVal
  let isPossible

  let side = objListe[0].name.replace(/[0-9]/g,'')
  side = side.replace("Window","")
  side = side.replace("Door","")
  switch(side) {
    case "Front":
      reference = object_reference(first_obj)
      transVal = translateOn(front,"boxmin",reference,"boxmin",0.13)
      first_obj_main.translateX(transVal)
      first_obj.translate()

      isPossible = check_if_possible(first_obj,reference)
      previous_reference = reference

      for ( obj of objListe) {
        if ( objListe.indexOf(obj) == 0){
          continue
        }
        reference = object_reference(obj)
        obj_main = door_or_window(obj)
        transVal = translateOn(previous_reference,"boxmax",reference,"boxmin",0.13)
        obj_main.translateX(transVal)
        obj.translate()

        isPossible = check_if_possible(obj,reference)
        if (isPossible == false) {
          removeObject(obj.name)
        } else {
          previous_reference = reference
        }
      }
    break;

    case "Back":
      reference = object_reference(first_obj)
      transVal = translateOn(backty,"boxmin",reference,"boxmin",0.13)
      first_obj_main.translateX(transVal)
      first_obj.translate()

      isPossible = check_if_possible(first_obj,reference)
      previous_reference = reference

      for ( obj of objListe) {
        if ( objListe.indexOf(obj) == 0){
          continue
        }
        reference = object_reference(obj)
        obj_main = door_or_window(obj)
        transVal = translateOn(previous_reference,"boxmax",reference,"boxmin",0.13)
        obj_main.translateX(transVal)
        obj.translate()

        isPossible = check_if_possible(obj,reference)
        
        if (isPossible == false) {
          removeObject(obj.name)
        } else {
          previous_reference = reference
        }
      }
    break;

    case "Left":
   
      reference = object_reference(first_obj)
      transVal = translateOn(lefty,"boxminz",reference,"boxminz",0.23)
      first_obj_main.translateZ(transVal)
      first_obj.translate()

      isPossible = check_if_possible(first_obj,reference)
      previous_reference = reference

      for ( obj of objListe) {
        if ( objListe.indexOf(obj) == 0){
          continue
        }
        reference = object_reference(obj)
        obj_main = door_or_window(obj)
        transVal = translateOn(previous_reference,"boxmaxz",reference,"boxminz",0.13)
        obj_main.translateZ(transVal)
        obj.translate()

        isPossible = check_if_possible(obj,reference)
        previous_reference = reference
        
        if (isPossible == false) {
          removeObject(obj.name)
        } else {
          previous_reference = reference
        }
      }
    break;
    case "Right":
      reference = object_reference(first_obj)
      transVal = translateOn(righty,"boxminz",reference,"boxminz",0.23)
      first_obj_main.translateZ(transVal)
      first_obj.translate()

      isPossible = check_if_possible(first_obj,reference)
      previous_reference = reference

      for ( obj of objListe) {
        if ( objListe.indexOf(obj) == 0){
          continue
        }
        reference = object_reference(obj)
        obj_main = door_or_window(obj)
        transVal = translateOn(previous_reference,"boxmaxz",reference,"boxminz",0.13)
        obj_main.translateZ(transVal)
        obj.translate()

        isPossible = check_if_possible(obj,reference)
        previous_reference = reference
        
        if (isPossible == false) {
          removeObject(obj.name)
        } else {
          previous_reference = reference
        }
      }
  }
}

function check_if_possible(obj,ref=object_reference(obj)) {
  let side = obj.name.replace(/[0-9]/g,'')
  let posReference,posWall,state
  side = side.replace("Window","")
  side = side.replace("Door","")
  switch(side) {
    case "Front":
      posReference = getPos(ref,"boxmax")
      posWall = getPos(front,"boxmax")
      if ((posWall-0.03) < posReference ) {
        state = false;
      } else {
        state = true;
      }
      break;

    case "Back":
      posReference = getPos(ref,"boxmax")
      posWall = getPos(backty,"boxmax")
      if ((posWall-0.03) < posReference ) {
        state = false;
      } else {
        state = true;
      }
      break;

    case "Left":
      posReference = getPos(ref,"boxmaxz")
      posWall = getPos(lefty,"boxmaxz")
      if ((posWall-0.03) < posReference ) {
        state = false;
      } else {
        state = true;
      }
      break;

    case "Right":
      posReference = getPos(ref,"boxmaxz")
      posWall = getPos(righty,"boxmaxz")
      if ((posWall-0.03) < posReference ) {
        state = false;
      } else {
        state = true;
      }

  }
  return state;
}

function window_2_door_0(win) {
  let posFrontMin,posFrontMax
  let side = win[0].name.replace(/[0-9]/g,'')
  side = side.replace("Window","")
  let isPossible1,isPossible2
  win_reference = object_reference(win[0])

  switch(side) {
    case "Front":
      posFrontMin = getPos(front,"boxmin")
      posFrontMax = getPos(front,"boxmax")/2
      centerOnSomethingCustomX(win[0].window,posFrontMin,posFrontMax)  
      win[0].translate()
      centerOnSomethingX(win[1].window,win_reference,"boxmax",front,"boxmax")
      win[1].translate()
      isPossible1 = check_if_possible(win[0])
      isPossible2 = check_if_possible(win[1])
      if (isPossible1 == false || isPossible2 == false) {
        sort_by_order(win,[])
      }
 
      break;
    case "Back":
      posFrontMin = getPos(backty,"boxmin")
      posFrontMax = getPos(backty,"boxmax")/2
      centerOnSomethingCustomX(win[0].window,posFrontMin,posFrontMax)  
      win[0].translate()
      centerOnSomethingX(win[1].window,win_reference,"boxmax",backty,"boxmax")   
      win[1].translate()
      if (isPossible1 == false || isPossible2 == false) {
        sort_by_order(win,[])
      }
      break;    
     case "Right":
      posFrontMin = getPos(righty,"boxminz")
      posFrontMax = getPos(righty,"boxmaxz")/2
      centerOnSomethingCustomZ(win[0].window,posFrontMin,posFrontMax)  
      win[0].translate()
      centerOnSomethingZ(win[1].window,win_reference,"boxmaxz",righty,"boxmaxz")
      win[1].translate()
      if (isPossible1 == false || isPossible2 == false) {
        sort_by_order(win,[])
      }

      break;
    case "Left":
      posFrontMin = getPos(lefty,"boxminz")  //// CHANGE THIS TO TRANSLATE BOTH !!!!!
      posFrontMax = getPos(lefty,"boxmaxz")/2
      centerOnSomethingCustomZ(win[0].window,posFrontMin,posFrontMax)  
      win[0].translate()
      centerOnSomethingZ(win[1].window,win_reference,"boxmaxz",lefty,"boxmaxz")
      win[1].translate()
      if (isPossible1 == false || isPossible2 == false) {
        sort_by_order(win,[])
      }
      break;  
  }
}

function object_reference(obj) {
    let reference
    if (obj.name.includes("Window")) {
      if (typeof(obj.shutter) == "object") {
        reference = obj.shutter
      } else if (typeof(obj.trim) == "object") {
        reference = obj.trim
      } else {
        reference = obj.window
      }
    } else if ( obj.name.includes("Door")) {
      if (typeof(obj.trim) == "object") {
        reference = obj.trim
      } else {
        reference = obj.door
      }
    }
  return reference;
}
function isItPossible2(dicto) {

  // FIRST THING IS IT POSSIBLE ? 
  var transVal
  let side = dicto.name.replace(/[0-9]/g,'')

  let nb_of_door_in_wall = 0
  for (nb of objectsPushed) {
    if ( nb.includes(side) ) {
      nb_of_door_in_wall +=1
    }
  }

  if ( nb_of_door_in_wall == 1) {
    CENTER(dicto)
  }
  
}
function isItPossible(name,myVarTO = "NOPE") {
  var myVarTO = myVarTO
  var name = name
    document.getElementById("objto").innerHTML += '<li id = ' + "'" + name + "'" +'><a tabindex="-1" onclick="selectedOne('+"'" + name+"'" +')">' + name + '</a></li>'
    
    if (name.includes("Left")) {
    shellomin = parseFloat(getPos(shell,"boxminz"))
    myVirtualListo = []
    myCountListo = 0
    for ( i=0;i<moveListo.length;i++) {
      try {
        if ( moveListo[i].includes("Left")) {
          y = 1 
          myVirtualListo.push(moveListo[i])
          while ( typeof(moveListo[i+y]) == "object") {
            myVirtualListo.push(moveListo[i+y])
            y+=1
          }
          myCountListo += 1
        }
      }catch {
        console.log("fdsjf")
      }

    }
    if ( myCountListo < 1 ) {
      console.log("fds")
    } else if (myCountListo == 1) {
      centerObj(name)
    }
    else if (myCountListo > 1 ) {
      winpoomi = parseFloat(getPos(myVirtualListo[1],"boxminz"))
      j = 1 
      while ( typeof(myVirtualListo[j]) == "object") {
      myVirtualListo[j].translateZ(shellomin - winpoomi+0.45)
      j+= 1
      }

      shellomin = getPos(myVirtualListo[1],"boxmaxz")
      var myIndexo = 0

      for (i = j; i<myVirtualListo.length;i++) {
        try {
          if( myVirtualListo[i].includes("Left")) {
            k = 1
            winpoomi = parseFloat(getPos(myVirtualListo[i+1],"boxminz"))
     
            while ( typeof(myVirtualListo[i+k]) == "object") {
              if(myVirtualListo[i].includes("Window") ) {
                var aio = 0.45
              } else {
                var aio = 0.32
              }
              myVirtualListo[i+k].translateZ(shellomin - winpoomi+aio)
              k+= 1
            }
            shellomin = parseFloat(getPos(myVirtualListo[i+1],"boxmaxz"))
            var myIndexo = i
          }
        } catch {
          console.log("fd")
        }
        
      }
      chargo = parseFloat(getPos(myVirtualListo[myIndexo + 1],"boxmaxz"))
      shellgo = parseFloat(getPos(shell,"boxmaxz"))
   
      if ( chargo + 0.25> shellgo ) {               
         deletingObj(name)
       
        if ( name.includes("Door")) {
          alert("No space for adding more doors")
        }
        if ( name.includes("Window")) {
          alert("No space for adding more windows")
        }
        //alert("No space for adding more objects.")
        var BZIRO = true;
        }
    }}
      
    else if (name.includes("Front")) {
   
      //alert(myVarTO)
    shellomin = parseFloat(getPos(shell,"boxmin"))
    //door.translateX(shellomin - dooromin +0.14)
    //doorRaft.translateX(shellomin - dooromin + 0.14)
    //outsideTrim.translateX(shellomin - dooromin+0.14)
    //trim.translateX(shellomin - dooromin+0.14)
    //hinges.translateX(shellomin - dooromin+0.14)
    //dooromin = getPos(door,"boxmin")
    myVirtualListo = []
    myCountListo = 0
    for ( i=0;i<moveListo.length;i++) {
      try {
        if ( moveListo[i].includes("Front")) {
          y = 1 
          myVirtualListo.push(moveListo[i])
          while ( typeof(moveListo[i+y]) == "object") {
            myVirtualListo.push(moveListo[i+y])
            y+=1
          }
          myCountListo += 1
        }
      }catch {
        console.log("fdsjf")
      }

    }

    if ( myCountListo < 1 || myVarTO == "FIRST") {
   
      console.log("fds")
    } else {

      if (myCountListo >= 1 ) {
      winpoomi = parseFloat(getPos(myVirtualListo[1],"boxmin"))
      j = 1 
      while ( typeof(myVirtualListo[j]) == "object") {
      myVirtualListo[j].translateX(shellomin - winpoomi+0.45)
      j+= 1
      }

      shellomin = getPos(myVirtualListo[1],"boxmax")
      myIndexo = 0
      for (i = j; i<myVirtualListo.length;i++) {
        try {
          if( myVirtualListo[i].includes("Front")) {
            k = 1
            winpoomi = parseFloat(getPos(myVirtualListo[i+1],"boxmin"))
     
            while ( typeof(myVirtualListo[i+k]) == "object") {
              if(myVirtualListo[i].includes("Window") ) {
                var aio = 0.45
              } else {
                var aio = 0.32
              }
              myVirtualListo[i+k].translateX(shellomin - winpoomi+aio)
              k+= 1
            }
            shellomin = parseFloat(getPos(myVirtualListo[i+1],"boxmax"))
            var myIndexo = i
          }
        } catch {
          console.log("fd")
        }
        
      }
  
      chargo = parseFloat(getPos(myVirtualListo[myIndexo + 1],"boxmax"))
      shellgo = parseFloat(getPos(shell,"boxmax"))
   
      if ( chargo + 0.085> shellgo ) {
         
       deletingObj(name)
       
        if ( name.includes("Door")) {
          alert("No space for adding more doors")
        }
        if ( name.includes("Window")) {
          alert("No space for adding more windows")
        }
        //alert("No space for adding more objects.")
        var BZIRO = true;

      }
    }}
      
  
  } else if (name.includes("Right")) {
    shellomin = parseFloat(getPos(shell,"boxminz"))
     //door.translateX(shellomin - dooromin +0.14)
    //doorRaft.translateX(shellomin - dooromin + 0.14)
    //outsideTrim.translateX(shellomin - dooromin+0.14)
    //trim.translateX(shellomin - dooromin+0.14)
    //hinges.translateX(shellomin - dooromin+0.14)
    //dooromin = getPos(door,"boxmin")
    myVirtualListo = []
    myCountListo = 0
    for ( i=0;i<moveListo.length;i++) {
      try {
        if ( moveListo[i].includes("Right")) {
          y = 1 
          myVirtualListo.push(moveListo[i])
          while ( typeof(moveListo[i+y]) == "object") {
            myVirtualListo.push(moveListo[i+y])
            y+=1
          }
          myCountListo += 1
        }
      }catch {
        console.log("fdsjf")
      }

    }
    if ( myCountListo < 1 ) {
      console.log("fds")
    } else if (myCountListo == 1) {
      centerObj(name)
    }
    else {

      if (myCountListo > 1 ) {
      winpoomi = parseFloat(getPos(myVirtualListo[1],"boxminz"))
      j = 1                                           
      while ( typeof(myVirtualListo[j]) == "object") {
      myVirtualListo[j].translateZ(shellomin - winpoomi+0.45)
      j+= 1
      }
      shellomin = parseFloat(getPos(myVirtualListo[1],"boxmaxz"))
      myIndexo = 0
      for (i = j; i<myVirtualListo.length;i++) {
        try {
          if( myVirtualListo[i].includes("Right")) {
            k = 1
            winpoomi = parseFloat(getPos(myVirtualListo[i+1],"boxminz"))
     
            while ( typeof(myVirtualListo[i+k]) == "object") {
              if(myVirtualListo[i].includes("Window") ) {
                var aio = 0.45
              } else {
                var aio = 0.32
              }
              myVirtualListo[i+k].translateZ(shellomin - winpoomi+aio)
              k+= 1
            }
            shellomin = parseFloat(getPos(myVirtualListo[i+1],"boxmaxz"))
            var myIndexo = i
          }
        } catch {
          console.log("fd")
        }
        
      }
      chargo = parseFloat(getPos(myVirtualListo[myIndexo + 1],"boxmaxz"))
      shellgo = parseFloat(getPos(shell,"boxmaxz"))
   
      if ( chargo + 0.085> shellgo ) {
         
      
        
        deletingObj(name)
       
        if ( name.includes("Door")) {
          alert("No space for adding more doors")
        }
        if ( name.includes("Window")) {
          alert("No space for adding more windows")
        }
        //alert("No space for adding more objects.")
        var BZIRO = true;
      }
    }}
      
  
  }
    else if (name.includes("Back")) {
      
    shellomin = parseFloat(getPos(shell,"boxmin"))
     //door.translateX(shellomin - dooromin +0.14)
    //doorRaft.translateX(shellomin - dooromin + 0.14)
    //outsideTrim.translateX(shellomin - dooromin+0.14)
    //trim.translateX(shellomin - dooromin+0.14)
    //hinges.translateX(shellomin - dooromin+0.14)
    //dooromin = getPos(door,"boxmin")
    myVirtualListo = []
    myCountListo = 0
    for ( i=0;i<moveListo.length;i++) {
      try {
        if ( moveListo[i].includes("Back")) {
          y = 1 
          myVirtualListo.push(moveListo[i])
          while ( typeof(moveListo[i+y]) == "object") {
            myVirtualListo.push(moveListo[i+y])
            y+=1
          }
          myCountListo += 1
        }
      }catch {
        console.log("fdsjf")
      }

    }
    if ( myCountListo < 1 ) {
      console.log("fds")
    } else if (myCountListo == 1) {
      centerObj(name)
    }
    else {

      if (myCountListo > 1 ) {
      winpoomi = parseFloat(getPos(myVirtualListo[1],"boxmin"))
      j = 1 
      while ( typeof(myVirtualListo[j]) == "object") {
      myVirtualListo[j].translateX(shellomin - winpoomi+0.45)
      j+= 1
      }
      shellomin = parseFloat(getPos(myVirtualListo[1],"boxmax"))
      myIndexo = 0
      for (i = j; i<myVirtualListo.length;i++) {
        try {
          if( myVirtualListo[i].includes("Back")) {
            k = 1
            winpoomi = parseFloat(getPos(myVirtualListo[i+1],"boxmin"))
     
            while ( typeof(myVirtualListo[i+k]) == "object") {
              if(myVirtualListo[i].includes("Window") ) {
                var aio = 0.45
              } else {
                var aio = 0.32
              }
              myVirtualListo[i+k].translateX(shellomin - winpoomi+aio)
              k+= 1
            }
            shellomin = parseFloat(getPos(myVirtualListo[i+1],"boxmax"))
            var myIndexo = i
          }
        } catch {
          console.log("fd")
        }
        
      }
     
      chargo = parseFloat(getPos(myVirtualListo[myIndexo + 1],"boxmax"))
      shellgo = parseFloat(getPos(shell,"boxmax"))
   
      if ( chargo + 0.085> shellgo ) {
           
        deletingObj(name)
       
        if ( name.includes("Door")) {
          alert("No space for adding more doors")
        }
        if ( name.includes("Window")) {
          alert("No space for adding more windows")
        }
        //alert("No space for adding more objects.")
        var BZIRO = true;


      }
    }}
      
  
  }
  if ( BZIRO != true) {
   myKipstoListo = [moveListo[moveListo.length-7],moveListo[moveListo.length-6],moveListo[moveListo.length-5],moveListo[moveListo.length-4],moveListo[moveListo.length-3],moveListo[moveListo.length-2],moveListo[moveListo.length-1]]

    //updateMoveListo(myKipstoListo)
    
  } else {
    BZIRO = false
  }
     
    }


function deletingObj(myob) {
   var indexobj = moveListo.indexOf(myob)
  var i = 1;
  moveListo[indexobj] = "deleteMe"
  while ( typeof(moveListo[indexobj+i]) == "object" ) {
        scene.remove(moveListo[indexobj+i])
        

        
        try {
          if (typeof(moveListo[indexobj+i])!="undefined") {
          if ( moveListo[indexobj+i].name.includes("Window1x")) {
            var ixodo = moveListo[indexobj+i].name
         
            for ( p=0;p<objects.length;p++) {
              if (objects[p].name == ixodo){
                
                objects.splice(p,1)
              }
            }
          }
        }
        } catch(error) {
          console.log(error)
        }
        moveListo[indexobj+i] = "deleteMe"
        i+=1
  }
  for (i = 0;i<moveListo.length;i++) {
    try {
    if (moveListo[i].includes("deleteMe")) {
      moveListo.splice(i,1)
      i-=1

    }
  } catch {
    console.log("erno in remove object")
  }
  }
}
function removeEntity() {
    var selectedObject = scene.getObjectByName("Window1x");
    scene.remove( selectedObject );
    animate();
}

function scaleToObject(obj_to_scale,obj_ref,axis) {
  let scalar,length1,length2,boxlength,centerFunc,scaleFunc
  if ( axis == "x") {
    boxlength = "boxlength"
    centerFunc = centerUnknownX
    scaleFunc = function() {obj_to_scale.scale.x *= scalar}
  } else if ( axis == "z") {
    boxlength = "boxlengthz"
    centerFunc = centerUnknownZ
    scaleFunc = function() {obj_to_scale.scale.z *= scalar}
  }

  length1 = getPos(obj_to_scale,boxlength)
  length2 = getPos(obj_ref,boxlength)
  scalar = length2/length1
  scaleFunc()
  centerFunc(obj_to_scale,obj_ref)
}


function scaleBetween2Objects(obj_to_scale,objRefMin,box1,objRefMax,box2,axis) {
  let scalar, lengthX,length,translateFunc,newAX

  if ( axis == "x") {
    length = getPos(obj_to_scale,"boxlength")
    translateFunc  = function () {obj_to_scale.scale.x*= scalar}
    newAX = ""
  } else if ( axis == "z") {
    length = getPos(obj_to_scale,"boxlengthz")
    translateFunc = function () {obj_to_scale.scale.z*= scalar}
    newAX = "z"
  } else if ( axis == "y") {
    length = getPos(obj_to_scale,"boxlengthy")
    translateFunc = function () { obj_to_scale.scale.y *= scalar}
    newAX = "y"
  }

  lengthX = getPos(objRefMax,box2) - getPos(objRefMin,box1)
  scalar = lengthX/length

  translateFunc()
  translateOn(objRefMin,box1,obj_to_scale,"boxmin"+newAX)
}

function ADDD1() {
   
  if (mySelectedSide == "right") {
    addRightDoor()
  } else if ( mySelectedSide == "left") {
    addLeftDoor()
  } else if ( mySelectedSide == "back") {
  
    addBackDoor()
  
  } else if ( mySelectedSide == "front") {
    addFrontDoor()
  }

}

function sortObjects() {
  if (mySelectedSide == "right") {
    possibleLayout("Right")
  } else if ( mySelectedSide == "left") {
    possibleLayout("Left")
  } else if ( mySelectedSide == "back") {
    possibleLayout("Back")
  } else if ( mySelectedSide == "front") {
    possibleLayout("Front")
  }
}
function ADDD2(){
 
  if (mySelectedSide == "right") {
    addRightWindow()
  } else if ( mySelectedSide == "left") {
    addLeftWindow()
  } else if ( mySelectedSide == "back") {

    addBackWindow()
  
   
  
  } else if ( mySelectedSide == "front") {
   
    addFrontWindow()
  }
  
}
function addFrontWindow() {
   addingWindow1("FrontWindow")  
}

function addLeftWindow(){
  addingWindow1("LeftWindow")
 
}

function addBackWindow() {

  addingWindow1("BackWindow")
}

function addRightWindow(){
  addingWindow1("RightWindow")
}


function addRightDoor(replace="",replacel=""){
  var DOORRIGHT = 0
  for ( i = 0;i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("RightDoor")) {
        DOORRIGHT += 1
      }
    } catch {
      console.log("ere")
    }
  }
  if ( DOORRIGHT < 1 || REPLACE == true) {
  //addingDoor("RightDoor",doorElement1+"Right",doorElement2 +"Right",doorElement3+"Right",doorElement4+"Right",doorElement5+"Right",doorElement6,replace,replacel)
  addingDoor("RightDoor")
 
  REPLACE = false 
} else {
  alert("Only one door can be added on the right side")
}
}

function addFrontDoor(replace="",replacel="") {
   var DOORFRONT = 0
  for ( i = 0;i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("FrontDoor")) {
        DOORFRONT += 1
      }
    } catch {
      console.log("ere")
    }
  }
  if (DOORFRONT < 5 || REPLACE == true ) {
 
   addingDoor("FrontDoor")
   
   
 }
 else {
  alert("Only two door can be added on the front side")
}
}

function addLeftDoor(replace="",replacel=""){
   var DOORLEFT = 0
  for ( i = 0;i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("LeftDoor")) {
        DOORLEFT += 1
      }
    } catch {
      console.log("ere")
    }
  }
  if (DOORLEFT < 1 || REPLACE == true) {
   //addingDoor("LeftDoor",doorElement1+"Left",doorElement2 +"Left",doorElement3+"Left",doorElement4+"Left",doorElement5+"Left",doorElement6,replace,replacel)
   addingDoor("LeftDoor")
    
  } else {
  alert("Only one door can be added on the left side")
}
}

function addBackDoor(replace="",replacel="") {
  var DOORBACK = 0
  for ( i = 0;i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("BackDoor")) {
        DOORBACK += 1
      }
    } catch {
      console.log("ere")
    }
  }
  if (DOORBACK < 2 || REPLACE == true) {
  //addingDoor("BackDoor",doorElement1+"Back",doorElement2 +"Back",doorElement3+"Back",doorElement4+"Back",doorElement5+"Back",doorElement6,replace,replacel)
  addingDoor("BackDoor")
  if ( Dpath == "leanto/" && typeof(backDoor) != "object") {
    backDoorOnLeanTo()
  }
  
} else {
  alert("Only two doors can be added on the back side")
}
}



// -------------------------------------- SHED SIDINGS TEXTURE --------------------------------------- START **
  function applyTexture(link,RS,rot,mysiding) {

        var walls = [backty,front]
        var walls2 = [righty,lefty]
        if ( typeof(backDoor) == "object") {
          walls.push(backDoor)
        }

        try {
            if ( typeof(faceBoard) == "object") {
              walls.push(faceBoard)
            }
            if ( typeof(faceBoard2) == "object") {
              walls.push(faceBoard2)
            }
          } catch {
            //pass
          }
          try {
            if ( typeof(cabanaCloseFront) == "object") {
              walls.push(cabanaCloseFront)
            }
            if ( typeof(cabanaCloseBack) == "object") {
              walls.push(cabanaCloseBack)
            }
            if ( typeof(cabanaCloseRight) == "object") {
              walls2.push(cabanaCloseRight)
            }
            if ( typeof(cabanaCloseLeft) == "object") {
              walls2.push(cabanaCloseLeft)
            }
          } catch {
            //pass
          }

       
        texture = new THREE.TextureLoader().load(link)   
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

        textureDoor = new THREE.TextureLoader().load(link)   
        textureDoor.wrapS = texture.wrapT = THREE.RepeatWrapping;


        if ( Dpath != "capecode/") {
        if ( rot == true ) {
          texture.rotation = ( Math.PI/2 )
          textureDoor.rotation = ( Math.PI/2 )
        }
      } else {
        if ( rot == false) {
          texture.rotation = (Math.PI/2)
          textureDoor.rotation = (Math.PI/2)
        }
      }
        texture.anisotropy = 16;
        textureDoor.anisotropy = 16;
        
       if( mySiding == "shiplap") {
          texture.repeat.x = RS

        } else {
        texture.repeat.x = RS * XX
        if ( Dpath == "capecode/") {
          texture.repeat.x = RS*XX*1.5
        }
      }
        //texture.repeat.z = RS* ZZ
        texture.repeat.y = RS*YY

         texture2 = new THREE.TextureLoader().load(link)   
        texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
        if ( rot == true ) {
          texture2.rotation = ( Math.PI/2 )
        }
        texture2.anisotropy = 16;
        
        if( mySiding == "shiplap") {
          texture2.repeat.x = RS
        } else {
        texture2.repeat.x = RS * ZZ
      }
        //texture2.repeat.z = RS* ZZ
        texture2.repeat.y = RS*YY
        //texture.magFilter = THREE.NearestFilter;
        //texture.minFilter = THREE.NearestFilter;
        if ( Dpath == "capecode/") {
            texture3 = new THREE.TextureLoader().load(link)   
            texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping;

       
        if ( rot == true ) {
          texture3.rotation = ( Math.PI/2 )
        }
      
      
        texture3.anisotropy = 16;
        
       if( mySiding == "shiplap") {
          texture3.repeat.x = RS
        } else {
        texture3.repeat.x = RS * ZZ
      }
        //texture.repeat.z = RS* ZZ
        texture3.repeat.y = RS*YY
        }
        for (wall of walls) {
        for ( i = 0; i <wall.material.length;i++) {
          wall.material[i].map = texture
        }
      }
        for (wall of walls2) {
        for ( i = 0; i <wall.material.length;i++) {
          wall.material[i].map = texture2
        }
      }
      if ( Dpath == "capecode/") {
        for ( i = 0; i < specialFront.material.length; i++) {
          specialFront.material[i].map = texture3
        }
      }
      
        for ( obj of listObj) {
          if (obj.name.includes("Door")) {
            if ( obj.door.model == "standard/") {
              for ( i =0; i < obj.door.material.length;i++) {
                if ( Dpath == "capecode/") {
                  textureDoor.rotation = (Math.PI/2)
                }
                textureDoor.repeat.x = RS 
               
                obj.door.material[i].map = textureDoor
              }
            }
          }
        }
      
   
       document.getElementById("fix").innerHTML = "Duratemp"
       //myText = "duratemp.jpg"
      mySiding = mysiding
      loadingHtmlSidingColors()
      updateStuff()
      //updateSizeSiding() 
  }

       function defaultTexture() {
        applyTexture("Textures/default.png",1,true,"duratemp")
        myText="dura.png"
        repeatSiding = 1
        rotateSiding = true
        mySiding = "duratemp"
      }

    function duraTemp() {

        applyTexture("Textures/dura.png",4.8,true,"duratemp")
        myText="dura.png"
        repeatSiding = 4.8
        RS = 4.8
        rotateSiding = true
        mySiding = "duratemp"
      }
  function charWood() {
        applyTexture("Textures/charwood.jpg",3,true,"charWood")    
        myText = "charwood.jpg" 
        repeatSiding = 3
        RS = 3
        rotateSiding = true
        mySiding = "charWood"
      }
      function tongue() {
        applyTexture("Textures/tongue.png",4.28,true,"tongue")
        myText = "tongue.png"
          RS = 4.28
         repeatSiding = 4.28
         rotateSiding = true
         mySiding = "tongue"
      }
      function shiplap() {
        applyTexture("Textures/shiplap.png",4,true,"shiplap")
        RS = 4
        myText= "shiplap.png"
         repeatSiding = 4
         rotateSiding = true
         mySiding = "shiplap"
      }

      function boardd() {
         applyTexture("Textures/boardbatten.png",4.9,true,"board")
         myText = "boardbatten.png"
         repeatSiding = 4.9
         RS = 4.9
         rotateSiding = true
         mySiding = "board"
      
      }
      
      
      function smart1() {
        applyTexture("Textures/smart1.png",4.8,true,"smart1")
        myText="smart1.png"
        repeatSiding = 4.8
        RS = 4.8
        rotateSiding = true
        mySiding = "smart1"
        }
      
      function smart2() {
        applyTexture("Textures/smart2.png",4.8,true,"smart2")
        myText="smart2.png"
        repeatSiding = 4.8
        RS = 4.8
        rotateSiding = true
        mySiding = "smart2"
       }
      
      function smart3() {
        applyTexture("Textures/smart3.png",4,true,"LP")
        myText="smart3.png"
         repeatSiding = 4
         RS = 4
         rotateSiding = true
         mySiding = "LP"

        document.getElementById("fix").innerHTML = "L.P product<br>smartside lap siding-5"
    
      }
      function vinyl1() {
        applyTexture("Textures/straightshingles.png",1,true,"straighshingles")
      	 myText = "straightshingles.png"
          repeatSiding = 1
          RS = 1
          rotateSiding = trye
        document.getElementById("fix").innerHTML = "Vinyl<br>Straight edge shingles"
        mySiding = "straighshingles"
   
      }
      function vinyl2() {
        applyTexture("Textures/straightedge.png",1,true,"straightedge")
         myText = "straightedge.png" 
         repeatSiding = 1
         RS = 1
         rotateSiding = true
        document.getElementById("fix").innerHTML = "Vinyl<br>Straight edge shakes"
        mySiding = "straightedge"
      }
      function D4() {
        applyTexture("Textures/D4.png",4,true,"D4")
         myText = "D4.png" 
         repeatSiding = 4
         RS = 4
         rotateSiding = true
        document.getElementById("fix").innerHTML = "Vinyl<br>D4"
        mySiding = "D4"
      
      }
      function D4D() {
        applyTexture("Textures/D4D.png",1,true,"D4D")
         myText = "D4D.png" 
         repeatSiding = 1
         RS = 1
         rotateSiding = true
        document.getElementById("fix").innerHTML = "Vinyl<br>D4D"
        mySiding = "D4D"
      
      }
      function hardie() {
         applyTexture("Textures/shiplap.png",4,true,"hardie")
        myText="shiplap.png"
         repeatSiding = 4
         RS = 4
         rotateSiding = true
        document.getElementById("fix").innerHTML = "HardyPlank"
        mySiding = "hardie"
      
      }
      function cedar() {
        applyTexture("Textures/cedar.png",2,true,"cedar")
         myText = "cedar.png"
         repeatSiding = 1
         RS = 1
         rotateSiding = true
        document.getElementById("fix").innerHTML = "Cedar"
        mySiding = "cedar"
  
      }

      function stone() {
        applyTexture("Textures/stone.png",1.2,true,"stone")
      	myText ="stone.png"
         repeatSiding = 1.2
         rotateSiding = true
        document.getElementById("fix").innerHTML = "Stone"
        mySiding = "stone"
   
      }
      function frontOrAll(eko=true) {
        if ( myText == "") {
          alert("No sidings selected.")
        } else {
       
        if ( eko == true ) {
        texture = new THREE.TextureLoader().load("Textures/"+myText)
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( RS, RS );
        texture.anisotropy = 16;
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        for ( i = 0; i < shell.material.length;i++) {
         if (i < front.material.length) {
          front.material[i].map = texture
        }
         if ( i < backty.material.length) {
          backty.material[i].map = texture
        }
        if ( i < lefty.material.length) {
          lefty.material[i].map = texture
        }
        if ( i <righty.material.length) {
          righty.material[i].map = texture
        }
          shell.material[i].map = ""
        }
        
        
        } else {
        texture = new THREE.TextureLoader().load("Textures/" + myText)
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( RS, RS );
        texture.anisotropy = 16;
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        for ( i = 0; i < shell.material.length;i++) {
         if (i < front.material.length) {
          front.material[i].map = texture

        }
        /*
         if ( i < backty.material.length) {
          backty.material[i].map = texture
        }
        */
        if ( i < lefty.material.length) {
          lefty.material[i].map = texture
        }
        if ( i <righty.material.length) {
          righty.material[i].map = texture
        }
          shell.material[i].map = texture

        }



        }
        updateSizeSiding()
      }
      }
// -------------------------------------- SHED SIDINGS TEXTURE --------------------------------------- END **






// -------------------------------------- SHED SHINGLES TEXTURE --------------------------------------- END **
function charcoalS() {
  architecturalStyle = "Charcoal"
        XS = 1.5
        ZS = 1.5
        XS = (XX * 1.5) / 1
        ZS = XS
        if ( roofingText != charcoalS) {
        roofingText = charcoalS
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
        if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
                 if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
        try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
      }

        textureS = new THREE.TextureLoader().load("Textures/shingles/charcoal.jpg")
        textureS.wrapS = textureS.wrapT = THREE.RepeatWrapping;
        textureS.anisotropy = 16
        
        //textureS.magFilter = THREE.NearestFilter;
        //textureS.minFilter = THREE.NearestFilter;
        textureS.repeat.set(XS,ZS)
     
       // textureS..magFilter = THREE.LinearFilter

        textureS2 = new THREE.TextureLoader().load("Textures/shingles/charcoal_NRM.jpg")
        textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        textureS2.anisotropy = 16
  
        textureS2.rotation = ( Math.PI / 2)
        textureS.rotation = ( Math.PI / 2)
      
        //textureS2.magFilter = THREE.NearestFilter;
        //textureS2.minFilter = THREE.NearestFilter;
        textureS2.repeat.set(XS,ZS)

         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = textureS2
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = textureS2 
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }

        for ( i = 0; i < shingles.material.length;i++) {
     
          shingles.material[i].map = textureS
          shingles.material[i].normalMap = textureS2
          shingles.material[i].needsUpdate = true
        }
        if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = textureS2
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        

        try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].map = textureS
          cupolaShingle.material[i].normalMap = textureS2 
          cupolaShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

      try { 
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].map = textureS
          dormerShingle.material[i].normalMap = textureS2 
          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }
        //updateSizeShingles()
      

}
function WWS() {
        architecturalStyle = "Weathered Wood"
        XS = 4
        ZS = 4
        XS = (XX * 4) / 1
        //ZS = XS
         if ( roofingText != WWS) {
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
           if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
                         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
        roofingText = WWS
      }
        
         textureS = new THREE.TextureLoader().load("Textures/shingles/WWT.png")

        textureS.wrapS = textureS.wrapT = THREE.RepeatWrapping;
        
        textureS.anisotropy = 16;
        //textureS.magFilter = THREE.NearestFilter;
        //textureS.minFilter = THREE.NearestFilter;
        
        textureS.repeat.set(XS,ZS)

         textureS2 = new THREE.TextureLoader().load("Textures/shingles/WWT.png")

        textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        
        textureS2.anisotropy = 16;
        //textureS.magFilter = THREE.NearestFilter;
        //textureS.minFilter = THREE.NearestFilter;
        
        textureS2.repeat.set(XS,ZS)


       
          textureS.rotation = 4.71
          textureS2.rotation = 4.71
        
           if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = textureS2
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = textureS2 
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }

        for ( i = 0; i < shingles.material.length;i++) {
          
          shingles.material[i].map = textureS
          //shingles.material[i].normalMap = textureS2
          shingles.material[i].normalMap = textureS2

          shingles.material[i].needsUpdate = true
        
        }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = textureS2
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        
      try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].map = textureS
          cupolaShingle.material[i].normalMap = textureS2 
          cupolaShingle.needsUpdate = true;
        }

      }catch {
        console.log("no cupola found")
      }

      try { 
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].map = textureS
          dormerShingle.material[i].normalMap = textureS2 
          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }
        //updateSizeShingles()
}


function pewterS() {
  architecturalStyle = "Pewter Gray"
        XS = 4
        ZS = 4
        XS = (XX * 4) / 1
        ZS = XS
         if ( roofingText != charcoalS) {
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
           if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
                         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
        roofingText = charcoalS
      }
        textureS = new THREE.TextureLoader().load("Textures/shingles/pewterT.jpg")
        textureS.wrapS = textureS.wrapT = THREE.RepeatWrapping;

        textureS.anisotropy = 16;
       
        //textureS.magFilter = THREE.NearestFilter;
        //textureS.minFilter = THREE.NearestFilter;
        textureS.repeat.set(XS,ZS)

        textureS2 = new THREE.TextureLoader().load("Textures/shingles/pewterT.jpg")
        textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        //textureS2.magFilter = THREE.NearestFilter;
        //textureS2.minFilter = THREE.NearestFilter;
       
        textureS2.anisotropy = 16;
        
        textureS2.repeat.set(XS,ZS)

    
          textureS.rotation = 4.71
          textureS2.rotation = 4.71
        
         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = textureS2
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = textureS2 
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }

        for ( i = 0; i < shingles.material.length;i++) {
         
          shingles.material[i].map = textureS
          shingles.material[i].normalMap = textureS2
          
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = textureS2
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        

        
                try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].map = textureS
          cupolaShingle.material[i].normalMap = textureS2 
          cupolaShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

      try { 
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].map = textureS
          dormerShingle.material[i].normalMap = textureS2 
          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }
       //updateSizeShingles()
}
function shakewoodS() {
  architecturalStyle = "Shakewood"
        XS = 4
        ZS = 4
        XS = (XX * 4) / 1
        ZS = XS
         if ( roofingText != shakewoodS) {
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
           if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
                         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
        roofingText = shakewoodS
      }
        textureS = new THREE.TextureLoader().load("Textures/shingles/shakewoodT.jpg")
        textureS.wrapS = textureS.wrapT = THREE.RepeatWrapping;
        textureS.anisotropy = 16;
       
        //textureS.magFilter = THREE.NearestFilter;
        //textureS.minFilter = THREE.NearestFilter;
        textureS.repeat.set(4,4)

         textureS2 = new THREE.TextureLoader().load("Textures/shingles/shakewoodT.jpg")
        textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        textureS2.anisotropy = 16;
        
   
    
           textureS.rotation = 4.71
          textureS2.rotation = (Math.PI/2)
          textureS2.rotation = 4.71
          
           if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = textureS2
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = textureS2 
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }

       for ( i = 0; i < shingles.material.length;i++) {
     
          shingles.material[i].map = textureS
          shingles.material[i].normalMap = textureS2
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = textureS2
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        
        
                try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].map = textureS
          cupolaShingle.material[i].normalMap = textureS2 
          cupolaShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

      try { 
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].map = textureS
          dormerShingle.material[i].normalMap = textureS2 
          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }
        //updateSizeShingles()
}
function williamS() {
  architecturalStyle = "Williamsburg Slate"
        XS = 4
        ZS = 4
        XS = (XX * 4) / 1
        ZS = XS
         if ( roofingText != williamS) {
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
           if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
                         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
        roofingText = williamS
      }
        textureS = new THREE.TextureLoader().load("Textures/shingles/williamT.jpg")
        textureS.wrapS = textureS.wrapT = THREE.RepeatWrapping;
        textureS.anisotropy = 16;
        
        //textureS.magFilter = THREE.NearestFilter;
        //textureS.minFilter = THREE.NearestFilter;
        textureS.repeat.set(4,4)

        textureS2 = new THREE.TextureLoader().load("Textures/shingles/williamT_NRM.jpg")
        textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        textureS2.anisotropy = 16;
        
        
        
          textureS.rotation = 4.71
          textureS2.rotation = 4.71
        
         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = textureS2
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = textureS2 
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }

        for ( i = 0; i < shingles.material.length;i++) {
        
          shingles.material[i].map = textureS
          shingles.material[i].normalMap = textureS2
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = textureS2
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        
        
                try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].map = textureS
          cupolaShingle.material[i].normalMap = textureS2 
          cupolaShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

      try { 
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].map = textureS
          dormerShingle.material[i].normalMap = textureS2 
          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }
        //updateSizeShingles()
}
function barkS() {
  architecturalStyle = "Barkwood"
        XS = 4
        ZS = 4
        XS = (XX * 4) / 1
        ZS = XS
         if ( roofingText != barkS) {
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
           if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
                         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
        roofingText = barkS
      }
        textureS = new THREE.TextureLoader().load("Textures/shingles/barkT.png")
        textureS.wrapS = textureS.wrapT = THREE.RepeatWrapping;
        textureS.anisotropy = 16;
       
        //textureS.magFilter = THREE.NearestFilter;
        //textureS.minFilter = THREE.NearestFilter;
        textureS.repeat.set(4,4)

         textureS2 = new THREE.TextureLoader().load("Textures/shingles/barkT_NRM.jpg")
        textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        textureS2.anisotropy = 16;
        
 
       
          textureS.rotation = 4.71
          textureS2.rotation = 4.71
          
           if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = textureS2
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = textureS2 
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }

        for ( i = 0; i < shingles.material.length;i++) {
          
          shingles.material[i].map = textureS
          shingles.material[i].normalMap = textureS2
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = textureS2
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        
        
                try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].map = textureS
          cupolaShingle.material[i].normalMap = textureS2 
          cupolaShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

      try { 
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].map = textureS
          dormerShingle.material[i].normalMap = textureS2 
          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }
        updateSizeShingles()
}
function foxS() {
  architecturalStyle = "Fox Hollow Gray"
        XS = 4
        ZS = 4
        XS = (XX * 4) / 1
        ZS = XS
         if ( roofingText != foxS) {
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
           if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
                         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
        roofingText = foxS
      }
        textureS = new THREE.TextureLoader().load("Textures/shingles/foxT.png")
        textureS.wrapS = textureS.wrapT = THREE.RepeatWrapping;
        textureS.anisotropy = 16;
        
        //textureS.magFilter = THREE.NearestFilter;
        //textureS.minFilter = THREE.NearestFilter;
        textureS.repeat.set(4,4)

        textureS2 = new THREE.TextureLoader().load("Textures/shingles/foxT_NRM.jpg")
        textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        textureS2.anisotropy = 16
        
        
          textureS.rotation = 4.71
          textureS2.rotation = 4.71
        

 if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = textureS2
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = textureS2 
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }
        for ( i = 0; i < shingles.material.length;i++) {
          
          shingles.material[i].map = textureS
          shingles.material[i].normalMap = textureS2
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = textureS2
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        
        
                try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].map = textureS
          cupolaShingle.material[i].normalMap = textureS2 
          cupolaShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

      try { 
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].map = textureS
          dormerShingle.material[i].normalMap = textureS2 
          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }
        updateSizeShingles()
}
function hickoryS() {
  architecturalStyle = "Hickory"
        XS = 4
        ZS = 4
        XS = (XX * 4) / 1
        ZS = XS
         if ( roofingText != hickoryS) {
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
           if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
                         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
        roofingText = hickoryS
      }
        textureS = new THREE.TextureLoader().load("Textures/h1.png")
        textureS.wrapS = textureS.wrapT = THREE.RepeatWrapping;
        textureS.anisotropy = 16;
       
        
        textureS.repeat.set(4,4)

         textureS2 = new THREE.TextureLoader().load("Textures/h1_NRM.jpg")
        textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        textureS2.anisotropy = 16;
       
        textureS2.repeat.set(4,4)

          textureS.rotation = 4.71
          textureS2.rotation = 4.71
         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = textureS2
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = textureS2 
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }
       for ( i = 0; i < shingles.material.length;i++) {
        
          shingles.material[i].map = textureS
          shingles.material[i].normalMap = textureS2
         
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = textureS2
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        
        
                try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].map = textureS
          cupolaShingle.material[i].normalMap = textureS2 
          cupolaShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

      try { 
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].map = textureS
          dormerShingle.material[i].normalMap = textureS2 
          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }
        updateSizeShingles()
}
function archiS() {
  architecturalStyle = "Architectural"
        XS = 2
        ZS = 2
        XS = (XX * 2) / 1
        ZS = XS
         if ( roofingText != archiS) {
        for ( c of shingles.material) {
          c.color.setHex(0xa3a3a3)
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xa3a3a3)
        }
      } catch{
        //pass
      }
           if ( Dpath == "cabana/") {
        try {
           for ( c of shingleFront.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleRight.material) {
             c.color.setHex(0xa3a3a3)
              }
              for ( c of shingleLeft.material) {
              c.color.setHex(0xa3a3a3)
              }
              for ( c of shingles.material) {
              c.color.setHex(0xa3a3a3)
              }
          } catch {
            //pass
          }
        }
                         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xa3a3a3)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xa3a3a3)
        }
      }
    } catch {
      //pass
    }
    }
        roofingText = archiS
      }
        textureS = new THREE.TextureLoader().load("Textures/shingles/shingleB.jpg")
        textureS.wrapS = textureS.wrapT = THREE.RepeatWrapping;
        textureS.anisotropy = 16;
        //textureS.magFilter = THREE.NearestFilter;
        //textureS.minFilter = THREE.NearestFilter;
        textureS.repeat.set(2,2)

        textureS2 = new THREE.TextureLoader().load("Textures/shingles/shingleB_NRM.jpg")
        textureS2.wrapS = textureS2.wrapT = THREE.RepeatWrapping;
        textureS2.anisotropy = 16;

  
        textureS.rotation = ( Math.PI / 2)
        textureS2.rotation = ( Math.PI / 2)
      
      if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.map = textureS 
        c.normalMap = textureS2
        c.needsUpdate = true
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.map = textureS 
          j.normalMap = textureS2 
          j.needsUpdate = true
        }
      }
    } catch {
      //pass
    }
    }
       for ( i = 0; i < shingles.material.length;i++) {
      
          shingles.material[i].map = textureS
          shingles.material[i].normalMap = textureS2
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.map = textureS
              c.normalMap = textureS2
              c.needsUpdate = true
              }
              for ( c of shingleRight.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingleLeft.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
              for ( c of shingles.material) {
              c.map = textureS
               c.normalMap = textureS2
               c.needsUpdate = true
              }
          } catch {
            //pass
          }
        }
        
        
                try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].map = textureS
          cupolaShingle.material[i].normalMap = textureS2 
          cupolaShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

      try { 
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].map = textureS
          dormerShingle.material[i].normalMap = textureS2 
          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }
        //updateSizeShingles()
      }

function blueS() {
           for ( i = 0; i < shingles.material.length;i++) {
          //shingles.material[i].map = ""
      
          shingles.material[i].color.set(0x5c6678)
          shingles.material[i].needsUpdate = true
        }
                         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0x5c6678)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0x5c6678)
        }
      }
    } catch {
      //pass
    }
    }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.color.set(0x5c6678)
              }
              for ( c of shingleRight.material) {
             c.color.set(0x5c6678)
              }
              for ( c of shingleLeft.material) {
              c.color.set(0x5c6678)
              }
              for ( c of shingles.material) {
              c.color.set(0x5c6678)
              }
          } catch {
            //pass
          }
        }
        
        
              try {
        for ( i =0; i < cupolaShingle.material.length;i++) {
          cupolaShingle.material[i].color.set(0x5c6678)

          cupolaShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

        try {
        for ( i =0; i < dormerShingle.material.length;i++) {
          dormerShingle.material[i].color.set(0x5c6678) 

          dormerShingle.needsUpdate = true;

        }
      }catch {
        console.log("no cupola found")
      }

        //updateSizeShingles()
      roofingColor = blueS

}
function redS() {
         for ( i = 0; i < shingles.material.length;i++) {
          //shingles.material[i].map = ""
          shingles.material[i].color.set(0x664845)
          shingles.material[i].needsUpdate = true
        }
                                 if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0x664845)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0x664845)
        }
      }
    } catch {
      //pass
    }
    }
         if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.color.set(0x664845)
              }
              for ( c of shingleRight.material) {
             c.color.set(0x664845)
              }
              for ( c of shingleLeft.material) {
              c.color.set(0x664845)
              }
              for ( c of shingles.material) {
              c.color.set(0x664845)
              }
          } catch {
            //pass
          }
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0x664845)
        }
      } catch{
        //pass
      }
        roogfingColor = redS
}
function greenS() {
  
        
        
        for ( i = 0; i < shingles.material.length;i++) {
          //shingles.material[i].map = ""
         
          shingles.material[i].color.set(0x4e5f52)
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0x4e5f52)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0x4e5f52)
        }
      }
    } catch {
      //pass
    }
    }
                 if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.color.set(0x4e5f52)
              }
              for ( c of shingleRight.material) {
             c.color.set(0x4e5f52)
              }
              for ( c of shingleLeft.material) {
              c.color.set(0x4e5f52)
              }
              for ( c of shingles.material) {
              c.color.set(0x4e5f52)
              }
          } catch {
            //pass
          }
        }
        roofingColor = greenS
        
}

function brightS() {

        for ( i = 0; i < shingles.material.length;i++) {

          shingles.material[i].color.set(0xf4f4f4)
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xf4f4f4)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xf4f4f4)
        }
      }
    } catch {
      //pass
    }
    }

                 if ( Dpath == "cabana/") {
          try {
           for ( c of shingleFront.material) {
              c.color.set(0xf4f4f4)
              }
              for ( c of shingleRight.material) {
             c.color.set(0xf4f4f4)
              }
              for ( c of shingleLeft.material) {
              c.color.set(0xf4f4f4)
              }
              for ( c of shingles.material) {
              c.color.set(0xf4f4f4)
              }
          } catch {
            //pass
          }
        }
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xf4f4f4)
        }
      } catch{
        //pass
      }
        roofingColor = brightS
      

}

function lightS() {

        for ( i = 0; i < shingles.material.length;i++) {

          shingles.material[i].color.set(0xcac3a7)
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xcac3a7)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xcac3a7)
        }
      }
    } catch {
      //pass
    }
    }
         try {
           for ( c of shingleFront.material) {
              c.color.set(0xcac3a7)
              }
              for ( c of shingleRight.material) {
             c.color.set(0xcac3a7)
              }
              for ( c of shingleLeft.material) {
              c.color.set(0xcac3a7)
              }
              for ( c of shingles.material) {
              c.color.set(0xcac3a7)
              }
          } catch {
            //pass
          }
        
         try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xcac3a7)
        }
      } catch{
        //pass
      }
        roofingColor = lightS
      

}

function beigeS() {

        for ( i = 0; i < shingles.material.length;i++) {
         
          shingles.material[i].color.set(0xf5f5dc)
          shingles.material[i].needsUpdate = true
        }
         if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xf5f5dc)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xf5f5dc)
        }
      }
    } catch {
      //pass
    }
    }
         try {
           for ( c of shingleFront.material) {
              c.color.set(0xf5f5dc)
              }
              for ( c of shingleRight.material) {
             c.color.set(0xf5f5dc)
              }
              for ( c of shingleLeft.material) {
              c.color.set(0xf5f5dc)
              }
              for ( c of shingles.material) {
              c.color.set(0xf5f5dc)
              }
          } catch {
            //pass
          }
          try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xf5f5dc)
        }
      } catch{
        //pass
      }
        
        roofingColor = belgeS
}

function clayS() {

        for ( i = 0; i < shingles.material.length;i++) {
     
          shingles.material[i].color.set(0x845c40)
          shingles.material[i].needsUpdate = true
        }
        if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0x845c40)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0x845c40)
        }
      }
    } catch {
      //pass
    }
    }
         try {
           for ( c of shingleFront.material) {
              c.color.set(0x845c40)
              }
              for ( c of shingleRight.material) {
             c.color.set(0x845c40)
              }
              for ( c of shingleLeft.material) {
              c.color.set(0x845c40)
              }
              for ( c of shingles.material) {
              c.color.set(0x845c40)
              }
          } catch {
            //pass
          }
          try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0x845c40)
        }
      } catch{
        //pass
      }
        roofingColor = clayS

}

function tanS() {

        for ( i = 0; i < shingles.material.length;i++) {
      
          shingles.material[i].color.set(0xd2b48c)
          shingles.material[i].needsUpdate = true
        }
          if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(0xd2b48c)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(0xd2b48c)
        }
      }
    } catch {
      //pass
    }
    }
         try {
           for ( c of shingleFront.material) {
              c.color.set(0xd2b48c)
              }
              for ( c of shingleRight.material) {
             c.color.set(0xd2b48c)
              }
              for ( c of shingleLeft.material) {
              c.color.set(0xd2b48c)
              }
              for ( c of shingles.material) {
              c.color.set(0xd2b48c)
              }
          } catch {
            //pass
          }
          try {
         for ( c of dormerShingle.material) {
          c.color.setHex(0xd2b48c)
        }
      } catch{
        //pass
      }
        roofingColor = tanS

}

function metalColor(color="none") { 



  for ( i =0; i< shingles.material.length;i++) {

    shingles.material[i].color.set(color)
    shingles.material[i].needsUpdate = true
  }
    if ( Dpath == "capecode/") {
        try {
      for ( c of specialShingles.material) {
        c.color.setHex(color)
      }
      for ( c of shingleClones) {
        for ( j of c.material) {
          j.color.setHex(color)
        }
      }
    } catch {
      //pass
    }
    }
  try {
           for ( c of shingleFront.material) {
              c.color.set(color)
              }
              for ( c of shingleRight.material) {
             c.color.set(color)
              }
              for ( c of shingleLeft.material) {
              c.color.set(color)
              }
              for ( c of shingles.material) {
              c.color.set(color)
              }
          } catch {
            //pass
          }
   try {
         for ( c of dormerShingle.material) {
          c.color.setHex(color)
        }
      } catch{
        //pass
      }
  colorMetal = color
  roofingColor = metalColor
  
}



function sidingColor(color="none") {
SIDINGCOLOR = color 

if ( color == "none") {
  console.log("No color set in siding color")
  return;
}

if (typeof(color) != "number") {
        textureL = new THREE.TextureLoader().load(color + ".jpg")
        textureL.wrapS = textureL.wrapT = THREE.RepeatWrapping;
        textureL.anisotropy = 16;
        //textureL.rotation = ( Math.PI / 2)

        textureL2 = new THREE.TextureLoader().load(color + "_NRM.jpg")
        textureL2.wrapS = textureL2.wrapT = THREE.RepeatWrapping;
        textureL2.anisotropy = 16;
        //textureL2.rotation = ( Math.PI / 2)
        for (i =0;i<shell.material.length;i++) {
          shell.material[i].map = textureL 
          shell.material[i].normalMap = textureL2 
          shell.material[i].needsUpdate = true
          }

        for ( i=0;i<front.material.length;i++) {
          front.material[i].map = textureL 
          front.material[i].normalMap = textureL2
          front.material[i].needsUpdate = true
        }
  try {
  for (i=0;i<paintedR.material.length;i++) {
    paintedR.material[i].map = textureL 
    //paintedR.material[i].normalMap = textureL2
    paintedR.material[i].needsUpdate = true;
  } } catch (error){
    console.log("error loading paintedR color",error)
  }
  try {
  for (i=0;i<vents.material.length;i++){
    vents.material[i].map = textureL
     //vents.material[i].normalMap = textureL2

    vents.material[i].needsUpdate = true
  } } catch {
    console.log("error loading vents color")
  }
}


 else {

for (i =0;i<shell.material.length;i++) {
  shell.material[i].color.set(color)
}

for ( i=0;i<front.material.length;i++) {
  front.material[i].color.set(color)
}

for ( i=0;i<lefty.material.length;i++) {
  lefty.material[i].color.set(color)
}
for ( i=0;i<righty.material.length;i++) {
  righty.material[i].color.set(color)
}

for ( i=0;i<backty.material.length;i++) {
  backty.material[i].color.set(color)
}


if ( mySiding == "vinyl") {
   for ( i = 0; i < cornersFrontRight.material.length;i++) {
          cornersFrontRight.material[i].color.set(color) 
          cornersFrontRight.material[i].needsUpdate = true
        }

            for ( i = 0; i < cornersFrontLeft.material.length;i++) {
          cornersFrontLeft.material[i].color.set(color) 
          cornersFrontLeft.material[i].needsUpdate = true
        }

            for ( i = 0; i < cornersBackRight.material.length;i++) {
          cornersBackRight.material[i].color.set(color) 
          cornersBackRight.material[i].needsUpdate = true
        }

            for ( i = 0; i < cornersBackLeft.material.length;i++) {
          cornersBackLeft.material[i].color.set(color) 
          cornersBackLeft.material[i].needsUpdate = true
        }
 
}
for (i = 0;i < moveListo.length;i++) {

  try {
    if ( moveListo[i].includes("Door")) {
      for ( j = 0;j<moveListo[i+1].material.length;j++) {
        moveListo[i+2].material[j].color.set(0xF5FAFA)

      }
    }
  } catch {
    console.log("fd")
  }
}



    for (i = 0;i < moveListo.length;i++) {

  try {
    if ( moveListo[i].includes("Door")) {
      for ( j = 0;j<moveListo[i+1].material.length;j++) {
        moveListo[i+1].material[j].color.set(color)

      }
    }
  } catch {
    console.log("fd")
  }
}

 
  try {
  for (i=0;i<paintedR.material.length;i++) {
    paintedR.material[i].color.set(color)
    paintedR.material[i].needsUpdate = true
  } } catch (error){
    console.log("error loading paintedR color",error)
  }
  try {
  for (i=0;i<vents.material.length;i++){
    vents.material[i].color.set(color)
    vents.material[i].needsUpdate = true
  } } catch {
    console.log("error loading vents color")
  }
}





}


function trimColor(color="none") {
  if ( mySiding != "vinyl" ) {

  TRIMCOLOR = color
  if ( color == "none ") {
    console.log("No color set in trimColor function")
    return;
  }

  for ( i = 0; i < cornersFrontRight.material.length;i++) {
          cornersFrontRight.material[i].color.set(color) 
          cornersFrontRight.material[i].needsUpdate = true
        }

            for ( i = 0; i < cornersFrontLeft.material.length;i++) {
          cornersFrontLeft.material[i].color.set(color) 
          cornersFrontLeft.material[i].needsUpdate = true
        }

            for ( i = 0; i < cornersBackRight.material.length;i++) {
          cornersBackRight.material[i].color.set(color) 
          cornersBackRight.material[i].needsUpdate = true
        }

            for ( i = 0; i < cornersBackLeft.material.length;i++) {
          cornersBackLeft.material[i].color.set(color) 
          cornersBackLeft.material[i].needsUpdate = true
        }




  for (i = 0;i < moveListo.length;i++) {

  try {
    if ( moveListo[i].includes("Door")) {
      for ( j = 0;j<moveListo[i+2].material.length;j++) {
        moveListo[i+2].material[j].color.set(color)

      }
    }
  } catch {
    console.log("fd")
  }
}

for (i = 0;i < moveListo.length;i++) {

  try {
    if ( moveListo[i].includes("Window")) {
      for ( j = 0;j<moveListo[i+3].material.length;j++) {
        moveListo[i+3].material[j].color.set(color)

      }
    }
  } catch {
    console.log("fd")
  }
}





for (i = 0;i < moveListo.length;i++) {

  try {
    if ( moveListo[i].includes("Window")) {
      for ( j = 0;j<moveListo[i+2].material.length;j++) {
        moveListo[i+2].material[j].color.set(color)

      }
    }
  } catch {
    console.log("fd")
  }
}

try {
   for ( i= 0;i < lowFrame3.material.length;i++) {
    lowFrame3.material[i].color.set(color)
    lowFrame3.material[i].needsUpdate = true
  } }catch {
    console.log("wrong window at trimColor function")
  }


} else {

 
  for (i = 0;i < moveListo.length;i++) {
  try {
    if ( moveListo[i].includes("Window")) {
      for ( j = 0;j<moveListo[i+7].material.length;j++) {
        moveListo[i+7].material[j].color.set(color)
        
      }
    }
  } catch {
    console.log("fd")
  }
}

}




}

// -------------------------------------- SHED SHINGLES TEXTURE --------------------------------------- END **






// -------------------------------------- SHED DOORS TEXTURE --------------------------------------- START **
function linenD() {
   const textureD = new THREE.TextureLoader().load("Textures/doors/linen.jpg")
        textureD.wrapS = textureD.wrapT = THREE.RepeatWrapping;
        textureD.repeat.set( 1, 1 );
        textureD.anisotropy = 16;
        door.material.map = textureD
        door.material.needsUpdate = true

}

function ivoryD() {
   const textureD = new THREE.TextureLoader().load("Textures/doors/ivory.jpg")
        textureD.wrapS = textureD.wrapT = THREE.RepeatWrapping;
        textureD.repeat.set( 1, 1 );
        textureD.anisotropy = 16;
        door.material.map = textureD
        door.material.needsUpdate = true

}
function almonD() {
   const textureD = new THREE.TextureLoader().load("Textures/doors/almond.jpg")
        textureD.wrapS = textureD.wrapT = THREE.RepeatWrapping;
        textureD.repeat.set( 1, 1 );
        textureD.anisotropy = 16;
        door.material.map = textureD
        door.material.needsUpdate = true

}
function prairieD() {
   const textureD = new THREE.TextureLoader().load("Textures/doors/prairie.jpg")
        textureD.wrapS = textureD.wrapT = THREE.RepeatWrapping;
        textureD.repeat.set( 1, 1 );
        textureD.anisotropy = 16;
        door.material.map = textureD
        door.material.needsUpdate = true

}
function heritageD() {
   const textureD = new THREE.TextureLoader().load("Textures/doors/heritage.jpg")
        textureD.wrapS = textureD.wrapT = THREE.RepeatWrapping;
        textureD.repeat.set( 1, 1 );
        textureD.anisotropy = 16;
        door.material.map = textureD
        door.material.needsUpdate = true

}
function sandstoneD() {
   const textureD = new THREE.TextureLoader().load("Textures/doors/sandstone.jpg")
        textureD.wrapS = textureD.wrapT = THREE.RepeatWrapping;
        textureD.repeat.set( 1, 1 );
        textureD.anisotropy = 16;
        door.material.map = textureD
        door.material.needsUpdate = true

}
function clayD() {
   const textureD = new THREE.TextureLoader().load("Textures/doors/clay.jpg")
        textureD.wrapS = textureD.wrapT = THREE.RepeatWrapping;
        textureD.repeat.set( 1, 1 );
        textureD.anisotropy = 16;
        door.material.map = textureD
        door.material.needsUpdate = true

}

function sageD() {
  door.material.map = ""
  door.material.color.set(0x9AAB89)
  door.material.needsUpdate = true
}

function navyD() {
  door.material.map = ""
  door.material.color.set(0x000080)
  door.material.needsUpdate = true
}

function greenD() {
  door.material.map = ""
  door.material.color.set(0x008000)
  door.material.needsUpdate = true
}

function redD() {
  door.material.map = ""
  door.material.color.set(0xff0000)
  door.material.needsUpdate = true
}
function burgundyD() {
  door.material.map = ""
  door.material.color.set(0x800020)
  door.material.needsUpdate = true
}
function DGD() {
  door.material.map = ""
  door.material.color.set(0xA9A9A9)
  door.material.needsUpdate = true
}
function DBD() {
  door.material.map = ""
  door.material.color.set(0x654321)
  door.material.needsUpdate = true
}
function blackD() {
  door.material.map =""
  door.material.color.set(0x000000)
  door.material.needsUpdate = true
}
// -------------------------------------- SHED DOORS TEXTURE --------------------------------------- END **






// -------------------------------------- SHED FLOOR TEXTURE --------------------------------------- START **
function joistsF() {
   const textureF = new THREE.TextureLoader().load("Textures/floor/joists.jpg")
        textureF.wrapS = textureF.wrapT = THREE.RepeatWrapping;
        textureF.repeat.set( 1, 1 );
        textureF.anisotropy = 16;
        floor1.material.map = textureF
        floor1.material.needsUpdate = true
        transparent = true
        transparentt()

}

function plywoodF() {
   const textureF = new THREE.TextureLoader().load("Textures/floor/plywood1.jpg")
        textureF.wrapS = textureF.wrapT = THREE.RepeatWrapping;
        textureF.repeat.set( 1, 1 );
        textureF.anisotropy = 16;
        floor1.material.map = textureF
        floor1.material.needsUpdate = true
        transparent = true
        transparentt()

}

function tongueF() {
   const textureF = new THREE.TextureLoader().load("Textures/floor/tongue.jpg")
        textureF.wrapS = textureF.wrapT = THREE.RepeatWrapping;
        textureF.repeat.set( 1, 1 );
        textureF.anisotropy = 16;
        floor1.material.map = textureF
        floor1.material.needsUpdate = true
        transparent = true
        transparentt()

}

function foamPlywood() {
        textureF = new THREE.TextureLoader().load("Textures/floor/foam2.jpg")
        textureF.wrapS = textureF.wrapT = THREE.RepeatWrapping;
        textureF.repeat.set( 1, 1 );
        textureF.anisotropy = 16;
        for ( i=0;i<plywood.material.length;i++) {
       
        plywood.material[i].map = textureF
        plywood.material[i].needsUpdate = true
      }
}

function foamF() {

      loadingPlywood("XD")
     
      }
  
 function over() {
    

    shingles.scale.x += XX / 13.69
    shingles.position.x -= 0.0078
    
   
  
} 
       

function noFloor() {
  
        plywoodStyle = "None"
          try {
            scene.remove(ply)
            scene.remove(frameFloor)

          } catch {
            console.log("no floor to remove in noFloor function")
          }

          try {
    for ( i=0;i<f2.length;i++) {
            scene.remove(f2[i])
          }
       xxx = 0.4063990116119385
       yyy = 0.20319998264312744
  
       if ( FILEFLOOR == "framing162" ) {
        zZ = 0.4063990116119385
        zzz = 0.4063990116119385
       } else if ( FILEFLOOR == "framing82") {
       zZ = 0.20319998264312744
       zzz = 0.20319998264312744
   } else if ( FILEFLOOR  == "framing122" ) {
    zZ = 0.3047999143600464
    zzz = 0.3047999143600464
   }
     f2 = []


 } catch {
  console.log("no frames  .... to remove ! ")
 }

        
}

function no4x4() {
  if ( document.getElementById("4x4").innerHTML == "No 4x4") {
    try {
            setTransp(boardMid,0)
            FLOOR_4x4 = "None"
            document.getElementById("4x4").innerHTML = "4x4"
          } catch {
            //pass
          }
  } else {
     try {
            setTransp(boardMid,1)
            FLOOR_4x4 = "4x4"
            document.getElementById("4x4").innerHTML = "No 4x4"
          } catch {
            //pass
          }
  }
}


// -------------------------------------- SHED FLOOR TEXTURE --------------------------------------- END **






// -------------------------------------- SHED WINDOWS TEXTURE --------------------------------------- START **
function linenW() {
   const textureW = new THREE.TextureLoader().load("Textures/window1s/linen.jpg")
        textureW.wrapS = textureW.wrapT = THREE.RepeatWrapping;
        textureW.repeat.set( 1, 1 );
        textureW.anisotropy = 16;
        window1.material.map = textureW
        window1.material.needsUpdate = true
         window2.material.map = textureW
        window2.material.needsUpdate = true

}

function ivoryW() {
   const textureW = new THREE.TextureLoader().load("Textures/window1s/ivory.jpg")
        textureW.wrapS = textureW.wrapT = THREE.RepeatWrapping;
        textureW.repeat.set( 1, 1 );
        textureW.anisotropy = 16;
        window1.material.map = textureW
        window1.material.needsUpdate = true
         window2.material.map = textureW
        window2.material.needsUpdate = true
}
function almonW() {
   const textureW = new THREE.TextureLoader().load("Textures/window1s/almond.jpg")
        textureW.wrapS = textureW.wrapT = THREE.RepeatWrapping;
        textureW.repeat.set( 1, 1 );
        textureW.anisotropy = 16;
        window1.material.map = textureW
        window1.material.needsUpdate = true
         window2.material.map = textureW
        window2.material.needsUpdate = true

}
function prairieW() {
   const textureW = new THREE.TextureLoader().load("Textures/window1s/prairie.jpg")
        textureW.wrapS = textureW.wrapT = THREE.RepeatWrapping;
        textureW.repeat.set( 1, 1 );
        textureW.anisotropy = 16;
        window1.material.map = textureW
        window1.material.needsUpdate = true
         window2.material.map = textureW
        window2.material.needsUpdate = true

}
function heritageW() {
   const textureW = new THREE.TextureLoader().load("Textures/window1s/heritage.jpg")
        textureW.wrapS = textureW.wrapT = THREE.RepeatWrapping;
        textureW.repeat.set( 1, 1 );
        textureW.anisotropy = 16;
        window1.material.map = textureW
        window1.material.needsUpdate = true
        window2.material.map = textureW
        window2.material.needsUpdate = true

}
function sandstoneW() {
   const textureW = new THREE.TextureLoader().load("Textures/window1s/sandstone.jpg")
        textureW.wrapS = textureW.wrapT = THREE.RepeatWrapping;
        textureW.repeat.set( 1, 1 );
        textureW.anisotropy = 16;
        window1.material.map = textureW
        window1.material.needsUpdate = true
         window2.material.map = textureW
        window2.material.needsUpdate = true

}
function clayW() {
   const textureW = new THREE.TextureLoader().load("Textures/window1s/clay.jpg")
        textureW.wrapS = textureW.wrapT = THREE.RepeatWrapping;
        textureW.repeat.set( 1, 1 );
        textureW.anisotropy = 16;
        window1.material.map = textureW
        window1.material.needsUpdate = true
         window2.material.map = textureW
        window2.material.needsUpdate = true

}

function sageW() {
  window1.material.map = ""
  window1.material.color.set(0x9AAB89)
  window1.material.needsUpdate = true

}

function navyW() {
  window1.material.map = ""
  window1.material.color.set(0x000080)
  window1.material.needsUpdate = true
}

function greenW() {
  window1.material.map = ""
  window1.material.color.set(0x008000)
  window1.material.needsUpdate = true
}

function redW() {
  window1.material.map = ""
  window1.material.color.set(0xff0000)
  window1.material.needsUpdate = true
}
function burgundyW() {
  window1.material.map = ""
  window1.material.color.set(0x800020)
  window1.material.needsUpdate = true
}
function DGW() {
  window1.material.map = ""
  window1.material.color.set(0xA9A9A9)
  window1.material.needsUpdate = true
}
function DBW() {
  window1.material.map = ""
  window1.material.color.set(0x654321)
  window1.material.needsUpdate = true
}
function blackW() {
  window1.material.map =""
  window1.material.color.set(0x000000)
  window1.material.needsUpdate = true
}
// -------------------------------------- SHED WINDOWS TEXTURE --------------------------------------- END **




function digging() {
var loader = new THREE.JSONLoader();
            loader.load("Shed/exterior/shovel.json", handle_load_shovel)  
}

function workbench() {
  var loader = new THREE.JSONLoader();
   loader.load("Shed/table2.json",handle_load_table2) 
     
}
// ******************************************************************** BUTTON FUNCTIONS *********************************************************************************** END *******************
// **************************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************************
// **************************************************************************************************************************************************************************************************

function addSizeWindowBig() {
  loadingBigWindow1()
  loadingBigWindow2()
  loadingBigShutter1()
  loadingBigShutter2()
}
function doubleDoorX(which){
  if ( which == "standard") {
    loadingDoubleStdCurved()
    loadingDoubleStandardX()
  } else {
    loadingDoubleWide()
    loadingDoubleWideX()

  }
  try {
    scene.remove(doorr)
  } catch {
    console.log("no doorr to remove in doubledoor shedbuilder function")
  }



}

/*function doubleDoorr() {
  var gettingDor = document.getElementById("doubleDoor")
  gettingDor.style.display = "block"
  document.getElementById("steelDoor").style.display = "none"

  document.getElementById("fiberGlass").style.display = "none"
  document.getElementById("fiberGlass2").style.display = "none"
    loadingHinges12()
  loadingDoubleDoor()
  loadingTransom25()
  loadingDoubleDoorWindow()
  try {
    scene.remove(doorr)

  }
  catch {
    console.log("no door to remove")
  }
 
  document.getElementById(wht).style.display = "block"
  document.getElementById(whtnt).style.display = "none"
  if ( wht == 'fiberGlass') {
    loadingFiberGlass1()
  }
  else {
    loadingFiberGlass2()
  }
  loadingFiberStdHinges()
  loadingFiberOut25()
  try {
    scene.remove(doubleDoor)
  } catch {
    console.log("no double door found")
  }
  try {
    scene.remove(hinge)
  } catch {
    console.log("no hinge found")
  }
  try {
    scene.remove(trimm)
    scene.remove(outsideTrimm)

  } catch {
    console.log("no trim or outsidetrim found")
  }
  try {
    scene.remove(doubleDoorWindow)
  } catch {
    console.log("No double window found in door")
  }
  try { 
    scene.remove(doubleStandardX)
  } catch {
    console.log("no X found")
  }
  addSize(X,Z)
  

}
*/

//// DOOR MODELS & FUNCTIONS ////////////////////////////////////////////

function applySize(x,y) {
  if ( x == 'big') {
    j = 1500
  for ( i = 0; i< moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Window")) {

        setTimeout(addingWinModel,j,'bigWin',moveListo[i])
        j+= 1500
        
      }

    }catch {
      console.log("fd")
    }
  }

} else {
  j = 500
  for ( i = 0; i< moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Window")) {

        setTimeout(addSizeWindow,j,x,y,moveListo[i])
        j+= 500
        
      }

    }catch {
      console.log("fd")
    }
  }
}

}
function loadingWinType(el){
  j = 500
  for ( i = 0; i< moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Window")) {

        setTimeout(addingWinModel,j,el,moveListo[i])
        j+= 500
        
      }

    }catch {
      console.log("fd")
    }
  }
}

function loadingBoxP(){
  j = 500
  for ( i = 0; i< moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Window")) {

        setTimeout(addingWindowBox,j,true,moveListo[i])
        j+= 500
        
      }

    }catch {
      console.log("fd")
    }
  }
}

function loadingTrimP(el) {
  j = 500
  for ( i = 0; i< moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Window")) {

        setTimeout(addingShutterModel,j,el,moveListo[i])
        j+= 500
        
      }

    }catch {
      console.log("fd")
    }
  }
}
function DoorFunc() {
  if (FirstTime == true) {
    alert("Select a door model and accessories \nIt will apply to all doors you will add later unless you choose to modify a door individually.")
    FirstTime = false;
  }
}

function SteelHinges(x) {
  var element4 = "steel/" + x
  j = 600
  for (i = 0; i < moveListo.length; i++ ) {
    try {
      if ( moveListo[i].includes("Door")) {
        setTimeout(replacingModel,j,moveListo[i],4,doorElement4)
        j+= 600
      }

    } catch {
      console.log("")
    }
  }

}
function steeldoor() {
  var replaceListo = []
  document.getElementById("steelDoor").style.display = "block"
  var gettingDor = document.getElementById("doubleDoor")
  gettingDor.style.display = "none"
  document.getElementById("fiberGlass").style.display = "none"
  doorElement1 = "steel/steelDoor"
  doorElement2 = "transparent"
  doorElement3 = "transparent"
  doorElement4 = "steel/hinges6"
  doorElement5 = "steel/raft"
  doorElement6 = "Steel door"

  
  for ( i = 0;i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Door")) {
        replaceListo.push(moveListo[i])
       // setTimeout(replaceDoor,j,'Steel Double 54 inch',moveListo[i])
      
      }
    } catch {
      console.log("fd")
    }
  }
  replaceDoor("Steel Double 54 inch",replaceListo)
}

function standardDoor() {
  doorElement1 = "door"
  doorElement2 = "trim"
  doorElement3 = "outsideTrim"
  doorElement4 = "hinges"
  doorElement5 = "raft"
  doorElement6 = "Standard door"
  var replaceListo = []
 for ( i = 0;i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Door")) {
        replaceListo.push(moveListo[i])
       // setTimeout(replaceDoor,j,'Steel Double 54 inch',moveListo[i])
      
      }
    } catch {
      console.log("fd")
    }
  }
  replaceDoor("Standard door",replaceListo)
}



function fiberglass(x) {
  document.getElementById("steelDoor").style.display = "none"
  var gettingDor = document.getElementById("doubleDoor")
  gettingDor.style.display = "none"
  document.getElementById("fiberGlass").style.display = "block"
  doorElement1 = "fiberGlass/"+x
  doorElement2 = "transparent"
  doorElement3 = "fiberGlass/outside25"
  doorElement4 = "fiberGlass/hinges6"
  doorElement5 = "fiberGlass/raft"
  doorElement6 = "Fiberglass door" //Fiberglass Double 54 inch'
  var replaceListo = []
  for ( i = 0;i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Door")) {
        replaceListo.push(moveListo[i])
       // setTimeout(replaceDoor,j,'Steel Double 54 inch',moveListo[i])
      
      }
    } catch {
      console.log("fd")
    }
  }
  replaceDoor("Fiberglass Double 54 inch'",replaceListo)
}


function fiberglassDoor(x) {
  doorElement1 = "fiberGlass/" + x
    j = 600
  for (i = 0; i < moveListo.length; i++ ) {
    try {
      if ( moveListo[i].includes("Door")) {
        setTimeout(replacingModel,j,moveListo[i],1,doorElement1)
        j+= 600
      }

    } catch {
      console.log("")
    }
  }
}

function FiberOut(x) {
  doorElement3 = "fiberGlass/" + x

    j = 600
  for (i = 0; i < moveListo.length; i++ ) {
    try {
      if ( moveListo[i].includes("Door")) {
        setTimeout(replacingModel,j,moveListo[i],3,doorElement3)
        j+= 600
      }

    } catch {
      console.log("")
    }
  }
}

function FiberHinges(x) {
  doorElement4 = "fiberGlass/" + x
    j = 600
  for (i = 0; i < moveListo.length; i++ ) {
    try {
      if ( moveListo[i].includes("Door")) {
        setTimeout(replacingModel,j,moveListo[i],4,doorElement4)
        j+= 600
      }

    } catch {
      console.log("")
    }
  }

}
function doubleDoorr() {
  var gettingDor = document.getElementById("doubleDoor")
  gettingDor.style.display = "block"
  document.getElementById("steelDoor").style.display = "none"
  document.getElementById("fiberGlass").style.display = "none"

  doorElement1 = "doubleDoor/double"
  doorElement2 = "doubleDoor/standardX"
  doorElement3 = "doubleDoor/transom3.5"
  doorElement4 = "doubleDoor/hinges6"
  doorElement5 = "doubleDoor/raft"
  doorElement6 = "Doubledoor"

  var replaceListo = []
  for ( i = 0;i<moveListo.length;i++) {
    try {
      if ( moveListo[i].includes("Door")) {
        replaceListo.push(moveListo[i])
       // setTimeout(replaceDoor,j,'Steel Double 54 inch',moveListo[i])
      
      }
    } catch {
      console.log("fd")
    }
  }
  replaceDoor("Double door 4'",replaceListo)
}

function doubleOutside(x) {
  doorElement3 = "doubleDoor/" + x

  j = 600
  for (i = 0; i < moveListo.length; i++ ) {
    try {
      if ( moveListo[i].includes("Door")) {
        setTimeout(replacingModel,j,moveListo[i],3,doorElement3)
        j+= 600
      }

    } catch {
      console.log("")
    }
  }
}

function doubleTrim(x) {
  if ( x == "transparent") {
    doorElement2 = "transparent"
  }
  else {
  doorElement2 = "doubleDoor/" + x
}
j = 600
  for (i = 0; i < moveListo.length; i++ ) {
    try {
      if ( moveListo[i].includes("Door")) {
        setTimeout(replacingModel,j,moveListo[i],2,doorElement2)
        j+= 600
      }

    } catch {
      console.log("")
    }
  }
}

function doubleHinges(x){
  doorElement4 = "doubleDoor/" + x
  j = 600
  for (i = 0; i < moveListo.length; i++ ) {
    try {
      if ( moveListo[i].includes("Door")) {
        setTimeout(replacingModel,j,moveListo[i],2,doorElement4)
        j+= 600
      }

    } catch {
      console.log("")
    }
  }
}

function fiberGlass(wht,whtnt) {

  try {
    scene.remove(doubleDoorWindow)
  } catch {
    console.log("no double window found")
  }
  try {
    scene.remove(doorr)

  }
  catch {
    console.log("no door to remove")
  }
  document.getElementById("steelDoor").style.display = "none"
  var gettingDor = document.getElementById("doubleDoor")
  gettingDor.style.display = "none"
  document.getElementById(wht).style.display = "block"
  document.getElementById(whtnt).style.display = "none"
  if ( wht == 'fiberGlass') {
    loadingFiberGlass1()
  }
  else {
    loadingFiberGlass2()
  }
  loadingFiberStdHinges()
  loadingFiberOut25()
  try {
    scene.remove(doubleDoor)
  } catch {
    console.log("no double door found")
  }
  try {
    scene.remove(hinge)
  } catch {
    console.log("no hinge found")
  }
  try {
    scene.remove(trimm)
    scene.remove(outsideTrimm)

  } catch {
    console.log("no trim or outsidetrim found")
  }
  try {
    scene.remove(doubleDoorWindow)
  } catch {
    console.log("No double window found in door")
  }
  try { 
    scene.remove(doubleStandardX)
  } catch {
    console.log("no X found")
  }
  addSize(X,Z)





}

function steelDoor() {
   var gettingDor = document.getElementById("doubleDoor")
  gettingDor.style.display = "none"
  document.getElementById("fiberGlass").style.display = "none"
  document.getElementById("fiberGlass2").style.display = "none"
  document.getElementById("steelDoor").style.display = "block"

  loadingSteelDoor()
  loadingSteelStdHinges()
  try {
    scene.remove(doubleDoorWindow)

  }
  catch {
    console.log("no double window found")
  }
  try {
    scene.remove(doorr)
  } catch {
    console.log("no double door found")
  }
  try {
    scene.remove(hinge)
  } catch {
    console.log("no hinge found")
  }
  try {
    scene.remove(trimm)
    scene.remove(outsideTrimm)

  } catch {
    console.log("no trim or outsidetrim found")
  }
  try {
    scene.remove(doubleDoorWindow)
  } catch {
    console.log("No double window found in door")
  }
  try { 
    scene.remove(doubleStandardX)
  } catch {
    console.log("no X found")
  }
  addSize(X,Z)
}



function removeInsidedoor(xx) { 

  let doormin,dorrmax,r2pos,ref,window2max,window2min,rightpos

  for ( obj of listObj) {
     try {
      if ( obj.name.includes("Front")) {
        
        doormin = parseFloat(getPos(obj.raft,"boxmin"))
        doormax = parseFloat(getPos(obj.raft,"boxmax"))
      
        for ( j = 0;j<r2.length;j++) {
      r2pos = parseFloat(getPos(r2[j],"boxmin"))
  
       if ( r2pos <= doormax ) {
      if ( r2pos >= doormin ) {
        //alert("yep")
        //alert(typeof(r2pos) )

       //alert("Door min : " + doormin + "  Door max : " + doormax + "framepos : " + r2pos)
      
        
       scene.remove(r2[j])
       r2[j].name = ""
      
     
    
      }
    }
     }



}else if ( obj.name.includes("Back")) {
       
        doormin = parseFloat(getPos(obj.raft,"boxmin"))
        doormax = parseFloat(getPos(obj.raft,"boxmax"))
     
        for ( j = 0;j<r2.length;j++) {
      r2pos = parseFloat(getPos(r2[j],"boxmin"))


       if ( r2pos <= doormax ) {
      if ( r2pos >= doormin ) {
        
       
    
       
       scene.remove(r2b[j])
       r2b[j].name = ""
      
           
      }
    }
     }
   }else if ( obj.name.includes("Right")) {
       
        window2min = parseFloat(getPos(obj.raft, "boxminz"))
        window2max = parseFloat(getPos(obj.raft,"boxmaxz"))
     
        for (o=0;o<right.length;o++) {
      rightpos = parseFloat(getPos(right[o], "boxminz"))


       if ( rightpos <= window2max ) {
      if ( rightpos >= window2min ) {
        
        //alert("yep")
        //alert(typeof(r2pos) )

       //alert("Door min : " + doormin + "  Door max : " + doormax + "framepos : " + r2pos)
    
        
       scene.remove(right[o])
       right[o].name = ""
      
     
      }
    }
     }
   
 
  }else if ( obj.name.includes("Left")) {
       
        window2min = parseFloat(getPos(obj.raft, "boxminz"))
        window2max = parseFloat(getPos(obj.raft,"boxmaxz"))
     
        for (k=0;k<left.length;k++) {
          rightpos = parseFloat(getPos(left[k], "boxminz"))


       if ( rightpos <= window2max ) {
      if ( rightpos >= window2min ) {
        
        //alert("yep")
        //alert(typeof(r2pos) )

       //alert("Door min : " + doormin + "  Door max : " + doormax + "framepos : " + r2pos)
    
        
       scene.remove(left[k])
       left[k].name = ""
      
     
      }
    }
     }
   }
 
  
}catch {
    console.log("ds")
   }

}


  /*   REDOOOOO THIS !!
  doormin = parseFloat(getPos(door,"boxmin"))
  doormax = parseFloat(getPos(door,"boxmax"))
  dooz = parseFloat(getPos(door,"y"))

  windowmin = parseFloat(getPos(window1,"boxmin"))
  windowmax = parseFloat(getPos(window1,"boxmax"))



 

  for ( i = 0;i<r2.length;i++) {
    r2pos = parseFloat(getPos(r2[i],"boxmin"))
    sooz = parseFloat(getPos(r2[i]),"y")

    
    if ( r2pos <= doormax ) {
      if ( r2pos >= doormin ) {
        //alert("yep")
        //alert(typeof(r2pos) )

       //alert("Door min : " + doormin + "  Door max : " + doormax + "framepos : " + r2pos)
       scene.remove(r22[i])
      }
    }
      if (r2pos <= windowmax && r2pos >= windowmin) {
        scene.remove(r22[i])
      

    }
  // 
  }
  window2min = parseFloat(getPos(window2, "boxminz"))
  window2max = parseFloat(getPos(window2,"boxmaxz"))
  for (i=0;i<right.length;i++) {
    rightpos = parseFloat(getPos(right[i], "boxminz"))
    if (rightpos <= window2max && rightpos >= window2min) {
      scene.remove(right2[i])
    }
  }
 
  


*/
}

/*
function standardDoor() {
  var gettingDor = document.getElementById("doubleDoor")
  gettingDor.style.display = "none"


  document.getElementById("fiberGlass").style.display = "none"
  document.getElementById("fiberGlass2").style.display = "none"
  document.getElementById("steelDoor").style.display = "none"
  
  loadingHinges()
  loadingoutsideTrim()
  loadingTrim()

  try {
    scene.remove(doubleDoorWindow)

  }
  catch {
    console.log("no double window found")
  }
  try {
    scene.remove(doorr)
  } catch {
    console.log("no double door found")
  }
  try {
    scene.remove(hinge)
  } catch {
    console.log("no hinge found")
  }
  try {
    scene.remove(trimm)
    scene.remove(outsideTrimm)

  } catch {
    console.log("no trim or outsidetrim found")
  }
  try {
    scene.remove(doubleDoorWindow)
  } catch {
    console.log("No double window found in door")
  }
  try { 
    scene.remove(doubleStandardX)
  } catch {
    console.log("no X found")
  }
  addSize(X,Z)

}
*/

function loadCupola(element) {

  if (element == "None") {
    try {
      scene.remove(cupola)
      scene.remove(cupolaRef)
    } catch {
      //pass
    }
  } else {
  loadingCupolaRef(element)
}
  //loadingCupola(element)
  /*
  if ( element == "cupola") {
  loadingCupolaShingle()
}
*/
}

function consoleLog(list) {
  for ( i = 0;i<list.length;i++) {
    console.log(list[i].name)
  }
}

function loadingHtmlSidingColors() {
  if ( mySiding == "duratemp" || mySiding == "hardie") {
        var htmlSidingColor1 = document.getElementById("Duratemp/L.P/HardyPlank")
        htmlSidingColor1.style.display = "block"
        var htmlS2 = document.getElementById("White pine")
        htmlS2.style.display = "none"
        var htmlS3 = document.getElementById("L.P")
        htmlS3.style.display = "none"
        var htmlS5 = document.getElementById("Vinyl")
        htmlS5.style.display = "none"

  } else if (mySiding == "White pin") {
    var htmlS2 = document.getElementById("White pine")
        htmlS2.style.display = "block"
    var htmlSidingColor1 = document.getElementById("Duratemp/L.P/HardyPlank")
        htmlSidingColor1.style.display = "none"
        
        var htmlS3 = document.getElementById("L.P")
        htmlS3.style.display = "none"
        var htmlS5 = document.getElementById("Vinyl")
        htmlS5.style.display = "none"

  } else if (mySiding == "vinyl") {
    var htmlSidingColor1 = document.getElementById("Duratemp/L.P/HardyPlank")
        htmlSidingColor1.style.display = "none"
        var htmlS2 = document.getElementById("White pine")
        htmlS2.style.display = "none"
        var htmlS3 = document.getElementById("L.P")
        htmlS3.style.display = "none"
        var htmlS5 = document.getElementById("Vinyl")
        htmlS5.style.display = "block"
  } else if ( mySiding == "LP") {
    var htmlSidingColor1 = document.getElementById("Duratemp/L.P/HardyPlank")
        htmlSidingColor1.style.display = "block"
        var htmlS2 = document.getElementById("White pine")
        htmlS2.style.display = "none"
        var htmlS3 = document.getElementById("L.P")
        htmlS3.style.display = "block"
        var htmlS5 = document.getElementById("Vinyl")
        htmlS5.style.display = "none"
  } else {
    var htmlSidingColor1 = document.getElementById("Duratemp/L.P/HardyPlank")
        htmlSidingColor1.style.display = "none"
        var htmlS2 = document.getElementById("White pine")
        htmlS2.style.display = "none"
        var htmlS3 = document.getElementById("L.P")
        htmlS3.style.display = "none"
        var htmlS5 = document.getElementById("Vinyl")
        htmlS5.style.display = "none"
  }
}
//++++++++++++++++++++++++++++++++++++++++ CALL FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
       environment()                                                                                                  //                                                                                       //
       lights()                                                                                                       //
       window.addEventListener( 'resize', onWindowResize, false );                                                    //
       ground()  
       controls()   
       loadingHtmlSidingColors()
                                                                                                                      //
      // loadShed()  
                                                                                                                      //
      // dragAndDrop()  
        
     
                                                                                         //
       animate()   

                                                                                                                      //
//++++++++++++++++++++++++++++++++++++++++ CALL FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// ################################################ MAIN FUNCTIONS ################################################################################ START #############################################
//---------------------------------------- CREATING THE ENVIRONMENT : CAMERA - SCENE - RENDERER -------------------------------------------------------- START --------//
            function environment() {
            camera, controls,scene,renderer
            var composer
            scene = new THREE.Scene()
            scene.updateMatrixWorld(true);
            scene.background = new THREE.Color( 0x000000 );// 0xcce0ff 
			      scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
            camera = new THREE.PerspectiveCamera(48,(window.innerWidth)/(window.innerHeight),0.1,3000)

            

            camera.position.set( 20, 30, 40 );

            camera.fov = 18;

            
            var w = 1920;
            var h = 1080;
            var fullWidth = w * 2.78;
            var fullHeight = h * 1.5;

// A
            camera.setViewOffset( fullWidth, fullHeight, w * 0.85, h * 0.27, w, h );
            camera.updateProjectionMatrix();
            renderer = new THREE.WebGLRenderer({canvas: document.getElementById("myCanvas"),antialias:true,alpha:true})
            //renderer.setSize(window.innerWidth/1.18, window.innerHeight);
            renderer.setSize(window.innerWidth, window.innerHeight,false);
            renderer.setPixelRatio(window.devicePicelRatio);
            renderer.gammaOutput = true;
			      renderer.shadowMap.enabled = true;

            scene.children.reverse();   

           
            


            displaygui()
              document.addEventListener( 'mousedown', onDocumentMouseDown );


        var render = function () {
            requestAnimationFrame( render );
            camera.lookAt( scene.position );
            renderer.render( scene, camera );
        };

        render();
     }
        // Start
//---------------------------------------- CREATING THE ENVIRONMENT : CAMERA - SCENE - RENDERER -------------------------------------------------------- END--------//






//---------------------------------------- CONTROLS : TO ZOOM AND ROTATE CAMERA WITH MOUSE-------------------------------------------------------- START-------//
            function controls() {
            
  
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;

            controls.dampingFactor = 0.8;
            //controls.screenSpacePanning = false;
            controls.minDistance = 12;
            controls.maxDistance = 100;
            controls.maxPolarAngle = Math.PI/2.05;  
            controls.autoRotate = false;
            //controls.enablePan = false;
            //controls.target = new THREE.Vector3(0,0,0)

            
            } 
//---------------------------------------- CONTROLS : TO ZOOM AND ROTATE CAMERA WITH MOUSE-------------------------------------------------------- END------//






//---------------------------------------- LIGHT-------------------------------------------------------- START-------//
        function lights() {
        scene.add( new THREE.AmbientLight( 0x666666 ) );
        var light = new THREE.DirectionalLight( 0xdfebff, 1 );
        light.position.set( 50, 200, 100 );
        light.position.multiplyScalar( 1.3 );
        light.castShadow = true;
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;

        var light2 = new THREE.PointLight(0xffffff,1,5)
      
        light2.position.z = 1
        light2.position.y = 1
        
        light2.castShadow = true;

           var light3 = new THREE.PointLight(0xffffff,1,5)
      
        light3.position.z = 1
        light3.position.y = 1
        light3.position.x = 1.5
        
        light2.castShadow = false;
         
        //scene.add(light2)
        


        var lights = new THREE.PointLight( 0xdfebff, 1 )
        scene.add( lights );
        lights.translateX(3)

      
        var lights2 = new THREE.PointLight( 0xdfebff, 1 )
        scene.add( lights2 );
        lights2.translateX(-3)
        
        
        var lights4 = new THREE.PointLight( 0xdfebff, 1 )
        scene.add( lights4 );
        lights4.translateZ(-3)

        scene.add( light );
      }
//---------------------------------------- LIGHT-------------------------------------------------------- END-------//
       





//---------------------------------------- RESIZE ENVIRONMENT ON WINDOW RESIZE-------------------------------------------------------- START-------//
        function onWindowResize() {
        camera.aspect = (window.innerWidth) / (window.innerHeight)
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight,false);
      }
//---------------------------------------- RESIZE ENVIRONMENT ON WINDOW RESIZE-------------------------------------------------------- END-------//


function theTest() {
  window1.geometry.computeBoundingBox();
 boundingBox = window1.geometry.boundingBox;
position = new THREE.Vector3();
position.subVectors( boundingBox.max, boundingBox.min );
position.multiplyScalar( 0.5 );
position.add( boundingBox.min );
position.applyMatrix4( window1.matrixWorld );
//alert(position.y + " " + position.x)
//alert(position.x)



}




       
//---------------------------------------- DRAG AND DROP OBJECTS -------------------------------------------------------- START-------//   
         function dragAndDrop() {
         var dragControls = new THREE.DragControls( objects, camera, renderer.domElement );
          dragControls.addEventListener( 'dragstart', function () {
          setTimeout(theTest,50)
          controls.enabled = false;
          } );
          dragControls.addEventListener( 'dragend', function () {
          controls.enabled = true;
          } );
          }
//---------------------------------------- DRAG AND DROP OBJECTS -------------------------------------------------------- END-------//






//---------------------------------------- LOADING THE GROUND -------------------------------------------------------- START-------//
        function ground() {
      

        var loaderGround = new THREE.TextureLoader();
        groundTexture = loaderGround.load( 'sand.jpg' );
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set( 2, 2 );
        groundTexture.anisotropy = 16;

   ;
        groundTexture2 = loaderGround.load( 'Textures/back7_NRM.jpg' );
        groundTexture2.wrapS = groundTexture2.wrapT = THREE.RepeatWrapping;
        groundTexture2.repeat.set( 2, 2 );
        groundTexture2.anisotropy = 16;



        groundMaterial = new THREE.MeshLambertMaterial( {map: groundTexture,wireframe:false} )
        
        wireframeLinewidth: 5
        wireframeLinejoin:"round"
        wireframeLinecap :"round"
        meshGround = new THREE.Mesh( new THREE.CircleGeometry( 5, 32 ), groundMaterial );
        meshGround.geometry.radius = 5
        meshGround.position.set(0,0,0)
        meshGround.rotation.x = - Math.PI / 2;
        meshGround.receiveShadow = true;
        meshGround.castShadow = false;
        //meshGround.material.normalMap = groundTexture2;

       groundMaterial.wireframe = true
                groundMaterial.wireframeLinewidth = 500
                groundMaterial.wireframeLinejoin ="round"
                groundMaterial.wireframeLinecap = "round"
                groundMaterial.wireframe = true
                groundMaterial.map = ""
                switchb = false
                groundMaterial.needsUpdate = true
                scene.background = new THREE.Color( 0x000000);

        scene.add( meshGround );
       
      }
//---------------------------------------- LOADING THE GROUND -------------------------------------------------------- END-------//


        

//---------------------------------------- LOADING SHED ELEMENTS-------------------------------------------------------- START-------//
           
            

         
            /*
            var loader = new THREE.JSONLoader();

           
            loader.load("Shed/floor.json",handle_load_floor1)
            loader.load("Shed/floorFraming.json",handle_load_floor2)
            loader.load("Shed/front.json",handle_load_front)
            loader.load("Shed/shell.json",handle_load_shell)
            loader.load("Shed/shingles.json",handle_load_shingle)
           

            loader.load("Shed/door/hardware.json",handle_load_doorHardware)
            loader.load("Shed/door/trim.json", handle_load_doorTrim)
            loader.load("Shed/door/outside_trim.json",handle_load_doorOutsideTrim)
            loader.load("Shed/door/plywood.json",handle_load_doorPlywood)

            loader.load("Shed/window2.json",handle_load_window2)
            loader.load("Shed/table1.json",handle_load_table1)

            loader.load("Shed/windows/shutter3.json",handle_load_shutter1)
            loader.load("Shed/windows/shutter2.json",handle_load_shutter2)

            loader.load("Shed/outside_trim.json",handle_load_outside_trim)

            //loader.load("cc.json",handle_load_shell)
            */
         
     









           

          

               function handle_load_outside_trim(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                outsideTrim = new THREE.Mesh(geometry,material);
                outsideTrim.castShadow = true
                outsideTrim.material.color.set(0x53625b)
                scene.add(outsideTrim);
                objects.push(outsideTrim)
                }

             function handle_load_shutter1(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                shutter1 = new THREE.Mesh(geometry,material);
                shutter1.castShadow = true
                shutter1.material.color.set(0xa3a3a3)
                scene.add(shutter1);
                objects.push(shutter1)
                }

            function handle_load_shutter2(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                shutter2 = new THREE.Mesh(geometry,material);
                shutter2.castShadow = true
                shutter2.material.color.set(0xa3a3a3)
                scene.add(shutter2);
                objects.push(shutter2)
                }



             function handle_load_doorHardware(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                doorHardware = new THREE.Mesh(geometry,material);
                doorHardware.castShadow = true
                doorHardware.material.color.set(0x000000)
                scene.add(doorHardware);
                objects.push(doorHardware)
                }
           
            function handle_load_doorTrim(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.5});
                doorTrim = new THREE.Mesh(geometry,material);
                doorTrim.castShadow = true
                 doorTrim.material.color.set(0xeceef3)
       // window1.material.needsUpdate = true
                scene.add(doorTrim);
                objects.push(doorTrim)

                }

             function handle_load_doorOutsideTrim(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.2});
                doorOutsideTrim = new THREE.Mesh(geometry,material);
                doorOutsideTrim.castShadow = true
                scene.add(doorOutsideTrim);
                doorOutsideTrim.material.color.set(0xeceef3)
                objects.push(doorOutsideTrim)
                }

                 function handle_load_doorPlywood(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                door = new THREE.Mesh(geometry,material);
                door.castShadow = true
                door.material.color.set(0xeceef3)
                scene.add(door);
                objects.push(door)
                }


            
            function handle_load_shovel(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                shovel = new THREE.Mesh(geometry,material);
                shovel.castShadow = true
                scene.add(shovel);
                objects.push( shovel);   //=> TO DRUG AND DROP OBJECTS
                const texture = new THREE.TextureLoader().load("Textures/digging.jpg")
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 1, 1 );
        texture.anisotropy = 16;
        shovel.material.map = texture
        shovel.material.needsUpdate = true
      }
            function handle_load_trac(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                trac = new THREE.Mesh(geometry,material);
                trac.castShadow = true
                scene.add(trac);
                const texture = new THREE.TextureLoader().load("Textures/lawnmower.jpg")
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 1, 1 );
        texture.anisotropy = 16;
        trac.material.map = texture
        trac.material.needsUpdate = true
                objects.push( trac);   //=> TO DRUG AND DROP OBJECTS
                }

                
            
            function handle_load(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                mesh = new THREE.Mesh(geometry,material);
                mesh.castShadow = true
                scene.add(mesh);
                objects.push( mesh);   //=> TO DRUG AND DROP OBJECTS
                }
           
              function handle_load_window1(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                window1 = new THREE.Mesh(geometry,material);
                window1.castShadow = true
                scene.add(window1);
                objects.push(window1)
                }
              function handle_load_window2(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                window2 = new THREE.Mesh(geometry,material);
                window2.castShadow = true
                scene.add(window2);
                objects.push(window2)
                }
              function handle_load_table1(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                table1 = new THREE.Mesh(geometry,material);
                table1.castShadow = true
                scene.add(table1);
                objects.push(table1)
                }
              function handle_load_table2(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0xeceef3,emissiveIntensity:0.1});
                table2 = new THREE.Mesh(geometry,material);
                table2.castShadow = true
                scene.add(table2);
                }
              function handle_load_shell(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false});
                shell = new THREE.Mesh(geometry,material);
                shell.castShadow = true
               
                scene.add(shell);
                objects.push(shell)

                }
                function handle_load_front(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false});
                front = new THREE.Mesh(geometry,material);
                front.castShadow = true
               
                scene.add(front);
                object.push(front)
                }
              function handle_load_floor1(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0x48AD2D,emissiveIntensity:0.1});
                floor1 = new THREE.Mesh(geometry,material);
                floor1.castShadow = true
                scene.add(floor1);
                object.push(floor1)
                }
              function handle_load_floor2(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0x48AD2D,emissiveIntensity:0.1});
                floor2 = new THREE.Mesh(geometry,material);
                floor2.castShadow = true
                scene.add(floor2);
                object.push(floor2)
                }
              function handle_load_shingle(geometry,materials) {
                material = new THREE.MeshLambertMaterial({transparent:true,opacity:1,side:THREE.DoubleSide,transparent:true,vertexColors:THREE.VertexColors,wireframe:false,emissive:0x48AD2D,emissiveIntensity:0.1});
                shingle = new THREE.Mesh(geometry,material);
                shingle.castShadow = true
                scene.add(shingle);
                object.push(shingle)
                }
//---------------------------------------- LOADING THE GROUND -------------------------------------------------------- END-------//






//---------------------------------------- LOOP INTO RENDER ! -------------------------------------------------------- START-------//
                function render() {
                renderer.render(scene,camera);
                //requestAnimationFrame(render);
                }
                function animate() {
                requestAnimationFrame(animate);
                controls.update()
                render();
                }

//---------------------------------------- LOOP INTO RENDER ! -------------------------------------------------------- START-------//


       

           
            


				



          
            
         
            
         
 