import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className="grid place-items-center h-screen">
            Centered using Tailwind Grid
        </div>
    );
};

export default Home;
