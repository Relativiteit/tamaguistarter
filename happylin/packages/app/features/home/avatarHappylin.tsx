import { Avatar } from 'tamagui'
import { useState } from 'react';


export default function AvatarWithState() {
    // state inside of the function 
    const [isOpen, setIsOpen] = useState(false);


    // function to handle avatar click 
    const handleAvatarClick = () => {
        setIsOpen(prevState => !prevState ); // set state to true when avatar is clicked
        console.log("avatar clicked, iseOpen:", isOpen)
    };

    return (
  <Avatar circular size="$6" onPress={handleAvatarClick}>
    <Avatar.Image 
    accessibilityLabel='Foto van voorgevel restaurant happylin '
    src="https://lh3.googleusercontent.com/p/AF1QipNqzbcZp_F5l12DrBukWgI62H5MvMXBl-3PU4xJ=s680-w680-h510" />

    {/* <Avatar.Fallback bc="white" /> */}

  </Avatar>
    );   
}