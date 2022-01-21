const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label>Place Name</label>
                            <input className="form-control" id="name" name="name" value={data.place.name} required/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Place Picture</label>
                            <input className="form-control" id="url" name="pic" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label>City</label>
                            <input className="form-control" id="city" name="city" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label>State</label>
                            <input className="form-control" id="state" name="state" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <input className="btn-btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form