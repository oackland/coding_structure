import React from 'react';
import {ChildAsFC} from './Child';

const Parent = () => {
    return (
        <div>
            <ChildAsFC color="red" onClick={() => console.log('Clicked')}/>
            <ChildAsFC color={''} onClick={function(): void {
                throw new Error('Function not implemented.');
            } }/>
        </div>
    );
};

export default Parent;
