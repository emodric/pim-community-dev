import React, {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import {Button, Modal, useProgress, ProgressIndicator} from 'akeneo-design-system';
import styled from 'styled-components';
import {Permissions} from './Permissions';
import {PermissionsSummary} from './PermissionsSummary';
import {Authorizations} from './Authorizations';
import {AppWizardData} from '../../../model/Apps/wizard-data';
import {useFetchAppWizardData} from '../../hooks/use-fetch-app-wizard-data';
import {useTranslate} from '../../../shared/translate';
import {PermissionFormProvider, usePermissionFormRegistry} from '../../../shared/permission-form-registry';

const Content = styled.div`
    display: grid;
    grid-template-columns: 260px 593px;
    grid-template-areas: 'LOGO INFO';
`;
const LogoContainer = styled.div`
    grid-area: LOGO;
    padding-right: 40px;
`;
const Logo = styled.img`
    margin: auto;
    max-height: 220px;
    max-width: 220px;
`;

const StyledActionButton = styled(Button)`
    position: fixed;
    top: 40px;
    right: 40px;
`;
const PreviousButton = styled(Button)`
    position: fixed;
    top: 40px;
    left: 80px;
`;
const ProgressIndicatorContainer = styled(ProgressIndicator)`
    width: 456px;
    height: 70px;
    position: fixed;
    bottom: 20px;
`;

export type PermissionsType = {
    [key: string]: any;
};

interface Props {
    clientId: string;
}

export const AppWizardWithSteps: FC<Props> = ({clientId}) => {
    const translate = useTranslate();
    const history = useHistory();
    const [wizardData, setWizardData] = useState<AppWizardData | null>(null);
    const fetchWizardData = useFetchAppWizardData(clientId);
    const steps: string[] = ['authorizations', 'permissions', 'summary'];
    const [isCurrent, next, previous] = useProgress(steps);

    const permissionFormRegistry = usePermissionFormRegistry();
    const [providers, setProviders] = useState<PermissionFormProvider<any>[]>([]);
    const [permissions, setPermissions] = useState<PermissionsType>({});

    useEffect(() => {
        permissionFormRegistry.all().then(providers => setProviders(providers));
    }, []);

    useEffect(() => {
        fetchWizardData().then(setWizardData);
    }, [fetchWizardData]);

    const redirectToMarketplace = () => {
        history.push('/connect/marketplace');
    };

    if (wizardData === null) {
        return null;
    }

    return (
        <Modal
            onClose={redirectToMarketplace}
            closeTitle={translate('akeneo_connectivity.connection.connect.apps.wizard.action.cancel')}
        >
            {!isCurrent('authorizations') && (
                <PreviousButton level={'tertiary'} onClick={previous}>
                    {translate('akeneo_connectivity.connection.connect.apps.wizard.action.previous')}
                </PreviousButton>
            )}

            {isCurrent('authorizations') && (
                <StyledActionButton onClick={next}>
                    {translate('akeneo_connectivity.connection.connect.apps.wizard.action.allow_and_next')}
                </StyledActionButton>
            )}
            {isCurrent('permissions') && (
                <StyledActionButton onClick={next}>
                    {translate('akeneo_connectivity.connection.connect.apps.wizard.action.next')}
                </StyledActionButton>
            )}
            {isCurrent('summary') && (
                <StyledActionButton>
                    {translate('akeneo_connectivity.connection.connect.apps.wizard.action.confirm')}
                </StyledActionButton>
            )}

            <Content>
                <LogoContainer>
                    <Logo src={wizardData.appLogo} alt={wizardData.appName} />
                </LogoContainer>
                {isCurrent('authorizations') && (
                    <Authorizations appName={wizardData.appName} scopeMessages={wizardData.scopeMessages} />
                )}
                {isCurrent('permissions') && (
                    <Permissions
                        appName={wizardData.appName}
                        providers={providers}
                        setPermissions={setPermissions}
                        permissions={permissions}
                    />
                )}
                {isCurrent('summary') && (
                    <PermissionsSummary appName={wizardData.appName} providers={providers} permissions={permissions} />
                )}
            </Content>

            <ProgressIndicatorContainer>
                {steps.map(step => (
                    <ProgressIndicator.Step key={step} current={isCurrent(step)}>
                        {translate(`akeneo_connectivity.connection.connect.apps.wizard.progress.${step}`)}
                    </ProgressIndicator.Step>
                ))}
            </ProgressIndicatorContainer>
        </Modal>
    );
};