class UI {
	constructor() {
		this.profile = document.getElementById('profile');
		this.search_container = document.querySelector('.searchContainer');
	}

	// Display profile
	showProfile(user) {
		this.profile.innerHTML = `
			<div class="card card-body mb-3">
				<div class="row">
					<div class="col-md-3"> 
						<img src="${user.avatar_url}" class="img-fluid mb-2" alt="" />
						<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>
					</div>

					<div class="col-md-9">
						<div class="user-info-header mb-3">
							<span class="badge badge-primary">Public repos: ${user.public_repos}</span>

							<span class="badge badge-secondary">Public gists: ${user.public_gists}</span>

							<span class="badge badge-success">Followers: ${user.followers}</span>

							<span class="badge badge-info">Following: ${user.following}</span>
						</div>

						<ul class="list-group">
							<li class="list-group-item">Company: ${user.company ? user.company : 'N/A'}</li>
							<li class="list-group-item">Website/Blog: ${user.blog ? user.blog : 'N/A'}</li>
							<li class="list-group-item">Location: ${user.location ? user.location : 'N/A'}</li>
							<li class="list-group-item">Member Since: ${user.created_at}</li>
						</ul>
					</div>
				</div>
			</div>

			<h3 class="page-heading mb-3">Latest repos</h3>
			<div id="repos"></div>
		`
	}

	//display repos 
	showRepos(repos) {
		let output = '';

		repos.forEach(rep => {
			output += ` 
				<div class="card card-body mb-2">
					<div class="row">
						<div class="col-md-6">
							<a href="${rep.html_url}" target="_blank">${rep.name}</a>
						</div>

						<div class="col-md-6">
							<span class="badge badge-primary">Stars: ${rep.stargazers_count}</span>
							<span class="badge badge-secondary">Watchers: ${rep.watchers_count}</span>
							<span class="badge badge-success">Forks: ${rep.forks_count}</span>
						</div>
					</div>
				</div>
			`
		});

		document.getElementById('repos').innerHTML = output;
	}

	//display alert message 
	showAlert(message = '', className = 'alert alert-info') {
		// clear any alert
		this.clearAlert();
		// create template
		const alert = `<div class="${className}">${message}</div>`;

		this.search_container.insertAdjacentHTML('afterbegin', alert);

		// clear alert hide 2 sec
		setTimeout( () 	=> this.clearAlert(), 2000);
	}

	// clear alert 
	clearAlert() {
		const currentAlert = document.querySelector('.alert');

		if(currentAlert) {
			currentAlert.remove();
		}
	}

	clearProfile() {
		this.profile.innerHTML = ''; 
	}

	profilePreLoad() {
		this.profile.innerHTML = ` 
			<div class="card card-body">
				<img src="ajax.gif" alt="" />
			</div>
		`;
	}
}