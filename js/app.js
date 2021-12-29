define([
    'underscore',
    'backbone',
    'models/firstJoke',
    'models/secondJoke',
    'models/thirdJoke',
    'models/button',
    'views/redView',
    'views/firstJokeView',
    'views/secondJokeView',
    'views/thirdJokeView'], function (_, Backbone, RedSquare, FirstJoke, SecondJoke, ThirdJoke, RedView, FirstJokeView, SecondJokeView, ThirdJokeView){
        
        var initialize = function(){
            var firstJoke = new FirstJoke({ id: 1, title: "api", value: ''});
            var secondJoke = new SecondJoke({title: 'api', value: ''});
            var thirdJoke = new ThirdJoke({title: "api", value: ''});
            var firstJokeView = new FirstJokeView({el: "#yellowSquare", model: firstJoke});
            var secondJokeView = new SecondJokeView({el: "#blueSquare", model: secondJoke});
            var thirdJokeView = new ThirdJokeView({el: "#greenSquare", model: thirdJoke});
            var oldJokes = [];
            oldJokes.push(-1)
            var redSquare = new RedSquare({title: "api", value: '', firstJoke: firstJoke, firstJokeView: firstJokeView, secondJoke: secondJoke, secondJokeView: secondJokeView, thirdJoke:thirdJoke, thirdJokeView: thirdJokeView, oldJokes: oldJokes});
            var redView = new RedView({el: "#redSquare", model: redSquare});
            redSquare.fetch({
                url: 'https://api.icndb.com/jokes/',
                success: function(){
                    console.log("redSquare")
                    console.log(redSquare)
                    var randomNumber = Math.floor(Math.random() * (redSquare.attributes.value.length-1));
                    debugger
                }
            });
            firstJoke.fetch({
                url: 'https://api.icndb.com/jokes/random',
                success: function(){
                    console.log(firstJoke)
                    firstJokeView.render();
                }
            });
            secondJoke.fetch({
                url: 'https://api.icndb.com/jokes/random',
                success: function(){
                    console.log(secondJoke)
                    secondJokeView.render();
                }
            });
            thirdJoke.fetch({
                url: 'https://api.icndb.com/jokes/random',
                success: function(){
                    console.log(thirdJoke)
                    thirdJokeView.render();
                }
            });
            
           
            firstJokeView.render();
            secondJokeView.render();
            thirdJokeView.render();
            redView.render();

        }
        return{
            initialize : initialize
        };
    
});
