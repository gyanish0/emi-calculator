import { Table, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

const TableDetails = (props) => {
    return (
        <Table style={{ width: "100%", bprder: "2px solid #ccc" }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className='ETableCellText'>
                        <strong>Loan Amount</strong>
                    </TableCell>
                    <TableCell className='ETableCellVal'>
                        <strong>₹</strong> {props.pAmount}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='ETableCellText'>
                        <strong>Interest %</strong>
                    </TableCell>
                    <TableCell className='ETableCellVal'>
                        {props.interest}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='ETableCellText'>
                        <strong>Tenure (Months)</strong>
                    </TableCell>
                    <TableCell className='ETableCellVal'>
                        {props.duration}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='ETableCellText'>
                        <strong>EMI (Monthly)</strong>
                    </TableCell>
                    <TableCell className='ETableCellVal'>
                        <strong>₹</strong> {props.emi}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='ETableCellText'>
                        <strong>Total Interest</strong>
                    </TableCell>
                    <TableCell className='ETableCellVal'>
                        <strong>₹</strong> {props.TotalAmountOfInterest}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='ETableCellText'>
                        <strong>Total Payment</strong>
                        <br />
                        (Loan Amount + Interest)
                    </TableCell>
                    <TableCell className='ETableCellVal'>
                        <strong>₹</strong> {props.totalAmt ? props.totalAmt : 0}
                    </TableCell>
                </TableRow>
            </TableHead>
        </Table>
    )
}

export default TableDetails