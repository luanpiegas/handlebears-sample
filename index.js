function getRepos() {
    const source = document.querySelector('#template').innerHTML;
    const template = Handlebars.compile(source);
    fetch('https://api.github.com/users/luanpiegas/repos')
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            console.log(data)
            document.querySelector('#output').innerHTML = template({repos: data})
        });
}

getRepos()
