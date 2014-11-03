
	function addMoreFriends(label,value) {
		// Get the closest HTML 
		var htmlItem = document.getElementById('workspace2');
                valueId = 'itemIdName_' + formItemIndex;
                //xxx = valueId + ":" + value; 
		divNode2(htmlItem, valueId, label, css_class1, value, css_class2);
		//htmlItem.appendChild(document.createElement('br'));
		formItemIndex++;
	}
	function addAFriend(label,value) {
		// Get the closest HTML 
		var htmlItem = document.getElementById('workspace2');
                valueId = 'itemIdName_' + formItemIndex;
                //xxx = valueId + ":" + value; 
		divNode3(htmlItem, valueId, label, css_class3, value, css_class4);
		// HERE Experimenting HERE
		//divNodeNew(htmlItem, valueId, label, css_class3, value, css_class4);
		//htmlItem.appendChild(document.createElement('br'));
		formItemIndex++;
	}
	function addASpacer() {
		var htmlItem = document.getElementById('workspace2');
		htmlItem.appendChild(document.createElement('p'));
	}

	//
	//	The default is to download asynchronously, 
	// 	so we need to give it a callback (aka altfunc).
	//
	function loadIT(altfunc) {
        console.log("loadIt()");
        $.get(myurl, function (data) {
            console.log("dummyFunction()");
            workSpace.html("dummyFunction()");
            obj = eval ("(" + data + ")");
            //alert(obj.length);
            $("workspace").text(obj.length + " events.   ");
            // Seemed not to work right without the hard value.
            // maybe a scoping issue.
            window.setTimeout(dummyLoader, 400);
        });
	}
	// This function calls the rendering function
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
				//
				//eDate = new Date(ary[index].start_time);
				//if (eDate >= myDate.yesterday) {
				someDate = ary[index].start_time.split("T", 1);
                //dateObj  = new Date(someDate);
                if ( ISOolderThanToday(someDate)) {
					//addMoreFriends(ary[index].label, ary[index].value)
					addMoreFriends('Event', ary[index].name);
					addAFriend('Starts', ary[index].start_time);
					addAFriend('Room', ary[index].rooms[0]);
					//addASpacer();
					k++;
				}
			}
		}
		postFunction(k)
	}
	// destroy our button to load our data.
	var postRender = function(i) {
		document.getElementById("loadButton").innerHTML = i + " loaded.";
	}
	//
	// The delay in loading is to allow the screen to draw, then fetch the JSON
	//
	function delayLoading() {
		workSpace.html("Fetching events...");
		loadIT();
	}
