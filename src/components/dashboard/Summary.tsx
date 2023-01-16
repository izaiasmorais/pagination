import { Card, Metric, Text, Flex, BadgeDelta, DeltaType, Color, ColGrid } from '@tremor/react';

const colors: { [key: string]: Color } = {
  increase: 'emerald',
  moderateIncrease: 'emerald',
  unchanged: 'orange',
  moderateDecrease: 'rose',
  decrease: 'rose',
};

const categories: {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: DeltaType;
}[] = [
  {
    title: 'Sales',
    metric: '$ 12,699',
    metricPrev: '$ 9,456',
    delta: '34.3%',
    deltaType: 'moderateIncrease',
  },
  {
    title: 'Profit',
    metric: '$ 40,598',
    metricPrev: '$ 45,564',
    delta: '10.9%',
    deltaType: 'moderateDecrease',
  },
  {
    title: 'Customers',
    metric: '1,072',
    metricPrev: '856',
    delta: '25.3%',
    deltaType: 'moderateIncrease',
  },
];

export function Summmary() {
  return (
    <ColGrid numColsSm={2} numColsLg={3} gapX="gap-x-6" gapY="gap-y-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Flex
            justifyContent="justify-start"
            alignItems="items-baseline"
            spaceX="space-x-3"
            truncate={true}
          >
            <Metric>{item.metric}</Metric>
            <Text truncate={true}>from {item.metricPrev}</Text>
          </Flex>
          <Flex justifyContent="justify-start" spaceX="space-x-2" marginTop="mt-4">
            <BadgeDelta deltaType={item.deltaType} />
            <Flex justifyContent="justify-start" spaceX="space-x-1" truncate={true}>
              <Text color={colors[item.deltaType]}>{item.delta}</Text>
              <Text truncate={true}> to previous month </Text>
            </Flex>
          </Flex>
        </Card>
      ))}
    </ColGrid>
  );
}
