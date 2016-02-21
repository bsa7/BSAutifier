function BSAutifier (options) {
  options = options || {}
  this.name = 'javascript html beautifier';
  this.tags = options.tags || {
    'opening': /<[^\!\/\%][^<]+?[^\/\%]>/m,
    'closing': /<\/[^>]+>/m,
    'self_closing': /<[^!][^>]+?\/>/m
  };
  this.tabSize = options.tabSize || 2,
  this.tabChar = options.tabChar || ' ',
  this.line_end_char = options.line_end_char || '\n'

  // private functions

  first = function(v) {
    return(v ? v[0] : null);
  }

  String.prototype.decode_html = function() {
    var txt = document.createElement("textarea");
    txt.innerHTML = this;
    return txt.value;
  }

  Array.prototype.min = function () {
    return Math.min.apply(Math, this);
  }

  Array.prototype.removeIf = function(callback) {
    var i = this.length;
    while (i--) {
      if (callback(this[i], i)) {
        this.splice(i, 1);
      }
    }
  };

  this.wich_tag_is_next = function(text, tags) {
    var closest_opening_tag = first(text.match(tags.opening));
    var o_position = text.search(tags.opening);       //opening
    var closest_closing_tag = first(text.match(tags.closing));
    var c_position = text.search(tags.closing);       //closing
    var closest_self_closing_tag = first(text.match(tags.self_closing));
    var sc_position = text.search(tags.self_closing); //self closing
    var positions = [o_position, c_position, sc_position];
    positions.removeIf(function(item) {
      return(item < 0);
    });
    closest_position = positions.min();
    var closest_tag_hash = {}
    switch(closest_position) {
      case o_position:
        closest_tag_hash.position = o_position;
        closest_tag_hash.tag_content = closest_opening_tag;
        closest_tag_hash.tag_type = 'o';
        break;
      case c_position:
        closest_tag_hash.position = c_position;
        closest_tag_hash.tag_content = closest_closing_tag;
        closest_tag_hash.tag_type = 'c';
        break;
      case sc_position:
        closest_tag_hash.position = sc_position;
        closest_tag_hash.tag_content = closest_self_closing_tag;
        closest_tag_hash.tag_type = 'sc';
        break;
      default:
        // text ended
    }
    return(closest_tag_hash);
  }
}

BSAutifier.prototype.beautify = function(text) {
  text = text.decode_html()
             .replace(/[\r\n]/gm, '')
             .replace(/>[\s]+</g, '><')
             .replace(/\s+$/g, '')
             .replace(/(>)\s+/g,'$1')
             .replace(/\s+(<)/g, '$1')
  var indentTag = this.tabChar.repeat(this.tabSize);
  var currentIndent = '';
  var beautified_text = '';
  var next_position_hash;
  while (text.length > 0) {
    next_position_hash = this.wich_tag_is_next(text, this.tags);
    switch (next_position_hash.tag_type) {
      case null:
        text = '';
        break;
      case 'o':
        leading_text = text.substring(0, next_position_hash.position);
        if (leading_text != '') {
          beautified_text += currentIndent + leading_text + this.line_end_char;
        }
        beautified_text += currentIndent + next_position_hash.tag_content + this.line_end_char;
        text = text.substring(next_position_hash.position + next_position_hash.tag_content.length);
        currentIndent += indentTag;
        break;
      case 'c':
        leading_text = text.substring(0, next_position_hash.position);
        if (leading_text != '') {
          beautified_text += currentIndent + leading_text + this.line_end_char;
        }
        currentIndent = currentIndent.substring(this.tabSize);
        beautified_text += currentIndent + next_position_hash.tag_content + this.line_end_char;
        text = text.substring(next_position_hash.position + next_position_hash.tag_content.length);
        break;
      case 'sc':
        leading_text = text.substring(0, next_position_hash.position);
        if (leading_text != '') {
          beautified_text += currentIndent + leading_text + this.line_end_char;
        }
        beautified_text += currentIndent + next_position_hash.tag_content + this.line_end_char;
        text = text.substring(next_position_hash.position + next_position_hash.tag_content.length);
        break;
      default:
        text = '';
    }
  }
  return beautified_text.replace(/[\r\n]/g, '\n');
};
