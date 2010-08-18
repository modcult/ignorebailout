// Based on a script in Mark Pilgrim's "Dive into Greasemonkey",
// based off another script based off that

// ==UserScript==
// @name          ignorebailout
// @namespace     http://modcult.org/userscripts
// @description   Hide from reality.
// @include       *
// ==/UserScript==


(function() {
    var replacements, regex, key, textnodes, node, s;

    replacements = {
        "bailout": "balls out",
        "Bailout": "Balls out",
        "(\\$[0-9]+ +billion)": "$1 worth of pudding"
    };

    regex = {};
    for (key in replacements) {
        regex[key] = new RegExp(key, 'g');
    }

    textnodes = document.evaluate( "//body//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (var i = 0; i < textnodes.snapshotLength; i++) {
        node = textnodes.snapshotItem(i);
        s = node.data;
        for (key in replacements) {
            s = s.replace(regex[key], replacements[key]);
        }
        node.data = s;
    }

})();
