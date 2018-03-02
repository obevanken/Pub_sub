class Eventer{
  constructor(){
    this.rooms = {
      abs: {
        subscribers: []
      }
    };
  }

subscribe (onPublish, title){
    if(title in this.rooms){
          this.rooms[title].subscribers.push(onPublish);
    }
  }

  publText (sometext, title){
      if(title in this.rooms){
          this.rooms[title].subscribers.forEach(function(subscriber) {
          subscriber(sometext);
        })
      }
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
