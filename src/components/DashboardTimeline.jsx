import { Timeline, TimelineDot,
         TimelineItem, TimelineSeparator, TimelineConnector,
         TimelineContent } from '@material-ui/lab';
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core';

//Will display timeline of saved gratitudes
//Need to connect to backend

export default function DashboardTimeline() {
    return (
      <Grid   container spacing={4} direction="column" alignItems="center" justify="center" style={{ minHeight: '80vh' }}>
        <Grid item lg={10}>
        <Card>
          <CardHeader title="Gratitudes Timeline" subheader="View a timeline of your past gratitudes" />
          <CardContent>
          <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
          </CardContent>
        </Card>
        </Grid>
      </Grid>

    );
}