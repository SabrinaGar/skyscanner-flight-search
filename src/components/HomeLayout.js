import React from 'react';
import FormSubscribe from './FormSubscribe';
import TableContent from './TableContent';


const HomeLayout = ({ tableContent }) => {


    return (
        <div>
        <FormSubscribe></FormSubscribe>
        <TableContent tableContent={tableContent}> </TableContent>
        </div>
    )
}

export default HomeLayout;