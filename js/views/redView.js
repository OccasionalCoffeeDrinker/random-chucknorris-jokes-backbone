define(['jquery',
        'underscore',
        'backbone',
        'models/button',
        'models/input'], function($, _, Backbone, Button, Input){
            var RedView = Backbone.View.extend({

                // render: function(){
                //     var self = this;
            
                //     this.$el.append("<input type='text' autofocus id='newTodoItem'></input>")
                //     this.$el.append("<button id='add'>Add</button>");
            
                //     this.model.each(function(todoItem){
                //         var view = new TodoItemView({ model: todoItem });
                //         self.$el.append(view.render().$el);
                //     });
            
                //     return this;
                // }

                doRandom: function(callAgain){
                    if(document.getElementById("number").value != ""){
                        this.changeInput("test");
                        return;

                    }
                    console.log(callAgain)
                    console.log("this")
                    var firstJoke = this.model.get("firstJoke"); 
                    var secondJoke = this.model.get("secondJoke"); 
                    var thirdJoke = this.model.get("thirdJoke"); 
                    var firstJokeView = this.model.get("firstJokeView"); 
                    var secondJokeView = this.model.get("secondJokeView"); 
                    var thirdJokeView = this.model.get("thirdJokeView"); 
                    let self = this;
                    if(callAgain.type == "click" || callAgain == 1){
                        firstJoke.fetch({
                            url: 'https://api.icndb.com/jokes/random',
                            success: function(){                                
                                var tmpCheck = self.model.get("oldJokes"); 

                                if(tmpCheck.includes(firstJoke.get("value").id)){
                                    console.log("VEC IMA");
                                    self.doRandom(1);
                                }else{
                                    tmpCheck.push(firstJoke.get("value").id);
                                    self.model.set({oldJokes: tmpCheck});
                                }

                                firstJokeView.render();
                            }
                        });
                    }
                    if(callAgain.type == "click" || callAgain == 2){
                        secondJoke.fetch({
                            url: 'https://api.icndb.com/jokes/random',
                            success: function(){
                                var tmpCheck = self.model.get("oldJokes"); 

                                if(tmpCheck.includes(secondJoke.get("value").id)){
                                    console.log("VEC IMA");
                                    self.doRandom(2);
                                }else{
                                    tmpCheck.push(secondJoke.get("value").id);
                                    self.model.set({oldJokes: tmpCheck});
                                }


                                secondJokeView.render();
                            }
                        });
                    }
                    if(callAgain.type == "click" || callAgain == 3){
                        thirdJoke.fetch({
                            url: 'https://api.icndb.com/jokes/random',
                            success: function(){
                                var tmpCheck = self.model.get("oldJokes"); 

                                if(tmpCheck.includes(thirdJoke.get("value").id)){
                                    console.log("VEC IMA");
                                    self.doRandom(3);
                                }else{
                                    tmpCheck.push(thirdJoke.get("value").id);
                                    self.model.set({oldJokes: tmpCheck});
                                }
                                thirdJokeView.render();
                            }
                        });
                    }
                },
                changeInput: function(e) {
                    var firstJoke = this.model.get("firstJoke"); 
                    var secondJoke = this.model.get("secondJoke"); 
                    var thirdJoke = this.model.get("thirdJoke"); 
                    var firstJokeView = this.model.get("firstJokeView"); 
                    var secondJokeView = this.model.get("secondJokeView"); 
                    var thirdJokeView = this.model.get("thirdJokeView"); 
                    let self = this;

                    var wantedID = document.getElementById("number").value;
                    
                    var y = (parseInt(wantedID)) % this.model.get("value")[(this.model.get("value").length-1)].id;
                    var b = (parseInt(wantedID) + 1) % this.model.get("value")[(this.model.get("value").length-1)].id
                    var g = (parseInt(wantedID) + 2) % this.model.get("value")[(this.model.get("value").length-1)].id;

                    if(parseInt(wantedID) >= this.model.get("value")[(this.model.get("value").length-1)].id){ y++; b++; g++; }
                    else if(parseInt(wantedID) >= this.model.get("value")[(this.model.get("value").length-1)].id-1){ b++; g++; }
                    else if(parseInt(wantedID) >= this.model.get("value")[(this.model.get("value").length-1)].id-2){ g++; }


                    firstJoke.fetch({
                        url: 'https://api.icndb.com/jokes/' + y,
                        success: function(){                                
                            firstJokeView.render();
                        }
                    });
                    secondJoke.fetch({
                        url: 'https://api.icndb.com/jokes/' + b,
                        success: function(){
                            secondJokeView.render();
                        }
                    });
                    thirdJoke.fetch({
                        url: 'https://api.icndb.com/jokes/' + g,
                        success: function(){
                            thirdJokeView.render();
                        }
                    });

                },
                events : {
                    "click #clickButton": "doRandom",
                },
                render: function(){
                    var tmpHTML = 
                    '<span>\
                        <button id="clickButton" >Play with me!</button> \
                        <input type="text" id="number" name="number">\
                    </span>';
                    this.$el.html(tmpHTML);
                    
                    return this;
                }
            });
        return RedView;
});
