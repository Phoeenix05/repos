import { AUTHJS_GITHUB_ID, AUTHJS_GITHUB_SECRET } from "$env/static/private"
import GitHub from "@auth/core/providers/github"
import { SvelteKitAuth } from "@auth/sveltekit"

export const handle = SvelteKitAuth({
    providers: [
        GitHub({ 
            clientId: AUTHJS_GITHUB_ID, 
            clientSecret: AUTHJS_GITHUB_SECRET 
        }),
    ],
})
