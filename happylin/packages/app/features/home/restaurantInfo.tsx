import React, { useState } from 'react';
import { Avatar } from '@tamagui/avatar';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@tamagui/dialog';
import AvatarHappylin from './avatarHappylin';

const RestaurantInfo = () => {
const [isOpen, setIsOpen] = useState(false);
    
  return (
    <Dialog>
      <DialogTrigger asChild>
      <AvatarHappylin/>      
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Welcome to HappyLin</DialogTitle>
        <DialogDescription>
          HappyLin is a family-owned restaurant known for its delicious homemade dumplings and traditional Asian dishes. Come visit us for a wonderful dining experience!
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default RestaurantInfo;
