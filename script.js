function _0x3919(_0x4d3a40,_0x929918){var _0x63534a=_0x6353();return _0x3919=function(_0x3919af,_0x46d271){_0x3919af=_0x3919af-0x10c;var _0x3c2d6d=_0x63534a[_0x3919af];return _0x3c2d6d;},_0x3919(_0x4d3a40,_0x929918);}var _0x54f199=_0x3919;(function(_0x160481,_0x1f3e24){var _0x17b7d7=_0x3919,_0x3228e6=_0x160481();while(!![]){try{var _0x2b1fdc=parseInt(_0x17b7d7(0x127))/0x1*(parseInt(_0x17b7d7(0x165))/0x2)+parseInt(_0x17b7d7(0x166))/0x3*(parseInt(_0x17b7d7(0x14c))/0x4)+-parseInt(_0x17b7d7(0x153))/0x5*(-parseInt(_0x17b7d7(0x15a))/0x6)+-parseInt(_0x17b7d7(0x118))/0x7*(parseInt(_0x17b7d7(0x113))/0x8)+-parseInt(_0x17b7d7(0x129))/0x9+-parseInt(_0x17b7d7(0x121))/0xa+parseInt(_0x17b7d7(0x125))/0xb*(parseInt(_0x17b7d7(0x136))/0xc);if(_0x2b1fdc===_0x1f3e24)break;else _0x3228e6['push'](_0x3228e6['shift']());}catch(_0x5462c0){_0x3228e6['push'](_0x3228e6['shift']());}}}(_0x6353,0x61f47));const firebaseConfig={'apiKey':_0x54f199(0x11b),'authDomain':'filo-e-vale.firebaseapp.com','databaseURL':_0x54f199(0x147),'projectId':'filo-e-vale','storageBucket':'filo-e-vale.firebasestorage.app','messagingSenderId':'593118517860','appId':_0x54f199(0x10d),'measurementId':_0x54f199(0x13a)};firebase[_0x54f199(0x150)](firebaseConfig);var database=firebase['database'](),valeRef=database[_0x54f199(0x138)](_0x54f199(0x164)),filoRef=database[_0x54f199(0x138)](_0x54f199(0x122)),accumulatedRef=database[_0x54f199(0x138)](_0x54f199(0x15e)),chatRef=database[_0x54f199(0x138)](_0x54f199(0x112)),loggedInUser=null;document[_0x54f199(0x12d)](_0x54f199(0x157),function(){var _0x3d21b0=_0x54f199;localStorage[_0x3d21b0(0x156)](_0x3d21b0(0x13b))&&(loggedInUser=localStorage['getItem'](_0x3d21b0(0x13b)),document[_0x3d21b0(0x137)]('login-container')[_0x3d21b0(0x10f)][_0x3d21b0(0x120)]='none',document[_0x3d21b0(0x137)](_0x3d21b0(0x152))[_0x3d21b0(0x10f)][_0x3d21b0(0x120)]=_0x3d21b0(0x11d),_0x17bc30());const _0x59090e=document['getElementById'](_0x3d21b0(0x15f)),_0x4d156a=document[_0x3d21b0(0x137)](_0x3d21b0(0x145)),_0x53aa36=document[_0x3d21b0(0x137)](_0x3d21b0(0x152));_0x59090e[_0x3d21b0(0x12d)](_0x3d21b0(0x143),function(_0x1e3616){var _0x191f93=_0x3d21b0;_0x1e3616[_0x191f93(0x161)]();const _0x2cae19=document['getElementById']('pin')['value'],_0x1ac9d8=document[_0x191f93(0x137)](_0x191f93(0x142))['value'];if(_0x1ac9d8===_0x191f93(0x122)&&_0x2cae19===_0x191f93(0x159))loggedInUser=_0x191f93(0x123);else{if(_0x1ac9d8===_0x191f93(0x164)&&_0x2cae19===_0x191f93(0x139))loggedInUser=_0x191f93(0x12f);else{_0x4d156a[_0x191f93(0x10f)][_0x191f93(0x120)]=_0x191f93(0x11d);return;}}localStorage[_0x191f93(0x11e)]('loggedInUser',loggedInUser),_0x4d156a[_0x191f93(0x10f)][_0x191f93(0x120)]='none',document[_0x191f93(0x137)]('login-container')[_0x191f93(0x10f)]['display']=_0x191f93(0x146),_0x53aa36[_0x191f93(0x10f)][_0x191f93(0x120)]=_0x191f93(0x11d),_0x17bc30();}),document[_0x3d21b0(0x137)](_0x3d21b0(0x126))[_0x3d21b0(0x12d)](_0x3d21b0(0x131),function(){valeRef['transaction'](function(_0x1f4ab8){return(_0x1f4ab8||0x0)+0x1;});}),document[_0x3d21b0(0x137)]('vale-decrease')[_0x3d21b0(0x12d)](_0x3d21b0(0x131),function(){var _0x2c53b6=_0x3d21b0;valeRef[_0x2c53b6(0x13e)](function(_0x375d90){return(_0x375d90||0x0)-0x1;});}),document[_0x3d21b0(0x137)]('vale-reset')[_0x3d21b0(0x12d)](_0x3d21b0(0x131),function(){var _0x82004=_0x3d21b0;valeRef[_0x82004(0x11a)](_0x82004(0x130))[_0x82004(0x148)](function(_0x251d5a){var _0x42cbc2=_0x82004,_0x11093f=_0x251d5a[_0x42cbc2(0x167)]()||0x0;accumulatedRef[_0x42cbc2(0x13e)](function(_0x18e0b9){return(_0x18e0b9||0x0)+_0x11093f;}),valeRef[_0x42cbc2(0x140)](0x0);});}),document[_0x3d21b0(0x137)](_0x3d21b0(0x133))[_0x3d21b0(0x12d)](_0x3d21b0(0x131),function(){filoRef['transaction'](function(_0x1eef72){return(_0x1eef72||0x0)+0x1;});}),document[_0x3d21b0(0x137)](_0x3d21b0(0x116))[_0x3d21b0(0x12d)](_0x3d21b0(0x131),function(){var _0x2a2a35=_0x3d21b0;filoRef[_0x2a2a35(0x13e)](function(_0x1f4ed4){return(_0x1f4ed4||0x0)-0x1;});}),document[_0x3d21b0(0x137)](_0x3d21b0(0x162))[_0x3d21b0(0x12d)](_0x3d21b0(0x131),function(){var _0x2e7cf=_0x3d21b0;filoRef['once'](_0x2e7cf(0x130))[_0x2e7cf(0x148)](function(_0x4b232c){var _0x5da299=_0x2e7cf,_0x3ae708=_0x4b232c['val']()||0x0;accumulatedRef[_0x5da299(0x13e)](function(_0x14c55e){return(_0x14c55e||0x0)+_0x3ae708;}),filoRef[_0x5da299(0x140)](0x0);});}),valeRef['on']('value',function(_0x448016){var _0x55edd2=_0x3d21b0;document[_0x55edd2(0x137)]('vale-value')[_0x55edd2(0x110)]=_0x448016[_0x55edd2(0x167)]()||0x0;}),filoRef['on'](_0x3d21b0(0x130),function(_0x45f405){var _0x5635ec=_0x3d21b0;document[_0x5635ec(0x137)]('filo-value')[_0x5635ec(0x110)]=_0x45f405[_0x5635ec(0x167)]()||0x0;}),accumulatedRef['on'](_0x3d21b0(0x130),function(_0x321270){var _0x3c9c03=_0x3d21b0;document[_0x3c9c03(0x137)](_0x3c9c03(0x12b))[_0x3c9c03(0x110)]=_0x321270[_0x3c9c03(0x167)]()||0x0;}),document[_0x3d21b0(0x137)](_0x3d21b0(0x14a))[_0x3d21b0(0x12d)](_0x3d21b0(0x131),function(){var _0x4d6216=_0x3d21b0;chatRef[_0x4d6216(0x134)](),document[_0x4d6216(0x137)](_0x4d6216(0x160))[_0x4d6216(0x117)]='';}),chatRef['on']('child_added',function(_0x547786){var _0x49904c=_0x547786['val']();_0x28cc12(_0x49904c);});function _0x28cc12(_0x1d20de){var _0x5da8f7=_0x3d21b0,_0x305f30=document[_0x5da8f7(0x14b)](_0x5da8f7(0x163));_0x305f30[_0x5da8f7(0x12c)]=_0x5da8f7(0x124);var _0x1ff892=new Date(_0x1d20de['timestamp']),_0x2091a0=_0x1ff892[_0x5da8f7(0x114)]();_0x305f30[_0x5da8f7(0x117)]='<span\x20class=\x22message-text\x22>'+_0x1d20de[_0x5da8f7(0x168)]+_0x5da8f7(0x15b)+_0x5da8f7(0x14f)+_0x2091a0+'</span>',document[_0x5da8f7(0x137)](_0x5da8f7(0x160))[_0x5da8f7(0x10e)](_0x305f30);}function _0x17bc30(){var _0x27eb92=_0x3d21b0,_0x514971=document['getElementById'](_0x27eb92(0x144));_0x514971['replaceWith'](_0x514971['cloneNode'](!![])),_0x514971=document[_0x27eb92(0x137)](_0x27eb92(0x144)),_0x514971[_0x27eb92(0x12d)](_0x27eb92(0x143),function(_0x6a29){var _0x1a42ac=_0x27eb92;_0x6a29[_0x1a42ac(0x161)]();var _0xe6b4b3=document[_0x1a42ac(0x137)]('chat-input'),_0x343187=_0xe6b4b3[_0x1a42ac(0x130)]['trim']();if(_0x343187!==''){var _0x20043c=chatRef[_0x1a42ac(0x11f)]();_0x20043c[_0x1a42ac(0x140)]({'text':loggedInUser+':\x20'+_0x343187,'timestamp':firebase[_0x1a42ac(0x13d)][_0x1a42ac(0x14d)][_0x1a42ac(0x135)]}),_0xe6b4b3[_0x1a42ac(0x130)]='';}});}});function requestNotificationPermission(){var _0x291a85=_0x54f199;Notification[_0x291a85(0x155)]!==_0x291a85(0x10c)&&Notification['requestPermission']()[_0x291a85(0x148)](function(_0x1f51cc){var _0x7e6c61=_0x291a85;_0x1f51cc===_0x7e6c61(0x10c)&&console[_0x7e6c61(0x141)](_0x7e6c61(0x119));});}document[_0x54f199(0x12d)](_0x54f199(0x157),requestNotificationPermission);function _0x6353(){var _0x541f06=['innerText','body','chat','8hmQdZC','toLocaleTimeString','icon.png','filo-decrease','innerHTML','3018372mNKWkY','Notifiche\x20abilitate!','once','AIzaSyBZJQU5F9WlxNuqOjo8HE5NKi-iiaGiTFQ','notification','block','setItem','push','display','6345210AitPti','filo','Filo','message','88AordPZ','vale-increase','8SVtxaQ','title','1954881VzrUTr','Messaggio\x20in\x20arrivo:','accumulated-value','className','addEventListener','messaging','Vale','value','click','Permesso\x20per\x20le\x20notifiche\x20concesso.','filo-increase','remove','TIMESTAMP','226788okQszW','getElementById','ref','vale10062004vale','G-JDXM99D8EX','loggedInUser','icon','database','transaction','Impossibile\x20ottenere\x20il\x20permesso\x20per\x20le\x20notifiche.','set','log','user-select','submit','chat-form','login-error','none','https://filo-e-vale-default-rtdb.europe-west1.firebasedatabase.app','then','FCM\x20Token:','clear-chat-btn','createElement','4vOrskJ','ServerValue','isSupported','<span\x20class=\x22message-time\x22>','initializeApp','catch','counter-container','1379330QzuZvO','requestPermission','permission','getItem','DOMContentLoaded','error','filo25042004filo','12fXaFRK','</span>','getToken','onMessage','accumulated','login-form','chat-messages','preventDefault','filo-reset','div','vale','173552CVgWUH','861051KqMhht','val','text','granted','1:593118517860:web:1c37411efed6b089be1d71','appendChild','style'];_0x6353=function(){return _0x541f06;};return _0x6353();}if(firebase['messaging']&&firebase[_0x54f199(0x12e)][_0x54f199(0x14e)]()){const messaging=firebase[_0x54f199(0x12e)]();messaging[_0x54f199(0x154)]()[_0x54f199(0x148)](function(){var _0x13199d=_0x54f199;return console[_0x13199d(0x141)](_0x13199d(0x132)),messaging[_0x13199d(0x15c)]();})[_0x54f199(0x148)](function(_0x4fc023){var _0x296ead=_0x54f199;console[_0x296ead(0x141)](_0x296ead(0x149),_0x4fc023);})[_0x54f199(0x151)](function(_0x4e93fd){var _0xf14ec=_0x54f199;console[_0xf14ec(0x158)](_0xf14ec(0x13f),_0x4e93fd);}),messaging[_0x54f199(0x15d)](function(_0x23695e){var _0x1e2425=_0x54f199;console[_0x1e2425(0x141)](_0x1e2425(0x12a),_0x23695e),Notification[_0x1e2425(0x155)]===_0x1e2425(0x10c)&&new Notification(_0x23695e[_0x1e2425(0x11c)][_0x1e2425(0x128)],{'body':_0x23695e[_0x1e2425(0x11c)][_0x1e2425(0x111)],'icon':_0x23695e[_0x1e2425(0x11c)][_0x1e2425(0x13c)]||_0x1e2425(0x115)});});}
