import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useRouter } from 'solito/navigation'

export function MenuCard() {
    const router = useRouter()
  return (
    <YStack f={1} jc="center" ai="center" gap="$4" bg="$background">
      {/* <Paragraph ta="center" fow="700" col="$blue10">{`User ID: ${id}`}</Paragraph> */}
      <Paragraph ta="center">HappyLin menu Card </Paragraph>
      <Button icon={ChevronLeft} onPress={() => router.back()}>
        Go Home
      </Button>
    </YStack>
  )
  
}
