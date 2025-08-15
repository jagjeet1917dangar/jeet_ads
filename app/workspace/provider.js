"use client";

import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react';
import { User } from 'lucide-react';
import { useState } from 'react';
import { UserDetailContext } from '../../context/UserDetailContext';
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from './_components/AppSidebar';
import { SidebarTrigger } from "@/components/ui/sidebar";

function Workspaceprovider({ children }) {
  const createNewUser = useMutation(api.users.CreateNewUser); // ✅ match file name "users.js"
  const { user } = useUser();
  const [userDetail,setUserDetail] = useState();

  useEffect(() => {
    if (user) {
      handleCreateUser();
    }
  }, [user]);

  const handleCreateUser = async () => {
    try {
      const result = await createNewUser({
        name: user?.fullName || "",
        email: user?.primaryEmailAddress?.emailAddress || "",
        picture: user?.imageUrl || "",
      });
      console.log(result);
      setUserDetail(result);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  return (
    <UserDetailContext.Provider value={{userDetail: setUserDetail }}>
      <SidebarProvider>
        <AppSidebar />
        <div className='w-full p-10'>
          <SidebarTrigger />
          {children}</div>
      </SidebarProvider>  
    </UserDetailContext.Provider>
    );
}

export default Workspaceprovider;
