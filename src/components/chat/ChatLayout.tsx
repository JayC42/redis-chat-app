"use client"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";

interface ChatLayoutProps {
    defaultLayout: number[] | undefined; 
}

const ChatLayout = ({ defaultLayout = [320,480] }: ChatLayoutProps) => {
  return (
    <ResizablePanelGroup 
    direction={"horizontal"}
    className="h-full items-stretch bg-background rounded-lg"
    onLayout = {(sizes:number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
    }}
    > 
    <ResizablePanel>Sidebar</ResizablePanel>
    <ResizableHandle withHandle/>
    <ResizablePanel>right</ResizablePanel>

    </ResizablePanelGroup>
  )
}

export default ChatLayout