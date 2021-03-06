	//
	//	Could not use jquery because jquery has it's own object types
	//
	function addMoreFriends(label,value) {
		var htmlItem = document.getElementById('workspace2');
        valueId = 'itemIdName_' + formItemIndex;
		divNode2(htmlItem, valueId, label, css_class1, value, css_class2);
		formItemIndex++;
	}
	function addAFriend(label,value) {
		var htmlItem = document.getElementById('workspace2');
        valueId = 'itemIdName_' + formItemIndex;
		divNode3(htmlItem, valueId, label, css_class3, value, css_class4);
		formItemIndex++;
	}
	function addASpacer() {
		var htmlItem = document.getElementById('workspace2');
		htmlItem.appendChild(document.createElement('p'));
	}

	//
	//	The default is to download asynchronously, 
	// 	so we need to give it an inline callback.
	//
	function loadIT(altfunc) {
        console.log("loadIt()");
        $.get(myurl, function (data) {
			// 'obj' is the global object
            obj = data;
            console.log("dummyFunction()");
            //workSpace.html("dummyFunction()");
            workSpace.html(obj.length + " events.   ");
            // Previously, had to settle for some unknown reason.
            //window.setTimeout(dummyLoader, 400);
            dummyLoader()
        });
	}
	// This function calls the rendering function.
	function dummyLoader() {
        console.log("dummyLoader()");
		loadJSON(obj, formItemIndex, postRender);
	}

	// This loops through the data to render each calender event.
	function loadJSON(ary, index, postFunction) {
		//alert(ary.length);
		//alert(index);
		var k = 0;
		for(var i=0; i <= ary.length; i++) {
			index = i;
			if (index < ary.length) {
				someDate = ary[index].start_time.split("T", 1);
                if ( ISOolderThanToday(someDate)) {
					addMoreFriends('Event', ary[index].name);
					addAFriend('Starts', ary[index].start_time);
					addAFriend('Room', ary[index].rooms[0]);
					k++;
				}
			}
		}
		postFunction(k)
	}
	// destroy our button to load our data.
	var postRender = function(i) {
		$("#loadButton").html(i + " loaded.");
	}
	//
	// The delay in loading is to allow the screen to draw, then fetch the JSON
	//
	function delayLoading() {
		workSpace.html("Fetching events...");
		loadIT();
	}
