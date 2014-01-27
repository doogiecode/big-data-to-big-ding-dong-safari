// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
// and also here: https://github.com/logancollins/cloud-to-butt-safari

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	
    v = v.replace(/\bBig Data\b/g, "Big Ding Dong");
	v = v.replace(/\bBig data\b/g, "Big ding dong");
    v = v.replace(/\bbig Data\b/g, "big Ding Dong");
	v = v.replace(/\bbig data\b/g, "big ding dong");
	
	textNode.nodeValue = v;
}
