import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from '../ui/button';
import { 
    DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger, 
    DropdownMenuGroup
} from '../ui/dropdown-menu';


const ProfileDropDown = () => {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"}>
                    Profile
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='bottom' className="w-[350px] h-[225px]">
                <DropdownMenuLabel>
                    My Profile
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/profile"}>
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/setting"}>
                            Settings
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );
};

export default ProfileDropDown;