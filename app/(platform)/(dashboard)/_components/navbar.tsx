import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="flex items-center fixed top-0 h-14 px-4 border-b w-full z-50 bg-white shadow-sm">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <div>
          <Button
            size="sm"
            className="rounded-sm hidden md:block h-auto  py-1.5 px-2"
          >
            Create
          </Button>
        </div>
        <div>
          <Button
            size="sm"
            className="rounded-sm block md:hidden"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="ml-auto flex items-center">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/organization/:id"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements:{
                avatarBox:{
                  height: 30,
                  width: 30
                }
              }
            }}
          />
      </div>
    </nav>
  );
};
