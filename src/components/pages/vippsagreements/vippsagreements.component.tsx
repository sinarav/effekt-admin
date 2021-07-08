import React from 'react'

import { Page } from "../../style/elements/page.style";
import { MainHeader } from "../../style/elements/headers.style";
import { VippsAgreementList } from '../../modules/vipps/agreementlist/agreementlist';
import { Link } from 'react-router-dom';

export const VippsAgreementsPageComponent: React.FunctionComponent = () => {
    return (
        <Page>
            <MainHeader>Vipps agreements</MainHeader>
            <Link to="vipps/charges">See all charges</Link>
            <VippsAgreementList />
        </Page>
    )
}