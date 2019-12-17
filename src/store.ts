import { AppState } from './models/state'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import watchAll from './root.saga';
import { authReducer } from './authenticate/auth.reducer';
import { donorSelectorReducer } from './components/app/modules/donors/selection/donor-selection.reducer';
import { organizationsReducer } from './store/organizations/organizations.reducer';
import { singleDonationReducer } from './components/app/modules/single-donation/single-donation.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reportProcessingReducer } from './components/app/pages/process/process.reducer';
import { CreateDonorReducer } from './components/app/modules/donors/create/create-donor.reducer';
import { donationsReducer } from './store/donations/donations.reducer';
import { graphingReducer } from './components/app/pages/graphing/graphing.reducer';
import { distributionsReducer } from './store/distributions/distributions.reducer';
import { ownersReducer } from './store/owners/owners.reducer';
import { recieptReducer } from './components/app/modules/donations/reciept/reciept.reducer';

const rootReducer = combineReducers<AppState>({
    auth: authReducer,
    graphing: graphingReducer,
    donorSelector: donorSelectorReducer,
    donorCreation: CreateDonorReducer,
    organizations: organizationsReducer,
    singleDonation: singleDonationReducer,
    reportProcessing: reportProcessingReducer,
    donations: donationsReducer,
    distributions: distributionsReducer,
    dataOwner: ownersReducer,
    reciept: recieptReducer
})

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchAll);

export default Store;