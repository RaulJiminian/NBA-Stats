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

export default function MiniSeasonTable({currentTeamStanding}) {
  const classes = useStyles();

  const wins = currentTeamStanding?.records?.find((record) => record.record_type === "last_10")?.wins
  const losses = currentTeamStanding?.records?.find((record) => record.record_type === "last_10")?.losses
  const streakType = currentTeamStanding?.streak?.kind
  const streakLength = currentTeamStanding?.streak?.length
  const gamesBehindConf = currentTeamStanding?.games_behind?.conference

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.minWidth} align="center">Last 10 Games</TableCell>
            <TableCell className={classes.minWidth} align="center">Streak ({streakType === "win" ? "wins": "losses"})</TableCell>
            <TableCell className={classes.minWidth} align="center">Games Behind (Conf.)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={gamesBehindConf}>
              <TableCell className={classes.cellLine} align="center">{`${wins} wins - ${losses} losses`}</TableCell>
              <TableCell align="center">{streakType === "win" ? `${streakLength} W` : `${streakLength} L`}</TableCell>
              <TableCell align="center">{gamesBehindConf === 0 ? "1st Place" : gamesBehindConf}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}