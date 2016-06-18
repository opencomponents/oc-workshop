'use strict';

module.exports.data = function(context, callback){
  callback(null, {
    baseUrl: context.baseUrl,
    staticPath: context.staticPath,
    cssClass: context.params.skin === 'dark' ? 'dark' : undefined
  });
};