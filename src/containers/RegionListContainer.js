import React, { useEffect, useMemo } from 'react';
import RegionList from '../components/region/RegionList';
import { regionActions } from '../redux/region';
import { useSelector, useDispatch } from 'react-redux';
import {createSelector} from 'reselect';

const selector = createSelector(
    state => state.region,
    regionState => regionState.items
)

function RegionListContainer() {
    const items = useSelector(selector);
    const dispatch = useDispatch();
    function handleItemRemove(item) {
        dispatch(regionActions.removeRegion(item));
    };

    return (
        <RegionList regions={items} onDelete={handleItemRemove} />
    );
}
export default RegionListContainer;