/* Ismael Celis 2010
Simplified WebSocket events dispatcher (no channels, no users)
const socket = new ServerEventsDispatcher();
// bind to server events
socket.bind('some_event', function(data){
  alert(data.name + ' says: ' + data.message)
});
// broadcast events to all connected users
socket.trigger( 'some_event', {name: 'ismael', message : 'Hello world'} );
*/
import IsomorphicWs from "isomorphic-ws";

class ServerEventsDispatcher {
  constructor() {
    this.conn = new IsomorphicWs('ws://localhost:8800/echo');
    this.callbacks = {};

    this.bind = this.bind.bind(this);
    this.unbind = this.unbind.bind(this);
    this.trigger = this.trigger.bind(this);
    this.onmessage = this.onmessage.bind(this);
    this.onclose = this.onclose.bind(this);
    this.onopen = this.onopen.bind(this);
    this.onerror = this.onerror.bind(this);
    this.dispatch = this.dispatch.bind(this);

    // dispatch to the right handlers
    this.conn.onmessage = this.onmessage;

    this.conn.onclose = this.onclose;
    //this.conn.onopen = this.onopen;
    this.conn.addEventListener("open", this.onopen);
  }

  bind (event_name, callback) {
    this.callbacks[event_name] = this.callbacks[event_name] || [];
    this.callbacks[event_name].push(callback);
    return this;// chainable
  };
  unbind (event_name) {
    this.callbacks[event_name] = [];
  }
  trigger (event_name, data) {
    const f = this.trigger
    switch (this.conn.readyState) {
      case 0: // CONNECTING
        // code block
        //This will added to onopen list, take care
        this.conn.addEventListener("open", function() {
          f(event_name, data)
        })
        return this;
      case 1: // OPEN
        const payload = JSON.stringify([event_name, data]);
        this.conn.send(payload); // <= send JSON data to socket server
        return this;
      case 2: // CLOSING
      case 3: //CLOSED
        // try to reconnect/logout
        this.conn = new IsomorphicWs('ws://localhost:8800/echo');
        this.conn.addEventListener("open", function() {
          f(event_name, data)
        })
        return this;
      default:
        return this;
      // code block
    }
  };

  onmessage (evt) {
    const data = JSON.parse(evt.data),
      event_name = data[0],
      message = data[1];
    this.dispatch(event_name, message)
  };

  onclose () { this.dispatch('close', null) }
  onopen () { this.dispatch('open', null) }
  onerror (error) { 
    console.log(`[error] ${error.message}`);
    //todo depend on error try to reconnect
    this.dispatch('error', null) 
  }

  dispatch (event_name, message) {
    const chain = this.callbacks[event_name];
    if (typeof chain == 'undefined') return; // no callbacks for this event
    for (let i = 0; i < chain.length; i++) {
      chain[i](message)
    }
  }

};
let e;
if (process.browser) { 
  e = new ServerEventsDispatcher()
 } else {
   e = null;
 }
export const Server = e

/*
export const ServerEventsDispatcher = function(){
    const conn = new IsomorphicWs('ws://localhost:8800/echo');

    const callbacks = {};

    this.bind = function(event_name, callback){
      callbacks[event_name] = callbacks[event_name] || [];
      callbacks[event_name].push(callback);
      return this;// chainable
    };

    this.trigger2 = function(event_name, data){
      const payload = JSON.stringify([event_name, data]);
      conn.send( payload ); // <= send JSON data to socket server
      return this;
    };

    // dispatch to the right handlers
    conn.onmessage = function(evt){
      const data = JSON.parse(evt.data),
          event_name = data[0],
          message = data[1];
      dispatch(event_name, message)
    };

    conn.onclose = function(){dispatch('close',null)}
    conn.onopen = function(){dispatch('open',null)}

    const dispatch = function(event_name, message){
      const chain = callbacks[event_name];
      if(typeof chain == 'undefined') return; // no callbacks for this event
      for(const i = 0; i < chain.length; i++){
        chain[i]( message )
      }
    }
  };
*/