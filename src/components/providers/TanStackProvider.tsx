"use client"

import  { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

//A core class from tanstack that manages the state, caching, and background updates for queries.
//A new instance of QueryClient is created which will be used to manage all the queries and caching logic for the application.
const queryClient = new QueryClient(); 

const TanStackProvider = ({children}: {children: ReactNode}) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default TanStackProvider; 