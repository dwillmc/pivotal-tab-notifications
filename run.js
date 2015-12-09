function updateTitle() {
    if (window.location.hostname.search("pivotaltracker") != -1) {
      var counter = document.getElementsByClassName("bell")[0].children[0].children[0];
      var notifs = counter.innerText;
      var notifLength = counter.innerText.length;
      if (notifs == 0) {
          if (document.title.startsWith("(")) {
              document.title = "Platform - Pivotal Tracker"
          }
      } else {
          document.title = "(" + notifs + ") " + "Platform - Pivotal Tracker";
      }  
  }
}

setInterval(updateTitle, 1000);
