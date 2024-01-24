'use client';

import { hostname } from "os";
import React from "react";
import { Children, useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children,
}) => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if(!hostname) {
        return null;
    }
    return (
        children
    );
}

export default ClientOnly;