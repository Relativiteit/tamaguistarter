import {
    Anchor,
    Button,
    H1,
    Paragraph,
    Separator,
    Sheet,
    useToastController,
    SwitchThemeButton,
    SwitchRouterButton,
    XStack,
    YStack,
    Image,
} from '@my/ui'
import { ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'
import {Card} from 'tamagui'
import AvatarWithState from './avatarHappylin'
  
export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
    const linkTarget = pagesMode ? '/pages-example-user' : '/user'
    const linkProps = useLink({
      href: `${linkTarget}/nate`,
    })
  
    return (
      <YStack f={1} jc="flex-start" ai="center" p="$4" bg="white">
      <YStack w="100%" gap="$4" ai="center">
        <XStack w="100%" jc="center" ai="center" flexWrap="wrap" gap="$4">
          <AvatarWithState />
          {Platform.OS === 'web' && (
            <XStack gap="$4" flexWrap="wrap" jc="center">
              <Button>Voorstraat 123, 3311 ER Dordrecht</Button>
              <Button>+31 6 3888 6883</Button>
              <SwitchThemeButton />
            </XStack>
          )}
        </XStack>

        <H1 ta="center" col="$color12">
          Happylin Restaurant
        </H1>
        <Paragraph col="$color10" ta="center">
          Authentic Chinese cuisine in the heart of Dordrecht
        </Paragraph>
      </YStack>

      <Separator my="$4" />
      

        <YStack gap="$4" ai="center">
          <H1 ta="center" col="$color12">
            Happylin Restaurant
          </H1>
          <Paragraph col="$color10" ta="center">
            Authentic Chinese  cuisine in the heart of Dordrecht
          </Paragraph>
          <Separator />
          <H1 ta="center" col="$color11" size="$8">
            Our Menu
          </H1>
          <XStack gap="$4" fw="wrap" jc="center">
            <Card elevate size="$5">
              <Card.Header>
                <H1 size="$6">Appetizers</H1>
              </Card.Header>
              <Card.Footer p="$2">
                <Image
                  source={{ uri: 'https://example.com/appetizers-menu.jpg' }}
                  width={200}
                  height={300}
                  resizeMode="contain"
                />
              </Card.Footer>
            </Card>
            <Card elevate size="$5">
              <Card.Header>
                <H1 size="$6">Main Courses</H1>
              </Card.Header>
              <Card.Footer p="$2">
                <Image
                  source={{ uri: 'https://example.com/main-courses-menu.jpg' }}
                  width={200}
                  height={300}
                  resizeMode="contain"
                />
              </Card.Footer>
            </Card>
            <Card elevate size="$5">
              <Card.Header>
                <H1 size="$6">Desserts</H1>
              </Card.Header>
              <Card.Footer p="$2">
                <Image
                  source={{ uri: 'https://example.com/desserts-menu.jpg' }}
                  width={200}
                  height={300}
                  resizeMode="contain"
                />
              </Card.Footer>
            </Card>
          </XStack>
        </YStack>
  
        <Button {...linkProps}>Link to user</Button>
  
        <SheetDemo />
      </YStack>
    )
  }
  
  function SheetDemo() {
    const toast = useToastController()
  
    const [open, setOpen] = useState(false)
    const [position, setPosition] = useState(0)
  
    return (
      <>
        <Button
          size="$6"
          icon={open ? ChevronDown : ChevronUp}
          circular
          onPress={() => setOpen((x) => !x)}
        />
        <Sheet
          modal
          animation="medium"
          open={open}
          onOpenChange={setOpen}
          snapPoints={[80]}
          position={position}
          onPositionChange={setPosition}
          dismissOnSnapToBottom
        >
          <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
          <Sheet.Handle bg="$gray8" />
          <Sheet.Frame ai="center" jc="center" gap="$10" bg="$color2">
            <XStack gap="$2">
              <Paragraph ta="center">Made by</Paragraph>
              <Anchor col="$blue10" href="https://twitter.com/natebirdman" target="_blank">
                @natebirdman,
              </Anchor>
              <Anchor
                color="$purple10"
                href="https://github.com/tamagui/tamagui"
                target="_blank"
                rel="noreferrer"
              >
                give it a ⭐️
              </Anchor>
            </XStack>
  
            <Button
              size="$6"
              circular
              icon={ChevronDown}
              onPress={() => {
                setOpen(false)
                toast.show('Sheet closed!', {
                  message: 'Just showing how toast works...',
                })
              }}
            />
          </Sheet.Frame>
        </Sheet>
      </>
    )
  }
