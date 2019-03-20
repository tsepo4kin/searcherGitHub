class Github {
	constructor() {
		this.client_id = '295ce71d6e4c4e666171';
		this.client_secret = '7bab9b8c24b70f582a46638fba4a5d54d8df562b';
	}

	//Get user by name 
	getUser(name) {
		return new Promise((resolve, reject) => {
			fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
				.then(res => res.json())
				.then(user => resolve(user))
				.catch(err => reject(err));
		})
	}

	// Get repos by name
	getRepos(user) {
		return new Promise((resolve, reject) => {
			if(!user.login) reject('user not found');

			fetch(`https://api.github.com/users/${user.login}/repos?per_page=${5}&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
				.then(res => res.json())
				.then(user => resolve(user))
				.catch(err => reject(err));
		})
	}
}