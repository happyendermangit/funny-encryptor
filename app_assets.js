async function main(){
   const APP_ID = args[1] ?? "1096190356233670716"
   let assets = await (await fetch(`https://discord.com/api/v10/oauth2/applications/${APP_ID}/assets`)).json()
   let result = "ID:${APP_ID}\n```\n" + assets.map(asset=>`• ${asset.id} — ${asset.name} `).join("\n") + "\n```" + "\n" + "" + `To view the assets, use this link: \`https://cdn.discordapp.com/app-assets/${APP_ID}/ASSET_ID.png?size=4096\`**` + args?.[1] ? "" : "(Usage: -t a_assets <app_id>)"
   return result
}
main()
