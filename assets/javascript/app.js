$(document).ready(function(){
    $("#start-button").click(function(){
        var number = 50;
      $("#start-button").on("click", start);  // starts the games 
      $("#submit").on("click", finish);  
      $("#restart").on("click", restart);  
  // functions
      function start(){
          counter = setInterval(timer, 1000);
          showMe(".question");
          showMe(".answers");
          showMe("#submit");
          hideMe("#start-button");
          hideMe("#restart");
      }
      function timer(){
        number-- // decrements the timer by 1
        $("#show-number").html("<h2>" + number + "</h2>" );
        if (number === 0){
          stop(); 
        }
      }
      function stop(){
          clearInterval(counter); 
          $("#restart").show();
          $(".question").hide();
          $("#submit").hide();
      }
      function finish(){
          number = 1;
          clearInterval(counter); 
          timer();
      }
  
      function restart(){
          number = 50;
          start();
      }
        start(); // calls the start function
    });
  });
  //Here would go a function to check the answers, it would recieve the buttons input and set it === to the correct answer, if not !=== then it would be false
  //I was thinking id use if statement, and use jquery to enter/return the results the results
  //But I ran out of time 