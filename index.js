var numTabs = 0; 
var tabs = []; 
var selectedObj = DebuggingHelpers.logSelected(); 

function addTab() {
    selectedObj = DebuggingHelpers.logSelected(); 
    
    // parse for node state 
    var nodeStateIndex = selectedObj.indexOf("node state for "); 
    var nodeState = selectedObj.substr(nodeStateIndex); 
    nodeState = nodeState.split(/\s+/); 
    nodeState = nodeState[3]; 

    // find index of {, }
    var indexFirstBracket = selectedObj.indexOf("{"); 
    var indexLastBracket = selectedObj.indexOf("}"); 

    var properties = selectedObj.substr(indexFirstBracket + 1, indexLastBracket - 2); 
    properties = properties.split("\n"); 


    // look for name 
    for (p in properties) {
        if (properties[p].includes("name: ")) {
            var name = properties[p].replace("name: ", ''); 
            name = name.replace("\"", ''); 
            name = name.substr(0, name.length - 1); 
            console.log(name); 
        }
    }

    console.log("name: "+ name); 
    console.log("node id: "+ nodeState); 
}

window.onclick = addTab(); 