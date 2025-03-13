import { Stack, Text } from 'tamagui';

export const Badge = ({ content, children }) => (
  <Stack position="relative">
    {children}
    {content > 0 && (
      <Stack
        position="absolute"
        top={-5}
        right={-5}
        width={20}
        height={20}
        backgroundColor="$red10"
        borderRadius="$10"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={12} color="white" fontWeight="bold">
          {content}
        </Text>
      </Stack>
    )}
  </Stack>
);
