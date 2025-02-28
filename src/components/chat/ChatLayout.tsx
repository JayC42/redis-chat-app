"use client"
import { useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";

interface ChatLayoutProps {
    defaultLayout: number[] | undefined; 
}

const ChatLayout = ({ defaultLayout = [320,480] }: ChatLayoutProps) => {
    const [isMobile, setIsMobile] = useState(false);
  return (
    <><ResizablePanelGroup
          direction={"horizontal"}
          className="h-full items-stretch bg-background rounded-lg"
          onLayout={(sizes: number[]) => {
              document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
          } }
      >
          <ResizablePanel
              defaultSize={defaultLayout[0]}
              collapsedSize={8}
              collapsible={true}
              minSize={isMobile ? 0 : 24} />
          
          Sidebar</ResizablePanel><ResizableHandle withHandle /><ResizablePanel>right</ResizablePanel></>

    </ResizablePanelGroup>
  )
}

export default ChatLayout