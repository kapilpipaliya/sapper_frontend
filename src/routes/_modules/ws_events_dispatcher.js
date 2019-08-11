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

  bind (event1, callback, handleMultiple=0) {
    this.callbacks[JSON.stringify(event1)] = this.callbacks[JSON.stringify(event1)] || [];
    this.callbacks[JSON.stringify(event1)].push([handleMultiple, callback]); // 0 means unsubscribe using first time
    return this;// chainable
  };
  unbind_ (event_names) {
    event_names.forEach((event1) => {
      this.unbind(JSON.stringify(event1));
    });
    return this;// chainable
  };
  batchBind (events) {
    const payload = []
    for (let i = 0; i < events.length; i++) {
      const e = events[i];
      this.bind(...e)
      payload.push(e)
    }
    return payload;// chainable
  };
  batchBind_T (events) {
    const payload = this.batchBind(events)
    this.trigger(payload)
    return this;// chainable
  };
  bind$ (event1, callback, handleMultiple) {
    this.unbind(event1);
    this.bind(event1, callback, handleMultiple);
    return this;// chainable
  };
  bind_ (event1, callback, data, handleMultiple) {
    this.bind$(event1, callback, handleMultiple);
    this.trigger([[event1, data]]);
    return this;// chainable
  };
  bind_F (event1, callback, data, handleMultiple) {
    this.bind$(event1, callback, handleMultiple);
    this.triggerFile(event1, data);
    return this;// chainable
  };
  unbind (event1) {
    this.callbacks[JSON.stringify(event1)] = [];
  }
  trigger (payload) {
    const f = this.trigger
    switch (this.conn.readyState) {
      case 0: // CONNECTING
        // code block
        //This will added to onopen list, take care
        this.conn.addEventListener("open", function() {
          f(payload)
        })
        return this;
      case 1: // OPEN
        this.conn.send(JSON.stringify(payload)); // <= send JSON data to socket server
        return this;
      case 2: // CLOSING
      case 3: //CLOSED
        // try to reconnect/logout
        this.setupConnection()
        this.conn.addEventListener("open", function() {
          f(payload)
        })
        return this;
      default:
        return this;
      // code block
    }
  };
  triggerFile (event1, data) {
    const f = this.triggerFile
    const f2 = this.trigger
    switch (this.conn.readyState) {
      case 0: // CONNECTING
        // code block
        //This will added to onopen list, take care
        this.conn.addEventListener("open", function() {
          f(event1, data)
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
            f2([[ ["auth", "save_image_meta_data", 0], [event1, file.name, file.size, file.type] ]])
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
          f(event1, data)
        })
        return this;
      default:
        return this;
      // code block
    }
  };

  onmessage (evt) {
    if(typeof evt.data === "string" ) {
      const data = JSON.parse(evt.data);
      for (let i = 0; i < data.length; i++) {
        const e = data[i];
        const event1 = e[0];
        const message = e.splice(1);
        this.dispatch(event1, message)
      }
    }
    // if(evt.data instanceof ArrayBuffer ){
      else {
      const buffer = evt.data;
      console.log("Received arraybuffer");
      this.dispatch(this.event1, buffer)
    }
    // if(evt.data instanceof Blob ){
    //   const buffer = event.data;
    //   console.log("Received arraybuffer");
    //   this.dispatch(this.event_name, buffer)
    // }
  };

  onclose () { this.dispatch(['close',"",0], null) }
  onopen () { 
    //console.log(this.conn.extensions);
    // console.log("Server Opened")
    this.dispatch(['open', "", 0], null) }
  onerror (error) { 
    console.log(`[error] ${error.message}`);
    //todo depend on error try to reconnect
    this.dispatch(['error', "", 0], null) 
  }

  dispatch (event1, message) {
    const chain = this.callbacks[JSON.stringify(event1)];
    if (typeof chain == 'undefined') return; // no callbacks for this event
    for (let i = 0; i < chain.length; i++) {
      chain[i][1](message)
      if(chain[i][0] == 0) {
        this.callbacks[JSON.stringify(event1)] = []
      }
    }
  }

};
let e;
if (process.browser) { 
  e = new ServerEventsDispatcher()
  e.bind(["take_image_meta"], function(data) {
    e.event1 = data[0] // save value on class.
  }, 1);
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