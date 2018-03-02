class Eventer{
  constructor(){
    this.rooms = new Array({title: "abs", subscribers: []});
  }

subscribe (onPublish, title){
    this.rooms.forEach(function(room){
      if(room.title == title){
          room.subscribers.push(onPublish);
      }
    })
  }

publText (sometext, title){
    this.rooms.forEach(function(room){
      if(room.title == title){
        room.subscribers.forEach(function(subscriber) {
        subscriber(sometext);
        })
      }
    })
  }
}



var Sasha = {
    tell: (news) => {
        console.log('ОО! ТЫ слышал о ' + news);
    }
};

var Masha = {
    think: (news) => {
        console.log('Я думаю о ' + news);
    }
};

var eventer = new Eventer();

eventer.subscribe(Sasha.tell, "abs");
eventer.subscribe(Masha.think, "abs");
eventer.publText("Heeey", "abs");
