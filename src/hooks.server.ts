import { AUTHJS_GITHUB_ID, AUTHJS_GITHUB_SECRET } from "$env/static/private"
import GitHub from "@auth/core/providers/github"
import { SvelteKitAuth } from "@auth/sveltekit"

export const handle = SvelteKitAuth({
    providers: [
        GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })
    ],
})
