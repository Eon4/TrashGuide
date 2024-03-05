//FrontPage
import React from 'react';
import style from './FrontPage.module.scss';
import { Header } from '../../components/Header/Header';
import { FindAndReviewMe } from '../../components/FindandReview/FindandReview';
import { FrontContent } from '../../components/FrontContent/FrontContect';


export const FrontPage = () => {
    return (
        <div>
            <Header />
            <FindAndReviewMe/>
            <FrontContent/>
        </div>
    );
};

