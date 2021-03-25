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
    marginTop: "20px",
  },
  cellWidth: {
    minWidth: "100px",
  },
  cellLine: {
    whiteSpace: "pre",
  },
});

export default function MiniDraftTable({draft}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.minWidth} align="center">Year</TableCell>
            <TableCell className={classes.minWidth} align="center">Round</TableCell>
            <TableCell className={classes.minWidth} align="center">Pick</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell className={classes.cellLine} align="center">{draft.year}</TableCell>
              <TableCell align="center">{draft.round}</TableCell>
              <TableCell align="center">{draft.pick}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}