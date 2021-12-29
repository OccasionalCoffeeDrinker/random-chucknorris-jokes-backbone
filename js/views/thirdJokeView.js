define(['jquery',
        'underscore',
        'backbone',
        'models/thirdJoke'], function($, _, Backbone, ThirdJoke){
            var ThirdJokeView = Backbone.View.extend({
                render: function(){
                    this.$el.html("<span> "+ this.model.get("value").joke + "</span>");
                    
                    return this;
                }
            });
        return ThirdJokeView;
});
