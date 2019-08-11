/* Ismael Celis 2010
Simplified WebSocket events dispatcher
*/
import IsomorphicWs from "isomorphic-ws";
import {ws_server} from './functions.js'
// import * as cookie from 'cookie';

class ServerEventsDispatcher {
  constructor(req, res) {
    this.bind = this.bind.bind(this);
    this.bind$ = this.bind$.bind(this);
    this.bind_ = this.bind_.bind(this);
    this.bind_F = this.bind_F.bind(this);
    this.unbind = this.unbind.bind(this);
    this.unbind_ = this.unbind_.bind(this);
    this.trigger = this.trigger.bind(this);
    this.triggerFile = this.triggerFile.bind(this);
    this.onmessage = this.onmessage.bind(this);
    this.onclose = this.onclose.bind(this);
    this.onopen = this.onopen.bind(this);
    this.onerror = this.onerror.bind(this);
    this.dispatch = this.dispatch.bind(this);
    
    this.setupConnection(req, res)
    this.callbacks = {};
    this.event_meta = "";
    this.meta_data = null;


  }
  setupConnection(req, res) {
    if (!process.browser) { 
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
    const c = process.browser ? "" : req.headers.cookie || null;
    
    this.conn = new IsomorphicWs(ws_server, [], { 'headers': { 'Cookie': c } });
    // dispatch to the right handlers
    this.conn.onmessage = this.onmessage;

    this.conn.onclose = this.onclose;
    //this.conn.onopen = this.onopen;
    this.conn.addEventListener("open", this.onopen);
  }

  bind (event1, event2, no, callback) {
    this.callbacks[JSON.stringify(event1, event2, no)] = this.callbacks[JSON.stringify(event1, event2, no)] || [];
    this.callbacks[JSON.stringify(event1, event2, no)].push(callback);
    return this;// chainable
  };
  unbind_ (event_names) {
    event_names.forEach(([event1, event2, no]) => {
      this.unbind(JSON.stringify(event1, event2, no));
    });
    return this;// chainable
  };
  bind$ (event1, event2, no, callback) {
    this.unbind(event1, event2, no);
    this.bind(event1, event2, no, callback);
    return this;// chainable
  };
  bind_ (event1, event2, no, callback, data) {
    this.unbind(event1, event2, no);
    this.bind(event1, event2, no, callback);
    this.trigger(event1, event2, no, data);
    return this;// chainable
  };
  bind_F (event1, event2, no, callback, data) {
    this.unbind(event1, event2, no);
    this.bind(event1, event2, no, callback);
    this.triggerFile(event1, event2, no, data);
    return this;// chainable
  };
  unbind (event1, event2, no) {
    this.callbacks[event1, event2, no] = [];
  }
  trigger (event1, event2, no, data) {
    const f = this.trigger
    switch (this.conn.readyState) {
      case 0: // CONNECTING
        // code block
        //This will added to onopen list, take care
        this.conn.addEventListener("open", function() {
          f(event1, event2, no, data)
        })
        return this;
      case 1: // OPEN
        const payload = JSON.stringify([event1, event2, no, data]);
        this.conn.send(payload); // <= send JSON data to socket server
        return this;
      case 2: // CLOSING
      case 3: //CLOSED
        // try to reconnect/logout
        this.setupConnection()
        this.conn.addEventListener("open", function() {
          f(event1, event2, no, data)
        })
        return this;
      default:
        return this;
      // code block
    }
  };
  triggerFile (event1, event2, no, data) {
    const f = this.triggerFile
    const f2 = this.trigger
    switch (this.conn.readyState) {
      case 0: // CONNECTING
        // code block
        //This will added to onopen list, take care
        this.conn.addEventListener("open", function() {
          f(event1, event2, no, data)
        })
        return this;
      case 1: // OPEN
        var file = data
        var reader = new FileReader();
        var rawData = new ArrayBuffer();
        const conn = this.conn    
        reader.loadend = function() {

        }
        reader.onload = function(e) {
            rawData = e.target.result;
            // conn.binaryType = "arraybuffer"
            f2("save_image_meta_data", "", "", [event1, event2, no, file.name, file.size, file.type])
            conn.send(rawData);
            // conn.binaryType = "blob"
            //alert("the File has been transferred.")
        }
        reader.readAsArrayBuffer(file);

        return this;
      case 2: // CLOSING
      case 3: //CLOSED
        // try to reconnect/logout
        this.conn = new IsomorphicWs('ws://localhost:8300/echo');
        this.conn.addEventListener("open", function() {
          f(event1, event2, no, data)
        })
        return this;
      default:
        return this;
      // code block
    }
  };

  onmessage (evt) {
    if(typeof evt.data === "string" ) {
      const data = JSON.parse(evt.data),
        event1 = data[0],
        event2 = data[1],
        no = data[2],
        message = data[3];
      this.dispatch(event1, event2, no, message)
    }
    // if(evt.data instanceof ArrayBuffer ){
      else {
      const buffer = evt.data;
      console.log("Received arraybuffer");
      this.dispatch(this.event1, event2, no, buffer)
    }
    // if(evt.data instanceof Blob ){
    //   const buffer = event.data;
    //   console.log("Received arraybuffer");
    //   this.dispatch(this.event_name, buffer)
    // }
  };

  onclose () { this.dispatch('close',"","", null) }
  onopen () { 
    //console.log(this.conn.extensions);
    // console.log("Server Opened")
    this.dispatch('open', "", "", null) }
  onerror (error) { 
    console.log(`[error] ${error.message}`);
    //todo depend on error try to reconnect
    this.dispatch('error', "", "", null) 
  }

  dispatch (event1, event2, no, message) {
    const chain = this.callbacks[JSON.stringify(event1, event2, no)];
    if (typeof chain == 'undefined') return; // no callbacks for this event
    for (let i = 0; i < chain.length; i++) {
      chain[i](message)
    }
  }

};
let e;
if (process.browser) { 
  e = new ServerEventsDispatcher()
  e.bind("take_image_meta","", "", function(data) {
    e.event_name = data[0]
    e.event_meta = data[1]
  });
 } else {
   e = ServerEventsDispatcher;
 }
export const Server = e

/*
export const ServerEventsDispatcher = function(){
    const conn = new IsomorphicWs('ws://localhost:8300/echo');

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
      for(let i = 0; i < chain.length; i++){
        chain[i]( message )
      }
    }
  };
*/