import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { OrganizationProfile } from "@clerk/nextjs"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { Plus } from "lucide-react"

export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Invite members
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    )
}