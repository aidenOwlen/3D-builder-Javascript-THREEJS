 


cornerFrontLeft ="" 
cornerBackLeft =""
cornerFrontRight = ""
cornerBackRight = ""
var window1,window2,shutter1,shutter2,plywood,tests
yy = 1.77
BA3 = false
//BA3PLAT = falsescene.add(mesh)  
ba3 = []
r2b = []
var specialLeanto = []
var ShingHighModel = ""
var objectsPushed = []

var plywoodStyle = "none"
var Joists = '16 " O.C ( standard )'
var COLOR_OF_GARAGE = "0xa3a3a3"
var FLOOR_4x4 = "4x4"

var loadingBack = "nope"
var loadingFront = "nope"
var dormerSize
var shingleClones = []
var CAPSTYLE = "cape"
var pdListe = []
var ventsModel = "8x8metal"
var pdd
var backDoor = ""
var ventStyle = "None"
var loadingRight = "nope"
var highValue = 1
var doorClose 
var coringStyle = "Metal"
var dormerModel = "standard"
var specialFront = ""

var roofingColor = 0xa3a3a3

var GARAGEMODEL = false ////////////////////////////////
var GARAGESIZE = "10/"
var GARAGEHINGE = "hinges"
var GARAGECLOSE = "close"
var GARAGEDOOR = "door"
var GARAGERAFTER = "rafter12"
var GARAGETRIM = "miratecTrim2.5"
var GARAGEGLASS = "normal"
var GARAGEOPENING = "Square"


var oldLefty,oldRighty
var loftDict = {}
var loft2Dict = {}
var loadingLeft = "nope"
var listObj = []
var shellmaxpos = 2.050800085067749
var shellminpos = -1.0987999439239502
var overhangStyle = false
var diviserLeft
var diviserRight
var windowPushedFront = 1 
var CountClose = 0
var doorTrim = "trimStd"
var loadingTheTrim = false
var highwal = false


var doorHinge = "hinges"
var posmaxDO 
var posYDO
var objects = []

var DOORSTYLE = "standard/"
var DOORSIZE = "4/"

var DOORTYPE = "door"
var doorTrim = "trimStd"
var doorHinge = "hinges"

var pitch8a
var sizeWDX = "1827/"
var NBWDX = "1/"
var diviser
var pitchD = "5"
var sizeD = "8wide"
var firstPlat = "true"
var SHUTTER = "woodstd"
var TRIMSTYLE = "None"
var workbenches = 0

var pitch12
var FIRSTRUNHIGHBARN = "troue"
var FIRSTRUNLEANTO = "troue"
var FIRSTRUNSTANDART = "troue"
var FIRSTRUNCAPE = "troue"
var FIRSTRUNCABANA = "troue"
var FIRSTRUNCARRIAGE = "troue"
var DOORFRONT = 1

//TEST
var newPlat = ""
var plato = ""
//TEST 

var This_First_Time = true
var DOORBACK = 0
var theOverhang = "none"
var jiyb
var DOORLEFT = 0
var FIRSTRUNGARAGE = "troue"
var dictoColor = {}
var manager 
var platLeft = []
var platRight = []

var man
var backty
var manCloseLeft
var manCloseRight
var manShingles

X = 8
Z = 10
var boardMiddle = []
var DOORRIGHT = 0
var PitchPath = "5pitch"
var REPLACE = false
var windowPushedBack = 1
var addingShutterModelCall = false;
var windowPushedLeft = 1 
var myListomesh = []
ENDLOADING = true;
var windowPushedRight = 1 
//var objectItemsMesh = []
//var objectItems = []
var doorPushed = 0
var doorPushedFront = 1
var doorPushedLeft = 1 
var UPDATINGDOOR = false;
var doorPushedRight = 1
var doorPushedBack = 1
//var objectsList = [("FrontWindow1",window1),"SideWindow1","FrontDoor"]
trim1Mesh = "hello"
win1Mesh = "hello"
win1Mesh1 = "fd"
win1Mesh2 = "fdsfds"
geo = new THREE.BoxGeometry(1,1,1)
mat = new THREE.MeshLambertMaterial()
overhang = new THREE.Mesh(geo,mat)
vent = overhang
var texture
BackEnd = "False"
resultcorner22 = 0
var plywood
xxx = 0.4063990116119385
yyy = 0.20319998264312744
vvv = 0.3047999143600464
zzz2 = xxx
zZ2 = xxx
zzz = xxx
zZ = xxx
ZZ = 1
BA3OP = "fdsfds"
f2 = []
f22 = []
YY = 1

var moveListo = []

right =[]

rrr2 = 0.4077190160751343 
RRR2 = rrr2 
rR2 = 0

chtayn = "False"

left = []

lll2 = 0.4077190160751343
LLL2 = lll2 
lL2 = 0 
chitone = "False"

p2 = []

r2 = []
rrr = 0.4077190160751343
RRR = rrr 
rR = rrr
rRB = rrr
rRB = rrr 
RAFTROUND2 = "FALSE"

rb2 = []
rb22 = []
NEXTBACK = "FALSE"
Raster2 = "True"

RAFTROUNDBACK = "FALSE"

FILEFLOOR = "framing162"
doorClose = "trimStd2"
  doorTrim = "trimStd1"
/*
var xhttp = new XMLHttpRequest();
  xhttp.open("GET","phpPath.php?action=getPath",false)
  xhttp.send();
Dpath = xhttp.responseText + "/"
*/

ListeOfSizes = ["4x10","4x12","4x14","4x16","6x8","6x10","6x12","6x14","8x8","8x10","8x12","8x14","12x14","12x40","14x20","14x24","8x16","10x10","10x12","10x14","10x16","10x18","10x20","12x12","12x16","12x18","12x20","12x22","12x24","12x26","12x28","12x32","12x34","12x36","14x20","14x24","14x28","14x32","14x36","14x40"]
cleanSize(ListeOfSizes)

Dpath = "Shed2/"
const urlParams = new URLSearchParams(window.location.search);
Dpath = urlParams.get('path') + "/"

//document.getElementById("dropingobj").style.display = "none"

document.getElementById("facecape").style.display = "none"
document.getElementById("carriageDesignerOver").style.display = "none"
document.getElementById("Garage").style.display = "none"
document.getElementById("loft").style.display = "none"
document.getElementById("normalView").style.display = "none"
document.getElementById("overhangsCarriage").style.display = "none"
document.getElementById("ventilminibarn").style.display = "none"
 document.getElementById("addventscabana").style.display = "none"
//document.getElementById("sizeleanto").style.display = "none"
document.getElementById("ramps").style.display = "none"
document.getElementById("doors").style.display = "none"
document.getElementById("windows").style.display = "none"
document.getElementById("layout").style.display = "none"
document.getElementById("dormercape").style.display = "none"
document.getElementById("switchGlass").style.display = "none"
document.getElementById("ventilCabana").style.display = "none"
//document.getElementById("14x20").style.display = "none"
//document.getElementById("14x24").style.display = "none"


if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
  DOORSIZE = "4/"
  document.getElementById("lofting").style.display = "none"
  document.getElementById("ventilminibarn").style.display = "block"

}

if ( Dpath != "highbarn/") {
  document.getElementById("highbarn roof").style.display = "none"
} else {
  document.getElementById("highbarn roof").style.display = "block"
  document.getElementById("overhangs").style.display = "none"
  document.getElementById("pitch").style.display = "none"
  document.getElementById("dormer").style.display = "none"
  document.getElementById("highwal").style.display = "none"
  document.getElementById("dormer").style.display = "none"
  let listosize = ["6x8","8x8","8x10","8x12","8x14","8x16","10x10","10x12","10x14","10x16","10x18","10x20","12x12","12x14","12x16","12x18","12x20","12x22","12x24","12x26","12x28","12x32","12x36","12x40","14x20","14x24","14x28","14x32","14x36","14x40"]
  sizeModel(listosize)
  let sizeRef
  for ( c of listosize) {
  
    sizeRef = document.getElementById(c).innerHTML
    sizeRef = sizeRef[sizeRef.length-2] + sizeRef[sizeRef.length-1]
    sizeRef = sizeRef.replace("x","")
    sizeRef = parseFloat(sizeRef)
    if ( sizeRef > 24) {
      document.getElementById(c).style.color = "red"
    }
   
  }
  document.getElementById("Garage").style.display = "block"
  document.getElementById("Garage").style.color = "blue"
 
}

if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
  document.getElementById("ventil").style.display = "none"
  document.getElementById("overhangs").style.display = "none"
  document.getElementById("pitch").style.display = "none"
  document.getElementById("dormer").style.display = "none"
  let listoSize = ["6x8","8x8","8x10","8x12","8x14","8x16","10x10","10x12","10x14","10x16","10x18","10x20","12x12","12x14","12x16","12x18","12x20","12x22","12x24","12x26","12x28","12x32"]
  document.getElementById("highwal").style.display = "none"
  sizeModel(listoSize)
  for ( c of listoSize) {
  
    sizeRef = document.getElementById(c).innerHTML
    sizeRef = sizeRef[sizeRef.length-2] + sizeRef[sizeRef.length-1]
    sizeRef = sizeRef.replace("x","")
    sizeRef = parseFloat(sizeRef)
    if ( sizeRef > 24) {
      document.getElementById(c).style.color = "red"
      document.getElementById("6x8").style.color = "red"
      document.getElementById("8x8").style.color ="red"
    }
   
  }

}

if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
  document.getElementById("overhangs").style.display = "none"
  document.getElementById("pitch").style.display = "none"
  document.getElementById("dormer").style.display = "none"
  document.getElementById("highwal").style.display = "none"
  overhangStyle = "overRight"
 
  if ( Dpath == "designerCarriage/") {
    document.getElementById("metalcorner").style.display = "none"
    document.getElementById("carriageDesignerOver").style.display = "block"
  } else {
  document.getElementById("overhangsCarriage").style.display = "block"
}
  let listoSize = ["6x8","8x8","8x10","8x12","8x14","8x16","10x10","10x12","10x14","10x16","10x18","10x20","12x12","12x14","12x16","12x18","12x20","12x22","12x24","12x26","12x28","12x32","12x36","12x40","14x20","14x24","14x28","14x32","14x36","14x40"]
  sizeModel(listoSize)
   for ( c of listoSize) {
  
    sizeRef = document.getElementById(c).innerHTML
    sizeRef = sizeRef[sizeRef.length-2] + sizeRef[sizeRef.length-1]
    sizeRef = sizeRef.replace("x","")
    sizeRef = parseFloat(sizeRef)
    if ( sizeRef > 32) {
      document.getElementById(c).style.color = "red"
    }
}
}
if ( Dpath == "designerCarriage/") {
  document.getElementById("noMir").style.display = "none"
  document.getElementById("withMir").style.display = "none"
  document.getElementById("delOv").style.display = "none"
} else if (Dpath == "leanto/") {
  document.getElementById("overhangs").style.display = "none"
  document.getElementById("pitch").style.display = "none"
  document.getElementById("dormer").style.display = "none"
  document.getElementById("highwal").style.display = "none"
  document.getElementById("lofting").style.display = "none"
  let listoSize = ["6x8","6x10","6x12","8x8","8x10","8x12","8x14","8x16","10x10","10x12","10x14"]
  sizeModel(listoSize)
} else if (Dpath == "cabana/") {
  document.getElementById("overhangs").style.display = "none"
  document.getElementById("pitch").style.display = "none"
  document.getElementById("dormer").style.display = "none"
  document.getElementById("highwal").style.display = "none"
  document.getElementById("ventil").style.display = "none"
  //document.getElementById("roofing").style.display = "none"
  document.getElementById("8x10").style.display = "none"
  document.getElementById("10x12").style.display = "none"
  document.getElementById("14x20").style.display = "block"
  document.getElementById("14x24").style.display = "block"
  document.getElementById("ventilCabana").style.display = "block"
  let listoSize = ["8x8","8x10","8x12","8x14","8x16","10x10","10x12","10x14","10x16","10x18","10x20","12x12","12x14","12x18","12x20","12x22","12x24","12x26","12x28","12x36","12x40","14x20"]
  sizeModel(listoSize)
  for ( c of listoSize) {
  
    sizeRef = document.getElementById(c).innerHTML
    sizeRef = sizeRef[sizeRef.length-2] + sizeRef[sizeRef.length-1]
    sizeRef = sizeRef.replace("x","")
    sizeRef = parseFloat(sizeRef)
    if ( sizeRef > 24) {
      document.getElementById(c).style.color = "red"
    }
   
  }
  document.getElementById("8x8").style.color ="red"
  document.getElementById("10x10").style.color="red"
  document.getElementById("12x12").style.color="red"

} else if ( Dpath == "capecode/") {
  document.getElementById("pitch").style.display = "none"
  document.getElementById("dormer").style.display = "none"
  document.getElementById("highwal").style.display = "none"
  document.getElementById("interior").style.display = "none"
  document.getElementById("dormercape").style.display = "block"
  document.getElementById("14x40").style.color = "red"
  document.getElementById("12x40").style.color = "red"
  document.getElementById("facecape").style.display = "block"
  let listosize = ["8x10","8x12","8x14","8x16","10x10","10x12","10x14","10x16","10x18","10x20","12x12","12x14","12x16","12x18","12x20","12x22","12x24","12x26","12x28","12x32","12x36","12x40","14x20","14x24","14x28","14x32","14x36","14x40"]
  sizeModel(listosize)
  DOORSIZE = "30/"
} else if ( Dpath == "Shed2/") {
  
  
  let listosize = ["6x8","8x8","8x10","8x12","8x14","8x16","10x10","10x12","10x14","10x16","10x18","10x20","12x12","12x14","12x16","12x18","12x20","12x22","12x24","12x26","12x28","12x32","12x36","12x40","14x20","14x24","14x28","14x32","14x36","14x40"]
  sizeModel(listosize)
  document.getElementById("Garage").style.display = "block"
  document.getElementById("Garage").style.color = "blue"
  for ( c of listosize) {
  
    sizeRef = document.getElementById(c).innerHTML
    sizeRef = sizeRef[sizeRef.length-2] + sizeRef[sizeRef.length-1]
    sizeRef = sizeRef.replace("x","")
    sizeRef = parseFloat(sizeRef)
    if ( sizeRef > 32) {
      document.getElementById(c).style.color = "red"
    }
   
  }
}  

if ( Dpath == "Garage2/") {
  pitchD = "5"
  sizeD = "12wide"
} 

function Garage() {
  GARAGEMODEL = true
  let listosize = ["12x16","12x18","12x20","12x22","12x24","12x28","12x32","12x36","12x40","14x20","14x24","14x28","14x32","14x36","14x40"]
  cleanSize(ListeOfSizes)
  sizeModel(listosize)
   for ( i=0;i<objectsPushed.length;i+=0) {
    removeObject(objectsPushed[i])
    }
    This_First_Time = false
   

    if ( Dpath == "highbarn/") {
      ShingHighModel = "Right"
      try {
        document.getElementById("peakLeft").style.display = "none"
        document.getElementById("peakStandard").style.display = "none"
      } catch {
        //pass
      }
      try {
        scene.remove(overHigh)
        scene.remove(overHigh2)
        updateSizeCorners()
      } catch {
        //pass
      }
    }

    addSize(12,16,"firstGarage")
  
}

function cleanSize(liste) {
  for ( c of liste) {
    try {
    document.getElementById(c).style.display = "none"
  } catch {
    //alert(c)
  }
  }
}
function sizeModel(liste) {
  for ( c of liste) {
    try {
    document.getElementById(c).style.display = "block"
  } catch {
    //alert(c)
  }
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



/*
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {

    document.getElementById("loadStatus").style.color = "red"
    document.getElementById("loadStatus").innerHTML = " Start loading"


};




manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {

    document.getElementById("loadStatus").style.color = "red"
    document.getElementById("loadStatus").innerHTML = " Loading materials ."
    document.getElementById("loadStatus").innerHTML = " Loading materials .."
    document.getElementById("loadStatus").innerHTML = " Loading materials ..."

};

manager.onLoad = function(url) {
  document.getElementById("loadStatus").style.color = "green"
  document.getElementById("loadStatus").innerHTML = " Completed ✔ "
}

manager.onError = function ( url ) {

    document.getElementById("loadStatus").style.color = "red"
    document.getElementById("loadStatus").innerHTML = " error"

};
*/
var manDrip = new THREE.LoadingManager()
var manShingles = new THREE.LoadingManager();
var manCloseLeft = new THREE.LoadingManager();
var manCloseRight = new THREE.LoadingManager();
var manOverhangs = new THREE.LoadingManager();
var firstLoad = new THREE.LoadingManager();
var manPlat = new THREE.LoadingManager();

var manager = new THREE.LoadingManager();

managerOptions(manDrip)
managerOptions(manager)
managerOptions(manShingles)
managerOptions(manCloseLeft)
managerOptions(manCloseRight)
managerOptions(manOverhangs)
managerOptions(firstLoad)
managerOptions(manPlat)


function managerOptions(man) {
  var man = man
  man.onStart = function (url,itemLoaded,itemsTotal) {
    document.getElementById("loadStatus").style.color = "red"
    document.getElementById("loadStatus").innerHTML = " Start loading"
  };
  man.onProgress = function ( url, itemsLoaded, itemsTotal ) {

    document.getElementById("loadStatus").style.color = "red"
    document.getElementById("loadStatus").innerHTML = " Loading materials ."
    document.getElementById("loadStatus").innerHTML = " Loading materials .."
    document.getElementById("loadStatus").innerHTML = " Loading materials ..."

};
man.onError = function ( url ) {

    document.getElementById("loadStatus").style.color = "red"
    document.getElementById("loadStatus").innerHTML = " error"

};
man.onLoad = function(url) {
  document.getElementById("loadStatus").style.color = "green"
  document.getElementById("loadStatus").innerHTML = " Completed ✔ "


  
   
   if ( man == manOverhangs) {
    
    try {
        overhangsLeft.translateX(resultcorner22)
    overhangsLeft.scale.z = ZZ 
    overhangsRight.translateX(resultreverse22)
    overhangsRight.scale.z = ZZ
      if ( PitchPath == "5pitch") {
        
        overPos1 = getPos(overhangsLeft,"boxminy")
        overhangsLeft.scale.y = XX * 1.05
        overhangsRight.scale.y = XX * 1.05
        overPos2 = getPos(overhangsLeft,"boxminy")
        overhangsLeft.translateY(overPos1 - overPos2*1.04)
        overhangsRight.translateY(overPos1 - overPos2*1.04)
      } else if ( PitchPath == "7pitch") {
        overPos1 = getPos(overhangsLeft, "boxminy")
        overhangsLeft.scale.y = XX * 1.45 
        overhangsRight.scale.y = XX * 1.45
        overPos2 = getPos(overhangsLeft,"boxminy")
        overhangsLeft.translateY(overPos1 - overPos2*1.04)
        overhangsRight.translateY(overPos1 - overPos2*1.04)
      }
      else if ( PitchPath == "6pitch" ) {
         overPos1 = getPos(overhangsLeft, "boxminy")
        overhangsLeft.scale.y = XX * 1.23
        overhangsRight.scale.y = XX * 1.23
        overPos2 = getPos(overhangsLeft,"boxminy")
        overhangsLeft.translateY(overPos1 - overPos2*1.04)
        overhangsRight.translateY(overPos1 - overPos2*1.04)
      }
    } catch {
      console.log("erno in overhang resize in manager")
    }
  }

  if ( UpdatingPitch == true ) {
    /*
  if (man == manShingles ) {
    
    loadingCloseLeft(PitchPath)
    
  }
  if (man == manCloseLeft) {
    loadingCloseRight(PitchPath)
  }
*/
  if (man == manCloseRight) {
    if ( FirstAdd == true) {
        calculatingVertices()
  
      }
    
   
    } 
      }

};
}


if ( Dpath != "carriage/"  && Dpath != "capecode/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/"&& Dpath != "cabana/" && Dpath != "leanto/" && Dpath != "highbarn/" && Dpath != "minibarn/" && Dpath != "vinylbarn/") {
loadDefaultPlat()
loadDefaultLeft1()
loadDefaultLeft2()
loadDefaultRight1()
loadDefaultRight2()
}
if ( Dpath == "leanto/" || Dpath == "capecode/" || Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/" || Dpath == "highbarn/" || Dpath == "minibarn/" || Dpath == "vinylbarn/") {
  loadDefaultPlat()


}


if ( Dpath == "leanto/") {
  loadingwoodpiece() 
}
//loadingFraming()

//loadingFraming2()

loadingBoardLeft()
loadingBoardRight()
loadingBoardBackB()
loadingBoardFrontF()


loadingCorners()
try {
  removingCorners()
} catch {
  //pass
}
if ( Dpath != "designerCarriage/") {
loadingCornersBackRight() //it automatically calls the rest !
}
if ( Dpath == "designerCarriage/") {
  loadingSpecialCornerDesignerCarriage()
}

loadingShell()
//loadingDrip()


loadingFrontt()
loadingBackk()
loadingDripFront()
loadingDripBack()


if ( Dpath != "highbarn/" && Dpath != "capecode/" && Dpath != "leanto/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/"&& Dpath != "minibarn/" && Dpath != "vinylbarn/")  {
loadingRighty()
loadingLefty() 
}


if ( Dpath != "leanto/") {
loadingRafterBack()
}

loadingRafterFront()



if ( Dpath != "carriage/" && Dpath != "capecode/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/" && Dpath != "cabana/" && Dpath != "leanto/" && Dpath != "highbarn/" && Dpath != "minibarn/" && Dpath != "vinylbarn/") {
  
loadingCloseRight()
loadingCloseLeft()
}


loadingFloorLeft()


//loadingFloorBack()
if ( Dpath != "capecode/") {
loadingFloorRight()
}

if ( Dpath != "highbarn/" && Dpath != "capecode/" && Dpath != "leanto/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/"&& Dpath != "minibarn/" && Dpath != "vinylbarn/") {
loadingRafterLeft()
loadingRafterRight()
}

if ( Dpath != "minibarn/" && Dpath != "vinylbarn/") {
//loadingRightOne()
//loadingLeftOne()
}

if ( Dpath != "cabana/" && Dpath != "capecode/" && Dpath != "leanto/" && Dpath != "highbarn/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/")  {
loadingDoorFloorLeft()
}

if ( Dpath == "highbarn/") {
  loadinghighbarnFrontBoard7gable()
  loadingfr()
  //loadingbr()
}

loadingCornerStudBackRight()
loadingCornerStudBackLeft()
loadingCornerStudFrontRight()
loadingCornerStudFrontLeft()



loadingOverClosing() 
loadingOverClosing2()


function onComplete() {
  if (loadingBack == "yes" && loadingFront == "yes" && loadingRight == "yes" && loadingLeft == "yes") {
 
    removeInsidedoor()
  }
}
function loadingTest(x) {
          x = x
          var path = "Shed2/testo/"
          var element = x
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                testObject = node

              }
             })          
           
            TESTOBJECT = mesh
            scene.add(mesh)         
          })         
         });         
       }

function loadinghighbarnFrontBoard7gable() {
         
          var path = "highbarn/shed/"
          var element = "7board"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                faceGableBoard = node
                setTransp(faceGableBoard,0)
                scene.add(faceGableBoard)

                faceGableBoard2 = faceGableBoard.clone()
                setTransp(faceGableBoard2,0)
                scene.add(faceGableBoard2)

              }
             })          
           
                 
          })         
         });         
       }

function loadingfr() {
         
          var path = "highbarn/shed/"
          var element = "fr"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                fr = node
                setTransp(fr,0)
                scene.add(fr)

                br = fr.clone()
                setTransp(br,0)
                scene.add(br)

              }
             })          
  
          })         
         });         
       }

function loadDefaultLeft1() {
        var path = Dpath + "/pitch/"
          var element = "defaultLeft1"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                defaultLeft1 = node

              }
             })          
             for ( i = 0; i < defaultLeft1.material.length;i++ ) {
                defaultLeft1.material[i].transparent = true;
                defaultLeft1.material[i].opacity = 0
                }
            DEFAULTLEFT1 = mesh
            scene.add(mesh)         
          })         
         });         
}


function loadingRafterHighbarn(st) {
  try {
    scene.remove(overRight)
   
  } catch {
    //pass
  }
        var path = Dpath + "pitch/" + sizeD + "/"
          var element = "overRight"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                overRight = node
                centerUnknownZ(overRight,righty)
                
                
                translateOn(rafterRight,"boxmax",overRight,"boxmin", 0.005)
               
               
                scene.add(overRight)
                loadingRafterHighbarnLeft(st)
          
              
              }
             })          
          })         
         });         
       } 


function loadingRafterHighbarnLeft(st){
  try {
    setTransp(faceGableBoard,0)
    setTransp(faceGableBoard2,0)
  } catch {
    //pass
  }
  try {
    setTransp(dripFront,1)
    setTransp(dripBack,1)
  } catch {
    //pass
  }
  try {

    scene.remove(overLeft)
  } catch {
    //pass
  }
        var path = Dpath + "pitch/" + sizeD + "/"
          var element = "overLeft"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                overLeft = node
                centerUnknownZ(overLeft,righty)
                
                
                translateOn(rafterLeft,"boxmin",overLeft,"boxmax", -0.005)
               
               
                scene.add(overLeft)
               
                if ( ShingHighModel == "Both" || ShingHighModel == "Right" || ShingHighModel == "Left") {
                if ( ShingHighModel == "Both") {
                  try {
                    scene.remove(dripoRight)
                    scene.remove(dripoLeft)
                  } catch {
                    //pass
                  }
                  if ( st == "nope") {
                  loadingPeak()
                } else {
                  loadingPeak("plat")
                }
                } else {
                  if ( dripoRight.name == "designer" || dripoRight.name == "gable") {
                    if ( st == "nope") {
                    loadingDripoRight("loadPeak")
                  } else {
                    loadingPeak("plat")
                  }
                  } else {
                    if ( st != "nope") {
                    
                    //loadingPlatHighBarn()
                     loadingPeak("plat")
                  } else {

                    loadingDripoRight("loadPeak")
                  }
                  }
                }
                

              } else if ( st != "nope" || ( dripoRight.name == "designer" || dripoRight.name == "gable") ){
                //setTransp(dripoRight,1)
               
                loadingPlatHighBarn()
                try {
                scene.add(dripoRight)
              } catch {
                //pass
               
              }
              try {
                 scene.add(dripoLeft)
              } catch {
                //pass
              }
              } else if ( st == "nope" && ShingHighModel == "") {
                try {
                scene.add(dripoRight)
                scene.add(dripoLeft)
              } catch {
                //pass
              }
                loadingShingModel()
              }
              
              
              }
             })          
          })         
         });         
       } 
function loadingwoodVentCarriage(ventsss) {
          try {
            scene.remove(wood)
            scene.remove(woodRight)
          } catch {
            //pass
          }
          let w,z
          var numberss = sizeD.match(/\d+/g).map(Number) - 2;
          var element = "wood"
          var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                wood = node

                centerUnknownZ(wood,lefty)
                
                w = getPos(lefty, "boxmin")
                z = getPos(wood,"boxmax")
                wood.translateX(w-z)
                setTransp(wood,0)
                scene.add(wood)

                woodRight = wood.clone()
                woodRight.rotateY(Math.PI)
                setTransp(woodRight,0)
                w = getPos(righty, "boxmax")
                z = getPos(woodRight,"boxmin")
                woodRight.translateX(-(w-z))
                centerObjectsReversed(woodRight)
                //centerUnknownY(ventsRight,plat2)
                //centerUnknownY(vents,plat2)
                //vents.translateY(-0.07)
                //ventsRight.translateY(-0.07)
                
                scene.add(woodRight)

               
                if ( Dpath == "designerCarriage/" || Dpath == "carriage/" || Dpath == "highCarriage/") {
                   if ( ZZ == 1) {
                  woodRight.position.z = 0.491
                   wood.position.z = 0.928
                } else if ( ZZ == 0.75 ) {
                  woodRight.position.z = 0.420
                  wood.position.z = 0.880
                } else if ( ZZ == 1.25) {
                  if ( Dpath != "designerCarriage/") {
                  wood.position.z = 0.992
                  woodRight.position.z = 0.533
                } else {
                 
                    woord.position.z = 1.025
                    woodRight.position.z = 0.585
                }
                } else if ( ZZ == 1.5) {
                  if ( Dpath != "designerCarriage/") {
                  woodRight.position.z = 0.574
                  wood.position.z = 1.0514
                } else {
                  woodRight.position.z = 0.65
                  wood.position.z = 1.0848
                }

                } else if ( ZZ == 1.75) {
                  if ( Dpath != "designerCarriage/") {
                  wood.position.z = 1.0854
                  woodRight.position.z = 0.646
                } else {
                  woodRight.position.z = 0.729
                  wood.position.z = 1.168
                }
                }
                }
              }
             })          
          })         
         });         
       } 
function loadDefaultLeft2() {
        var path = Dpath + "/pitch/"
          var element = "defaultLeft2"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                defaultLeft2 = node

              }
             })          
            for ( i = 0; i < defaultLeft2.material.length;i++ ) {
            defaultLeft2.material[i].transparent = true;
            defaultLeft2.material[i].opacity = 0
            }
            DEFAULTLEFT2 = mesh
            scene.add(mesh)         
          })         
         });  
}

function loadCustom(path,element) {
          var path =  path
          var element = element
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                customLoad = node 
                scene.add(customLoad)
              }
             })          
              
          })         
         });    
}

function loadFaceBoard() {
          var path =  "ConstantObjects/"
          var element = "faceBoard"
          if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
            element = "faceboardCarriage"
          }
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh) {
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                faceBoard = node 
                scene.add(faceBoard)
                centerUnknownX(faceBoard,front)
                translateOn(front,"boxmaxz",faceBoard,"boxminz")

              

                faceBoard2 = faceBoard.clone()
                translateOn(backty,"boxminz",faceBoard2,"boxmaxz")
                if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                translateOn(backty,"boxmaxy",faceBoard2,"boxmaxy")
                //translateOn(front,"boxmaxy",faceBoard,"boxmaxy")
              }
              if ( Dpath == "highCarriage/") {
                  faceBoard.position.y = 0.17352500915527336                
              }
              
                if ( Dpath == "designerCarriage/") {
                loadingFaceFrontDesignerCarriage()
              }


                centerUnknownX(faceBoard2,backty)
                scene.add(faceBoard2)
              }
             })          
              
          })         
         });    
}

function loadDormerWin(elt = "model1",sth="none") {
  var elt = elt
  try {
    scene.remove(dormerWin)
  } catch {
    console.log("erno")
  }
          var path = Dpath + "roof/dormerexp/" + sizeD +"/"+ dormerSize + "/"
          var element = elt
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
          if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                dormerWin = node 
                scene.add(dormerWin)
                if ( elt == "model1") {
                  dormerModel = "standard"
                } else if ( elt == "model2") {
                  dormerModel = "vinyl"
                }
                centerUnknownX(dormerWin,front)
                
                //let p11 = getPos(dormer,"boxmaxz")
                //let p22 = getPos(dormerWin,"boxmaxz")
                //dormerWin.translateZ(p11-p22)
                translateOn(dormer,"boxmaxz",dormerWin,"boxmaxz",-0.028)
                if ( highwal == true) {
                  let val = translateOn(p2[0],"boxminy",dormer,"boxminy")
                  dormerWin.translateY(val)
                  try {
                    dormerShingle.translateY(val)
                  } catch {
                    //pass
                  }

                }
                if (sth == "alone") {
                  translateOn(dormer,"boxminy",dormerWin,"boxminy",0.053)
                }
               loadPd()
              }
             })          
              
          })         
         });    
}
function loadDormer() {

  try {
    scene.remove(dormer)
    dormer = ""
  } catch {
    console.log("erno")
  }
          
          var path = Dpath + "roof/dormerexp/" + sizeD +"/"+ dormerSize + "/"
          var element = "dormer"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                dormer = node 
                scene.add(dormer)
                
                centerUnknownX(dormer,front)
                centerUnknownZ(dormer,lefty)
                dormer.translateY(-0.0125)
                //domEvents.addEventListener(dormer,'click',event => {dormer.translateY(0.5)})
                loadDormerWin()
                loadDormerShing()               

              } 
             })          
              
          })         
         });    
}


function loadDormerShing() {

  try {
    scene.remove(dormerShingle)
  } catch {
    //pass
  }
          
          var path = Dpath + "roof/dormerexp/" + sizeD +"/"+ dormerSize + "/"
          var element = "shingle"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                dormerShingle = node 
                dormerShingle.scale.z+= 0.01
                dormerShingle.scale.x+= 0.02
                scene.add(dormerShingle)
                dormerShingle.translateY(0.002)
                centerUnknownX(dormerShingle,dormer)
                translateOn(dormer,"boxmaxz",dormerShingle,"boxmaxz",0.01)
                //domEvents.addEventListener(dormer,'click',event => {dormer.translateY(0.5)})
              roofingText()
              } 
             })          
              
          })         
         });    
}

function loadCabanaCloseFront() {
          var path = Dpath + "shed/"
          var element = "cabanaCloseFront"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cabanaCloseFront = node
                translateOn(front,"boxmaxz",cabanaCloseFront,"boxminz")
                centerUnknownX(cabanaCloseFront,front)
                scene.add(cabanaCloseFront)

              }
             })          
             
          })         
         });    
}

function loadCabanaCloseBack() {
          var path = Dpath + "shed/"
          var element = "cabanaCloseBack"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cabanaCloseBack = node
                translateOn(backty,"boxminz",cabanaCloseBack,"boxmaxz")
                centerUnknownX(cabanaCloseBack,backty)
                scene.add(cabanaCloseBack)

              }
             })          
             
          })         
         });    
}


function loadCabanaCloseRight() {
          var path = Dpath + "shed/"
          var element = "cabanaCloseRight"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cabanaCloseRight = node
                translateOn(righty,"boxmax",cabanaCloseRight,"boxmin")
                centerUnknownZ(cabanaCloseRight,righty)
                scene.add(cabanaCloseRight)

              }
             })          
             
          })         
         });    
}


function loadCabanaCloseLeft() {
          var path = Dpath + "shed/"
          var element = "cabanaCloseLeft"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cabanaCloseLeft = node
                translateOn(lefty,"boxmin",cabanaCloseLeft,"boxmax")
                centerUnknownZ(cabanaCloseLeft,lefty)
                scene.add(cabanaCloseLeft)

              }
             })          
             
          })         
         });    
}

function loadDefaultRight1() {
          var path = Dpath + "/pitch/"
          var element = "defaultRight1"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                defaultRight1 = node

              }
             })          
             for ( i = 0; i < defaultRight1.material.length;i++ ) {
              defaultRight1.material[i].transparent = true;
              defaultRight1.material[i].opacity = 0
              }
            DEFAULTRIGHT1 = mesh
            scene.add(mesh)         
          })         
         });    
}
function loadDefaultRight2() {
        var path = Dpath + "/pitch/"
          var element = "defaultRight2"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                defaultRight2 = node

              }
             })           
             for ( i = 0; i < defaultRight2.material.length;i++ ) {
              defaultRight2.material[i].transparent = true;
              defaultRight2.material[i].opacity = 0
              }
            DEFAULTRIGHT2 = mesh
            scene.add(mesh)         
          })         
         });   
         }          
function loadDefaultPlat() {
        var path = Dpath + "/pitch/"
          var element = "defaultPlat"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                defaultPlat = node

              }
             })       
              for ( i = 0; i < defaultPlat.material.length;i++ ) {
              defaultPlat.material[i].transparent = true;
              defaultPlat.material[i].opacity = 0
              }   
           
            DEFAULTPLAT = mesh
            scene.add(mesh)         
          })         
         });         
}

function loadDiviser1() {
  var path = Dpath + "/shed/pitch/5pitch/"
          var element = "diviserLeft"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                diviserLeft = node

              }
             })          
           
            DIVISERLEFT = mesh
            scene.add(mesh)         
          })         
         });         
       }

function loadSpecialRight() {
  var path = Dpath + "/shed/pitch/"
          var element = "specialRighty"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                specialRight = node

              }
             })          
           
            SPECIALRIGHT = mesh
            scene.add(mesh)         
          })         
         });         
       }
function loadDiviser2() {
  var path = Dpath + "/shed/pitch/5pitch/"
          var element = "diviserRight"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                diviserRight = node

              }
             })          
           
            DIVISERRIGHT = mesh
            scene.add(mesh)         
          })         
         });         
       }




function loadingSpecialFront() {
       
          var path = "minibarn/shed/pitch/"
          var element = "specialFront"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                specialFront = node

              }
             })          
           
            SPECIALFRONT = mesh
            scene.add(mesh)         
          })         
         });         
       }

function loadingSpecialBack() {
       
          var path = "minibarn/shed/pitch/"
          var element = "specialBack"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                specialBack = node

              }
             })          
           
            SPECIALBACK = mesh
            scene.add(mesh)         
          })         
         });         
       }




function loadingFrontFrame() {
       
          var path = "capeCode/capeObjs/"
          var element = "frontFrame"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                frontFrame = node

              }
             })          
           
            FRONTFRAME = mesh
            scene.add(mesh)         
          })         
         });         
       }



function loadingSpecialShingles() {
       
          var path = "capeCode/capeObjs/"
          var element = "specialShingles"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                specialShingles = node

              }
             })          
           
            SPECIALSHINGLES = mesh
            scene.add(mesh)         
          })         
         });         
       }


function backDoorOnLeanTo() {
  
          try {
            scene.remove(backDoor)
            backDoor = ""
          } catch {
            //pass
          }
          try {
      objects.splice(objects.indexOf(backDoor),1)
      
    objectsPushed.splice(objectsPushed.indexOf(backDoor),1)
    
  } catch {
    //pass
  }
          let sp1
          var path = "leanto/pitch/" + sizeD + "/"
          var element = "backDoor"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                backDoor = node
                backDoor.scale.x = XX
                objects.push(backDoor)
                scene.add(backDoor)
                translateOn(backty,"boxminz",backDoor,"boxminz",-0.12)
                centerUnknownX(backDoor,backty)

                for ( c of p2) {
                  c.scale.z = 1.0419999999999998
                  c.position.y = 0
                  c.translateY(0.015) // NEWWW IN NEW UPDATE !!! 
                  translateOn(backDoor,"boxminz",c,"boxminz")
                }

                for ( c of [rafterRight,rafterLeft,shingles]) {
                  c.scale.z = 1.027 //1.0419999999999998
                  translateOn(backDoor,"boxminz",c,"boxminz")
                }
                  try {
                  let tec = "Textures/" + myText
                  applyTexture(tec,repeatSiding,rotateSiding,mySiding)
            } catch {
              //pass
            }
            translateOn(rafterRight,"boxmaxy",backRaft,"boxmaxy",-0.0315)
                backRaft.translateY(-0.014)
                translateOn(rafterRight,"boxmaxy",dripoRight,"boxmaxy",0.001)
                translateOn(rafterLeft,"boxmaxy",dripoLeft,"boxmaxy",0.001)
                translateOn(dripoRight,"boxmaxy",dripBack,"boxmaxy")
                translateOn(backDoor,"boxminz",dripBack,"boxminz")
                possibleLayout("Back")
              }
             })          
          })         
         });       
}


function loadingSpecialRafterBack() {

  /*
                try {
                  //scaleBetween2Objects(backty,cornersBackRight,"boxmax",tempDoor,"boxmin","x")
                  // scaleUnknown(backty,"boxmaxy",cornersBackRight,"boxmaxy")
                  // scaleUnknown(backty,"boxmaxy",cornersBackLeft,"boxmaxy")
                } catch {
                  //pass
                }
                */
                if ( typeof(backDoor) == "object") {
                  backDoorOnLeanTo()
                }
          let sp1
          var path = "leanto/pitch/" + sizeD + "/"
          var element = "specialRafterBack"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                specialRafterBack = node
                //scene.add(specialRafterBack)
             
              
                    translateOn(backRaft,"boxminz",specialRafterBack,"boxminz")
                    sp1 = specialRafterBack.clone()
                   
                   
                    specialLeanto.push(sp1)
                    
                    //let scalar,length1,lengthX 
                    //length1 = getPos(sp1,"boxlength")
                    //lengthX = getPos(cornersStudBackRight,"boxmin") - getPos(cornersStudBackLeft,"boxmax")
                    //scalar = lengthX/length1
                    //sp1.scale.x *= scalar
                    //translateOn(cornersStudBackLeft,"boxmax",sp1,"boxmin")

                    scaleBetween2Objects(sp1,cornersStudBackLeft,"boxmax",cornersStudBackRight,"boxmin","x")
                    scene.add(sp1)

                   
                
                
                
              }
             })          
          })         
         });         
       }


function loadingDiviser() {
          var path = "capeCode/capeObjs/"
          var element = "diviser"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                diviser = node
              }
             })                     
            DIVISER = mesh
            scene.add(mesh)         
          })         
         });         
       }


function loadingDiagonal(path2 = PitchPath) {      
          var path = "capeCode/capeObjs/"
          var element = "diagonal"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                diagonal = node

              }
             })          
           
            DIAGONAL = mesh
            scene.add(mesh)         
          })         
         });         
       }


checkingEnd()



//alert(document.getElementById("loadStatus").innerHTML)



//setTimeout(addingWindow1,3500,"FrontWindow")
//setTimeout(addingDoor,6500,"FrontDoor")

var checkingEndValue = 0
function checkingEnd() {

  
  if (document.getElementById("loadStatus").innerHTML.includes("Completed") ) {
    checkingEndValue += 1
    
  } else {
    checkingEndValue = 0
  }
  if (checkingEndValue >= 4 && typeof(cornersStudFrontLeft) == "object") {
  
   
    firstRun()
  
  } else {

    setTimeout(checkingEnd, 350)
  }

}

function loadingComplete() {

  
  if (document.getElementById("loadStatus").innerHTML.includes("Completed") ) {
    checkingEndValue += 1
    
  } else {
    checkingEndValue = 0
  }
  if (checkingEndValue >= 4) {
    return true;
  }

   else {
    setTimeout(loadingCo)
  }

}

function addingRamp(curobj,path) {
          let pathRamp = path

          if ( path == "none") {
            scene.remove(curobj.ramp)
            
            delete curobj.ramp
          } else {
            
          if (curobj.name.includes("FrontDoor")) {
            var chemin1 = "FrontRamp"
          } else if (curobj.name.includes("BackDoor")) {
            var chemin1 = "BackRamp"
          } else if (curobj.name.includes("LeftDoor")) {
            var chemin1 = "LeftRamp"
          } else if (curobj.name.includes("RightDoor")) {
            var chemin1 = "RightRamp"
          }

          if ( curobj.door.size == "36/" || curobj.door.size == "30/" || curobj.door.size == "48/" || curobj.door.size == "42/") {
            var element = "3"
          } else if ( curobj.door.size == "7/" || curobj.door.size == "8/") {
            var element = "6"
          }
          else {
            var element = curobj.door.size.replace("/","")
          }
          if (element != "3" && element != "4" && element != "5" && element != "6") {
            scene.remove(curobj.ramp)
            delete curobj.ramp
          } else {
          var path = chemin1 + "/" + path + "/"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                var ramp = node;
                scene.add(ramp)
                scene.remove(curobj.ramp)
                curobj.ramp = ramp 
                curobj.ramp.path = pathRamp
                translateRamp(curobj)

              }
             })                  
          })         
         });         
       }
     }
   }

function switchglass() {
  if ( RightDoor1Dict.glassLow.name == "normal") {
    addingGarageGlassHigh(RightDoor1Dict.name,"normalHigh",GARAGEGLASS)
  } else {
    addingGarageGlassHigh(RightDoor1Dict.name,GARAGEGLASS)
  }
}

/*
function translateStandard(varr) {
  alert("HOOO")
  let side = varr.name.replace(/[0-9]/g,'')
  switch(side) {
    case "FrontDoor":
    alert("HEEERE")
      var value = 0.015
      if ( varr.door.size == "4/" && varr.door.model == "fiber/" ) {
        value = 0.065
      } else if ( varr.door.model == "double/") {
        value = 0
      }
    
      var transValue = getPos(front,"boxminz")-getPos(varr.door,"boxminz")-value
      varr.door.translateZ(transValue)
   
      translateOn(varr.door,"boxminz",varr.raft,"boxmaxz")
      centerUnknownX(varr.raft,varr.door)
      if ( varr.door.size == "4/" && (varr.door.model == "fiber/" || varr.door.model == "steel/")) {
        translateOn(varr.door,"boxmaxz",varr.trim,"boxmaxz")
      } else if (varr.door.model == "double/"){
        translateOn(varr.door,"boxmaxz",varr.trim,"boxmaxz")
    } else {
      centerUnknownZ(varr.trim,varr.door)
    }
      centerUnknownX(varr.trim,varr.door)
      translateOn(varr.door,"boxmaxz",varr.hinge,"boxminz")
      translateOn(varr.door,"boxminz",varr.close,"boxminz") 
      if ( varr.door.size == "4/" && (varr.door.model == "fiber/" || varr.door.model == "steel/"))  {
        //pass A REVOIR 
      } else if ( varr.door.model == "double/"){
        centerUnknownY(varr.close,varr.door)
        varr.close.translateZ(- 0.08)
      } else {
      varr.close.translateZ(- 0.06)

    }
      
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "48/" || varr.door.size == "42/") {
        translateOn(varr.door,"boxmin",varr.close,"boxmin")
        translateOn(varr.door,"boxmax",varr.hinge,"boxmax")
        varr.hinge.translateX(0.0475)
      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownX(varr.hinge,varr.door)
        centerUnknownX(varr.close,varr.door)
        varr.close.translateX(0.07)
      }

      
      centerUnknownY(varr.close2,varr.door)
      translateOn(varr.door,"boxmaxz",varr.close2,"boxminz")
      translateOn(varr.door,"boxmin",varr.close2,"boxmin",0.01)

      
      break;

    case "BackDoor":
      var value = 0.015
      if ( varr.door.size == "4/" && varr.door.model == "fiber/") {
        value = 0.065
      } else if ( varr.door.model == "double/") {
        value = -0.015
      }
     
      var transValue = getPos(backty,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
      varr.door.translateZ(transValue)
   
      translateOn(varr.door,"boxmaxz",varr.raft,"boxminz")
      centerUnknownX(varr.raft,varr.door)
       if ( varr.door.size == "4/" && (varr.door.model == "fiber/" || varr.door.model == "steel/")) {
        translateOn(varr.door,"boxminz",varr.trim,"boxminz")
      } else if ( varr.door.model == "double/") {
        translateOn(varr.door,"boxminz",varr.trim,"boxminz")
      } else {
      centerUnknownZ(varr.trim,varr.door)
    }
    
      centerUnknownX(varr.trim,varr.door)
      translateOn(varr.door,"boxminz",varr.hinge,"boxmaxz")
      translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
      if ( varr.door.size == "4/" && (varr.door.model == "fiber/" || varr.door.model == "steel/")) {
        varr.close.translateZ(-0.04)
      } else if ( varr.door.model == "double/"){
        centerUnknownY(varr.close,varr.door)
        varr.close.translateZ(0.08)
      } else {
      varr.close.translateZ(0.06)
    }
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
        translateOn(varr.door,"boxmax",varr.close,"boxmax")
        translateOn(varr.door,"boxmin",varr.hinge,"boxmin")
        varr.hinge.translateX(- 0.0475)

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownX(varr.hinge,varr.door)
        centerUnknownX(varr.close,varr.door)
        varr.close.translateX(-0.07)
      }

      
      break;

    case "LeftDoor":
      var value = 0.015
      if ( (DOORTYPE == "4lite" || DOORTYPE == "9lite" || DOORTYPE == "15lite") && (DOORSTYLE == "fiber/" || DOORSTYLE == "steel/") ) {
        value = 0.028
      }
      var transValue = getPos(lefty,"boxmin")-getPos(varr.door,"boxmin")-value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmax",varr.raft,"boxmin")
      centerUnknownZ(varr.raft,varr.door)
      if ( varr.door.size == "4/" && (varr.door.model == "fiber/" || varr.door.model == "steelll/")) {
        translateOn(varr.door,"boxmin",varr.trim,"boxmin")
      } else {
      centerUnknownX(varr.trim,varr.door)
    }
      centerUnknownZ(varr.trim,varr.door)
      translateOn(varr.door,"boxmin",varr.hinge,"boxmax")
      translateOn(varr.door,"boxmin",varr.close,"boxmin")
      varr.close.translateX( - 0.04)

       if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
        translateOn(varr.door,"boxminz",varr.close,"boxminz")
        translateOn(varr.door,"boxmaxz",varr.hinge,"boxmaxz")
        varr.hinge.translateZ(0.0475)

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownZ(varr.hinge,varr.door)
        centerUnknownZ(varr.close,varr.door)
        varr.close.translateZ(0.07)
      }
      break;

    case "RightDoor":
      var value = 0.015
       if ( varr.door.size == "4/" && varr.door.model == "fiber/") {
        value = 0.065
      }
      var transValue = getPos(righty,"boxmin")-getPos(varr.door,"boxmin")-value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmin",varr.raft,"boxmax")
      centerUnknownZ(varr.raft,varr.door)
       if ( varr.door.size == "4/" && (varr.door.model == "fiber/" || varr.door.model == "steel/")) {
        translateOn(varr.door,"boxmax",varr.trim,"boxmax")
      } else {
      centerUnknownX(varr.trim,varr.door)
    }
      centerUnknownZ(varr.trim,varr.door)
      translateOn(varr.door,"boxmax",varr.hinge,"boxmin")
      translateOn(varr.door,"boxmax",varr.close,"boxmax")
      varr.close.translateX(0.04)


      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
        translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
        translateOn(varr.door,"boxminz",varr.hinge,"boxminz")
        varr.hinge.translateZ(-0.0475)

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownZ(varr.hinge,varr.door)
        centerUnknownZ(varr.close,varr.door)
        varr.close.translateZ(-0.07)
      }
  }

}
*/


function translateSteel(varr) {

                  try {
                       
                  scene.remove(varr.close2)

                } catch {
                  //pass
                }
                
  let side = varr.name.replace(/[0-9]/g,'')


centerUnknownY(varr.close,varr.door)
varr.close.translateY(-0.025)
if ( varr.door.type != "door") {
  varr.close.position.y =  -0.118
   if ( varr.close.name == "closeReversed") {
    centerUnknownY(varr.close,varr.door)
    varr.close.translateY(-0.18)
   }
}

 try {
    centerUnknownY(varr.hinge,varr.door)
  } catch {
    //pass
  }
  switch(side) {
    case "FrontDoor":
      var value = 0.015
      if ( Dpath == "capecode/" && (typeof(specialFront) == "object")) {
      var transValue = getPos(specialFront,"boxminz")-getPos(varr.door,"boxminz")-value
      } else {
      var transValue = getPos(front,"boxminz")-getPos(varr.door,"boxminz")-value
    }
      varr.door.translateZ(transValue)
   
      translateOn(varr.door,"boxminz",varr.raft,"boxmaxz")
      centerUnknownX(varr.raft,varr.door)
      if ( varr.door.size == "4/") {
        translateOn(varr.door,"boxmaxz",varr.trim,"boxmaxz")
    
    } else {
      centerUnknownZ(varr.trim,varr.door)
    }
      centerUnknownX(varr.trim,varr.door)
      translateOn(varr.door,"boxmaxz",varr.hinge,"boxminz")
      translateOn(varr.door,"boxminz",varr.close,"boxminz") 
     
      
     
      centerUnknownZ(varr.close,varr.door)
      if ( varr.door.size == "6/" || varr.door.size == "4/") {
      varr.close.translateZ(-0.01)
    } else {
      varr.close.translateZ(0.037)
    }

    
      
      if (varr.door.size == "36/" || varr.door.size == "30/") {
        translateOn(varr.door,"boxmin",varr.close,"boxmin")
        translateOn(varr.door,"boxmax",varr.hinge,"boxmax")
        varr.hinge.translateX(0.0475)
        varr.close.translateX(0.03)
         if ( varr.hinge.name == "hingeReversed") {
          translateOn(varr.door,"boxmin",varr.hinge,"boxmin")
          varr.hinge.translateX(-0.0475)
          //varr.hinge.translateZ(-0.01)
         }
         if ( varr.close.name == "closeReversed") {
          translateOn(varr.door,"boxmax",varr.close,"boxmax")
          varr.close.translateX(-0.03)
         }

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/") {
        centerUnknownX(varr.hinge,varr.door)
        centerUnknownX(varr.close,varr.door)
        varr.close.translateX(0.07)
      }
      if ( varr.door.size == "5/") {
        varr.close.translateX(0.03) 
      }
      break;

    case "BackDoor":
      var value = 0.015
      
      if ( typeof(backDoor) == "object" && Dpath == "leanto/") {
        var transValue = getPos(backDoor,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
      } else {
         var transValue = getPos(backty,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
      }
     
      varr.door.translateZ(transValue)
   
      translateOn(varr.door,"boxmaxz",varr.raft,"boxminz")
      centerUnknownX(varr.raft,varr.door)
       if ( varr.door.size == "4/") {
        translateOn(varr.door,"boxminz",varr.trim,"boxminz")
      } else {
      centerUnknownZ(varr.trim,varr.door)
    }
    
      centerUnknownX(varr.trim,varr.door)
      translateOn(varr.door,"boxminz",varr.hinge,"boxmaxz")
      translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
     
        centerUnknownZ(varr.close,varr.door)
        if ( varr.door.size == "6/" || varr.door.size == "4/") {
      varr.close.translateZ(0.01)
    } else {
      varr.close.translateZ(-0.037)
    }
        
    
      if (varr.door.size == "36/" || varr.door.size == "30/") {
        translateOn(varr.door,"boxmax",varr.close,"boxmax")
        translateOn(varr.door,"boxmin",varr.hinge,"boxmin")
        varr.hinge.translateX(- 0.0475)
        varr.close.translateX(-0.03)
         if ( varr.hinge.name == "hingeReversed") {
           translateOn(varr.door,"boxmax",varr.hinge,"boxmax")
          varr.hinge.translateX(0.0475)
         // varr.hinge.translateZ(0.01)
         }
          if ( varr.close.name == "closeReversed") {
          translateOn(varr.door,"boxmin",varr.close,"boxmin")
          varr.close.translateX(0.03)
         }

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/") {
        centerUnknownX(varr.hinge,varr.door)
        centerUnknownX(varr.close,varr.door)
        varr.close.translateX(-0.07)
      }
       if ( varr.door.size == "5/") {
        varr.close.translateX(-0.03) 
      }
      break;
    case "LeftDoor":
      var value = 0.015
      if ( (DOORTYPE == "4lite" || DOORTYPE == "9lite" || DOORTYPE == "15lite") ) {
        value = 0.028
      }
      var transValue = getPos(lefty,"boxmin")-getPos(varr.door,"boxmin")-value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmax",varr.raft,"boxmin")
      centerUnknownZ(varr.raft,varr.door)
      if ( varr.door.size == "4/") {
        translateOn(varr.door,"boxmin",varr.trim,"boxmin")
      } else {
      centerUnknownX(varr.trim,varr.door)
    }
      centerUnknownZ(varr.trim,varr.door)
      translateOn(varr.door,"boxmin",varr.hinge,"boxmax")
      //translateOn(varr.door,"boxmin",varr.close,"boxmin")
      //varr.close.translateX( - 0.04)
       centerUnknownX(varr.close,varr.door)
      if ( varr.door.size == "6/" || varr.door.size == "4/") {
      varr.close.translateX(0.01)
    } else {
      varr.close.translateX(-0.037)
    }

       if (varr.door.size == "36/" || varr.door.size == "30/") {
        translateOn(varr.door,"boxminz",varr.close,"boxminz")
        translateOn(varr.door,"boxmaxz",varr.hinge,"boxmaxz")
        varr.hinge.translateZ(0.0475)
        varr.close.translateZ(0.03)
        if ( varr.hinge.name == "hingeReversed") {
           translateOn(varr.door,"boxminz",varr.hinge,"boxminz")
            varr.hinge.translateZ(-0.0475)
            //varr.hinge.translateX(0.01)
        }
         if ( varr.close.name == "closeReversed") {
          translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
          varr.close.translateZ(-0.03)
         }

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/") {
        centerUnknownZ(varr.hinge,varr.door)
        centerUnknownZ(varr.close,varr.door)
        varr.close.translateZ(0.07)
      }
       if ( varr.door.size == "5/") {
        varr.close.translateZ(0.03) 
      }
      break;

    case "RightDoor":
      var value = 0.015
      
       if ( varr.door.size == "4/") {
        value = 0.065
      }
      
      var transValue = getPos(righty,"boxmin")-getPos(varr.door,"boxmin")-value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmin",varr.raft,"boxmax")
      centerUnknownZ(varr.raft,varr.door)
       if ( varr.door.size == "4/") {
        translateOn(varr.door,"boxmax",varr.trim,"boxmax")
      } else {
      centerUnknownX(varr.trim,varr.door)
    }
      centerUnknownZ(varr.trim,varr.door)
      translateOn(varr.door,"boxmax",varr.hinge,"boxmin")
      //translateOn(varr.door,"boxmax",varr.close,"boxmax")
      //varr.close.translateX(0.04)
       centerUnknownX(varr.close,varr.door)
      if ( varr.door.size == "6/" || varr.door.size == '4/' ) {
      varr.close.translateX(-0.01)
    } else {
      varr.close.translateX(0.037)
    }

      if (varr.door.size == "36/" || varr.door.size == "30/") {
        translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
        translateOn(varr.door,"boxminz",varr.hinge,"boxminz")
        varr.hinge.translateZ(-0.0475)
        varr.close.translateZ(-0.03)
         if ( varr.hinge.name == "hingeReversed") {
          translateOn(varr.door,"boxmaxz",varr.hinge,"boxmaxz")
          varr.hinge.translateZ(0.0475)
          //varr.hinge.translateX(-0.01)
         }
           if ( varr.close.name == "closeReversed") {
          translateOn(varr.door,"boxminz",varr.close,"boxminz")
          varr.close.translateZ(0.03)
         }

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/") {
        centerUnknownZ(varr.hinge,varr.door)
        centerUnknownZ(varr.close,varr.door)
        varr.close.translateZ(-0.07)
      }
       if ( varr.door.size == "5/") {
        varr.close.translateZ(-0.03) 
      }
  }
}

function translateDouble(varr) {
  let side = varr.name.replace(/[0-9]/g,'')
  centerUnknownY(varr.close,varr.door)

  switch(side) {
    case "FrontDoor":
      
      if ( Dpath == "capecode/" && (typeof(specialFront) == "object")) {
         var transValue = getPos(specialFront,"boxminz")-getPos(varr.door,"boxminz")-0
      } else {
      var transValue = getPos(front,"boxminz")-getPos(varr.door,"boxminz")-0
    }
      varr.door.translateZ(transValue)
   
      translateOn(varr.door,"boxminz",varr.raft,"boxmaxz")
      centerUnknownX(varr.raft,varr.door)
            
      translateOn(varr.door,"boxmaxz",varr.trim,"boxmaxz")
   
      centerUnknownX(varr.trim,varr.door)
      translateOn(varr.door,"boxmaxz",varr.hinge,"boxminz")
      translateOn(varr.door,"boxminz",varr.close,"boxminz") 
      centerUnknownY(varr.close,varr.door)
      varr.close.translateZ(- 0.08)
     
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "48/" || varr.door.size == "42/") {
        translateOn(varr.door,"boxmin",varr.close,"boxmin")
        translateOn(varr.door,"boxmax",varr.hinge,"boxmax")
        varr.hinge.translateX(0.0475)
         if ( varr.hinge.name == "hingeReversed") {
          translateOn(varr.door,"boxmin",varr.hinge,"boxmin")
        varr.hinge.translateX(-0.0475)
         }

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownX(varr.hinge,varr.door)
        centerUnknownX(varr.close,varr.door)
        varr.close.translateX(0.07)
      }
      break;

    case "BackDoor":
      var value = -0.005
      
       if ( typeof(backDoor) == "object" && Dpath == "leanto/") {
        var transValue = getPos(backDoor,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
       } else {
      var transValue = getPos(backty,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
    }
      varr.door.translateZ(transValue)
   
      translateOn(varr.door,"boxmaxz",varr.raft,"boxminz")
      centerUnknownX(varr.raft,varr.door)

      translateOn(varr.door,"boxminz",varr.trim,"boxminz")      
      

      centerUnknownX(varr.trim,varr.door)
      translateOn(varr.door,"boxminz",varr.hinge,"boxmaxz")
      translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
      
     
        centerUnknownY(varr.close,varr.door)
        varr.close.translateZ(0.08)
     
    
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
        translateOn(varr.door,"boxmax",varr.close,"boxmax")
        translateOn(varr.door,"boxmin",varr.hinge,"boxmin")
        varr.hinge.translateX(- 0.0475)
        if ( varr.hinge.name == "hingeReversed") {
           translateOn(varr.door,"boxmax",varr.hinge,"boxmax")
        varr.hinge.translateX(0.0475)
        }
      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownX(varr.hinge,varr.door)
        centerUnknownX(varr.close,varr.door)
        varr.close.translateX(-0.07)
      }
      break;

    case "LeftDoor":
      var value = 0.03
   
      var transValue = getPos(lefty,"boxmin")-getPos(varr.door,"boxmin")-value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmax",varr.raft,"boxmin")
      centerUnknownZ(varr.raft,varr.door)
     
      translateOn(varr.door,"boxmin",varr.trim,"boxmin")
     
    
      centerUnknownZ(varr.trim,varr.door)
      translateOn(varr.door,"boxmin",varr.hinge,"boxmax")
      translateOn(varr.door,"boxmin",varr.close,"boxmin")
      varr.close.translateX( - 0.04)

       centerUnknownY(varr.close,varr.door)
       if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
        translateOn(varr.door,"boxminz",varr.close,"boxminz")
        translateOn(varr.door,"boxmaxz",varr.hinge,"boxmaxz")
        varr.hinge.translateZ(0.0475)
        if ( varr.hinge.name == "hingeReversed") {
          translateOn(varr.door,"boxminz",varr.hinge,"boxminz")
          varr.hinge.translateZ(-0.0475)
        }
        if ( varr.close.name == "closeReversed") {
          translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")

        }
      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownZ(varr.hinge,varr.door)
        centerUnknownZ(varr.close,varr.door)
        varr.close.translateZ(0.07)
      }
      break;

    case "RightDoor":
      var value = 0.012
     
      var transValue = getPos(righty,"boxmin")-getPos(varr.door,"boxmin")+value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmin",varr.raft,"boxmax")
      centerUnknownZ(varr.raft,varr.door)
       
      translateOn(varr.door,"boxmax",varr.trim,"boxmax")
    
      centerUnknownZ(varr.trim,varr.door)
      translateOn(varr.door,"boxmax",varr.hinge,"boxmin")
      translateOn(varr.door,"boxmax",varr.close,"boxmax")
      varr.close.translateX(0.04)

      centerUnknownY(varr.close,varr.door)
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
        translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
        translateOn(varr.door,"boxminz",varr.hinge,"boxminz")
        varr.hinge.translateZ(-0.0475)
         if ( varr.hinge.name == "hingeReversed") {
           translateOn(varr.door,"boxmaxz",varr.hinge,"boxmaxz")
            varr.hinge.translateZ(0.0475)
         }
          if ( varr.close.name == "closeReversed") {
          translateOn(varr.door,"boxminz",varr.close,"boxminz")
          
        }
      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownZ(varr.hinge,varr.door)
        centerUnknownZ(varr.close,varr.door)
        varr.close.translateZ(-0.07)
      }
  }

}

function translateCarriage(varr) {
   try {
                       
                  scene.remove(varr.close2)

                } catch {
                  //pass
                }
  let side = varr.name.replace(/[0-9]/g,'')
  switch(side) {
    case "FrontDoor":

      var val
      if (varr.door.type == "door") {
        val = 0.01
      }  else {
        val = -0.05
      }
       if ( Dpath == "capecode/" && (typeof(specialFront) == "object")) {
        var transValue = getPos(specialFront,"boxminz")-getPos(varr.door,"boxminz") + val
       } else {
      var transValue = getPos(front,"boxminz")-getPos(varr.door,"boxminz") + val
    }
      varr.door.translateZ(transValue)
    
      translateOn(varr.door,"boxminz",varr.raft,"boxmaxz")
      varr.raft.translateZ(0.06)
      if ( varr.door.type != "door") {
        varr.raft.translateZ(0.07)
      }

      centerUnknownX(varr.raft,varr.door)
      
      if (varr.door.type == "door") {
      translateOn(varr.door,"boxmaxz",varr.trim,"boxminz")      
      if (typeof(varr.close) == "object") {
      centerUnknownX(varr.close,varr.door)
      translateOn(varr.door,"boxminz",varr.close,"boxminz")
    }
    }
    else {
      translateOn(varr.door,"boxmaxz",varr.trim,"boxminz")
      if (typeof(varr.close) == "object") {
      centerUnknownX(varr.close,varr.door)
      translateOn(varr.door,"boxmaxz",varr.close,"boxminz")
      varr.trim.translateZ(-0.023) 
      varr.close.translateZ(-0.023)
    }
    }    
      centerUnknownX(varr.trim,varr.door)

      if ( typeof(varr.trim) == "object") {
      translateOn(varr.trim,"boxmaxz",varr.hinge,"boxminz")
    } else if (typeof(varr.close) == "object") {
      translateOn(varr.close,"boxmaxz",varr.hinge,"boxminz")
    } else {
      translateOn(varr.door,"boxmaxz",varr.hinge,"boxminz")
    }


    if (typeof(varr.x) == "object") {
      centerUnknownX(varr.x,varr.door)
      translateOn(varr.door,"boxmaxz",varr.x,"boxminz")
      if ( varr.door.type != "door") {
        varr.x.translateZ(-0.024)
      }
    }

     
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "48/" || varr.door.size == "42/") {

        translateOn(varr.door,"boxmax",varr.hinge,"boxmax")
        varr.hinge.translateX(0.0475)
      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownX(varr.hinge,varr.door)

      }
      break;

    case "BackDoor":
      var value
      
      if (varr.door.type == "door") {
        value = -0.005
      }  else {
        value = 0.056
      }
      
      if ( Dpath == "leanto/" && typeof(backDoor) == "object") {
         var transValue = getPos(backDoor,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
      } else {
      var transValue = getPos(backty,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
    }
      varr.door.translateZ(transValue)
   
      translateOn(varr.door,"boxmaxz",varr.raft,"boxminz")
      varr.raft.translateZ(-0.06)
      if ( varr.door.type != "door") {
        varr.raft.translateZ(-0.07)
      }

      centerUnknownX(varr.raft,varr.door)

      if (varr.door.type == "door") {
        translateOn(varr.door,"boxminz",varr.trim,"boxmaxz")      
      if (typeof(varr.close) == "object") {
        centerUnknownX(varr.close,varr.door)
        translateOn(varr.door,"boxminz",varr.close,"boxminz")
    }
    }

          
      
      translateOn(varr.door,"boxminz",varr.trim,"boxmaxz") 
      centerUnknownX(varr.trim,varr.door)

      if ( typeof(varr.trim) == "object") {
      translateOn(varr.trim,"boxminz",varr.hinge,"boxmaxz")
    } else if (typeof(varr.close) == "object") {
      translateOn(varr.close,"boxminz",varr.hinge,"boxmaxz")
    } else {
      translateOn(varr.door,"boxminz",varr.hinge,"boxmaxz")
    }

    if (typeof(varr.x) == "object") {
      centerUnknownX(varr.x,varr.door)
      translateOn(varr.door,"boxminz",varr.x,"boxmaxz")
      if ( varr.door.type != "door") {
        varr.x.translateZ(0.024)
      }
    }
     
     
    
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
     
        translateOn(varr.door,"boxmin",varr.hinge,"boxmin")
        varr.hinge.translateX(- 0.0475)

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownX(varr.hinge,varr.door)
      
      }
      break;

    case "LeftDoor":
    if (varr.door.type == "door") {
      var value = 0.02
    } else {
      var value = 0.03
    }
   
      var transValue = getPos(lefty,"boxmin")-getPos(varr.door,"boxmin")-value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmax",varr.raft,"boxmin")
      varr.raft.translateX(-0.06)
      if ( varr.door.type != "door") {
        varr.raft.translateX(-0.07)
      }
      centerUnknownZ(varr.raft,varr.door)
     
      translateOn(varr.door,"boxmin",varr.trim,"boxmax")
     
      
      centerUnknownZ(varr.trim,varr.door)
      
      //translateOn(varr.door,"boxmin",varr.close,"boxmin")
      //varr.close.translateX( - 0.04)
        if (typeof(varr.close) == "object") {
      centerUnknownZ(varr.close,varr.door)
      translateOn(varr.door,"boxmin",varr.close,"boxmin")
    }
    if (varr.door.type == "door") {
      varr.trim.translateX(0.01)
      if ( typeof(varr.close) == "object") {
        varr.close.translateX(0.01)
      }
    } else {
      varr.trim.translateX(0.02)
      if ( typeof(varr.close) == "object") {
        varr.close.translateX(0.02)
      }
    }
    if ( typeof(varr.trim) == "object") {
      translateOn(varr.trim,"boxmin",varr.hinge,"boxmax")
    } else if (typeof(varr.close) == "object") {
      translateOn(varr.close,"boxmin",varr.hinge,"boxmax")
    } else {
      translateOn(varr.door,"boxmin",varr.hinge,"boxmax")
    }
    if ( typeof(varr.x) == "object") {
      translateOn(varr.door,"boxmin",varr.x,"boxmax")
      centerUnknownZ(varr.x,varr.door)
      if ( varr.door.type != "door") {
        varr.x.translateX(0.024)
      }
    }
       //centerUnknownY(varr.close,varr.door)
       if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
        //translateOn(varr.door,"boxminz",varr.close,"boxminz")
        translateOn(varr.door,"boxmaxz",varr.hinge,"boxmaxz")
        varr.hinge.translateZ(0.0475)

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownZ(varr.hinge,varr.door)
        //centerUnknownZ(varr.close,varr.door)
        //varr.close.translateZ(0.07)
      }
      break;

    case "RightDoor":
    if (varr.door.type == "door") {
        value = 0.012
      }  else {
        value = -0.06
      }
      
     
      var transValue = getPos(righty,"boxmin")-getPos(varr.door,"boxmin")+value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmin",varr.raft,"boxmax")
      varr.raft.translateX(0.06)
      if (varr.door.type != "door" ) {
        varr.raft.translateX(0.07)
      } 
      centerUnknownZ(varr.raft,varr.door)
       
      translateOn(varr.door,"boxmax",varr.trim,"boxmin")
    
      centerUnknownZ(varr.trim,varr.door)
      
      //translateOn(varr.door,"boxmax",varr.close,"boxmax")
      //varr.close.translateX(0.04)


      if (typeof(varr.x) == "object") {
        translateOn(varr.door,"boxmax",varr.x,"boxmin")
        centerUnknownZ(varr.x,varr.door)
        if ( varr.door.type != "door") {
        varr.x.translateX(-0.024)
      }
      }

        if (typeof(varr.close) == "object") {
      centerUnknownZ(varr.close,varr.door)
      translateOn(varr.door,"boxmin",varr.close,"boxmin")
    }
    if (varr.door.type != "door") {
      varr.trim.translateX(-0.02)
      if (typeof(varr.close) == "object") {
        varr.close.translateX(-0.02)
      }
    }
    if ( typeof(varr.trim) == "object") {
      translateOn(varr.trim,"boxmax",varr.hinge,"boxmin")
    } else if (typeof(varr.close) == "object") {
      translateOn(varr.close,"boxmax",varr.hinge,"boxmin")
    } else {
      translateOn(varr.door,"boxmax",varr.hinge,"boxmin")
    }
      //centerUnknownY(varr.close,varr.door)
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
        //translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
        translateOn(varr.door,"boxminz",varr.hinge,"boxminz")
        varr.hinge.translateZ(-0.0475)

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownZ(varr.hinge,varr.door)
        centerUnknownZ(varr.close,varr.door)
        //varr.close.translateZ(-0.07)
      }
  }

}


function translateStandard(varr) {

  let side = varr.name.replace(/[0-9]/g,'')
   try {
    centerUnknownY(varr.hinge,varr.door)
  } catch {
    //pass
  }

   if ( varr.door.type == "designer") {
    //pass
   } else {
    try {
      scene.remove(varr.designerTrim)
    } catch {
      //pass
    }
   }


           
  switch(side) {
    case "FrontDoor":
     
      var val
      if (varr.door.type == "door") {
        val = 0.01
      }  else {
        val = 0.01 

      }
      if ( Dpath == "capecode/" && (typeof(specialFront) == "object")) {
         var transValue = getPos(specialFront,"boxminz")-getPos(varr.door,"boxminz") + val 
         
      } else {
      var transValue = getPos(front,"boxminz")-getPos(varr.door,"boxminz") + val
    }
      varr.door.translateZ(transValue)
    
      translateOn(varr.door,"boxminz",varr.raft,"boxmaxz")
      //varr.raft.translateZ(0.06)
      
      if ( varr.door.type != "door") {
        //varr.raft.translateZ(0.07)
      }
      if ( varr.hinge.name != "hingeReversed") {
      centerUnknownX(varr.raft,varr.door)
    }
      
      if (varr.door.type == "door" || varr.door.type == "designer" || varr.door.type == "wide") {
      translateOn(varr.door,"boxmaxz",varr.trim,"boxminz")      
      if (typeof(varr.close) == "object") {
      centerUnknownX(varr.close,varr.door)
      translateOn(varr.door,"boxmaxz",varr.close,"boxminz")
    }
    }
    else {
      translateOn(varr.door,"boxmaxz",varr.trim,"boxminz")
      if (typeof(varr.close) == "object") {
      centerUnknownX(varr.close,varr.door)
      translateOn(varr.door,"boxmaxz",varr.close,"boxminz")
      varr.trim.translateZ(-0.023) 
      varr.close.translateZ(-0.023)
    }
    }    
      centerUnknownX(varr.trim,varr.door)


      if ( typeof(varr.trim) == "object") {
      translateOn(varr.trim,"boxmaxz",varr.hinge,"boxminz")
    } else if (typeof(varr.close) == "object") {
      translateOn(varr.close,"boxmaxz",varr.hinge,"boxminz")
    } else {
      translateOn(varr.door,"boxmaxz",varr.hinge,"boxminz")
    }
     try {
        if ( typeof(varr.transom) == "object") {
        translateOn(varr.trim,"boxmaxz",varr.transom,"boxmaxz")
        centerUnknownX(varr.transom,varr.door)
      }
      } catch {
        //pass
      }


    if (typeof(varr.x) == "object") {
      centerUnknownX(varr.x,varr.door)
      translateOn(varr.door,"boxmaxz",varr.x,"boxminz")
       if ( varr.door.type != "door") {
        //varr.x.translateZ(-0.024)
      }
    }

     
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "48/" || varr.door.size == "42/") {

        translateOn(varr.door,"boxmax",varr.hinge,"boxmax")
        varr.hinge.translateX(0.0475)
         if ( varr.hinge.name == "hingeReversed") {
           translateOn(varr.door,"boxmin",varr.hinge,"boxmin")
            varr.hinge.translateX(-0.0475)
           
         }
      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownX(varr.hinge,varr.door)

      }

    if ( varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "48/" || varr.door.size == "42/") {
      centerUnknownY(varr.close2,varr.door)
      translateOn(varr.door,"boxmaxz",varr.close2,"boxminz")
      if ( varr.hinge.name != "hingeReversed") {
      translateOn(varr.door,"boxmin",varr.close2,"boxmin",0.01)
    } else {
      translateOn(varr.door,"boxmax",varr.close2,"boxmax",-0.01)
    }
  } else {
     centerUnknownY(varr.close2,varr.door)
     centerUnknownX(varr.close2,varr.door)
     varr.close2.translateX(0.11)
     translateOn(varr.door,"boxmaxz",varr.close2,"boxminz")

  }
    if ( varr.door.type == "designer") {
    try {
       centerUnknownX(varr.designerTrim,varr.door)
       translateOn(varr.door,"boxmaxz",varr.designerTrim,"boxmaxz")       
                }catch {
                  //na.translate()
                }
  }
     
      break;
    

    case "BackDoor":
      var value
      
      if (varr.door.type == "door" || varr.door.type == "designer" || varr.door.type == "wide") {
        value = -0.005
      }  else {
        value = 0.056
      }

    
      if ( typeof(backDoor) == "object" && Dpath == "leanto/") {
        var transValue = getPos(backDoor,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
      } else {
      var transValue = getPos(backty,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
    }
      varr.door.translateZ(transValue)
   
      translateOn(varr.door,"boxmaxz",varr.raft,"boxminz")
      //varr.raft.translateZ(-0.06)
      if ( varr.door.type != "door") {
        //varr.raft.translateZ(-0.07)
      }

      centerUnknownX(varr.raft,varr.door)

        
      if (varr.door.type == "door" || varr.door.type == "designer" || varr.door.type == "wide") {
        translateOn(varr.door,"boxminz",varr.trim,"boxmaxz")      
      if (typeof(varr.close) == "object") {
        centerUnknownX(varr.close,varr.door)
        translateOn(varr.door,"boxminz",varr.close,"boxmaxz")
    }
    }
    else {
      translateOn(varr.door,"boxminz",varr.trim,"boxmaxz")
      if (typeof(varr.close) == "object") {
      centerUnknownX(varr.close,varr.door)
      translateOn(varr.door,"boxminz",varr.close,"boxmaxz")
      varr.trim.translateZ(0.023) 
      varr.close.translateZ(0.023)
    }
    }    

          
      
      
      centerUnknownX(varr.trim,varr.door)

      if ( typeof(varr.trim) == "object") {
      translateOn(varr.trim,"boxminz",varr.hinge,"boxmaxz")
    } else if (typeof(varr.close) == "object") {
      translateOn(varr.close,"boxminz",varr.hinge,"boxmaxz")
    } else {
      translateOn(varr.door,"boxminz",varr.hinge,"boxmaxz")
    }

    if (typeof(varr.x) == "object") {
      centerUnknownX(varr.x,varr.door)
      translateOn(varr.door,"boxminz",varr.x,"boxmaxz")
       if ( varr.door.type != "door") {
        //varr.x.translateZ(0.024)
      }
    }
      try {
        if ( typeof(varr.transom) == "object") {
        translateOn(varr.trim,"boxminz",varr.transom,"boxminz",-0.005)
        centerUnknownX(varr.transom,varr.door)
      }
      } catch {
        //pass
      }
     
    
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
     
        translateOn(varr.door,"boxmin",varr.hinge,"boxmin")
        varr.hinge.translateX(- 0.0475)
         if ( varr.hinge.name == "hingeReversed") {
          translateOn(varr.door,"boxmax",varr.hinge,"boxmax")
          varr.hinge.translateX(0.0475)
         }

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownX(varr.hinge,varr.door)
      
      }
      if ( varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "48/" || varr.door.size == "42/") {
      centerUnknownY(varr.close2,varr.door)
      translateOn(varr.door,"boxminz",varr.close2,"boxmaxz")
      if ( varr.hinge.name != "hingeReversed") {
      translateOn(varr.door,"boxmax",varr.close2,"boxmax",-0.01)
    } else {
      translateOn(varr.door,"boxmin",varr.close2,"boxmin",0.01)
    } 

  } 
    else {
     centerUnknownY(varr.close2,varr.door)
     centerUnknownX(varr.close2,varr.door)
     varr.close2.translateX(-0.11)
     translateOn(varr.door,"boxminz",varr.close2,"boxmaxz")

  }
   if ( varr.door.type == "designer") {
    try {
       centerUnknownX(varr.designerTrim,varr.door)
       translateOn(varr.door,"boxminz",varr.designerTrim,"boxminz")       
                }catch {
                  //na.translate()
                }
  }
      break;
    

    case "LeftDoor":
    if (varr.door.type == "door" || varr.door.type == "designer" || varr.door.type == "wide") {
      var value = 0.01
    } else {
      var value = 0.02
    }

   
      var transValue = getPos(lefty,"boxmin")-getPos(varr.door,"boxmin")-value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmax",varr.raft,"boxmin")
     
      //varr.raft.translateX(-0.06)
      if ( varr.door.type != "door") {
        //varr.raft.translateX(-0.07)
      }
      centerUnknownZ(varr.raft,varr.door)
     
      translateOn(varr.door,"boxmin",varr.trim,"boxmax")
     
      
      centerUnknownZ(varr.trim,varr.door)
      
      //translateOn(varr.door,"boxmin",varr.close,"boxmin")
      //varr.close.translateX( - 0.04)
        if (typeof(varr.close) == "object") {
      centerUnknownZ(varr.close,varr.door)
      translateOn(varr.door,"boxmin",varr.close,"boxmax")
    }
    if (varr.door.type == "door" || varr.door.type == "designer" || varr.door.type == "wide") {
      varr.trim.translateX(0.01)
      if ( typeof(varr.close) == "object") {
        varr.close.translateX(0.01)
      }
    } else {
      varr.trim.translateX(0.02)
      if ( typeof(varr.close) == "object") {
        varr.close.translateX(0.02)
      }
    }
    if ( typeof(varr.trim) == "object") {
      translateOn(varr.trim,"boxmin",varr.hinge,"boxmax")
    } else if (typeof(varr.close) == "object") {
      translateOn(varr.close,"boxmin",varr.hinge,"boxmax")
    } else {
      translateOn(varr.door,"boxmin",varr.hinge,"boxmax")
    }
    if ( typeof(varr.x) == "object") {
      translateOn(varr.door,"boxmin",varr.x,"boxmax")
      centerUnknownZ(varr.x,varr.door)
       if ( varr.door.type != "door") {
        //varr.x.translateX(0.024)
      }
    }
       centerUnknownY(varr.close,varr.door)
          try {
        if ( typeof(varr.transom) == "object") {
        translateOn(varr.trim,"boxmin",varr.transom,"boxmin",-0.007)
        centerUnknownZ(varr.transom,varr.door)
      }
      } catch {
        //pass
      }
       if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
        //translateOn(varr.door,"boxminz",varr.close,"boxminz")
        translateOn(varr.door,"boxmaxz",varr.hinge,"boxmaxz")
        varr.hinge.translateZ(0.0475)
          if ( varr.hinge.name == "hingeReversed") {
             translateOn(varr.door,"boxminz",varr.hinge,"boxminz")
              varr.hinge.translateZ(-0.0475)
          }

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownZ(varr.hinge,varr.door)
        //centerUnknownZ(varr.close,varr.door)
        //varr.close.translateZ(0.07)
      }
       if ( varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "48/" || varr.door.size == "42/") {

      centerUnknownY(varr.close2,varr.door)
     
      translateOn(varr.door,"boxmin",varr.close2,"boxmax")

      
      if ( varr.hinge.name != "hingeReversed") {
      translateOn(varr.door,"boxminz",varr.close2,"boxminz",0.01)
    } else {
      translateOn(varr.door,"boxmaxz",varr.close2,"boxmaxz",-0.01)
    }
  } else {
     centerUnknownY(varr.close2,varr.door)
     centerUnknownZ(varr.close2,varr.door)
     varr.close2.translateZ(0.11)
    translateOn(varr.door,"boxmin",varr.close2,"boxmax")
  }

   if ( varr.door.type == "designer") {
    try {
       centerUnknownZ(varr.designerTrim,varr.door)
       translateOn(varr.door,"boxmin",varr.designerTrim,"boxmin")       
                }catch {
                  //na.translate()
                }
  }

      break;
    

    case "RightDoor":
    if (varr.door.type == "door" || varr.door.type == "designer" || varr.door.type == "wide") {
        value = 0.012
      }  else {
        value = -0.06
      }
      
     
      var transValue = getPos(righty,"boxmin")-getPos(varr.door,"boxmin")+value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmin",varr.raft,"boxmax")
      //varr.raft.translateX(0.06)
      if (varr.door.type != "door" ) {
        //varr.raft.translateX(0.07)
      } 
      centerUnknownZ(varr.raft,varr.door)
       
      translateOn(varr.door,"boxmax",varr.trim,"boxmin")
    
      centerUnknownZ(varr.trim,varr.door)
      
      //translateOn(varr.door,"boxmax",varr.close,"boxmax")
      //varr.close.translateX(0.04)

       
      if (typeof(varr.x) == "object") {
        translateOn(varr.door,"boxmax",varr.x,"boxmin")
        centerUnknownZ(varr.x,varr.door)
         if ( varr.door.type != "door") {
        //varr.x.translateX(-0.024)
      }
      }

        if (typeof(varr.close) == "object") {
      centerUnknownZ(varr.close,varr.door)
      translateOn(varr.door,"boxmax",varr.close,"boxmin")
    }
    if (varr.door.type != "door" && varr.door.type != "wide") {
      //varr.trim.translateX(-0.02)
      if (typeof(varr.close) == "object") {
        varr.close.translateX(-0.02)
      }
    }
    if ( typeof(varr.trim) == "object") {
      translateOn(varr.trim,"boxmax",varr.hinge,"boxmin")
    } else if (typeof(varr.close) == "object") {
      translateOn(varr.close,"boxmax",varr.hinge,"boxmin")
    } else {
      translateOn(varr.door,"boxmax",varr.hinge,"boxmin")
    }
      centerUnknownY(varr.close,varr.door)
      if (varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "42/" || varr.door.size == "48/") {
        //translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
        translateOn(varr.door,"boxminz",varr.hinge,"boxminz")
        varr.hinge.translateZ(-0.0475)
        if ( varr.hinge.name == "hingeReversed") {
            translateOn(varr.door,"boxmaxz",varr.hinge,"boxmaxz")
            varr.hinge.translateZ(0.0475)
        }

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" || varr.door.size == "7/" || varr.door.size == "8/") {
        centerUnknownZ(varr.hinge,varr.door)
        centerUnknownZ(varr.close,varr.door)
        //varr.close.translateZ(-0.07)
      }
       try {
        if ( typeof(varr.transom) == "object") {
        translateOn(varr.trim,"boxmax",varr.transom,"boxmax")
        centerUnknownZ(varr.transom,varr.door)
      }
      } catch {
        //pass
      }
       if ( varr.door.size == "36/" || varr.door.size == "30/" || varr.door.size == "48/" || varr.door.size == "42/") {

      centerUnknownY(varr.close2,varr.door)
      translateOn(varr.door,"boxmax",varr.close2,"boxmin")
      if ( varr.hinge.name != "hingeReversed") {
      translateOn(varr.door,"boxmaxz",varr.close2,"boxmaxz",-0.01)
    } else {
      translateOn(varr.door,"boxminz",varr.close2,"boxminz",0.01)
    }
  } else {
     centerUnknownY(varr.close2,varr.door)
     centerUnknownZ(varr.close2,varr.door)
     varr.close2.translateZ(-0.11)
     translateOn(varr.door,"boxmax",varr.close2,"boxmin")
  }
  if ( varr.door.type == "designer") {
  try {
       centerUnknownZ(varr.designerTrim,varr.door)
       translateOn(varr.door,"boxmax",varr.designerTrim,"boxmax")       
                }catch {
                  //na.translate()
                }
  }
  }

}

function translateGarage(varr) {
    centerUnknownY(varr.close,varr.door)
    varr.close.translateY(-0.141)

    if ( sizeD.replace("wide","") == "14" && GARAGEDOOR == "door") {
      translateOn(righty,"boxmax",varr.door,"boxmax",-0.005)
    } else if (sizeD.replace("wide","") == "14" && GARAGEDOOR != "door"){
      translateOn(righty,"boxmax",varr.door,"boxmax",0.017)
    } else if ( sizeD.replace("wide","") == "12" && GARAGEDOOR != "door") {
      translateOn(righty,"boxmax",varr.door,"boxmax",-0.01)
    } else {
    translateOn(righty,"boxmax",varr.door,"boxmax",-0.02)
    }
    if ( Dpath == "Shed2/") {
      translateOn(righty,"boxmax",varr.door,"boxmin")
    }
    centerUnknownZ(varr.door,righty)

    centerUnknownZ(varr.trim,varr.door)

    if ( varr.door.trim == "miratec2.5" && GARAGEOPENING == "Square") {
      translateOn(varr.door,"boxmax",varr.trim,"boxmin",0.01)
    } else if ( GARAGEOPENING == "Curved") {
      if ( Dpath == "highbarn/") {
      translateOn(varr.door,"boxmax",varr.trim,"boxmin",-0.074)
    } else {
      translateOn(varr.door,"boxmax",varr.trim,"boxmin",-0.112)
    }
    } else {
    translateOn(varr.door,"boxmax",varr.trim,"boxmin")
  }

    translateOn(varr.door,"boxmax",varr.close,"boxmin")
    centerUnknownZ(varr.close,varr.door)

    translateOn(varr.door,"boxmin",varr.raft,"boxmax")
    centerUnknownZ(varr.raft,varr.door)

    translateOn(varr.door,"boxmax",varr.hinge,"boxmin")
    centerUnknownZ(varr.hinge,varr.door)
    
    try {
      translateOn(varr.door,"boxmin",varr.glassHigh,"boxmin")
      centerUnknownZ(varr.glassHigh,varr.door)

      translateOn(varr.door,"boxmin",varr.glassLow,"boxmin")
      centerUnknownZ(varr.glassLow,varr.door)
    }catch {
      //pass
    }
}






function translateFiber(varr) {
   try {
                  scene.remove(varr.close2)

                } catch {
                  //pass
                }
  let side = varr.name.replace(/[0-9]/g,'')
  centerUnknownY(varr.close,varr.door)
  varr.close.translateY(-0.141)
  try {
    centerUnknownY(varr.hinge,varr.door)
  } catch {
    //pass
  }
  switch(side) {
    case "FrontDoor":
      var value = 0.015
      if ( varr.door.size == "4/" && varr.door.type == "door" ) {
        value = 0.065
      } 
       if ( Dpath == "capecode/" && (typeof(specialFront) == "object")) {
        var transValue = getPos(specialFront,"boxminz")-getPos(varr.door,"boxminz")-value
       } else {
      var transValue = getPos(front,"boxminz")-getPos(varr.door,"boxminz")-value
    }
      varr.door.translateZ(transValue)
   
      translateOn(varr.door,"boxminz",varr.raft,"boxmaxz")
      centerUnknownX(varr.raft,varr.door)
      if ( varr.door.size == "4/") {
        translateOn(varr.door,"boxmaxz",varr.trim,"boxmaxz")
      } else if (varr.door.model == "double/"){
        translateOn(varr.door,"boxmaxz",varr.trim,"boxmaxz")
    } else {
      centerUnknownZ(varr.trim,varr.door)
    }
      centerUnknownX(varr.trim,varr.door)
      translateOn(varr.door,"boxmaxz",varr.hinge,"boxminz")
      //translateOn(varr.door,"boxminz",varr.close,"boxminz") 
      centerUnknownZ(varr.close,varr.door)
      if ( varr.door.size == "4/")  {
        varr.close.translateZ(0.07)
      } else {
      centerUnknownZ(varr.close,varr.door)
      varr.close.translateZ(- 0.01)
     
        
      
    }
      
      if (varr.door.size == "36/" || varr.door.size == "30/") {
        translateOn(varr.door,"boxmin",varr.close,"boxmin")
        translateOn(varr.door,"boxmax",varr.hinge,"boxmax")
        if ( varr.close.name == "closeReversed") {
           translateOn(varr.door,"boxmax",varr.close,"boxmax",-0.015)
           centerUnknownZ(varr.close,varr.door)
           varr.close.translateZ(0.04)
         
        }
        varr.hinge.translateX(0.0475)
        if ( varr.hinge.name == "hingeReversed") {
          translateOn(varr.door,"boxmin",varr.hinge,"boxmin")
          varr.hinge.translateX(-0.0475)
        }
      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/") {
        centerUnknownX(varr.hinge,varr.door)
        centerUnknownX(varr.close,varr.door)
        varr.close.translateX(0.07)

      }
      
      if ( varr.door.size == "4/") {
        varr.close.translateX(0.033)
      }
      
      break;

    case "BackDoor":
      var value = 0.015
      if ( varr.door.size == "4/") {
        value = 0.065
      } 
      if ( typeof(backDoor) == "object" && Dpath == "leanto/") {
        var transValue = getPos(backDoor,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
      } else {

      }
      var transValue = getPos(backty,"boxmaxz")-getPos(varr.door,"boxmaxz")+value
      varr.door.translateZ(transValue)
   
      translateOn(varr.door,"boxmaxz",varr.raft,"boxminz")
      centerUnknownX(varr.raft,varr.door)
       if ( varr.door.size == "4/") {
        translateOn(varr.door,"boxminz",varr.trim,"boxminz")
      } else if ( varr.door.model == "double/") {
        translateOn(varr.door,"boxminz",varr.trim,"boxminz")
      } else {
      centerUnknownZ(varr.trim,varr.door)
    }
    
      centerUnknownX(varr.trim,varr.door)
      translateOn(varr.door,"boxminz",varr.hinge,"boxmaxz")
      //translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
      if ( varr.door.size == "4/") {
        centerUnknownZ(varr.close,varr.door)
        varr.close.translateZ(-0.07)
      
      } else {
      centerUnknownZ(varr.close,varr.door)
      varr.close.translateZ( 0.01)
    }
      if (varr.door.size == "36/" || varr.door.size == "30/") {
        translateOn(varr.door,"boxmax",varr.close,"boxmax")
        translateOn(varr.door,"boxmin",varr.hinge,"boxmin")
        varr.hinge.translateX(- 0.0475)
         if ( varr.hinge.name == "hingeReversed") {
          translateOn(varr.door,"boxmax",varr.hinge,"boxmax")
          varr.hinge.translateX(0.0475)
      }
      if ( varr.close.name == "closeReversed") {
           translateOn(varr.door,"boxmin",varr.close,"boxmin",0.015)
           centerUnknownZ(varr.close,varr.door)
           varr.close.translateZ(-0.04)
         
        }

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" ) {
        centerUnknownX(varr.hinge,varr.door)
        centerUnknownX(varr.close,varr.door)
        varr.close.translateX(-0.07)
      }
      if ( varr.door.size == "4/") {
        varr.close.translateX(-0.033)
      }
      break;

    case "LeftDoor":
      var value = 0.015
      if ( (DOORTYPE == "4lite" || DOORTYPE == "9lite" || DOORTYPE == "15lite") ) {
        value = 0.028
      }
      var transValue = getPos(lefty,"boxmin")-getPos(varr.door,"boxmin")-value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmax",varr.raft,"boxmin")
      centerUnknownZ(varr.raft,varr.door)
      if ( varr.door.size == "4/" ) {
        translateOn(varr.door,"boxmin",varr.trim,"boxmin")
      } else {
      centerUnknownX(varr.trim,varr.door)
    }
      centerUnknownZ(varr.trim,varr.door)
      translateOn(varr.door,"boxmin",varr.hinge,"boxmax")
      //translateOn(varr.door,"boxmin",varr.close,"boxmin")
      //varr.close.translateX( - 0.04)
      if ( varr.door.size == "4/") {
        centerUnknownX(varr.close,varr.door)
        varr.close.translateX(-0.07)
      } else {
      centerUnknownX(varr.close,varr.door)
      varr.close.translateX(  0.01)
    }
       if (varr.door.size == "36/" || varr.door.size == "30/") {
        translateOn(varr.door,"boxminz",varr.close,"boxminz")
        translateOn(varr.door,"boxmaxz",varr.hinge,"boxmaxz")
        varr.hinge.translateZ(0.0475)
        if ( varr.hinge.name == "hingeReversed") {
          translateOn(varr.door,"boxminz",varr.hinge,"boxminz")
          varr.hinge.translateZ(-0.0475)
        }
        if ( varr.close.name == "closeReversed") {
           translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz",-0.015)
           centerUnknownX(varr.close,varr.door)
           varr.close.translateX(-0.04)
         
        }

      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/" ) {
        centerUnknownZ(varr.hinge,varr.door)
        centerUnknownZ(varr.close,varr.door)
        varr.close.translateZ(0.07)
      }
      if ( varr.door.size == "4/") {
        varr.close.translateZ(0.033)
      }
      break;

    case "RightDoor":
      var value = 0.015
       if ( varr.door.size == "4/") {
        value = 0.065
      }
      var transValue = getPos(righty,"boxmin")-getPos(varr.door,"boxmin")-value
      varr.door.translateX(transValue)
      translateOn(varr.door,"boxmin",varr.raft,"boxmax")
      centerUnknownZ(varr.raft,varr.door)
       if ( varr.door.size == "4/") {
        translateOn(varr.door,"boxmax",varr.trim,"boxmax")
      } else {
      centerUnknownX(varr.trim,varr.door)
    }
      centerUnknownZ(varr.trim,varr.door)
      translateOn(varr.door,"boxmax",varr.hinge,"boxmin")
      //translateOn(varr.door,"boxmax",varr.close,"boxmax")
      //varr.close.translateX(0.04)
      if ( varr.door.size == "4/") {
        centerUnknownX(varr.close,varr.door)
        varr.close.translateX(0.07)
      }else {
      centerUnknownX(varr.close,varr.door)
      varr.close.translateX( -0.01)
    }



      if (varr.door.size == "36/" || varr.door.size == "30/") {
        translateOn(varr.door,"boxmaxz",varr.close,"boxmaxz")
        translateOn(varr.door,"boxminz",varr.hinge,"boxminz")
        varr.hinge.translateZ(-0.0475)
         if ( varr.hinge.name == "hingeReversed") {
         translateOn(varr.door,"boxmaxz",varr.hinge,"boxmaxz")
        varr.hinge.translateZ(0.0475)
         }
          if ( varr.close.name == "closeReversed") {
           translateOn(varr.door,"boxminz",varr.close,"boxminz",0.015)
           centerUnknownX(varr.close,varr.door)
           varr.close.translateX(0.04)
         
        }
      } else if ( varr.door.size == "4/" || varr.door.size == "5/" || varr.door.size == "6/") {
        centerUnknownZ(varr.hinge,varr.door)
        centerUnknownZ(varr.close,varr.door)
        varr.close.translateZ(-0.07)
      }
      if ( varr.door.size == "4/") {
        varr.close.translateZ(-0.033)
      }
  }
}

function translateRamp(varr) {
  let side = varr.name.replace(/[0-9]/g,'')
  switch(side) {
    case "FrontDoor":
      translateOn(varr.door,"boxminz",varr.ramp,"boxminz")
      centerUnknownX(varr.ramp,varr.door)
    break;
    case "BackDoor":
      translateOn(varr.door,"boxmaxz",varr.ramp,"boxmaxz")
      centerUnknownX(varr.ramp,varr.door)
    break;
    case "LeftDoor":
      translateOn(varr.door,"boxmax",varr.ramp,"boxmax")
      centerUnknownZ(varr.ramp,varr.door)
    break;
    case "RightDoor":
      translateOn(varr.door,"boxmin",varr.ramp,"boxmin")
      centerUnknownZ(varr.ramp,varr.door)
    break;
  }
}

function translateDoorDict(varr) {

  if (highwal == true || Dpath == "capecode/" || (Dpath == "carriage/" && varr.door.name.includes("Front")) || Dpath == "highCarriage/" || Dpath == "designerCarriage/" || Dpath == "cabana/") {

    let pos1= getPos(varr.door,"boxminy")
    varr.door.scale.y = 1.0833279999999905
    let pos2 = getPos(varr.door,"boxminy")
    varr.door.translateY(pos1-pos2)

    let posRaft1 = getPos(varr.raft,"boxminy")
    varr.raft.scale.y = 1.0794659999999932
    let posRaft2 = getPos(varr.raft,"boxminy")
    varr.raft.translateY(posRaft1-posRaft2)

    try {
    let posTrim1 = getPos(varr.trim,"boxminy")
    varr.trim.scale.y = 1.074193
    let posTrim2 = getPos(varr.trim,"boxminy")
    varr.trim.translateY(posTrim1-posTrim2)
  } catch {
    //pass
  }
  try {
    if ( varr.door.type == "designer") {
      try {
        let post1 = getPos(varr.designerTrim,"boxminy")
        varr.designerTrim.scale.y = 1.074193
        let post2 = getPos(varr.designerTrim,"boxminy")
        varr.designerTrim.translateY(post1-post2)
      } catch {
        //pass
      }
   }
   }catch {
   // pass
  }
    try {
    let posHinge1 = getPos(varr.hinge,"boxminy")
    varr.hinge.scale.y = 1.0833279999999905
    let posHinge2 = getPos(varr.hinge,"boxminy")
    varr.hinge.translateY(posHinge1-posHinge2)
  } catch {
    //pass
  }
  if ( varr.door.model == "standard/" || varr.door.model == "carriage/") {
    try { //1.081099999999991
        
        let posClose1 = getPos(varr.close,"boxminy")
        varr.close.scale.y = 1.081099999999991 
        let posClose2 = getPos(varr.close,"boxminy")
        varr.close.translateY(posClose1-posClose2)
      
    } catch {
      //pass 
    }

   try { //1.0860039999999902
        let posx1 = getPos(varr.x,"boxminy")
        varr.x.scale.y = 1.089
        let posx2 = getPos(varr.x,"boxminy")
        varr.x.translateY(posx1-posx2)
   } catch {
    //pass
   }
   if ( varr.door.model == "carriage/") {
    try {
      centerUnknownY(varr.close,varr.door)
      varr.close.translateY(0.582)
    } catch {
      //pass
    }
   }
  }

  } else {
    let pos1= getPos(varr.door,"boxminy")
    varr.door.scale.y = 1
    let pos2 = getPos(varr.door,"boxminy")
    varr.door.translateY(pos1-pos2)

    let posRaft1 = getPos(varr.raft,"boxminy")
    varr.raft.scale.y = 1
    let posRaft2 = getPos(varr.raft,"boxminy")
    varr.raft.translateY(posRaft1-posRaft2)

    try {
    let posTrim1 = getPos(varr.trim,"boxminy")
    varr.trim.scale.y = 1
    let posTrim2 = getPos(varr.trim,"boxminy")
    varr.trim.translateY(posTrim1-posTrim2)
  } catch {
    //pass
  }
    try {
    let posHinge1 = getPos(varr.hinge,"boxminy")
    varr.hinge.scale.y = 1
    let posHinge2 = getPos(varr.hinge,"boxminy")
    varr.hinge.translateY(posHinge1-posHinge2)
  } catch {
    //pass
  }
   try {
    if ( varr.door.type == "designer") {
      try {
        let post1 = getPos(varr.designerTrim,"boxminy")
        varr.designerTrim.scale.y = 1
        let post2 = getPos(varr.designerTrim,"boxminy")
        varr.designerTrim.translateY(post1-post2)
      } catch {
        //pass
      }
   }
   }catch {
   // pass
  }
  if ( varr.door.model == "standard/" || varr.door.model == "carriage/") {
    try { //1.081099999999991
        
        let posClose1 = getPos(varr.close,"boxminy")
        varr.close.scale.y = 1
        let posClose2 = getPos(varr.close,"boxminy")
        varr.close.translateY(posClose1-posClose2)
      
    } catch {
      //pass 
    }
   try { //1.0860039999999902
        let posx1 = getPos(varr.x,"boxminy")
        varr.x.scale.y = 1
        let posx2 = getPos(varr.x,"boxminy")
        varr.x.translateY(posx1-posx2)
   } catch {
    //pass
   }
   if ( varr.door.model == "carriage/") {
    try {
      centerUnknownY(varr.close,varr.door)
      varr.close.position.y = 0
    } catch {
      //pass
    }
   }
  }
  }

  try {
      translateOn(varr.door,"boxmaxy",varr.transom,"boxmaxy")
    } catch {
      //pass
    }
  if ( varr.door.model == "fiber/") {
    translateFiber(varr)
  } else if (varr.door.model == "steel/") {
    translateSteel(varr)
  } else if (varr.door.model == "double/") {
    translateDouble(varr)
  } else if ( varr.door.model == "standard/") {
    translateStandard(varr)
  } else if ( varr.door.model == "carriage/") {
    translateCarriage(varr)
  } else if (varr.door.model == "garage/") {
    translateGarage(varr)
  }
  try{
    translateRamp(varr)
  } catch {
    //pass
  }
}

function translateWindow(varr) {
  let myInitpos
  
  if (highwal == true) {
    
    //myInitpos = getPos(varr.window,"boxminy")
    //varr.window.translateY(1.3207999467849731-myInitpos)
     //centerWindowHigh(varr.window)
      
  } else if ( highwal == false) {
    //myInitpos = getPos(varr.window,"boxminy")
    //varr.window.translateY(1.2446000576019287 - myInitpos)
    //centerWindowLow(varr.window)
  }

  try {
    centerUnknownY(varr.shutter,varr.trim)
    if ( varr.window.shutter.includes("classicWide") || varr.window.shutter.includes("zstyle")) {
      centerUnknownY(varr.shutter,varr.window)
      varr.shutter.translateY(-0.0165)
    }
    //if ( varr.window.trim.includes("Curved")) {
      //varr.shutter.translateY(-0.0278)
    //}
  } catch {
    //pass
    try {
      centerUnknownY(varr.shutter,varr.window)
    } catch {
      //pass
    }
  }

  try {
    centerUnknownY(varr.trim,varr.window)
  } catch {
    //pass
  }


  if ( typeof(varr.box) == "object") {
    try {
      translateBox(varr)
    } catch {
      console.log("ern")
    }
  }
  
  let side = varr.name.replace(/[0-9]/g,'')
  var transValue
  if ( varr.window.size == "3039/" || varr.window.size == "2239/") {
     transValue = 0.017
  } else {
   transValue = 0.015
}
  switch(side) {
    case "FrontWindow":
      if ( Dpath == "capecode/" && typeof(specialFront) == "object") {
         translateOn(specialFront,"boxminz",varr.window,"boxminz")
      } else {
      translateOn(front,"boxminz",varr.window,"boxminz")
    }
      if (  varr.window.size == "2239/" || varr.window.size == "3039/") {
      varr.window.translateZ(transValue)
    }

      if ( typeof(varr.shutter) == "object") {
      centerUnknownX(varr.shutter,varr.window)
      translateOn(varr.window,"boxminz",varr.shutter,"boxminz")
      }

      if ( typeof(varr.trim) == "object") {
        centerUnknownX(varr.trim,varr.window)
        translateOn(varr.window,"boxmaxz",varr.trim,"boxminz",-0.01)
      }

      centerUnknownX(varr.raft,varr.window)
      translateOn(varr.window,"boxminz",varr.raft,"boxmaxz")
      varr.raft.translateZ(-0.02)

      if ( varr.window.shutter .includes("raisedPanel") || varr.window.shutter.includes("XLRaised") || varr.window.shutter.includes("shutterStandard")) {
        varr.shutter.translateZ(0.007)
        if ( varr.window.shutter.includes("raisedPanel") || varr.window.shutter.includes("shutterStandard") ) {
          varr.shutter.translateZ(0.01)
         
        }
     
      }
      try {
       if ( varr.window.nb == "3/") {
        varr.trim.scale.x = 0.925
       
        centerUnknownX(varr.trim,varr.window)

         varr.shutter.scale.x = 0.925
         centerUnknownX(varr.shutter,varr.window)
      } else if ( varr.window.nb == "2/") {
        varr.trim.scale.x = 0.935
        

        centerUnknownX(varr.trim,varr.window)

        varr.shutter.scale.x = 0.935
        centerUnknownX(varr.shutter,varr.window)
      }
    } catch {
      //pass
    }
    try {
      varr.box.scale.x = 1
      translateBox(varr)
    } catch {
      //pass 
    }

    break;
    case "BackWindow":
    if ( Dpath == "leanto/" && typeof(backDoor) == "object") {
      translateOn(backDoor,"boxmaxz",varr.window,"boxmaxz")
    } else {
      translateOn(backty,"boxmaxz",varr.window,"boxmaxz")
    }
      if (varr.window.size== "2239/" || varr.window.size == "3039/") {
      varr.window.translateZ(- transValue)
    }

       if ( typeof(varr.shutter) == "object") {
        centerUnknownX(varr.shutter,varr.window)
        translateOn(varr.window,"boxmaxz",varr.shutter,"boxmaxz")
      }

      if ( typeof(varr.trim) == "object") {
        centerUnknownX(varr.trim,varr.window)
        translateOn(varr.window,"boxminz",varr.trim,"boxmaxz")
      }
      centerUnknownX(varr.raft,varr.window)
      translateOn(varr.window,"boxmaxz",varr.raft,"boxminz")
      varr.raft.translateZ(0.02)
      if ( varr.window.shutter.includes("raisedPanel") || varr.window.shutter.includes("XLRaised") || varr.window.shutter.includes("shutterStandard")) {
        varr.shutter.translateZ(-0.007)
            if ( varr.window.shutter.includes("raisedPanel") || varr.window.shutter.includes("shutterStandard"))  {
          varr.shutter.translateZ(-0.01)
        
        }
      }
      try {
       if ( varr.window.nb == "3/") {
        varr.trim.scale.x = 0.925
        centerUnknownX(varr.trim,varr.window)

        varr.shutter.scale.x = 0.925
        centerUnknownX(varr.shutter,varr.window)
      } else if ( varr.window.nb == "2/") {
        varr.trim.scale.x = 0.935
        centerUnknownX(varr.trim,varr.window)

        varr.shutter.scale.x = 0.935
        centerUnknownX(varr.shutter,varr.window)
      }
    } catch {
      //pass
    }
     try {
      centerUnknownX(varr.box,varr.window)
    } catch {
      //pass
    }
    try {
      varr.box.scale.x = 1
      translateBox(varr)
    } catch {
      //pass
    }
      break;

    case "LeftWindow":   
       if ( varr.window.size == "3039/" || varr.window.size == "2239/") {
    var transValue = 0.055
  }    
        if ( Dpath != "cabana/") {
       translateOn(lefty,"boxmin",varr.window,"boxmin")
       varr.window.translateX(- transValue)
     }  if ( Dpath == "cabana/") {
 
      translateOn(lefty,"boxmax",varr.window,"boxmax", 0.002)
     }  else if ( Dpath == "designerCarriage/") {
      translateOn(lefty,"boxmax",varr.window,"boxmax",-0.002)
     }

       

         if ( typeof(varr.shutter) == "object") {
          centerUnknownZ(varr.shutter,varr.window)
          translateOn(varr.window,"boxmax",varr.shutter,"boxmax")
     
      }

      if ( typeof(varr.trim) == "object") {
        centerUnknownZ(varr.trim,varr.window)
        translateOn(varr.window,"boxmin",varr.trim,"boxmax")
      }
      centerUnknownZ(varr.raft,varr.window)
      translateOn(varr.window,"boxmax",varr.raft,"boxmin")
      varr.raft.translateZ(0.02)

      if ( varr.window.shutter.includes("raisedPanel") || varr.window.shutter.includes("XLRaised") || varr.window.shutter.includes("shutterStandard")) {
        varr.shutter.translateX(-0.007)
         
           if ( varr.window.shutter.includes("raisedPanel") || varr.window.shutter.includes("shutterStandard"))  {
          varr.shutter.translateX(-0.01)
        
        }
      }
      try {
       if ( varr.window.nb == "3/") {
        varr.trim.scale.z = 0.925
        centerUnknownZ(varr.trim,varr.window)

        varr.shutter.scale.z = 0.925
        centerUnknownZ(varr.shutter,varr.window)
      } else if ( varr.window.nb == "2/") {
        varr.trim.scale.z = 0.935
        centerUnknownZ(varr.trim,varr.window)

        varr.shutter.scale.z = 0.935
        centerUnknownZ(varr.shutter,varr.window)
      }
    } catch {
      //pass
    }
     try {
      centerUnknownZ(varr.box,varr.window)
    } catch {
      //pass
    }

    try {
       varr.box.scale.z = 1
      translateBox(varr)
    } catch {
      //pass
    }
    break;
    case "RightWindow":  
    if ( varr.window.size == "3039/" || varr.window.size == "2239/") {
    var transValue = 0.055
  }    
      if ( Dpath != "cabana/") {
      translateOn(righty,"boxmax",varr.window,"boxmax")
       varr.window.translateX( transValue)
    } if ( Dpath == "cabana/") {
      translateOn(righty,"boxmin",varr.window,"boxmin",-0.002)
    } else if ( Dpath == "designerCarriage/") {
      translateOn(righty,"boxmin",varr.window,"boxmin", 0.002)
    }
    

     


         if ( typeof(varr.shutter) == "object") {
          centerUnknownZ(varr.shutter,varr.window)
          translateOn(varr.window,"boxmin",varr.shutter,"boxmin")
      }

      if ( typeof(varr.trim) == "object") {
        centerUnknownZ(varr.trim,varr.window)
        translateOn(varr.window,"boxmax",varr.trim,"boxmin")
      }
      centerUnknownZ(varr.raft,varr.window)
      translateOn(varr.window,"boxmin",varr.raft,"boxmax")
      varr.raft.translateZ(0.02)
      if ( varr.window.shutter.includes("raisedPanel") || varr.window.shutter.includes("XLRaised") || varr.window.shutter.includes("shutterStandard")) {
        varr.shutter.translateX(0.007)
         if ( varr.window.shutter.includes("raisedPanel") || varr.window.shutter.includes("shutterStandard")) {
          varr.shutter.translateX(0.01)
        }
      }
      try {
       if ( varr.window.nb == "3/") {
        varr.trim.scale.z = 0.925
        centerUnknownZ(varr.trim,varr.window)

         varr.shutter.scale.z = 0.925
        centerUnknownZ(varr.shutter,varr.window)
      }  else if ( varr.window.nb == "2/") {
        varr.trim.scale.z = 0.935
        centerUnknownZ(varr.trim,varr.window)

         varr.shutter.scale.z = 0.935
        centerUnknownZ(varr.shutter,varr.window)
      }
    } catch {
      //pass
    }
     try {

      centerUnknownZ(varr.box,varr.window)
    } catch {
      //pass
    }
    try {
      varr.box.scale.z = 1
      translateBox(varr)
    } catch {
      //pass
    }
    break;
  }

}

function addingDoor(name,element1=DOORTYPE,element2="close",element3=doorTrim,element4=doorHinge,element5="rafter",element6 = "Standard door",replace="",replacel="") {
          
          // doorx,mesh,node,doorrx,materials,name,transValue
         
         
          let namo = name.replace(/[0-9]/g, '');

          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          if ( element6 == "Garage door") {
            path = "ConstantObjects/" + namo + "/" + "garage/" + GARAGESIZE
          }

          if ( (DOORSTYLE == "steel/" || DOORSTYLE == "fiber/") && DOORTYPE == "15lite" && DOORSIZE == "30/") {
            path = path = "ConstantObjects/" + namo +"/" + DOORSTYLE + "36/"
          } else if ( (DOORSTYLE == "steel/" || DOORSTYLE == "fiber/") && DOORTYPE == "15lite" && DOORSIZE == "5/") {
            path = path = "ConstantObjects/" + namo +"/" + DOORSTYLE + "6/"
          } else if ( (DOORSTYLE == "steel/" || DOORSTYLE == "fiber/") && (DOORTYPE == "15lite" || DOORTYPE == "9lite" || DOORTYPE == "11lite" || DOORTYPE == "4lite") && DOORSIZE == "4/") {
            path = path = "ConstantObjects/" + namo +"/" + DOORSTYLE + "6/"
          }

          let element = element1
          if ( DOORSTYLE == "standard/") {
            element = "door"
            DOORTYPE = "door"
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                name = name + doorPushed
                doorx = node
                doorx.name = name
                if (element6 == "Garage door") {
                  doorx.model = "garage/"
                  doorx.size = GARAGESIZE
                  doorx.type = GARAGEDOOR
                  doorx.trim = "miratecTrim2.5"
                  doorx.hinge = GARAGEHINGE
                  doorx.opening = GARAGEOPENING
                } else {
                doorx.model = DOORSTYLE
                doorx.size = DOORSIZE 
                doorx.type = DOORTYPE
                doorx.trim = doorTrim
                doorx.hinge = doorHinge
              }
              
              if ( (DOORSTYLE == "steel/" || DOORSTYLE == "fiber/") && DOORTYPE == "15lite" && (DOORSIZE == "30/" || DOORSIZE == "5/")) {
                if (namo == "FrontDoor" || namo == "BackDoor") {
                  doorx.scale.x = 0.85
                } else if ( namo == "RightDoor" || namo == "LeftDoor") {
                  doorx.scale.z = 0.85
                }
                } else if ( (DOORSTYLE == "steel/" || DOORSTYLE == "fiber/") && (DOORTYPE == "15lite" || DOORTYPE == "9lite" || DOORTYPE == "11lite" || DOORTYPE == "4lite") && DOORSIZE == "4/") {
                  if (namo == "FrontDoor" || namo == "BackDoor") {
                  doorx.scale.x = 0.8
                } else if ( namo == "RightDoor" || namo == "LeftDoor") {
                  doorx.scale.z = 0.8
                }
                }
                let tempStr = name + "Dict = {}"
                eval(tempStr)
                let addName = name + "Dict.name = name"
                eval(addName)
                let addDoor = name + "Dict.door = doorx"
                eval(addDoor)
                let temporaryDict = "listObj.push(" + name + "Dict)"
                eval(temporaryDict)

                let tempTrans = name + "Dict.translate = function() {translateDoorDict(this)}"
                eval(tempTrans)
                scene.add(doorx)

                objects.push(doorx) 
                objectsPushed.push(name)
                moveListo.push(name,doorx)
                
                doorPushed += 1
                if (doorx.model == "standard/") {
                  try {
                  element2 = doorClose
                } catch {
                  element2 = "trimStd2"
                }
                } else if ( doorx.model == "carriage/") {
                  try {
                    element2 = doorClose
                  } catch {
                    element3 = "win2"
                  }
                }
                
                 if ( DOORSTYLE == "standard/" && element6 != "Garage door") {
                DOORTYPE = "door"
                element1 = "door"

                element2 = "trimStd2"

                doorTrim = "trimStd1"
                element3 = "trimStd1"

                doorHinge = "hinges"
                element4 = "hinges"
            
              }
                
               
                addingTrim(name,element2,element3,element4,element5,replace,replacel,element6)
                try {
                  if (doorx.model == "standard/") {
                    //duraTemp()
                    applyTexture("Textures/"+myText,repeatSiding,rotateSiding,mySiding)
                  }
                } catch {
                  //pass
                }
              }
             }) 
            dictoColor[name] = '0xa3a3a3' //????
          })         
         });   
        
        }

function addingTrim(name,element2,element3,element4,element5,replace,replacel,element6) {

          let namo = name.replace(/[0-9]/g, '');
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          if ( element6 == "Garage door") {
            path = "ConstantObjects/" + namo + "/" + "garage/" + GARAGESIZE
          }
          let element = element2
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                closex = node
              
                scene.add(closex)
           
                let addClose = name + "Dict.close = closex"
                eval(addClose)
                
                addingOutsideTrim(name,element3,element4,element5,replace,replacel,element6)
              }
             }) 
          })         
         });   
         } 

function addingOutsideTrim(name,element3,element4,element5,replace,replacel,element6) {
          let namo = name.replace(/[0-9]/g, '');
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          if ( element6 == "Garage door") {
            path = "ConstantObjects/" + namo + "/" + "garage/" + GARAGESIZE
          }
          let element = element3
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
          
                node.castShadow = false;
                node.receiveShadow = false;
                trimx = node
             
                let addTrim = name + "Dict.trim = trimx"
                eval(addTrim)
           
                scene.add(trimx)
              }
             }) 
            addingHinges(name,element4,element5,replace,replacel,element6)
          })         
         });   
         } 
function addingHinges(name,element4,element5,replace,replacel,element6) {
          let namo = name.replace(/[0-9]/g, '');
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          if ( element6 == "Garage door") {
            path = "ConstantObjects/" + namo + "/" + "garage/" + GARAGESIZE
          }
          if ( DOORSTYLE == "steel/")  {
            if ( DOORTYPE != "door") {
              path = "ConstantObjects/" + namo +"/" + "fiber/"+ DOORSIZE
            }    
            }
          let element = element4
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
        
                node.castShadow = false;
                node.receiveShadow = false;
                ohinge = node
         
                let addHinge = name + "Dict.hinge = ohinge"
                eval(addHinge)
              
                scene.add(ohinge)         
                addingRaft(name,element5,replace,replacel,element6)
                
                     
              }
             }) 
          })         
         });   
         } 



function addingRaft(name,element5,replace,replacel,element6) {
          let namo = name.replace(/[0-9]/g, '');
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE

          if ( element6 == "Garage door") {
            path = "ConstantObjects/" + namo + "/" + "garage/" + GARAGESIZE

          }

          let element = element5
          if ( element6 == "Garage door") {
            if ( Dpath == "highbarn/") {
              element+= sizeD.replace("wide","")+ "high"
            } else if ( Dpath == "Shed2/") {
              element += sizeD.replace("wide","")+ "shop"

            }
          }
          var managerDoor = new THREE.LoadingManager();
          managerDoor.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed ✔ "
          let side = name.replace(/[0-9]/g,'')
          side = side.replace("Door","")
              
          possibleLayout(side)
          if (objectsPushed.includes(name) == false) {
              alert("No more space in wall to add more doors")
              }       
            }
          var mtlLoader = new THREE.MTLLoader(managerDoor);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerDoor);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                oraft = node
                oraft.name = element5
                let addRaft = name + "Dict.raft = oraft"
                eval(addRaft)
                
                 if ( Dpath == "Shed2/") {
                oraft.scale.z = 0.94
              }
                scene.add(oraft)
              
                let temp = "var tempDicto = " + name + "Dict"
                eval(temp)
                if ( element6 != "Garage door" && tempDicto.door.model != "standard/") {
                tempDicto.translate()
                  let newNamo2 = namo.replace("Door","")
                newNamo2 = newNamo2.replace("Window","")

               
                possibleLayout(newNamo2)
              } else if ( element6 == "Garage door"){
              
                addingGarageGlassHigh(name)
              } else if ( tempDicto.door.model == "standard/") {
                addingClose2(name)
              }
             
                if (This_First_Time == true ) {
                  if ( Dpath == "minibarn/" || Dpath == "vinylbarn/"){
                    addingWindow1("LeftWindow")
                  } else {
                  addingWindow1("FrontWindow")

                }
                }
                }
             }) 
          })         
         });   
} 


function addingClose2(name) {

          let namo = name.replace(/[0-9]/g, '');

          let path = "ConstantObjects/" + namo + "/standard/" 
          
          try {
            let statement = "var prevclose = " + name + "Dict.close2"
            eval(statement)
            //scene.remove(prevHighGlass)
          } catch {
            //pass
          }

          let element = "close2"
          
          var managerDoor = new THREE.LoadingManager();
          managerDoor.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed ✔ "
           
            }
          var mtlLoader = new THREE.MTLLoader(managerDoor);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerDoor);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                oclose2 = node
                oclose2.name = "close2"
                let closeAdd = name + "Dict.close2 = oclose2"
                eval(closeAdd)
                
                scene.add(oclose2)  
                
                try {
                  scene.remove(prevclose)
                } catch {
                  //pass 
                }
                let temp = "var tempDicto = " + name + "Dict"
                eval(temp)
                tempDicto.translate()

                let newNamo = namo.replace("Door","")
                newNamo = newNamo.replace("Window","")

               
                possibleLayout(newNamo) 
                 if (objectsPushed.includes(name) == false) {
                  alert("Not enough space in wall to add more doors")
                }
              }

             }) 
          })         
         });   
}

function addingGarageGlassHigh(name,el= "normalHigh",trr= "none") {
          let namo = name.replace(/[0-9]/g, '');
          path = "ConstantObjects/" + namo + "/" + "garage/" + GARAGESIZE + "glass/"
          
          try {
            let statement = "var prevHighGlass = " + name + "Dict.glassHigh"
            eval(statement)
            //scene.remove(prevHighGlass)
          } catch {
            //pass
          }

          let element = el
          if ( element == "normal") {
            element = "normalHigh"
          }
          var managerDoor = new THREE.LoadingManager();
          managerDoor.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed ✔ "
           
            }
          var mtlLoader = new THREE.MTLLoader(managerDoor);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerDoor);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                oglassHigh = node
                oglassHigh.name = GARAGEGLASS
                let addglass = name + "Dict.glassHigh = oglassHigh"
                eval(addglass)
                
                scene.add(oglassHigh)  
                 try {
                translateOn(prevHighGlass,"boxminy",oglassHigh,"boxminy")
              } catch {
                //pass
              }
                try {
                  scene.remove(prevHighGlass)
                } catch {
                  //pass
                }
                  try {
          for ( h of oglassHigh.material ) {
            h.color.setHex(COLOR_OF_GARAGE)
            
          }
          
        
      } catch {
        //pass
        }
                if ( trr != "none") {
                  addingGarageGlassLow(name,trr)
                } else {
                addingGarageGlassLow(name)
              } 
              }

             }) 
          })         
         });   
}

function addingGarageGlassLow(name,el = "normalLow") {

          let namo = name.replace(/[0-9]/g, '');
          path = "ConstantObjects/" + namo + "/" + "garage/" + GARAGESIZE + "glass/"
           try {
            let statement = "var prevLowGlass = " +name + "Dict.glassLow"
            eval(statement)
            //scene.remove(prevLowGlass)
          } catch {
            //pass
          }
          let element = el
          if ( element == "normal") {
            element = "normalLow"
          }
          var managerDoor = new THREE.LoadingManager();
          managerDoor.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed ✔ "
           
            }
          var mtlLoader = new THREE.MTLLoader(managerDoor);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerDoor);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                oglassLow = node
                if ( el == "normalLow") {
                  oglassLow.name = "normal"
                } else {
                oglassLow.name = GARAGEGLASS
              }
              try {
                translateOn(prevLowGlass,"boxminy",oglassLow,"boxminy")
              } catch {
                //pass
              }
                try {
                  scene.remove(prevLowGlass)
                } catch {
                  //pass
                }
                let addglass = name + "Dict.glassLow = oglassLow"
                eval(addglass)
                
                let temp = "var tempDicto = " + name + "Dict"
                eval(temp)
                try {
          for ( h of oglassLow.material ) {
            h.color.setHex(COLOR_OF_GARAGE)
            
          }
          
        
      } catch {
        //pass
        }
                tempDicto.translate()
              
                scene.add(oglassLow)     
                
              }

             }) 
          })         
         });   
}

function translateO(replace) {
 
  var inoch = moveListo.indexOf(replace)
  
  var myob = replace
  
  if ( replace.includes("Front") || replace.includes("Back")) {

    var posmin = parseFloat(getPos(moveListo[inoch+1],"boxmin"))
    var posmin1 = parseFloat(getPos(moveListo[moveListo.length-5],"boxmin"))
      try {
  moveListo[moveListo.length-5].translateX(posmin - posmin1)
  moveListo[moveListo.length-4].translateX(posmin - posmin1)
  moveListo[moveListo.length-3].translateX(posmin - posmin1)
  moveListo[moveListo.length-2].translateX(posmin - posmin1)
  moveListo[moveListo.length-1].translateX(posmin - posmin1)
} catch {
  console.log("")
}
  } else if ( replace.includes("Right") || replace.includes("Left")) {
    var posmin = parseFloat(getPos(moveListo[inoch+1],"boxminz"))
    var posmin1 = parseFloat(getPos(moveListo[moveListo.length-5],"boxminz"))
      try {
  moveListo[moveListo.length-5].translateZ(posmin - posmin1)
  moveListo[moveListo.length-4].translateZ(posmin - posmin1)
  moveListo[moveListo.length-3].translateZ(posmin - posmin1)
  moveListo[moveListo.length-2].translateZ(posmin - posmin1)
  moveListo[moveListo.length-1].translateZ(posmin - posmin1)
} catch {
  console.log("")
}
  }
if (replace.includes("Front")) {
        moveListo[moveListo.length-5].translateZ(the_resylt2)
        moveListo[moveListo.length-4].translateZ(the_resylt2)
        moveListo[moveListo.length-3].translateZ(the_resylt2)
        moveListo[moveListo.length-2].translateZ(the_resylt2)
        moveListo[moveListo.length-1].translateZ(the_resylt2)
} else if (replace.includes("Back")) {

        moveListo[moveListo.length-5].translateZ(reversedResult2)
        moveListo[moveListo.length-4].translateZ(reversedResult2)
        moveListo[moveListo.length-3].translateZ(reversedResult2)
        moveListo[moveListo.length-2].translateZ(reversedResult2)
        moveListo[moveListo.length-1].translateZ(reversedResult2)
} else if (replace.includes("Right")) {
        moveListo[moveListo.length-5].translateX(resultreverse2)
        moveListo[moveListo.length-4].translateX(resultreverse2)
        moveListo[moveListo.length-3].translateX(resultreverse2)
        moveListo[moveListo.length-2].translateX(resultreverse2)
        moveListo[moveListo.length-1].translateX(resultreverse2)

} else if ( replace.includes("Left")) {
        moveListo[moveListo.length-5].translateX(resultcorner2)
        moveListo[moveListo.length-4].translateX(resultcorner2)
        moveListo[moveListo.length-3].translateX(resultcorner2)
        moveListo[moveListo.length-2].translateX(resultcorner2)
        moveListo[moveListo.length-1].translateX(resultcorner2)
}

//alert(moveListo[inoch])

moveListo.splice(inoch,1)
moveListo.splice(inoch,1)
moveListo.splice(inoch,1)
moveListo.splice(inoch,1)
moveListo.splice(inoch,1)
moveListo.splice(inoch,1)
scene.remove(myListomesh[inoch+1])
scene.remove(myListomesh[inoch+2])
scene.remove(myListomesh[inoch+3])
scene.remove(myListomesh[inoch+4])
scene.remove(myListomesh[inoch+5])
myListomesh.splice(inoch,1)
myListomesh.splice(inoch,1)
myListomesh.splice(inoch,1)
myListomesh.splice(inoch,1)
myListomesh.splice(inoch,1)
myListomesh.splice(inoch,1)

//var element = document.getElementById(myob)
//element.parentNode.removeChild(element);
//alert(moveListo)

}
function updateRoofRoof(){

  const texture = new THREE.TextureLoader().load("Textures/shingles/charcoal.jpg")
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = 16;
        texture.rotation = (Math.PI/2)
        texture.repeat.set(1,1)
for ( i=0;i<roofRoof.material.length;i++) {
  roofRoof.material.map = texture 
  roofRoof.material.needsUpdate = true;
  alert("okkk")
}
}


//loadTestModel()


//architecturalShingles()  
//loadingLowWallFrame()
//loadingLowWallGlass()




//scene.remove(shutter1Mesh)





function transPly() {
  for (i =0;i<plywood.material.length;i++) {
    plywood.material[i].transparent = true;
    plywood.material[i].opacity = 0.5
    charcoalS()
  }
}

function updateStuff() {
  try {
  trimColor(TRIMCOLOR)
  sidingColor(SIDINGCOLOR)


} catch {
  console.log("error at update stuff")
}
}

function loadingLowWall() {
  scene.remove(win1Mesh)
  loadingLowGlass()
  loadingLowFrame()


}


function updateSizeWire() {
  try {
     wirings.scale.z = ZZ
  } catch {
    console.log("wire")
  }
}
function updateSizeRamp() {
  
    try {
      ramps.scale.z = ZZ
    } catch {
      console.log("updatesizeramp error")
    }
  
}
function updateSizeCorners() {
  try {
    let scaleCorner
    //alert(resultcorner22)
    if ( Dpath != "leanto/" && Dpath != "cabana/" && Dpath != "designerCarriage/" && Dpath != "carriage/" && Dpath != "highCarriage/") {
    try {
    cornersFrontLeft.translateX(resultcorner22)
    cornersFrontRight.translateX(resultreverse22)
    cornersBackRight.translateX(resultreverse22)
    cornersBackLeft.translateX(resultcorner22)

    
    cornersBackLeft.translateZ(reversedResult22)
    cornersFrontRight.translateZ(the_resylt22)
    
    
    cornersFrontLeft.translateZ(the_resylt22)
    cornersBackRight.translateZ(reversedResult22)
    } catch {
  console.log("error at updateSizeCorners")
}
  } else {

    translateOn(front,"boxminz",cornersFrontLeft,"boxmaxz",0.022)
    translateOn(lefty,"boxmin",cornersFrontLeft,"boxmin",-0.01)

    translateOn(front,"boxminz",cornersFrontRight,"boxmaxz",0.022)
    translateOn(righty,"boxmax",cornersFrontRight,"boxmax",0.01)

    translateOn(backty,"boxmaxz",cornersBackRight,"boxminz",-0.022)
    translateOn(righty,"boxmax",cornersBackRight,"boxmax",0.01)


    translateOn(backty,"boxmaxz",cornersBackLeft,"boxminz",-0.022)
    translateOn(lefty,"boxmin",cornersBackLeft,"boxmin",-0.01)

    if ( Dpath == "designerCarriage/") {
      if ( ZZ == 1.25) {
        translateOn(front,"boxminz",cornersFrontRight,"boxmaxz",0.036)
        translateOn(front,"boxminz",cornersFrontLeft,"boxmaxz",0.036)

       
      } else if ( ZZ == 1.5) {
        translateOn(front,"boxminz",cornersFrontRight,"boxmaxz",0.054)
        translateOn(front,"boxminz",cornersFrontLeft,"boxmaxz",0.054)

        translateOn(backty,"boxmaxz",cornersBackRight,"boxminz",-0.016)
        translateOn(backty,"boxmaxz",cornersBackLeft,"boxminz",-0.016)
      } else if ( ZZ == 1.75) {
        translateOn(front,"boxminz",cornersFrontRight,"boxmaxz",0.066)
        translateOn(front,"boxminz",cornersFrontLeft,"boxmaxz",0.066)

        translateOn(backty,"boxmaxz",cornersBackRight,"boxminz",-0.016)
        translateOn(backty,"boxmaxz",cornersBackLeft,"boxminz",-0.016)
      }
    }
    //translateOn(front,"boxminz",cornersFrontRight,"boxminz")
  }


    


if ( highwal == true )  {
  scaleCorner = 1.0888999999999902
} else {
  scaleCorner = 1
}
  for (ko of [cornersFrontRight,cornersFrontLeft,cornersBackLeft,cornersBackRight]) {
    let iniPos = getPos(ko,"boxminy")
    ko.scale.y = scaleCorner
    ko.translateY(iniPos-getPos(ko,"boxminy"))
  }
 /*
 if ( Dpath == "leanto/") {
  //scaleBetween2Objects(backty,righty,"boxminy",cornersBackRight,"boxmaxy","y")

  //scaleUnknown(backty,"boxmaxy",cornersBackRight,"boxmaxy")
  //scaleUnknown(backty,"boxmaxy",cornersBackLeft,"boxmaxy")
 }   
 */
 try {
  if ( cornersBackRight.name != "metalfdsfs") {
 if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
  if ( cornersBackRight.name != "metal") {
  for ( c of [cornersFrontLeft,cornersFrontRight,cornersBackRight,cornersBackLeft]) {
  var pos1 = getPos(c,"boxminy")
  c.scale.y = 0.582
  var pos2 = getPos(c,"boxminy")
  c.translateY(pos1-pos2)
 }
}
} else if ( Dpath == "carriage/") {
  let pival = 0.86
  if ( coringStyle == "Metal") {
    pival = 1
  }
  for ( c of [cornersFrontLeft,cornersFrontRight,cornersBackRight,cornersBackLeft]) {
  var pos1 = getPos(c,"boxminy")
  c.scale.y = pival
  var pos2 = getPos(c,"boxminy")
  c.translateY(pos1-pos2)
 }
} else if ( Dpath == "highCarriage/") {
  for ( c of [cornersFrontLeft,cornersFrontRight,cornersBackRight,cornersBackLeft]) {
  var pos1 = getPos(c,"boxminy")
  c.scale.y = 0.9509
  var pos2 = getPos(c,"boxminy")
  c.translateY(pos1-pos2)
 }
} else if ( Dpath == "designerCarriage/") {
  myval = 0.9555
   if (  coringStyle == "StandardWide") {
        myval = 1.01
        
      }
  for ( c of [cornersFrontLeft,cornersFrontRight]) {
  var pos1 = getPos(c,"boxminy")
  c.scale.y = myval
  var pos2 = getPos(c,"boxminy") 
  c.translateY(pos1-pos2)
 }
  for ( c of [cornersBackLeft,cornersBackRight]) {
  var pos1 = getPos(c,"boxminy")
  c.scale.y = 1.019
  var pos2 = getPos(c,"boxminy") 
  c.translateY(pos1-pos2)
 }
} else if ( Dpath == "cabana/") {
    for ( c of [cornersFrontLeft,cornersFrontRight,cornersBackRight,cornersBackLeft]) {
  var pos1 = getPos(c,"boxminy")
  c.scale.y = 1.08
  var pos2 = getPos(c,"boxminy")
  c.translateY(pos1-pos2)
 }
} else if ( Dpath == "capecode/") {
    for ( c of [cornersFrontLeft,cornersFrontRight,cornersBackRight,cornersBackLeft]) {
  var pos1 = getPos(c,"boxminy")
  c.scale.y = 1.0818
  var pos2 = getPos(c,"boxminy")
  c.translateY(pos1-pos2)
 }

} else if ( Dpath == "leanto/") {
 
  for ( backcorners of [cornersBackLeft,cornersBackRight] ) {
    scaleBetween2Objects(backcorners,righty,"boxminy",righty,"boxmaxy","y")
    
  }
  for ( frontcorners of [cornersFrontLeft,cornersFrontRight]) {
    let pos1 = getPos(frontcorners,"boxminy")
    frontcorners.scale.y = 1.01
    let pos2 = getPos(frontcorners,"boxminy")
    frontcorners.translateY(pos1-pos2)
  }
} 
else if ( Dpath == "highbarn/") {
  let myval = 0.99
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
}
}catch {
  //pass
}
} catch {
  //pass
}
}

function scaleUnknown(obj1,axis1,obj2,axis2) {
  let pos1 = getPos(obj1,axis1)

  var pos2
  let ax
  pos2 = getPos(obj2,axis2)
  var initPos = getPos(obj2,"boxminy")
  ax = axis2.replace("boxmin","")
  ax = axis2.replace("boxmax","")
  if ( ax == "") {
    while ( pos1>= pos2) {
      obj2.scale.x += 0.01

      pos2 = getPos(obj2,axis2)
    }
    obj2.translateX(initPos - pos2)
  } else if ( ax == "y") {
     while ( pos1>= pos2) {
      
      obj2.scale.y += 0.01

      pos2 = getPos(obj2,axis2)
    }
    while ( pos1<pos2) {
      obj2.scale.y -= 0.01
      pos2 = getPos(obj2,axis2)
    }
    obj2.translateY(initPos - getPos(obj2,"boxminy"))
  } else if ( ax == "z") {
     while ( pos1>= pos2) {
      obj2.scale.z += 0.01

      pos2 = getPos(obj2,axis2)
      
    }
    obj2.translateZ(initPos - pos2)
  }

}
function updateSizeSiding() {
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

}
function updateSizeShingles() {

        try {
      textureS.repeat.x = XS + XX
      textureS.repeat.z = ZS + ZZ
      textureS2.repeat.x = XS + XX 
      textureS2.repeat.z = ZS + ZZ
    } catch {
      console.log("error")
    }
      for ( i=0;i<shingles.material.length;i++) {
        if (!([11,12,13,15,4,6,10].includes(i))) {
        shingles.material[i].map = textureS
        shingles.material[i].normalMap = textureS2
      }
  
      
    }

}

function scaleClose(x) {
  posClose = getPos(x,"boxminy")
  x.scale.y += 0.08
  posClose2 = getPos(x,"boxminy")
  x.translateY(posClose-posClose2)
}

function scaleCloset(x) {
  x = x 
  cPos = getPos(x,"boxmaxy")
  sPos = getPos(plat2,"boxmaxy")
  if ( cPos < sPos/1.06) {
  scaleClose(x)
  scaleCloset(x)
  } else {
  console.log("breaking scaleCloset loop")
  }

  
}

  

function scaleClosey(x) {
  posClose = getPos(x,"boxminy")
  x.scale.y -= 0.08
  posClose2 = getPos(x,"boxminy")
  x.translateY(posClose-posClose2)
}
function scaleClosety(x) {
  x = x 
  cPos = getPos(x,"boxmaxy")
  sPos = getPos(plat2,"boxmaxy")
  if ( cPos > sPos) {
  scaleClosey(x)
  scaleClosety(x)
  } else {
  console.log("breaking scaleCloset loop")
  }

  
}
function scalingClosets() {
  poski1 = getPos(closeLeft,"boxmaxy")
  poski2 = getPos(plat2,"boxmaxy")
  if ( poski1 > poski2) {
    scaleClosety(closeLeft)
    scaleClosety(closeRight)
  } else {
    scaleCloset(closeLeft)
    scaleCloset(closeRight)
  }
}

function scalingWall(x) {
  if ( Dpath == "Shed2/") {
     posuy = getPos(plat2,"boxmaxy")
     var geometry = new THREE.Geometry().fromBufferGeometry( x.geometry );
     geometry.computeFaceNormals();
     geometry.mergeVertices();
     geometry.vertices[7].y = posuy
     geometry.vertices[4].y =  posuy
     geometry.computeVertexNormals();
     x.geometry = new THREE.BufferGeometry().fromGeometry( geometry );
     try {
       translateOn(lefty,"boxmaxy",vents,"boxmaxy",-0.25)
       translateOn(righty,"boxmaxy",ventsRight,"boxmaxy",-0.25)
     } catch {
      //pass
     }
}
}


function testScaleWall(obj,axis,pos,valTestScalWall = 0) {  //ADD +1 TO THE CONSOLE.LOG OUTPUT !!!
    
     var geometry = new THREE.Geometry().fromBufferGeometry( obj.geometry );
     geometry.computeFaceNormals();
     geometry.mergeVertices();
     if ( axis == "y") {
 
      prevVal = geometry.vertices[valTestScalWall].y
     geometry.vertices[valTestScalWall].y = pos
   } else if ( axis == "x") {
    prevVal =  geometry.vertices[valTestScalWall].x 
    geometry.vertices[valTestScalWall].x = pos

   } else if ( axis == "z") {
    prevVal =  geometry.vertices[valTestScalWall].x 
    geometry.vertices[valTestScalWall].z = pos
   }
     geometry.computeVertexNormals();
     obj.geometry = new THREE.BufferGeometry().fromGeometry( geometry );

    
     setTimeout(testScal,1500,obj,axis,prevVal,valTestScalWall,pos)


}

function testScal(obj,axis,prevVal,valTestScalWall,pos){
   
     var geometry = new THREE.Geometry().fromBufferGeometry( obj.geometry );
     geometry.computeFaceNormals();
     geometry.mergeVertices();
     if ( axis == "y") {
 
     geometry.vertices[valTestScalWall].y =  prevVal
   } else if ( axis == "x") {
  
    geometry.vertices[valTestScalWall].x =  prevVal

   } else if ( axis == "z") {
 
    geometry.vertices[valTestScalWall].z = prevVal
   }
     geometry.computeVertexNormals();
     obj.geometry = new THREE.BufferGeometry().fromGeometry( geometry );
     console.log(valTestScalWall)
      valTestScalWall += 1
     testScaleWall(obj,axis,pos,valTestScalWall)

   


}

function scaleTheWall() {
  scalingWall(righty)
  scalingWall(lefty)
}



function updateSizePainted() {
  try {
  paintedR.scale.z = ZZ
      paintedR.scale.x = XX
    } catch {
      console.log("painted")
    }
}

function updateSizeDoor() {
  try {
  trim.scale.z = ZZ 
     door.scale.z = ZZ
      outsideTrim.scale.z = ZZ
     hinges.scale.z = ZZ 
   } catch {
    console.log("update size door error")
   }
}

function updateSizeVent() {
   try {
     vents.scale.x = XX+0.005
      centerObjects(vents)
   }catch {
    console.log("resizing vents error")
   }
}

function loadingCornerStudBackLeft() {
          var path = Dpath + "shed/"
          var element = "cornerStudBackLeft"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersStudBackLeft = node
                scene.add(cornersStudBackLeft)
                

              }
             })  
     

          })         
         });         
       } 


function loadingOverClosing() {
          var path = "ConstantObjects/" 
          if ( Dpath == "capecode/") {
            path = "capecode/shed/"
          }
          var element = "overClosing"
           if ( Dpath == "carriage/" ||Dpath == "highCarriage/") {
            element = "overClosingCarriage"
          } else if ( Dpath == "designerCarriage/") {
            path = "designerCarriage/shed/"
            element = "overClosing"
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                overClosing = node
                scene.add(overClosing)

                for ( i = 0; i <overClosing.material.length;i++) {
                  overClosing.material[i].transparent = true;
                  overClosing.material[i].opacity = 0;
                }

              }
             })  
     
             
           
           

          })         
         });         
       } 

function loadingOverClosing2() {
          var path = "ConstantObjects/"
          var element = "overClosing2"
          if ( Dpath == "capecode/") {
            path = "capecode/shed/"
            element = "overclosing2"
          }
          if ( Dpath == "carriage/" ||Dpath == "highCarriage/") {
            element = "overClosing2Carriage"
          } else if ( Dpath == "designerCarriage/") {
            path = "designerCarriage/shed/"
            element = "overClosing2"
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                overClosing2 = node
                scene.add(overClosing2)

                for ( i = 0; i <overClosing2.material.length;i++) {
                  overClosing2.material[i].transparent = true;
                  overClosing2.material[i].opacity = 0;
                }

              }
             })  
     
             
           
           

          })         
         });         
       } 

function loadingDiviserRight() {
          var path = Dpath + "shed/pitch/" + PitchPath + "/"
          var element = "diviserRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                diviserRight = node


              }
             })  
     
            scene.add(mesh) 
           
           

          })         
         });         
       } 

function loadingDiviserLeft() {
          var path = Dpath + "shed/pitch/" + PitchPath + "/"
          var element = "diviserLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                diviserLeft = node


              }
             })  
     
            scene.add(mesh) 
           
           

          })         
         });         
       } 

function loadingRoofRoof() {
          var path = Dpath + "roof/"
          var element = "roofRoof"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                roofRoof = node


              }
             })  
            ROOFROOF = mesh
            scene.add(mesh) 
            setTimeout(updateRoofRoof,50)
           
           

          })         
         });         
       } 

function loadingCornerStudBackRight() {
          var path = Dpath + "shed/"
          var element = "cornerStudBackRight"
        
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersStudBackRight = node
                scene.add(cornersStudBackRight)
                

              }
             })  
     
            
           
           

          })         
         });         
       } 

function loadingCornerStudFrontLeft() {
          var path = Dpath + "shed/"
          var element = "cornerStudFrontLeft"
       
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersStudFrontLeft = node
                scene.add(cornersStudFrontLeft)
               
              }
             })  
     
    
           
           

          })         
         });         
       } 

function loadingCornerStudFrontRight() {
          var path = Dpath + "shed/"
          var element = "cornerStudFrontRight"
         
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersStudFrontRight = node
                scene.add(cornersStudFrontRight)
              
              }
             })  
     
   
           
           

          })         
         });         
       } 






function removeOverhangs() {
  try {
    scene.remove(overhangLeft)
    scene.remove(overhangRight)
  } catch {
    console.log("no overhang to remove")
  }
}

function updateSizeOverhang() {
  try {
    overhangsLeft.translateX(resultcorner22)
    overhangsLeft.scale.z = ZZ 
    overhangsRight.translateX(resultreverse22)
    overhangsRight.scale.z = ZZ
  } catch {
    console.log("fdfd")
  }
}
function loadingOverhang1() {
  if ( Dpath == "Shed2/") {
  removeOverhangs()
  loadingOverhang1Left()
  loadingOverhang1Right()
  theOverhang = loadingOverhang1
  //setTimeout(updateSizeOverhang,350)
}
       }




function loadingOverhang2() {
   if ( Dpath == "Shed2/") {
         removeOverhangs()
  loadingOverhang2Left()
  loadingOverhang2Right()
  theOverhang = loadingOverhang2
  //updateSizeOverhang()
  //etTimeout(updateSizeOverhang,350)
       }
     }

function loadingOverhang3() {
   if ( Dpath == "Shed2/") {
        removeOverhangs()
  loadingOverhang3Left()
  loadingOverhang3Right()
  theOverhang = loadingOverhang3
  //setTimeout(updateSizeOverhang,350)
       }
     }

function loadingOverhang4() {
   if ( Dpath == "Shed2/") {
        removeOverhangs()
  loadingOverhang4Left()
  loadingOverhang4Right()
  theOverhang = loadingOverhang4
  //updateSizeOverhang()
  //setTimeout(updateSizeOverhang,350)
       }
     }



function removingCorners() {

    
    scene.remove(cornersFrontLeft)
    scene.remove(cornersFrontRight)
    scene.remove(cornersBackRight)
    scene.remove(cornersBackLeft)


}
function loadingCorners() {
          var path = Dpath + "shed/"
          var element = "corners"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                corners = node
                scene.add(corners)
                setTransp(corners,0)
                corners.translateY(20)
              }
             })  

          })         
         });         
       } 


function cornerTransparency() {

  removingCorners()
  loadingCornersBackRight()
  loadingCornersBackLeft()
  loadingCornersFrontRight()
  loadingCornersFrontLeft()
   setTimeout(updateStuff,250)
    setTimeout(updateSizeCorners,250)
}

function loadingCornersBackRight() {
          var path = Dpath + "shed/"
          var element = "cornersBackRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersBackRight = node
                cornersBackRight.name = "metal"

                scene.add(cornersBackRight)
                  loadingCornersBackLeft()
              }
             }) 
           

          })         
         });         
       }

function loadingCornersBackLeft() {
          var path = Dpath + "shed/"
          var element = "cornersBackLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersBackLeft = node

                scene.add(cornersBackLeft)
                loadingCornersFrontRight()
              }
             })  
          })         
         });         
       }

function loadingCornersFrontRight() {
          var path = Dpath + "shed/"
          var element = "cornersFrontRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersFrontRight = node
                scene.add(cornersFrontRight)
                loadingCornersFrontLeft()
              }
             })  
          })         
         });         
       }

function loadingCornersFrontLeft() {
          var path = Dpath + "shed/"
          var element = "cornersFrontLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersFrontLeft = node
                scene.add(cornersFrontLeft)
                updateStuff()
                updateSizeCorners()

              }
             })  
          })         
         });         
       }


function loadingMetalCorners() {
  removingCorners()
  loadingCornersBackRight()
   coringStyle = "Metal"

       }

function loadingWideMiratec() {
    removingCorners()
    loadingWideMiratecFrontLeft()
     coringStyle = "Wide"

       }

function loadingWideMiratecFrontLeft() {
     
          var path = "ConstantObjects/" 
          var element = "wideMiratecFrontRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersFrontLeft = node
                scene.add(cornersFrontLeft)
                loadingWideMiratecFrontRight()

              }
             })           
          })         
         });         
       }

function loadingWideMiratecFrontRight() {

      
          var path = "ConstantObjects/"
          var element = "wideMiratecFrontLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersFrontRight = node
                scene.add(cornersFrontRight)
                loadingWideMiratecBackLeft()
              }
             })  
          })         
         });         
       }

function loadingWideMiratecBackLeft() {
          var path = "ConstantObjects/"
          var element = "wideMiratecBackLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersBackLeft = node
                scene.add(cornersBackLeft)
               loadingWideMiratecBackRight() 
              }
             })  

          })         
         });         
       }

function loadingWideMiratecBackRight() {
          var path = "ConstantObjects/"
          var element = "wideMiratecBackRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersBackRight = node
                scene.add(cornersBackRight)
              
                updateStuff()
                updateSizeCorners()
              }
             })  
          })         
         });         
       }

function loadingExtraWideMiratec() {
      removingCorners()    
      loadingExtraWideMiratecFrontLeft()
      coringStyle = "ExtraWide"

       }

function loadingExtraWideMiratecFrontLeft() {
          var path =  "ConstantObjects/"
          var element = "extraWideMiratecFrontLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersFrontLeft = node
                scene.add(cornersFrontLeft)
                loadingExtraWideMiratecFrontRight()
              }
             })  
          })         
         });         
       }

function loadingExtraWideMiratecFrontRight() {
          var path =  "ConstantObjects/"
          var element = "extraWideMiratecFrontRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersFrontRight = node
                scene.add(cornersFrontRight)
                loadingExtraWideMiratecBackLeft()

              }
             })  

          })         
         });         
       }

function loadingExtraWideMiratecBackLeft() {
          var path =  "ConstantObjects/"
          var element = "extraWideMiratecBackLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersBackLeft = node
                scene.add(cornersBackLeft)
                loadingExtraWideMiratecBackRight()
              }
             })           
          })         
         });         
       }

function loadingExtraWideMiratecBackRight() {
          var path =  "ConstantObjects/"
          var element = "extraWideMiratecBackRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersBackRight = node
                scene.add(cornersBackRight)
                updateStuff()
                updateSizeCorners()
              }
             })  
            
        
          })         
         });         
       }

function loadingStandardMiratec() {
        try {
        removingCorners()
      } catch {
        //pass
      }
        if ( Dpath != "designerCarriage/") {
        loadingStandardMiratecFrontLeft()
      } else {
        loadingCornersBackRight()
      }
       coringStyle = "StandardWide"
       
      
       }

function loadingStandardMiratecFrontLeft() {
          var path =  "ConstantObjects/"
          var element = "standardMiratecFrontLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersFrontLeft = node
                scene.add(cornersFrontLeft)

        loadingStandardMiratecFrontRight()  
    
              }
             })  

          })         
         });         
       }


function loadingSpecialCornerDesignerCarriage() {
          var path =  "designerCarriage/shed/"
          var element = "cornerRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornerRight = node
                scene.add(cornerRight)
                cornerLeft = cornerRight.clone()
                scene.add(cornerLeft)
                setTransp(cornerLeft,0)
                setTransp(cornerRight,0)

        
    
              }
             })  

          })         
         });         
       }

function loadingStandardMiratecFrontRight() {
          var path =  "ConstantObjects/"
          var element = "standardMiratecFrontRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersFrontRight = node
           
                scene.add(cornersFrontRight)

        loadingStandardMiratecBackLeft()
        
              }
             })  

          })         
         });         
       }

function loadingStandardMiratecBackLeft() {
          var path =  "ConstantObjects/"
          var element = "standardMiratecBackLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersBackLeft = node
                  
                scene.add(cornersBackLeft)
               
        loadingStandardMiratecBackRight()
      


              }
             })  
          })         
         });         
       }

function loadingStandardMiratecBackRight() {
          var path =  "ConstantObjects/"
          var element = "standardMiratecBackRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cornersBackRight = node
                scene.add(cornersBackRight)
                updateStuff()
                updateSizeCorners()


              }
             })  
         
 
          })         
         });         
       }



function loadingShell() {
          var path = Dpath + "shed/"
          var element = "shed"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                shell = node
                scene.add(shell)
                for (i = 0;i<shell.material.length;i++) {
                  shell.material[i].transparent = true;
                  shell.material[i].opacity = 0;
                }
              }
             })          
           
            shellmaxpos = parseFloat(getPos(shell,"boxmax"))
            shellminpos = parseFloat(getPos(shell,"boxmin"))
            loadingBoardMiddle("8")
          })         
         });         
       }


function loadingRafterBack() {
          var path = Dpath + "shed/"
          var element = "backRaft"
          if ( Dpath == "leanto/") {
            path = Dpath + "pitch/" + sizeD + "/"
          }
          try {
            scene.remove(backRaft)
          } catch {
            //pass
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                backRaft = node
                scene.add(backRaft)

                if ( Dpath == "leanto/") {
                try {
                loadingRighty()
                backRaft.scale.x = XX
                translateOn(floorBack,"boxminz",backRaft,"boxminz")
                centerUnknownX(backRaft,backty)
                //loadingSpecialRafterBack()
              } catch {
                //pass
                }
              }
              }
             })          
                     
          })         
         });         
       }

function loadingRafterFront() {
          var path = Dpath + "shed/"
          var element = "frontRaft"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                frontRaft = node
                scene.add(frontRaft)
                if ( Dpath == "minibarn/") {
                 // frontRaft.position.y = -0.013999999999999995
                // frontRaft.position.y = -0.03079996585845947
                }
                

              }
             })                       
          })         
         });         
       }


function loadingwoodpiece() {
          try {
            scene.remove(woodpiece)
          } catch {
            //pass
          }
          var path = Dpath + "shed/"
          var element = "woodpiece"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                woodpiece = node
                woodpiece.scale.x = XX
                scene.add(woodpiece)
                try {
                translateOn(backty,"boxminz",woodpiece,"boxmaxz")
                //translateOn(rafterRight,"boxmaxy",woodpiece,"boxmaxy")
                translateOn(rafterRight,"boxmaxy",woodpiece,"boxmaxy",-0.01)
                centerUnknownX(woodpiece,backty)
              } catch {
                //pass
              }

              }
             })                       
          })         
         });         
       }




function loadingCloseLeft(path2 = PitchPath) {
           try {
              scene.remove(closeLeft)
            } catch {
              console.log("erno in closeleft loading")
            }
          var path = Dpath + "shed/"
          var element = "closeLeft"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                closeLeft = node
                scene.add(closeLeft)
              }
             })          
           
          })         
         });         
       }

function loadingFloorLeft() {
          var path = Dpath + "shed/"
          var element = "floorLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                floorLeft = node
                if ( Dpath == "Shed2/" ||Dpath == "highbarn/") {
                  floorLeft.translateZ(-0.015)
                } else if ( Dpath == "carriage/" || Dpath == "leanto/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/" || Dpath == "cabana/") {
                  floorLeft.translateZ(-0.02)
                }
                scene.add(floorLeft)
                if (Dpath == "capecode/") {
                  floorLeft.translateZ(-0.02)
                }
                if ( Dpath == "capecode/") {
                  floorRight = floorLeft.clone()
                }

              }
             })                
          })         
         });         
       }

function loadingFloorRight() {
          var path = Dpath + "shed/"
          var element = "floorRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                floorRight = node
                if ( Dpath == "Shed2/" || Dpath == "highbarn/" ) {
                  floorRight.translateZ(-0.015)
                } else if ( Dpath == "carriage/" || Dpath == "leanto/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/" || Dpath == "cabana/") {
                  floorRight.translateZ(-0.02)
                }

                scene.add(floorRight)
              }
             })          
             
          })         
         });         
       }

function loadingFloorBack() {
          var path = Dpath + "shed/"
          var element = "floorBack"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                floorBack = node
                scene.add(floorBack)
                if ( Dpath == "Garage2/" || Dpath == "capecode/" || Dpath == "carriage/" || Dpath == "cabana/" || Dpath == "leanto/" || Dpath == "highbarn/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
                doorFloorLeft = floorBack.clone()


                translateOn(front,"boxminz",doorFloorLeft,"boxmaxz")
                
                scene.add(doorFloorLeft)
              }
              }
             })          
                    
          })         
         });         
       }


function loadingCloseRight(path2 = PitchPath) {
            try {
              scene.remove(closeRight)
            }  catch {
              console.log("erno in closeRight loading")
            }
          var path = Dpath + "shed/"
          var element = "closeRight"
          var mtlLoader = new THREE.MTLLoader(manCloseRight);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manCloseRight);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                closeRight = node
                scene.add(closeRight)
              }
             })       
          
                  
          })         
         });         
       }

function loadingRafterLeft() {

          try {
            scene.remove(rafterLeft)
          } catch {
            //pass
          }
          var path = Dpath + "shed/"

          var element = "rafterLeft"
          if ( Dpath == "highbarn/" || Dpath == "capecode/" || Dpath == "leanto/" || Dpath == "minibarn/" || Dpath == "vinylbarn/" || Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
            path = Dpath + "/pitch/" + sizeD + "/"
            if ( Dpath == "highbarn/") {
            element = "rafterLeft"
          } else if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
            element = "rafterLeft" 
          }
          if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/" ) {
            element = "rafterLeft1"
          }

          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                rafterLeft = node
                scene.add(rafterLeft)

                if ( Dpath  == "highbarn/" || Dpath == "leanto/" || Dpath == "minibarn/" || Dpath == "vinylbarn/") {
               

                
               
                  if ( Dpath == "leanto/"){
                      translateOn(backRaft,"boxminz",rafterLeft,"boxminz")
                      translateOn(lefty,"boxmax",rafterLeft,"boxmin",-0.0425) //translateOn(lefty,"boxmax",rafterLeft,"boxmin",-0.0585)
                      loadingRafterRight()

                } else {
                try {
                if ( Dpath != "highbarn/") {
                translateOn(frontRaft,"boxmin",rafterLeft,"boxmin",0.038)
              }else {
               translateOn(floorLeft,"boxmin",rafterLeft,"boxmin")
              }
                centerUnknownZ(rafterLeft,lefty)
              
              } catch {
                //pass
              }
            }
            if ( Dpath == "highbarn/" || Dpath == "minibarn/" ||Dpath == "vinylbarn/") {
              loadingRafterRight()
            }
              } else if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {

                centerUnknownZ(rafterLeft,righty)
                //translateOn(frontRaft,"boxmin",rafterLeft,"boxmin",-0.03) **** JUST CHANGED THIS **** ! ALERT ! 

                translateOn(floorLeft,"boxmax",rafterLeft,"boxmax",0.01)
                

                loadingRafterLeft2()
                  if ( ZZ == 1.75) {
                  rafterLeft.translateX(-0.02)
                }
              } else if ( Dpath == "capecode/") {
                 centerUnknownZ(rafterLeft,righty)
                translateOn(frontRaft,"boxmin",rafterLeft,"boxmin",-0.018)
                loadingRafterRight()
              }
              if ( Dpath == "carriage/" && sizeD == "6wide") {
                rafterLeft.translateX(0.03)
              }
              }
             })               
          })         
         });         
       }

function loadingRafterLeft2() {
          try {
            scene.remove(rafterLeft2)
          } catch {
            //pass
          }
          var path = Dpath + "/pitch/" + sizeD + "/"

          var element = "rafterLeft2"

          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                rafterLeft2 = node

                translateOn(frontRaft,"boxmin",rafterLeft2,"boxmin")
                translateOn(backRaft,"boxminz",rafterLeft2,"boxminz")
                scene.add(rafterLeft2)
                shellMaxZ = getPos(rafterLeft2,"boxmaxz")
               
                loadingRafterRight()

              }
             })               
          })         
         });         
       }

function loadingRafterRight() {

          try {
            scene.remove(rafterRight)
          } catch {
            //pass
          }
          var path = Dpath + "shed/"
          var element = "rafterRight"
           if ( Dpath == "highbarn/" || Dpath == "capecode/" || Dpath == "leanto/" || Dpath == "minibarn/" || Dpath == "vinylbarn/" || Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
            path = Dpath + "/pitch/" + sizeD + "/"
            if ( Dpath == "highbarn/") {
              if ( GARAGEMODEL == true) {
                element = "rafterRight2"  // FIX THIS SHIT FETCH FROM HOST !!!!!!!!!!!!
              } else {
            element = "rafterRight"
          }
          } else if ( Dpath == "minibarn/" || Dpath == "vinylbarn") {
            element = "rafterRight"
          }
          if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
            element = "rafterRight1"
          }
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) { 
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                rafterRight = node
                scene.add(rafterRight)
                if ( Dpath == "leanto/"){
                  translateOn(backRaft,"boxminz",rafterRight,"boxminz")
                  translateOn(righty,"boxmin",rafterRight,"boxmax",0.0425) //translateOn(righty,"boxmin",rafterRight,"boxmax",0.0585)
                   try {
                woodpiece.scale.x = XX
                translateOn(backty,"boxminz",woodpiece,"boxmaxz")
                translateOn(rafterRight,"boxmaxy",woodpiece,"boxmaxy",-0.01)
                centerUnknownX(woodpiece,backty)
              } catch {
                //pass
              }
                  loadingPlatLeanto()
                }
                if (Dpath == "highbarn/" ||Dpath == "minibarn/" || Dpath == "vinylbarn/") {

                  try {
                  if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
                  translateOn(frontRaft,"boxmax",rafterRight,"boxmax",-0.038)
                  if ( Dpath == "vinylbarn/") {
                    translateOn(righty,"boxmin",rafterRight,"boxmax")
                    
                  }
                } else if ( Dpath == "highbarn/") {
                   translateOn(floorRight,"boxmax",rafterRight,"boxmax")
                 }
                  centerUnknownZ(rafterRight,righty)
                
                } catch {
                  //pass
                  }
                  if ( Dpath == "highbarn/") {
                   if ( GARAGEMODEL == true) {
                    if ( sizeD == "14wide") {
                      translateOn(rafterRight,"boxmax",righty,"boxmax",-0.045)
                    } else if ( sizeD == "12wide") {
                       translateOn(rafterRight,"boxmax",righty,"boxmax",-0.005)
                    }
                    try {
                   CENTER(RightDoor1Dict)
                 } catch {
                  //pass
                 }
                    
                    
                    
                   }
                   if ( ShingHighModel == "Both" || ShingHighModel == "Right" || ShingHighModel == "Left" || ShingHighModel == "") {
                    loadingRafterHighbarn()
                  } else {
                    loadingPlatHighBarn()
                  }
                  } else if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
                  loadingLeftMiniBarn()
                }
                } else if (Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/" ) {
                   //translateOn(frontRaft,"boxmax",rafterRight,"boxmax",0.03) *** JUST CHANGED THIS ! ALERT !!
                   translateOn(floorRight,"boxmin",rafterRight,"boxmin",-0.01)
                   if ( Dpath == "designerCarriage/" && ZZ == 1.75) {
                    rafterRight.translateX(-0.005)
                    
                   }
                   let transValClose =  centerUnknownZ(rafterRight,righty)
                   loadingRafterRight2(transValClose)

                   if ( ZZ == 1.75) {
                   rafterRight.translateX(0.02)
                 }
                
                } else if ( Dpath == "capecode/") {
                   translateOn(frontRaft,"boxmax",rafterRight,"boxmax",0.018)
                   centerUnknownZ(rafterRight,righty)
                   loadingCapeCode()
                }
              }
             })                
          })         
         });         
       }

function loadingcapeDormer(elm) {
  CAPSTYLE = elm
  loadingplatcapecode()
}

function loadingCapeCode(elm =CAPSTYLE,yy="none") {
  try {
    scene.remove(cape)

  }catch {
    //pass
  }
          let path = Dpath + "pitch/" + sizeD + "/"
          CAPSTYLE = elm
          let element = CAPSTYLE
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) { 
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;

                cape = node
                let val 
                if ( sizeD == "8wide") {
                  val = 0.012
                } else if ( sizeD == "12wide") {
                  val = 0.0275
                } else if ( sizeD == "10wide") {
                  val = 0.019
                } else if ( sizeD == "14wide") {
                  val = 0.034
                }
                try {
                  translateOn(cape,"boxminz",overClosing2,"boxmaxz")
                } catch {
                  //pass
                }
                centerUnknownZ(cape,righty)
                centerUnknownX(cape,backty)
                cape.translateZ(val)
                scene.add(cape)
                if ( yy == "none") {
                loadingFrontCapeCode()
                loadingPlatCapeCode()
              } else {
                loadingSpecialShinglesCape("change")
                }
              }
             })                
              
          })         
         });
}
function loadingRafterRight2(transValClose) {
          try {
            scene.remove(rafterRight2)
          } catch {
            //pass
          }
          var path = Dpath + "pitch/" + sizeD + "/"
        
          if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
            element = "rafterRight2"
          }
         
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) { 
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;

                rafterRight2 = node
                translateOn(frontRaft,"boxmax",rafterRight2,"boxmax")
                translateOn(backRaft,"boxmaxz",rafterRight2,"boxminz")

                scene.add(rafterRight2)
                loadingRightOne()
                loadingLeftOne()
                if ( Dpath != "designerCarriage/") {
                loadingCloseRightCarriage(transValClose)
              } else {
                loadingPlatOfCarriage()
              }
              }
             })                
          })         
         });         
       }


function loadingCloseRightCarriage(transValClose) {
          try {
            scene.remove(closeRight)
            scene.remove(closeLeft)
          } catch {
            //pass
          }
          var path = Dpath + "pitch/" + sizeD + "/"
        
          if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
            element = "close"
          }
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) { 
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;

                closeRight = node
                closeRight.translateZ(transValClose)
                //let p1 = getPos(closeRight,"boxminy")
                //closeRight.scale.y+= 0.0175
                //let p2 = getPos(closeRight,"boxminy")
                //closeRight.translateY(p1-p2)
                translateOn(rafterRight,"boxmax",closeRight,"boxmax")
                scene.add(closeRight)

                closeLeft = closeRight.clone()
                translateOn(rafterLeft,"boxmin",closeLeft,"boxmin")
                //centerUnknownX(closeRight,rafterLeft2)
                scene.add(closeLeft)


                loadingPlatOfCarriage()
              }
             })                
          })         
         });         
       }

function loadingLeftMiniBarn() {
       try {
            scene.remove(leftOne)
          } catch {
            //pass
          }
            let path,element
            path = Dpath + "/pitch/" + sizeD + "/"           
            element = "leftOne"
                    
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) { 
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                leftOne = node
                scene.add(leftOne)   
                centerUnknownZ(leftOne,lefty)
                translateOn(cornersStudFrontLeft,"boxmin",leftOne,"boxmin")
                loadingRightMiniBarn()  

              }
             })                
          })         
         });
}

function loadingRightMiniBarn() {
       try {
            scene.remove(rightOne)
          } catch {
            //pass
          }
            let path,element
          
            path = Dpath + "/pitch/" + sizeD + "/"           
            element = "rightOne"

          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) { 
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                rightOne = node
                scene.add(rightOne)   
                centerUnknownZ(rightOne,righty)
                translateOn(cornersStudFrontRight,"boxmax",rightOne,"boxmax")  
                loadingPeakMiniBarn() 
              }
             })                
          })         
         });
}

function loadingPeakMiniBarn() {
       try {
            scene.remove(peak)
          } catch {
            //pass
          }
          let path,element
          
            path = Dpath + "/shingles/"        
            element = "peak" + sizeD.replace("wide","")
          
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) { 
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                peak = node
                scene.add(peak)   
                centerUnknownZ(peak,righty)
      
                translateOn(rafterRight,"boxmax",peak,"boxmin") 
              
                translateOn(rafterRight,"boxmaxy",peak,"boxmaxy") 
                loadingPlatMiniBarn()          
              }
             })                
          })         
         });
}

function loadingRaftersLeanto() {
   setRandomStuff()
   xxx2 = 0.4077190160751343
   zzz2 = xxx2 
   zZ2 = 0
  
   loadingRafters2()
   loadingRBack()
  
}
function loadingplatleanto() {
   
  loadingRafterBack()
   //loadingwoodpiece()
  //loadingRighty()
  

}

function loadingPlatCarriage() {
  try {
    setTransp(overClosing,0)
    setTransp(overClosing2,0)
  } catch {
    //pass
  }
  try {
    setTransp(cupola,0)
    setTransp(cupolaRef,0)
  } catch {
    //pass
  }
  try {
    scene.remove(righty)
    scene.remove(lefty)
  } catch {
    //pass
  }

  try {
    scene.remove(shingles)
    scene.remove(rafterRight)
    scene.remove(rafterLeft)
    scene.remove(rafterLeft2)
    scene.remove(rafterRight2)
    scene.remove(dripoRight)
    scene.remove(dripoLeft)
    scene.remove(closeLeft)
    scene.remove(closeRight)
    scene.remove(overhangsRight)
    scene.remove(overhangsLeft)
    scene.remove(miratecLeft)
    scene.remove(miratecRight)
  } catch {
    //pass
  }
if ( Dpath == "designerCarriage/") {
  try {
    faceBack.scale.x = XX
    faceFront.scale.x = XX
    translateOn(backty,"boxminz",faceBack,"boxmaxz")
    centerUnknownX(faceBack,backty)

    translateOn(front,"boxmaxz",faceFront,"boxminz")
    centerUnknownX(faceFront,front)
  } catch {
    //pass
  }
}
  loadingRighty()

}


function loadingPlathighbarn() {
  try {
    fr.scale.x = XX
      br.scale.x = XX
     
     
      centerUnknownX(fr,front)
      centerUnknownX(br,backty)
      translateOn(doorFloorLeft,"boxmaxz",fr,"boxmaxz")
      translateOn(floorBack,"boxminz",br,"boxminz")
    } catch {
      //pass
    }
  try {
    setTransp(faceGableBoard,0)
    setTransp(faceGableBoard,0)
  } catch {
    //pass
  }
  try {
    setTransp(cupola,0)
    setTransp(cupolaRef,0)
  } catch {
    //pass
  }
  try {
    scene.remove(gableHighRight)
    scene.remove(gableHighLeft)
  } catch {
    //pass
  }
  try {
    scene.remove(designerRight)
    scene.remove(designerLeft)
  } catch {
    //pass
  }
  try {
    scene.remove(overRight)
    scene.remove(overLeft)
  } catch {
    //pass
  }
  try {
    scene.remove(righty)
    scene.remove(lefty)
    scene.remove(rafterLeft)
    scene.remove(rafterRight)
  } catch {
    //pass
  }
  try {
    scene.remove(dripoRight)
    scene.remove(dripoLeft)
  } catch {
    //pass
  }
  try {
    scene.remove(shingles)
  } catch {
    //pass
  }
  try {
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
  loadingRighty()
}

function loadingPlatMiniBarn(pitch = pitchD,size = sizeD) {

         
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plat2 = node
                plat2.name = "plat"
                
                centerUnknownZ(plat2,lefty)
                var posii1 = getPos(plat2,"boxmin")
                var posii2 = getPos(defaultPlat,"boxmin") 
                plat2.translateX(posii2-posii1)
               
                p2.push(plat2)

                scene.add(plat2)
                
               
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
      try {
       for ( varr of workPushed ) {
       translateWorkbench(varr) 
      }
    } catch {
      console.log("erno in workpushed translate ")
    }
  
            /*
              try {
           
                centerUnknownY(ventsRight,plat2)
                centerUnknownY(vents,plat2)
                vents.translateY(-0.07)
                ventsRight.translateY(-0.07)
              }catch {
                console.log("no vents selected")
              }
              */
              /*
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
            */
                  try {
                    loadingShingModel()
                   
                  /*
  
                   if ( typeof(overhangsRight) == "object" && overhangStyle != false) {
                    loadingOverhango(overhangStyle)          
                  }
               */
               try {
                 translateOn(lefty,"boxmaxy",vents,"boxmaxy",-0.068)
                  translateOn(righty,"boxmaxy",ventsRight,"boxmaxy",-0.068)
                   centerObjectsReversed(ventsRight)
                   centerUnknownZ(vents,lefty)
                } catch {
                  //pass
                }
                  try {
                   if ( typeof(loft) == "object") {
                   
                    scene.remove(loft)
                    scene.remove(closeLoft)
                    loadingLoft()
                  }
                  if ( typeof(loft2) == "object") {
                   
                    scene.remove(loft2)
                    scene.remove(closeLoft2)
                    loadingLoft2()
                  }

                  centerUnknownX(cupola,shingles)
                  centerUnknownZ(cupola,shingles)
                  var w = getPos(shingles, "boxmaxy")
                  var z = getPos(cupola,"boxminy")
                  cupola.translateY(w-z)
                  cupola.translateY(-0.2)

                 } catch {
                  console.log("erno")
                 }
                 /*
                 if (highwal == true) {
                setTimeout(higheringWall,1)
              }
              */
                } catch {
                  console.log("pass")
                  //adaptShingles(drip)
                }

              
                
                getpoPlat()
              }
             })
             
                
          })         
         });         
       }

function loadingPlatOfCarriage() {
          var path2 = path2
          var path = Dpath + "pitch/" + sizeD + "/"
          var element = pitchD
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plat2 = node
                plat2.name = "plat"
                
                centerUnknownZ(plat2,righty)
                var posii1 = getPos(plat2,"boxmin")
                var posii2 = getPos(defaultPlat,"boxmin") 
                plat2.translateX(posii2-posii1)
               
                p2.push(plat2)
                scene.add(plat2)
                
               
                if (p2.length == 1) {

                   try {
           
                //centerUnknownY(ventsRight,plat2)
                //centerUnknownY(vents,plat2)
                //vents.translateY(-0.07)
                //ventsRight.translateY(-0.07)
                translateOn(lefty,"boxmaxy",vents,"boxmaxy",-0.25)
                translateOn(righty,"boxmaxy",ventsRight,"boxmaxy",-0.25)
                if ( ZZ == 1) {
                  woodRight.position.z = 0.491
                   wood.position.z = 0.928
                } else if ( ZZ == 0.75 ) {
                  woodRight.position.z = 0.420
                  wood.position.z = 0.880
                } else if ( ZZ == 1.25) {
                  if ( Dpath != "designerCarriage/") {
                  wood.position.z = 0.992
                   woodRight.position.z = 0.533
                 } else {
                  wood.position.z = 1.025
                  woodRight.position.z = 0.585
                 }

                } else if ( ZZ == 1.5) {
                  if ( Dpath != "designerCarriage/") {
                  woodRight.position.z = 0.574
                  wood.position.z = 1.0514
                } else {
                  woodRight.position.z = 0.65
                  wood.position.z = 1.0848
                }
                } else if ( ZZ == 1.75) {
                  if ( Dpath != "designerCarriage/") {
                  wood.position.z = 1.0854
                  woodRight.position.z = 0.646
                  } else {
                    woodRight.position.z = 0.729
                    wood.position.z = 1.168
                  }
                }
              
              }catch {
                console.log("no vents selected")
              }
              try {
                centerUnknownZ(vents,wood)
               centerRafterReversedZ(ventsRight,woodRight)
              } catch {
                //pass
              }
             
                  try {
                    loadingShingModel()
              
                    try {
                       for ( varr of workPushed ) {
                       translateWorkbench(varr) 
                      }
                    } catch {
                      console.log("erno in workpushed translate ")
                    }
       
                  //scalingClosets()
               
                  try {
                   if ( typeof(loft) == "object") {
                   
                    scene.remove(loft)
                    scene.remove(closeLoft)
                    loadingLoft()
                  }
                   if ( typeof(loft2) == "object") {
                   
                    scene.remove(loft2)
                    scene.remove(closeLoft2)
                    loadingLoft2()
                  }
                  /*
                  centerUnknownX(cupola,shingles)
                  centerUnknownZ(cupola,shingles)
                  var w = getPos(shingles, "boxmaxy")
                  var z = getPos(cupola,"boxminy")
                  cupola.translateY(w-z)
                  cupola.translateY(-0.2)
                  */

                 } catch {
                  console.log("erno")
                 }
                
                } catch {
                  console.log("pass")
                  //adaptShingles(drip)
                }

                }
                FIRSTRUNCARRIAGE = "false"
                //getFramePlat()
                updateFramePlat()
              }
             })
             
                
          })         
         });
}
function loadingDoorFloorLeft() {
   var path = Dpath + "shed/"
          var element = "doorFloorLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                doorFloorLeft = node
                scene.add(doorFloorLeft)
              }
             })                   
          })         
         });         
       }




function loadingBoardMiddle(x) {
          try {
            scene.remove(boardMid)
          } catch {
            //pass
          }
          let path = "ConstantObjects/floor/"
          let element = x
          if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
            element += "carriage"
          } else if ( Dpath == "leanto/") {
            element += "leanto"
            
          }

          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                boardMid = node
                boardMid.scale.x = XX
                if ( Dpath != "carriage/" && Dpath != "designerCarriage/" && Dpath != "highCarriage/") {
                centerUnknownZ(boardMid,shell)
                centerUnknownX(boardMid,shell)
              } else {
                centerUnknownX(boardMid,shell)
                centerUnknownZ(boardMid,boardLeft)
              } 
              if ( FLOOR_4x4 == "None") {
                setTransp(boardMid,0)
            } else {
              setTransp(boardMid,1)
            }
                scene.add(boardMid)
              
                

              }
             })          
           /*
            scene.add(mesh)    
            boardMiddle1 = mesh
            boardMiddle.push(boardMiddle1)
            setTimeout(updatingBoardMiddle,100,x,boardMid)
            */
            //setTimeout(resizeleg,1)     
          })         
         });         
       }




function updatingBoardMiddle(x,u) {
  
  try {
    u.scale.z = ZZ 
  }catch {
    console.log("dff")
  }
  
  
    u.translateZ(x)
    u.scale.z = 1
    u.scale.x = XX

  
}

function loadingBoardBack() {
          var path = Dpath + "floor/"
          var element = "boardBack"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                boardBack = node

              }
             })          
       
            scene.add(mesh)    
            boardlegss1 = mesh
            //setTimeout(resizeleg,1)     
          })         
         });         
       }

function loadingBoardFront() {
          var path = Dpath + "floor/"
          var element = "boardFront"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                boardFront = node

              }
             })          
           
            scene.add(mesh)    
            boardlegss2 = mesh
            //setTimeout(resizeleg,1)     
          })         
         });         
       }
function loadingBoardRight() {
          var path = Dpath + "floor/"
          var element = "boardRight"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                boardRight = node

              }
             })          
       
            scene.add(mesh)    
            boardright = mesh
            //setTimeout(resizeleg,1)     
          })         
         });         
       }

function loadingBoardLeft() {
          var path = Dpath + "floor/"
          var element = "boardLeft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                boardLeft = node
                if ( Dpath == "leanto/" || Dpath == "highbarn/" || Dpath == "capecode/" || Dpath == "cabana/") {
                  boardLeft.translateX(0.02)
                }
                scene.add(boardLeft)
              }
             })          
       
              
          })         
         });         
       }

function loadingBoardBackB() {
          var path = Dpath + "floor/"
          var element = "boardBackB"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                boardBackB = node

              }
             })          
       
            scene.add(mesh)    
            boardback = mesh
            //setTimeout(resizeleg,1)     
          })         
         });         
       }

function loadingBoardFrontF() {
          var path = Dpath + "floor/"
          var element = "boardFrontF"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                boardFrontF = node
              }
             })          
            scene.add(mesh)    
            boardfront = mesh
            //setTimeout(resizeleg,1)     
          })         
         });         
       }

function loadingLeftOne() {
          loadingLeft = "nope"
          var path = Dpath + "shed/"

          try {
            for ( c of left) {
              scene.remove(c)
            }
            left = []
          } catch {
            //pass
          }
         
          var element = "leftOne"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                leftone = node
                leftone.name = "leftone"
                leftMain = leftone
                left.push(leftone)
                scene.add(leftone)
                leftone.translateX(resultcorner22)
                
                translateOn(front,"boxminz",leftone,"boxmaxz")
                let ps1 = parseFloat(getPos(leftone,"boxmaxz"))
                let ps2 = parseFloat(getPos(backty,"boxmaxz"))

                if ( Dpath == "designerCarriage/" || Dpath == "highCarriage/" ||Dpath == "carriage/") {
                  try {
                    ps2 = parseFloat(getPos(rafterLeft2,"boxmaxz"))
                  } catch {
                   //pass
                  }
                }
            if ( Dpath == "highCarriage/" && ZZ == 1.75) {
                   leftone.scale.y-=0.01
                }
                while ( (ps1-0.5) > ps2) {
                  
                  leftone = leftone.clone()
                  leftone.translateZ(-0.4077190160751343)
                  ps1 = parseFloat(getPos(leftone,"boxmaxz"))
                  left.push(leftone)
                  scene.add(leftone)
                }
                scene.remove(leftMain)
                leftMain.name = ""
                if ( ps1<ps2) {
                  scene.remove(leftone)
                  leftone.name = ""
                  left.splice(left.indexOf(leftone),1)
                }
                loadingLeft = "yes"
                removeInsidedoor() 
                onComplete()

              }
             }) 
              
           
          
          })         
         });         
    }


function loadingRightOne() {
          loadingRight = "nope"
          var path = Dpath + "shed/"
          var element = "rightOne"

          try {
            for ( c of right) {
              scene.remove(c)
            }
            right = []
          } catch {
            //pass
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                rightone = node
                rightone.name = "rightRaft"
                right.push(rightone)
                
                scene.add(rightone)
                rightone.translateX(resultreverse22)
                rightone.translateZ(the_resylt22)
                rightMain = rightone
                translateOn(front,"boxminz",rightone,"boxmaxz")
                let ps1 = parseFloat(getPos(rightone,"boxmaxz"))

                let ps2 = parseFloat(getPos(backty,"boxmaxz"))
                if ( Dpath == "designerCarriage/" || Dpath == "highCarriage/" ||Dpath == "carriage/") {
                  try {
                    ps2 = parseFloat(getPos(rafterRight2,"boxmaxz"))
                  } catch {
                   //pass
                  }
                }
                if ( Dpath == "highCarriage/" && ZZ == 1.75) {
                   rightone.scale.y-=0.01
                }

                while ( (ps1-0.5) > ps2) {
                  
                  rightone = rightone.clone()
                  rightone.name = "rightone"
                  rightone.translateZ(-0.4077190160751343)
                  ps1 = parseFloat(getPos(rightone,"boxmaxz"))
                  right.push(rightone)
                  scene.add(rightone)
                }

                scene.remove(rightMain)
                rightMain.name = ""
                if ( ps1<(ps2-0.1)) {
                  rightone.name = ""
                  scene.remove(rightone)
                  right.splice(right.indexOf(rightone),1)
                }
                loadingRight = "yes"
                onComplete()
                  if ( typeof(panel) == "object") {
                        try {
                  let selopt = document.getElementById("selMaterial")
            for (var i=0; i<selopt.length; i++) {
              if (selopt.options[i].innerHTML.toLowerCase() == "panel box")
                  selopt.remove(i);

          }
                  scene.remove(panel)
                  panel = ""
                  //panel.name = ""

                  loadingPanelBox()
                } catch {
                  //pass
                }
                

               
              }
                if (typeof(receptableE) == "object") {
                 try {
                  scene.remove(receptableE)
                  loadingExteriorReceptable()
                
                } catch {
                  console.log("erno")
                }
              }
                if ( typeof(junction) == "object") {
                    try {
                  let selopt = document.getElementById("selMaterial")
            for (var i=0; i<selopt.length; i++) {
              if (selopt.options[i].innerHTML.toLowerCase() == "junction box")
                  selopt.remove(i);

          }
                  scene.remove(junction)
                  junction = ""
                  //junction.name = ""

                  loadingJunctionBox()
                } catch {
                  //pass
                }
                 
                
               
              }
              }
             }) 

          })         
         });         
       }




function loadingDoorRaft() {
          var path = Dpath + "shed/"
          var element = "doorRaft"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                doorRaft = node

              }
             })          
            scene.add(mesh)         
          })         
         });         
       }



function loadingRBack() {
      if ( Dpath  == "leanto/") {
            try {
              for ( elm of specialLeanto) {
                scene.remove(elm)
              }
              specialLeanto = []
            } catch {
              //pass
            }
          }
          for ( i = 0;i<r2b.length;i++) {
            scene.remove(r2b[i])
          }
          r2b = []
          loadingBack = "nope"
           var path = Dpath + "shed/"

           
           var element = "rafterBack"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                rafterb2 = node
                rafterb2.name = "rafter"
                r2b.push(rafterb2)
                scene.add(rafterb2)
               
                rafterb2.translateZ(reversedResult22)
                rafterb2.translateX(resultcorner22)

                if ( Dpath == "leanto/") {
                

                  scaleBetween2Objects(rafterb2,floorBack,"boxmaxy",backRaft,"boxminy","y")
                  cornersStudBackLeft.scale.y = rafterb2.scale.y
                  cornersStudBackRight.scale.y = rafterb2.scale.y
                  translateOn(floorBack,"boxmaxy",cornersStudBackLeft,"boxminy")
                  translateOn(floorBack,"boxmaxy",cornersStudBackRight,"boxminy")

                  
                }

                translateOn(cornersStudBackLeft,"boxmin",rafterb2,"boxmin")
                rafter2bMain = rafterb2

                let pos1 = getPos(rafterb2,"boxmax")
                let pos2 = getPos(cornersStudBackRight,"boxmin")
                while ( pos1 < pos2 ) {
                  rafterb2 = rafterb2.clone()
                  rafterb2.name = "rafter"
                  rafterb2.translateX(0.4077190160751343)
                  scene.add(rafterb2)
                  r2b.push(rafterb2)
                  pos1 = getPos(rafterb2,"boxmax")
                  
                }
                scene.remove(rafter2bMain)
                rafter2bMain.name = ""
                if ( pos1 >= pos2 ) {
                  scene.remove(rafterb2)
                  rafterb2.name = ""
                }
              loadingBack = "yes"
                
              onComplete()
             
              if ( Dpath == "leanto/") {

              loadingSpecialRafterBack()
            }
              if ( typeof(receptable2) == "object") {
               try {
                  let selopt = document.getElementById("selMaterial")
            for (var i=0; i<selopt.length; i++) {
              if (selopt.options[i].innerHTML.toLowerCase() == "receptable 2")
                  selopt.remove(i);

          }
                  scene.remove(receptable2)
                  receptable2.name = ""

                  loadingReceptable2()

                } catch {
                  //pass
                }
            }
              }
             })       
             
          })         
         });         
       
}
         

function loadingRafters2() {
        for ( i = 0;i<r2.length;i++) {
            scene.remove(r2[i])
          }
            r2 = []
            loadingFront = "nope"
            var path = Dpath + "shed/"
            var element = "rafter2"
          
            
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                rafter2 = node
                //rafter2.name = "rafter2"
                rafter2Main = rafter2
                r2.push(rafter2)
                scene.add(rafter2)
                rafter2.translateZ(the_resylt22)
                rafter2Main.name = "rafter2"

                //rafter2.translateX(resultcorner22)
                translateOn(cornersStudFrontLeft,"boxmin",rafter2,"boxmin")
                rafter2Main = rafter2

                let pos1 = getPos(rafter2,"boxmax")
                let pos2 = getPos(cornersStudFrontRight,"boxmin")
                while ( pos1 < pos2 ) {
                  rafter2 = rafter2.clone()
                  rafter2.name = "rafter2"
                  rafter2.translateX(0.4077190160751343)
                  scene.add(rafter2)
                  r2.push(rafter2)
                  pos1 = getPos(rafter2,"boxmax")
                  
                }
                scene.remove(rafter2Main)
                rafter2Main.name = ""
                if ( pos1 >= pos2 ) {
                  rafter2.name = "removedRafter"
                  scene.remove(rafter2)

                }
                 loadingFront = "yes"
                if ( Dpath == "cabana/" && (getPos(r2[r2.length-1],"boxmax") >= getPos(cornersStudFrontRight,"boxmin")) ) {
                    r2[r2.length-1].name = "removedRafter"
                    scene.remove(r2[r2.length-1])

                  }
                  onComplete()
              if (typeof(receptable) == "object") {
                       try {
                  let selopt = document.getElementById("selMaterial")
            for (var i=0; i<selopt.length; i++) {
              if (selopt.options[i].innerHTML.toLowerCase() == "receptable" && selopt.options[i].innerHTML.toLowerCase() != "receptable 2")
                  selopt.remove(i);

          }
                  scene.remove(receptable)
                  receptable = ""
                  //panel.name = ""

                  loadingReceptable()
                } catch {
                  //pass
                }
              }
               
                if ( typeof(switchh) == "object") { 


                try {
                  let selopt = document.getElementById("selMaterial")
            for (var i=0; i<selopt.length; i++) {
              if (selopt.options[i].innerHTML.toLowerCase() == "light switch")
                  selopt.remove(i);

          }
                  scene.remove(switchh)
                  switchh.name = ""

                  loadingLightSwitch()
                } catch {
                  //pass
                }
               

               
              }
 
              }
             })          
        
          })         
         });         
       }

/*
function loadingRafters2Old() {
          for ( i = 0;i<r2.length;i++) {
            scene.remove(r2[i])
          }
            r2 = []
            loadingFront = "nope"
            var path = Dpath + "shed/"
            var element = "rafter2"
          
            
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                rafter2 = node
                r2.push(rafter2)
                scene.add(rafter2)
                rafter2.translateZ(the_resylt22)
                rafter2.translateX(resultcorner22)
                updateFrontOne()
                
              }
             })          
        
          })         
         });         
       }


function getFrontOne() {

  cr = parseFloat(getPos(rafter2,"boxmin"))

  
      if ( (shellmaxpos -(RRR*1.3)) > cr ) {

        r2[r2.length-1].translateX(rR)
        r2[r2.length-1].scale.y = YY
  

      rR += RRR
     updateFrontOne()
    }else {
      loadingFront = "yes"
    if ( Dpath == "cabana/" && (getPos(r2[r2.length-1],"boxmax") >= getPos(cornersStudFrontRight,"boxmin")) ) {
        scene.remove(r2[r2.length-1])
      }
      onComplete()
  if (typeof(receptable) == "object") {
       try {
      
      scene.remove(receptable)
      loadingReceptable()

    } catch {
      console.log("erno")
    }
  }
   
    if ( typeof(switchh) == "object") { 
     try {
      scene.remove(switchh)
      loadingLightSwitch()
    
    } catch {
      console.log("erno")
    }
  }

      
      //setTimeout(RaftRound2,1)
    }

}

function updateFrontOne() {
   cr = parseFloat(getPos(rafter2,"boxmin"))



      if ( (shellmaxpos - (RRR*1.3)) > cr ) {
        rafter2 = r2[0].clone()
        r2.push(rafter2)
        scene.add(rafter2)
      
      getFrontOne()
    }else {
      loadingFront = "yes"
        if ( Dpath == "cabana/" && (getPos(r2[r2.length-1],"boxmax") >= getPos(cornersStudBackRight,"boxmin") )) {
        scene.remove(r2[r2.length-1])
      }
      onComplete()
      if (typeof(receptable) == "object") {
       try {
      
      scene.remove(receptable)
      loadingReceptable()

    } catch {
      console.log("erno")
    }
  }
   
    if ( typeof(switchh) == "object") { 
     try {
      scene.remove(switchh)
      loadingLightSwitch()
    
    } catch {
      console.log("erno")
    }
  }
      //setTimeout(RaftRound2,1)
    }
}
*/


function loadingDrip() {
          var path = Dpath + "roof/"
          var element = "drip"
          var mtlLoader = new THREE.MTLLoader(manDrip);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                drip = node

              }
             })          
          try {
            scene.remove(DRIP)
            
          } catch {
            console.log("erno")
          }
            
            scene.add(mesh)  
            DRIP = mesh       
          
          
          })         
         });         
       }








function loadingDripBack() {
          var path = Dpath + "roof/"
          if ( Dpath == "capecode/") {
            path = Dpath + "shed/" 
          }
          var element = "dripBack"
          

          var mtlLoader = new THREE.MTLLoader(manShingles);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manShingles);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                dripBack = node
                scene.add(dripBack)
               
                if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                  dripBack.translateY(0.01)
                } 
                
              }
             })          
          
          })         
         });         
       }



function loadingDripFront() {
          var path = Dpath + "roof/"
          var element = "dripFront"
          
          var mtlLoader = new THREE.MTLLoader(manShingles);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manShingles);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                dripFront = node
                scene.add(dripFront)
                if ( Dpath == "capecode/") {
                  setTransp(dripFront,0)
                } else if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                  dripFront.translateY(0.01)
                } 

              }
             })          
          
          })         
         });         
       }


function loadingShingles(element = "shingles") {
          var path = Dpath + "roof/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manShingles);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manShingles);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                shingles = node
                scene.add(shingles)
                
                setTimeout(architecturalShingles,1500)    
              }
             })          
         
             
          })         
         });         
       }


function loadingPlywood(bffg = "none") {
          try {
              scene.remove(plywood)
             }   catch { 
              console.log("no plywoord to remove")
            }    
          var path = Dpath + "floor/"
          var element = "plywood"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plywood = node
                plywoodStyle = "Tongue & Groove"
                scene.add(plywood)
               
                if ( bffg == "XD") {
                  plywoodStyle = "Foam"
                  foamPlywood()
                }    
                
                plywood.scale.z = ZZ 
                plywood.scale.x = XX 
                try {
                centerUnknownX(plywood,front)
                centerUnknownZ(plywood,floorLeft)

              } catch {
                //pass
              }
              try {
                translateOn(backty,"boxmaxz",plywood,"boxminz")
              } catch {
                //pass
              }
                if  ( Dpath == "leanto/") {
                 // plywood.translateZ(-0.053)
                }
              } 
             })   

          })         
         });         
       }




function loadingPeak(stuff) {

          try {
            scene.remove(peak)
            scene.remove(peak2)
    
          } catch {
            console.log("erno in peak loading")
          }

        
          var path2 = path2
          var path = Dpath + "/shingles/" 
          var element = "peak" + sizeD.replace("wide","")
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                peak = node
                scene.add(peak)

                centerUnknownZ(peak,righty)
                translateOn(overRight,"boxmaxy",peak,"boxmaxy") 
                 if ( ShingHighModel == "Right" ) {
                translateOn(rafterRight,"boxmax",peak,"boxmin") 
                scene.remove(dripoRight)
                scene.add(dripoLeft)
                translateOn(overLeft,"boxmin",dripoLeft,"boxmin")
                translateOn(overLeft,"boxmaxy",dripoLeft,"boxmaxy",0.005)
              } else if (ShingHighModel == "Left") {
                peak.rotateY(Math.PI)
                translateOn(rafterLeft,"boxmin",peak,"boxmax")
                let pos1 = getPos(rafterLeft,"boxmin")
                let pos2 = getPos(peak,"boxmax")
                peak.translateX(-(pos1-pos2))
                centerObjectsReversed(peak)
                scene.remove(dripoLeft)
                scene.add(dripoRight)
                translateOn(overRight,"boxmax",dripoRight,"boxmax")
                translateOn(overRight,"boxmaxy",dripoRight,"boxmaxy",0.005)
              } else if ( ShingHighModel == "Both") {
               
                translateOn(rafterRight,"boxmax",peak,"boxmin") 
               
                peak2 = peak.clone()
                peak2.rotateY(Math.PI)
                translateOn(rafterLeft,"boxmin",peak2,"boxmax")
                let pos1 = getPos(rafterLeft,"boxmin")
                let pos2 = getPos(peak2,"boxmax")
                peak2.translateX(-(pos1-pos2))
                centerObjectsReversed(peak2)
                scene.remove(dripoRight)
                scene.remove(dripoLeft)
                scene.add(peak2)
              }
                
                if ( stuff == "plat") {
                  loadingPlatHighBarn()
                  
                } else {
                loadingShingModel()
              }

              } 
             })      
          })         
         });         
}


function loadingPlatminibarn() {
  try {
    scene.remove(shingles)
    scene.remove(shnigle)
  } catch {
    //pass
  }
  try {
    scene.remove(peak)
   
  } catch {
    //pass
  }
  try {
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
    scene.remove(righty)
    scene.remove(lefty)
  } catch {
    //pass
  }
  try {
    scene.remove(rafterRight)
    scene.remove(rafterLeft)
    scene.remove(dripoRight)
    scene.remove(dripoLeft)
  } catch {
    //pass
  }
  try {
     scene.remove(leftOne)
     scene.remove(rightOne)
  } catch {
    //pass
  }
  loadingRighty()
}

function loadingDripoRight(eltt= "none") {

          try {
            scene.remove(dripoRight)
            scene.remove(dripoLeft)
          } catch {
            console.log("erno in dripoRight loading")
          }
        
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD + "drip"
          if ( Dpath == "capecode/") {
            element = "5drip"
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                dripoRight = node


                dripoRight.translateY(-0.01)
                centerObjects(dripoRight)
                if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
                  centerUnknownZ(dripoRight,shingles)            
                }

                var piso1 = getPos(dripFront,"boxmax")
                var piso2 = getPos(dripoRight,"boxmax")
                dripoRight.translateX(piso1-piso2)
                
                p2.push(dripoRight) 
                scene.add(dripoRight)

                dripoLeft = dripoRight.clone()

                if ( Dpath != "leanto/" && Dpath != "capecode/" && Dpath != "highbarn/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/") {
                dripoLeft.rotateY(Math.PI)
                centerObjectsReversed(dripoLeft)
                var piso1 = getPos(dripFront,"boxmin")
                var piso2 = getPos(dripoLeft,"boxmin")
                dripoLeft.translateX(-(piso1-piso2))
              } else if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/"){
                var piso1 = getPos(dripFront,"boxmin")
                var piso2 = getPos(dripoLeft,"boxmin")
                dripoLeft.translateX(piso1-piso2)

                //centerUnknownZ(dripoLeft,shingles)

                translateOn(dripoRight,"boxmaxz",dripFront,"boxmaxz")
                translateOn(dripoRight,"boxminz",dripBack,"boxminz")
                
              } else {
                centerObjects(dripoLeft)
                var piso1 = getPos(dripFront,"boxmin")
                var piso2 = getPos(dripoLeft,"boxmin")
                dripoLeft.translateX(piso1-piso2)

              }
                 
                //dripoLeft.translateY(-0.01)
                p2.push(dripoLeft)
                scene.add(dripoLeft)
                //getpoPlat() 
                if ( Dpath == "Shed2/") {
                   translateOn(dripoRight,"boxminz",dripBack,"boxminz")
                   translateOn(dripoRight,"boxmaxz",dripFront,"boxmaxz")
                }
                if ( Dpath != "leanto/" && Dpath != "carriage/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/") {
                translateOn(dripoRight,"boxminy",dripBack,"boxminy")
                translateOn(dripoRight,"boxminy",dripFront,"boxminy")
              } else if (Dpath == "leanto/") {
                translateOn(rafterRight,"boxmaxy",dripoRight,"boxmaxy",0.001)
                translateOn(rafterLeft,"boxmaxy",dripoLeft,"boxmaxy",0.001)
                translateOn(dripoRight,"boxmaxy",dripBack,"boxmaxy")
                

              }
               if ( Dpath == "designerCarriage/") {
                    translateOn(shingles,"boxmaxy",dripoRight,"boxmaxy",-0.02)
                    translateOn(shingles,"boxmaxy",dripoLeft,"boxmaxy",-0.02)
                  }
                if ( Dpath == "highbarn/") {
                  if ( eltt == "loadPeak") {
                    loadingPeak()
                  } else {
                   loadingShingModel()
                  }
                  }
                
              
               if (  overhangStyle != false) {
              

                if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
                 
                    loadingOverhangoCarriage(overhangStyle)       
                    } else if ( Dpath == "Shed2/") {
                      loadingOverhango(overhangStyle)
                    }   
                  }
                  if ( Dpath == "capecode/") {
                      translateOn(rafterRight,"boxmax",dripoRight,"boxmax")
                      translateOn(rafterLeft,"boxmin",dripoLeft,"boxmin")
                        if (  overhangStyle != false) {
                      loadingOverhango(overhangStyle)
                    } else {

                  setTransp(dripBack,1)
                 //centerUnknownX(dripBack,backty)
                 //translateOn(dripoRight,"boxminz",dripBack,"boxminz")
                 //poisi1 = getPos(dripBack,"boxmax")
                 //poisi2 = getPos(dripoRight,"boxmax")

                 scaleBetween2Objects(dripBack,dripoLeft,"boxmin",dripoRight,"boxmax","x")
                 translateOn(dripoRight,"boxminz",dripBack,"boxminz")

                
            }

                    }
              } 
             })      
          })         
         });         
}

function loadingoverhango(element) {
  var element = element
  if ( element != "none") {
  overhangStyle = element
  loadingOverhango(element)
  try {
  scene.remove(pcRight2)
  scene.remove(pcLeft2)
} catch {
  //pass
}
} else {

  overhangStyle = false
  try {
    scene.remove(overhangsRight)
    scene.remove(overhangsLeft)
    setTransp(overClosing,0)
    setTransp(overClosing2,0)
    try {
    scene.add(pcRight2)
    scene.add(pcLeft2)
  } catch{
    //pass
  }
  } catch {
    console.log("erno")
  }
}
}

function deleteoverhang(els) {

  if ( els == "miratec") {
    try {
      scene.remove(miratecLeft)
      scene.remove(miratecRight)
      miratecLeft =""
      miratecRight = ""
      if ( Dpath != "capecode/") {
      setTransp(overClosing,0)
      setTransp(overClosing2,0)
    } 
    } catch {
      //pass
    }
    if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
      shingles.scale.z = 1
      centerUnknownZ(shingles,righty)
    }
  } else if ( els == "overhangs") {
    overhangStyle = false
    if ( Dpath != "capecode/") {
      try {
        scene.add(pcRight2)
        scene.add(pcLeft2)
      } catch {
        //pass
      }
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
      try {
      scene.remove(overhangsRight)
      scene.remove(overhangsLeft)
    } catch {
      //pass
    }
      try {
      setTransp(overClosing,0)
      setTransp(overClosing2,0)
    } catch {
      //pass
    }
    if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
      translateOn(rafterRight,"boxmax",dripoRight,"boxmax")
      translateOn(rafterLeft,"boxmin",dripoLeft,"boxmin")
    }
    try {
       shingles.scale.x = XX
       translateOn(rafterLeft,"boxmin",dripFront,"boxmin")
       translateOn(rafterLeft,"boxmin",dripBack,"boxmin")
       scaleBetween2Objects(dripFront,rafterLeft,"boxmin",rafterRight,"boxmax","x")
       scaleBetween2Objects(dripBack,rafterLeft,"boxmin",rafterRight,"boxmax","x")
       //centerUnknownX(dripFront,front)
       //centerUnknownX(dripBack,backty)

       var piso1 = getPos(pcRight2,"boxmax")
       var piso2 = getPos(dripoRight,"boxmax")
       dripoRight.translateX(piso1-piso2)

       var piso1 = getPos(pcLeft2,"boxmin")
       var piso2 = getPos(dripoLeft,"boxmin")
       dripoLeft.translateX(-(piso1-piso2))

      centerUnknownX(shingles,front)
      
      try {
        scene.remove(miratecRight)
        scene.remove(miratecLeft)
      } catch {
        //pass
      }
      miratecRight = ""
      miratecLeft = ""
      overhangsRight = ""
      overhangsLeft = ""

    } catch {
      //pass
    }
              } else {
                try {
                scaleBetween2Objects(dripBack,rafterLeft,"boxmin",rafterRight,"boxmax","x")
                translateOn(dripoRight,"boxminz",dripBack,"boxminz")

    } catch {
      //pass
    }

    translateOn(rafterRight,"boxmax",dripoRight,"boxmax")
    translateOn(rafterLeft,"boxmin",dripoLeft,"boxmin")
  
      scene.remove(overhangsRight)
      scene.remove(overhangsLeft)
      try {
      scene.remove(overClone)
    } catch {
      //pass
    }
              
                //let poisi1 = getPos(overClosing,"boxmax")
                //let poisi2 = getPos(rafterRight,"boxmax")

                scaleBetween2Objects(overClosing,specialOverclosing,"boxmax",rafterRight,"boxmax","x")
                /*
                if ( poisi1<poisi2) {
                  while ( poisi1<poisi2) {
                    overClosing.scale.x += 0.025
                    translateOn(specialOverclosing,"boxmax",overClosing,"boxmin")
                    poisi1 = getPos(overClosing,"boxmax")
                  }
                } else {
                poisi1 = getPos(overClosing,"boxmax")
                poisi2 = getPos(rafterRight,"boxmax")
                while ( poisi1>poisi2) {
                  
                  overClosing.scale.x -= 0.025
                  translateOn(specialOverclosing,"boxmax",overClosing,"boxmin")
                  poisi1 = getPos(overClosing,"boxmax")
                }
              }

               */
                overClone = overClosing.clone()
                translateOn(specialOverclosing,"boxmin",overClone,"boxmax")
                scene.add(overClone)
                if ( CAPSTYLE == "capeWide" && (ZZ == 1.75 || ZZ == 1.5)) {
                   overClone.translateX(0.075)
                } else if ( CAPSTYLE == "cape" && (ZZ == 1.25 || ZZ == 1)) {
                  overClone.translateX(0.05)
                }
              }

                setTransp(overClosing2,1)
                //poisi1 = getPos(overClosing2,"boxmax")
                //poisi2 = getPos(rafterRight,"boxmax")

                scaleBetween2Objects(overClosing2,rafterLeft,"boxmin",rafterRight,"boxmax","x")

                /*
                if ( poisi1 < poisi2 ) {
                  while ( poisi1 < poisi2 ) {
                    overClosing2.scale.x += 0.025
                    centerUnknownX(overClosing2,backty)
                    poisi1 = getPos(overClosing2,"boxmax")
                  }
                } else {
                  while ( poisi1 > poisi2) {
                    overClosing2.scale.x -= 0.025
                    centerUnknownX(overClosing2,backty)
                    poisi1 = getPos(overClosing2,"boxmax")
                  }
                }
                */
                 if ( Dpath != "capecode/") {
                    setTransp(overClosing,0)
                    setTransp(overClosing2,0)
                }

                try {
                  scene.remove(shingOverhang1)
                  scene.remove(shingOverhang2)
                } catch {
                  //pass
                }
      scene.remove(miratecLeft)
      scene.remove(miratecRight)
      if ( Dpath == "capecode/") {
        loadingOverhango("normal")
      }
     
  }

      if ( (Dpath == "carriage/" || Dpath == "highCarriage/") && overhangStyle == "7horizontal") {
      
        loadingoverhangoCarriage('7')
      }

      if ( Dpath == "Shed2/" && overhangStyle == "7horizontal") {
      
        loadingoverhango('7inch')
      }
}


function scaleOverhangs() {
  let pos1,pos2 
  
  //translateOn(front,"boxmaxz",overClosing,"boxminz")
  translateOn(backty,"boxminz",overClosing2,"boxmaxz")
  translateOn(miratecRight,"boxmaxz",overClosing,"boxmaxz")
  setTransp(overClosing,1)
  setTransp(overClosing2,1)
  pos2 = getPos(overClosing,"boxmaxz")
  console.log(pos1 + "  " + pos2)
  scaleBetween2Objects(miratecRight,overClosing2,"boxminz",overClosing,"boxmaxz","z")
  /*
  while ( getPos(miratecRight,"boxmaxz") < pos2 ) {
    miratecRight.scale.z+= 0.005
    centerUnknownZ(miratecRight,righty)

  } 


  while (getPos(miratecLeft,"boxmaxz") < pos2 ) {
    miratecLeft.scale.z += 0.005
    centerObjectsReversed(miratecLeft,lefty)
  }
*/
 
 // translateOn(overhangsRight,"boxmax",miratecRight,"boxmax",0.003)
  
  //let s1,s2 
  //s1 = getPos(overhangsLeft,"boxmin")
  //s2 = getPos(miratecLeft,"boxmin")
  //miratecLeft.translateX(-(s1-s2))
  //miratecLeft.translateX(0.003)
  
  try {
        
        translateOn(miratecRight,"boxminy",overClosing,"boxminy")
        translateOn(miratecRight,"boxminy",overClosing2,"boxminy")
      } catch {
        //pass
      }
    //translateOn(overClosing,"boxminy",miratecRight,"boxminy")
  //translateOn(overClosing,"boxminy",miratecLeft,"boxminy")
    //translateOn(overhangsLeft,"boxmax",miratecLeft,"boxmax")
 }

function loadingMiratec(element,sth = "ok") {
        if ( overhangStyle == "7inch" && sth == "changeMe") {
          loadingoverhango('7horizontal')
        } else {
        try {
          if ( typeof(miratecRight)== "object") {
            scene.remove(miratecRight)
            scene.remove(miratecLeft)
          }
        }catch {
          //pass
        }
          if ( typeof(overhangsRight) != "object") {
            alert("Please select overhangs")
          } else {
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = element + pitchD
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {

                node.castShadow = false;
                node.receiveShadow = false;
                miratecRight = node

                centerObjects(miratecRight)
                if ( Dpath != "capecode/") {

                translateOn(overhangsRight,"boxmax",miratecRight,"boxmax",0.01)
                if ( (overhangStyle == "horizontal" || overhangStyle == "312inch") && XX >= 2) {
                  translateOn(front,"boxmax",miratecRight,"boxmax")
                }
                translateOn(shingles,"boxminy",miratecRight,"boxminy",-0.155)
              } else {
                translateOn(overhangsRight,"boxmax",miratecRight,"boxmin")
                translateOn(overClosing,"boxminy",miratecRight,"boxminy")
              }
      
                p2.push(miratecRight)
                scene.add(miratecRight)


                //ALL THIS PART IS ADDED 30/12/20
                if ( Dpath != "capecode/") {
                 translateOn(faceBoard,"boxmaxz",overClosing,"boxminz")
                 translateOn(faceBoard2,"boxminz",overClosing2,"boxmaxz")
                  scaleBetween2Objects(miratecRight,overClosing2,"boxminz",overClosing,"boxmaxz","z")
                }

                miratecLeft = miratecRight.clone()
                miratecLeft.rotateY(Math.PI)
                centerObjectsReversed(miratecLeft)
                if ( Dpath != "capecode/") {

                var posii1 = getPos(overhangsLeft,"boxmin")
               if ( (overhangStyle == "horizontal" || overhangStyle == "312inch") && XX >= 2) {
                posii1 = getPos(front,"boxmin")
              } 

              } else {
                var posii1 = getPos(overhangsLeft,"boxmin")
                translateOn(overhangsRight,"boxminz",overClosing2,"boxmaxz")
              }
                var posii2 = getPos(miratecLeft,"boxmin") 
                miratecLeft.translateX(-(posii1-posii2) +0.01)
                p2.push(miratecLeft)
                scene.add(miratecLeft)

               
                if ( Dpath != "capecode/") {
                scaleOverhangs()
              }  else {
                try {
                 
            faceColor(FACECOLOR)
          } catch {
            //pass
          }
              }
              if ( Dpath != "capecode/") {
             
                translateOn(miratecLeft,"boxmin",overClosing2,"boxmin")
            scaleBetween2Objects(overClosing2,miratecLeft,"boxmin",miratecRight,"boxmax","x")

             translateOn(miratecLeft,"boxmin",overClosing,"boxmin")
            scaleBetween2Objects(overClosing,miratecLeft,"boxmin",miratecRight,"boxmax","x")
          }
           // translateOn(faceBoard,"boxmaxz",overClosing,"boxminz")
           // scaleBetween2Objects(miratecRight,overClosing2,"boxminz",overClosing,"boxmaxz","z")

              
              
              }
             })
                  
          })         
         }); 
         }     
         }   
       }

        function loadingOverhango(element) {
          let posii1, posii2
          if ( Dpath != "capecode/") {
          try {
           
            overClosing.scale.x = XX
            overClosing2.scale.x = XX

            translateOn(miratecLeft,"boxmin",overClosing2,"boxmin")
            scaleBetween2Objects(overClosing2,miratecLeft,"boxmin",miratecRight,"boxmax","x")

             translateOn(miratecLeft,"boxmin",overClosing,"boxmin")
            scaleBetween2Objects(overClosing,miratecLeft,"boxmin",miratecRight,"boxmax","x")
          } catch {
            //pass
          }
        }
        if ( Dpath == "capecode/") {
          try {
            scene.remove(shingOverhang1)
            scene.remove(shingOverhang2)
            //shingleClones.splice(shingleClones.indexOf(shingOverhang1),1)
            //shingleClones.splice(shingleClones.indexOf(shingOverhang2),1)

          } catch {
            //pass
          }
        }
         try {
          scene.remove(overhangsRight)
          scene.remove(overhangsLeft)
         } catch {
          console.log("in overhangs error")
         }
          var elto = element

          var path = Dpath + "/pitch/" + sizeD + "/"
          

          var element = element + pitchD
          
          if ( elto == "normal") {
            element = "overhangDRight"
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                overhangsRight = node

                centerObjects(overhangsRight)
                if ( Dpath != "Shed2/") {
                //translateOn(dripoRight,"boxmax",overhangsRight,"boxmin")
                translateOn(rafterRight,"boxmax",overhangsRight,"boxmin",-0.03) // ****
              } else {
                translateOn(pcRight2,"boxmin",overhangsRight,"boxmin")

              }
             
                p2.push(overhangsRight)
                scene.add(overhangsRight)

                overhangsLeft = overhangsRight.clone()
                overhangsLeft.rotateY(Math.PI)
                centerObjectsReversed(overhangsLeft)
                if ( Dpath != "Shed2/") {
                 posii1 = getPos(rafterLeft,"boxmin")
                 posii2 = getPos(overhangsLeft,"boxmax") 
              } else {
                 posii1 = getPos(pcLeft2,"boxmax")
                 posii2 = getPos(overhangsLeft,"boxmax") 
              }
                overhangsLeft.translateX(-(posii1-posii2))
                if ( Dpath == "capecode/") {
                  overhangsLeft.translateX(-0.03)
                }
                p2.push(overhangsLeft)
                scene.add(overhangsLeft)

                if ( typeof(miratecRight) == "object" || overhangStyle == "10inch" || overhangStyle == "7horizontal") {
                       try {
                         if ( Dpath != "capecode/") {
                          translateOn(p2[0],"boxmaxy",overhangsRight,"boxmaxy")
                          translateOn(p2[0],"boxmaxy",overhangsLeft,"boxmaxy")
                        } else {
                          translateOn(rafterRight,"boxmaxy",overhangsRight,"boxmaxy")
                          translateOn(rafterLeft,"boxmaxy",overhangsLeft,"boxmaxy")
                        }
                         
                        } catch {
                          //pass
                        }
                    if ( elto != "normal" && overhangStyle != "7inch") {
                  loadingMiratec("miratec")
                }
                if ( overhangStyle == "7inch") {
                  try {
                    scene.remove(miratecRight)
                    scene.remove(miratecLeft)
                    setTransp(overClosing,0)
                    setTransp(overClosing2,0)
                  } catch {
                    //pass
                  }
                }
                  
                } else {
                  setTransp(overClosing,0)
                  setTransp(overClosing2,0)
        if ( Dpath != "capecode/") {
        try {
          translateOn(p2[0],"boxmaxy",overhangsRight,"boxmaxy")
          translateOn(p2[0],"boxmaxy",overhangsLeft,"boxmaxy")
        } catch {
          //pass
        }
      } else {
        try {
          translateOn(rafterRight,"boxmaxy",overhangsRight,"boxmaxy")
          translateOn(rafterLeft,"boxmaxy",overhangsLeft,"boxmaxy")
        } catch {
          //pass
        }
      }
    }

                if ( Dpath != "capecode/") {
                //let pos1 = getPos(shingles,"boxmax")
                //let pos2 = getPos(overhangsRight,"boxmax")
                //let piu1, piu2

                scaleBetween2Objects(shingles,overhangsLeft,"boxmin",overhangsRight,"boxmax","x")
                /*
                while ( pos1<pos2) {
                  shingles.scale.x += 0.01
                  //faceBoard.scale.x += 0.01
                  centerUnknownX(faceBoard,front)
                  centerUnknownX(shingles,front)
                  pos1 = getPos(shingles,"boxmax")
                }
                if ( pos1 > pos2) {
                  
                  while ( pos1 > pos2) {
                    shingles.scale.x -= 0.01
                   
                  
                    centerUnknownX(shingles,front)
                    pos1 = getPos(shingles,"boxmax")
                  }
                }
                */
                shingles.scale.x += 0.03
                //faceBoard.scale.x += 0.03
                //faceBoard2.scale.x = faceBoard.scale.x
                //enterUnknownX(faceBoard2,backty)
                //centerUnknownX(faceBoard,front)
                centerUnknownX(shingles,front)

                //piu1 = getPos(faceBoard,"boxmax")
                //piu2 = getPos(overhangsRight,"boxmax")
                 scaleBetween2Objects(faceBoard,overhangsLeft,"boxmin",overhangsRight,"boxmax","x")
                 /*
                while ( piu1<piu2) {
                 
                  faceBoard.scale.x += 0.01
                  centerUnknownX(faceBoard,front)
                  
                  piu1 = getPos(faceBoard,"boxmax")
                }
                if ( piu1 > piu2) {
                  while ( piu1 > piu2) {
                    faceBoard.scale.x -= 0.01
                    centerUnknownX(faceBoard,front)
                    piu1 = getPos(faceBoard,"boxmax")
                  }
                }
                */
                //centerUnknownX(faceBoard,front)
                //faceBoard2.scale.x = faceBoard.scale.x
                scaleBetween2Objects(faceBoard2,overhangsLeft,"boxmin",overhangsRight,"boxmax","x")
               // centerUnknownX(faceBoard2,backty)
                
              } else {
                if ( XX != 456) {
                shingOverhang1 = shingleClones[0].clone()
                translateOn(overhangsRight,"boxmax",shingOverhang1,"boxmax",0.02)
                scene.add(shingOverhang1)
                shingOverhang2 = shingleReversed.clone()
                translateOn(overhangsLeft,"boxmin",shingOverhang2,"boxmin",-0.02)
                scene.add(shingOverhang2)

                shingleClones.push(shingOverhang2)
                shingleClones.push(shingOverhang1)
              } else {
                if ( CAPSTYLE != "capeWide") {
                translateOn(overhangsRight,"boxmax",shingles,"boxmax",0.02)
                 translateOn(overhangsLeft,"boxmin",shingleReversed,"boxmin",-0.02)
               } else {
                 translateOn(specialShingles,"boxmin",shingleReversed,"boxmin",-0.148)
                  translateOn(specialShingles,"boxmax",shingles,"boxmax",0.148)
               }
              }
                translateOn(specialOverclosing,"boxminy",overClosing,"boxminy")
                centerUnknownZ(overClosing,specialOverclosing)
                translateOn(specialOverclosing,"boxmax",overClosing,"boxmin") 

                //let poisi1 = getPos(overClosing,"boxmax")
                //let poisi2 = getPos(overhangsRight,"boxmax")

                 scaleBetween2Objects(overClosing,specialOverclosing,"boxmax",overhangsRight,"boxmax","x")

                 /*
                if ( poisi1<poisi2) {
                  while ( poisi1<poisi2) {
                    overClosing.scale.x += 0.015
                    translateOn(specialOverclosing,"boxmax",overClosing,"boxmin")
                    poisi1 = getPos(overClosing,"boxmax")
                  }
                } else {
                poisi1 = getPos(overClosing,"boxmax")
                poisi2 = getPos(overhangsRight,"boxmax")
                while ( poisi1>poisi2) {
                  
                  overClosing.scale.x -= 0.015
                  translateOn(specialOverclosing,"boxmax",overClosing,"boxmin")
                  poisi1 = getPos(overClosing,"boxmax")
                }
              }
          */

                scene.remove(overClone)
                overClone = overClosing.clone()
                translateOn(specialOverclosing,"boxmin",overClone,"boxmax")
                if ( CAPSTYLE == "capeWide" && (ZZ == 1.75 || ZZ == 1.5)) {
                   overClone.translateX(0.075)
                } 
                scene.add(overClone)
                setTransp(overClone,1)
                setTransp(overClosing,1)
                setTransp(overClosing2,1)
                //translateOn(overhangsRight,"boxminz",overClosing2,"boxmaxz")
                //poisi1 = getPos(overClosing2,"boxmax")
                //poisi2 = getPos(overhangsRight,"boxmax")

                 scaleBetween2Objects(overClosing2,overhangsLeft,"boxmin",overhangsRight,"boxmax","x")
                 /*
                 if ( poisi1 < poisi2 ) {
                  while ( poisi1 < poisi2 ) {
                    overClosing2.scale.x += 0.005
                    centerUnknownX(overClosing2,backty)
                    poisi1 = getPos(overClosing2,"boxmax")
                  }
                } else {
                  while ( poisi1 > poisi2) {
                    overClosing2.scale.x -= 0.005
                    centerUnknownX(overClosing2,backty)
                    poisi1 = getPos(overClosing2,"boxmax")
                  }
              }
              */
            }
            
          centerUnknownX(overClosing2,backty)
          if ( Dpath !=  "capecode/") {
          centerUnknownX(overClosing,front)
        }
          translateOn(overhangsRight,"boxmax",dripoRight,"boxmax")
          if ( Dpath != "capecode/") {
          dripoLeft.translateX(-(getPos(overhangsLeft,"boxmin")-getPos(dripoLeft,"boxmin")))
        }else {
            dripoLeft.translateX(getPos(overhangsLeft,"boxmin")-getPos(dripoLeft,"boxmin"))
            translateOn(overhangsRight,"boxmaxy",dripoRight,"boxmaxy",0.007)
            translateOn(overhangsLeft,"boxmaxy",dripoLeft,"boxmaxy",0.007)
            translateOn(overClosing2,"boxmaxy",dripBack,"boxmaxy",0.03)

            setTransp(dripBack,1)
            centerUnknownX(dripBack,backty)
            translateOn(dripoRight,"boxminz",dripBack,"boxminz")
            // poisi1 = getPos(dripBack,"boxmax")
            // poisi2 = getPos(overhangsRight,"boxmax")

               scaleBetween2Objects(dripBack,overhangsLeft,"boxmin",overhangsRight,"boxmax","x")
               /*
                 if ( poisi1 < poisi2 ) {
                  while ( poisi1 < poisi2 ) {
                    dripBack.scale.x += 0.005
                    centerUnknownX(dripBack,backty)
                    poisi1 = getPos(dripBack,"boxmax")
                  }
                } else {
                  while ( poisi1 > poisi2) {
                    dripBack.scale.x -= 0.005
                    centerUnknownX(dripBack,backty)
                    poisi1 = getPos(dripBack,"boxmax")
                  }
              }
              */
            
        }

        if ( Dpath != "capecode/") {
          try {
           translateOn(overhangsRight,"boxmaxy",dripoRight,"boxmaxy",0.01)
            translateOn(overhangsLeft,"boxmaxy",dripoLeft,"boxmaxy",0.01)

            if (Dpath == "Shed2/") {
              translateOn(dripoRight,"boxminy",dripFront,"boxminy")
              translateOn(dripoRight,"boxminy",dripBack,"boxminy")
            }
          } catch {
            //pass
          }
        }
        if ( Dpath == "capecode/" && ( ZZ == 1.25 || ZZ == 1) && CAPSTYLE != "capeWide") {
           overClone.translateX(0.065)
        }  

              }
             })
          })         
         });         
       }


function loadingoverhangoCarriage(element) {
    var element = element
    if ( element != "none") {
    overhangStyle = element
    loadingOverhangoCarriage(element)
  } else {

    overhangStyle = false
    try {
      scene.remove(overhangsRight)
      scene.remove(overhangsLeft)
      setTransp(overClosing,0)
      setTransp(overClosing2,0)
    } catch {
      console.log("erno")
    }
}
}


function loadingOverhangoCarriage(element) {
           try {
            scene.remove(overhangsRight)
           } catch {
            console.log("in overhangs error")
           }
            try {
             // shingles.scale.x = 1
             // dripoRight.position.y = 0
              //dripoLeft.position.y = 0
              //dripFront.scale.x = 1
              //dripBack.scale.x = 1
              overClosing.scale.x = XX
              overClosing2.scale.x = XX
            } catch {
              //pass
            }
          var elto = element
  
          var path = "carriage" + "/pitch/" + sizeD + "/"
         
          var element = element 

          if ( Dpath == "designerCarriage/") {
            path = "designerCarriage/pitch/" + sizeD + "/"
            element = "overhangsRight"
          }
        
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                overhangsRight = node

                centerUnknownZ(overhangsRight,righty)
                //translateOn(rafterRight,"boxmax",overhangsRight,"boxmin")

                if ( Dpath == "highCarriage/") {

                translateOn(rafterRight,"boxmaxy",overhangsRight,"boxmaxy")
              }
                //translateOn(rafterRight,"boxmaxy",overhangsRight,"boxmaxy",0.001)

                //rafterRight.translateX(-0.0135)
                translateOn(rafterRight,"boxmax",overhangsRight,"boxmin",0.01) 
                p2.push(overhangsRight)
                scene.add(overhangsRight)
                if ( element == "overRight") {
                  loadingOverhangsLeftCarriage("over")
                } else {
                loadingOverhangsLeftCarriage(element)
              }
                //let piu1,piu2
                //piu1 = getPos(faceBoard,"boxmax")
                //piu2 = getPos(overhangsRight,"boxmax")

                 

                 /*
                while ( piu1<piu2) {
                  faceBoard.scale.x += 0.01
                  centerUnknownX(faceBoard,front)
                  piu1 = getPos(faceBoard,"boxmax")
                }
                if ( piu1 > piu2) {
                  while ( piu1 > piu2) {
                    faceBoard.scale.x -= 0.01
                    centerUnknownX(faceBoard,front)
                    piu1 = getPos(faceBoard,"boxmax")
                  }
                }
                */
                /*
                  if ( piu1 > piu2) {
                    faceBoard.scale.x -= 0.005
                  } else {
                    faceBoard.scale.x += 0.005
                  }
                  */
                // centerUnknownX(faceBoard,front)
                //faceBoard2.scale.x = faceBoard.scale.x
                //centerUnknownX(faceBoard2,backty)
              }
             })
     
          })         
         });         
       }

function deleteoverhangCarriage() {
  try {
    scene.remove(overhangsRight)
    scene.remove(overhangsLeft)
  } catch {
    //pass
  }
  try {
    scene.remove(miratecRight)
    scene.remove(miratecLeft)
  } catch {
    //pass
  }
  loadingoverhangoCarriage("overRight")
}



function loadingMiratecCarriage(element, sth = "ok") {
        if ( overhangStyle == "7" && sth == "changeMe") {
          loadingoverhangoCarriage('7horizontal')
          
        } else {
        overClosing.scale.x = 0.8
        overClosing2.scale.x = 0.8
        overClosing.scale.z = 1
        overClosing2.scale.z = 1

        try {
          
            scene.remove(miratecRight)
          
        } catch {
          //pass
        }
          if ( typeof(overhangsRight) != "object" || overhangStyle == "overRight") {
            alert("Please select overhangs")
          } else {
          var path = "carriage" + "/pitch/" + sizeD + "/"
          var element = "miratec" + pitchD
          if ( Dpath == "designerCarriage/") {
            path = "designerCarriage/pitch/" + sizeD + "/"
            element = "miratecRight"
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {

                node.castShadow = false;
                node.receiveShadow = false;
                miratecRight = node

                if ( Dpath == "designerCarriage/"){
                  miratecRight.scale.z = 1.03809999999999935
                }
                centerUnknownZ(miratecRight,righty)
                translateOn(overhangsRight,"boxmax",miratecRight,"boxmin")


                if ( Dpath == "highCarriage/") {
                translateOn(rafterRight,"boxmaxy",miratecRight,"boxmaxy") 
              }



                p2.push(miratecRight)
                scene.add(miratecRight)

                loadingMiratecLeftCarriage()
               // scaleOverhangs()  
              }
             })
                  
          })         
         });      
         }       
       }
} 

function loadingMiratecLeftCarriage(element) {
       try {
            scene.remove(miratecLeft)          
        } catch {
          //pass
        }
          if ( typeof(overhangsRight) != "object") {
            alert("Please select overhangs")
          } else {
          var path = "carriage" + "/pitch/" + sizeD + "/"
          var element = "miratec" + pitchD + "Left"

          if ( Dpath == "designerCarriage/") {
            path = "designerCarriage/pitch/" + sizeD + "/"
            element = "miratecLeft"
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {

                node.castShadow = false;
                node.receiveShadow = false;
                miratecLeft = node

                if ( Dpath == "designerCarriage/") {
                miratecLeft.scale.z = 1.03809999999999935
              }
                centerUnknownZ(miratecLeft,righty)
                translateOn(overhangsLeft,"boxmin",miratecLeft,"boxmax")

                

                if ( Dpath == "highCarriage/") {
                translateOn(rafterRight,"boxmaxy",miratecLeft,"boxmaxy") 
              }

                p2.push(miratecLeft)
                scene.add(miratecLeft)
               // scaleOverhangs()  

                setTransp(overClosing,1)
                setTransp(overClosing2,1)
                //overClosing.scale.z = 3.2
                if ( Dpath == "carriage/") {
                overClosing.position.y = 0.06746186408996574
              } else if ( Dpath == "highCarriage/") {
                overClosing.position.y = 0.2424618640899658
              }
                overClosing.scale.z = 3.2
                translateOn(overhangsRight,"boxmaxz",overClosing,"boxminz")
                //let pos2 = getPos(overClosing,"boxmaxz")
                overClosing2.scale.z = 3.2
                translateOn(overhangsRight,"boxminz",overClosing2,"boxmaxz")
                if ( Dpath == "carriage/") {
                overClosing2.position.y = -0.24088612079620364
              } else if ( Dpath == "highCarriage/") {
                overClosing2.position.y = -0.07246186408996574
              }

              if ( Dpath == "designerCarriage/") {
                translateOn(righty,"boxmaxz",overClosing,"boxmaxz")
                translateOn(righty,"boxminz",overClosing2,"boxminz") 
              }

               
                  //centerUnknownX(overClosing,front)
                  //centerUnknownX(overClosing2,backty)
               
               // centerUnknownX(overClosing,front)
                //let poss1 = getPos(overClosing,"boxmax")
                //let poss2 = getPos(miratecRight,"boxmax")

                

                 /*
                while ( poss1 < poss2) {
                  overClosing.scale.x += 0.005
                  translateOn(miratecLeft,"boxmin",overClosing,"boxmin")
                  poss1 = getPos(overClosing,"boxmax")
                }
                poss1 = getPos(overClosing2,"boxmax")
                poss2 = getPos(miratecRight,"boxmax")

                while ( poss1 < poss2) {
                  overClosing2.scale.x += 0.005
                 centerUnknownX(overClosing2,backty)
                  poss1 = getPos(overClosing2,"boxmax")
                }
                */
              //overClosing2.scale.x -= 0.002
              //overClosing.scale.x -= 0.002

             

              //centerUnknownX(overClosing,front)
              //centerUnknownX(overClosing2,backty)
               
              
              if ( Dpath != "designerCarriage/") {
                scaleBetween2Objects(overClosing,miratecLeft,"boxmin",miratecRight,"boxmax","x")
              scaleBetween2Objects(overClosing2,miratecLeft,"boxmin",miratecRight,"boxmax","x")

              translateOn(miratecRight,"boxmaxz",overClosing,"boxminz")
              translateOn(overClosing,"boxminz",faceBoard,"boxmaxz")

              translateOn(faceBoard,"boxminy",overClosing,"boxminy")
              translateOn(faceBoard2,"boxmaxy",overClosing2,"boxmaxy")

            }

            if ( Dpath == "designerCarriage/") {
              //overClosing.translateZ(0.005)
              //overClosing2.translateZ(-0.005)
              //if ( ZZ == 1.75) {
                //overClosing.translateZ(0.01)
                //overClosing2.translateZ(-0.012)
              //}
                scaleBetween2Objects(overClosing,miratecLeft,"boxmin",miratecRight,"boxmax","x")
              scaleBetween2Objects(overClosing2,miratecLeft,"boxmin",miratecRight,"boxmax","x")

              translateOn(miratecRight,"boxmaxz",overClosing,"boxminz")
              translateOn(overClosing,"boxminz",faceBoard,"boxmaxz")

              //translateOn(faceBoard,"boxminy",overClosing,"boxminy")
              translateOn(faceBoard2,"boxmaxy",overClosing2,"boxmaxy")

              translateOn(miratecRight,"boxmaxz",overClosing,"boxmaxz")
              translateOn(miratecLeft,"boxminz",overClosing2,"boxminz")

              translateOn(overClosing,"boxmaxy",faceBoard,"boxmaxy")
              translateOn(overClosing,'boxminz',faceBoard,"boxminz")

              translateOn(overClosing2,"boxmaxy",faceBoard2,"boxmaxy")
              translateOn(overClosing2,'boxmaxz',faceBoard2,"boxminz")
            }

              translateOn(overClosing,"boxmax",miratecRight,"boxmax")
              translateOn(miratecRight,"boxmax",overhangsRight,"boxmax")

              translateOn(overClosing,"boxmin",miratecLeft,"boxmin")
              translateOn(miratecLeft,"boxmin",overhangsLeft,"boxmin")
              
              shingles.scale.z = 1
              shingles.scale.z += 0.014
              centerUnknownZ(shingles,righty)
              translateOn(overhangsRight,"boxmax",miratecRight,"boxmin")
              translateOn(overhangsLeft,"boxmin",miratecLeft,"boxmax")
              }
             })       
          })         
         });      
         }       
} 

function loadingOverhangsLeftCarriage(element) {
           try { 
            scene.remove(overhangsLeft)
           } catch {
            console.log("in overhangs error")
           }
          var elto = element
  
          var path = "carriage" + "/pitch/" + sizeD + "/"
         
          var element = element + "Left"

          if ( Dpath == "designerCarriage/") {
            path = "designerCarriage/pitch/" + sizeD + "/"
            element = "overhangsLeft"
          }
        
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                overhangsLeft = node

                centerUnknownZ(overhangsLeft,righty)

                //translateOn(rafterLeft,"boxmin",overhangsLeft,"boxmax")

                if ( Dpath == "highCarriage/" ) {
                  translateOn(rafterLeft,"boxmaxy",overhangsLeft,"boxmaxy")
              }

                translateOn(overhangsRight,"boxmax",dripoRight,"boxmax")
                

                translateOn(overhangsRight,"boxmaxy",dripoRight,"boxmaxy")
                translateOn(overhangsLeft,"boxmaxy",dripoLeft,"boxmaxy")



                //rafterRight.translateX(-0.0135)
                translateOn(rafterLeft,"boxmin",overhangsLeft,"boxmax",-0.01) 
                translateOn(overhangsLeft,"boxmin",dripoLeft,"boxmin")
                if ( Dpath != "designerCarriage/") {
                dripoRight.translateY(0.005)
                dripoLeft.translateY(0.005)
              } else {
                 translateOn(shingles,"boxmaxy",dripoRight,"boxmaxy",-0.02)
                  translateOn(shingles,"boxmaxy",dripoLeft,"boxmaxy",-0.02)
              }
                p2.push(overhangsLeft)
                scene.add(overhangsLeft)

                //let pos1 = getPos(shingles,"boxmax")
                //let pos2 = getPos(overhangsRight,"boxmax")

                 scaleBetween2Objects(shingles,overhangsLeft,"boxmin",overhangsRight,"boxmax","x")
                 /*
                while ( pos1<pos2) {
                  shingles.scale.x += 0.01
                  centerUnknownX(shingles,front)
                  pos1 = getPos(shingles,"boxmax")
                }
                if ( pos1 > pos2) {
                  
                  while ( pos1 > pos2) {
                    shingles.scale.x -= 0.01
                    centerUnknownX(shingles,front)
                    pos1 = getPos(shingles,"boxmax")
                  }

                }
                */
                shingles.scale.x += 0.03
                centerUnknownX(shingles,front)

                //pos1 = getPos(dripFront,"boxmax")
                //pos2 = getPos(overhangsRight,"boxmax")
                scaleBetween2Objects(faceBoard,overhangsLeft,"boxmin",overhangsRight,"boxmax","x")
                 scaleBetween2Objects(faceBoard2,overhangsLeft,"boxmin",overhangsRight,"boxmax","x")

                 scaleBetween2Objects(dripFront,overhangsLeft,"boxmin",overhangsRight,"boxmax","x")
                 /*
                  while ( pos1<pos2) {
                  dripFront.scale.x += 0.01
                  centerUnknownX(dripFront,front)
                  pos1 = getPos(dripFront,"boxmax")
                }
                 if ( pos1 > pos2) {
                  
                  while ( pos1 > pos2) {
                    dripFront.scale.x -= 0.01
                    centerUnknownX(dripFront,front)
                    pos1 = getPos(dripFront,"boxmax")
                  }

                }
              */
                //pos1 = getPos(dripBack,"boxmax")
                //pos2 = getPos(overhangsRight,"boxmax")
                   scaleBetween2Objects(dripBack,overhangsLeft,"boxmin",overhangsRight,"boxmax","x")
                   /*
                  while ( pos1<pos2) {
                  dripBack.scale.x += 0.01
                  centerUnknownX(dripBack,backty)
                  pos1 = getPos(dripBack,"boxmax")
                }
                 if ( pos1 > pos2) {
                  
                  while ( pos1 > pos2) {
                    dripBack.scale.x -= 0.01
                    centerUnknownX(dripBack,backty)
                    pos1 = getPos(dripBack,"boxmax")
                  }

                }
              */
                if ( typeof(miratecRight) == "object" || overhangStyle == "10" || overhangStyle == "7horizontal") {
                  loadingMiratecCarriage()
                }
              }
             })
     
          })         
         });         
       }


function loadingShingModel(pitch = pitchD,size = sizeD) {
           try {
            scene.remove(designerRight)
            scene.remove(designerLeft)
          } catch {
            console.log("pd in loadDesigner")
          }
           try {
            let oldShingles = shingles
           } catch {
            //pass
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
         
          var path2 = path2
          var path = Dpath + "/shingles/" + sizeD + "/"

          var element = pitchD
          if ( ShingHighModel == "Right" || ShingHighModel == "Left" || ShingHighModel == "Both") {
            element += "peak" 
       
          }
          if ( ShingHighModel == "Designer") {
            element = "designer"
          }
          if ( Dpath == "capecode/") {
            element = "5cut"
            if ( CAPSTYLE == "capeWide") {
              element = "5cutWide"
            }
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                shingles = node

                //shingles.scale.x = XX
                if (Dpath != "minibarn/" && Dpath != "highbarn/" && Dpath != "vinylbarn/" && Dpath != "capecode/") {
                try {
                   shingles.scale.x = XX
                 } catch {
                  //pass
                 }
               }
               if ( Dpath == "highbarn/" && (ShingHighModel != "Both" && ShingHighModel != "Right" && ShingHighModel != "Left")) {
                shingles.scale.x = XX
                if ( XX == 1.4 ) {
                  shingles.scale.x = 1.385
                } else if ( XX == 1.6) {
                  shingles.scale.x = 1.58
                } else if ( XX == 1.8) {
                  shingles.scale.x = 1.775
                } else if ( XX == 2) {
                  shingles.scale.x = 1.969
                } else if ( XX == 2.2) {
                  shingles.scale.x = 2.164
                } else if ( XX == 2.4) {
                  shingles.scale.x = 2.36
                }
/*
                 if ( XX == 0.8) {
                 try {
                     dripBack.scale.x = 0.8
                     dripFront.scale.x = 0.8
                     centerUnknownX(dripFront,front)
                     centerUnknownX(dripBack,backty)
                     
                   } catch {
                    //pass
                   }
               }
               */
             }
               if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
                translateOn(rafterLeft,"boxmin",shingles,"boxmin",-0.045)

                if ( Dpath == "vinylbarn/") {
                  try {
                  for ( c of left ){
                    scene.remove(c)
                  }
                } catch {
                  //pass
                }
                }
               }
                if ( ShingHighModel == "Right") {
                  centerUnknownZ(shingles,lefty)
                  translateOn(peak,"boxmax",shingles,"boxmax",0.04)
                  try {
                  scene.remove(dripoRight)
                } catch {
                  //pass
                }
                try {
                   
                    translateOn(overLeft,"boxmin",dripoLeft,"boxmin")
                    setTimeout(addingDripsHighBarn,500,dripoLeft)
                   } catch {
                    //pass
                   }
                   try {
                    scaleBetween2Objects(backRaft,overLeft,"boxmin",overRight,"boxmax","x")
                    scaleBetween2Objects(frontRaft,overLeft,"boxmin",overRight,"boxmax","x")
                  } catch {
                    //pass
                  }

                 // centerUnknownZ(shingles,righty)
                 
                 if ( XX == 0.8) {
                  shingles.scale.x = 0.84
                  translateOn(peak,"boxmax",shingles,"boxmax")
                  /*
                  try {
                     dripBack.scale.x = 0.8
                     dripFront.scale.x = 0.8
                     centerUnknownX(dripFront,front)
                     centerUnknownX(dripBack,backty)
                     translateOn(backRaft,"boxminy",dripBack,"boxminy",0.025)
                      translateOn(backRaft,"boxminz",dripBack,"boxmaxz")
                      centerUnknownX(dripBack,backty)
                   } catch {
                    //pass
                   }
                 
                */
              }
                 if ( XX == 1) {
                  shingles.scale.x = 1.01
                   translateOn(peak,"boxmax",shingles,"boxmax")
                 }
                  if ( XX > 1) {
                  shing2 = shingles.clone()
                  centerUnknownZ(shing2,shingles)
                
                  translateOn(overLeft,"boxmin",shing2,"boxmin",-0.074)
                  scene.add(shing2)

                }
                  if ( XX == 2.4 || XX == 2.2 || XX == 2) {
                    shnig3 = shingles.clone()
                    centerUnknownZ(shnig3,shingles)
                    centerUnknownX(shnig3,front)
                    scene.add(shnig3)
                   
                  }

                } else if ( ShingHighModel == "Left") {
                  try {
                    scene.remove(dripoLeft)
                  } catch {
                    //pass
                  }

                   shingles.rotateY(Math.PI)
                   let pos1 = getPos(peak,"boxmin")
                   let pos2 = getPos(shingles,"boxmin")
                   shingles.translateX(-(pos1-pos2-0.045))
                   centerObjectsReversed(shingles,righty)
                   try {
                    //scene.add(dripoRight)
                    translateOn(overRight,"boxmax",dripoRight,"boxmax")
                    setTimeout(addingDripsHighBarn,3000,dripoRight)
                    

                   } catch {
                    //pass
                   }
                    try {
                    scaleBetween2Objects(backRaft,overLeft,"boxmin",overRight,"boxmax","x")
                    scaleBetween2Objects(frontRaft,overLeft,"boxmin",overRight,"boxmax","x")
                  } catch {
                    //pass
                  }
                    if ( XX == 0.8) {
                  shingles.scale.x = 0.84
                  let psoo1 = getPos(peak,"boxmin")
                  let psoo2 = getPos(shingles,"boxmin")
                  shingles.translateX(-(psoo1-psoo2))
                 /*
                  try {
                     dripBack.scale.x = 0.8
                     dripFront.scale.x = 0.8
                     centerUnknownX(dripFront,front)
                     centerUnknownX(dripBack,backty)
                   } catch {
                    //pass
                   }
                   */
                 }
                  if ( XX == 1) {
                  shingles.scale.x = 1.01
                  let psoooo1 = getPos(peak,"boxmin")
                  let psoooo2 = getPos(shingles,"boxmin")
                  shingles.translateX(-(psoooo1-psoooo2))
                 }
                   if ( XX > 1) {
                   shing2 = shingles.clone()
                   let posa1 = getPos(overRight,"boxmax")
                   let posa2 = getPos(shing2,"boxmax")
                   shing2.translateX(-(posa1-posa2))
                   shing2.translateX(-0.053)
                   scene.add(shing2)
                   centerUnknownZ(shing2,shingles)
                 }
                   if ( XX == 2.4 || XX == 2.2 || XX == 2) {
                    shnig3 = shingles.clone()
                    centerObjectsReversed(shnig3)
                    centerObjectsReversedX(shnig3)
                    centerUnknownZ(shnig3,shingles)
                    scene.add(shnig3)
                   }
                } else if (ShingHighModel == "Both") {
                  scene.remove(dripoLeft)
                  scene.remove(dripoRight)
                  translateOn(peak,"boxmax",shingles,"boxmax",0.04)
                  centerUnknownZ(shingles,righty)
                   shing2 = shingles.clone()
                   shing2.rotateY(Math.PI)  
                   let pos1 = getPos(peak2,"boxmin")
                   let pos2 = getPos(shing2,"boxmin")
                   shing2.translateX(-(pos1-pos2-0.059))
                   centerObjectsReversed(shing2,righty)
                   scene.add(shing2)
                    try {
                    scaleBetween2Objects(backRaft,overLeft,"boxmin",overRight,"boxmax","x")
                    scaleBetween2Objects(frontRaft,overLeft,"boxmin",overRight,"boxmax","x")
                  } catch {
                    //pass
                  }
                   if ( XX == 0.8) {
                  shing2.scale.x = 0.83
                  let ppos1 = getPos(peak2,"boxmin")
                  let ppos2 = getPos(shing2,"boxmin")
                   shing2.translateX(-(ppos1-ppos2-0.059))
                  shingles.scale.x = 0.83
                  translateOn(peak,"boxmax",shingles,"boxmax")
                 /*
                  try {
                     dripBack.scale.x = 0.8
                     dripFront.scale.x = 0.8
                     centerUnknownX(dripFront,front)
                     centerUnknownX(dripBack,backty)
                   } catch {
                    //pass
                   }
                   */
                 }
                   if ( XX == 2.4 || XX == 2.2 || XX == 2) {
                    shnig3 = shingles.clone()
                    centerUnknownX(shnig3,front)
                    centerUnknownZ(shnig3,shingles)
                    scene.add(shnig3)
                   }
                }
                else {
                centerUnknownX(shingles,front)
              }
              if (ShingHighModel == "Left") {
                dripFront.scale.x = XX
                dripBack.scale.x = XX 
                centerUnknownX(dripFront,front)
                centerUnknownX(dripBack,backty)
              } else {
                centerUnknownZ(shingles,lefty)
              }
              if ( ShingHighModel == "Right" ||ShingHighModel == "Both") {
                 dripFront.scale.x = XX
                dripBack.scale.x = XX 
                centerUnknownX(dripFront,front)
                centerUnknownX(dripBack,backty)
              }
                scene.add(shingles)
               
                 if ( typeof(cupola) == "object") {
                  cupolaPlacement()

                }
               if ( ShingHighModel == "Designer") {
               
                  loadDesignerHighRight()
                } else if ( ShingHighModel == "7gable") {



                  let cdoval 
                  if ( XX > 1.4 ) {
                    cdoval = 0.03
                  } else {
                    cdoval = 0.07
                  }
                   dripFront.scale.x = XX
                  
              
                dripFront.scale.x += cdoval
                centerUnknownX(dripFront,front)
                translateOn(frontRaft,"boxmaxz",dripFront,"boxminz",-0.01)

                 dripBack.scale.x = XX
                dripBack.scale.x += cdoval
                centerUnknownX(dripBack,front)
                 translateOn(backRaft,"boxminz",dripBack,"boxmaxz",0.01)
                  loadGableHigh()
                } else if ( ShingHighModel == "") {
                  dripFront.scale.x = XX
                  dripBack.scale.x = XX
                  centerUnknownX(dripFront,front)
                  centerUnknownZ(dripBack,backty)
                  try {

                    translateOn(overRight,"boxmaxy",dripoRight,"boxmaxy",0.005)
                    translateOn(overLeft,"boxmaxy",dripoLeft,"boxmaxy",0.005)

                    translateOn(overRight,"boxmax",dripoRight,"boxmax")
                    translateOn(overLeft,"boxmin",dripoLeft,"boxmin")
                  } catch(err){
                    console.log(err)
                  }
                }

              }
             })
              if ( Dpath == "Shed2/" && pitchD == "7") {
                shingles.translateY(0.01)
              }
              if ( Dpath == "highbarn/") {
                   try {

                    translateOn(overRight,"boxmaxy",dripoRight,"boxmaxy",0.005)
                    translateOn(overLeft,"boxmaxy",dripoLeft,"boxmaxy",0.005)

                    translateOn(shingles,'boxminy',dripFront,"boxminy")
                    translateOn(shingles,"boxmaxz",dripFront,"boxmaxz")
                  } catch {
                    //pass
                  }
                      translateOn(backRaft,"boxminy",dripBack,"boxminy",0.025)
                      translateOn(backRaft,"boxminz",dripBack,"boxmaxz")
                      centerUnknownX(dripBack,backty)
                      if ( ShingHighModel == "Designer") {
                        setTransp(dripBack,0)
                        setTransp(dripFront,0)
                      } else {
                        setTransp(dripBack,1)
                        setTransp(dripFront,1)
                         try {
                    scaleBetween2Objects(backRaft,overLeft,"boxmin",overRight,"boxmax","x")
                    scaleBetween2Objects(frontRaft,overLeft,"boxmin",overRight,"boxmax","x")
                    scaleBetween2Objects(dripFront,overLeft,"boxmin",overRight,"boxmax","x")
                    scaleBetween2Objects(dripBack,overLeft,"boxmin",overRight,"boxmax","x")
                  } catch {
                    //pass
                  }
                      }
                }
            if ( Dpath == "designerCarriage/") {
              translateOn(rafterRight,"boxmaxy",shingles,"boxmaxy",0.0446)
            }
            if ( Dpath == "carriage/" || Dpath == "Shed2/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
              centerUnknownZ(shingles,righty)
              loadingDripoRight()
            } else if ( Dpath == "leanto/") {
               centerUnknownZ(shingles,platRef)
               translateOn(front,"boxmaxy",shingles,"boxminy")
               try {
                translateOn(shingles,"boxminz",rafterRight,"boxminz")
                translateOn(shingles,"boxminz",rafterLeft,"boxminz")

               } catch {
                //pass
               }
               loadingDripoRight()
               loadingRBack()
            }

            if ( Dpath == "minibarn/" || Dpath == "vinylbarn/" ) {
              shnigle = shingles.clone()
              translateOn(peak,"boxmax",shnigle,"boxmax",0.015) 
              scene.add(shnigle)
              translateOn(rafterLeft,"boxmin",shingles,"boxmin",-0.045)
              if ( XX == 2.4 || XX == 2.2 ||( XX == 2 && Dpath == "vinylbarn/")) {

                shnig3 = shingles.clone()
                centerUnknownX(shnig3,front)
                scene.add(shnig3)
              }
              loadingDripMiniBarnRight()



            } else if ( Dpath == "capecode/") {
              try {

                if ( CAPSTYLE == "capeWide") {translateOn(cape,"boxmaxy",shingles,"boxmaxy",0.013)}
              } catch {
                //pass
              }
              shingles.scale.x = 1
              shingleClones.push(shingles)
              loadingSpecialShinglesCape()

              //loadingDripoRight()
            }

            if ( Dpath != "capecode/") {
            roofingText()
          }



                   
          })         
         });         
       }


function loadingSpecialShinglesCape(dd="none") {
          try {
            scene.remove(specialShingles) 
          } catch {
            console.log("erno in specialShinleCape")
          }       
         
          let path = Dpath + "/shingles/" + sizeD + "/"

          let element = "5"
          if ( CAPSTYLE == "capeWide") {
            element = "5wide"
       
          }
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                specialShingles = node
                scene.add(specialShingles)           


                centerUnknownZ(specialShingles,righty)
                centerUnknownX(specialShingles,cape)
                //shingles.scale.x = 1
                //shingleClones.push(shingles)
                if (CAPSTYLE == "capeWide") {
                  translateOn(specialShingles,"boxmax",shingles,"boxmax")
                  translateOn(shingles,"boxminy",specialShingles,"boxminy")
                } else {
                translateOn(specialShingles,"boxmax",shingles,"boxmax")
              }
                let poisi1 = getPos(specialShingles,"boxmax")
                let poisi2 = getPos(rafterRight,"boxmax")



                if ( dd != "change") {

                if ( poisi1 < poisi2) {
              

                  while ( poisi1 < poisi2) {
                    
                  shinglesPrev = shingles.clone()
                  if ( CAPSTYLE != "capeWide") {
                  translateOn(shingles,"boxmax",shinglesPrev,"boxmin",-1.14) // 1.08
                } else {
                  translateOn(shingles,"boxmax",shinglesPrev,"boxmin",-1.28)
                }
                  poisi1 = getPos(shinglesPrev,"boxmax")
                  shingles = shinglesPrev
                  shingleClones.push(shingles)
                  scene.add(shinglesPrev) 

        
                }

               // let ps1 = getPos(rafterRight,"boxmax")
               // let ps2 = getPos(shingles,"boxmax")
                let piso = getPos(shingles,"boxmin")
                scaleBetween2Objects(shingles,shingles,"boxmin",rafterRight,"boxmax","x")

                /*
                while (ps2>ps1) {
                  shingles.scale.x-= 0.025
                  shingles.translateX(piso-getPos(shingles,"boxmin"))
                  ps2 = getPos(shingles,"boxmax")

                }
                */
                shingles.scale.x += 0.038
                shingles.translateX(piso-getPos(shingles,"boxmin"))

                
              

                }
                loadingShingleReversed()
                loadingSpecialOverClosing()

              } 
             else {
              loadingSpecialOverClosing()
            }
          }
             })      
            
          })         
         });         
}


function loadingSpecialOverClosing() {
            try {
            scene.remove(specialOverclosing)
           
          } catch {
            console.log("erno in specialOverClosing")
          }       
         
          let path = Dpath + "/pitch/" + sizeD + "/"
          let element
          if ( CAPSTYLE == "capeWide") {
            element = "overClosingWide"
          } else {
            element = "overClosing"
          }
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                specialOverclosing = node
                overClosing.scale.z = 1
                scene.add(specialOverclosing)              
                centerUnknownX(specialOverclosing,cape)

                if ( (ZZ == 1.25 || ZZ == 1) && CAPSTYLE != "capeWide") {
                specialOverclosing.translateX(-0.03) //*****
              } else if ( CAPSTYLE == "capeWide" && ( ZZ == 1.5 || ZZ == 1.75) ) {
                 specialOverclosing.translateX(-0.037)
        }

                translateOn(cape,"boxmaxy",specialOverclosing,"boxmaxy") // *****

                translateOn(cape,"boxmaxz",specialOverclosing,"boxminz",-0.04)   
                setTransp(overClosing,1)
                translateOn(specialOverclosing,"boxminy",overClosing,"boxminy")
                centerUnknownZ(overClosing,specialOverclosing)
                translateOn(specialOverclosing,"boxmax",overClosing,"boxmin")   
                
                //let poisi1 = getPos(overClosing,"boxmax")
                //let poisi2 = getPos(rafterRight,"boxmax")

                 scaleBetween2Objects(overClosing,specialOverclosing,"boxmax",rafterRight,"boxmax","x")
                 /*
                if ( poisi1<poisi2) {
                  while ( poisi1<poisi2) {
                    overClosing.scale.x += 0.025
                    translateOn(specialOverclosing,"boxmax",overClosing,"boxmin")
                    poisi1 = getPos(overClosing,"boxmax")
                  }
                } else {
                poisi1 = getPos(overClosing,"boxmax")
                poisi2 = getPos(rafterRight,"boxmax")
                while ( poisi1>poisi2) {
                  
                  overClosing.scale.x -= 0.025
                  translateOn(specialOverclosing,"boxmax",overClosing,"boxmin")
                  poisi1 = getPos(overClosing,"boxmax")
                }
              }
            */
                overClone = overClosing.clone()
                translateOn(specialOverclosing,"boxmin",overClone,"boxmax")
                scene.add(overClone)

                if ( CAPSTYLE == "capeWide" && (ZZ == 1.75 || ZZ == 1.5)) {
                   overClone.translateX(0.075)
                }  else if ( CAPSTYLE == "cape" && (ZZ == 1.25 || ZZ == 1)) {
                  overClone.translateX(0.05)
                }
                setTransp(overClosing2,1)
                //poisi1 = getPos(overClosing2,"boxmax")
                //poisi2 = getPos(rafterRight,"boxmax")

                 scaleBetween2Objects(overClosing2,rafterLeft,"boxmin",rafterRight,"boxmax","x")
                 /*
                if ( poisi1 < poisi2 ) {
                  while ( poisi1 < poisi2 ) {
                    overClosing2.scale.x += 0.025
                    centerUnknownX(overClosing2,backty)
                    poisi1 = getPos(overClosing2,"boxmax")
                  }
                } else {
                  while ( poisi1 > poisi2) {
                    overClosing2.scale.x -= 0.025
                    centerUnknownX(overClosing2,backty)
                    poisi1 = getPos(overClosing2,"boxmax")
                  }
                }
                */
                 try {
                  translateOn(cape,"boxminz",overClosing2,"boxmaxz")
                  centerUnknownX(overClosing2,front)
                } catch {
                  //pass
                }
              
              } 
             })      
          })         
         });         
}

function loadingShingleReversed() {
            
         
          let path = Dpath + "/shingles/" + sizeD + "/"
          let element = "5cutLeft"
          if ( CAPSTYLE == "capeWide") {
            element = "5cutLeftWide"
          }
          try {
            FaceColor(FACECOLOR)
          } catch {
            //pass
          }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                shingleReversed = node
                scene.add(shingleReversed)              
                centerUnknownZ(shingleReversed,righty)

  
                shingleClones.push(shingleReversed)

                if ( CAPSTYLE  == "capeWide") {

                  translateOn(specialShingles,"boxmin",shingleReversed,"boxmin")
                   translateOn(cape,"boxmaxy",shingleReversed,"boxmaxy",0.013) 
                } else {
                translateOn(specialShingles,"boxmin",shingleReversed,"boxmin")
              }
                let poisi1 = getPos(specialShingles,"boxmin")
                let poisi2 = getPos(rafterLeft,"boxmin")



                


                if ( (poisi1 < poisi2) || XX == 3.6) {
                
                  if ( XX != 3.6) {
                  while ( poisi1 < poisi2) {
                    
                  shinglesPrev = shingleReversed.clone()

                  if ( CAPSTYLE != "capeWide") {
                  translateOn(shingleReversed,"boxmin",shinglesPrev,"boxmax",1.14) // 1.05
                } else {
                  translateOn(shingleReversed,"boxmin",shinglesPrev,"boxmax",1.28)
                }
                  poisi1 = getPos(shinglesPrev,"boxmin")
                  shingleReversed = shinglesPrev
                  shingleClones.push(shinglesPrev)
                  scene.add(shinglesPrev) 

        
                }
              } else {
                do {
                  shinglesPrev = shingleReversed.clone()

                  translateOn(shingleReversed,"boxmin",shinglesPrev,"boxmax",1.14) // 1.05
                  poisi1 = getPos(shinglesPrev,"boxmin")
                  shingleReversed = shinglesPrev
                  shingleClones.push(shinglesPrev)
                  scene.add(shinglesPrev)
                } while ( poisi1 < poisi2 )
              }


                //let ps1 = parseFloat(getPos(rafterLeft,"boxmin"))
                //let ps2 = parseFloat(getPos(shingleReversed,"boxmin"))
                let piso = parseFloat(getPos(shingleReversed,"boxmax"))
                 scaleBetween2Objects(shingleReversed,rafterLeft,"boxmin",shingleReversed,"boxmax","x")

                 /*

                while (ps2<ps1) {
                 
                  shingleReversed.scale.x-= 0.025
                  shingleReversed.translateX(piso-parseFloat(getPos(shingleReversed,"boxmax")))
                  ps2 = parseFloat(getPos(shingleReversed,"boxmin"))

                }
                */

                shingleReversed.scale.x += 0.038
                shingleReversed.translateX(piso-parseFloat(getPos(shingleReversed,"boxmax")))
  
                }
                roofingText()
                loadingDripoRight()
                try {
                cupolaPlacement()

              } catch {
                //pasas
              }
              } 

             })      
          })         
         });         
}


function loadingDripMiniBarnRight() {

          try {
            scene.remove(dripoRight)
            scene.remve(dripoLeft)
          } catch {
            console.log("erno in dripoRight loading")
          }
        
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD + "dripRight"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                dripoRight = node

                
                if ( Dpath == "vinylbarn/") {
                  translateOn(peak,"boxmaxy",dripoRight,"boxmaxy",0.015)
                   translateOn(peak,"boxmax",shnigle,"boxmax",0.045)
                } else {
                  dripoRight.translateY(-0.01)
                }
                centerObjects(dripoRight)
                centerUnknownZ(dripoRight,shingles)            
                
                if ( Dpath == "minibarn/") { 
                translateOn(peak,"boxmax",dripoRight,"boxmax",0.043)
                translateOn(peak,"boxmax",shnigle,"boxmax",0.045)
              } else {
                centerUnknownX(dripoRight,peak)
                dripoRight.translateX(0.01)
              }
                
                p2.push(dripoRight) 
                scene.add(dripoRight)

                translateOn(dripoRight,"boxmaxz",dripFront,"boxmaxz")
                translateOn(dripoRight,"boxminz",dripBack,"boxminz")
                
                loadingDripMiniBarnLeft()
              } 
             })      
          })         
         });         
}


function loadingDripMiniBarnLeft() {

          try {
         
            scene.remve(dripoLeft)
          } catch {
            console.log("erno in dripoRight loading")
          }
        
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD + "dripLeft"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                dripoLeft = node

                dripoLeft.translateY(-0.01)
                centerUnknownZ(dripoLeft,shingles)            
                
                var piso1 = getPos(dripFront,"boxmin")
                var piso2 = getPos(dripoLeft,"boxmin")
                dripoLeft.translateX(piso1-piso2)
                
                   if ( Dpath == "vinylbarn/") {
                  translateOn(dripoLeft,"boxminy",dripFront,"boxminy")
                  translateOn(dripoRight,"boxmaxz",dripFront,"boxmaxz",0.016)
                  centerUnknownX(dripFront,front)

                  translateOn(dripoLeft,"boxminy",dripBack,"boxminy")
                  translateOn(dripoRight,"boxminz",dripBack,"boxminz",-0.016)
                  centerUnknownX(dripBack,front)
                  dripoLeft.translateX(-0.01)
                  translateOn(dripoLeft,"boxmin",shingles,"boxmin",-0.025)
                } else if ( Dpath == "minibarn/") {
                  translateOn(rafterLeft,"boxmin",dripoLeft,"boxmin",-0.065)

                  translateOn(lefty,"boxmin",shingles,"boxmin",-0.02)
                
                }
                p2.push(dripoLeft) 
                scene.add(dripoLeft)

              } 
             })      
          })         
         });         
}


function loadDesignerHighRight(pitch = pitchD, size = sizeD) {
     try {
    scene.remove(designerRight)
    scene.remove(designerLeft)
  } catch {
    console.log("pd in loadDesigner")
  }
          var path = Dpath + "/shingles/" + sizeD + "/"
          var element = "overDRight"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();

          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                designerRight = node 
                
                scene.add(designerRight)
                translateOn(rafterRight,"boxmax",designerRight,"boxmin")
                centerUnknownZ(designerRight,rafterRight)
                
                designerLeft = designerRight.clone()
                designerLeft.rotateY(Math.PI)
                let pos1 = getPos(rafterLeft,"boxmin")
                let pos2 = getPos(designerLeft,"boxmax")
                designerLeft.translateX(-(pos1-pos2))
                centerObjectsReversed(designerLeft,rafterLeft)
                scene.add(designerLeft)

                //pos1 = getPos(designerRight,"boxmax")
                //pos2 = getPos(shingles,"boxmax")

                 scaleBetween2Objects(shingles,designerLeft,"boxmin",designerRight,"boxmax","x")
                 /*
                while ( pos2 > pos1) {
                  shingles.scale.x -= 0.01
                  centerUnknownX(shingles,shell)
                  pos2 = getPos(shingles,"boxmax")
                }
                */
                shingles.scale.x += 0.032
                centerUnknownX(shingles,shell)

                loadingDripDesigner()
              } 
             })                        
          })         
         });    
}


function loadingDripDesigner(elt = "dripD") {

          try {
            scene.remove(dripoRight)
            scene.remove(dripoLeft)
          } catch {
            console.log("erno in dripoRight loading")
          }
          try {
            scene.remove(dripoLeft)
          } catch {
            console.log("in dripdesigner")
          }
        
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD + elt
        
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                dripoRight = node
                if ( elt == "dripD") {
                dripoRight.name = "designer"
              } else if ( elt == "dripG") {
                dripoRight.name = "gable"
              } 


                //dripoRight.translateY(-0.01)
                centerObjects(dripoRight)
                if ( elt == "dripD") {
                translateOn(designerRight,"boxmax",dripoRight,"boxmax")
                translateOn(designerRight,"boxmaxy",dripoRight,"boxmaxy")
              } else if ( elt == "dripG") {
                translateOn(gableHighRight,"boxmax",dripoRight,"boxmax")
                translateOn(gableHighRight,"boxmaxy",dripoRight,"boxmaxy",0.005)
              }
                
     
                scene.add(dripoRight)

                dripoLeft = dripoRight.clone()

               
                centerObjects(dripoLeft)
               
             
                if ( elt == "dripD") {
                translateOn(designerLeft,"boxmin",dripoLeft,"boxmin")
                } else if ( elt == "dripG") {
                  translateOn(gableHighLeft,"boxmin",dripoLeft,"boxmin")
                  scene.add(dripoLeft)
                }
                if ( elt == "dripD") {
                //let pos1 = getPos(dripFront,"boxmax")
                //let pos2 = getPos(dripoRight,"boxmax")

                 scaleBetween2Objects(dripFront,dripoLeft,"boxmin",dripoRight,"boxmax","x")
                 scaleBetween2Objects(dripBack,dripoLeft,"boxmin",dripoRight,"boxmax","x")
                 /*
                while ( pos1 < pos2) {
                  dripFront.scale.x+= 0.02
                  dripBack.scale.x+= 0.02
                 


                  centerUnknownX(dripFront,front)
                  centerUnknownX(dripBack,front)
           

                  pos1 = getPos(dripFront,"boxmax")
                }
                */
                  //dripFront.scale.x-= 0.02
                  //dripBack.scale.x-= 0.02

                  
               
                scene.add(dripoLeft)
                loadOverClosingHighBarn()
              }
              }
             })      
          })         
         });         
}

function loadOverClosingHighBarn() {
   try {
    scene.remove(overHigh)
    scene.remove(overHigh2)
  } catch {
    console.log("pd in loadPd")
  }
          var path = Dpath + "/"
          var element = "overclosing"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();

          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                overHigh = node 
               
                scene.add(overHigh)
                centerUnknownX(overHigh,front)
                translateOn(designerLeft,"boxmaxz",overHigh,"boxmaxz")

                overHigh2 = overHigh.clone()
                centerUnknownX(overHigh2,backty)
                translateOn(designerLeft,"boxminz",overHigh,"boxminz")
                scene.add(overHigh2)

                if ( XX == 0.8) {
                   overHigh2.scale.x = 0.828
                   overHigh.scale.x = 0.828
                     centerUnknownX(overHigh2,backty)
                     centerUnknownX(overHigh,front)
                     dripBack.scale.x = 0.9
                     dripFront.scale.x = 0.9
                     centerUnknownX(dripFront,front)
                     centerUnknownX(dripBack,backty)
                 } else {
                //let pos1 = getPos(overHigh,"boxmax")
                //let pos2 = getPos(designerRight,"boxmax")
                scaleBetween2Objects(overHigh,designerLeft,"boxmin",designerRight,"boxmax","x")
                 scaleBetween2Objects(overHigh2,designerLeft,"boxmin",designerRight,"boxmax","x")
                 /*
                while ( pos1 < pos2) {
                  overHigh.scale.x += 0.02
                  overHigh2.scale.x += 0.02
                  centerUnknownX(overHigh,front)
                  centerUnknownX(overHigh2,backty)
                  pos1 = getPos(overHigh,"boxmax")
                }
                overHigh.scale.x -= 0.01
                overHigh2.scale.x -= 0.01
                */
              }
                loadingWideMiratec()

              }
             })          
              
          })         
         });    
}

function  loadGableHigh(pitch = pitchD, size = sizeD) {
      try {
          scene.remove(gableHighRight)
          scene.remove(gableHighLeft)
        } catch {
          console.log("pd in loadPd")
        }
          var path = Dpath + "/shingles/" + sizeD + "/"
          var element = "7overRight"
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();

          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                gableHighRight = node 
                scene.add(gableHighRight)
                translateOn(rafterRight,"boxmax",gableHighRight,"boxmin")

                gableHighLeft = gableHighRight.clone()
                gableHighLeft.rotateY(Math.PI)
               
                let pos1= getPos(rafterLeft,"boxmin")
                let pos2 = getPos(gableHighLeft,"boxmax")
                gableHighLeft.translateX(-(pos1-pos2))
                centerUnknownZ(gableHighRight,rafterLeft)
                centerObjectsReversed(gableHighLeft,rafterLeft)
                scene.add(gableHighLeft)

                //pos1 = getPos(shingles,"boxmax")
                //pos2 = getPos(gableHighRight,"boxmax")
                 scaleBetween2Objects(shingles,gableHighLeft,"boxmin",gableHighRight,"boxmax","x")
                 /*
                while ( pos1 < pos2) {
                  shingles.scale.x += 0.02
                  centerUnknownX(shingles,shell)
                  pos1 = getPos(shingles,"boxmax")
                }
                */
                 shingles.scale.x += 0.032
                centerUnknownX(shingles,shell)

                translateOn(gableHighRight,"boxmax",dripoRight,"boxmax")
                translateOn(gableHighLeft,"boxmin",dripoLeft,"boxmin")
                translateOn(gableHighRight,"boxmaxy",dripoRight,"boxmaxy")
                translateOn(gableHighLeft,"boxmaxy",dripoLeft,"boxmaxy")

               
                  setTransp(faceGableBoard,1)
                  setTransp(faceGableBoard2,1)
                  faceGableBoard.scale.x = XX
                  faceGableBoard2.scale.x = XX
                 
                  translateOn(frontRaft,"boxmaxz",faceGableBoard,"boxmaxz")
                  centerUnknownX(faceGableBoard,frontRaft)

                  translateOn(backRaft,"boxminz",faceGableBoard2,"boxminz")
                  centerUnknownX(faceGableBoard2,backRaft)

                  //let pik1 = getPos(gableHighRight,"boxmax")
                  //let pik2 = getPos(faceGableBoard,"boxmax")
                   scaleBetween2Objects(faceGableBoard,gableHighLeft,"boxmin",gableHighRight,"boxmax","x")
                   scaleBetween2Objects(faceGableBoard2,gableHighLeft,"boxmin",gableHighRight,"boxmax","x")
                   /*
                  while ( pik2 < pik1) {
                    faceGableBoard.scale.x += 0.01
                    faceGableBoard2.scale.x += 0.01
                    centerUnknownX(faceGableBoard,frontRaft)
                    centerUnknownX(faceGableBoard2,backRaft)
                    pik2 = getPos(faceGableBoard,"boxmax")
                  }
                  faceGableBoard.scale.x -= 0.01
                  faceGableBoard2.scale.x -= 0.01
                  centerUnknownX(faceGableBoard,frontRaft)
                  centerUnknownX(faceGableBoard2,backRaft)
              */
                loadingDripDesigner("dripG")

              }
             })          
              
          })         
         });    

}

function loadPd(pitch = pitchD, size = sizeD) {
          try {
            scene.remove(pdd)
          } catch {
            console.log("pd in loadPd")
          }

          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = "d" + pitchD
          var mtlLoader = new THREE.MTLLoader(manCloseLeft);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();

          var objLoader = new THREE.OBJLoader(manCloseLeft);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                pdd = node 
                pdListe.push(pdd)
                scene.add(pdd)
                removeDormerPlat()
              }
             })          
          })         
         });    
}


function loadingPlatForDormerCuzNoReference(pitch = pitchD,size = sizeD) {

         
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();

          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plat2 = node
                plat2.name = "plat"
                
                centerUnknownZ(plat2,lefty)
                var posii1 = getPos(plat2,"boxmin")
                var posii2 = getPos(defaultPlat,"boxmin") 
                plat2.translateX(posii2-posii1)
                p2.push(plat2)
                scene.add(plat2)

                 var dormerMin = getPos(dormer,"boxmin")
    var dormerMax = getPos(dormer,"boxmax")
                 for ( i = 0,j=0;i<p2.length;i++,j++ ) {

  if ( parseFloat(ps1) >parseFloat(dormerMin)  && parseFloat(ps2) < parseFloat(dormerMax)) {
    //pass
  } else {
                var reference = plat2
                var posX0 = getPos(p2[i],"boxmin")
                var newplat = reference.clone()
                scene.add(newplat)
               
                var posX1 = getPos(newplat,"boxmin")
                newplat.translateX(posX0-posX1)
                centerUnknownZ(newplat,righty)
                scene.remove(p2[i])
                newplat.name = "plat"
                p2[i] = newplat 
                   
              }
            }
              for ( c of pdListe) {
                try {
                scene.remove(c)
                }catch {
                  console.log("erno")
                }
              }
          }
             })
             
                
          })         
         });         
       }

function loadingPlatCabana() {

          //REMOVING SHIT !!! 
          try {
            setTransp(cupola,0)
            setTransp(cupolaRef,0)
          } catch {
            //pass
          }
          try {
            scene.remove(platDiviser)
          } catch {
            //pass
          }
          try {
            scene.remove(shingleLeft)
            scene.remove(shingleRight)
            scene.remove(shingleFront)
            scene.remove(shingleBack)
          } catch {
            //pass
          }
          try {
            scene.remove(shingleFront2)
          } catch {
            //pass
          }
          try {
            scene.remove(shingleBack2)
          } catch {
            //pass
          }
          try {
            scene.remove(platLeft)
            scene.remove(platRight)
          } catch {
            //pass
          }
          try {
            scene.remove(shingleFront3)
            scene.remove(shingleBack3)
          } catch {
            //pass
          }
          try {
            scene.remove(shingleFront4)
            scene.remove(shingleBack4)
          } catch {
            //pass
          }
          try {
            scene.remove(shingleFront5)
            scene.remove(shingleBack5)
          } catch {
            //pass
          }
          try {
              cabanaCloseFront.scale.x = XX
              cabanaCloseFront.scale.z = ZZ
              translateOn(front,"boxmaxz",cabanaCloseFront,"boxminz")
              centerUnknownX(cabanaCloseFront,front)

              cabanaCloseBack.scale.x = XX
              cabanaCloseBack.scale.z = ZZ
              translateOn(backty,"boxminz",cabanaCloseBack,"boxmaxz")
              centerUnknownX(cabanaCloseBack,backty)

              cabanaCloseRight.scale.z = ZZ
              cabanaCloseRight.scale.x = XX
              translateOn(righty,"boxmax",cabanaCloseRight,"boxmin")
              centerUnknownZ(cabanaCloseRight,righty)

              cabanaCloseLeft.scale.z = ZZ
              cabanaCloseLeft.scale.x = XX
              translateOn(lefty,"boxmin",cabanaCloseLeft,"boxmax")
              centerUnknownZ(cabanaCloseLeft,lefty)
          } catch {
            //pass
          }
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          
          if ( sizeD == "10wide" || sizeD == "8wide" || sizeD == "12wide") {
            pitchD = "7"
          } else if ( sizeD == "14wide") {
            pitchD = "6"
          }
          var element = pitchD + "Left"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                platLeft = node
                platLeft.name = "platLeft"

                p2.push(platLeft)
                scene.add(platLeft)
                translateOn(rafterLeft,"boxmin",platLeft,"boxmin",0.035)
                centerUnknownZ(platLeft,lefty)
                loadPlatCabanaRight()
                
            
              }
             })
          })         
         });         
        }

function loadingCloseCabana() {
          try {
            scene.remove(cabanaC)
          } catch {
            //pass
          }
          var path2 = path2
          var path = Dpath + "/pitch/" 
          
          if ( sizeD == "10wide" || sizeD == "8wide" || sizeD == "12wide") {
            pitchD = "7"
          } else if ( sizeD == "14wide") {
            pitchD = "6"
          }
          var element = sizeD.replace("wide","") + "close"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cabanaC = node
                cabanaC.scale.x = XX
                shingles = cabanaC
                centerUnknownZ(cabanaC,righty)
                centerUnknownX(cabanaC,front)
                let ps1 = getPos(platRight,"boxmin")
                let ps2 = getPos(cabanaC,"boxmax")

                if ( ps2 < ps1 ) {
                while ( ps2 < ps1) {
                  cabanaC.scale.x += 0.02
                  centerUnknownX(cabanaC,front)
                  ps2 = getPos(cabanaC,"boxmax")

                }
              } 
                scene.add(cabanaC)
                cabanaC.translateY(-0.01)
                loadPlatCabanaFront()
                try {
                cupolaPlacement() 
              } catch {
                //pass
              }
               
               
              }
             })
          })         
         }); 
}
function loadPlatCabanaRight() {
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          
          if ( sizeD == "10wide" || sizeD == "8wide" || sizeD == "12wide") {
            pitchD = "7"
          } else if ( sizeD == "14wide") {
            pitchD = "6"
          }
          var element = pitchD + "Right"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                platRight = node
                platRight.name = "platRight"

                p2.push(platRight)
                scene.add(platRight)
                translateOn(rafterRight,"boxmax",platRight,"boxmax",-0.035)
                centerUnknownZ(platRight,righty)

                loadingCloseCabana()
                
              }
             })
          })         
         });         
      }


function loadPlatCabanaFront() {

          var path2 = path2
          var path = Dpath + "/shingles/" + sizeD + "/"
          
          if ( sizeD == "10wide" || sizeD == "8wide" || sizeD == "12wide") {
            pitchD = "7"
          } else if ( sizeD == "14wide") {
            pitchD = "6"
          }
          var element = "shingles"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                shingleFront = node
                shingleFront.name = "platFront"

                p2.push(shingleFront)
                scene.add(shingleFront)
                shingleFront.translateY(0.01) 

                //translateOn(cabanaC,"boxminz",shingleFront,"boxminz")
                centerUnknownZ(shingleFront,righty)
                centerUnknownX(shingleFront,front)
                loadCabanaDiviser()
                //shingleFront.scale.x = XX

               // loadPlatCabanaBack()
              }
             })
          })         
         });  
}



function loadCabanaDiviser() {
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          
          if ( sizeD == "10wide" || sizeD == "8wide" || sizeD == "12wide") {
            pitchD = "7"
          } else if ( sizeD == "14wide") {
            pitchD = "6"
          }
          var element =  "diviser"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                platDiviser = node
                platDiviser.name = "platDiviser"

                p2.push(platDiviser)
                scene.add(platDiviser)
                
                centerUnknownX(platDiviser,front)
                centerUnknownZ(platDiviser,lefty)

                let ps1 = getPos(platRight,"boxmin")
                let ps2 = getPos(platDiviser,"boxmax")

                if ( ps2 < ps1 ) {
                while ( ps2 < ps1) {
                  platDiviser.scale.x += 0.02
                  centerUnknownX(platDiviser,front)
                  ps2 = getPos(platDiviser,"boxmax")

                }
              }
                loadPCabana()
              }
             })
          })         
         });
}



function loadPCabana() {
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          
          if ( sizeD == "10wide" || sizeD == "8wide" || sizeD == "12wide") {
            pitchD = "7"
          } else if ( sizeD == "14wide") {
            pitchD = "6"
          }
          var element = "plat"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plat = node
                plat.name = "plat"
                plat2 = plat
                platt = plat
                platt2 = plat
                p2.push(plat)
                scene.add(plat)
                
                centerUnknownX(plat,platDiviser)
                centerUnknownZ(plat,platDiviser)
                loadCabanaShingleLeft()
                

              //Add plats Right :

              let pos1,pos2 
              pos1 = getPos(platRight,"boxmin")
              pos2 = getPos(platt,"boxmax")
              if ( XX > 1) {
              while ( pos2 < (pos1 -  0.4077190160751343 )) {
              
                platt = platt.clone()
                platt.translateX(0.4077190160751343)

                platt2 = platt2.clone()
                platt2.translateX(-0.4077190160751343)

                pos2 = getPos(platt,"boxmax")

                p2.push(platt)
                p2.push(platt2)

                scene.add(platt2)
                scene.add(platt)
                
              }
              if ( pos2 >= pos1) {
                scene.remove(platt)
                scene.remove(platt2)
              }

             
          
             
}
try {
if(typeof(bulb) == "object") {
loadingLightBulb()
}
} catch {
  //pass
}
             
              }
             })
          })         
         });
}

function loadCabanaShingleLeft() {
          var path2 = path2
          var path = Dpath + "/shingles/" + sizeD + "/"
          
          if ( sizeD == "10wide" || sizeD == "8wide" || sizeD == "12wide") {
            pitchD = "7"
          } else if ( sizeD == "14wide") {
            pitchD = "6"
          }
          var element =  pitchD + "Left"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                shingleLeft = node
                translateOn(cabanaCloseLeft,"boxmin",shingleLeft,"boxmin",-0.051)
                centerUnknownZ(shingleLeft,lefty)
                shingleLeft.translateY(0.01)
                p2.push(shingleLeft)
                scene.add(shingleLeft)

                loadCabanaShingleRight()
              }
             })
          })         
         });
}

function loadCabanaShingleRight() {
                  var path2 = path2
          var path = Dpath + "/shingles/" + sizeD + "/"
          
          if ( sizeD == "10wide" || sizeD == "8wide" || sizeD == "12wide") {
            pitchD = "7"
          } else if ( sizeD == "14wide") {
            pitchD = "6"
          }
          var element =  pitchD + "Right"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                shingleRight = node
                shingleRight.translateY(0.01)
                if ( sizeD.replace("wide","") == "12" ) {
                  shingleRight.scale.z += 0.02
                  shingleFront.scale.z += 0.02
                  shingleLeft.scale.z += 0.02
                  centerUnknownZ(shingleFront,righty)
                  centerUnknownZ(shingleLeft,righty)
                } else if (sizeD.replace("wide","") == "14") {
                  shingleRight.scale.z += 0.04
                  shingleFront.scale.z += 0.04
                  shingleLeft.scale.z += 0.04
                  centerUnknownZ(shingleFront,righty)
                  centerUnknownZ(shingleLeft,righty)
                }
                translateOn(cabanaCloseRight,"boxmax",shingleRight,"boxmax",0.039)
                centerUnknownZ(shingleRight,righty)
                p2.push(shingleRight)
                scene.add(shingleRight)
                 try {
                  
                   if ( typeof(loft) == "object") {
                   
                    scene.remove(loft)
                    scene.remove(closeLoft)
                    loadingLoft()
                  }
                   if ( typeof(loft2) == "object") {
                   
                    scene.remove(loft2)
                    scene.remove(closeLoft2)
                    loadingLoft2()
                  }

                 } catch {
                  console.log("erno")
                 } 
                if ( XX >= 1  ) {
                  shingleFront2 = shingleFront.clone()
                  translateOn(shingleLeft,"boxmin",shingleFront2,"boxmin")
                  translateOn(shingleRight,"boxmax",shingleFront,"boxmax")
                  //shingleFront2.translateY(0.01)
                  scene.add(shingleFront2)


                  
                }
                if ( XX >= 1.4) {
                  shingleFront3 = shingleFront.clone()
                  centerUnknownX(shingleFront3,front)
                  scene.add(shingleFront3)
                  if ( XX == 1.6 && ZZ == 1) {
                    shingleFront3.scale.x += 0.28
                    centerUnknownX(shingleFront3,front)
                  } else if ( XX == 1.8 && ZZ == 1.25) {
                    shingleFront3.scale.x += 0.38
                    centerUnknownX(shingleFront3,front)
                  }

                  
                }
                if ( XX >= 2) {
                  shingleFront4 = shingleFront3.clone()
                  shingleFront3.translateX(-0.5)
                  shingleFront4.scale.x += 0.1
                  shingleFront4.translateX(0.37)
                  //shingleFront4.translateX(-0.1)
                  if ( XX == 2 && ZZ == 1.5) {
                    shingleFront4.translateX(-0.04)
                  } else if ( XX == 2.2 && ZZ == 1.5){
                    shingleFront4.translateX(0.045)
                    shingleFront3.scale.x += 0.15
                    shingleFront3.translateX(-0.13)

                  } else if ( XX == 2 && ZZ == 1.75) {
                    shingleFront3.translateX(0.1)
                  }
                  scene.add(shingleFront4)
 
                }
                if ( XX >= 2.4) {
                  
                  shingleFront4.translateX(0.5)
                  shingleFront3.translateX(-0.4)
                  shingleFront3.translateX(0.03)
                  shingleFront5 = shingleFront4.clone()
                  shingleFront5.translateX(-0.9)
                  if ( XX == 2.4 && ZZ == 1.75) {
                    shingleFront3.translateX(0.08)
                  }
                  scene.add(shingleFront5)
                 

                } 
                  if ( typeof(loft) == "object") {
                   
                    scene.remove(loft)
                    scene.remove(closeLoft)
                    loadingLoft()
                  }
                  if ( typeof(loft2) == "object") {
                   
                    scene.remove(loft2)
                    scene.remove(closeLoft2)
                    loadingLoft2()
                  }
                 roofingText()
              }
             })
          })         
         });
}


function loadingPlatLeanto(pitch = pitchD, size = sizeD) {
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plat2 = node
                plat2.name = "plat"
                platRef = plat2
                //centerUnknownZ(plat2,lefty)

                translateOn(floorBack,"boxminz",plat2,"boxminz")

                var posii1 = getPos(plat2,"boxmin")
                var posii2 = getPos(defaultPlat,"boxmin") 
                plat2.translateX(posii2-posii1)
               
                p2.push(plat2)
                scene.add(plat2)
                
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
                    try {
                   for ( varr of workPushed ) {
                   translateWorkbench(varr) 
                  }
                } catch {
                  console.log("erno in workpushed translate ")
                }
              

                  try {
                    translateOn(lefty,"boxmaxy",vents,"boxmaxy",-0.24)
                    translateOn(righty,"boxmaxy",ventsRight,"boxmaxy",-0.24)
                    translateOn(lefty,"boxminz",vents,"boxminz",0.093)

                     let poisis1 = getPos(righty,"boxminz")
                     let poisis2 = getPos(ventsRight,"boxminz")
                     ventsRight.translateZ(-(poisis1-poisis2))
                     ventsRight.translateZ(-0.093)  
                  }catch {
                    console.log("no vents selected")
                  }
              
                  try {
                   loadingShingModel()
                  
               
                  try {
                   if ( typeof(loft) == "object") {
                   
                    scene.remove(loft)
                    scene.remove(closeLoft)
                    loadingLoft()
                  }
                   if ( typeof(loft2) == "object") {
                   
                    scene.remove(loft2)
                    scene.remove(closeLoft2)
                    loadingLoft2()
                  }
                  centerUnknownX(cupola,shingles)
                  centerUnknownZ(cupola,shingles)
                  var w = getPos(shingles, "boxmaxy")
                  var z = getPos(cupola,"boxminy")
                  cupola.translateY(w-z)
                  cupola.translateY(-0.2)

                 } catch {
                  console.log("erno")
                 }
                
                } catch {
                  console.log("pass")
                  //adaptShingles(drip)
                }

                  
                
                updateFramePlat()
              }
             })
             
                
          })         
         });         
       
}

function loadingPlatHighBarn(pitch = pitchD, size = sizeD) {


          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plat2 = node
                plat2.name = "plat"
                
                centerUnknownZ(plat2,lefty)
                var posii1 = getPos(plat2,"boxmin")
                var posii2 = getPos(defaultPlat,"boxmin") 
                plat2.translateX(posii2-posii1)
               
                p2.push(plat2)
                scene.add(plat2)
                
               
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
      try {
       for ( varr of workPushed ) {
       translateWorkbench(varr) 
      }
    } catch {
      console.log("erno in workpushed translate ")
    }
  
                   try {
                //centerUnknownY(ventsRight,plat2)
                //centerUnknownY(vents,plat2)
                //vents.translateY(-0.07)
                //ventsRight.translateY(-0.07)
                translateOn(lefty,"boxmaxy",vents,"boxmaxy",-0.25)
                translateOn(righty,"boxmaxy",ventsRight,"boxmaxy",-0.25)
                centerObjectsReversed(ventsRight)
                centerUnknownZ(vents,lefty)
              }catch {
                console.log("no vents selected")
              }
              /*
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
            */
                  try {
                   
                    loadingDripoRight()
                  
               
                  //scaleTheWall() CHANGE THIS !!
                 /*
                   if ( typeof(overhangsRight) == "object" && overhangStyle != false) {
                    loadingOverhango(overhangStyle)          
                  }
               */
                  try {
                   if ( typeof(loft) == "object") {
                   
                    scene.remove(loft)
                    scene.remove(closeLoft)
                    loadingLoft()
                  }
                   if ( typeof(loft2) == "object") {
                   
                    scene.remove(loft2)
                    scene.remove(closeLoft2)
                    loadingLoft2()
                  }
                  centerUnknownX(cupola,shingles)
                  centerUnknownZ(cupola,shingles)
                  var w = getPos(shingles, "boxmaxy")
                  var z = getPos(cupola,"boxminy")
                  cupola.translateY(w-z)
                  cupola.translateY(-0.2)

                 } catch {
                  console.log("erno")
                 }
                 
                 if (highwal == true) {
                setTimeout(higheringWall,1)
              }
                } catch {
                  console.log("pass")
                  //adaptShingles(drip)
                }


                updateFramePlat()
              }
             })
             
                
          })         
         });         
}

function addingDripsHighBarn(which) {
  scene.add(which)
  if ( which == dripoRight) {
    translateOn(overRight,"boxmax",dripoRight,"boxmax")
  } else if ( which == dripoLeft) {
      translateOn(overLeft,"boxmin",dripoLeft,"boxmin")
  }
}
/*
function loadLeantoSidePlats(pitch = pitchD,size = sizeD) {
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD + "right"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                platRight = node
                platRight.name = "platRight"
                
                centerUnknownZ(platRight,righty)
                var posii1 = getPos(platRight,"boxmin")
                var posii2 = getPos(rafterRight,"boxmin") 
                platRight.translateX(posii2-posii1)
               
                p2.push(platRight)
                scene.add(platRight)
                loadLeantoSidePlatsLeft()
              }
             })
             
          })         
         });         
       
}


function loadLeantoSidePlatsLeft() {
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD + "right"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                platLeft = node
                platLeft.name = "platLeft"
                
                centerUnknownZ(platLeft,righty)
                var posii1 = getPos(platLeft,"boxmin")
                var posii2 = getPos(rafterLeft,"boxmin") 
                platLeft.translateX(posii2-posii1)
               
                p2.push(platLeft)
                scene.add(platLeft)
  
              }
             })
             
          })         
         });         
}
*/

function loadingPlatCapeCode(pitch = pitchD,size = sizeD) {

          
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = "5"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plat2 = node
                plat2.name = "plat"
                platMain = plat2
                centerUnknownZ(plat2,lefty)
                translateOn(rafterLeft,"boxmaxy",plat2,"boxmaxy")
               
                p2.push(plat2)
                scene.add(plat2)
                
                translateOn(cape,"boxmax",plat2,"boxmax")

                let poisi1 = getPos(plat2,"boxmax")
                let poisi2 = getPos(rafterRight,"boxmin")
                if ( poisi1 < poisi2) {
                  plat22 = plat2.clone()
                  translateOn(cape,"boxmin",plat22,"boxmin")
                  scene.add(plat22)
                  p2.push(plat22)
                }
                while ( poisi1 < poisi2) {
                  plat2 = plat2.clone()
                  plat2.translateX(0.4063990116119385)
                  poisi1 = getPos(plat2,"boxmax")
                  scene.add(plat2)
                  p2.push(plat2)

                  plat22 = plat22.clone()
                  plat22.translateX(-0.4063990116119385)
                  scene.add(plat22)
                  p2.push(plat22)

                  

                }
                  //scene.remove(platMain)
                if ( poisi1>poisi2) {
                  //p2.splice(p2.indexOf(plat2),1)
                  scene.remove(plat2)
                 // p2.splice(p2.indexOf(plat2))
                  try {
                  scene.remove(plat22)
                  //p2.splice(p2.indexOf(plat22))
                } catch {
                  //pass
                }
                }

      try {
       for ( varr of workPushed ) {
       translateWorkbench(varr) 
      }
    } catch {
      console.log("erno in workpushed translate ")
    }
  
    try {
      if (typeof(bulb) == "object") {
        loadingLightBulb()
      }
    } catch {
      //pass
    }
                   try {
           
                //centerUnknownY(ventsRight,plat2)
                //centerUnknownY(vents,plat2)
                //vents.translateY(-0.02)
                //ventsRight.translateY(-0.02)
                 translateOn(lefty,"boxmaxy",vents,"boxmaxy",-0.25)
                translateOn(righty,"boxmaxy",ventsRight,"boxmaxy",-0.25)
                centerObjectsReversed(ventsRight)
                centerObjects(vents)
              }catch {
                console.log("no vents selected")
              }
              
                  try {
                    loadingShingModel()
                   
                  
             
                 
                  try {
                   if ( typeof(loft) == "object") {
                   
                    scene.remove(loft)
                    scene.remove(closeLoft)
                    loadingLoft()
                  }
                   if ( typeof(loft2) == "object") {
                   
                    scene.remove(loft2)
                    scene.remove(closeLoft2)
                    loadingLoft2()
                  }
                 
                 } catch {
                  console.log("erno")
                 }
                 
                } catch {
                  console.log("pass")
                  //adaptShingles(drip)
                }


              }
             })
   
          })         
         });         
       }

function loadingPlat2(pitch = pitchD,size = sizeD) {

         
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plat2 = node
                plat2.name = "plat"
                
                centerUnknownZ(plat2,lefty)
                var posii1 = getPos(plat2,"boxmin")
                var posii2 = getPos(defaultPlat,"boxmin") 
                plat2.translateX(posii2-posii1)
               
                p2.push(plat2)
                scene.add(plat2)
                
               
                if (p2.length == 1) {
                      /*
                   try {
           
                      //centerUnknownY(ventsRight,plat2)
                      //centerUnknownY(vents,plat2)
                      //vents.translateY(-0.02)
                      //ventsRight.translateY(-0.02)
                       translateOn(lefty,"boxmaxy",vents,"boxmaxy",-0.25)
                        translateOn(righty,"boxmaxy",ventsRight,"boxmaxy",-0.25)
                    }catch {
                      console.log("no vents selected")
                    }
      */
                  try {
                    loadingShingModel()
                    scaleTheWall()
                    scalingClosets()
                  try {
                    setTransp(cupola,0)
                    setTransp(cupolaRef,0)
                  } catch {
                    //pass
                  }
               
                  try {
                   if ( typeof(loft) == "object") {
                   
                    scene.remove(loft)
                    scene.remove(closeLoft)
                    loadingLoft()
                  }
                   if ( typeof(loft2) == "object") {
                   
                    scene.remove(loft2)
                    scene.remove(closeLoft2)
                    loadingLoft2()
                  }

                  centerUnknownX(cupola,shingles)
                  centerUnknownZ(cupola,shingles)
                  var w = getPos(shingles, "boxmaxy")
                  var z = getPos(cupola,"boxminy")
                  cupola.translateY(w-z)
                  cupola.translateY(-0.2)

                 } catch {
                  console.log("erno")
                 }
                 if (highwal == true) {
                setTimeout(higheringWall,1)
              }
                } catch {
                  console.log("pass")
                  //adaptShingles(drip)
                }

        if ( (XX == 1.2 || XX == 1) && (dormerSize == "10" || dormerSize == "12") ) {
          ldormerr('6')
        } else if (dormerSize != ""){
          loadDormer()
        }
          }

                getpoPlat()

              }
             })
             
                
          })         
         });         
       }

function higheringWall(vall) {
  if ( document.getElementById("loadStatus").innerHTML.includes("Completed")) {
    highValue += 1
    if ( vall == 4) {
      
      
      higherWall("high")
      highValue = 1

  } else {
    setTimeout(higheringWall,12,highValue)
  }
  } else {
    highValue = 1
    setTimeout(higheringWall,12,highValue)
  }
}
function closeNext() {
          var path2 = path2
          var path = Dpath + "/pitch/" + sizeD + "/"
          var element = pitchD + "closeFree"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                pcRight1 = node

                
                centerObjects(pcRight1)

                p2.push(pcRight1)
                scene.add(pcRight1)
                
                pcRight2 = pcRight1.clone()
                scene.add(pcRight2)
                p2.push(pcRight2)
                
                pcLeft1 = pcRight1.clone()
                scene.add(pcLeft1)
                p2.push(pcLeft1)

                pcLeft2 = pcRight1.clone()
                scene.add(pcLeft2)
                p2.push(pcLeft2)

              posiRight1 = getPos(pcRight1,"boxmin")
              posi = getPos(defaultRight1,"boxmin")
              pcRight1.translateX(posi-posiRight1)

              posiRight2 = getPos(pcRight2,"boxmin")
              posi = getPos(defaultRight2,"boxmin")
              pcRight2.translateX(posi-posiRight2)

              posiLeft1 = getPos(pcLeft1,"boxmin")
              posi = getPos(defaultLeft1,"boxmin")
              pcLeft1.translateX(posi-posiLeft1)

              posiLeft2 = getPos(pcLeft2,"boxmin")
              posi = getPos(defaultLeft2,"boxmin")
              pcLeft2.translateX(posi-posiLeft2)
           
                
              closeNext2() 


              }
             }) 
 
          })         
         });         
       }

function closeNext2() {
          var path2 = path2
          var path = Dpath + "/pitch/" 
          var element = "closeX" + pitchD
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                closeXRight = node

                
                centerObjects(closeXRight)

                p2.push(closeXRight)
                scene.add(closeXRight)
                var p1position = getPos(pcRight1,"boxmin")
                var p3position = getPos(closeXRight,"boxmax")
                closeXRight.translateX(p1position-p3position)

                var p1position = getPos(pcRight1,"boxmaxy")
                var p3position = getPos(closeXRight,"boxmaxy")
                closeXRight.translateY(p1position-p3position*1.015)
                
                
                
                closeXLeft = closeXRight.clone()
                centerObjects(closeXLeft)
                scene.add(closeXLeft)
                p2.push(closeXLeft)

                var p1position = getPos(pcLeft1,"boxmax")
                var p3position = getPos(closeXLeft,"boxmin")
                closeXLeft.translateX(p1position-p3position)

                try {
                if ( Dpath == "Shed2/") {
                for ( sth of p2) {
                  if ( sth.name == "plat") {
                 
                    if ( parseFloat(getPos(sth,"boxmax")) > parseFloat(getPos(pcRight1,"boxmin"))) {
                      scene.remove(sth)
                      
                    }
                  }
                }
              }
            } catch {
              //pass
            }
              }
             }) 
            
                  
          })         
         });         
       }



function adaptShingles(p){
  var p = p
  posmaxDO = getPos(plat2, "boxmaxy")
  someposo = getPos(p,"boxmaxy")
  posYDO = getPos(p,"boxminy")
  if ( posmaxDO > someposo) {

  sizeShingle(p)
} else {
  reverseSizeShingle(p)
}
}
  function sizeShingle(p) { 
    p = p
  poshin = getPos(p,"boxmaxy")

  if ( poshin < posmaxDO) {
  p.scale.y += 0.02
  sizeShingle(p)
  } else {
  poss = getPos(p,"boxminy")
  p.translateY(posYDO-poss)
  poshin = getPos(p,"boxmaxy")
  if ( poshin < posmaxDO) {
  sizeShingle(p)
} 
}
}

function reverseSizeShingle(p) {
  poshin = getPos(p,"boxmaxy")

  console.log("poshin = " + poshin)
  if ( poshin > posmaxDO) {
  p.scale.y -= 0.01
  reverseSizeShingle(p)
  } else {
  poss = getPos(p,"boxminy")
  p.translateY(posYDO-poss)
  poshin = getPos(p,"boxmaxy")
  if ( poshin > posmaxDO) {
  reverseSizeShingle(p)
  } else {
    sizeShingle(p)
  }
  }
}

function getpoPlat() {
  
  c2 = parseFloat(getPos(plat2,"boxmin"))
  
      if ( (shellmaxpos - (zzz2*1.3)) > c2 ) {

        
     p2[p2.length-1].translateX(zZ2)
    
      zZ2 += zzz2
      updateFramePlat()
    }else {


      if ( Dpath != "leanto/" && Dpath != "carriage/"  && Dpath != "highbarn/" && Dpath != "carriage/" && Dpath != "minibarn/" && Dpath != "vinylbarn/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/") {
      closeNext()
    }
   
     if ( typeof(bulb) == "object") {
     try {
      scene.remove(bulb)
      loadingLightBulb()
    }
    catch {
      console.log("erno")
    }
  }
     
    }

}

function updateFramePlat() {
  c2 = parseFloat(getPos(plat2,"boxmin"))
  
      if ( (shellmaxpos - (zzz2*1.3)) > c2 ) {
      //setTimeout(loadingPlat2,1)
      plat2 = p2[0].clone()
      plat2.name = "plat"
      scene.add(plat2)
      p2.push(plat2)
      //p22.push(plat2)
      
      getpoPlat()
  
    }else {
    if ( typeof(bulb) == "object") {
     try {
      scene.remove(bulb)
      loadingLightBulb()
    }
    catch {
      console.log("erno")
    }
  }
    if ( Dpath != "leanto/" && Dpath != "carriage/" && Dpath != "highbarn/" && Dpath != "carriage/" && Dpath != "minibarn/" && Dpath != "vinylbarn/" && Dpath != "highCarriage/" && Dpath != "designerCarriage/") {
      closeNext()
    }
    
    }
}

    




function removeInsideCapeCode(){

        divmin = parseFloat(getPos(diviser,"boxmin"))
        divmax = parseFloat(getPos(diviser,"boxmax"))
      
        for ( j = 0;j<p2.length;j++) {
      r2pos = parseFloat(getPos(p2[j],"boxmin"))
  
       if ( r2pos <= divmax ) {
      if ( r2pos >= divmin ) {
        //alert("yep")
        //alert(typeof(r2pos) )

       //alert("Door min : " + doormin + "  Door max : " + doormax + "framepos : " + r2pos)
      
        
       for ( i = 0;i<p2[j].material.length;i++) {
        p2[j].material[i].transparent= true;
        p2[j].material[i].opacity = 0
       }
      
     
    
      }
    }
  }
}

function updateFrame() {

  c = parseFloat(getPos(framing2,"boxmin"))
  
      if ( (shellmaxpos - zzz) > c *1.05) {
      framing2 = f2[0].clone()
      framing2.name = "floor"
      f2.push(framing2)
      scene.add(framing2)
      getpo()

    } else {
      if ( FILEFLOOR == "framing162" && (XX != 1 || ZZ != 1)) {
      translateOn(framing,"boxmax",f2[0],"boxmin")
      f2[0].translateX(-0.024)
    }
  }
    }
     
function getpo() {
 

  c = parseFloat(getPos(framing2,"boxmin"))
  
      if ( (shellmaxpos -zzz) > c *1.05) {
         yy += zzz

  //f2[f2.length-1].translateX(resultcorner22)
  //f2[f2.length-1].scale.z = ZZ
 
  f2[f2.length-1].translateX(zZ)

if (f2.length != 1) {
  zZ += zzz
  }
      updateFrame()
    
    }else {
      if ( FILEFLOOR == "framing162" && (XX != 1 || ZZ != 1)) {
      translateOn(framing,"boxmax",f2[0],"boxmin")
      f2[0].translateX(-0.024)
    }}
}





function loadingFloorFraming(element = FILEFLOOR) {
          FILEFLOOR = element

          for (i = 0;i<f2.length;i++) {
            scene.remove(f2[i])
          }
          f2 = []
          
          var path = Dpath + "floor/"
          if ( FILEFLOOR == "framing1622") {
            var element = "framing162"
          } else {
          var element = FILEFLOOR
        }
        
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                framing2 = node
                f2.push(framing2)
                scene.add(framing2)
                framing2.scale.z = ZZ
                framingMain = framing2
                framingMain.name = "floor"
              
                translateOn(lefty,"boxmax",framing2,"boxmax")
                if ( Dpath == "carriage/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/" || Dpath == "leanto/") {
                  translateOn(backty,"boxmaxz",framing2,"boxminz")
              } else {
                centerUnknownZ(framing2,lefty)
                }
                let pos1 = getPos(framing2,"boxmax")
                let pos2 = getPos(righty,"boxmin")
                let value
                if ( FILEFLOOR == "framing82") {
                  Joists = '8 " O.C'
                  value =  0.20319998264312744
                } else if ( FILEFLOOR == "framing162") {
                  value =  0.4063990116119385
                  Joists = '16 " O.C ( standard )'
                } else if ( FILEFLOOR == "framing122") {
                  value = 0.3047999143600464
                  
                  Joists = '12 " O.C'
                } else if ( FILEFLOOR == "framing1622") {
                  value =  0.4063990116119385
                  Joists = '2x6 floor joists'
                }
                while (pos1 < pos2 ) {
                  framing2 = framing2.clone()
                  framing2.translateX(value)
                  f2.push(framing2)
                  framing2.name = "floor"
                  scene.add(framing2)
                  pos1 = getPos(framing2,"boxmax")
                }
                if ( pos1 >= pos2) {
                  scene.remove(framing2)
                  framing2.name = ""
                }
                scene.remove(framingMain)
                framingMain.name = ""
              

              }
             }) 
  
          })         
         });         
       }






       
function lawm() {
          try {
            scene.remove(lawn)
          }catch {
            //console.log("fds")
          }  
          var path = "ConstantObjects/"
          var element = "lawm"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                lawm = node
                scene.add(lawm)
                translateOn(front,"boxmaxz",lawm,"boxmaxz",1)
                translateX(-1) 
                     
              }
             })               
               
          })         
         });         
       } 


function loadingPlant2(element) {
          var path = "ConstantObjects/"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plant2 = node
                translateOn(front,"boxmaxz",plant2,"boxmaxz",0.4)
                scene.add(plant2)
                //window2.material[4].color.set(0x000000)
                     
              }
             })          
           
               
          })         
         });         
       } 

function loadingPlant3(element) {
          var path = "ConstantObjects/"
          
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                plant3 = node
                translateOn(front,"boxmaxz",plant3,"boxmaxz",0.4)
                scene.add(plant3)

                //window2.material[4].color.set(0x000000)
                     
              }
             })          
           
               
          })         
         });         
       } 


function loadingCupolaRef(el) {
   
            try {
              scene.remove(cupolaRef)
              scene.remove(cupola)
          } catch {
              console.log("erno")
          }
           let elt = el
          let el2 = el.replace("Ref","")
          var path = "ConstantObjects/" +"materials/"
          var element = elt
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cupolaRef = node
                cupolaRef.name = el

                
                if ( Dpath == "minibarn/" || Dpath == "vinylbarn/" || Dpath == "highbarn/") {
                  centerUnknownX(cupolaRef,front)
                } else {
                  centerUnknownX(cupolaRef,shingles)
                }
                centerUnknownZ(cupolaRef,shingles)
                
                var w = getPos(shingles, "boxmaxy")
                var z = getPos(cupolaRef,"boxminy")
                cupolaRef.translateY(w-z)
                cupolaRef.translateY(-0.1)
                let posInit = getPos(cupolaRef,"boxmaxy")
                cupolaRef.scale.y = 3
                let posLast = getPos(cupolaRef,"boxmaxy")
                cupolaRef.translateY(posInit-posLast)
                scene.add(cupolaRef)
                loadingCupola(el2)
              }
             })           
          })         
         });         
       } 
  

function loadingFaceFrontDesignerCarriage() {
          
          var path =Dpath +"shed/"
          var element = "faceFront"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                faceFront = node
                translateOn(front,"boxmaxz",faceFront,"boxminz")
                centerUnknownX(faceFront,front)
                scene.add(faceFront)

             
              }
             })           
          })         
         });         
       
  
}

function loadingFaceBackDesignerCarriage() {
      var path =Dpath +"shed/"
          var element = "faceBack"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                faceBack = node
                translateOn(backty,"boxminz",faceBack,"boxmaxz")
                centerUnknownX(faceBack,backty)
                scene.add(faceBack)

              }
             })           
          })         
         });         
       
  
}


function cupolaPlacement() {
                setTransp(cupola,1)
                setTransp(cupolaRef,1)
                cupolaRef.scale.y = 1
                centerUnknownX(cupolaRef,shingles)
                centerUnknownZ(cupolaRef,shingles)
                
                var w = getPos(shingles, "boxmaxy")
                var z = getPos(cupolaRef,"boxminy")
                cupolaRef.translateY(w-z)
                cupolaRef.translateY(-0.1)
                let posInit = getPos(cupolaRef,"boxmaxy")
                cupolaRef.scale.y = 3
                let posLast = getPos(cupolaRef,"boxmaxy")
                cupolaRef.translateY(posInit-posLast)

                centerUnknownX(cupola,shingles)
                centerUnknownZ(cupola,shingles)
                
                var w = getPos(cupolaRef, "boxmaxy")
                var z = getPos(cupola,"boxminy")
                cupola.translateY(w-z)

                if ( Dpath == "carriage/" || Dpath == "highCarriage/") {
                  if ( ZZ == 1.5) {
                    cupolaRef.translateZ(0.33)

                  } else if ( ZZ == 1.75) {
                    cupolaRef.translateZ(0.34)
                  } else if ( ZZ == 1.25 || ZZ == 1 || ZZ == 0.75) {
                    cupolaRef.translateZ(0.32)
                } 
               
              } else if ( Dpath == "designerCarriage/") {
                 if ( ZZ == 1.5) {
                    cupolaRef.translateZ(0.41)

                  } else if ( ZZ == 1.75) {
                    cupolaRef.translateZ(0.41)
                  } else if ( ZZ == 1.25 || ZZ == 1 || ZZ == 0.75) {
                    cupolaRef.translateZ(0.41)
                } 
}
              centerUnknownZ(cupola,cupolaRef)
              if ( Dpath == "capecode/") {
                centerUnknownX(cupola,cape)
                centerUnknownX(cupolaRef,cupola) 
              }
            if ( Dpath == "minibarn/" || Dpath == "vinylbarn/" || Dpath == "highbarn/") {
                  centerUnknownX(cupola,front)
                  centerUnknownX(cupolaRef,cupola) 
                }
}
   


function loadingCupola(element) {
  try {
    scene.remove(cupola)
  } catch {
    console.log("erno")
  }
          var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                cupola = node

                if ( Dpath == "minibarn/" || Dpath == "vinylbarn/" || Dpath == "highbarn/") {
                  centerUnknownX(cupolaRef,front) }
                  else {
                centerUnknownX(cupola,shingles)
              }
                centerUnknownZ(cupola,shingles)
                
                var w = getPos(cupolaRef, "boxmaxy")
                var z = getPos(cupola,"boxminy")
                cupola.translateY(w-z)
                //cupola.translateY(-0.235)
                transparent = true
                interior = false
                Interior()
                transparent = false
                transparentt()

                scene.add(cupola)
                cupolaPlacement()

              }
             })          
          })         
         });         
       } 


function translateWorkbench(varr) {

                let side = varr.name 
                side = side.replace("Workbench","")
                side = side.replace(/[0-9]/g,'')

                let length1 
                let length2
                let tempDoor,the_state,posDoorMax,posDoorMin,posWallMin, posWallMax, direction
                switch(side) {
                  case "Front":

                    the_state = false
                   
                     varr.scale.x = 0.8
                    centerUnknownX(varr,front)
                    translateOn(front,"boxminz",varr,"boxmaxz")
                   
                    

                    for ( st of listObj) {
                      if ( st.name.includes("FrontDoor")) {
                        tempDoor = st.door
                        the_state = true
                        posDoorMin = parseFloat(getPos(tempDoor,"boxmin"))
                        posDoorMax = parseFloat(getPos(tempDoor,"boxmax"))
                        posWallMax = parseFloat(getPos(front,"boxmax"))
                        posWallMin = parseFloat(getPos(front,"boxmin"))
                        if ( (posWallMax - posDoorMax) > (posDoorMin - posWallMin) ) {
                          direction = "forward"
                        } else {
                          direction = "backward"
                        }

                      }

                    }
                     if (the_state == false) {

                       //length1 = parseFloat(getPos(cornersStudFrontRight,"boxmin"))
                       //length2 = parseFloat(getPos(varr,"boxmax"))
                       scaleBetween2Objects(varr,cornersStudFrontLeft,"boxmax",cornersStudFrontRight,"boxmin","x")
                       varr.scale.x-= 0.04
                       centerUnknownX(varr,front)

                       /*
                        while (length1 > length2+0.05 ) {
                         
                        varr.scale.x += 0.013
                        centerUnknownX(varr,front)
                        length2 = parseFloat(getPos(varr,"boxmax"))

                      }
                      */
                      } else {
                        if ( direction == "forward") {
                         
                          translateOn(tempDoor,"boxmax",varr,"boxmin",0.05)
                          //length1 = parseFloat(getPos(cornersStudFrontRight,"boxmin"))
                          //length2 = parseFloat(getPos(varr,"boxmax"))
                          scaleBetween2Objects(varr,tempDoor,"boxmax",cornersStudFrontRight,"boxmin","x")
                          varr.scale.x-= 0.04
                          translateOn(tempDoor,"boxmax",varr,"boxmin",0.05)
                          /*
                           while (length1 < length2+0.05 ) {
                        varr.scale.x -= 0.013
                         translateOn(tempDoor,"boxmax",varr,"boxmin",0.05)
                        length2 = parseFloat(getPos(varr,"boxmax"))
                      }
                      */
                        } else if ( direction == "backward") {
                        
                            translateOn(cornersStudFrontLeft,"boxmin",varr,"boxmax")
                             //length1 = parseFloat(getPos(cornersStudFrontLeft,"boxmax"))
                          //length2 = parseFloat(getPos(varr,"boxmin"))
                          scaleBetween2Objects(varr,cornersStudFrontLeft,"boxmax",tempDoor,"boxmin","x")
                          varr.scale.x -= 0.04
                          translateOn(tempDoor,"boxmin",varr,"boxmax")
                        

                          /*
                           while (length1 > length2+0.05 ) {
                        varr.scale.x -= 0.013
                         translateOn(tempDoor,"boxmin",varr,"boxmax",-0.05)
                        length2 = parseFloat(getPos(varr,"boxmin"))
                      }
                      */
                        }

                      }
              
                    break;
                  case "Back":
                   the_state = false
                   varr.scale.x = 0.8
                    centerUnknownX(varr,backty)
                    translateOn(backty,"boxmaxz",varr,"boxminz")
                   
                      for ( st of listObj) {
                      if ( st.name.includes("BackDoor")) {
                        tempDoor = st.door
                        the_state = true
                        posDoorMin = parseFloat(getPos(tempDoor,"boxmin"))
                        posDoorMax = parseFloat(getPos(tempDoor,"boxmax"))
                        posWallMax = parseFloat(getPos(backty,"boxmax"))
                        posWallMin = parseFloat(getPos(backty,"boxmin"))
                        if ( (posWallMax - posDoorMax) > (posDoorMin - posWallMin) ) {
                          direction = "forward"
                        } else {
                          direction = "backward"
                        }

                      }

                    }
                    
                     if (the_state == false) {
                       //length1 = parseFloat(getPos(cornersStudFrontRight,"boxmin"))
                       //length2 = parseFloat(getPos(varr,"boxmax"))
                       /*

                        while (length1 > length2+0.05 ) {
                         
                        varr.scale.x += 0.013
                        centerUnknownX(varr,front)
                        length2 = parseFloat(getPos(varr,"boxmax"))

                      }
                      */
                      scaleBetween2Objects(varr,cornersStudFrontLeft,"boxmax",cornersStudFrontRight,"boxmin","x")
                      varr.scale.x -= 0.04
                      centerUnknownX(varr,backty)
                      } else {
                        if ( direction == "forward") {
                         
                          translateOn(tempDoor,"boxmax",varr,"boxmin",0.05)
                          //length1 = parseFloat(getPos(cornersStudFrontRight,"boxmin"))
                          //length2 = parseFloat(getPos(varr,"boxmax"))
                          /*
                           while (length1 < length2+0.05 ) {
                        varr.scale.x -= 0.013
                         translateOn(tempDoor,"boxmax",varr,"boxmin",0.05)
                        length2 = parseFloat(getPos(varr,"boxmax"))
                      }
                      */
                      scaleBetween2Objects(varr,tempDoor,"boxmax",cornersStudFrontRight,"boxmin","x")
                      varr.scale.x -= 0.04
                      translateOn(tempDoor,"boxmax",varr,"boxmin",0.05)

                        } else if ( direction == "backward") {
                        
                            translateOn(cornersStudFrontLeft,"boxmax",varr,"boxmax")
                           //  length1 = parseFloat(getPos(cornersStudFrontLeft,"boxmax"))
                         // length2 = parseFloat(getPos(varr,"boxmin"))
                         /*
                           while (length1 > length2-0.05 ) {
                        varr.scale.x -= 0.013
                         translateOn(tempDoor,"boxmin",varr,"boxmax",-0.05)
                        length2 = parseFloat(getPos(varr,"boxmin"))
                      }
                      */
                      scaleBetween2Objects(varr,cornersStudFrontLeft,"boxmax",tempDoor,"boxmin","x")
                      varr.scale.x -= 0.04
                      translateOn(tempDoor,"boxmin",varr,"boxmax")
                      
                        }
                      }
                    break;
                  case "Left":
                  the_state = false
                    length2 = getPos(cornersStudFrontLeft,"boxminz")
                    if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      length2 = getPos(front,"boxminz")
                    }
                     varr.scale.z = 0.7
                    centerUnknownZ(varr,lefty)
                     if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      centerUnknownZ(varr,floorLeft)
                     }
                    translateOn(lefty,"boxmax",varr,"boxmin")
                    length1 = getPos(varr,"boxmaxz")
                     if (length1 > length2 ) {
                      //removeObject(varr.name) 
                      while (length1 > length2 ) {
                        varr.scale.z -= 0.025
                        centerUnknownZ(varr,lefty)
                         if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      centerUnknownZ(varr,floorLeft)
                     }
                        length1  = getPos(varr,"boxmax")
                      }
                    }
                       for ( st of listObj) {
                      if ( st.name.includes("LeftDoor")) {
                        tempDoor = st.door
                        the_state = true
                        posDoorMin = parseFloat(getPos(tempDoor,"boxminz"))
                        posDoorMax = parseFloat(getPos(tempDoor,"boxmaxz"))
                        posWallMax = parseFloat(getPos(lefty,"boxmaxz"))
                        posWallMin = parseFloat(getPos(lefty,"boxminz"))
                        if ( (posWallMax - posDoorMax) > (posDoorMin - posWallMin) ) {
                          direction = "forward"
                        } else {
                          direction = "backward"
                        }

                      }

                    }
                     if (the_state == false) {
                
                       length1 = parseFloat(getPos(cornersStudFrontLeft,"boxminz"))
                        if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      length1 = getPos(front,"boxminz")
                    }
                       length2 = parseFloat(getPos(varr,"boxmaxz"))
                        while (length1 > length2+0.05 ) {
                         
                        varr.scale.z += 0.013
                        centerUnknownZ(varr,lefty)
                        if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                        centerUnknownZ(varr,floorLeft)
                      }
                        length2 = parseFloat(getPos(varr,"boxmaxz"))

                      }
                      } else {
                        if ( direction == "forward") {
                         
                          translateOn(tempDoor,"boxmaxz",varr,"boxminz",0.05)
                          length1 = parseFloat(getPos(cornersStudFrontLeft,"boxminz"))
                            if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      length1 = getPos(front,"boxminz")
                    }
                          length2 = parseFloat(getPos(varr,"boxmaxz"))
                           while (length1 < length2+0.05 ) {
                        varr.scale.z -= 0.013
                         translateOn(tempDoor,"boxmaxz",varr,"boxminz",0.05)
                        length2 = parseFloat(getPos(varr,"boxmaxz"))
                      }
                        } else if ( direction == "backward") {
                        
                            translateOn(tempDoor,"boxminz",varr,"boxmaxz",-0.05)
                             length1 = parseFloat(getPos(cornersStudBackLeft,"boxmaxz"))
                              if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      length1 = getPos(front,"boxminz")
                    }
                          length2 = parseFloat(getPos(varr,"boxminz"))
                           while (length1 > length2-0.05 ) {
                        varr.scale.z -= 0.013
                         translateOn(tempDoor,"boxminz",varr,"boxmaxz",-0.05)
                        length2 = parseFloat(getPos(varr,"boxminz"))
                      }
                        }
                      }
                    break;
                  case "Right":
                    the_state = false
                    length2 = getPos(cornersStudFrontRight,"boxminz")
                     varr.scale.z = 0.7
                    centerUnknownZ(varr,righty)
                    if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      centerUnknownZ(varr,floorRight)
                    }
                    translateOn(righty,"boxmin",varr,"boxmax")
                    length1 = getPos(varr,"boxmaxz")
                      if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      length2 = getPos(front,"boxminz")
                    }
                     
                      for ( st of listObj) {
                      if ( st.name.includes("RightDoor")) {
                        tempDoor = st.door
                        the_state = true
                        posDoorMin = parseFloat(getPos(tempDoor,"boxminz"))
                        posDoorMax = parseFloat(getPos(tempDoor,"boxmaxz"))
                        posWallMax = parseFloat(getPos(righty,"boxmaxz"))
                        posWallMin = parseFloat(getPos(righty,"boxminz"))
                        if ( (posWallMax - posDoorMax) > (posDoorMin - posWallMin) ) {
                          direction = "forward"
                        } else {
                          direction = "backward"
                        }

                      }

                    }
                     if (the_state == false) {
                
                       length1 = parseFloat(getPos(cornersStudFrontRight,"boxminz"))
                       length2 = parseFloat(getPos(varr,"boxmaxz"))
                         if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      length1 = getPos(front,"boxminz")
                    }
                        while (length1 > length2+0.05 ) {
                         
                        varr.scale.z += 0.013
                        centerUnknownZ(varr,righty)
                         
                          if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      centerUnknownZ(varr,floorRight)
                    }
                        length2 = parseFloat(getPos(varr,"boxmaxz"))

                      }
                      } else {
                        if ( direction == "forward") {
                         
                          translateOn(tempDoor,"boxmaxz",varr,"boxminz",0.05)
                          length1 = parseFloat(getPos(cornersStudFrontRight,"boxminz"))
                          length2 = parseFloat(getPos(varr,"boxmaxz"))
                            if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                      length1 = getPos(front,"boxminz")
                    }
                           while (length1 < length2+0.05 ) {
                        varr.scale.z -= 0.013
                         translateOn(tempDoor,"boxmaxz",varr,"boxminz",0.05)
                        length2 = parseFloat(getPos(varr,"boxmaxz"))
                      }
                        } else if ( direction == "backward") {
                        
                            translateOn(tempDoor,"boxminz",varr,"boxmaxz",-0.05)
                             length1 = parseFloat(getPos(cornersStudBackRight,"boxmaxz"))
                          length2 = parseFloat(getPos(varr,"boxminz"))
                           while (length1 > length2-0.05 ) {
                        varr.scale.z -= 0.013
                         translateOn(tempDoor,"boxminz",varr,"boxmaxz",-0.05)
                        length2 = parseFloat(getPos(varr,"boxminz"))
                      }
                        }
                      }
                  }
                } 


function loadingWorkbench(elt,side = lastSelectedSide) {

         

          var element = elt + side
           if (side == "Left") {
            element = elt
          }
          var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                workbenchh = node
             
                

                workbenches += 1
                workbenchh.name = side+"Workbench" + workbenches
                name = workbenchh.name
                let tempStr = name + "Dict = {}"
                eval(tempStr)
                let addName = name + "Dict.name = workbenchh.name"
                eval(addName)
                let addWork = name + "Dict.workbench = workbenchh"
                eval(addWork)
                
                let replacement = false;

               // let tempTrans = name + "Dict.translate = function() {translateWorkbench(this)}"
               // eval(tempTrans)

                let temporaryDict = "listObj.push(" + name + "Dict)"
                eval(temporaryDict)

                /*
                for ( i = 0;i<objectsPushed.length;i++) {
                  if (objectsPushed[i].includes(side+"Workbench")) {
                    removeObject(objectsPushed[i])
                    objectsPushed[i] = name;
                    
                    replacement = true
                    break;
                  }
                }
                if (replacement == false) {
                  objectsPushed.push(name) 
                }
                */
                
                scene.add(workbenchh)
                workPushed.push(workbenchh)
               // let execute = name+ "Dict.translate()"
                //eval(execute)

                objects.push(workbenchh)
                moveListo.push(name,workbenchh)
                translateWorkbench(workbenchh)
              }
             })                  
          })         
         });         
       } 
/*
function translateWork(side,elt) {
  let sidee = side.toLowerCase()
  let nb = 0
  let posi1
  let posi2
  switch(sidee) {
    case "front":
    translateOn(front,"boxminz",elt,"boxmaxz")
    centerUnknownX(elt,front)
      for ( i of objectsPushed) {
        if (i.includes("FrontWorkbench")) {
          nb += 1
        }
      }
      if ( nb == 1) {
         posi1 = getPos(cornersStudFrontRight,"boxmax")
         posi2 = getPos(elt,"boxmax")
        while ( posi2 < posi1) {
          elt.scale.x += 0.025
          centerUnknownX(workbenchh,front)
          posi2 = getPos(elt,"boxmax")
        }
        elt.scale.x -= 0.045
        centerUnknownX(workbenchh,front)

      } else if ( nb == 2) {

      }
  }
}
*/

function loadingLightBulb() {

  
   try {
    //scene.remove(panel)
    document.getElementById("selMaterial").selectedIndex = 0
    let selopt = document.getElementById("selMaterial")
  for (var i=0; i<selopt.length; i++) {
    if (selopt.options[i].innerHTML.toLowerCase() == "light bulb socket"){
        selopt.remove(i);

}}
  } catch {
    console.log("erno")
  }
  try {
      scene.remove(bulb)
      bulb = ""
      bulb.name = ""
     //removeMaterial(bulb)
   } catch {
    //pass
   }

          let the_plat
          let plat_list = []
          var numberss = sizeD.match(/\d+/g).map(Number) - 2;
          var element = "lightbulbsocket" 
          var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                bulb = node
                bulb.name = "Light bulb socket"
                bulb.p = 3
                if ( Dpath == "cabana/") {
                var y1 = getPos(plat,"boxmaxy")
                var y2 = getPos(bulb,"boxmaxy")
                bulb.translateY(y1-y2*1.01)

                var y1 = getPos(plat,"boxmax")
                var y2 = getPos(bulb,"boxmin")
                bulb.translateX(y1-y2)
                } else if ( Dpath == "capcode/") {
                var y1 = getPos(cape,"boxmaxy")
                var y2 = getPos(bulb,"boxmaxy")
                bulb.translateY(y1-y2*1.01)

                var y1 = getPos(cape,"boxmax")
                var y2 = getPos(bulb,"boxmin")
                bulb.translateX(y1-y2)
                } else {
                  for ( c of p2) {
                    try {
                      if ( c.name == "plat") {
                        plat_list.push(c)
                      }
                    } catch {
                      //pass
                    }
                  }
                the_plat = parseInt(plat_list.length/2)
                the_plat = p2[the_plat]

                var y1 = getPos(the_plat,"boxmaxy")
                var y2 = getPos(bulb,"boxmaxy")
                bulb.translateY(y1-y2*1.01)

                centerUnknownZ(bulb,the_plat)
                translateOn(the_plat,"boxmax",bulb,"boxmin")
              }
                centerUnknownZ(bulb,lefty)
                if ( Dpath == "carriage/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/") {
                  centerUnknownZ(bulb,wood)
                  if (ZZ == 1.5 || ZZ == 1.75)
                    bulb.translateZ(0.155)
                }
                if ( Dpath == "capecode/") {
                  centerUnknownX(bulb,cape)
                  bulb.translateX(-0.35)
                  centerUnknownZ(bulb,cape)
                  bulb.translateZ(0.08)

                  translateOn(cape,"boxmaxy",bulb,"boxmaxy",-0.08)
                }
                if ( Dpath == "leanto/") {
                  translateOn(the_plat,"boxmaxy",bulb,"boxmaxy",-0.01)
                  translateOn(the_plat,"boxminz",bulb,"boxminz")
                }
                select = document.getElementById('selMaterial');
                let opt = document.createElement('option');
                opt.value = "bulb";
                opt.innerHTML = "Light bulb socket";
                select.appendChild(opt);

                scene.add(bulb)
              }
             })          
          
          
          })         
         });         
       } 

function loadingLoft() {

  var numberss = sizeD.match(/\d+/g).map(Number) - 2;
  var element = "loft" + numberss
    var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                loft = node
                try {
                  scene.remove(loftDict.loft)
                } catch {
                  console.log("in loadingLoft")
                }
                loft.name = "loft"
                loftDict.name = "Frontloft"
                loftDict.loft = loft 

                try {
        translateOn(backRaft,"boxminy",loft,"boxminy",-0.05)
      } catch {
        console.log("r")
      }
                objects.push(loft)
                moveListo.push("loft",loft)
                if ( Dpath != "carriage/" && Dpath != "designerCarriage/" && Dpath !="highCarriage/") {
                centerUnknownZ(loft,lefty)               
              } else {
                translateOn(backty,"boxmaxz",loft,"boxminz")
              }

                translateOn(lefty,"boxmax",loft,"boxmin")   
                scene.add(loft)
              
                loadingCloseLoft()
              
              }
             })          
          })         
         });         
       } 


function loadingLoft2() {

  var numberss = sizeD.match(/\d+/g).map(Number) - 2;
  var element = "loft" + numberss
    var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                loft2 = node
                try {
                  scene.remove(loft2Dict.loft)
                } catch {
                  console.log("in loadingLoft")
                }
                loft2.name = "loft"
                loft2Dict.name = "Frontloft"
                loft2Dict.loft = loft2


                try {
        translateOn(backRaft,"boxminy",loft2,"boxminy",-0.05)
      } catch {
        console.log("r")
      }
                objects.push(loft2)
                moveListo.push("loft2",loft2)
                if ( Dpath != "carriage/" && Dpath != "designerCarriage/" && Dpath !="highCarriage/") {
                centerUnknownZ(loft2,lefty)               
              } else {
                translateOn(backty,"boxmaxz",loft2,"boxminz")
              }
              
                translateOn(righty,"boxmax",loft2,"boxmax",-0.11)   
                scene.add(loft2)
               
                loadingCloseLoft2()
              
              }
             })          
          })         
         });         
       } 

function loadingCloseLoft2() {
  try {
    scene.remove(closeLoft2)
  } catch {
    console.log("erno")
  }
  var numberss = sizeD.match(/\d+/g).map(Number) - 2;
  var element = "closeLoft" 
    var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                closeLoft2 = node
                try {
                  scene.remove(loft2Dict.close)
                } catch {
                  console.log("in loadingLoft")
                }
                loft2Dict.close = closeLoft2
                loft2Dict.translate = function() {
                   translateOn(loft2,"boxmin",closeLoft2,"boxmax",0.13)   
                }
                centerUnknownZ(closeLoft2,loft2)               
                translateOn(loft2,"boxmin",closeLoft2,"boxmax",0.13)   
                //translateOn(loft,"boxminy",closeLoft,"boxminy")
                scene.add(closeLoft2)
                if ( Dpath == "designerCarriage/" || Dpath == "highCarriage/" || ZZ == 0.75) {
                  setTransp(closeLoft2,0)
                }
                  if ( Dpath == "cabana/" || Dpath == "capecode/") {
                    setTransp(closeLoft2,0)
                  }
                scaleCloseLoft2()
              }
             })          
          })         
         });         
       } 

function scaleCloseLoft2() {
  let pos1,pos2 
  pos1 = getPos(closeLoft2,"boxminy")
  translateOn(loft2,"boxmaxy",closeLoft2,"boxminy")
  while ( getPos(p2[0],"boxmaxy")-0.04 > getPos(closeLoft2,"boxmaxy")) {
    closeLoft2.scale.y += 0.05
    pos2 = getPos(closeLoft2,"boxminy")
    closeLoft2.translateY(pos1-pos2)
  }
  if ( getPos(p2[0],"boxmaxy") < getPos(closeLoft2,"boxmaxy") ) {
    closeLoft2.scale.y -= 0.01
    pos2 = getPos(closeLoft2,"boxminy")
    closeLoft2.translateY(pos1-pos2)
  }
  if ( getPos(p2[0],"boxmaxy") < getPos(closeLoft2,"boxmaxy") ) {
    closeLoft2.scale.y -= 0.01
    pos2 = getPos(closeLoft2,"boxminy")
    closeLoft2.translateY(pos1-pos2)
  }
  if ( getPos(p2[0],"boxmaxy") < getPos(closeLoft2,"boxmaxy") ) {
    closeLoft2.scale.y -= 0.01
    pos2 = getPos(closeLoft2,"boxminy")
    closeLoft2.translateY(pos1-pos2)
  }
  if ( getPos(p2[0],"boxmaxy") < getPos(closeLoft2,"boxmaxy") ) {
    closeLoft2.scale.y -= 0.01
    pos2 = getPos(closeLoft2,"boxminy")
    closeLoft2.translateY(pos1-pos2)
  }
  if ( getPos(p2[0],"boxmaxy") < getPos(closeLoft2,"boxmaxy") ) {
    closeLoft2.scale.y -= 0.006
    pos2 = getPos(closeLoft2,"boxminy")
    closeLoft2.translateY(pos1-pos2)
  }
   translateOn(loft2,"boxminy",closeLoft2,"boxminy")
  
}

function scaleCloseLoft() {
  
  let pos1,pos2 
  pos1 = getPos(closeLoft,"boxminy")
  translateOn(loft,"boxmaxy",closeLoft,"boxminy")
  while ( getPos(p2[0],"boxmaxy")-0.04 > getPos(closeLoft,"boxmaxy")) {
    closeLoft.scale.y += 0.05
    pos2 = getPos(closeLoft,"boxminy")
    closeLoft.translateY(pos1-pos2)
  }
  if ( getPos(p2[0],"boxmaxy") < getPos(closeLoft,"boxmaxy") ) {
    closeLoft.scale.y -= 0.01
    pos2 = getPos(closeLoft,"boxminy")
    closeLoft.translateY(pos1-pos2)
  }
  if ( getPos(p2[0],"boxmaxy") < getPos(closeLoft,"boxmaxy") ) {
    closeLoft.scale.y -= 0.01
    pos2 = getPos(closeLoft,"boxminy")
    closeLoft.translateY(pos1-pos2)
  }
  if ( getPos(p2[0],"boxmaxy") < getPos(closeLoft,"boxmaxy") ) {
    closeLoft.scale.y -= 0.01
    pos2 = getPos(closeLoft,"boxminy")
    closeLoft.translateY(pos1-pos2)
  }
  if ( getPos(p2[0],"boxmaxy") < getPos(closeLoft,"boxmaxy") ) {
    closeLoft.scale.y -= 0.01
    pos2 = getPos(closeLoft,"boxminy")
    closeLoft.translateY(pos1-pos2)
  }
  if ( getPos(p2[0],"boxmaxy") < getPos(closeLoft,"boxmaxy") ) {
    closeLoft.scale.y -= 0.006
    pos2 = getPos(closeLoft,"boxminy")
    closeLoft.translateY(pos1-pos2)
  }
   translateOn(loft,"boxminy",closeLoft,"boxminy")
  
}
function loadingCloseLoft() {
  try {
    scene.remove(closeLoft)
  } catch {
    console.log("erno")
  }
  var numberss = sizeD.match(/\d+/g).map(Number) - 2;
  var element = "closeLoft" 
    var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                closeLoft = node
                try {
                  scene.remove(loftDict.close)
                } catch {
                  console.log("in loadingLoft")
                }
                loftDict.close = closeLoft 
                loftDict.translate = function() {
                  translateOn(loft,"boxmax",closeLoft,"boxmin",-0.13)  
                }
                centerUnknownZ(closeLoft,loft)               
                translateOn(loft,"boxmax",closeLoft,"boxmin",-0.13)   
                //translateOn(loft,"boxminy",closeLoft,"boxminy")
                scene.add(closeLoft)
                  if ( Dpath == "designerCarriage/" || Dpath == "highCarriage/" || ZZ == 0.75) {
                  setTransp(closeLoft,0)
                }
                  if ( Dpath == "cabana/" || Dpath == "capecode/") {
                    setTransp(closeLoft,0)
                  }
                scaleCloseLoft()
              }
             })          
          })         
         });         
       } 

function loadingLightSwitch() {
 
   try {
    //scene.remove(panel)
    document.getElementById("selMaterial").selectedIndex = 0
    let selopt = document.getElementById("selMaterial")
  for (var i=0; i<selopt.length; i++) {
    if (selopt.options[i].innerHTML.toLowerCase() == "light switch"){
        selopt.remove(i);

}
}
  } catch {
    console.log("erno")
  }
  try {
      scene.remove(switchh)
      switchh = ""
      //panel.name = ""
     //removeMaterial(receptable)
   } catch {
    //pass
   }

  var element = "lightswitch"
    var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                switchh = node
                switchh.name = "Light switch"
                switchh.p = 2

                var w = getPos(r2[2], "boxmin")
                var z = getPos(switchh,"boxmax")
                switchh.translateX(w-z)

                 var w = getPos(r2[2], "boxminz")
                var z = getPos(switchh,"boxminz")
                switchh.translateZ(w-z)
               
                scene.add(switchh)
                let select = document.getElementById('selMaterial')
                let opt = document.createElement('option');
                opt.value = "switchh";
                opt.innerHTML = "Light Switch"
                select.appendChild(opt);

              }
             })          
          
          
          })         
         });         
       } 

function loadingReceptable() {
  try {
    //scene.remove(panel)
    document.getElementById("selMaterial").selectedIndex = 0
    let selopt = document.getElementById("selMaterial")
  for (var i=0; i<selopt.length; i++) {
    if (selopt.options[i].innerHTML.toLowerCase() == "receptable"){
        selopt.remove(i);

}
}
  } catch {
    console.log("erno")
  }
  try {
      scene.remove(receptable)
      receptable = ""
      //panel.name = ""
     //removeMaterial(receptable)
   } catch {
    //pass
   }

  var element = "receptable"
    var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                receptable = node
                receptable.name = "Receptable"
                receptable.p = 2
                var w = getPos(r2[2], "boxmin")
                var z = getPos(receptable,"boxmin")
                receptable.translateX(w-z)

                 var w = getPos(r2[2], "boxminz")
                var z = getPos(receptable,"boxminz")
                receptable.translateZ(w-z)
               
                scene.add(receptable)
                select = document.getElementById('selMaterial');
                let opt = document.createElement('option');
                opt.value = "receptable";
                opt.innerHTML = "Receptable";
                select.appendChild(opt);
              }
             })          
          
          
          })         
         });         
       } 

function loadingJunctionBox() {
     try {
    //scene.remove(panel)
    document.getElementById("selMaterial").selectedIndex = 0
    let selopt = document.getElementById("selMaterial")
  for (var i=0; i<selopt.length; i++) {
    if (selopt.options[i].innerHTML.toLowerCase() == "junction box"){
        selopt.remove(i);

}}
  } catch {
    console.log("erno")
  }
  try {
      scene.remove(junction)
      junction = ""
      //panel.name = ""
     //removeMaterial(junction)
   } catch {
    //pass
   }

    var element = "junctionbox"
    var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                junction = node
                junction.name = "Junction box"
                junction.p = 3
                var w = getPos(right[3], "boxmin")
                var z = getPos(junction,"boxmin")
                junction.translateX(w-z)
               

                var w = getPos(right[3], "boxminz")
                var z = getPos(junction,"boxminz")
                junction.translateZ(w-z)
                 if ( Dpath == "capecode/" || Dpath == "leanto/") {
                  translateOn(right[3],"boxmax",junction,"boxmax")
                  translateOn(right[3],"boxmaxz",junction,"boxminz")
                  
                }
                 select = document.getElementById('selMaterial');
                let opt = document.createElement('option');
                opt.value = "junction";
                opt.innerHTML = "Junction box";
                select.appendChild(opt);
                scene.add(junction)
              }
             })          
          
          
          })         
         });         
       } 

function loadingExteriorReceptable() {
    try {
    //scene.remove(panel)
    document.getElementById("selMaterial").selectedIndex = 0
    let selopt = document.getElementById("selMaterial")
  for (var i=0; i<selopt.length; i++) {
    if (selopt.options[i].innerHTML.toLowerCase() == "exterior receptable"){
        selopt.remove(i);

}
}
  } catch {
    console.log("erno")
  }
  try {
      scene.remove(receptableE)
      receptableE = ""
      //panel.name = ""
    // removeMaterial(receptableE)
   } catch {
    //pass
   }
    var element = "exterior"
    var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                receptableE = node
                receptableE.name = "Exterior receptable"
                receptableE.p = 2
                var w = getPos(right[2], "boxmin")
                var z = getPos(receptableE,"boxmin")
                receptableE.translateX(w-z)

                var w = getPos(right[2], "boxminz")
                var z = getPos(receptableE,"boxminz")
                receptableE.translateZ(w-z)
                
                if ( Dpath == "capecode/" || Dpath == "leanto/") {
                  translateOn(right[2],"boxmax",receptableE,"boxmax")
                  translateOn(right[2],"boxmaxz",receptableE,"boxminz")
                  
                }
                scene.add(receptableE)
                select = document.getElementById('selMaterial');
                let opt = document.createElement('option');
                opt.value = "receptableE";
                opt.innerHTML = "Exterior receptable";
                select.appendChild(opt);
              }
             })          
          })         
         });         
       } 

function loadingPanelBox() {
  try {
    //scene.remove(panel)
    document.getElementById("selMaterial").selectedIndex = 0
    let selopt = document.getElementById("selMaterial")
  for (var i=0; i<selopt.length; i++) {
    if (selopt.options[i].innerHTML.toLowerCase() == "panel box"){
        selopt.remove(i);

}}
  } catch {
    console.log("erno")
  }
  try {
      scene.remove(panel)
      panel = ""
      //panel.name = ""
     //removeMaterial(panel)
   } catch {
    //pass
   }

  var element = "panelbox"
    var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                panel = node
                panel.name = "Panel box"
                panel.p = 2
               // objects.push(panel)
                var w = getPos(right[2], "boxmin")
                var z = getPos(panel,"boxmin")
                panel.translateX(w-z)

                var w = getPos(right[2], "boxminz")
                var z = getPos(panel,"boxminz")
                panel.translateZ(w-z)

                  if ( Dpath == "capecode/" || Dpath == "leanto/") {
                  translateOn(right[2],"boxmax",panel,"boxmax")
                  translateOn(right[2],"boxmaxz",panel,"boxminz")
                  
                }
                select = document.getElementById('selMaterial');
                let opt = document.createElement('option');
                opt.value = "panel";
                opt.innerHTML = "Panel box";
                select.appendChild(opt);
                scene.add(panel)
              }
             })          
          
          
          })         
         });         
       } 
function loadingReceptable2() {
   try {
    //scene.remove(panel)
    document.getElementById("selMaterial").selectedIndex = 0
    let selopt = document.getElementById("selMaterial")
  for (var i=0; i<selopt.length; i++) {
    if (selopt.options[i].innerHTML.toLowerCase() == "receptable 2"){
        selopt.remove(i);

}
}
  } catch {
    console.log("erno")
  }
  try {
      scene.remove(receptable2)
      receptable2 = ""
      //panel.name = ""
     //removeMaterial(receptable2)
   } catch {
    //pass
   }

  var element = "receptable2"
    var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                receptable2 = node
                receptable2.name = "receptable 2"
                receptable2.p = 3

                select = document.getElementById('selMaterial');
                let opt = document.createElement('option');
                opt.value = "receptable2";
                opt.innerHTML = "Receptable 2";
                select.appendChild(opt);
                var w = getPos(r2b[3], "boxmin")
                var z = getPos(receptable2,"boxmax")
                receptable2.translateX(w-z)

                 var w = getPos(r2b[3], "boxminz")
                var z = getPos(receptable2,"boxminz")
                receptable2.translateZ(w-z)
               
                scene.add(receptable2)
              }
             })          
          
          
          })         
         });         
       } 




function receptablee() {
  loadingReceptable2()
  loadingReceptable()
}

 





function shovel() {
          try {
            scene.remove(shovel)
          }catch {
            //console.log("fds")
          } 
          var path = "ConstantObjects/"
          var element = "shovel"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                shovel = node
                scene.add(shovel)
                translateOn(front,"boxmaxz",shovel,"boxmaxz",0.9)
                //window2.material[4].color.set(0x000000)
                     
              }
             })          
          })         
         });         
       } 
       



  function loadingFrontt() {
          var path = Dpath + "shed/"
         
          var element = "front"
         
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                front = node
               
                objects.push(front)
                scene.add(front)
                loadingFloorBack()
                if ( Dpath == "Shed2/" || Dpath == "designerCarriage/" || Dpath == "carriage/" || Dpath == "highCarriage/") {
                  loadFaceBoard()
                }
                if ( Dpath == "cabana/") {
                
                loadCabanaCloseFront()
              }
              try {
                  let tec = "Textures/" + myText
                  applyTexture(tec,repeatSiding,rotateSiding,mySiding)
            } catch {
              //pass
            }

              
              }
             })          
              
          })         
         });         
       }

function loadingFrontCapeCode() {
         
          try {
            scene.remove(specialFront)
          } catch {
            //pass
          }
          let path = Dpath + "pitch/" + sizeD + "/"
          //let element = "specialFront"
          let element = XX.toString()
          
          if (  CAPSTYLE == "capeWide" ) {
            element = "w" + element
          }
       
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                specialFront = node
                translateOn(boardFrontF,"boxmaxz",front,"boxmaxz")
                translateOn(front,"boxmaxz",specialFront,"boxmaxz",0.001)
                centerUnknownX(specialFront,cape)
                 
                scene.add(specialFront)
                objects.push(specialFront)

                try {
                possibleLayout("Front")
              } catch {
                //pass
              }


                //let posInit,posRef,scalar
                //posInit = getPos(specialFront,"boxlength")
                //posRef = getPos(front,"boxlength")

                //scalar = posRef/posInit
                //specialFront.scale.x *= scalar 
                //centerUnknownX(specialFront,front)

               scaleToObject(specialFront,front,"x")
               try {
                  
                  let tec = "Textures/" + myText

                  applyTexture(tec,repeatSiding,rotateSiding,mySiding)
            } catch {
              //pass
            }

                
          
        
              }
             })          
              
          })         
         });  
}

function loadingBackk() {
          var path = Dpath + "shed/"
          
          
          var element = "back"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                backty = node
                objects.push(backty)
                scene.add(backty)
                try {
      let tec = "Textures/" + myText
      applyTexture(tec,repeatSiding,rotateSiding,mySiding)
} catch {
  //pass
}
                if ( Dpath == "cabana/") {

                loadCabanaCloseBack()

              } 
              if ( Dpath == "designerCarriage/") {
                loadingFaceBackDesignerCarriage()
              }
                     
              }
             })          
                
          
          })         
         });         
       }

function loadingRighty(garmod ="none") {

          var path = Dpath + "shed/"
          if ( Dpath == "highbarn/" || Dpath == "capecode/" || Dpath == "leanto/" || Dpath == "carriage/" || Dpath == "minibarn/" || Dpath == "vinylbarn/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
            path = Dpath + "/pitch/" + sizeD + "/"
            if (typeof(righty) == "object") {
          oldRighty = righty
          }
          }
       
          var element = "righty"
          if ( Dpath == "highbarn/" && GARAGEMODEL == true) {
            if ( garmod == "none" || garmod == "rightyGarage") {
            element = "rightyGarage"
          } else if ( garmod == "rightyCurved") {
            element = "rightyCurved"
          } else if ( garmod == "rightySquare") {
  
            element = "rightySquare"
          } 
        }
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;

                righty = node
                try {
      let tec = "Textures/" + myText
      applyTexture(tec,repeatSiding,rotateSiding,mySiding)
} catch {
  //pass
}
                if (Dpath == "Shed2/") {
                righty.translateX(0.0017261505126953125)
              }
              if (typeof(oldRighty) == "object") {
                try {
                  objects[objects.indexOf(oldRighty)] = righty
                } catch {
                objects.push(righty)
              }
            } else {
              objects.push(righty)
            }
                scene.add(righty)
                if ( Dpath == "cabana/") {
              loadCabanaCloseRight()
              
            }

                var path = Dpath + "shed/"
          if ( Dpath == "highbarn/" || Dpath == "leanto/" || Dpath == "carriage/" || Dpath == "minibarn/" || Dpath == "vinylbarn/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
            try {
        
             
            //centerUnknownZ(righty,shell)

            translateOn(oldRighty,"boxmin",righty,"boxmin")
            

            scene.remove(oldRighty)
            if ( Dpath == "carriage/" || Dpath == "highCarriage/" ) {
              translateOn(backty,"boxminz",righty,"boxminz")
            } else if ( Dpath == "designerCarriage/" || "minibarn/" || Dpath == "vinylbarn/") {
              centerUnknownZ(righty,shell)
            } if ( Dpath == "highbarn/" ) {
               //translateOn(backty,"boxminz",righty,"boxminz")
               centerUnknownZ(righty,shell)
            }
           
          } catch {
            //pass
          } 
          if ( Dpath == "leanto/") {
              try {
              translateOn(oldRighty,"boxmax",righty,"boxmax")
              translateOn(front,"boxmaxz",righty,"boxmaxz") 

             
            } catch {
              //pass
            }
            }
            if ( Dpath == "highbarn/" && GARAGEMODEL == true && garmod != "none") {
              if ( sizeD == "14wide") {
                   translateOn(rafterRight,"boxmax",righty,"boxmax",-0.045)
                 } else if ( sizeD == "12wide") {
                   translateOn(rafterRight,"boxmax",righty,"boxmax",-0.005)
                 }
                 addingTrimDModelGarage(GARAGETRIM,RightDoor1Dict)
            } else {
            loadingLefty()
          }

            if ( Dpath == "leanto/") {
              //let piso1 = getPos(righty,"boxmaxy")
              //let piso2 = getPos(backty,"boxmaxy")
              scaleBetween2Objects(backty,righty,"boxminy",righty,"boxmaxy","y")
              //let pis = getPos(backty,"boxminy")
              /*
              while ( piso2 < piso1 ) {
                backty.scale.y += 0.015
               
                piso2 = getPos(backty,"boxmaxy")
              }
              while ( piso1 < piso2) {
                backty.scale.y -= 0.015
                backty.translateY(pis - getPos(backty,"boxminy"))
                piso2 = getPos(backty,"boxmaxy")
              }
            */
             //backty.translateY(pis - getPos(backty,"boxminy"))
            
            }
          }
          if ( Dpath == "capecode/") {
            translateOn(backty,"boxminz",righty,"boxminz")
            translateOn(cornersStudBackRight,"boxmax",righty,"boxmin")
            try {
              objects.push(righty)
              objects.splice(objects.indexOf(oldRighty),1)
              scene.remove(oldRighty)
            } catch {
              //pass
            }
            loadingLefty()
            loadingRightOne()
            
            translateOn(righty,"boxmin",floorRight,"boxmax")
            scene.add(floorRight)

            //specialFront = front
            //front = backty.clone()
            //translateOn(righty,"boxmaxz",front,"boxminz")
            //scene.add(front) 
            
            
            //loadingLeft()
          }
              }
             })          
                  
          })         
         });         
       }



function loadingLefty() {
          var path = Dpath + "shed/"
           if ( Dpath == "highbarn/" || Dpath == "capecode/" || Dpath == "leanto/" || Dpath == "carriage/" || Dpath == "minibarn/" || Dpath == "vinylbarn/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {
            path = Dpath + "/pitch/" + sizeD + "/"
          if (typeof(lefty)== "object") {
           try {
            oldLefty = lefty
           } catch {
            //pass
           }
         }
          
          }
          var element = "lefty"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                lefty = node
                try {
      let tec = "Textures/" + myText
      applyTexture(tec,repeatSiding,rotateSiding,mySiding)
} catch {
  //pass
}
                if ( Dpath == "Shed2/") {
                lefty.translateX(0.010594010353088379)
              }

                scene.add(lefty)
                if ( Dpath == "cabana/") {
               loadCabanaCloseLeft()
               loadingFloorFraming()

                }
              if ( typeof(oldLefty) == "object") {   
                try {
                  objects[objects.indexOf(oldLefty)] = lefty
                } catch {
                objects.push(lefty)
              }
           } else {
            objects.push(lefty)
           }
            if ( Dpath == "highbarn/" || Dpath == "leanto/" || Dpath == "carriage/" ||Dpath == "minibarn/" || Dpath == "vinylbarn/" || Dpath == "highCarriage/" || Dpath == "designerCarriage/") {        
              
              try {
                translateOn(oldLefty,"boxmin",lefty,"boxmin")
                centerUnknownZ(lefty,shell)

                
              } catch {
                //pass
              }
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
              loadingFloorFraming()
              if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
                 centerUnknownZ(floorLeft,lefty)
              }
            if ( Dpath == "carriage/" || Dpath == "highCarriage/" ) {
              translateOn(backty,"boxminz",lefty,"boxminz")
            } 
             if ( Dpath == "leanto/") {
              try {
              //translateOn(front,"boxmin",oldLefty,"boxmin")
              translateOn(front,"boxmaxz",lefty,"boxmaxz") 

             
            } catch {
              //pass
            }
            }
            try {
            scene.remove(oldLefty)
          } catch {
            //pass
          }
            loadingRafterLeft()
            if ( Dpath == "designerCarriage/") {

              loadingStandardMiratec()
              try {

                setTransp(cornerRight,1)
                setTransp(cornerLeft,1)
                translateOn(righty,"boxmaxz",cornerRight,"boxmaxz")
                translateOn(lefty,"boxmaxz",cornerLeft,"boxmaxz")

                translateOn(righty,"boxmax",cornerRight,"boxmin")
                translateOn(lefty,"boxmin",cornerLeft,"boxmax")
              } catch {
                //pass
              }
            }
          if ( (Dpath == "designerCarriage/" || Dpath == "carriage/" || Dpath == "highCarriage/") && FIRSTRUNCARRIAGE == "troue" ) {
             loadingwoodVentCarriage()

            
              if (This_First_Time == true ) {
              addingDoor("FrontDoor")
            }
            
            //translateOn(righty,"boxmaxz",front,"boxmaxz")
          


          }
          }      
          if ( Dpath == "capecode/") {
            translateOn(backty,"boxminz",lefty,"boxminz")
            translateOn(cornersStudBackLeft,"boxmin",lefty,"boxmax")
             try {
              objects.push(lefty)
              objects.splice(objects.indexOf(oldLefty),1)
              scene.remove(oldLefty)
            } catch { 
              //pass
            }
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
            loadingFloorFraming()
            loadingRafterLeft()
            loadingLeftOne()
            //loadingLeft()
          }            
              }
             })   
          
          })         
         });         
       }

function loadingplatcapecode() {
  if ( sizeD == "8wide") {
    pitchD = "8"
  } else if ( sizeD == "10wide") {
    pitchD = "7"
  } else if ( sizeD == "14wide" || sizeD== "12wide") {
    pitchD = "6"
  }
  for ( c of shingleClones) {
    try {
      scene.remove(c)
    } catch {
      //pass
    }
    
  }
  shingleClones = []
  try {
    setTransp(cupola,0)
    setTransp(cupolaRef,0)
  
  } catch {
    //pass
  }
  try {
    setTransp(dripBack,0)
  } catch {
    //pass
  }
  try {
    scene.remove(specialShingles)
    scene.remove(shingleReversed)
    scene.remove(shinglesPrev)
    scene.remove(shingles)
    scene.remove(shinglesReversedPrev)
  } catch {
    //pass
  }
  try {
    scene.remove(overClone)
    scene.remove(specialOverclosing)
    setTransp(overClosing,0)
    setTransp(overClosing2,0)
   } catch {
    //pass
   }
  try {
    scene.remove(cape)

    scene.remove(righty)
    scene.remove(lefty)
    scene.remove(rafterRight)
    scene.remove(rafterLeft)
    scene.remove(shingles)
    scene.remove(specialFront)
    scene.remove(dripoRight)
    scene.remove(dripoLeft)

  } catch {
    //pass
  }
  try {
    for ( c of p2) {
      scene.remove(c)
    }
  } catch {
    //pass
  }
  try {
    for ( c of right) {
      scene.remove(right)
    }
  } catch {
    //pass
  }
  try {
    for ( c of left) {
      scene.remove(left)
    }
  } catch {
    //pass
  }
  loadingRighty()
}

function the_light() {
  alert("In progress")
}


function addingWindModel(el,na,ddtype="none") {
          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousWindow = na.window
          let indPreviousObjects = objects.indexOf(previousWindow)
          let indPrevious = moveListo.indexOf(previousWindow)
          let element 
          if ( highwal == true || Dpath == "capecode/"|| Dpath == "highCarriage/" || Dpath == "designerCarriage/"  || Dpath == "cabana/") {
            element = "windowhigh"
          }  else {
            element = "window1"
          }       
          
          let  path = "ConstantObjects/" + namo + "/"+sizeWDX+NBWDX
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                windowo = node
                objects[indPreviousObjects] = windowo
                scene.add(windowo)
                windowo.name = name
                windowo.shutter = SHUTTER 
                windowo.trim = TRIMSTYLE
                windowo.size = sizeWDX
                windowo.nb = NBWDX
                objects[indPreviousObjects] = windowo
                moveListo[indPrevious] = windowo
               
                if ( namo == "FrontWindow") {
                  centerUnknownX(windowo,previousWindow)
                  //translateOn(previousWindow,"boxminz",windowo,"boxminz")
                } else if (namo == "BackWindow") {
                  centerUnknownX(windowo,previousWindow)
                  //translateOn(previousWindow,"boxminz",windowo,"boxminz")
                } else if ( namo == "LeftWindow") {
                  centerUnknownZ(windowo,previousWindow)
                  //translateOn(previousWindow,"boxmin",windowo,"boxmin")
                } else if (namo == "RightWindow") {
                  centerUnknownZ(windowo,previousWindow)
                  //translateOn(previousWindow,"boxmin",windowo,"boxmin")
                }
                
                scene.remove(previousWindow)
                na.window = windowo
                selectWindow(document.getElementById("dropingobj").innerHTML)

                if ( ddtype == "changeAll") {
                  if ( sizeWDX == "2239/" || sizeWDX == "3039/") {
                  //addingShutModel("None",na,"changeAll")
                  if ( typeof(na.trim) == 'object') {
                  scene.remove(na.trim)
                  na.trim = "none"
                  windowo.trim = "none"
                }
                  if ( typeof(na.shutter) == "object"){
                  scene.remove(na.shutter)
                  na.shutter = "none"
                  windowo.shutter = "none"
                }
                  addingRaftModel("rafter",na,"changeAll")

                  } else {
                  addingShutModel("Standard Shutters",na,"changeAll")
                }
              } else if ( ddtype == "high") {
                addingRaftModel("rafter",na)
              }

            }
             })          

 })          
         });

}

function addingRaftModel(el,na,ddtype = "none") {
          
          let element
          if (highwal == true || Dpath == "capecode/"|| Dpath == "highCarriage/" || Dpath == "designerCarriage/"  || Dpath == "cabana/") {
            element = "rafterhigh"
          } else {
            element = "rafter"
          }
          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          
          let previousRaft = na.raft

          let path = "ConstantObjects/" + namo + "/"+sizeWDX+NBWDX
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

                if ( ddtype == "changeAll") {

                  let side = namo.replace("Window", "")
                  possibleLayout(side)
                  
                if (objectsPushed.includes(name) == false) {
                      alert("No more space in wall for this type of window")
                  }
                }
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                raftero = node
                raftero.name = element
                scene.add(raftero)

                scene.remove(previousRaft)
                na.raft = raftero
                na.translate()

            }
             })          

 })          
         });

}

function addingShutModel(el,na,ddtype = "none") {
        

          if ( el == "None") {
     
            scene.remove(na.shutter)
            na.shutter = "none"
            SHUTTER = "None"
           
            if ( TRIMSTYLE == "None" && ddtype == "none") {
            TRIMSTYLE = "stdStraight"
            addingTrimModel("Trim Std Straight",na)
          }
          } else {

          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let element = el

          let previousShutter = na.shutter
          let previousWindow = na.window
          let previousTrim = na.trim
         
          if ( el == "Standard Shutters") {
            element = "woodstd"
            SHUTTER = "woodstd"
          } else if ( el == "Shutters Z Style") {
            element = "zstyle"
            SHUTTER = "zstyle"
          } else if ( el == "Shutters Classic Wide") {
            element = "classicWide"
            SHUTTER = "classicWide"
          } else if ( el == "Vinyl standard") {
            element = "shutterStandard"
            SHUTTER = "shutterStandard"
          } else if ( el == "Vinyl Raised Panel") {
            element = "raisedPanel"
            SHUTTER = "raisedPanel"
          } else if ( el == "XL Raised (higher windows only)" &&  (sizeWDX == "3036/" || sizeWDX == "2436/" ))  {
            element = "XLRaised"
            SHUTTER = "XLRaised"

          } else if ( el == "XL Raised (higher windows only)" &&  (sizeWDX != "3036/" && sizeWDX != "2436/" ))  {
            alert("XL Raised is only avalaible for 30x36 and 24x36 windows")
            element = "classicWide"
            SHUTTER = "classicWide"
          }
          
           else {

            element = SHUTTER
          }
          if ( TRIMSTYLE != "None" ){ 
           
            element = TRIMSTYLE + "/" + element
          }
          if ( SHUTTER != "None") {

          var path = "ConstantObjects/" + namo + "/"+sizeWDX+NBWDX
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                shuttero = node
                scene.add(shuttero)
                shuttero.name = name+"shutter"

                scene.remove(previousShutter)
                na.shutter = shuttero
                na.window.shutter = element
               
                selectWindow(document.getElementById("dropingobj").innerHTML)

                if ( ddtype == "changeAll" ) {
                 
                  if ( typeof(na.trim == "object")) {
                    scene.remove(na.trim)
                    na.trim = "none"

                  } 
                  addingRaftModel(NBWDX,na,"changeAll")
                }
                 na.translate()
            }
             })          
       

 })          
         });
}
}
}

     function copyMaterial (_material) {
        var newMaterial = new THREE.MeshLambertMaterial();
        for (var p in _material) {
            if (_material.hasOwnProperty(p) && p !== "id") {
                var obj = _material[p];
                newMaterial[p] = obj;
            }
        }
        return newMaterial;
    }   

function addingHingeModel(el,na,dtype = "none") {

          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousHinge = na.hinge
          let theDoor = na.door
          let theTrim = na.trim

          let element = el
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          if ( na.door.model == "steel/")  {
            if ( na.door.type != "door") {
              path = "ConstantObjects/" + namo +"/" + "fiber/"+ DOORSIZE
            }    
            }

          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
          
          }
          
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                var ohinge = node
                scene.add(ohinge)
                ohinge.name = name+"hinge"

                scene.remove(previousHinge)
                na.hinge = ohinge
                na.door.hinge = doorHinge
                na.translate()
                selectOne(document.getElementById("dropingobj").innerHTML) 
                  if ( dtype == "ddtype") {
                  let side = namo.replace("Door", "")
                  possibleLayout(side)
                  if (objectsPushed.includes(name) == false) {
                      alert("No more space in wall for this type of door")
                      try {
                        scene.remove(ohinge)
                      } catch {
                        //pass
                      }
                  }
                } 
}
})              
})          
});
}


function addingSwitchedHingeModel(el,na,dtype = "none") {

          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousHinge = na.hinge
          let theDoor = na.door
          let theTrim = na.trim

          let element = el
          let path
          if ( dtype == "hingeReversed") {
           path = "ConstantObjects/" + namo + "/" + DOORSTYLE 
            if ( na.door.model == "steel/")  {
            if ( na.door.type != "door") {
              path = "ConstantObjects/" + namo +"/" + "fiber/"
            }    
            }
         } else {
          path = "ConstantObjects/" + namo + "/" + DOORSTYLE + DOORSIZE
           if ( na.door.model == "steel/")  {
            if ( na.door.type != "door") {
              path = "ConstantObjects/" + namo +"/" + "fiber/"+ DOORSIZE
            }    
            }
          if ( na.door.model == "double/") {
             path = "ConstantObjects/" + namo + "/" + DOORSTYLEDOUBLE + DOORSIZEDOUBLE
          }

         }

          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
      
          }
          
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                var ohinge = node
                scene.add(ohinge)
                 if ( dtype == "hingeReversed") {
                ohinge.name = "hingeReversed"
              } else {
                ohinge.name = name + "ohinge"
              }

                scene.remove(previousHinge)
                na.hinge = ohinge
                na.door.hinge = doorHinge
                if ( na.door.model != "standard/") {
                na.translate()
              }
                selectOne(document.getElementById("dropingobj").innerHTML) 
             
                addingSwitchedClosedModel("close",na,dtype)
             
}
})              
})          
});
}


function addingSwitchedClosedModel(el,na,dtype = "none") {

          let name = na.name
          let namo = name.replace(/[0-9]/g, '');

          let previousClose
          if ( na.door.model != "standard/") {
          previousClose = na.close
        } else {
          previousClose = na.close2
        }
          let theDoor = na.door
          let theTrim = na.trim

          let element = el
          let path
          if ( dtype == "hingeReversed") {
           path = "ConstantObjects/" + namo + "/"
           element = "newClose"
         } else {
          path = "ConstantObjects/" + namo + "/" + DOORSTYLE + DOORSIZE
          if ( na.door.model == "standard/" || na.door.model == "double/") {

            path = "ConstantObjects/" + namo + "/standard/"
            element = "close2"
          }
         }
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
      
          }
          
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                var closex = node
                scene.add(closex)
                 if ( dtype == "hingeReversed") {
                closex.name = "closeReversed"
              } else {
                closex.name = name + "close"
              }

                scene.remove(previousClose)
                if ( na.door.model != "standard/") {
                na.close = closex
              } else {
                na.close2 = closex
              }
                na.door.close = doorClose
                na.translate()
                selectOne(document.getElementById("dropingobj").innerHTML) 
                
}
})              
})          
});
}


function addingTrimDModel(el,na,dtype ="none") {
          
          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousTrim = na.trim

          let element = el

            
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

          if ( dtype == "ddtype") {
            addingHingeModel(doorHinge,na,"ddtype")
          }
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                var trimx = node

                scene.add(trimx)
            

            na.trim = trimx
            na.door.trim = doorTrim
            scene.remove(previousTrim)

            if ( dtype != "standard/") {
            na.translate() 
          }

            if ( typeof(na.x) == "object") {
                  scene.remove(na.x)
                  na.door.x = "none"
                }
              if ( dtype != "standard") {
            selectOne(document.getElementById("dropingobj").innerHTML)
          } else {
            addingClose2(na.name)
            selectOne(document.getElementById("dropingobj").innerHTML)
          }

           if ( na.door.type == "designer" && na.door.model== "standard/") {
            try {
              scene.remove(na.transom)

              na.transom = "none"
            } catch {
              //pass
            }
            addingDesignerStandardTrim("trimStd1",na)
           }
            }
            })          
            })          
         });
        }


function addingTransomModel(el,na,dtype ="none") {
          
          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          //let previousTrim = na.trim
          let previousTransom = na.transom

          let element = DOORSIZE.replace("/","")
            
          let path = "ConstantObjects/" + namo +"/" + "transom/" 
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

          if ( dtype == "ddtype") {
            addingHingeModel(doorHinge,na,"ddtype")
          }
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                var transomx = node

                scene.add(transomx)
            

            na.transom = transomx
            na.door.transom = "TRANSOM"
            scene.remove(previousTransom)

            translateOn(na.door,"boxmaxz",na.transom,"boxminz")
            centerUnknownX(na.transom,na.door)

           
           
            na.translate() 
          
            try {
              if ( na.door.x == "trim45") {
                scene.remove(na.x)
                na.door.x = ""
              }
            } catch {
              //pass
            }

            }
            })          
            })          
         });

        }

function addingDesignerStandardTrim(el,na) {
         
          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let this_trim = na.trim

          let element = el
            
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

          
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                na.designerTrim = node

                scene.add(na.designerTrim)
                try {
                  na.translate()
                } catch {
                  //pass
                }
                

            selectOne(document.getElementById("dropingobj").innerHTML)
          
          

            }
            })          
            })          
         });

}
function addingRaftDModel(el,na,dtype = "none") {

          let name = na.name
          var namo = name.replace(/[0-9]/g, '');
          let previousTrim = na.raft          
          let theClose = na.close 
          let theDoor = na.door
         
          let element = el
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
         
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
         
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                var raftd = node
                raftd.name = name+"raftd"
                scene.add(raftd)
      
                scene.remove(previousTrim)
                na.raft = raftd
                na.translate()  

                if (dtype == "ddtype") {
                  addingTrimDModel(doorTrim,na,"ddtype")
                  }
             }
             })              
        })          
         });
}

function addingDoorModel(el,na,dtype="none") {

          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousDoor = na.door
          let indPrevious = moveListo.indexOf(previousDoor)
          let obi = objects.indexOf(previousDoor)
          let element = el
          
            if ( el == "designer" || el == "wide") {
            element = "door"
          }

          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          if ( (na.door.model == "steel/" || na.door.model == "fiber/") && el == "15lite" && na.door.size == "30/") {
            path = path = "ConstantObjects/" + namo +"/" + DOORSTYLE + "36/"
          } else if ( (na.door.model == "steel/" || na.door.model == "fiber/") && el == "15lite" && na.door.size == "5/") {
            path = path = "ConstantObjects/" + namo +"/" + DOORSTYLE + "6/"
          } else if ( (na.door.model == "steel/" || na.door.model == "fiber/") && (el == "15lite" || el == "9lite" || el == "11lite" || el == "4lite") && na.door.size == "4/") {
            path = path = "ConstantObjects/" + namo +"/" + DOORSTYLE + "6/"
          }
         
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
          
          }

          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                var doorx = node
                scene.add(doorx)
                doorx.name = name
                doorx.model = DOORSTYLE
                doorx.size = DOORSIZE 
                doorx.type = DOORTYPE 
                doorx.trim = doorTrim 
                doorx.hinge = doorHinge
                //doorx.ramp = "none"

                objects[obi] = doorx


                if ( na.door.model == "steel/" || na.door.model == "fiber/" || na.door.model == "carriage/") {
                  try {
                        
                  scene.remove(na.close2)

                } catch {
                  //pass
                }
                }


                moveListo[indPrevious] = doorx
                 if ( (na.door.model == "steel/" || na.door.model == "fiber/") && el == "15lite" && (na.door.size == "30/" || na.door.size == "5/")) {
                if (namo == "FrontDoor" || namo == "BackDoor") {
                  doorx.scale.x = 0.85
                } else if ( namo == "RightDoor" || namo == "LeftDoor") {
                  doorx.scale.z = 0.85
                }
                } else if ( (na.door.model == "steel/" || na.door.model == "fiber/") && (el == "15lite" || el == "9lite" || el == "11lite" || el == "4lite") && na.door.size == "4/") {
                  if (namo == "FrontDoor" || namo == "BackDoor") {
                  doorx.scale.x = 0.8
                } else if ( namo == "RightDoor" || namo == "LeftDoor") {
                  doorx.scale.z = 0.8
                }
                }
               
              

                if ( namo == "FrontDoor") {
              centerUnknownX(doorx,previousDoor)
                
            }

              if ( namo == "RightDoor") {
                
                centerUnknownZ(doorx,previousDoor)
            
              }
              if ( namo == "LeftDoor") {
            
                centerUnknownZ(doorx,previousDoor)
               
              }
              if ( namo == "BackDoor") {
                centerUnknownX(doorx,previousDoor)
               }

                na.door = doorx
                scene.remove(previousDoor)
                if ( doorx.model != "standard/") {
                na.translate() 
              }
                selectOne(document.getElementById("dropingobj").innerHTML) 
                if ( typeof(na.x) == "object") {
                  scene.remove(na.x)
                  na.x = "none"
                }
                if ( typeof(na.ramp) == "object") {
               
                addingRamp(na,na.ramp.path)
              
              }
               try {
                    scene.remove(na.transom)
                    na.transom = "none"
                  } catch {
                    //pass
                  }
              if (dtype == "ddtype") {
              if ( doorx.model == "standard/" || doorx.model == "carriage/") {
                  
                addingCloseStandard(doorClose,na,"ddtype")
                 try {
                 
                    applyTexture("Textures/"+myText,repeatSiding,rotateSiding,mySiding)
                  
                } catch {
                  //pass
                }
                
              } else {

            //addingRaftDModel("rafter", na,"ddtype") 
            addingCloseStandard("close",na,"ddtype")  
            }        
              } else {
                if (doorx.model == "standard/") {

                  addingCloseStandard(doorClose,na,"ddtype")
                  //addingClose2(name)
                    try {
                 
                    applyTexture("Textures/"+myText,repeatSiding,rotateSiding,mySiding)
                 
                } catch {
                  //pass
                }
                  
                } else if ( doorx.model == "steel/" ) {
                  //addingHingeModel(na.door.hinge,na)
                  addingSwitchedHingeModel(na.door.hinge,na)
                }
              }
            }
             })              
          })          
         });
        }

function addingCloseStandard(el,na,dtype="none",trim="none") {
          let name = na.name
          if ( na.model == "standard/" && el == "None") {
            //pass
             if ( trim != "none") {
                  addingTrimDModel(trim,na)
                }
          } else {
          let namo = name.replace(/[0-9]/g, '');
          let previousClose = na.close

          let element = el
            
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

          if ( dtype == "ddtype") {
            addingRaftDModel("rafter", na,"ddtype")   
          }
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                var closex = node
        

                scene.add(closex)
            
                na.close = closex
                na.door.close = doorClose

                scene.remove(previousClose)
                if ( typeof(na.x) == "object") {
                  scene.remove(na.x)
                  na.door.x = "none"
                }
                //na.translate() 
                if ( trim == "none") {
                addingClose2(na.name)
                selectOne(document.getElementById("dropingobj").innerHTML)
              }
                if ( trim != "none") {
                  addingTrimDModel(trim,na,"standard")
                }
            }
            })          
            })          
         });
}
        }

function addingXStandard(el,na,dtype="none") {


          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousX = na.x
          let element

          switch(el) {
            case "yup":
              if (na.door.type == "door") {
                element = "xStandard"
              } else if (na.door.type == "wide") {
                element = "xWide"
              } else if (na.door.type == "designer") {
                element = "xDesigner"
              }
              break;
            case "trim45":

              element = "trim45"
          
            
          }
       
         
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

          if ( dtype == "ddtype") {
            addingRaftDModel("rafter", na,"ddtype")   
          }
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                var Xdoor = node
        

                scene.add(Xdoor)
            
                na.x = Xdoor
                na.door.x = element
                try {
                scene.remove(previousX)
              } catch {
                console.log("er")
              }
              try {
                scene.remove(na.transom)
                na.door.transom = "None"
              } catch {
                //pass
              }

                na.translate() 
                selectOne(document.getElementById("dropingobj").innerHTML)
                if ( element == "trim45" && na.door.close == "trimCurved") {
                  doorTrim = "trimStd1"
                  doorClose = "trimStd2"
                  close = "trimStd2"
                  trim = "trimStd1"
                  replaceCloseStandard("trimStd2",na)
                }
            }
            })          
            })          
         });

        }

function replaceCloseStandard(el,na) {
          let name = na.name
         
          let namo = name.replace(/[0-9]/g, '');
          let previousClose = na.close

          let element = el
            
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLE + DOORSIZE
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

         
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                var closex = node
        

                scene.add(closex)
            
                na.close = closex
                na.door.close = doorClose

                scene.remove(previousClose)
               
                na.translate()
               
            }
            })          
            })          
         });

        }

function addingTrimModel(el,na,dtype="none") {
            if ( el == "None") {
              scene.remove(na.trim)
              na.trim = "none"
              SHUTTER = "woodstd"
              TRIMSTYLE = "None"
              addingShutModel("Standard Shutters",na)
            } else {
                let name = na.name
                let namo = name.replace(/[0-9]/g, '');
                
                let element = el
                SHUTTER = "None"

                let previousTrim = na.trim
                let previousShutter = na.shutter

               
          if ( el == "Aluminium") {
            element = "aluminium"
            TRIMSTYLE = "aluminium"
          } else if ( el == "Aluminium Wide") {
            element = "aluminiumWide"
            TRIMSTYLE = "aluminiumWide"
          } else if ( el == "Trim Std Straight") {
            element = "stdStraight"
            TRIMSTYLE = "stdStraight"
          } else if ( el == "Trim Std Curved") {
            element = "stdCurved"
            TRIMSTYLE = "stdCurved"
          } else if ( el == "Trim Wide Curved") {
            element = "wideCurved"
            TRIMSTYLE = "wideCurved"
          }
           else if ( el == "Trim Wide Straight") {
            element = "wideStraight"
            TRIMSTYLE = "wideStraight"
          } else {
            element = TRIMSTYLE
          }

          let path = "ConstantObjects/" + namo +"/"+sizeWDX+NBWDX
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                trimdo = node
                scene.add(trimdo)
                trimdo.name = name+"trim"
                if (typeof(na.shutter) == "object") {
                  scene.remove(na.shutter)
                  na.shutter = "none"
                }
                scene.remove(previousTrim)
                na.trim = trimdo
                na.window.trim = element
                na.window.shutter = "none"
                na.translate()
                selectWindow(document.getElementById("dropingobj").innerHTML)
                         
            }
             })             
 })          
         });
        }

}






function addingWindowBox(name=[document.getElementById("dropingobj").innerHTML],state) {
          let objj = name
          if ( state == false ) {
            try {
              scene.remove(objj.box)
              objj.box = "none"
            } catch {
              //pass
            }
          } else {
          var node,mesh,materials,shutter1x,state
          
          var name = name.name
          let namo = name.replace(/[0-9]/g, '');
          let path = "ConstantObjects/" + namo + "/" 
          let element = "boxe"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                boxo = node
                
                
                scene.add(boxo)
                try {
                  scene.remove(objj.box)
                } catch {
                  //pass
                }
                objj.box = boxo
                translateBox(objj)
              }
             })   

          })          
         });  
     }        
      }

function translateBox(varr) {
  
  let side = varr.name.replace(/[0-9]/g,'')
  side = side.replace("Window","")
  let pos1, length2
  let this_ref = object_reference(varr)
  if ( typeof(varr.trim) == "object") {
    this_ref = varr.trim
  }
  translateOn(this_ref,"boxminy",varr.box,"boxmaxy",-0.03)
  switch(side) {
    case "Front":
      translateOn(varr.window,"boxminz",varr.box,"boxminz")
      centerUnknownX(varr.box,varr.window)
      //pos1 = getPos(varr.box,"boxmin")
      //length2 = getPos(varr.window,"boxlength")

       scaleBetween2Objects(varr.box,varr.window,"boxmin",varr.window,"boxmax","x")
       /*
      if (getPos(varr.box,"boxlength") < length2) {

      while ( getPos(varr.box,"boxlength")< length2) {
        varr.box.scale.x+= 0.02
        varr.box.translateX(pos1 - getPos(varr.box,"boxmin"))
        centerUnknownX(varr.box,varr.window)
      }
    } else {
      while ( getPos(varr.box,"boxlength") > length2 ) {

        varr.box.scale.x-= 0.02
        varr.box.translateX(pos1 - getPos(varr.box,"boxmin"))
        centerUnknownX(varr.box,varr.window)
      }
    }
    */
    break;
    case "Back":
      translateOn(varr.window,"boxmaxz",varr.box,"boxmaxz")
      centerUnknownX(varr.box,varr.window)
      //pos1 = getPos(varr.box,"boxmin")
      //length2 = getPos(varr.window,"boxlength")
      scaleBetween2Objects(varr.box,varr.window,"boxmin",varr.window,"boxmax","x")
      /*
         if (getPos(varr.box,"boxlength") < length2) {
      while ( getPos(varr.box,"boxlength")< length2) {
        varr.box.scale.x+= 0.02
        varr.box.translateX(pos1 - getPos(varr.box,"boxmin"))
        centerUnknownX(varr.box,varr.window)
      }
    } else {
      while ( getPos(varr.box,"boxlength") > length2 ) {
         varr.box.scale.x-= 0.02
        varr.box.translateX(pos1 - getPos(varr.box,"boxmin"))
        centerUnknownX(varr.box,varr.window)
      }
    }
    */
    break;
    case "Left":
      translateOn(varr.window,"boxmax",varr.box,"boxmax")
      centerUnknownZ(varr.box,varr.window)
      //pos1 = getPos(varr.box,"boxminz")
      //length2 = getPos(varr.window,"boxlengthz")
      scaleBetween2Objects(varr.box,varr.window,"boxminz",varr.window,"boxmaxz","z")
      /*
         if (getPos(varr.box,"boxlengthz") < length2) {
      while ( getPos(varr.box,"boxlengthz")< length2) {
        varr.box.scale.z+= 0.02
        varr.box.translateZ(pos1 - getPos(varr.box,"boxminz"))
        centerUnknownZ(varr.box,varr.window)
      }
    } else {
      while ( getPos(varr.box,"boxlength") > length2 ) {
         varr.box.scale.x-= 0.02
        varr.box.translateX(pos1 - getPos(varr.box,"boxmin"))
        centerUnknownX(varr.box,varr.window)
      }
    }
    */
    break;
    case "Right":
      translateOn(varr.window,"boxmin",varr.box,"boxmin")
      centerUnknownZ(varr.box,varr.window)
      scaleBetween2Objects(varr.box,varr.window,"boxminz",varr.window,"boxmaxz","z")
      //pos1 = getPos(varr.box,"boxminz")
      //length2 = getPos(varr.window,"boxlengthz")
      /*
         if (getPos(varr.box,"boxlengthz") < length2) {
      while ( getPos(varr.box,"boxlengthz")< length2) {
        varr.box.scale.z+= 0.02
        varr.box.translateZ(pos1 - getPos(varr.box,"boxminz"))
        centerUnknownZ(varr.box,varr.window)
      }
    } else {
      while ( getPos(varr.box,"boxlength") > length2 ) {
         varr.box.scale.x-= 0.02
        varr.box.translateX(pos1 - getPos(varr.box,"boxmin"))
        centerUnknownX(varr.box,varr.window)
      }
    }
    */
    break;
  }
}

function updateBoxSize(name,ob) {


    
          for (i = 0;i<moveListo.length;i++) {
            try {

              if ( moveListo[i].includes(name)) {
                if (name.includes("Front") || name.includes("Back")) {
                posw = parseFloat(getPos(moveListo[i+1],"boxmin"))
                posb = parseFloat(getPos(ob,"boxmin"))
                
              }else if ( name.includes("Right") || name.includes("Left")) {
                posw = parseFloat(getPos(moveListo[i+1],"boxminz"))
                posb = parseFloat(getPos(ob,"boxminz"))
                
              }
              }
            } catch {
              console.log("s")
            }
          }

          
           if (name.includes("Front") || name.includes("Back")) {
          ob.translateX(posw-posb)
      
        } else if (name.includes("Right") || name.includes("Left")){
          ob.translateZ(posw-posb)
        }
        setTimeout(boxscal,1,name)
}

function boxscal(name) {

 try {
    if (name.includes("Front")) {

      boxes.scale.z = ZZ
     

  } else if (name.includes("Back")) {
    boxes.translateZ(reversedResult22)

  } else if (name.includes("Right")) {
 
    boxes.translateX(resultreverse22)

  } else if (name.includes("Left")) {
    boxes.translateX(resultcorner22)
  }
} catch {
  console.log("fd")
}
  try {
            setTimeout(trimColor,150,TRIMCOLOR) 
            } catch {
              console.log("d")
            }  

            try {
            setTimeout(sidingColor,150,SIDINGCOLOR) 
            } catch {
              console.log("d")
            }  
}


function deleteVentilation() {
  ventStyle = "None"
        try {
          scene.remove(vents)
          scene.remove(ventsRight)

        } catch {
          console.log("erno")
        }

        try {
          scene.remove(vent)
        } catch {
          console.log("erno")
        }
}

function roofVents() {
  ventStyle = "roof vents"
}

function loadingVentilation(ventsss) {
        ventStyle = ventsss
       var ventsss = ventsss
      
        try {
          scene.remove(vents)
          scene.remove(ventsRight)

        } catch {
          console.log("erno")
        }
        try {
          scene.remove(vent)
        } catch {
          console.log("erno")
        }
        var numberss = sizeD.match(/\d+/g).map(Number) - 2;
        var element = ventsss
          var path = "ConstantObjects/" +"materials/"
          var element = element
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                vents = node

                centerUnknownZ(vents,lefty)
                
                var w = getPos(lefty, "boxmin")
                var z = getPos(vents,"boxmax")
                vents.translateX(w-z)
               
                scene.add(vents)

                ventsRight = vents.clone()
                ventsRight.rotateY(Math.PI)

                var w = getPos(righty, "boxmax")
                var z = getPos(ventsRight,"boxmin")
                ventsRight.translateX(-(w-z))
                centerObjectsReversed(ventsRight)
                centerUnknownY(ventsRight,plat2)
                centerUnknownY(vents,plat2)
                vents.translateY(-0.07)
                ventsRight.translateY(-0.07)
                if ( Dpath == "Shed2/" || Dpath == "highbarn/" || Dpath == "designerCarriage/" || Dpath == "highCarriage/" || Dpath == "carriage/") {
                  translateOn(lefty,"boxmaxy",vents,"boxmaxy",-0.25)
                  translateOn(righty,"boxmaxy",ventsRight,"boxmaxy",-0.25)
                } else if ( Dpath == "minibarn/" || Dpath == "vinylbarn/") {
                   translateOn(lefty,"boxmaxy",vents,"boxmaxy",-0.068)
                  translateOn(righty,"boxmaxy",ventsRight,"boxmaxy",-0.068)
                }
                scene.add(ventsRight)

                if ( Dpath == "leanto/") {
                  translateOn(lefty,"boxmaxy",vents,"boxmaxy",-0.24)
                  translateOn(righty,"boxmaxy",ventsRight,"boxmaxy",-0.24)
                  translateOn(lefty,"boxminz",vents,"boxminz",0.093)

                 let poisis1 = getPos(righty,"boxminz")
                 let poisis2 = getPos(ventsRight,"boxminz")
                 ventsRight.translateZ(-(poisis1-poisis2))
                 ventsRight.translateZ(-0.093)
                  //vents.translateY(-0.23)
                  //ventsRight.translateY(-0.23)
                }
                if ( Dpath == "designerCarriage/" || Dpath == "carriage/" || Dpath == "highCarriage/") {
                  try {
                      if ( ZZ == 1) {
                  woodRight.position.z = 0.491
                   wood.position.z = 0.928
                } else if ( ZZ == 0.75 ) {
                  woodRight.position.z = 0.420
                  wood.position.z = 0.880
                } else if ( ZZ == 1.25) {
                  if ( Dpath != "designerCarriage/") {
                  wood.position.z = 0.992
                   woodRight.position.z = 0.533
                 } else {
                  wood.position.z = 1.025
                  woodRight.position.z = 0.585
                 }

                } else if ( ZZ == 1.5) {
                  if ( Dpath != "designerCarriage/") {
                  woodRight.position.z = 0.574
                  wood.position.z = 1.0514
                } else {
                  woodRight.position.z = 0.65
                  wood.position.z = 1.0848
                }
                } else if ( ZZ == 1.75) {
                  if ( Dpath != "designerCarriage/") {
                  wood.position.z = 1.0854
                  woodRight.position.z = 0.646
                  } else {
                    woodRight.position.z = 0.729
                    wood.position.z = 1.168
                  }
                }
                    centerUnknownZ(vents,wood)
                    centerRafterReversedZ(ventsRight,woodRight)
                  } catch {
                    //pass
                  }
                }
              }
             })          
          })         
         });         
       } 


function deleteVentilationCabana() {
  try {
    scene.remove(ventsBack)
    scene.remove(ventsBack2)
  } catch {
    //pass
  }
}
function addventCabana(ventsss = ventsModel) {       
       
          try {
            scene.remove(ventsBack)
            scene.remove(ventsBack2)
          } catch {
            //pass
          }
          //var numberss = sizeD.match(/\d+/g).map(Number) - 2;
          let element = ventsss + "back"
          var path = "ConstantObjects/" +"materials/"
         
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                ventsBack = node
                translateOn(backty,"boxminz",ventsBack,"boxmaxz")
               
                scene.add(ventsBack) 

                translateOn(backty,"boxmaxy",ventsBack,"boxmaxy",-0.2)
                translateOn(backty,"boxmax",ventsBack,"boxmax",-0.5)

                ventsBack2 = ventsBack.clone()
                translateOn(backty,"boxmin",ventsBack2,"boxmin", 0.5)
                scene.add(ventsBack2)

              }
             })          
          })         
         });         
       } 


function loadingAzekCurved() {
    try {
      scene.remove(ventsRight)
      scene.remove(vents)
      ventsRight = ""
    } catch {
      console.log("erno")
    }
          var path = "ConstantObjects/" + "ventilation/"
          var element = "azekCurved"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl", pp = function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          aa = objLoader.load(path + element + ".obj",kkk = function(mesh){
            
          kk = mesh.traverse(cc = function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                vents = node
                //window2.material[4].color.set(0x000000)
                try {
                centerUnknownY(vents,plat2)
                centerUnknownY(vents,plat2)
                vents.translateY(-0.07) 
                if ( Dpath == "leanto/") {
                  vents.translateY(-0.23)
                }
              } catch {
                console.log("erno")
              }      
              }
             })   
          try {
            scene.remove(vent)  
          } catch {
            console.log("no vent")
          }
            scene.add(mesh) 
            vent = mesh
            updateSizeVent()
                 
          })         
         });         
       } 

function loadingAzekWood() {
   try {
      scene.remove(ventsRight)
      scene.remove(vents)
      ventsRight = ""
    } catch {
      console.log("erno")
    }
          var path = "ConstantObjects/" + "ventilation/"
          var element = "wood"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl", pp = function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          aa = objLoader.load(path + element + ".obj",kkk = function(mesh){
            
          kk = mesh.traverse(cc = function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                vents = node
                //window2.material[4].color.set(0x000000)
                try {
                centerUnknownY(vents,plat2)
                centerUnknownY(vents,plat2)
                vents.translateY(-0.07) 
                if ( Dpath == "leanto/") {
                  vents.translateY(-0.23)
                }
              } catch {
                console.log("erno")
              }    
              }
             })   
             try {
            scene.remove(vent)  
          } catch {
            console.log("no vent")
          }  
            scene.add(mesh) 
            vent = mesh
            updateSizeVent()
                 
          })         
         });         
       } 


function loadingAzekTrim() {
   try {
      scene.remove(ventsRight)
      scene.remove(vents)
      ventsRight = ""
    } catch {
      console.log("erno")
    }
          var path = "ConstantObjects/" + "ventilation/"
          var element = "azekTrim"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl", pp = function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          aa = objLoader.load(path + element + ".obj",kkk = function(mesh){
            
          kk = mesh.traverse(cc = function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                vents = node
                //window2.material[4].color.set(0x000000)
                try {
                centerUnknownY(vents,plat2)
                centerUnknownY(vents,plat2)
                vents.translateY(-0.07) 
                if ( Dpath == "leanto/") {
                  vents.translateY(-0.23)
                }
              } catch {
                console.log("erno")
              }
              }
             })   
             try {
            scene.remove(vent)  
          } catch {
            console.log("no vent")
          }
            scene.add(mesh) 
            vent = mesh
            updateSizeVent()
                 
          })         
         });         
       } 
function loadingPaintedMetal() {
   try {
      scene.remove(ventsRight)
      scene.remove(vents)
      ventsRight = ""
    } catch {
      console.log("erno")
    }
          var path = "ConstantObjects/" + "ventilation/"
          var element = "paintedMetal"
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl", pp = function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          aa = objLoader.load(path + element + ".obj",kkk = function(mesh){
            
          kk = mesh.traverse(cc = function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                vents = node

                //window2.material[4].color.set(0x000000)
                try {
                centerUnknownY(vents,plat2)
                centerUnknownY(vents,plat2)
                vents.translateY(-0.07) 
                if ( Dpath == "leanto/") {
                  vents.translateY(-0.23)
                }
              } catch {
                console.log("erno")
              }
              }
             })   

            try {
            scene.remove(vent)  
          } catch {
            console.log("no vent")
          }
            scene.add(mesh)   
            vent = mesh   
            updateSizeVent()
           // updateSizePainted()     
          })         
         });         
       } 




// ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// 
 function addingWindow1(name,element1="window1",element2=SHUTTER,element3="rafter",element4=TRIMSTYLE,state="default") {     // 6 materials
          

          var namo = name.replace(/[0-9]/g, '');
          var path = "ConstantObjects/" + namo + "/" +sizeWDX+NBWDX

          
          var element
          if ( highwal == true || Dpath == "capecode/"|| Dpath == "highCarriage/" || (Dpath  == "carriage/" && name.includes("Front")) || Dpath == "designerCarriage/"  || Dpath == "cabana/"){
            element = "windowhigh"
          } else {
          element = element1
      }

          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl", pp = function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          aa = objLoader.load(path + element + ".obj",kkk = function(mesh){
            
          kk = mesh.traverse(cc = function(node) {
            
              if ( node instanceof THREE.Mesh) {

                node.castShadow = false;
                node.receiveShadow = false;
                window1x = node
                
                name = name + windowPushedFront
                scene.add(window1x)
                window1x.name = name
                window1x.size = sizeWDX 
                window1x.nb = NBWDX
                window1x.shutter = element2
                window1x.trim = element4
                
                let createDict = name + "Dict = {} "
                let addWindow = name + "Dict.window = window1x" 
                let addName = name + "Dict.name = name" 
                let temporaryDict = "listObj.push("+name+"Dict)"
                let tempTrans = name + "Dict.translate = function() {translateWindow(this)}"
                
                eval(createDict) 
                eval(addWindow)
                eval(addName)
                eval(temporaryDict)
                eval(tempTrans)
                //add translate

                windowPushedFront += 1
              
                moveListo.push(name,window1x)
                objects.push(window1x)   
                objectsPushed.push(name)

              }
             })  
            
            addingShutter1(name,element2,element3,element4,state)
                  
          })         
         });         
       };


function addingShutter1(name,element2,element3,element4,state) {
  if ( SHUTTER != "None") {
          var node,mesh,materials,shutter1x,state
          var name = name 
          var namo = name.replace(/[0-9]/g, '');
          var path = "ConstantObjects/" + namo +"/"+sizeWDX+NBWDX
          var element = element2
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {

                node.castShadow = false;
                node.receiveShadow = false;
                shutter1x = node
                shutter1x.name = name+"shutter"
                scene.add(shutter1x)
                
                let addShutter = name + "Dict.shutter = shutter1x"
                eval(addShutter)
               
              }
             })         
            addingTrimStyle(name,element3,element4,state)
          })          
         });  
         } else {
            //pass
          

             let addShutter = name + "Dict.shutter = 'none'"
            eval(addShutter)
            addingTrimStyle(name,element3,element4,state)
          
         }       
       };

function addingTrimStyle(name,element3,element4,state) {
          if (TRIMSTYLE != "None") {
          var node,mesh,materials,shutter1x,state
          var name = name 
          var namo = name.replace(/[0-9]/g, '');
          var path = "ConstantObjects/" + namo + "/" +sizeWDX+NBWDX
          var element = element4
          var mtlLoader = new THREE.MTLLoader(manager);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                trimdo = node
                trimdo.name = name+"trim"
                
                scene.add(trimdo)
                let addTrim = name + "Dict.trim = trimdo"
                eval(addTrim)
               
              }
             })   
       
     
            
            addingWindowRaftLeft(name,element3,element4,state)
        
          })          
         });  
         } else {
            let addTrim = name + "Dict.trim = 'none'"
            eval(addTrim)
            addingWindowRaftLeft(name,element3,element4,state)
         }       
       };

function addingWindowRaftLeft(name,element3,element4,state) {
          
          var node,mesh,materials,windowRaftLeftx,soo
          var state

          var name = name
          var namo = name.replace(/[0-9]/g, '');
        
          var path = "ConstantObjects/" + namo +"/"+sizeWDX+NBWDX
          var element
          if ( highwal == true  || Dpath == "capecode/" || Dpath == "highCarriage/" || (Dpath == "carriage/" && name.includes("Front")) || Dpath == "designerCarriage/"  || Dpath == "cabana/") {
            element = "rafterhigh"
          } else {
            element = element3
          }
          var managerWindow = new THREE.LoadingManager();

          
          managerWindow.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
        
          //alert(this.state)
          
          if (name.includes("FrontWindow3")) {
         
              soo = "FIRST"
            } else {
              soo = "NOPE"
            }

            //isItPossible(name,soo)   
           
            try {
            setTimeout(trimColor,150,TRIMCOLOR) 
            } catch {
              console.log("d")
            }  

            try {
            setTimeout(sidingColor,150,SIDINGCOLOR) 
            } catch {
              console.log("d")
            }  

///// RELOOOOOOOK THIS CUZ I JUST DID COMMENT TO PREVENT BUGS !! PLEASE SEE IT !!!
       /*
           if (Dpath == "minibarn/" && state == "firstLoad"){
    addingDoor("LeftDoor","doorLeft","trimLeft","outsideTrimLeft","hingesLeft","raftLeft")

  }
   if ( Dpath == "Shed2/" && state == "firstLoad" || Dpath == "highbarn/" || Dpath == "leanto/" || Dpath == "wood/" || Dpath == "capeCode/" || Dpath == "cabana/" && state == "firstLoad") {
      addingDoor("FrontDoor","door","trim","outsideTrim","hinges","raft",replace="",replacel="")
      
    }
  if (Dpath == "garage/") {
     if ( state == "firstLoad") {
            addingWindow1("FrontWindow","window1","shutter","windowRaftSquare","windowRaftMiddle","windowRaftRight","windowRaftLeft",state="secondLoad")
         } else if ( state == "secondLoad") {
          addingDoor("FrontDoor","door","trim","outsideTrim","hinges","raft",replace="",replacel="")
          FIRSTRUNGARAGE = "centering"
         }
         
  }
    */      
  ///// RELOOOOOOOK THIS CUZ I JUST DID COMMENT TO PREVENT BUGS !! PLEASE SEE IT !!!
 } 

          var mtlLoader = new THREE.MTLLoader(managerWindow);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          
          managerWindow.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
          let side = name.replace(/[0-9]/g,'')
                 side = side.replace("Window", "")
                 possibleLayout(side)
                  if (objectsPushed.includes(name) == false) {
                  alert("No more space in wall to add more windows")
                }

          }
          
          var objLoader = new THREE.OBJLoader(managerWindow);
        
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                windowRaftLeftx = node
                windowRaftLeftx.name = element

                scene.add(windowRaftLeftx)
                 let addRaft = name + "Dict.raft = windowRaftLeftx"
                 eval(addRaft)
                 let trans = name + "Dict.translate()"
                 eval(trans)

                 if ( This_First_Time == true && Dpath != "leanto/" && Dpath != "minibarn/" && Dpath != "vinylbarn/" && Dpath != "capecode/") {
                  addingWindow1("RightWindow")
                  This_First_Time = false
                 }
                 if ( Dpath == "leanto/") {
                  This_First_Time = false
                 }
                 if ( Dpath == "capecode/" && This_First_Time == true) {
                  This_First_Time = false
                  DOORSIZE = "4/"
                  addingDoor("RightDoor")
                  addingWindow1("FrontWindow")
                  
                 }
              }
             })          
          })         
         });         
       }
// ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// // ADDING WINDOW FUNCTION //////// 




//DOOR TRANSOM ABOVE DOOR DOUBLE DOOR //
function addingDoorModelDouble(el,na,dtype="none") {

          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousDoor = na.door
          let indPrevious = moveListo.indexOf(previousDoor)
          let obi = objects.indexOf(previousDoor)
          let element = el
            
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLEDOUBLE + DOORSIZEDOUBLE
         
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
          
          }

          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                var doorx = node
                scene.add(doorx)
                doorx.name = name
                doorx.model = DOORSTYLEDOUBLE
                doorx.size = DOORSIZEDOUBLE
                doorx.type = DOORTYPEDOUBLE
                doorx.trim = doorTrimDOUBLE
                doorx.hinge = doorHingeDOUBLE
                //doorx.ramp = "none"

                objects[obi] = doorx
                moveListo[indPrevious] = doorx
                
                if ( namo == "FrontDoor") {
              centerUnknownX(doorx,previousDoor)
                
            }

              if ( namo == "RightDoor") {
                
                centerUnknownZ(doorx,previousDoor)
            
              }
              if ( namo == "LeftDoor") {
            
                centerUnknownZ(doorx,previousDoor)
               
              }
              if ( namo == "BackDoor") {
                centerUnknownX(doorx,previousDoor)
               }

                na.door = doorx
                scene.remove(previousDoor)
                na.translate() 
                selectOne(document.getElementById("dropingobj").innerHTML) 
                if ( typeof(na.x) == "object") {
                  scene.remove(na.x)
                  na.x = "none"
                }
                if ( typeof(na.ramp) == "object") {
               
                addingRamp(na,na.ramp.path)
              
              }
              if (dtype == "ddtype") {
              if ( doorx.model == "standard/" || doorx.model == "carriage/") {
                  
                addingCloseStandardDouble(doorCloseDouble,na,"ddtype")
              } else {

            //addingRaftDModel("rafter", na,"ddtype") 
            addingCloseStandardDouble("close",na,"ddtype")  
            }        
              } else {
                if (doorx.model == "standard/") {
                  addingCloseStandardDouble(doorCloseDouble,na,"ddtype")
                }
              }
            }
             })              
          })          
         });
        }

function addingRaftDModelDouble(el,na,dtype = "none") {

          let name = na.name
          var namo = name.replace(/[0-9]/g, '');
          let previousTrim = na.raft          
          let theClose = na.close 
          let theDoor = na.door
         
          let element = el
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLEDOUBLE + DOORSIZEDOUBLE
         
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
         
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                var raftd = node
                raftd.name = name+"raftd"
                scene.add(raftd)
      
                scene.remove(previousTrim)
                na.raft = raftd
                na.translate()  

                if (dtype == "ddtype") {
                  addingTrimDModelDouble(doorTrimDOUBLE,na,"ddtype")
                  }
             }
             })              
        })          
         });
}


function addingTrimDModelDouble(el,na,dtype ="none") {
          
          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousTrim = na.trim

          let element = el
            
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLEDOUBLE + DOORSIZEDOUBLE
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

          if ( dtype == "ddtype") {
            addingHingeModelDouble(doorHingeDOUBLE,na,"ddtype")
          }
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                var trimx = node

                scene.add(trimx)
            

            na.trim = trimx
            na.door.trim = doorTrimDOUBLE
            scene.remove(previousTrim)
            na.translate() 

            if ( typeof(na.x) == "object") {
                  scene.remove(na.x)
                  na.door.x = "none"
                }
            selectOne(document.getElementById("dropingobj").innerHTML)

            }
            })          
            })          
         });

        }

function addingHingeModelDouble(el,na,dtype = "none") {

          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousHinge = na.hinge
          let theDoor = na.door
          let theTrim = na.trim

          let element = el
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLEDOUBLE + DOORSIZEDOUBLE
         
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
          if ( dtype == "ddtype") {
                  let side = namo.replace("Door", "")
                  possibleLayout(side)
                  if (objectsPushed.includes(name) == false) {
                      alert("No more space in wall for this type of door")
                  }
                }   
          }
          
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                var ohinge = node
                scene.add(ohinge)
                ohinge.name = name+"hinge"

                scene.remove(previousHinge)
                na.hinge = ohinge
                na.door.hinge = doorHingeDOUBLE
                na.translate()
                selectOne(document.getElementById("dropingobj").innerHTML) 
                 
}
})              
})          
});
}








function addingCloseStandardDouble(el,na,dtype="none",trim="none") {
          let name = na.name
          if ( na.model == "standard/" && el == "None") {
            //pass
             if ( trim != "none") {
                  addingTrimDModelDouble(trim,na)
                }
          } else {
          let namo = name.replace(/[0-9]/g, '');
          let previousClose = na.close

          let element = el
            
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLEDOUBLE + DOORSIZEDOUBLE
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

          if ( dtype == "ddtype") {
            addingRaftDModelDouble("rafter", na,"ddtype")   
          }
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                var closex = node
        

                scene.add(closex)
            
                na.close = closex
                na.door.close = doorCloseDOUBLE

                scene.remove(previousClose)
                try {
                  scene.remove(na.close2) 
                } catch {
                  //pass
                }
                if ( typeof(na.x) == "object") {
                  scene.remove(na.x)
                  na.door.x = "none"
                }
                na.translate() 
                selectOne(document.getElementById("dropingobj").innerHTML)
                if ( trim != "none") {
                  addingTrimDModelDouble(trim,na)
                }
            }
            })          
            })          
         });
}
        }
        

function addingXStandardDouble(el,na,dtype="none") {


          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousX = na.x
          let element

          switch(el) {
            case "yup":
              if (na.door.type == "door") {
                element = "xStandard"
              } else if (na.door.type == "wide") {
                element = "xWide"
              } else if (na.door.type == "designer") {
                element = "xDesigner"
              }
              break;
            case "trim45":

              element = "trim45"
          }
       
            
          let path = "ConstantObjects/" + namo +"/" + DOORSTYLEDOUBLE + DOORSIZEDOUBLE
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

          if ( dtype == "ddtype") {
            addingRaftDModelDouble("rafter", na,"ddtype")   
          }
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                var Xdoor = node
        

                scene.add(Xdoor)
            
                na.x = Xdoor
                na.door.x = element
                try {
                  scene.remove(previousX)
              } catch {
                  console.log("er")
              }
                na.translate() 
                selectOne(document.getElementById("dropingobj").innerHTML)
            }
            })          
            })          
         });

        }


function addingTrimDModelGarage(el,na,dtype ="none") {
          
          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousTrim = na.trim

          let element = el
          element += GARAGEOPENING
          if ( GARAGEOPENING == "Curved") {
            element = "miratecCurved"
          }
          let path = "ConstantObjects/" + namo +"/" + "garage/" + GARAGESIZE
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

         
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                var trimx = node
                GARAGETRIM = el
                scene.add(trimx)
            

            na.trim = trimx
            na.door.trim = GARAGETRIM
            scene.remove(previousTrim)
            na.translate() 

           
            selectOne(document.getElementById("dropingobj").innerHTML)

            }
            })          
            })          
         });

}

function addingDoorModelGARAGE(el,na,dtype="none") {

          let name = na.name
          let namo = name.replace(/[0-9]/g, '');
          let previousDoor = na.door
          let indPrevious = moveListo.indexOf(previousDoor)
          let obi = objects.indexOf(previousDoor)
          let element = el
            
          let path = "ConstantObjects/" + namo +"/" + "garage/" + GARAGESIZE
         
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
          
          }

          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                //console.log(node.material)
                node.castShadow = false;
                node.receiveShadow = false;
                var doorx = node
                scene.add(doorx)
                doorx.name = name
                doorx.model = "garage/"
                doorx.size = GARAGESIZE
                doorx.type = GARAGEDOOR
                doorx.trim = GARAGETRIM
                doorx.hinge = GARAGEHINGE
                //doorx.ramp = "none"

                objects[obi] = doorx
                moveListo[indPrevious] = doorx
                
                if ( namo == "FrontDoor") {
              centerUnknownX(doorx,previousDoor)
                
            }

              if ( namo == "RightDoor") {
                
                centerUnknownZ(doorx,previousDoor)
            
              }
              if ( namo == "LeftDoor") {
            
                centerUnknownZ(doorx,previousDoor)
               
              }
              if ( namo == "BackDoor") {
                centerUnknownX(doorx,previousDoor)
               }

                na.door = doorx
                scene.remove(previousDoor)
                na.translate() 
                selectOne(document.getElementById("dropingobj").innerHTML) 
               
                if ( typeof(na.ramp) == "object") {
               
                addingRamp(na,na.ramp.path)

              }
              if ( typeof(na.glassLow) == "object") {
                scene.remove(na.glassLow)
                na.glassLow = "none"

              }
              if ( typeof(na.glassHigh) == "object") {
                scene.remove(na.glassHigh)
                na.glassHigh = "none"
              }
              if ( GARAGEDOOR == "door") {
                addingGarageGlassHigh(na.name)
                addingCloseStandardGARAGE("close",na)
              } else if ( GARAGEDOOR == "sunburst") {
                addingCloseStandardGARAGE("closeH",na)
              }
            }
             })              
          })          
         });
        }

function addingCloseStandardGARAGE(el,na) {
          let name = na.name
          
          let namo = name.replace(/[0-9]/g, '');
          let previousClose = na.close

          let element = el
            
          let path = "ConstantObjects/" + namo +"/" + "garage/" + GARAGESIZE 
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "

          
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
         
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
         
                node.castShadow = false;
                node.receiveShadow = false;
                var closex = node
        

                scene.add(closex)
            
                na.close = closex
                

                scene.remove(previousClose)
               
                na.translate() 
                selectOne(document.getElementById("dropingobj").innerHTML)
                
            }
            })          
            })          
         });
}

function addingRaftDModelGARAGE(el,na,dtype = "none") {

          let name = na.name
          var namo = name.replace(/[0-9]/g, '');
          let previousTrim = na.raft          
          let theClose = na.close 
          let theDoor = na.door
         
          let element = el
          let path = "ConstantObjects/" + namo +"/" + "garage/" + GARAGESIZE
          element = "rafter" + sizeD.replace("wide","") + "high"
          if ( Dpath == "Shed2/") {
            element = "rafter" + sizeD.replace("wide","") + "shop"
          }
         
          var managerModel = new THREE.LoadingManager();
          managerModel.onLoad = function(url) {
          document.getElementById("loadStatus").style.color = "green"
          document.getElementById("loadStatus").innerHTML = " Completed . "
         
          }
          var mtlLoader = new THREE.MTLLoader(managerModel);
          mtlLoader.setTexturePath(path)
          mtlLoader.load(path + element + ".mtl",function(materials){
          materials.preload();
          var objLoader = new THREE.OBJLoader(managerModel);
          objLoader.setMaterials(materials);
          objLoader.load(path + element + ".obj",function(mesh){
            
          mesh.traverse(function(node) {
            
              if ( node instanceof THREE.Mesh) {
                node.castShadow = false;
                node.receiveShadow = false;
                var raftd = node
                raftd.name = name+"raftd"
                if ( Dpath == "Shed2/") {
                raftd.scale.z = 0.94
              }
                scene.add(raftd)
            
                scene.remove(previousTrim)
                na.raft = raftd
                na.translate()  

               
             }
             })              
        })          
         });
}