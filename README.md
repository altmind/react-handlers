React-handlers
===========

Utility to execute multiple handlers for single react event.


Install with npm or Bower.

```sh
npm install react-handlers
```

Just pass multiple functions to exported function.

```jsx
var handlers = require('react-handlers');
render = function(){
	return <button onClick={handlers(this.doThis, this.doThat)}>Clack</button>
}
```

All the functions will be executed in order when the event will be triggered. Functions will preserve their context(`this`). Function return values are discarded. Exceptions during function invocation will stop the processing.

Only functions and undefineds are valid arguments to `handlers`.

## Example
```js
handlers(
	function() {
		console.log(this.var)}.bind({var: 'a'}
	),
	function(arg) {
		console.log(arg)
	}
)('b') // prints ab
```

## Special thanks

Thanks to Jed Watson for his awesome [classnames](https://github.com/JedWatson/classnames) library that served as an example of well-packaged lib.

## License

(The MIT License)

Copyright (c) 2015 Andrew Gurinovich

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
