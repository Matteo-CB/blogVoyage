// app/api/auth/[...nextauth]/route.js
import { handlers } from "@/utils/auth"; // Ajustez le chemin selon votre configuration

export const { GET, POST } = handlers;
