const searchGithub = async () => {
    const username = document.getElementById('searchInput').value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const detailContainer = document.querySelector(".details");
    const data = await response.json();

    if (response.ok) {
        detailContainer.style.display = "flex";
        document.getElementById("result").innerHTML = `
            <div class="profile">
                <div class="profile-image">
                    <img src="${data.avatar_url}" />
                </div>
                <div class="profile-details">
                    <h2 class="name">${data.name || data.login}</h2>
                    <p class="username">@${data.login}</p>
                </div>
                <p class="bio">${data.bio ? data.bio : "Account doesn't have bio."}</p>
                <div class="stats">
                    <div>
                        <div class="stats-name">Public repos</div>
                        <div class="stats-value">${data.public_repos}</div>
                    </div>
                    <div>
                        <div class="stats-name">Followers</div>
                        <div class="stats-value">${data.followers}</div>
                    </div>
                    <div>
                        <div class="stats-name">Following</div>
                        <div class="stats-value">${data.following}</div>
                    </div>
                </div>
                <div class="media">
                    <p><span class="media-value">${data.location || 'Not available'}</span></p>
                    <p><span class="media-value">${data.blog || 'Not available'}</span></p>
                    <p><span class="media-value">${data.twitter_username || 'Not available'}</span></p>
                    <p><span class="media-value">${data.company || 'Not available'}</span></p>
                </div>
            </div>
        `;
    } else {
        alert(data.message);
    }
}