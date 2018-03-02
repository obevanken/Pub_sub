class Publisher {
  publish (sometext, eventer){
    eventer.publText(sometext);
    }
}

class Eventer{
  constructor(){
     this.subscribers = new Array();
  }

  subscribe (onPublish){
    this.subscribers.push(onPublish);
  }
  publText (sometext){
    this.subscribers.forEach(function(subscriber) {
        subscriber(sometext);
    });
  }
}

var andrey = new Publisher();
var blog = new Eventer();

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

blog.subscribe(Sasha.tell);
blog.subscribe(Masha.think);

andrey.publish("Heeeey", blog);
