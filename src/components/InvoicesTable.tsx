import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
} from '@tremor/react';
import { salesPeople } from '../mocks/salesPeople';

export function InvoicesTable() {
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
