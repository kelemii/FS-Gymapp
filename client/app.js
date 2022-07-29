const $bros = $('.brosbtn');
const $results = $('.results');



// for reference
// const $container = $(".container");
// const $loadTweets = $(".loadTweets");
// const $userTweets = $(".userTweets");
// const $tweedle = $(".tweedle");

// $tweedle.click(() => {
//   let username = prompt('What name do you go by?');
//   let tweedleText = prompt('Type your message here.');
// });
$bros.click(() => {
    $.get("/bros", (res) => {
        $results.text(JSON.stringify(res));
        console.log(res);
    })
});

