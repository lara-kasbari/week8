var complete = $(".submit");

complete.on("click", addStory);

function addStory() {
  var story = $(".story");
  var color = $(".color").val();
  var nounPlural = $(".nounPlural").val();
  var noun = $(".noun").val();
  var adjective = $(".adjective").val();
  story.text(
    `Roses are  ${color}, ${nounPlural} are blue, ${noun} is ${adjective} and so are you`
  );

  $(".color").val("");
$(".nounPlural").val("");
$(".noun").val("");
  $(".adjective").val("");
}
