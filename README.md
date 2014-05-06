angular-sprang
==============
This module provide a configuration to the [Sprang project](https://github.com/cgarnier/Sprang).

Install
=======
``` bower install angular-sprang ```

Usage
=======

``` javascript
angular.module('myApp', ['angular-sprang', ... ])
  .config(function(sprangConfigProvider){
    sprangConfigProvider.add('myApi1', {url: 'http://api1/url'});
    sprangConfigProvider.add('myApi1', {url: 'http://api2/url'});
    [...]
  });
  
```
  
  
