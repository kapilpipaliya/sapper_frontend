import {ServerEventsDispatcher} from './ws_events_dispatcher.js'
import {ws_madmin} from './functions.js'

let e;
if (process.browser) { 
  e = new ServerEventsDispatcher(ws_madmin)
  e.bind(["take_image_meta"], function(data) {
    e.event = data[0] // save value on class.
  }, 1);
 } else {
   e = ServerEventsDispatcher;
 }
export const Server = e