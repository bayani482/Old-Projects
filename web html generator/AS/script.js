i=0;
function addFields(){
    // Append a line break 
    row_custom_header_id.appendChild(document.createElement("br"));
    row_custom_description_id.appendChild(document.createElement("br"));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    var input2 = document.createElement("input");
    input.type = "text";
    input.name = "row_header_"+i;
    input.placeholder = "Row header"
    input2.type = "text";
    input2.name = "row_description_"+i;
    input2.placeholder = "Row item description"
    
    row_custom_header_id.appendChild(input);
    row_custom_description_id.appendChild(input2);
    i+= 1;
}