import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    marginTop: "23px",
  },
});

// function createData(conference, division, playoff) {
//   return { conference, division, playoff };
// }

// const row = [
//   createData(6.0, 24, 4.0),
// ];

export default function MiniRankTable({rankings}) {
  const classes = useStyles();
  const conf_rank = rankings?.conf_rank
  const div_rank = rankings?.div_rank

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Conference Ranking</TableCell>
            <TableCell align="center">Division Ranking</TableCell>
            {/* <TableCell align="center">Playoff Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={conf_rank}>
              <TableCell align="center">{conf_rank}</TableCell>
              <TableCell align="center">{div_rank}</TableCell>
              {/* <TableCell align="center">{row[0].playoff}</TableCell> */}
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}