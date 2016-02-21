getSource = function() {
  return(document.getElementById('to_beautify').value.replace(/[\r\n]/g, ''));
}

setResult = function(text) {
  document.getElementById('beautified').innerHTML = text;
  return;
}

document.onclick = function(e) {
  var object_id;
  object_id = e.target.id;
  if (object_id === 'doit') {
    e.preventDefault();
    var text_to_beautify = getSource();
    setResult((new BSAutifier({
      'tags' : {
        'opening': /<[^<\/]+>/,
        'closing': /<\/[^>]+>/,
        'self_closing': /<[^>]+?\/>/
      },
      'tabSize': 4,
      'line_end_char': '\n'
    })).beautify(text_to_beautify));
  }
};

