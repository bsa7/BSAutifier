# BSAutifier
javascript html beautify (indent formatting) module.

when our html look like that:
```
<div class="container my_container">
  <div class="row"> <div class="content"> Content beside tags - it text<div class="content">
      <h1>Simple goods for you
  <i>


extra short tag name example



  </i>
    </h1>
  </div>
      <div data-source="/partials/our_contacts">
      Simple <%= 'we need't erb tags supprt! %> raw text content
    </div>
    <img src="fake"/> <!-- self closed tag example -->

    <div data-source="/partials/link_us">
  </div>
       <input id="feedback_name" class="form-control" title="this field must contain your name" name="feedback[name]" pattern="[a-zA-Z ]+" required="required" type="text" placeholder="Name" /><input id="feedback_e_mail" class="form-control" title="This field must contain valid email" name="feedback[e_mail]" pattern=".+@.+" type="e_mail" placeholder="E-mail" /><input id="feedback_phone" class="form-control" title="This field must contain your phone number" name="feedback[phone]" pattern="+?[()- 0-9]{6,13}" type="phone" placeholder="Phone" />
  <div data-source="/partials/subscribe_service">
</div>
<div id="text" class="col-sm-6 bf_user_txt">
      <textarea id="feedback_text" class="form-control" title="Write message for manager here" name="feedback[text]" placeholder="Message text">
    </textarea>
  </div>
</div>
<div data-source="/partials/updates">
</div>
</div>
</div>
```
we would to come it to more pretty format. BSAutifier do it and you went:

```
<div class="container my_container">
  <div class="row">
    <div class="content">
      Content beside tags - it text
      <div class="content">
        <h1>
          Simple goods for you
          <i>
            extra short tag name example
          </i>
        </h1>
      </div>
      <div data-source="/partials/our_contacts">
        Simple<%= 'we need't erb tags supprt! %>raw text content
      </div>
      <img src="fake"/>
      <!-- self closed tag example -->
      <div data-source="/partials/link_us">
      </div>
      <input id="feedback_name" class="form-control" title="this field must contain your name" name="feedback[name]" pattern="[a-zA-Z ]+" required="required" type="text" placeholder="Name" />
      <input id="feedback_e_mail" class="form-control" title="This field must contain valid email" name="feedback[e_mail]" pattern=".+@.+" type="e_mail" placeholder="E-mail" />
      <input id="feedback_phone" class="form-control" title="This field must contain your phone number" name="feedback[phone]" pattern="+?[()- 0-9]{6,13}" type="phone" placeholder="Phone" />
      <div data-source="/partials/subscribe_service">
      </div>
      <div id="text" class="col-sm-6 bf_user_txt">
        <textarea id="feedback_text" class="form-control" title="Write message for manager here" name="feedback[text]" placeholder="Message text">
        </textarea>
      </div>
    </div>
    <div data-source="/partials/updates">
    </div>
  </div>
</div>
```

## Installing and using.

### Including js:

First include module to your page:
```html
<script src="BSAutifier.js"></script>
```
- it's all!

### Initializing:

You can initialize BSAutifier object in javascript:

1. with params:
```javascript
html_beautifier = new BSAutifier({
  'tags' : {
    'opening': /<[a-z][^<]*?[^\/\%]>|<[a-z]>/im,
    'closing': /<\/[^>]+>/m,
    'self_closing': /<[^!][^>]+?\/>/m
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
