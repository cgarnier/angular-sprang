angular.module('angular-sprang', [])
    .provider('sprangConfig', function sprangAngularProvider () {
        var configs = {};

        this.add = function (configName, config){
            configs[configName] = config;
        };

        this.$get = function () {
            return {
                get: function (configName) {
                    return configs[configName];
                }
            }
        }
    });
