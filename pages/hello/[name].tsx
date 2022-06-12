import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import HelloWorld from '../../src/components/hello-world/hello-world';

const HelloPage: NextPage = () => {
    const router = useRouter();
    const { name } = router.query;
    return <HelloWorld name={name as string} />;
};

export default HelloPage;
