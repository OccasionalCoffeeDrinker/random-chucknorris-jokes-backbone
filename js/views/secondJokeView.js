define(['jquery',
        'underscore',
        'backbone',
        'models/secondJoke'], function($, _, Backbone, SecondJoke){
            var SecondJokeView = Backbone.View.extend({
                render: function(){
                    this.$el.html("<span> "+ this.model.get("value").joke + "</span>");
                    
                    return this;
                }
            });
        return SecondJokeView;
});
