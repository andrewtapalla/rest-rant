const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="images\puppy.jpg" width="550" height="450" />
            </main>
        </Def>
    )
}

module.exports = error404