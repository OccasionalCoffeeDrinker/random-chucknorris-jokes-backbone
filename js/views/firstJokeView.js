define(['jquery',
        'underscore',
        'backbone',
        'models/firstJoke'], function($, _, Backbone, FirstJoke){
            var FirstJokeView = Backbone.View.extend({
                render: function(){
                    this.$el.html("<span> "+ this.model.get("value").joke + "</span>");

                    return this;
                }
            });
        return FirstJokeView;
});
