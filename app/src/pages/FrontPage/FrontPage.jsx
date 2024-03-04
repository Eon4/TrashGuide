//FrontPage
import React from 'react';
import style from './FrontPage.module.scss';
import { Header } from '../../components/Header/Header';
import { FindAndReviewMe } from '../../components/FindandReview/FindandReview';


export const FrontPage = () => {
    return (
        <div>
            <Header />
            <FindAndReviewMe/>
        </div>
    );
};

