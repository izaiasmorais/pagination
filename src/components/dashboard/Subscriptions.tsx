import {
  Card,
  List,
  ListItem,
  Icon,
  Text,
  Bold,
  Flex,
  Title,
  Footer,
  ButtonInline,
  Color,
  Block,
  ColGrid,
} from '@tremor/react';
import { ArrowRightIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import {
  ComputerDesktopIcon,
  ShieldExclamationIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/solid';

type TransactionCategory = {
  name: string;
  icon: any;
  color: Color;
  numTransactions: number;
  amount: string;
};

const march: TransactionCategory[] = [
  {
    name: 'Groceries',
    icon: ShoppingBagIcon,
    color: 'sky',
    numTransactions: 24,
    amount: '$ 230',
  },
  {
    name: 'IT & Office',
    icon: ComputerDesktopIcon,
    color: 'orange',
    numTransactions: 4,
    amount: '$ 990',
  },
  {
    name: 'Travel',
    icon: BriefcaseIcon,
    color: 'pink',
    numTransactions: 11,
    amount: '$ 2,345',
  },
  {
    name: 'Insurance',
    icon: ShieldExclamationIcon,
    color: 'emerald',
    numTransactions: 2,
    amount: '$ 1,450',
  },
];

// const april: TransactionCategory[] = [
//   {
//     name: 'Food',
//     icon: ShoppingBagIcon,
//     color: 'teal',
//     numTransactions: 32,
//     amount: '$ 490',
//   },
//   {
//     name: 'Travel',
//     icon: BriefcaseIcon,
//     color: 'pink',
//     numTransactions: 3,
//     amount: '$ 678',
//   },
//   {
//     name: 'IT & Office',
//     icon: DesktopComputerIcon,
//     color: 'orange',
//     numTransactions: 2,
//     amount: '$ 120',
//   },
//   {
//     name: 'Transport',
//     icon: TruckIcon,
//     color: 'indigo',
//     numTransactions: 12,
//     amount: '$ 560',
//   },
// ];

// const may: TransactionCategory[] = [
//   {
//     name: 'Sports',
//     icon: LightningBoltIcon,
//     color: 'rose',
//     numTransactions: 89,
//     amount: '$ 2,300.90',
//   },
//   {
//     name: 'Groceries',
//     icon: ShoppingBagIcon,
//     color: 'emerald',
//     numTransactions: 9,
//     amount: '$ 1,087',
//   },
//   {
//     name: 'Travel',
//     icon: BriefcaseIcon,
//     color: 'pink',
//     numTransactions: 19,
//     amount: '$ 1,030',
//   },
//   {
//     name: 'Restaurants',
//     icon: HomeIcon,
//     color: 'amber',
//     numTransactions: 8,
//     amount: '$ 129',
//   },
// ];

const months = [
  {
    name: 'March 2022',
    data: march,
  },
];

export function Subscriptions() {
  return (
    <ColGrid gapX="gap-x-6" gapY="gap-y-6">
      {months.map((item) => (
        <Card key={item.name}>
          <Title>Transaction Volume</Title>
          <Text>{item.name}</Text>
          <List marginTop="mt-4">
            {item.data.map((transaction) => (
              <ListItem key={transaction.name}>
                <Flex justifyContent="justify-start" spaceX="space-x-4" truncate={true}>
                  <Icon
                    variant="light"
                    icon={transaction.icon}
                    size="md"
                    color={transaction.color}
                  />
                  <Block truncate={true}>
                    <Text truncate={true}>
                      <Bold>{transaction.name}</Bold>
                    </Text>
                    <Text truncate={true}>{`${transaction.numTransactions} transactions`}</Text>
                  </Block>
                </Flex>
                <Text>{transaction.amount}</Text>
              </ListItem>
            ))}
          </List>
          <Footer>
            <ButtonInline
              size="sm"
              text="View details"
              icon={ArrowRightIcon}
              iconPosition="right"
            />
          </Footer>
        </Card>
      ))}
    </ColGrid>
  );
}
