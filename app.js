class Eventer{
  constructor(){
    this.rooms = {};
  }

subscribe (onPublish, title){
  if(!Array.isArray(this.rooms[title])){
    this.rooms[title] = [];
  }
    if(title in this.rooms){
          this.rooms[title].push(onPublish);
    }
  }

  publText (sometext, title){
      if(title in this.rooms){
          this.rooms[title].forEach(function(subscriber) {
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
eventer.subscribe(Masha.think, "bca");
eventer.publText("Heeey", "abs");
eventer.publText("Привет", "bca");
