import React from 'react';
import FormSubscribe from './FormSubscribe';
import TableContent from './TableContent';
import Welcome from './Welcome';


const HomeLayout = ({ tableContent }) => {


    return (
        <div>
        <Welcome></Welcome>
        <FormSubscribe></FormSubscribe>
        <TableContent tableContent={tableContent}> </TableContent>
  
        </div>
    )
}

export default HomeLayout;