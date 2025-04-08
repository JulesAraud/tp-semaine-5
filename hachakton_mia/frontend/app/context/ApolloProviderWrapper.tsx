/**
 * Wrapper pour fournir le client Apollo à l'application
 * Configure Apollo Client avec le token d'authentification de l'utilisateur
 */
"use client";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/app/apollo-client";
import { useAppContext } from "@/app/context/appContext";
import { ReactNode } from 'react'

/**
 * Composant enveloppant l'application avec le contexte Apollo Client
 * Récupère le token d'authentification depuis le contexte global
 * 
 * @param {Object} props - Propriétés du composant
 * @param {ReactNode} props.children - Composants enfants à envelopper
 * @returns {JSX.Element} - Composant ApolloProvider configuré
 */
export const ApolloProviderWrapper = ({ children }: { children: ReactNode }) => {
    // Récupération du contexte global de l'application
    const { appState } = useAppContext();
    
    // Création du client Apollo avec le token d'authentification
    const client = createApolloClient(appState?.token);

    // Fourniture du client Apollo aux composants enfants
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};