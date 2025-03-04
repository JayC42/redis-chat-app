"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type SendMessageActionArgs = {
    content: string; 
    receiverId: string; 
    messageType: "text" | "image";
}

export async function sendMessageAction({content, messageType, receiverId}: SendMessageActionArgs) {
    const {getUser} = getKindeServerSession(); 
    const user = await getUser();

    if(!user) {
        return { success: false, message: "User not authenticated!" }
    }

    const senderId = user.id; 
    const conversationId = `conversation:${senderId}:${receiverId}`;

    return { success: true, conversationId, message: "Message sent successfully" }
}
