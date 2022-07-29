// fetch("/bros")
// .then((res) => res.json())
// .then((games) => {
//     console.log(games);
// })

$.get("/bros", (res) => {
    console.log(res)
})