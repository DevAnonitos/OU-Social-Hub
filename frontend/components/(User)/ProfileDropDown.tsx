import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { ProfileDropDownProps } from "@/types";

const ProfileDropDown: React.FC<ProfileDropDownProps> = ({
  userName,
  userRole,
  onAccountInfoClick,
  onMyPostsClick,
  onHelpFeedbackClick,
  onLogoutClick,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2">
          <User />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <span className="font-medium">{userName}</span>
            <span className="text-sm text-gray-500">{userRole}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={onAccountInfoClick}>
            <span>Thông tin tài khoản</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onMyPostsClick}>
            <span>Bài viết của tôi</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onHelpFeedbackClick}>
            <span>Trợ giúp & phản hồi</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onLogoutClick}>
          <span>Đăng xuất</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropDown;
