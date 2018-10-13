

var numTabs = 0; 
var tabs = []; 
var selectedObj = DebuggingHelpers.logSelected(); 

// if a node is selected, it will add the node name and ID to the tab table 
function addTab() {
    selectedObj = DebuggingHelpers.logSelected(); 
    if (selectedObj == null) {
        return; 
    }

    // parse for node state 
    var nodeStateIndex = selectedObj.indexOf("node state for "); 
    var nodeState = selectedObj.substr(nodeStateIndex); 
    nodeState = nodeState.split(/\s+/); 
    nodeState = nodeState[3]; 
    if (nodeState == null) {
        return; 
    }

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
        }
    } 

    tabs.push({ 
        nodeID: nodeState,
        nodeName: name, 
    }); 

    console.log(tabs); 
}

window.onclick = addTab(); 