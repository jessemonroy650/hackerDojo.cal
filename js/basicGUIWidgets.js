//
//	Basic JS GUI Widgets
//	by jmj on 2013-08-28
//
//	A set of JavaScript Widgets used for basic Andriod GUI production.
//
//	INCLUDES:
//	divNode - creates a basic 'span' given the parent, id, label, & text
//
/**********************************************************/
//
//	formInputNode - creates a basic 'text' input node
//		parent
//		label
//		id
//		size
//
function divNode2(parent, id, label, class1, value, class2) {
	// Create a label before the form element
	var newDiv = document.createElement('div');
	// Set attributes
	newDiv.setAttribute('class', class1);
        newDiv.innerHTML = label;
	parent.appendChild(newDiv);

	// Create the appropriate HTML (object) element 
	var newItem = document.createElement('div');
	// Set attributes
	newItem.setAttribute('id', id);
	newItem.setAttribute('class', class2);
        newItem.innerHTML = value;
	parent.appendChild(newItem);
	// 
	return false;
}

function divNode3(parent, id, label, class1, value, class2) {
	// Create a label before the form element
	var newDiv = document.createElement('div');
	// Set attributes
	newDiv.setAttribute('class', class1);
        newDiv.innerHTML = label;
	parent.appendChild(newDiv);

	// Create the appropriate HTML (object) element 
	var newItem = document.createElement('div');
	// Set attributes
	newItem.setAttribute('id', id);
	newItem.setAttribute('class', class2);
        newItem.innerHTML = value;
	parent.appendChild(newItem);
	// 
	return false;
}
