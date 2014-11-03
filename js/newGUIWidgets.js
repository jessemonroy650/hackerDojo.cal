//
//
function divNodeNew(parent, id, label, class1, value, class2) {
	var divLabel = eval("<div class=" + class1 + ">" + label + "</div>");
	var divValue = eval("<div id=" + id + " class=" + class2 + ">" + value + "</div>");

	parent.appendChild(divLabel);
	parent.appendChild(divValue);
}

