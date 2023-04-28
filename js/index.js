//Cofig
discord_url = "https://discord.gg/Hj4y45aXe5"
youtube_url = "https://www.youtube.com/@vuyghu2020?sub_confirmation=1"

// discord button
discord_button = document.createElement("img")
//discord_button.id = "discord"
discord_button.src = "discord.png"
discord_button.onclick = open_discord

// add style to discord button

sise = "50px"
discord_button.style.width = sise;
discord_button.style.height = sise;
discord_button.style.position = "fixed";
discord_button.style.bottom = 10;
discord_button.style.left = 10;
discord_button.style.cursor = "pointer"

// youtube button
youtube_button = document.createElement("img")
youtube_button.src = "youtube.png"
youtube_button.onclick = open_youtube
// add style to youtube button
sise = "50px"
youtube_button.style.width = sise;
youtube_button.style.height = sise;
youtube_button.style.position = "fixed";
youtube_button.style.bottom = 10;
youtube_button.style.left = 70;
youtube_button.style.cursor = "pointer"



// div
socials_div = document.createElement("div");
socials_div.id = "socials_div"
socials_div.appendChild(discord_button)
socials_div.appendChild(youtube_button)


document.body.appendChild(socials_div);

// Functions
function open_discord() {
    window.open(discord_url)
}
function open_youtube() {
    window.open(youtube_url)
}