import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RegionForm from '../components/region/RegionForm';
import { regionActions } from '../redux/region';
import { useHistory, useRouteMatch } from 'react-router-dom';

const RegionFormContainer = () => {
    const { id } = useRouteMatch().params;
    const history = useHistory();
    const dispatch = useDispatch();
    const items = useSelector(state => state.region.items);
    const target = useSelector(state => state.region.items[id]);

    function handleItemEdit(data, item) {
        const { name } = data;
        const validateResult = validate(data, item);
        if (!validateResult.success) return validateResult;

        dispatch(regionActions.editRegion({
            original: item,
            data: { name }
        }));

        return history.push("/regions");
    }

    function handleItemCreate(data) {
        const { name } = data;
        const validateResult = validate(data);
        if (!validateResult.success) return validateResult;

        dispatch(regionActions.addRegion({ name }));

        return history.push("/regions");
    }

    function isExist(name) {
        return items.find(i => i.name === name);
    }

    function validate({ name }, item) {
        //validate
        if (!name) {
            return {
                success: false,
                message: 'Name is required'
            };
        }
        const exist = isExist(name);
        if (exist && (!item || exist !== item)) {
            return {
                success: false,
                message: 'Name is existing'
            };
        }
        return {
            success: true
        };
    }

    return (
        <RegionForm item={target} onSubmit={target ? handleItemEdit : handleItemCreate}></RegionForm>
    );
};

export default RegionFormContainer;