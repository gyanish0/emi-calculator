import { Slider, Table, TableCell, TableRow, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import React from 'react'
import { Pie } from 'react-chartjs-2';
import TableDetails from './TableDetails';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { SliderMarks } from './SkiderMarks';

ChartJS.register(ArcElement, Tooltip, Legend);

const PrettoSlider = withStyles({
    root: {
        color: 'MediumVioletRed',
        height: 10,
    },
    thumb: {
        height: 25,
        width: 25,
        backgroundColor: '#fff',
        border: '3px solid black',
        marginTop: -9,
        marginLeft: -9,
    },
    track: {
        height: 10,
        borderRadius: 4,
    },
    rail: {
        height: 10,
        borderRadius: 4,
    },
})(Slider);

const Home = () => {
    const [pAmount, setPAmount] = React.useState(1155000);
    const [duration, setDuration] = React.useState(7);
    const [interest, setInterest] = React.useState(8.6);
    const maxVal = 6000000;
    const intMax = 20;
    const maxDuration = 360;

    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
    const totalAmt = duration * emi;
    var TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);

    const data = {
        labels: ['Total Interest', 'Total Amount'],
        datasets: [
            {
                data: [TotalAmountOfInterest, pAmount],
                backgroundColor: [
                    'red',
                    'blue',
                ],
                borderColor: [
                    'red',
                    'blue',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div className="CalApp">
                <h2 className="CalHeading">
                    <u>
                        EMI Calculator
                    </u>
                </h2>
                <div>
                    <div>
                        <Typography gutterBottom>
                            <strong>Load Amount</strong>
                            <PrettoSlider value={pAmount} onChange={(e, vAmt) => setPAmount(vAmt)} defaultValue={pAmount} max={maxVal} marks={SliderMarks.markAmt} />
                        </Typography>
                    </div>
                    <div>
                        <Typography gutterBottom>
                            <strong>Interest Rate %</strong>
                            <PrettoSlider value={interest} onChange={(e, vInt) => setInterest(vInt)} defaultValue={interest} max={intMax} marks={SliderMarks.markInt} />
                        </Typography>
                    </div>
                    <div>
                        <Typography gutterBottom>
                            <strong>Tenure (Months)</strong>
                            <PrettoSlider value={duration} onChange={(e, vDur) => setDuration(vDur)} defaultValue={duration} max={maxDuration} marks={SliderMarks.markTenure} />
                        </Typography>
                    </div>
                </div>
                <div className='divider'>
                    <Table>
                        <TableRow>
                            <TableCell className='tableCell'>
                                <TableDetails pAmount={pAmount} interest={interest} duration={duration} totalAmt={totalAmt} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest} />
                            </TableCell>
                        </TableRow>
                    </Table>
                    <div className='pie-data'>
                        <Pie
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home