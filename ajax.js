// Emily Van Laarhoven
// CS304 HW3 Ajax
// javascript file

function displayInfo(jsonInfo) {
    var i; var len = jsonInfo.length;
    var listElt = $("<ul>");
    for (i=0; i<len; i++) {
        var talk = jsonInfo[i];
        var presentersDict = talk.presenters;
        var presents = "";
        var j;
        var pLen = presentersDict.length;
        for (j=0; j<pLen; j++) {
            presents += presentersDict[j].display_name+", ";
	}
        var shortDesc = "Talk #: "+talk.tid+": "+talk.title+", presented by: "+presents+" starting at: "+talk.start_time+" in "+talk.location;
        $("<li>").text(shortDesc).attr('description',talk.description).appendTo(listElt);
    }
    $(".ruhlman-info-container").click(function(event){ var longDesc = $(event.target).attr('description'); alert(longDesc); });
    $(".ruhlman-info-container").empty().append(listElt);
}

function loadInfo() {
    $.post("http://cs.wellesley.edu/~cs304/homeworks/ruhlman-2014.json".displayInfo,"json"); 
}

loadInfo();
