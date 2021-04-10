import React from 'react';
import { Page, Text, Square, SquareIcon } from './style';

export default () => {
    return(
        <Page>
            <Square>
                <SquareIcon />
            </Square>
            <Square />
            <Square />
        </Page>
    );
}