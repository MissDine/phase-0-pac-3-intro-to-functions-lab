function shout(hello) {
    return hello.toUpperCase();
  }
  function whisper(HELLO) {
    return HELLO.toLowerCase();
  }
  function logShout (hello) {
    console.log(hello.toUpperCase( ));
  }function logWhisper (HELLO) {
    console.log(HELLO.toLowerCase( ));
  }
  function sayHiToHeadphonedRoommate (hello) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var lovUnswer = "I would love to!";
    if (hello.toLowerCase(hello) === hello) {
      return cantUnswer;
    }
    else if ("HELLO" === hello) {
        return yesUnswer
      }
    else if ("Let's have dinner together!" === hello) {
      return lovUnswer
    }
  }

