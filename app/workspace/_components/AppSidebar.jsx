import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Settings2Icon, Video, Videotape, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';

const MenuOptions = [
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        path: '/workspace'
    },
    {
        title: 'Create Ad',
        icon: Video,
        path: '/workspace/create-ad'
    },
    {
        title: 'My Videos',
        icon: Videotape,
        path: '/workspace/my-videos'
    },
    {
        title: 'Billing',
        icon: WalletCards,
        path: '/workspace/billing'
    },
    {
        title: 'Settings',
        icon: Settings2Icon,
        path: '/workspace/settings'
    }
];

function AppSidebar() {
    const path = usePathname();
    console.log("Current Path:", path);

    return (
        <Sidebar>
            <SidebarHeader>
                <Image src={'/logo.svg'} alt='logo' width={150} height={0} />
            </SidebarHeader>
            <hr />
            <SidebarContent>
                <SidebarGroup />
                <Button className="w-61 ml-1">
                    + Create a new ad video
                </Button>
                <SidebarGroup />
                <SidebarGroupLabel>
                    Application
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {MenuOptions.map((option, index) => {
                            const isActive =
                                path === option.path ||
                                (option.path !== '/workspace' && path.startsWith(option.path));

                            return (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild className="p-5">
                                        <Link
                                            href={option.path}
                                            className={`flex items-center gap-4 text-[16px] ${
                                                isActive ? 'text-primary bg-blue-100' : ''
                                            }`}
                                        >
                                            <option.icon />
                                            <span>{option.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}

export default AppSidebar;
