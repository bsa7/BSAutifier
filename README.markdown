# BSAutifier
javascript html beautify (indent formatting) module.

when our html look like that:
```
<h1>Services</h1>
<div class="children">
<div class="row">
<div class="child col-sm-6 text-center">
<div class="thumbnail"><img src="../../uploads/a0440b1456e38342s1.jpg" alt="A0440b1456e38342s1" /></div>
<div class="title">Sell of goodies.</div>
</div>
<div class="child col-sm-6 text-center">
<div class="thumbnail"><img src="../../uploads/6fbb953bf4db65c5s2.jpg" alt="6fbb953bf4db65c5s2" /></div>
<div class="title">Stock services.</div>
</div>
</div>
</div>
```
we would to come it to more pretty format. BSAutifier do it and you went:

```
<h1>
    Services
</h1>
<div class="children">
    <div class="row">
        <div class="child col-sm-6 text-center">
            <div class="thumbnail">
                <img src="../../uploads/a0440b1456e38342s1.jpg" alt="A0440b1456e38342s1" />
            </div>
            <div class="title">
                Sell of goodies.
            </div>
        </div>
        <div class="child col-sm-6 text-center">
            <div class="thumbnail">
                <img src="../../uploads/6fbb953bf4db65c5s2.jpg" alt="6fbb953bf4db65c5s2" />
            </div>
            <div class="title">
                Sell of goodies.
            </div>
        </div>
    </div>
</div>
```

## Installing and using.

### Including js:

You must include module to your page first:
```html
<script src="BSAutifier.js"></script>
```

### Initializing:

You can initialize BSAutifier object in javascript:

1. with params:
```javascript
html_beautifier = new BSAutifier({
  'tags' : {
    'opening': /<[^<\/]+>/,
    'closing': /<\/[^>]+>/,
    'self_closing': /<[^>]+?\/>/
  },
  'tabSize': 4,
  'line_end_char': '\n'
})
```
2. within params:
```javascript
html_beautifier = new BSAutifier()
```

### Using:

use initialized BSAutifier object instance to beautify html:
```javascript
beauty_html_text = html_beautifier.beautify(text_to_beautify);
```