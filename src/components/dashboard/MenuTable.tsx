import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  DeltaType,
} from '@tremor/react';

const salesPeople: {
  name: string;
  leads: number;
  sales: string;
  quota: string;
  variance: string;
  region: string;
  delta: string;
  deltaType: DeltaType;
}[] = [
  {
    name: 'Peter Doe',
    leads: 45,
    sales: '1,000,000',
    quota: '1,200,000',
    variance: 'low',
    region: 'Region A',
    delta: 'overperforming',
    deltaType: 'moderateIncrease',
  },
  {
    name: 'Lena Whitehouse',
    leads: 35,
    sales: '900,000',
    quota: '1,000,000',
    variance: 'low',
    region: 'Region B',
    delta: 'average',
    deltaType: 'unchanged',
  },
  {
    name: 'Phil Less',
    leads: 52,
    sales: '930,000',
    quota: '1,000,000',
    variance: 'medium',
    region: 'Region C',
    delta: 'underperforming',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'John Camper',
    leads: 22,
    sales: '390,000',
    quota: '250,000',
    variance: 'low',
    region: 'Region A',
    delta: 'overperforming',
    deltaType: 'increase',
  },
  {
    name: 'Max Balmoore',
    leads: 49,
    sales: '860,000',
    quota: '750,000',
    variance: 'low',
    region: 'Region B',
    delta: 'overperforming',
    deltaType: 'increase',
  },
  {
    name: 'Peter Moore',
    leads: 82,
    sales: '1,460,000',
    quota: '1,500,000',
    variance: 'low',
    region: 'Region A',
    delta: 'average',
    deltaType: 'unchanged',
  },
  {
    name: 'Joe Sachs',
    leads: 49,
    sales: '1,230,000',
    quota: '1,800,000',
    variance: 'medium',
    region: 'Region B',
    delta: 'underperforming',
    deltaType: 'moderateDecrease',
  },
];

export function MenuTable() {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell> Name </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right"> Leads </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right"> Sales ($) </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right"> Quoata ($) </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right"> Variance </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right"> Region </TableHeaderCell>
            <TableHeaderCell textAlignment="text-right"> Status </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell textAlignment="text-right">{item.leads}</TableCell>
              <TableCell textAlignment="text-right">{item.sales}</TableCell>
              <TableCell textAlignment="text-right">{item.quota}</TableCell>
              <TableCell textAlignment="text-right">{item.variance}</TableCell>
              <TableCell textAlignment="text-right">{item.region}</TableCell>
              <TableCell textAlignment="text-right">
                <BadgeDelta deltaType={item.deltaType} text={item.delta} size="xs" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
