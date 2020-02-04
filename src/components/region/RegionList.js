import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const RegionListItem = ({ region, index, onDelete }) => {
    const target = `/regions/edit/${index}`;
    const [show, setShow] = useState(false);

    function showToolbar() {
        setShow(true);
    }
    function hideToolbar() {
        setShow(false);
    }

    return (
        <li className="list-group-item" onMouseEnter={showToolbar} onMouseOver={showToolbar} onMouseLeave={hideToolbar} style={{ lineHeight: '31px' }}>
            {region.name}
            <div className={`btn-group btn-group-sm ml-3 ${show ? "" : "d-none"}`} role="group" style={{ verticalAlign: 'top' }}>
                <Link to={target} className="btn btn-light">
                    <i className="fa fa-pencil"></i>
                </Link>
                <button onClick={() => onDelete(region)} type="button" className="btn btn-light">
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
    );
};

const RegionList = ({ regions, onDelete }) => {
    function empty() {
        return (
            <div className="alert alert-dark" role="alert">
                Data is empty!
            </div>
        );
    }

    function list(items, onDelete) {
        return (
            <div className="list-group">
                <ul className="list-group list-group-flush">
                    {items.map(item =>
                        <RegionListItem index={items.indexOf(item)} region={item} key={item.name} onDelete={onDelete} />)}
                </ul>
            </div>
        );
    }

    return (
        <>
            <h1>Regions</h1>
            <div className="my-3">
                {regions.length === 0 ? empty() : list(regions, onDelete)}
            </div>
            <Link to="/regions/create" className="btn btn-primary">
                Create
            </Link>
        </>
    );
};


export default RegionList;