var myDate = {
	now : new Date(),
	oneDay : (1000 * 60 * 60 * 24),

	utcNow    : (new Date()).toUTCString(),
	localeNow : (new Date()).toLocaleString(),
	yesterday : (Date((new Date()).setDate(-1))),

	isoDate	 : (function () {
		var xx = (new Date()).toISOString();
		var result = xx.match(/(.+)\./);
		// This is now a string.
		return result[1];
	})(0)
}

var olderThanToday = function(dateGiven) {
    // Initializes to today.
    var todayNow = new Date();
    var lastDate = new Date(dateGiven);

    bResults = (todayNow > lastDate);
    return bResults;
}

var ISOolderThanToday = function(dateGiven) {
    // Initializes to today.
    var today = new Date();
    var tdate = new Date(dateGiven);

    todayThing = new Date(today.toISOString().split("T",1));
    //ttime = todayThing.getTime();
	offset = todayThing.getTimezoneOffset()/60; //divid by minutesPerHour
	// change 'offset' to positive instead of negative. DATE: 2013-11-17
    ttime  = todayThing.setHours(offset);
    tdateThing = new Date(tdate.toISOString().split("T",1));

    bResults = (todayThing <= tdateThing);
    return bResults;
}
