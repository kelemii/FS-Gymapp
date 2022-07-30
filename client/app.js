const $bros = $('.brosbtn');
const $results = $('.results');

    $bros.click(() => {
        $results.html('<ul class="brolist">Query Results:</ul>');
        $.get("/bros", (res) => {
        const $list = $('.brolist');
        for (let i=0;i<res.length;i++){
            let current = res[i];
            const { id, firstname, lastname, address, email, gym_id } = current;
            const $bro = $(`<li>ID:${id} Name: ${firstname} ${lastname} Address: ${address} Email: ${email} ${gym_id}</li>`).appendTo($list);
        }
    })
});

