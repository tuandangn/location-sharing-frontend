import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import RegionListConainer from '../containers/RegionListContainer';
import RegionPage from '../containers/RegionContainer';
import RegionFormContainer from '../containers/RegionFormContainer';

const RegionRouter = () => {
    const { url } = useRouteMatch();
    return (
        <RegionPage>
            <Switch>
                <Route path={`${url}/edit/:id`} component={RegionFormContainer} />
                <Route path={`${url}/create`} component={RegionFormContainer} />
                <Route path={`${url}`} component={RegionListConainer} />
            </Switch>
        </RegionPage>
    )
};

export default RegionRouter;