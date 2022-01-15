const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/rest-rant/public/images/steak.jpg" alt="mouth watering steak" />
                    <div>
                        Photo by <a href="https://unsplash.com/@alexmunsell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex Munsell</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home