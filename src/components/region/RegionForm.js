import React, { useState } from 'react';

function RegionForm({ item, onSubmit }) {
    const [name, setName] = useState(item?.name || '');
    const [error, setError] = useState(null);

    function handleSubmit() {
        const data = { name };

        let result = onSubmit(data, item);
        if(result && !result.success) {
            setError(result.message);
        } else if (item == null) {
            setName('');
            setError('');
        }
    }

    return (
        <div>
            <div className="form-group">
                <label htmlFor="r-name">Name</label>
                <div>
                    <input type="text" autoFocus className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                    {
                        error &&
                        <div>
                            <small id="nameHelp" className="form-text text-muted">{error}</small>
                        </div>
                    }
                </div>
            </div>
            <div className="form-group">
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        className={`btn btn-primary ${item?.name === name ? 'disabled' : ''}`}
                        onClick={handleSubmit}>
                        {item != null ? 'Edit' : 'Create '}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegionForm;