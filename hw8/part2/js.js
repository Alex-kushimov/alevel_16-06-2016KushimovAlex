var elem = document.getElementById('tree');

var htmlStructure = {
  name: 'p',
  content: ' Some Text in Para',
  subTags: [{
     name: 'u',
     content: ' some underlined text ',
     params: ' url="bla-bla"',
     subTags: [
     {
     name: 'i',
     content: 'double formatted',
     params: ' src="bla-bla"',
     }
     ]
  },
  {
     name: 'i',
     content: ' some italic text ',
     params: ' src="bla-bla"'
  }]
}

function getHtml(structure){
   //return '<p><u></u><i></i></p>';
   debugger;
      if ('params' in structure){
         result += "<" + structure.name + structure.params + ">";
     }
      else{
          result = "<" + structure.name + ">";
      }
     if ('content' in structure){
      result += structure.content;
     }
   
   if ('subTags' in structure){
      for (var i=0;i<structure.subTags.length;i++){
          result += getHtml(structure.subTags[i]);
      }
   }   
   
   result += "</" + structure.name + ">";
   return result;
   
   //return '<p></p>';
}

alert(getHtml(htmlStructure))
elem.innerHTML = getHtml(htmlStructure);