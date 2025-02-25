import { Button as TamaguiButton, Text } from 'tamagui'

export const Button = ({ label, onPress }: { label: string, onPress: () => void }) => {
    return (
        <TamaguiButton
            onPress={onPress}
            theme="blue"
            borderRadius={8}
            padding={10}
            backgroundColor="$blue500"
            hoverBackgroundColor="$blue600"
            pressBackgroundColor="$blue700"
        >
            <Text color="$white">{label}</Text>
        </TamaguiButton>
    )
}
