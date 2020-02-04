import { actionNames } from './regionActions';

const initialValue = {
    loading: false,
    error: null,
    items: []
}

export default function (state = initialValue, action) {
    switch (action.type) {
        case actionNames.REGION_ADD:
            {
                const item = { ...action.payload, date: Date.now() };
                const regions = [...state.items, item].sort((a, b) => a.date - b.date);
                return { ...state, items: regions };
            }
        case actionNames.REGION_EDIT:
            {
                const { original, data } = action.payload;
                const index = state.items.indexOf(original);
                const item = { ...data };
                let items = state.items;
                if (~index) {
                    items = [...state.items];
                    items[index] = item;
                }
                return { ...state, items: items };
            }
        case actionNames.REGION_REMOVE:
            {
                let index = state.items.indexOf(action.payload);
                let items = state.items;
                if (~index) {
                    items = [...state.items.slice(0, index), ...state.items.slice(index + 1)];
                }
                return { ...state, items, selectedIndex: -1 };
            }
        case actionNames.REGION_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case actionNames.REGION_DATA_REQUEST_FAILED:
            return { ...state, loading: false, error: action.payload };
        case actionNames.REGION_DATA_REQUEST_SUCCESS:
            return { ...state, loading: false, error: null, items: action.payload };
        default:
            return state;
    }
}