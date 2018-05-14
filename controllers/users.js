'use strict';
module.exports = function(lodash){
    return{
      SetRouting : function(router){
        router.get('/', this.indexPage);
        router.get('/signup', this.getSignUp);
      },
      indexPage : function(req ,res){
        return res.render('index', {test1 : "this is a test page"});
      },

      getSignUp : function(req, res){
        return res.render('signup');
      }
    }
}
