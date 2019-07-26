import React from 'react'
import { Switch, Route, Redirect } from "react-router";
import { HomeComponent } from "./pages/home/home.component";
import MainNavigation from "./nav/nav.component";
import { AdminPanelWrapper } from './admin.component.style';
import { RegisterComponent } from './pages/register/register.component'
import DonorSelectionDialog from './modules/donors/selection/donor-selection-dialog.component';
import DonorsComponent from './pages/donors/donors.component';
import 'react-toastify/dist/ReactToastify.css';
import { EffektToastContainer } from './style/elements/toast/toast.style';
import { ProcessDonations } from './pages/process/process.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActiveOrganizationsAction } from '../../store/organizations/organizations.action';
import { AppState } from '../../models/state';

export const AdminPanel: React.FunctionComponent = () => {
    //TODO: Move someplace where it is run only once
    const dispatch = useDispatch()
    const organizations = useSelector((state: AppState) => state.organizations.active)
    if (!organizations) dispatch(fetchActiveOrganizationsAction.started())

    return (
        <div>
            <AdminPanelWrapper>
                <MainNavigation></MainNavigation>
                <Switch>
                    <Route exact path="/home" component={HomeComponent}></Route>
                    <Route exact path="/register" component={RegisterComponent}></Route>
                    <Route exact path="/register/process" component={ProcessDonations}></Route>
                    <Route exact path="/graphing" render={() => <div>Graphing</div>}></Route>
                    <Route exact path="/reports" component={ReportsComponent}></Route>
                    <Route exact path="/donors" component={DonorsComponent}></Route>
                    <Route exact path="/settings" render={() => <div>Settings</div>}></Route>

                    <Route path="/" render={() => <Redirect to="/home"></Redirect>}></Route>
                </Switch> 
            </AdminPanelWrapper>
            {/* General overlay elements */}
            <EffektToastContainer />
            <DonorSelectionDialog></DonorSelectionDialog>
        </div>
    )
}