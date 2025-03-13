import { Stack } from 'tamagui';

const Grid = ({ container, spacing = 0, children, ...props }) => {
  return (
    <Stack
      flexDirection={container ? 'row' : 'column'}
      flexWrap={container ? 'wrap' : 'nowrap'}
      gap={spacing}
      {...props}
    >
      {children}
    </Stack>
  );
};

const GridItem = ({ xs, sm, md, lg, xl, children, ...props }) => {
  return (
    <Stack
      flexGrow={1}
      flexBasis={`${(xs / 12) * 100}%`} // Пример адаптации
      {...props}
    >
      {children}
    </Stack>
  );
};

export { Grid, GridItem };
